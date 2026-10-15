import React, { useRef, useEffect, useCallback } from 'react';

// Constants for physics and dimensions
const GRAVITY = 0.8;
const JUMP_FORCE = -13;
const SHIP_GRAVITY = 0.35;
const SHIP_FLY_FORCE = 0.65;
const MAX_SHIP_VELOCITY = 8;
const GAME_SPEED = 6;
const PLAYER_SIZE = 40;
const GROUND_HEIGHT = 60;

const GameEngine = ({ onGameOver, onScoreUpdate, customLevel }) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  
  // Keep game state in a ref to avoid React renders during the loop
  const stateRef = useRef({
    isPlaying: true,
    score: 0,
    frames: 0,
    distance: 0,
    maxDistance: 2000,
    spawnCooldown: 0,
    bounds: { width: 800, height: 600 },
    player: {
      x: 150,
      y: 0, // Will be set on init
      width: PLAYER_SIZE,
      height: PLAYER_SIZE,
      dy: 0,
      rotation: 0,
      isJumping: false,
      isHoldingInput: false,
      mode: 'cube', // 'cube' or 'ship'
      color: '#06b6d4',
      customColor: localStorage.getItem('gd_cube_color') || ''
    },
    obstacles: [],
    particles: [],
    groundY: 0,
    groundOffsetX: 0,
    assets: {
      playerImage: null,
      spikeImage: null,
      blockImage: null,
      groundImage: null,
      sawbladeImage: null,
      portalImage: null,
      portalCubeImage: null,
      shipImage: null
    }
  });

  // Init custom/main level if provided
  useEffect(() => {
    if (customLevel) {
      // Deep copy to prevent mutation affecting retries, and save the original Y (editorY)
      // Custom/Main levels are designed assuming a canvas height of 600 (ground at 540)
      stateRef.current.obstacles = JSON.parse(JSON.stringify(customLevel)).map(o => ({ 
        ...o, 
        editorY: o.y, 
        collected: false 
      }));
      
      // Calculate level endpoint allowing space for player to cleanly land offscreen
      if (customLevel.length > 0) {
        stateRef.current.maxDistance = Math.max(...customLevel.map(o => o.x)) + 800;
      } else {
        stateRef.current.maxDistance = 1500; // default short distance for empty custom level
      }

      // Re-align objects immediately if canvas is already mounted and groundY calculated
      if (stateRef.current.groundY > 0) {
        stateRef.current.obstacles.forEach(obs => {
          if (obs.editorY !== undefined) {
            const offsetFromEditorGround = 540 - obs.editorY;
            obs.y = stateRef.current.groundY - offsetFromEditorGround;
          }
        });
      }
    } else {
      // Reset variables if running endless
      stateRef.current.obstacles = [];
      stateRef.current.maxDistance = 2000;
    }
  }, [customLevel]);

  // Load external assets
  useEffect(() => {
    const loadImage = (src, key) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (stateRef.current) {
          stateRef.current.assets[key] = img;
        }
      };
    };

    loadImage('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a107c71-96be-45a0-a80f-f560ee3cbc40_320w.webp', 'playerImage');
    loadImage('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0be56a6-d55c-4f05-8222-e0eb874f832e_320w.webp', 'spikeImage');
    loadImage('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6915809-476b-49b5-8146-edb1a967abe1_320w.webp', 'blockImage');
    loadImage('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ac92912-61ce-48dc-b3c9-5b6ca78d9124_320w.webp', 'sawbladeImage');
    loadImage('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b20f8c1-2a34-4453-962e-2fa1f2626642_800w.png', 'groundImage');
    loadImage('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1944379f-f382-40f5-9044-fb41ec07a1c2_320w.webp', 'portalImage'); // Ship portal
    loadImage('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f43d4e06-3edd-4b5b-b58d-7a0878429673_320w.webp', 'portalCubeImage'); // Cube portal
    loadImage('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3d54a0c-d203-43ac-8716-e0d98d0c4bec_320w.webp', 'shipImage');
  }, []);

  // Handle Input State (Down)
  const handleInputDown = useCallback((e) => {
    if (e && e.type.startsWith('key')) {
      if (e.code !== 'Space' && e.code !== 'ArrowUp') return;
    }
    if (e) e.preventDefault();
    
    const state = stateRef.current;
    if (!state.isPlaying) return;
    
    state.player.isHoldingInput = true;

    // Trigger instant jump for cube mode
    if (state.player.mode === 'cube' && !state.player.isJumping) {
      state.player.dy = JUMP_FORCE;
      state.player.isJumping = true;
      
      for(let i=0; i<5; i++) {
        state.particles.push({
          x: state.player.x + PLAYER_SIZE/2,
          y: state.player.y + PLAYER_SIZE,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 1) * 3,
          life: 1,
          color: '#ffffff'
        });
      }
    }
  }, []);

  // Handle Input State (Up)
  const handleInputUp = useCallback((e) => {
    if (e && e.type.startsWith('key')) {
      if (e.code !== 'Space' && e.code !== 'ArrowUp') return;
    }
    if (e) e.preventDefault();
    
    stateRef.current.player.isHoldingInput = false;
  }, []);

  // Set up event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleInputDown);
    window.addEventListener('keyup', handleInputUp);
    return () => {
      window.removeEventListener('keydown', handleInputDown);
      window.removeEventListener('keyup', handleInputUp);
    };
  }, [handleInputDown, handleInputUp]);

  // Main Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);
      stateRef.current.bounds = { width: rect.width, height: rect.height };
      stateRef.current.groundY = rect.height - GROUND_HEIGHT;

      // Re-align custom level obstacles perfectly against the new dynamic ground position
      if (stateRef.current.obstacles) {
        stateRef.current.obstacles.forEach(obs => {
          if (obs.editorY !== undefined) {
            const offsetFromEditorGround = 540 - obs.editorY;
            obs.y = stateRef.current.groundY - offsetFromEditorGround;
          }
        });
      }
      
      const p = stateRef.current.player;
      if (p.y === 0 || (!p.isJumping && p.mode === 'cube')) {
        p.y = stateRef.current.groundY - p.height;
      }
    };
    
    resizeCanvas();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas.parentElement);

    const update = () => {
      const state = stateRef.current;
      if (!state.isPlaying) return;

      state.frames++;
      
      // 1. Update Score & Distance
      if (!customLevel) {
        state.score += 0.05;
        if (state.frames % 10 === 0) onScoreUpdate(Math.min(100, state.score));
      } else {
        state.distance += GAME_SPEED;
        const progress = Math.min(100, (state.distance / state.maxDistance) * 100);
        state.score = progress;
        if (state.frames % 5 === 0) onScoreUpdate(progress);

        if (state.distance >= state.maxDistance) {
          triggerGameWin();
          return;
        }
      }

      // Update Ground Scroll
      const groundImgWidth = 800;
      state.groundOffsetX -= GAME_SPEED;
      if (state.groundOffsetX <= -groundImgWidth) {
        state.groundOffsetX += groundImgWidth;
      }

      // 2. Player Physics
      const p = state.player;

      if (p.mode === 'cube') {
        p.dy += GRAVITY;
        p.y += p.dy;

        // Cube Ground Collision
        if (p.y + p.height >= state.groundY) {
          p.y = state.groundY - p.height;
          p.dy = 0;
          p.isJumping = false;
          p.rotation = Math.round(p.rotation / 90) * 90;
        } else {
          p.rotation += 4;
        }
      } else if (p.mode === 'ship') {
        // Ship Physics
        if (p.isHoldingInput) {
          p.dy -= SHIP_FLY_FORCE;
          
          // Emit thrust particles
          if (state.frames % 2 === 0) {
             state.particles.push({
                x: p.x + 5,
                y: p.y + p.height - 5,
                vx: -3 - Math.random() * 3,
                vy: (Math.random() - 0.5) * 2,
                life: 1,
                color: '#f97316' // Orange fire
             });
          }
        }
        p.dy += SHIP_GRAVITY;
        
        // Cap terminal velocities
        p.dy = Math.max(-MAX_SHIP_VELOCITY, Math.min(p.dy, MAX_SHIP_VELOCITY));
        p.y += p.dy;
        
        // Tilt ship based on vertical speed
        p.rotation = p.dy * 3;

        // Ship Ceiling Bounds
        if (p.y <= 0) {
          p.y = 0;
          p.dy = 0;
        }
        
        // Ship Ground Collision
        if (p.y + p.height >= state.groundY) {
          p.y = state.groundY - p.height;
          p.dy = 0;
        }
      }

      // 3. Obstacle & Portal Generation (Endless Default Mode Only)
      if (!customLevel) {
        if (state.spawnCooldown > 0) {
          state.spawnCooldown--;
        } else {
          // Spawn Portal periodically to toggle modes based on current mode
          if (state.frames > 0 && state.frames % 400 === 0) {
            const isCube = p.mode === 'cube';
            state.obstacles.push({
              type: isCube ? 'portal_ship' : 'portal_cube',
              x: state.bounds.width,
              y: state.groundY - 140, // Floating high enough
              width: 70,
              height: 120,
              collected: false
            });
            state.spawnCooldown = 80; // Clear runway after portal
          } 
          // Standard obstacle spawning
          else if (state.frames % 70 === 0 && Math.random() > 0.3) {
            const rand = Math.random();
            let type = 'block';
            if (rand > 0.7) type = 'block';
            else if (rand > 0.4) type = 'spike';
            else type = 'sawblade';
            
            if (type === 'spike') {
              state.obstacles.push({
                type: 'spike',
                x: state.bounds.width,
                y: state.groundY - 30,
                width: 30,
                height: 30
              });
            } else if (type === 'sawblade') {
              const isFloating = p.mode === 'ship' ? true : Math.random() > 0.5;
              const size = 44;
              const yPos = isFloating ? state.groundY - (p.mode === 'ship' ? 150 * Math.random() + 50 : 80) : state.groundY - size / 2;
              state.obstacles.push({
                type: 'sawblade',
                x: state.bounds.width,
                y: yPos,
                width: size,
                height: size
              });
            } else {
              const isFloating = Math.random() > 0.5;
              const yPos = isFloating ? state.groundY - (p.mode === 'ship' ? 120 : 80) : state.groundY - 40;
              state.obstacles.push({
                type: 'block',
                x: state.bounds.width,
                y: yPos,
                width: 40,
                height: 40
              });
            }
            state.spawnCooldown = 20;
          }
        }
      }

      // 4. Update Obstacles & Collision Detection
      for (let i = state.obstacles.length - 1; i >= 0; i--) {
        const obs = state.obstacles[i];
        obs.x -= GAME_SPEED;

        // Cleanup offscreen objects to keep performance high
        if (obs.x + obs.width < -100) {
          state.obstacles.splice(i, 1);
          continue;
        }

        // Tighter hitboxes for fairness
        const pLeft = p.x + 6;
        const pRight = p.x + p.width - 6;
        const pTop = p.y + 6;
        const pBottom = p.y + p.height - 6;

        if ((obs.type === 'portal_ship' || obs.type === 'portal_cube') && !obs.collected) {
          const oLeft = obs.x + 10;
          const oRight = obs.x + obs.width - 10;
          const oTop = obs.y + 10;
          const oBottom = obs.y + obs.height - 10;
          
          if (pRight > oLeft && pLeft < oRight && pBottom > oTop && pTop < oBottom) {
            obs.collected = true;
            p.mode = obs.type === 'portal_ship' ? 'ship' : 'cube';
            p.dy = 0; // Reset vertical momentum
            
            // Flashy portal particle burst
            const burstColor = obs.type === 'portal_ship' ? '#ec4899' : '#22c55e';
            for(let j=0; j<25; j++) {
              state.particles.push({
                x: p.x + p.width/2,
                y: p.y + p.height/2,
                vx: (Math.random() - 0.5) * 12,
                vy: (Math.random() - 0.5) * 12,
                life: 1.5,
                color: burstColor
              });
            }
          }
        } else if (obs.type === 'spike') {
          const oLeft = obs.x + 8;
          const oRight = obs.x + obs.width - 8;
          const oTop = obs.y + 10;
          const oBottom = obs.y + obs.height;

          if (pRight > oLeft && pLeft < oRight && pBottom > oTop && pTop < oBottom) {
            triggerGameOver();
          }
        } else if (obs.type === 'sawblade') {
          const oLeft = obs.x + 8;
          const oRight = obs.x + obs.width - 8;
          const oTop = obs.y + 8;
          const oBottom = obs.y + obs.height - 8;

          if (pRight > oLeft && pLeft < oRight && pBottom > oTop && pTop < oBottom) {
            triggerGameOver();
          }
        } else if (obs.type === 'block') {
          const oLeft = obs.x;
          const oRight = obs.x + obs.width;
          const oTop = obs.y;
          const oBottom = obs.y + obs.height;

          if (pRight > oLeft && pLeft < oRight && pBottom > oTop && pTop < oBottom) {
            const previousBottom = (p.y - p.dy) + p.height;
            // In ship mode, hitting side/bottom of block is death. Landing cleanly is allowed.
            if (previousBottom <= oTop + 10 && p.dy >= 0) {
              p.y = oTop - p.height;
              p.dy = 0;
              if (p.mode === 'cube') {
                p.isJumping = false;
                p.rotation = Math.round(p.rotation / 90) * 90;
              }
            } else {
              triggerGameOver();
            }
          }
        }
      }

      // 5. Update Particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const part = state.particles[i];
        part.x += part.vx;
        part.y += part.vy;
        part.life -= 0.05;
        if (part.life <= 0) state.particles.splice(i, 1);
      }

      draw(ctx, state.bounds.width, state.bounds.height);
      requestRef.current = requestAnimationFrame(update);
    };

    const triggerGameOver = () => {
      const state = stateRef.current;
      state.isPlaying = false;
      
      for(let i=0; i<30; i++) {
        state.particles.push({
          x: state.player.x + PLAYER_SIZE/2,
          y: state.player.y + PLAYER_SIZE/2,
          vx: (Math.random() - 0.5) * 15,
          vy: (Math.random() - 0.5) * 15,
          life: 1,
          color: '#ffffff'
        });
      }
      
      draw(ctx, state.bounds.width, state.bounds.height);
      setTimeout(() => onGameOver(Math.min(100, state.score), false), 500);
    };

    const triggerGameWin = () => {
      const state = stateRef.current;
      state.isPlaying = false;
      
      for(let i=0; i<50; i++) {
        state.particles.push({
          x: state.player.x + PLAYER_SIZE/2,
          y: state.player.y + PLAYER_SIZE/2,
          vx: (Math.random() - 0.5) * 20,
          vy: (Math.random() - 0.5) * 20,
          life: 2,
          color: '#22c55e'
        });
      }
      
      draw(ctx, state.bounds.width, state.bounds.height);
      setTimeout(() => onGameOver(100, true), 1000);
    };

    const draw = (ctx, width, height) => {
      const state = stateRef.current;
      ctx.clearRect(0, 0, width, height);

      // Draw Ground
      const groundAreaHeight = height - state.groundY;
      if (state.assets.groundImage) {
        const img = state.assets.groundImage;
        let startX = state.groundOffsetX;
        while (startX < width) {
          ctx.drawImage(img, startX, state.groundY, 800, groundAreaHeight);
          startX += 800;
        }
      } else {
        ctx.fillStyle = '#18181b';
        ctx.fillRect(0, state.groundY, width, groundAreaHeight);
      }
      
      ctx.fillStyle = '#c084fc';
      ctx.fillRect(0, state.groundY, width, 4);

      // Draw Obstacles & Portals
      state.obstacles.forEach(obs => {
        // Skip drawing if strictly offscreen to the right
        if (obs.x > width + 100) return;

        if (obs.type === 'portal_ship' || obs.type === 'portal_cube') {
          // Gentle floating animation
          const hoverY = obs.y + Math.sin(state.frames * 0.05) * 5;
          const imageToDraw = obs.type === 'portal_ship' ? state.assets.portalImage : state.assets.portalCubeImage;
          
          if (imageToDraw) {
            ctx.globalAlpha = obs.collected ? 0.3 : 1;
            ctx.drawImage(imageToDraw, obs.x, hoverY, obs.width, obs.height);
            ctx.globalAlpha = 1;
          } else {
            ctx.strokeStyle = obs.type === 'portal_ship' ? '#ec4899' : '#22c55e';
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.ellipse(obs.x + obs.width/2, hoverY + obs.height/2, obs.width/2, obs.height/2, 0, 0, Math.PI*2);
            ctx.stroke();
          }
        } else if (obs.type === 'spike') {
          if (state.assets.spikeImage) {
            ctx.drawImage(state.assets.spikeImage, obs.x, obs.y, obs.width, obs.height);
          } else {
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.moveTo(obs.x + obs.width / 2, obs.y);
            ctx.lineTo(obs.x + obs.width, obs.y + obs.height);
            ctx.lineTo(obs.x, obs.y + obs.height);
            ctx.closePath();
            ctx.fill();
          }
        } else if (obs.type === 'sawblade') {
          ctx.save();
          ctx.translate(obs.x + obs.width / 2, obs.y + obs.height / 2);
          ctx.rotate((state.frames * 12 * Math.PI) / 180);
          
          if (state.assets.sawbladeImage) {
            ctx.drawImage(state.assets.sawbladeImage, -obs.width / 2, -obs.height / 2, obs.width, obs.height);
          } else {
            ctx.fillStyle = '#000000';
            ctx.fillRect(-obs.width / 2, -obs.height / 2, obs.width, obs.height);
          }
          ctx.restore();
        } else {
          if (state.assets.blockImage) {
            ctx.drawImage(state.assets.blockImage, obs.x, obs.y, obs.width, obs.height);
          } else {
            ctx.fillStyle = '#000000';
            ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
          }
        }
      });

      // Draw Particles
      state.particles.forEach(part => {
        ctx.globalAlpha = Math.max(0, part.life);
        ctx.fillStyle = part.color;
        ctx.fillRect(part.x, part.y, 4, 4);
      });
      ctx.globalAlpha = 1.0;

      // Draw Player
      if (state.isPlaying) {
        ctx.save();
        ctx.translate(state.player.x + state.player.width / 2, state.player.y + state.player.height / 2);
        ctx.rotate((state.player.rotation * Math.PI) / 180);
        
        // Draw Ship Chassis underneath the player cube
        if (state.player.mode === 'ship') {
          if (state.assets.shipImage) {
            ctx.drawImage(state.assets.shipImage, -35, 5, 70, 30);
          } else {
            ctx.fillStyle = '#d4d4d8';
            ctx.beginPath();
            ctx.moveTo(-25, 5);
            ctx.lineTo(30, 5);
            ctx.lineTo(15, 20);
            ctx.lineTo(-20, 20);
            ctx.closePath();
            ctx.fill();
            
            ctx.fillStyle = '#3f3f46';
            ctx.fillRect(-22, 10, 8, 4);
          }
        }

        if (state.assets.playerImage) {
          ctx.drawImage(
            state.assets.playerImage, 
            -state.player.width / 2, 
            -state.player.height / 2, 
            state.player.width, 
            state.player.height
          );
          
          if (state.player.customColor) {
            ctx.globalCompositeOperation = 'source-atop';
            ctx.fillStyle = state.player.customColor;
            ctx.globalAlpha = 0.7;
            ctx.fillRect(-state.player.width / 2, -state.player.height / 2, state.player.width, state.player.height);
            ctx.globalAlpha = 1.0;
            ctx.globalCompositeOperation = 'source-over';
          }
        } else {
          ctx.fillStyle = state.player.customColor || state.player.color;
          ctx.fillRect(-state.player.width / 2, -state.player.height / 2, state.player.width, state.player.height);
        }
        
        ctx.restore();
      }
    };

    requestRef.current = requestAnimationFrame(update);

    return () => {
      resizeObserver.disconnect();
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [onGameOver, onScoreUpdate, customLevel]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 block cursor-pointer select-none touch-none"
      onPointerDown={handleInputDown}
      onPointerUp={handleInputUp}
      onPointerLeave={handleInputUp}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

export default GameEngine;