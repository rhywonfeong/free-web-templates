export default function About() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-grid-pattern p-8">
      <div className="max-w-2xl rounded-2xl border border-white/10 bg-zinc-900/80 p-10 text-center shadow-2xl backdrop-blur-xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/50">
          <iconify-icon icon="solar:tuning-square-2-line-duotone" width="32" height="32"></iconify-icon>
        </div>
        
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white">
          Custom React Physics Engine
        </h1>
        
        <p className="mb-8 text-zinc-400 leading-relaxed">
          This playground demonstrates an advanced React pattern where a high-frequency 
          <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-xs text-indigo-300">requestAnimationFrame</code> 
          loop directly mutates standard DOM nodes via React Refs. This bypasses the typical React render cycle for 
          unparalleled performance while keeping the UI and state management entirely within the React ecosystem.
        </p>

        <div className="grid grid-cols-2 gap-4 text-left">
          <div className="rounded-xl border border-white/5 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200">
              <iconify-icon icon="solar:bolt-circle-line-duotone" width="18"></iconify-icon>
              Zero Dependencies
            </div>
            <p className="text-xs text-zinc-500">
              The physics math (Euler integration, elastic collisions, momentum transfer) is written entirely from scratch in plain JavaScript.
            </p>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200">
              <iconify-icon icon="solar:align-bottom-bold-duotone" width="18"></iconify-icon>
              Distance Constraints
            </div>
            <p className="text-xs text-zinc-500">
              Includes a real-time iterative constraint solver connecting particles together to simulate soft-body mechanics like cloth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}