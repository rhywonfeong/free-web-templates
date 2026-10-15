import React, { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';

// --- GAME CONFIGURATION ---
const CONFIG = {
  FPS: 60,
  GRAVITY: 0.85,
  JUMP_FORCE: 16,
  BASE_SPEED: 7,
  MAX_SPEED: 18,
  SPEED_INCREMENT: 0.003,
  PLAYER_X: 120, // Fixed horizontal position for runners
  RUNNER_SIZE: 32,
  OBSTACLE_WIDTH: 32,
  OBSTACLE_HEIGHT: 44,
  SPAWN_MIN_GAP: 350,
  SPAWN_MAX_GAP: 700,
};

// --- SYNTH AUDIO ENGINE ---
let audioCtx = null;
const sfx = {
  init: () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
  },
  playTone: (freq, type, duration, vol = 0.1, slideFreq = null) => {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      if (slideFreq) {
        osc.frequency.exponentialRampToValueAtTime(slideFreq, audioCtx.currentTime + duration);
      }
      
      gain.gain.setValueAtTime(vol, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
      
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playback failed", e);
    }
  },
  jump: (isRobot = false) => {
    // Robot has a softer, lower-pitched jump sound
    sfx.playTone(isRobot ? 300 : 400, 'square', 0.15, isRobot ? 0.01 : 0.03, isRobot ? 400 : 600);
  },
  crash: () => {
    sfx.playTone(150, 'sawtooth', 0.5, 0.05, 40);
  },
  start: () => {
    sfx.playTone(440, 'sine', 0.1, 0.05);
    setTimeout(() => sfx.playTone(554, 'sine', 0.1, 0.05), 100);
    setTimeout(() => sfx.playTone(659, 'sine', 0.2, 0.05), 200);
  },
  win: () => {
    sfx.playTone(440, 'square', 0.1, 0.05);
    setTimeout(() => sfx.playTone(554, 'square', 0.1, 0.05), 100);
    setTimeout(() => sfx.playTone(659, 'square', 0.1, 0.05), 200);
    setTimeout(() => sfx.playTone(880, 'square', 0.3, 0.05), 300);
  },
  lose: () => {
    sfx.playTone(300, 'sawtooth', 0.2, 0.05, 250);
    setTimeout(() => sfx.playTone(250, 'sawtooth', 0.2, 0.05, 200), 200);
    setTimeout(() => sfx.playTone(200, 'sawtooth', 0.4, 0.05, 100), 400);
  }
};

