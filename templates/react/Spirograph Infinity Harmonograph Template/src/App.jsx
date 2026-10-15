import React, { useState, useEffect, useRef, useCallback } from 'react';
import { clsx } from 'clsx';

// --- INITIAL DATA & PRESETS ---

const generatePendulum = (i) => ({
  id: i,
  radius: Math.max(10, 120 - i * 14), // Decreasing radii
  speed: (i % 2 === 0 ? 1 : -1) * (1 + i * 0.5), // Alternating directions, increasing speeds
  phase: 0,
});

const generateDefaultPendulums = (count) => 
  Array.from({ length: count }).map((_, i) => generatePendulum(i));

const DEFAULT_PENDULUMS = generateDefaultPendulums(8);

const PRESETS = {
  'Harmonic Star': [
    { radius: 150, speed: 1, phase: 0 },
    { radius: 75, speed: -4, phase: 0 },
    { radius: 37, speed: 7, phase: 0 },
    { radius: 18, speed: -10, phase: 0 },
    { radius: 9, speed: 13, phase: 0 },
    { radius: 4, speed: -16, phase: 0 },
    { radius: 2, speed: 19, phase: 0 },
    { radius: 1, speed: -22, phase: 0 },
  ],
  'Nebula Swirl': [
    { radius: 100, speed: 0.5, phase: 0 },
    { radius: 90, speed: 0.51, phase: 45 },
    { radius: 80, speed: 0.52, phase: 90 },
    { radius: 70, speed: 0.53, phase: 135 },
    { radius: 60, speed: 0.54, phase: 180 },
    { radius: 50, speed: 0.55, phase: 225 },
    { radius: 40, speed: 0.56, phase: 270 },
    { radius: 30, speed: 0.57, phase: 315 },
  ],
  'Chaotic Orbit': Array.from({ length: 8 }).map((_, i) => ({
    radius: Math.random() * 80 + 20,
    speed: (Math.random() - 0.5) * 10,
    phase: Math.random() * 360,
  })),
};

// --- UI COMPONENTS ---

const Slider = ({ label, value, min, max, step, onChange, unit = '' }) => (
  <div className="flex flex-col gap-1.5 mb-3 group">
    <div className="flex justify-between items-center text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
      <span className="font-medium tracking-wide uppercase">{label}</span>
      <span className="font-mono bg-slate-800/50 px-1.5 py-0.5 rounded text-[10px] border border-slate-700/50">
        {Number(value).toFixed(step >= 1 ? 0 : 2)}{unit}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full"
    />
  </div>
);

const Button = ({ children, onClick, variant = 'primary', className, active }) => {
  const base = "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 active:scale-95";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] border border-indigo-500/50",
    secondary: "bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 border border-slate-700 backdrop-blur-sm",
    danger: "bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 hover:border-rose-500/50",
    ghost: "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
  };
  
  return (
    <button 
      onClick={onClick} 
      className={clsx(
        base, 
        variants[variant], 
        active && "bg-indigo-500/20 border-indigo-500 text-indigo-300",
        className
      )}
    >
      {children}
    </button>
  );
};

// --- CANVAS RENDERER ---

