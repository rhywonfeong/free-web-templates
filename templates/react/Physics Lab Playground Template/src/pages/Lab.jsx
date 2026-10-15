import { useRef, useState, useEffect, useCallback } from 'react';
import { clsx } from 'clsx';
import { updatePhysics } from '../utils/physicsEngine';

const COLORS = [
  'bg-rose-500 border-rose-400', 
  'bg-blue-500 border-blue-400', 
  'bg-indigo-500 border-indigo-400', 
  'bg-amber-500 border-amber-400', 
  'bg-cyan-500 border-cyan-400'
];

const TOOLS = [
  { id: 'standard', name: 'Standard', icon: 'solar:basketball-bold-duotone', color: 'text-blue-400' },
  { id: 'heavy', name: 'Heavy', icon: 'solar:shield-bold-duotone', color: 'text-zinc-400' },
  { id: 'balloon', name: 'Balloon', icon: 'solar:cloud-bold-duotone', color: 'text-rose-400' },
  { id: 'static', name: 'Wall Peg', icon: 'solar:pin-bold-duotone', color: 'text-emerald-400' },
  { id: 'attractor', name: 'Attract', icon: 'solar:magnet-bold-duotone', color: 'text-purple-400' },
  { id: 'repeller', name: 'Repel', icon: 'solar:sun-bold-duotone', color: 'text-amber-400' },
];

const TEMPLATES = [
  { id: 'orbit', name: 'Zero-G Orbit', icon: 'solar:planet-3-bold-duotone', color: 'text-amber-400' },
  { id: 'plinko', name: 'Plinko Drop', icon: 'solar:gamepad-bold-duotone', color: 'text-emerald-400' },
  { id: 'drape', name: 'Cloth Drape', icon: 'solar:magic-stick-3-bold-duotone', color: 'text-indigo-400' },
  { id: 'chaos', name: 'Chaos Box', icon: 'solar:bomb-bold-duotone', color: 'text-rose-400' },
];

