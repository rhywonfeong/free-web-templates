import { easingOptions } from '../utils/easings';
import clsx from 'clsx';

export default function Sidebar({
  easing, setEasing,
  duration, setDuration,
  strokeColor, setStrokeColor,
  strokeWidth, setStrokeWidth,
  hasContent, isAnimating,
  onPlay, onClear
}) {
  const colors = [
    '#ffffff', // white
    '#818cf8', // indigo
    '#34d399', // emerald
    '#fbbf24', // amber
    '#f87171', // red
    '#a78bfa', // violet
  ];

  return (
    <aside className="w-80 border-r border-white/10 bg-zinc-950/80 backdrop-blur-xl flex flex-col h-full overflow-y-auto custom-scrollbar">
      <div className="p-6 space-y-8">
        
        {/* Style Section */}
        <section className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
            <iconify-icon icon="solar:palette-linear"></iconify-icon>
            Appearance
          </h3>
          
          <div className="space-y-3">
            <label className="text-sm font-medium text-zinc-300 flex justify-between">
              Color
            </label>
            <div className="flex flex-wrap gap-2">
              {colors.map(c => (
                <button
                  key={c}
                  onClick={() => setStrokeColor(c)}
                  className={clsx(
                    "w-8 h-8 rounded-full border-2 transition-all cursor-pointer",
                    strokeColor === c ? "border-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.3)]" : "border-transparent hover:scale-105"
                  )}
                  style={{ backgroundColor: c }}
                  aria-label={`Select color ${c}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="text-sm font-medium text-zinc-300 flex justify-between">
              Thickness <span>{strokeWidth}px</span>
            </label>
            <input 
              type="range" 
              min="1" max="20" 
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
              className="w-full accent-indigo-500 h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </section>

        <div className="h-px bg-white/5"></div>

        {/* Animation Section */}
        <section className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
            <iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
            Motion Dynamics
          </h3>

          <div className="space-y-3">
            <label className="text-sm font-medium text-zinc-300 flex justify-between">
              Duration <span>{duration}s</span>
            </label>
            <input 
              type="range" 
              min="0.5" max="10" step="0.5"
              value={duration}
              onChange={(e) => setDuration(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="pt-2">
            <label className="text-sm font-medium text-zinc-300 block mb-3">Easing Function</label>
            <div className="grid grid-cols-2 gap-2">
              {easingOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setEasing(opt.id)}
                  className={clsx(
                    "flex flex-col items-start p-3 rounded-xl border text-left transition-all",
                    easing === opt.id 
                      ? "bg-indigo-500/10 border-indigo-500/50 text-indigo-300 shadow-[inset_0_0_20px_rgba(99,102,241,0.1)]" 
                      : "bg-zinc-900/50 border-white/5 text-zinc-400 hover:bg-zinc-800 hover:border-white/10"
                  )}
                >
                  <iconify-icon icon={opt.icon} class="text-xl mb-1"></iconify-icon>
                  <span className="text-sm font-medium text-zinc-200">{opt.name}</span>
                  <span className="text-[10px] opacity-70 mt-0.5 leading-tight">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

      </div>
      
      {/* Footer sticky area for quick actions if needed, or just let it scroll */}
      <div className="mt-auto p-6 border-t border-white/5 bg-zinc-950/90 backdrop-blur-xl">
        <div className="bg-zinc-900 rounded-xl p-4 border border-white/5 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <h4 className="text-sm font-medium text-white mb-1">How it works</h4>
           <p className="text-xs text-zinc-400 leading-relaxed">
             Draw something on the canvas. Your stroke timing is recorded. Hit animate to replay it with custom physics.
           </p>
        </div>
      </div>
    </aside>
  );
}