const DrawingCanvas = ({ pendulums, isPlaying, globalSpeed, trailLength, clearTrigger, showArms }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // Mutable state for the animation loop to avoid dependency arrays causing re-renders
  const stateRef = useRef({
    pendulums,
    globalSpeed,
    trailLength,
    time: 0,
    path: [],
    showArms
  });

  // Sync props to mutable ref
  useEffect(() => { stateRef.current.pendulums = pendulums; }, [pendulums]);
  useEffect(() => { stateRef.current.globalSpeed = globalSpeed; }, [globalSpeed]);
  useEffect(() => { stateRef.current.trailLength = trailLength; }, [trailLength]);
  useEffect(() => { stateRef.current.showArms = showArms; }, [showArms]);
  
  useEffect(() => {
    stateRef.current.path = [];
  }, [clearTrigger]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize performance
    let animationId;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const { width, height } = container.getBoundingClientRect();
      const st = stateRef.current;
      
      // Clear background with slight fade for motion blur effect if desired, 
      // but here we just clear solid to redraw the path cleanly
      ctx.fillStyle = '#020617'; // slate-950
      ctx.fillRect(0, 0, width, height);

      let cx = width / 2;
      let cy = height / 2;

      // Update time if playing
      if (isPlaying) {
        st.time += st.globalSpeed * 0.01;
      }

      // Calculate pendulum positions
      const currentArms = [];
      st.pendulums.forEach(p => {
        const angle = p.speed * st.time + (p.phase * Math.PI / 180);
        const nextX = cx + p.radius * Math.cos(angle);
        const nextY = cy + p.radius * Math.sin(angle);
        
        currentArms.push({ startX: cx, startY: cy, endX: nextX, endY: nextY, radius: p.radius });
        
        cx = nextX;
        cy = nextY;
      });

      // Add to path if playing
      if (isPlaying) {
        st.path.push({ x: cx, y: cy });
        // Manage trail length
        if (st.path.length > st.trailLength) {
          st.path.shift();
        }
      }

      // 1. Draw Trail
      if (st.path.length > 1) {
        ctx.beginPath();
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        
        for (let i = 0; i < st.path.length - 1; i++) {
          const pt1 = st.path[i];
          const pt2 = st.path[i + 1];
          
          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);
          
          // Color gradient based on position in trail
          const progress = i / st.path.length;
          // Shimmering color effect based on time and position
          const hue = (st.time * 50 + progress * 100) % 360;
          
          ctx.strokeStyle = `hsla(${hue}, 80%, 65%, ${progress})`;
          ctx.lineWidth = 1.5 + progress * 1.5;
          ctx.stroke();
        }
      }

      // 2. Draw Pendulum Arms (if enabled)
      if (st.showArms) {
        currentArms.forEach((arm, i) => {
          // Draw Circle
          ctx.beginPath();
          ctx.arc(arm.startX, arm.startY, arm.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(148, 163, 184, ${0.1 - (i * 0.01)})`; // fading slate rings
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw Arm Line
          ctx.beginPath();
          ctx.moveTo(arm.startX, arm.startY);
          ctx.lineTo(arm.endX, arm.endY);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.4 - (i * 0.03)})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw Joint
          ctx.beginPath();
          ctx.arc(arm.endX, arm.endY, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#fff';
          ctx.fill();
        });
      }

      // 3. Draw Tip Glow
      if (currentArms.length > 0) {
        const tip = currentArms[currentArms.length - 1];
        ctx.beginPath();
        ctx.arc(tip.endX, tip.endY, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#4f46e5';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying]); // Re-bind if play state changes to avoid unnecessary loop logic if paused, though mostly handled internally

  return (
    <div ref={containerRef} className="w-full h-full relative cursor-crosshair">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block"
      />
      
      {/* Decorative Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/20 to-slate-950/80"></div>
    </div>
  );
};

// --- MAIN APPLICATION ---

export default function App() {
  const [pendulums, setPendulums] = useState(DEFAULT_PENDULUMS);
  const [isPlaying, setIsPlaying] = useState(true);
  const [globalSpeed, setGlobalSpeed] = useState(1);
  const [trailLength, setTrailLength] = useState(1000);
  const [clearTrigger, setClearTrigger] = useState(0);
  const [showArms, setShowArms] = useState(true);
  const [activeTab, setActiveTab] = useState('global'); // 'global' | 'pendulums'

  const updatePendulum = (id, field, value) => {
    setPendulums(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleNumPendulumsChange = (newCount) => {
    setPendulums(prev => {
      if (newCount > prev.length) {
        const newPendulums = Array.from({ length: newCount - prev.length }).map((_, i) => 
          generatePendulum(prev.length + i)
        );
        return [...prev, ...newPendulums];
      } else if (newCount < prev.length) {
        return prev.slice(0, newCount);
      }
      return prev;
    });
    setClearTrigger(prev => prev + 1);
  };

  const loadPreset = (name) => {
    const preset = PRESETS[name];
    if (preset) {
      setPendulums(preset.map((p, i) => ({ ...p, id: i })));
      setClearTrigger(prev => prev + 1);
    }
  };

  const handleClear = () => setClearTrigger(prev => prev + 1);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950">
      
      {/* CANVAS AREA */}
      <main className="flex-1 relative border-r border-slate-800/50">
        <DrawingCanvas 
          pendulums={pendulums}
          isPlaying={isPlaying}
          globalSpeed={globalSpeed}
          trailLength={trailLength}
          clearTrigger={clearTrigger}
          showArms={showArms}
        />
        
        {/* Floating Top Controls */}
        <div className="absolute top-6 left-6 flex gap-3 z-10">
          <Button onClick={() => setIsPlaying(!isPlaying)} variant={isPlaying ? 'secondary' : 'primary'} className="w-12 h-12 !p-0 rounded-full">
            <iconify-icon icon={isPlaying ? "solar:pause-bold" : "solar:play-bold"} width="24" />
          </Button>
          <Button onClick={handleClear} variant="secondary" className="w-12 h-12 !p-0 rounded-full" title="Clear Canvas">
            <iconify-icon icon="solar:trash-bin-trash-linear" width="22" />
          </Button>
        </div>
      </main>

      {/* CONTROL PANEL */}
      <aside className="w-[380px] h-full flex flex-col bg-slate-900/80 backdrop-blur-xl border-l border-white/5 relative z-20">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5">
          <h1 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
            <iconify-icon icon="solar:infinity-linear" width="28" className="text-indigo-400" />
            Harmonograph
          </h1>
          <p className="text-slate-400 text-sm mt-1">Configure {pendulums.length} linked pendulums</p>
        </div>

        {/* Tabs */}
        <div className="flex p-2 bg-slate-950/50 border-b border-white/5">
          <button 
            onClick={() => setActiveTab('global')}
            className={clsx(
              "flex-1 py-2 text-sm font-medium rounded-md transition-colors",
              activeTab === 'global' ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
            )}
          >
            Global Settings
          </button>
          <button 
            onClick={() => setActiveTab('pendulums')}
            className={clsx(
              "flex-1 py-2 text-sm font-medium rounded-md transition-colors",
              activeTab === 'pendulums' ? "bg-slate-800 text-white" : "text-slate-400 hover:text-slate-200"
            )}
          >
            Pendulum Tuning
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          
          {activeTab === 'global' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              
              <section>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Simulation</h3>
                <Slider 
                  label="Number of Pendulums" 
                  value={pendulums.length} min={1} max={20} step={1}
                  onChange={handleNumPendulumsChange} 
                />
                <Slider 
                  label="Time Multiplier" 
                  value={globalSpeed} min={0} max={5} step={0.1} unit="x"
                  onChange={setGlobalSpeed} 
                />
                <Slider 
                  label="Trail Length" 
                  value={trailLength} min={100} max={5000} step={100} unit="pts"
                  onChange={setTrailLength} 
                />
                
                <div className="mt-6 flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/10 rounded-md text-indigo-400">
                      <iconify-icon icon="solar:eye-linear" width="20" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-200">Show Linkages</div>
                      <div className="text-xs text-slate-400">Display pendulum arms</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={showArms} onChange={(e) => setShowArms(e.target.checked)} />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
                  </label>
                </div>
              </section>

              <section>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Presets</h3>
                <div className="grid grid-cols-1 gap-2">
                  {Object.keys(PRESETS).map(name => (
                    <Button key={name} variant="secondary" onClick={() => loadPreset(name)} className="justify-start w-full">
                      <iconify-icon icon="solar:magic-stick-3-linear" className="text-indigo-400" />
                      {name}
                    </Button>
                  ))}
                  <Button 
                    variant="danger" 
                    onClick={() => {
                      setPendulums(generateDefaultPendulums(pendulums.length));
                      setClearTrigger(prev => prev+1);
                    }} 
                    className="justify-start w-full mt-2"
                  >
                    <iconify-icon icon="solar:restart-linear" />
                    Reset to Default
                  </Button>
                </div>
              </section>

            </div>
          )}

          {activeTab === 'pendulums' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              {pendulums.map((p, index) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-800/20 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-2 mb-4 text-sm font-medium text-indigo-300">
                    <iconify-icon icon="solar:target-linear" />
                    Pendulum {index + 1}
                  </div>
                  
                  <Slider 
                    label="Amplitude (Radius)" 
                    value={p.radius} min={0} max={200} step={1}
                    onChange={(val) => updatePendulum(p.id, 'radius', val)} 
                  />
                  <Slider 
                    label="Frequency (Speed)" 
                    value={p.speed} min={-20} max={20} step={0.1}
                    onChange={(val) => updatePendulum(p.id, 'speed', val)} 
                  />
                  <Slider 
                    label="Phase Offset" 
                    value={p.phase} min={0} max={360} step={1} unit="°"
                    onChange={(val) => updatePendulum(p.id, 'phase', val)} 
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </aside>
    </div>
  );
}