export default function Lab() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  
  // High-performance mutable state for the physics engine
  const particlesRef = useRef([]);
  const constraintsRef = useRef([]);
  const domNodesRef = useRef(new Map());
  const constraintNodesRef = useRef(new Map());
  
  // Interaction state
  const draggedParticleRef = useRef(null);
  const mouseHistoryRef = useRef([]);

  // React state for UI controls
  const [activeTool, setActiveTool] = useState('standard');
  const activeToolRef = useRef('standard');
  
  const [settings, setSettings] = useState({
    gravity: 0.4,
    restitution: 0.8,
    damping: 0.995,
    clothStiffness: 0.95,
    fanActive: false,
    fanDirection: 'up',
  });
  const [particleCount, setParticleCount] = useState(0);
  const [constraintCount, setConstraintCount] = useState(0);

  const handleSetTool = (tool) => {
    setActiveTool(tool);
    activeToolRef.current = tool;
  };

  // Initialize engine loop
  useEffect(() => {
    const loop = (time) => {
      let dt = time - lastTimeRef.current;
      if (dt > 50) dt = 16;
      lastTimeRef.current = time;

      if (containerRef.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        
        updatePhysics(particlesRef.current, bounds.width, bounds.height, {
          ...settings,
          constraints: constraintsRef.current
        });

        // Update particle positions
        particlesRef.current.forEach(p => {
          const node = domNodesRef.current.get(p.id);
          if (node) {
            node.style.transform = `translate3d(${p.x - p.radius}px, ${p.y - p.radius}px, 0)`;
          }
        });

        // Update constraint SVG lines
        constraintsRef.current.forEach(c => {
          const node = constraintNodesRef.current.get(c.id);
          if (node) {
            node.setAttribute('x1', c.p1.x);
            node.setAttribute('y1', c.p1.y);
            node.setAttribute('x2', c.p2.x);
            node.setAttribute('y2', c.p2.y);
          }
        });
      }

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationRef.current);
  }, [settings]);

  // Spawn a particle based on current tool or override properties
  const spawnParticle = useCallback((x, y, vx = 0, vy = 0, overrideProps = null) => {
    const tool = overrideProps?.type || activeToolRef.current;
    
    // Default base properties
    let props = {
      radius: 15 + Math.random() * 10,
      mass: 0, 
      className: '',
      gravityMultiplier: 1,
      isStatic: false,
      forceStrength: 0,
      restitution: 0.8,
      type: tool
    };

    // Apply material specific properties
    switch (tool) {
      case 'heavy':
        props.radius = 25 + Math.random() * 10;
        props.mass = props.radius * 8;
        props.className = 'bg-zinc-700 border-[3px] border-zinc-500 shadow-xl';
        props.restitution = 0.2;
        props.gravityMultiplier = 1.2;
        break;
      case 'balloon':
        props.radius = 20 + Math.random() * 15;
        props.mass = props.radius * 0.2;
        props.className = 'bg-sky-400/20 border-[2px] border-sky-300 border-dashed backdrop-blur-md';
        props.gravityMultiplier = -0.5; // Floats upward
        props.restitution = 0.6;
        break;
      case 'static':
        props.radius = 20;
        props.isStatic = true;
        props.mass = Infinity;
        props.className = 'bg-emerald-950 border-[3px] border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]';
        break;
      case 'attractor':
        props.radius = 16;
        props.isStatic = true;
        props.mass = Infinity;
        props.forceStrength = 2000; // Pulls objects in
        props.className = 'bg-zinc-950 border-[2px] border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.7)]';
        break;
      case 'repeller':
        props.radius = 16;
        props.isStatic = true;
        props.mass = Infinity;
        props.forceStrength = -2000; // Pushes objects away
        props.className = 'bg-white border-[2px] border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.8)]';
        break;
      case 'standard':
      default: 
        props.mass = props.radius;
        props.className = `${COLORS[Math.floor(Math.random() * COLORS.length)]} border-[2px] backdrop-blur-sm shadow-md`;
        break;
    }

    if (!props.mass) props.mass = props.radius;

    // Apply any manual overrides (e.g., templates defining custom radius)
    if (overrideProps) {
      props = { ...props, ...overrideProps };
    }

    const newParticle = {
      id: Math.random().toString(36).substring(2, 9),
      x, y,
      vx: vx || (Math.random() - 0.5) * 5,
      vy: vy || (Math.random() - 0.5) * 5,
      isHeld: false,
      ...props
    };
    
    particlesRef.current.push(newParticle);
    setParticleCount(particlesRef.current.length);
  }, []);

  const spawnCloth = useCallback((config = {}) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const cols = config.cols || 12;
    const rows = config.rows || 8;
    const spacing = config.spacing || 24;
    const startX = config.startX || (bounds.width / 2 - ((cols - 1) * spacing) / 2);
    const startY = config.startY || 80;
    const pinTopRow = config.pinTopRow !== false; // defaults to true

    const newParticles = [];
    const newConstraints = [];

    // Create particles
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Pin the top row logic
        const isPinned = pinTopRow && y === 0 && (x % 2 === 0 || x === cols - 1);
        
        const p = {
          id: 'cloth-' + Math.random().toString(36).substring(2, 9),
          x: startX + x * spacing + (Math.random()-0.5), // slight offset to prevent perfect symmetry lock
          y: startY + y * spacing,
          vx: 0,
          vy: 0,
          isHeld: false,
          radius: 5,
          mass: isPinned ? Infinity : 2,
          isStatic: isPinned,
          className: isPinned 
            ? 'bg-indigo-500 z-10' 
            : 'bg-indigo-400/80 shadow-[0_0_10px_rgba(99,102,241,0.3)]',
          type: 'cloth',
          restitution: 0.1,
          gravityMultiplier: 1,
        };
        newParticles.push(p);
      }
    }

    // Create constraints
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = y * cols + x;
        // Horizontal structural constraints
        if (x < cols - 1) {
          newConstraints.push({
            id: `c-h-${newParticles[i].id}`,
            p1: newParticles[i],
            p2: newParticles[i + 1],
            restLength: spacing,
            stiffness: 0.95 // Initial fallback stiffness
          });
        }
        // Vertical structural constraints
        if (y < rows - 1) {
          newConstraints.push({
            id: `c-v-${newParticles[i].id}`,
            p1: newParticles[i],
            p2: newParticles[i + cols],
            restLength: spacing,
            stiffness: 0.95 // Initial fallback stiffness
          });
        }
      }
    }

    particlesRef.current.push(...newParticles);
    constraintsRef.current.push(...newConstraints);
    
    setParticleCount(particlesRef.current.length);
    setConstraintCount(constraintsRef.current.length);
  }, []);

  const clearParticles = useCallback(() => {
    particlesRef.current = [];
    domNodesRef.current.clear();
    constraintsRef.current = [];
    constraintNodesRef.current.clear();
    setParticleCount(0);
    setConstraintCount(0);
  }, []);

  const loadTemplate = useCallback((templateId) => {
    clearParticles();
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const cx = bounds.width / 2;
    const cy = bounds.height / 2;

    switch(templateId) {
      case 'orbit':
        setSettings(s => ({ ...s, gravity: 0, damping: 1.0, fanActive: false }));
        // Central star
        spawnParticle(cx, cy, 0, 0, { type: 'attractor', forceStrength: 3500, radius: 25, className: 'bg-zinc-950 border-[2px] border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.6)] z-20' });
        // Orbiting planets
        for(let i = 0; i < 40; i++) {
          const angle = (Math.PI * 2 / 40) * i;
          const dist = 100 + Math.random() * 200;
          const speed = 4 + (200 / dist) * 2; // Closer = faster
          spawnParticle(
            cx + Math.cos(angle) * dist,
            cy + Math.sin(angle) * dist,
            -Math.sin(angle) * speed,
            Math.cos(angle) * speed,
            { type: 'standard', radius: 4 + Math.random() * 8, restitution: 0.2 }
          );
        }
        break;
        
      case 'plinko':
        setSettings(s => ({ ...s, gravity: 0.4, restitution: 0.6, damping: 0.995, fanActive: false }));
        const pegsRows = 7;
        const pegsCols = 9;
        const pSpacing = 60;
        const pStartX = cx - ((pegsCols - 1) * pSpacing) / 2;
        const pStartY = cy - 150;
        
        // Spawn pegs grid
        for(let r = 0; r < pegsRows; r++) {
          const colsInRow = r % 2 === 0 ? pegsCols : pegsCols - 1;
          const rowStartX = r % 2 === 0 ? pStartX : pStartX + pSpacing / 2;
          for(let c = 0; c < colsInRow; c++) {
            spawnParticle(rowStartX + c * pSpacing, pStartY + r * pSpacing, 0, 0, { type: 'static', radius: 8, className: 'bg-zinc-800 border-[2px] border-zinc-600 shadow-md' });
          }
        }
        // Drop standard balls (staggered vertically)
        for(let i = 0; i < 40; i++) {
          spawnParticle(
            cx + (Math.random() - 0.5) * 300, 
            20 - Math.random() * 400, // Spread off-screen
            0, 0, 
            { type: 'standard', radius: 8 + Math.random() * 4 }
          );
        }
        break;

      case 'drape':
        setSettings(s => ({ ...s, gravity: 0.5, clothStiffness: 0.8, fanActive: false }));
        // Central and flanking obstacles
        spawnParticle(cx, cy + 50, 0, 0, { type: 'static', radius: 70, className: 'bg-emerald-950 border-[3px] border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]' });
        spawnParticle(cx - 150, cy, 0, 0, { type: 'static', radius: 40 });
        spawnParticle(cx + 150, cy, 0, 0, { type: 'static', radius: 40 });
        
        // Unpinned free-falling cloth
        spawnCloth({
          cols: 16,
          rows: 10,
          spacing: 22,
          startY: 20,
          pinTopRow: false
        });
        break;
        
      case 'chaos':
        setSettings(s => ({ ...s, gravity: 0, restitution: 1.0, damping: 1.0, fanActive: false }));
        spawnParticle(cx - 150, cy, 0, 0, { type: 'attractor', forceStrength: 3000, radius: 30 });
        spawnParticle(cx + 150, cy, 0, 0, { type: 'repeller', forceStrength: -3000, radius: 30 });
        for(let i = 0; i < 50; i++) {
          spawnParticle(
            cx + (Math.random() - 0.5) * 100, 
            cy + (Math.random() - 0.5) * 100, 
            (Math.random() - 0.5) * 15, 
            (Math.random() - 0.5) * 15, 
            { type: 'standard', radius: 8 + Math.random() * 8 }
          );
        }
        break;
    }
  }, [clearParticles, spawnParticle, spawnCloth, setSettings]);

  // Spawn initial batch only once
  const hasSpawnedRef = useRef(false);
  useEffect(() => {
    if (!hasSpawnedRef.current && containerRef.current) {
      hasSpawnedRef.current = true;
      const bounds = containerRef.current.getBoundingClientRect();
      for(let i=0; i<8; i++) {
        spawnParticle(
          bounds.width/2 + (Math.random()-0.5) * 200, 
          bounds.height/4 + (Math.random()-0.5) * 100
        );
      }
    }
  }, [spawnParticle]);

  // Global mouse handlers for throwing mechanics
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!draggedParticleRef.current || !containerRef.current) return;
      
      const bounds = containerRef.current.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      draggedParticleRef.current.x = x;
      draggedParticleRef.current.y = y;
      draggedParticleRef.current.vx = 0;
      draggedParticleRef.current.vy = 0;

      mouseHistoryRef.current.push({ x, y, time: performance.now() });
      if (mouseHistoryRef.current.length > 5) mouseHistoryRef.current.shift();
    };

    const handlePointerUp = () => {
      if (!draggedParticleRef.current) return;
      
      const p = draggedParticleRef.current;
      
      // Calculate release velocity for non-static objects
      if (!p.isStatic) {
        const history = mouseHistoryRef.current;
        if (history.length > 1) {
          const oldest = history[0];
          const newest = history[history.length - 1];
          const dt = (newest.time - oldest.time) || 16;
          
          const throwForce = 0.5; 
          p.vx = ((newest.x - oldest.x) / dt) * 16 * throwForce;
          p.vy = ((newest.y - oldest.y) / dt) * 16 * throwForce;
        }
      }

      p.isHeld = false;
      draggedParticleRef.current = null;
      mouseHistoryRef.current = [];
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  // Container click to spawn
  const handleContainerPointerDown = (e) => {
    if (e.target === containerRef.current || e.target.tagName === 'svg') {
      const bounds = containerRef.current.getBoundingClientRect();
      spawnParticle(e.clientX - bounds.left, e.clientY - bounds.top);
    }
  };

  return (
    <div className="flex h-full w-full">
      {/* Sidebar Controls */}
      <aside className="w-80 shrink-0 border-r border-white/10 bg-zinc-950/90 flex flex-col z-20 backdrop-blur-md">
        <div className="p-5 border-b border-white/5">
          <h2 className="text-sm font-semibold tracking-tight text-white mb-1">Environment Specs</h2>
          <p className="text-xs text-zinc-500">Adjust physics & spawn materials.</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-5 space-y-8">
          
          {/* Tool Selector */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Materials & Forces</h3>
            <div className="grid grid-cols-2 gap-2">
              {TOOLS.map(t => (
                <button
                  key={t.id}
                  onClick={() => handleSetTool(t.id)}
                  className={clsx(
                    "flex flex-col items-center justify-center gap-2 rounded-xl border p-3 transition-ui",
                    activeTool === t.id
                      ? "border-indigo-500/50 bg-indigo-500/10"
                      : "border-white/5 bg-white/5 hover:bg-white/10"
                  )}
                >
                  <iconify-icon icon={t.icon} width="22" className={t.color}></iconify-icon>
                  <span className="text-[10px] font-medium text-zinc-300">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Templates Group */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Templates</h3>
            <div className="grid grid-cols-2 gap-2">
              {TEMPLATES.map(t => (
                <button
                  key={t.id}
                  onClick={() => loadTemplate(t.id)}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/5 p-3 transition-ui hover:bg-white/10 active:scale-[0.98]"
                >
                  <iconify-icon icon={t.icon} width="22" className={t.color}></iconify-icon>
                  <span className="text-[10px] font-medium text-zinc-300">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Slider Group */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Global Physics</h3>
            <ControlSlider 
              label="Gravity" 
              icon="solar:arrow-down-circle-bold-duotone"
              min={-2} max={2} step={0.1} 
              value={settings.gravity} 
              onChange={(v) => setSettings(s => ({...s, gravity: v}))} 
            />
            <ControlSlider 
              label="Bounciness" 
              icon="solar:football-bold-duotone"
              min={0} max={1.5} step={0.1} 
              value={settings.restitution} 
              onChange={(v) => setSettings(s => ({...s, restitution: v}))} 
            />
            <ControlSlider 
              label="Air Friction" 
              icon="solar:wind-bold-duotone"
              min={0.900} max={1.000} step={0.005} 
              value={settings.damping} 
              onChange={(v) => setSettings(s => ({...s, damping: v}))} 
            />
            <ControlSlider 
              label="Cloth Stiffness" 
              icon="solar:layers-bold-duotone"
              min={0.05} max={1.0} step={0.05} // Capped at 1.0 for stability
              value={settings.clothStiffness} 
              onChange={(v) => setSettings(s => ({...s, clothStiffness: v}))} 
            />
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="space-y-2">
              <button 
                onClick={() => setSettings(s => ({...s, fanActive: !s.fanActive}))}
                className={clsx(
                  "flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-ui active:scale-[0.98]",
                  settings.fanActive
                    ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    : "bg-white/5 border border-transparent hover:bg-white/10 text-white"
                )}
              >
                <iconify-icon icon="solar:wind-bold-duotone" width="18" className={settings.fanActive ? "animate-pulse" : ""}></iconify-icon>
                {settings.fanActive ? "Turn Fan Off" : "Turn Fan On"}
              </button>
              
              <div className="flex gap-1">
                {['left', 'up', 'down', 'right'].map(dir => (
                  <button
                    key={dir}
                    onClick={() => setSettings(s => ({...s, fanDirection: dir}))}
                    className={clsx(
                      "flex-1 flex items-center justify-center py-2 rounded-xl transition-ui border",
                      settings.fanDirection === dir
                        ? (settings.fanActive ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-300" : "bg-white/10 border-white/20 text-white")
                        : "bg-white/5 border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/10"
                    )}
                    title={`Blow ${dir}`}
                  >
                    <iconify-icon icon={`solar:alt-arrow-${dir}-line-duotone`} width="18"></iconify-icon>
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                if(!containerRef.current) return;
                const b = containerRef.current.getBoundingClientRect();
                for(let i=0; i<5; i++) spawnParticle(b.width/2 + (Math.random()-0.5)*100, b.height/4);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-ui hover:bg-white/10 active:scale-[0.98]"
            >
              <iconify-icon icon="solar:plus-circle-bold-duotone" width="18"></iconify-icon>
              Spawn Batch
            </button>
            <button 
              onClick={() => spawnCloth()} // Wrap with arrow function to pass empty args
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500/20 px-4 py-2.5 text-sm font-medium text-indigo-300 border border-indigo-500/30 transition-ui hover:bg-indigo-500/30 active:scale-[0.98]"
            >
              <iconify-icon icon="solar:align-bottom-bold-duotone" width="18"></iconify-icon>
              Spawn Cloth
            </button>
            <button 
              onClick={clearParticles}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2.5 text-sm font-medium text-red-400 transition-ui hover:bg-red-500/10 active:scale-[0.98]"
            >
              <iconify-icon icon="solar:trash-bin-trash-bold-duotone" width="18"></iconify-icon>
              Clear All ({particleCount})
            </button>
          </div>
        </div>
      </aside>

      {/* Physics Canvas Area */}
      <div 
        ref={containerRef}
        onPointerDown={handleContainerPointerDown}
        className="flex-1 relative bg-grid-pattern cursor-crosshair overflow-hidden"
      >
        {/* Render SVG layer for distance constraints (Cloth connections) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {constraintCount > 0 && constraintsRef.current.map((c) => (
            <line
              key={c.id}
              ref={(el) => {
                if (el) constraintNodesRef.current.set(c.id, el);
                else constraintNodesRef.current.delete(c.id);
              }}
              stroke="currentColor"
              className="text-indigo-400/40"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/* Render DOM nodes for particles */}
        {particlesRef.current.map((p) => (
          <div
            key={p.id}
            ref={(el) => {
              if (el) domNodesRef.current.set(p.id, el);
              else domNodesRef.current.delete(p.id);
            }}
            onPointerDown={(e) => {
              e.stopPropagation(); 
              p.isHeld = true;
              p.vx = 0; p.vy = 0;
              draggedParticleRef.current = p;
              mouseHistoryRef.current = [{ x: p.x, y: p.y, time: performance.now() }];
            }}
            className={clsx(
              "absolute top-0 left-0 rounded-full cursor-grab active:cursor-grabbing",
              p.className,
              p.isHeld && "ring-4 ring-white/40 scale-105 z-50",
              p.type !== 'cloth' && "z-10" // keep solid shapes above cloth grid lines
            )}
            style={{
              width: p.radius * 2,
              height: p.radius * 2,
              willChange: 'transform',
            }}
          >
            {/* Visual Highlights based on type */}
            {['standard', 'heavy'].includes(p.type) && (
              <div className="absolute top-[10%] left-[15%] w-[30%] h-[30%] rounded-full bg-white/30 blur-[2px]"></div>
            )}
            {p.type === 'attractor' && (
              <div className="absolute inset-[-10px] rounded-full border border-purple-500/30 animate-ping opacity-50"></div>
            )}
            {p.type === 'repeller' && (
              <div className="absolute inset-[-15px] rounded-full border border-amber-500/30 animate-pulse opacity-40"></div>
            )}
            {p.type === 'static' && (
              <div className="absolute inset-[30%] rounded-full bg-emerald-800 border border-emerald-400/50"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ControlSlider({ label, icon, min, max, step, value, onChange }) {
  const percent = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-xs font-medium text-zinc-300">
          <iconify-icon icon={icon} width="16" className="text-indigo-400"></iconify-icon>
          {label}
        </label>
        <span className="text-xs font-mono text-zinc-500">{value.toFixed(2)}</span>
      </div>
      <div className="relative h-2 w-full rounded-full bg-white/5">
        <div 
          className="absolute left-0 top-0 h-full rounded-full bg-indigo-500/50"
          style={{ width: `${percent}%` }}
        ></div>
        <input 
          type="range" 
          min={min} max={max} step={step} 
          value={value} 
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-ew-resize"
        />
        <div 
          className="absolute top-1/2 -mt-2 -ml-2 h-4 w-4 rounded-full border-2 border-zinc-900 bg-white shadow-sm pointer-events-none transition-transform"
          style={{ left: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}