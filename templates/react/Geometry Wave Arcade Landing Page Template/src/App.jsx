import React, { useEffect, useRef, useState, useCallback } from 'react';

// Game Constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;
const PLAYER_X = 150;
const PLAYER_SIZE = 16;
const WAVE_SPEED_Y = 8;     // How fast it moves up/down
const BASE_SPEED_X = 6;     // Initial scroll speed
const TRAIL_LENGTH = 15;
const PILLAR_WIDTH = 60;
const MIN_GAP = 140;
const MAX_GAP = 220;

export default function App() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // UI State
  const [gameState, setGameState] = useState('MENU'); // MENU, PLAYING, GAMEOVER
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem('waveHighScore') || '0', 10)
  );

  // Mutable Game Engine State (Refs for performance to avoid re-renders during gameplay)
  const engine = useRef({
    playing: false,
    y: GAME_HEIGHT / 2,
    isHolding: false,
    speedX: BASE_SPEED_X,
    trail: [],
    pillars: [],
    score: 0,
    distance: 0,
    particles: []
  });

  const requestRef = useRef();

  // Initialize/Reset Game
  const initGame = useCallback(() => {
    engine.current = {
      ...engine.current,
      playing: true,
      y: GAME_HEIGHT / 2,
      isHolding: false,
      speedX: BASE_SPEED_X,
      trail: Array(TRAIL_LENGTH).fill({ x: PLAYER_X, y: GAME_HEIGHT / 2 }),
      pillars: [],
      score: 0,
      distance: 0,
      particles: []
    };
    
    // Initial pillars
    for (let i = 0; i < 5; i++) {
      spawnPillar(GAME_WIDTH + i * 300);
    }
    
    setScore(0);
    setGameState('PLAYING');
  }, []);

  const spawnPillar = (xPos) => {
    // Generate a gap with varying height and position
    const gapSize = Math.random() * (MAX_GAP - MIN_GAP) + MIN_GAP;
    const minPillarHeight = 50;
    const maxTopPillarHeight = GAME_HEIGHT - gapSize - minPillarHeight;
    const topHeight = Math.random() * (maxTopPillarHeight - minPillarHeight) + minPillarHeight;
    
    engine.current.pillars.push({
      x: xPos,
      topHeight: topHeight,
      bottomY: topHeight + gapSize,
      passed: false
    });
  };

  const createExplosion = (x, y) => {
    for(let i=0; i<20; i++) {
      engine.current.particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15,
        life: 1.0,
        color: ['#06b6d4', '#3b82f6', '#ffffff'][Math.floor(Math.random() * 3)]
      });
    }
  };

  const gameOver = useCallback(() => {
    engine.current.playing = false;
    createExplosion(PLAYER_X, engine.current.y);
    setGameState('GAMEOVER');
    
    if (engine.current.score > highScore) {
      setHighScore(engine.current.score);
      localStorage.setItem('waveHighScore', engine.current.score.toString());
    }
  }, [highScore]);

  // Main Game Loop
  const updatePhysics = useCallback(() => {
    const st = engine.current;
    if (!st.playing && st.particles.length === 0) return;

    if (st.playing) {
      // 1. Move Player Y
      const velocityY = st.isHolding ? -WAVE_SPEED_Y : WAVE_SPEED_Y;
      st.y += velocityY;

      // Update trail
      st.trail.unshift({ x: PLAYER_X, y: st.y });
      if (st.trail.length > TRAIL_LENGTH) st.trail.pop();

      // Screen boundary collision
      if (st.y < 0 || st.y > GAME_HEIGHT) {
        gameOver();
        return;
      }

      // Increase speed slightly over time
      st.speedX = BASE_SPEED_X + (st.distance / 2000);
      st.distance += st.speedX;

      // 2. Update Pillars
      st.pillars.forEach(p => {
        p.x -= st.speedX;
        
        // Collision Detection (AABB)
        const hitX = PLAYER_X + PLAYER_SIZE/2 > p.x && PLAYER_X - PLAYER_SIZE/2 < p.x + PILLAR_WIDTH;
        const hitTop = st.y - PLAYER_SIZE/2 < p.topHeight;
        const hitBottom = st.y + PLAYER_SIZE/2 > p.bottomY;
        
        if (hitX && (hitTop || hitBottom)) {
          gameOver();
        }

        // Scoring
        if (!p.passed && p.x + PILLAR_WIDTH < PLAYER_X) {
          p.passed = true;
          st.score += 1;
          setScore(st.score);
        }
      });

      // Remove off-screen pillars
      st.pillars = st.pillars.filter(p => p.x + PILLAR_WIDTH > 0);

      // Spawn new pillars endlessly
      const lastPillar = st.pillars[st.pillars.length - 1];
      if (!lastPillar || lastPillar.x < GAME_WIDTH) {
        spawnPillar((lastPillar ? lastPillar.x : GAME_WIDTH) + 300);
      }
    }

    // Update Particles
    st.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.05;
    });
    st.particles = st.particles.filter(p => p.life > 0);
  }, [gameOver]);

  const draw = useCallback((ctx) => {
    const st = engine.current;

    // Clear Canvas
    ctx.fillStyle = '#020617'; // slate-950
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw Grid Background (adds sense of speed)
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    const offset = st.distance % 50;
    for (let x = -offset; x < GAME_WIDTH; x += 50) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, GAME_HEIGHT); ctx.stroke();
    }
    for (let y = 0; y < GAME_HEIGHT; y += 50) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(GAME_WIDTH, y); ctx.stroke();
    }

    // Draw Pillars
    ctx.fillStyle = '#0f172a'; // dark solid color
    ctx.strokeStyle = '#0ea5e9'; // bright cyan/blue border
    ctx.lineWidth = 3;

    st.pillars.forEach(p => {
      // Top Pillar
      ctx.beginPath();
      ctx.rect(p.x, 0, PILLAR_WIDTH, p.topHeight);
      ctx.fill();
      ctx.stroke();

      // Bottom Pillar
      ctx.beginPath();
      ctx.rect(p.x, p.bottomY, PILLAR_WIDTH, GAME_HEIGHT - p.bottomY);
      ctx.fill();
      ctx.stroke();
    });

    if (st.playing) {
      // Draw Trail
      if (st.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(st.trail[0].x, st.trail[0].y);
        for (let i = 1; i < st.trail.length; i++) {
          // Adjust trail X to make it look like it's staying behind in the world
          const trailX = PLAYER_X - (i * st.speedX);
          ctx.lineTo(trailX, st.trail[i].y);
        }
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.lineWidth = PLAYER_SIZE;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        
        // Inner bright trail
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = PLAYER_SIZE / 3;
        ctx.stroke();
      }

      // Draw Player (Triangle)
      ctx.save();
      ctx.translate(PLAYER_X, st.y);
      // Tilt based on holding state
      ctx.rotate(st.isHolding ? -Math.PI/4 : Math.PI/4);
      
      ctx.beginPath();
      ctx.moveTo(PLAYER_SIZE, 0);
      ctx.lineTo(-PLAYER_SIZE, PLAYER_SIZE);
      ctx.lineTo(-PLAYER_SIZE, -PLAYER_SIZE);
      ctx.closePath();
      
      ctx.fillStyle = '#22d3ee'; // cyan-400
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.restore();
    }

    // Draw Particles (Death effect)
    st.particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;

  }, []);

  const tick = useCallback(() => {
    updatePhysics();
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      draw(ctx);
    }
    requestRef.current = requestAnimationFrame(tick);
  }, [updatePhysics, draw]);

  // Input Handling
  const handleInputDown = useCallback((e) => {
    if (e.type === 'keydown') {
      if (e.code !== 'Space' && e.key !== ' ') return;
      e.preventDefault(); // Prevent scrolling down when hitting space
    } else {
      if (e.cancelable) e.preventDefault(); // Prevent double firing on touch/mouse
    }

    if (gameState === 'MENU' || gameState === 'GAMEOVER') {
      initGame();
      return;
    }
    engine.current.isHolding = true;
  }, [gameState, initGame]);

  const handleInputUp = useCallback((e) => {
    if (e.type === 'keyup') {
      if (e.code !== 'Space' && e.key !== ' ') return;
      if (e.cancelable) e.preventDefault();
    }
    engine.current.isHolding = false;
  }, []);

  // Setup/Teardown
  useEffect(() => {
    requestRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(requestRef.current);
  }, [tick]);

  useEffect(() => {
    // Global event listeners for input
    window.addEventListener('keydown', handleInputDown, { passive: false });
    window.addEventListener('keyup', handleInputUp);
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('pointerdown', handleInputDown, { passive: false });
      container.addEventListener('pointerup', handleInputUp);
      container.addEventListener('pointercancel', handleInputUp);
    }

    return () => {
      window.removeEventListener('keydown', handleInputDown);
      window.removeEventListener('keyup', handleInputUp);
      if (container) {
        container.removeEventListener('pointerdown', handleInputDown);
        container.removeEventListener('pointerup', handleInputUp);
        container.removeEventListener('pointercancel', handleInputUp);
      }
    };
  }, [handleInputDown, handleInputUp]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen w-full flex items-center justify-center bg-slate-950 p-4 md:p-8 select-none"
    >
      <div className="relative w-full max-w-[800px] aspect-[8/5] bg-slate-900 rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] ring-1 ring-white/10">
        
        {/* Main Game Canvas */}
        <canvas
          ref={canvasRef}
          width={GAME_WIDTH}
          height={GAME_HEIGHT}
          className="w-full h-full block touch-none"
        />

        {/* HUD: Score */}
        {gameState === 'PLAYING' && (
          <div className="absolute top-4 right-6 text-2xl font-bold font-mono text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
            {score}
          </div>
        )}

        {/* UI Overlays */}
        {(gameState === 'MENU' || gameState === 'GAMEOVER') && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/60 backdrop-blur-sm z-10">
            
            {gameState === 'MENU' && (
              <div className="glass-panel p-8 rounded-2xl flex flex-col items-center animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-3 mb-2 text-cyan-400 neon-glow">
                  <iconify-icon icon="solar:gamepad-bold-duotone" width="48"></iconify-icon>
                  <h1 className="text-4xl font-bold tracking-tight text-white">Wave Dash</h1>
                </div>
                <p className="text-slate-400 mb-8 font-medium">Hold to ascend. Release to descend.</p>
                
                <div className="flex flex-col items-center gap-4">
                  <span className="text-slate-500 text-sm uppercase tracking-widest font-semibold">High Score</span>
                  <span className="text-3xl font-mono font-bold text-cyan-300">{highScore}</span>
                </div>

                <div className="mt-8 text-slate-300 animate-pulse flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                  <iconify-icon icon="solar:mouse-left-button-bold" width="24"></iconify-icon>
                  <span className="font-semibold">Click or Press Space to Start</span>
                </div>
              </div>
            )}

            {gameState === 'GAMEOVER' && (
              <div className="glass-panel p-8 rounded-2xl flex flex-col items-center border-red-500/30 animate-in slide-in-from-bottom-8 duration-300">
                <div className="flex items-center gap-3 mb-2 text-red-400 drop-shadow-[0_0_12px_rgba(248,113,113,0.6)]">
                  <iconify-icon icon="solar:skull-bold-duotone" width="48"></iconify-icon>
                  <h1 className="text-4xl font-bold tracking-tight text-white">Crashed!</h1>
                </div>
                
                <div className="grid grid-cols-2 gap-8 my-8 text-center bg-black/40 p-6 rounded-xl border border-white/5">
                  <div>
                    <span className="block text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Score</span>
                    <span className="text-4xl font-mono font-bold text-white">{score}</span>
                  </div>
                  <div>
                    <span className="block text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Best</span>
                    <span className="text-4xl font-mono font-bold text-cyan-400">{highScore}</span>
                  </div>
                </div>

                <div className="mt-2 text-slate-300 animate-pulse flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                  <iconify-icon icon="solar:restart-bold" width="24"></iconify-icon>
                  <span className="font-semibold">Tap or Press Space to Retry</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Instructions / Footer */}
      <div className="fixed bottom-6 text-slate-500 text-sm flex gap-6 font-medium">
        <span className="flex items-center gap-2">
          <iconify-icon icon="solar:mouse-minimalistic-line-duotone"></iconify-icon> Click & Hold
        </span>
        <span className="flex items-center gap-2">
          <iconify-icon icon="solar:keyboard-line-duotone"></iconify-icon> Spacebar
        </span>
      </div>
    </div>
  );
}