export default function App() {
  // GAME STATES: 'menu', 'playing', 'gameover'
  const [gameState, setGameState] = useState('menu');
  const [winner, setWinner] = useState(null); // 'player', 'robot', 'tie'
  
  // We use standard state for rendering so React can draw it, 
  // but we update it via a requestAnimationFrame loop driven by a mutable ref for physics precision.
  const [renderData, setRenderData] = useState({
    playerY: 0,
    robotY: 0,
    obstacles: [],
    distance: 0,
    speed: CONFIG.BASE_SPEED,
    playerDead: false,
    robotDead: false
  });

  // Mutable game state to avoid stale closures in the loop
  const engineRef = useRef({
    isRunning: false,
    lastTime: 0,
    speed: CONFIG.BASE_SPEED,
    distance: 0,
    lastSpawnDistance: 0,
    nextSpawnGap: 500,
    player: { y: 0, velocity: 0, isDead: false },
    robot: { y: 0, velocity: 0, isDead: false, targetObsId: null },
    obstacles: []
  });

  // Request Animation Frame ID
  const rafRef = useRef(null);

  // --- CORE PHYSICS & GAME LOOP ---
  const updatePhysics = useCallback(() => {
    const state = engineRef.current;
    if (!state.isRunning) return;

    // Increase difficulty over time
    if (state.speed < CONFIG.MAX_SPEED) {
      state.speed += CONFIG.SPEED_INCREMENT;
    }
    state.distance += state.speed;

    // 1. Move Obstacles & Spawn new ones
    state.obstacles = state.obstacles.filter(obs => obs.x + obs.w > -100); // Remove off-screen
    state.obstacles.forEach(obs => {
      obs.x -= state.speed;
    });

    if (state.distance - state.lastSpawnDistance > state.nextSpawnGap) {
      state.obstacles.push({
        id: Math.random().toString(36).substr(2, 9),
        x: window.innerWidth > 1000 ? window.innerWidth : 1000,
        w: CONFIG.OBSTACLE_WIDTH,
        h: CONFIG.OBSTACLE_HEIGHT + (Math.random() > 0.7 ? 15 : 0) // Sometimes taller
      });
      state.lastSpawnDistance = state.distance;
      // Gap decreases slightly as speed increases to keep it challenging
      const speedFactor = (state.speed / CONFIG.BASE_SPEED);
      state.nextSpawnGap = (CONFIG.SPAWN_MIN_GAP + Math.random() * (CONFIG.SPAWN_MAX_GAP - CONFIG.SPAWN_MIN_GAP)) / speedFactor;
    }

    // 2. Player Physics
    if (!state.player.isDead) {
      state.player.y += state.player.velocity;
      if (state.player.y > 0) {
        state.player.velocity -= CONFIG.GRAVITY;
      } else {
        state.player.y = 0;
        state.player.velocity = 0;
      }
    }

    // 3. Robot Physics & AI
    if (!state.robot.isDead) {
      state.robot.y += state.robot.velocity;
      if (state.robot.y > 0) {
        state.robot.velocity -= CONFIG.GRAVITY;
      } else {
        state.robot.y = 0;
        state.robot.velocity = 0;

        // --- ROBOT AI LOGIC ---
        // Find the next obstacle approaching the robot
        const nextObs = state.obstacles.find(o => o.x + o.w > CONFIG.PLAYER_X);
        if (nextObs) {
          const distToObs = nextObs.x - (CONFIG.PLAYER_X + CONFIG.RUNNER_SIZE);
          
          // Calculate when to jump. We want to jump slightly before hitting it.
          // Distance covered during ascent = roughly speed * (JUMP_FORCE / GRAVITY) * factor
          const safeJumpDist = state.speed * (CONFIG.JUMP_FORCE / CONFIG.GRAVITY) * 0.6;
          
          if (distToObs < safeJumpDist && distToObs > 0) {
            // Margin of error: Robot makes mistakes more often at higher speeds
            const mistakeChance = 0.01 + ((state.speed - CONFIG.BASE_SPEED) * 0.005);
            
            if (Math.random() > mistakeChance) {
              state.robot.velocity = CONFIG.JUMP_FORCE; // Good jump
              sfx.jump(true); // Robot jump sound
            } else {
              // Mistake: hesitate for a frame or two (don't jump now)
              // It might catch it next frame, or it might be too late
            }
          }
        }
      }
    }

    // 4. Collision Detection (AABB)
    const checkCollision = (runnerY) => {
      const runnerBox = {
        left: CONFIG.PLAYER_X,
        right: CONFIG.PLAYER_X + CONFIG.RUNNER_SIZE - 4, // slight leniency hit-box
        bottom: runnerY,
        top: runnerY + CONFIG.RUNNER_SIZE - 4
      };

      for (let obs of state.obstacles) {
        const obsBox = {
          left: obs.x + 4, // leniency
          right: obs.x + obs.w - 4,
          bottom: 0,
          top: obs.h - 4
        };

        if (
          runnerBox.right > obsBox.left &&
          runnerBox.left < obsBox.right &&
          runnerBox.bottom < obsBox.top
        ) {
          return true; // Boom
        }
      }
      return false;
    };

    if (!state.player.isDead && checkCollision(state.player.y)) {
      state.player.isDead = true;
      sfx.crash();
    }
    if (!state.robot.isDead && checkCollision(state.robot.y)) {
      state.robot.isDead = true;
      sfx.crash();
    }

    // 5. Check Win/Loss Condition
    if (state.player.isDead || state.robot.isDead) {
      state.isRunning = false; // Stop game loop immediately
      
      let matchWinner = 'tie';
      if (state.player.isDead && !state.robot.isDead) matchWinner = 'robot';
      if (!state.player.isDead && state.robot.isDead) matchWinner = 'player';
      
      setTimeout(() => {
        setWinner(matchWinner);
        setGameState('gameover');
        
        if (matchWinner === 'player') {
          sfx.win();
        } else {
          sfx.lose();
        }
      }, 500); // slight pause before showing game over screen
    }

    // 6. Update Render State
    setRenderData({
      playerY: state.player.y,
      robotY: state.robot.y,
      obstacles: [...state.obstacles],
      distance: Math.floor(state.distance / 10),
      speed: state.speed,
      playerDead: state.player.isDead,
      robotDead: state.robot.isDead
    });

  }, []);

  const gameLoop = useCallback((time) => {
    if (engineRef.current.isRunning) {
      updatePhysics();
      rafRef.current = requestAnimationFrame(gameLoop);
    }
  }, [updatePhysics]);

  // --- CONTROLS ---
  const handleJump = useCallback(() => {
    sfx.init(); // Initialize audio context on first user interaction
    
    if (gameState === 'playing' && engineRef.current.player.y === 0 && !engineRef.current.player.isDead) {
      engineRef.current.player.velocity = CONFIG.JUMP_FORCE;
      sfx.jump(false); // Player jump sound
    } else if (gameState === 'menu' || gameState === 'gameover') {
      startGame();
    }
  }, [gameState]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        e.preventDefault();
        handleJump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleJump]);

  // --- GAME LIFECYCLE ---
  const startGame = () => {
    sfx.init();
    sfx.start();
    
    engineRef.current = {
      isRunning: true,
      speed: CONFIG.BASE_SPEED,
      distance: 0,
      lastSpawnDistance: 0,
      nextSpawnGap: 600,
      player: { y: 0, velocity: 0, isDead: false },
      robot: { y: 0, velocity: 0, isDead: false },
      obstacles: []
    };
    setWinner(null);
    setGameState('playing');
    
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Calculate dynamic grid speed based on game speed
  const gridAnimationDuration = renderData.speed ? `${100 / renderData.speed}s` : '2s';

  return (
    <div 
      className="relative w-full h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden touch-none"
      onClick={handleJump}
    >
      {/* Background styling */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Dynamic scrolling background when playing */}
      {gameState === 'playing' && (
        <div 
          className="absolute inset-0 z-0 bg-grid-pattern-moving opacity-40 pointer-events-none"
          style={{ animationDuration: gridAnimationDuration }}
        ></div>
      )}

      {/* --- HUD --- */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20 pointer-events-none">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <iconify-icon icon="solar:gamepad-bold-duotone" class="text-cyan-400"></iconify-icon>
            NEON DASH
          </h1>
          <p className="text-slate-400 text-sm font-medium tracking-wide">SURVIVE LONGER THAN THE ROBOT</p>
        </div>
        
        <div className="text-right flex flex-col items-end">
          <div className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tighter">
            {renderData.distance.toString().padStart(5, '0')}
          </div>
          <div className="text-cyan-400/80 text-sm font-mono font-medium flex items-center gap-1">
            <iconify-icon icon="solar:bolt-bold"></iconify-icon>
            SPEED: {renderData.speed.toFixed(1)}
          </div>
        </div>
      </div>

      {/* --- GAME TRACKS --- */}
      <div className="w-full max-w-5xl h-[600px] flex flex-col justify-center relative z-10 my-auto pointer-events-none border-y border-slate-800/50 bg-slate-900/40 backdrop-blur-sm">
        
        {/* PLAYER TRACK (TOP) */}
        <div className="flex-1 relative border-b-2 border-cyan-500/30 overflow-hidden">
          <div className="absolute top-4 left-4 flex items-center gap-2 text-cyan-400 font-semibold tracking-wider text-sm opacity-50">
            <iconify-icon icon="solar:user-bold"></iconify-icon>
            PLAYER 1
          </div>
          
          <Track 
            runnerY={renderData.playerY} 
            obstacles={renderData.obstacles} 
            color="cyan" 
            isDead={renderData.playerDead}
          />
        </div>

        {/* ROBOT TRACK (BOTTOM) */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute top-4 left-4 flex items-center gap-2 text-rose-400 font-semibold tracking-wider text-sm opacity-50">
            <iconify-icon icon="solar:cpu-bold"></iconify-icon>
            AI ROBOT
          </div>
          
          <Track 
            runnerY={renderData.robotY} 
            obstacles={renderData.obstacles} 
            color="rose"
            isDead={renderData.robotDead}
            isRobot={true}
          />
        </div>

        {/* Center divider glow */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"></div>
      </div>

      {/* --- OVERLAYS --- */}
      
      {/* Menu Overlay */}
      {gameState === 'menu' && (
        <div className="absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center p-6">
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl max-w-md w-full text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 glow-cyan">
              <iconify-icon icon="solar:play-bold" class="text-5xl text-cyan-400"></iconify-icon>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Ready to Race?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              You are racing against an advanced AI. Tap the screen or press <kbd className="bg-slate-800 text-slate-200 px-2 py-1 rounded-md text-xs mx-1 font-mono">SPACE</kbd> to jump. Last one alive wins.
            </p>
            <button 
              onClick={(e) => { e.stopPropagation(); startGame(); }}
              className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-lg transition-all active:scale-95 glow-cyan"
            >
              START RACE
            </button>
          </div>
        </div>
      )}

      {/* Game Over Overlay */}
      {gameState === 'gameover' && (
        <div className="absolute inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center p-6 transition-opacity duration-500">
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl max-w-md w-full text-center flex flex-col items-center">
            
            {winner === 'player' && (
              <>
                <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 glow-cyan">
                  <iconify-icon icon="solar:cup-star-bold" class="text-5xl text-cyan-400"></iconify-icon>
                </div>
                <h2 className="text-4xl font-bold text-cyan-400 mb-2 tracking-tight">YOU WON!</h2>
                <p className="text-slate-300 mb-6">The AI made a fatal error.</p>
              </>
            )}

            {winner === 'robot' && (
              <>
                <div className="w-20 h-20 rounded-2xl bg-rose-500/20 flex items-center justify-center mb-6 glow-rose">
                  <iconify-icon icon="solar:ghost-bold" class="text-5xl text-rose-400"></iconify-icon>
                </div>
                <h2 className="text-4xl font-bold text-rose-400 mb-2 tracking-tight">ROBOT WINS</h2>
                <p className="text-slate-300 mb-6">You were eliminated.</p>
              </>
            )}

            {winner === 'tie' && (
              <>
                <div className="w-20 h-20 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6 glow-amber">
                  <iconify-icon icon="solar:shield-cross-bold" class="text-5xl text-amber-400"></iconify-icon>
                </div>
                <h2 className="text-4xl font-bold text-amber-400 mb-2 tracking-tight">DRAW!</h2>
                <p className="text-slate-300 mb-6">Mutually assured destruction.</p>
              </>
            )}

            <div className="w-full bg-slate-950/50 rounded-xl p-4 mb-8 border border-slate-800/50 flex flex-col items-center">
              <span className="text-slate-500 text-sm font-medium mb-1">FINAL SCORE</span>
              <span className="text-3xl font-mono font-bold text-white">{renderData.distance}</span>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); startGame(); }}
              className="w-full py-4 bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-xl text-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <iconify-icon icon="solar:restart-bold"></iconify-icon>
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}

      {/* Control Hint at bottom (hidden on mobile mostly due to touch interaction) */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-slate-500 text-sm font-medium hidden md:block z-20 pointer-events-none">
        Press <span className="text-white bg-slate-800 px-2 py-1 rounded text-xs mx-1 font-mono">SPACEBAR</span> to jump
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function Track({ runnerY, obstacles, color, isDead, isRobot = false }) {
  // Styles based on character
  const isCyan = color === 'cyan';
  const colorClass = isCyan ? 'bg-cyan-400 glow-cyan' : 'bg-rose-500 glow-rose';
  const obsColorClass = isCyan ? 'bg-amber-400/90 glow-amber' : 'bg-amber-500/80';
  
  return (
    <div className="absolute inset-0 flex items-end pb-[2px]">
      {/* Ground Line visual */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] w-full ${isCyan ? 'bg-cyan-500/20' : 'bg-rose-500/20'}`}></div>

      {/* Render Runner (Player/Robot) */}
      <div 
        className={clsx(
          `absolute left-[120px] w-[32px] h-[32px] rounded-sm flex items-center justify-center transition-opacity`,
          colorClass,
          isDead ? 'opacity-0 scale-150 transition-all duration-300' : 'opacity-100',
          isRobot && !isDead && 'rounded-tr-xl' // give robot a slightly different shape
        )}
        style={{ bottom: `${runnerY}px` }}
      >
        {/* Inner detail for runner */}
        <div className="w-1/2 h-1/2 bg-white/30 rounded-sm"></div>
        {isRobot && <div className="absolute -top-2 right-1 w-1 h-3 bg-rose-400 rounded-t-full"></div>}
      </div>

      {/* Render Death Particle Explosion (simple CSS effect when dead) */}
      {isDead && (
        <div 
          className={`absolute left-[120px] w-[32px] h-[32px] flex items-center justify-center`}
          style={{ bottom: `${runnerY}px` }}
        >
          <div className={clsx("w-full h-full rounded-full animate-ping opacity-75", colorClass)}></div>
        </div>
      )}

      {/* Render Obstacles */}
      {obstacles.map(obs => (
        <div
          key={obs.id}
          className={clsx(
            "absolute bottom-0 clip-triangle",
            obsColorClass
          )}
          style={{ 
            left: `${obs.x}px`, 
            width: `${obs.w}px`, 
            height: `${obs.h}px` 
          }}
        />
      ))}
    </div>
  );
}