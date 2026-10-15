import { clsx } from 'clsx';

export default function HotspotMarker({ part, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(part.id)}
      className={clsx(
        "absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none",
      )}
      style={{ top: part.position.top, left: part.position.left }}
      aria-label={`View details for ${part.name}`}
    >
      {/* Outer pulsing ring */}
      <div className={clsx(
        "absolute inset-0 rounded-full transition-all duration-500",
        isActive 
          ? "bg-cyan-500/30 scale-150 animate-pulse" 
          : "bg-white/10 group-hover:bg-white/30 group-hover:scale-125"
      )} />
      
      {/* Inner dot */}
      <div className={clsx(
        "relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 backdrop-blur-sm",
        isActive 
          ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 scale-110 shadow-[0_0_15px_rgba(6,182,212,0.5)]" 
          : "border-white/50 bg-black/40 text-white group-hover:border-white group-hover:bg-black/60"
      )}>
        <iconify-icon icon="solar:plus-linear" width="16" className={clsx("transition-transform duration-300", isActive && "rotate-45")}></iconify-icon>
      </div>

      {/* Label tooltip (visible on hover when not active) */}
      {!isActive && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl text-zinc-300">
          {part.name}
        </div>
      )}
    </button>
  );
}