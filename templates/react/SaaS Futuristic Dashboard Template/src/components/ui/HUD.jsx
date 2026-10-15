import React from 'react';

export default function HUD({ system }) {
  const { phase, charge, isManualOverride, cycleCount, toggleManualOverride, forceFire } = system;

  const phaseColors = {
    IDLE: 'text-slate-400',
    CHARGING: 'text-cyan-400',
    FIRING: 'text-fuchsia-400 animate-pulse',
    RECHARGING: 'text-amber-400'
  };

  return (
    <footer className="w-full pointer-events-auto mt-auto flex flex-col md:flex-row gap-6 justify-between items-end">
      {/* Telemetry Panel */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full md:w-96 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-mono text-white/60 tracking-widest uppercase flex items-center gap-2">
            <iconify-icon icon="solar:cpu-bolt-line-duotone" class="text-lg"></iconify-icon>
            Core Status
          </h2>
          <span className={`text-xs font-mono font-bold tracking-widest ${phaseColors[phase]}`}>
            [{phase}]
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-mono mb-2">
              <span className="text-slate-400">Capacitor Charge</span>
              <span className="text-cyan-300">{Math.round(charge)}%</span>
            </div>
            {/* Custom Progress Bar */}
            <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
              <div 
                className={`h-full transition-all duration-75 ease-linear rounded-full 
                  ${phase === 'RECHARGING' ? 'bg-amber-500' : 'bg-gradient-to-r from-cyan-600 to-cyan-300'}
                  ${phase === 'FIRING' ? 'bg-white' : ''}
                `}
                style={{ width: `${charge}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-1">Total Cycles</p>
              <p className="text-xl font-medium tracking-tight text-white">{cycleCount.toString().padStart(4, '0')}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-1">Est. Output</p>
              <p className="text-xl font-medium tracking-tight text-white">
                {phase === 'FIRING' ? '1.21 GW' : '0.00 GW'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Command Deck */}
      <div className="flex gap-4">
        <button
          onClick={toggleManualOverride}
          className={`px-6 py-3 rounded-xl font-mono text-xs tracking-widest uppercase transition-all duration-300 border flex items-center gap-2
            ${isManualOverride 
              ? 'bg-fuchsia-500/10 border-fuchsia-500/50 text-fuchsia-300 hover:bg-fuchsia-500/20' 
              : 'bg-slate-900/50 border-white/10 text-slate-400 hover:bg-slate-800 hover:text-white backdrop-blur-md'
            }`}
        >
          <iconify-icon icon={isManualOverride ? "solar:lock-unlocked-bold-duotone" : "solar:lock-keyhole-minimalistic-line-duotone"}></iconify-icon>
          Override {isManualOverride ? 'Active' : 'Off'}
        </button>

        <button
          onClick={forceFire}
          disabled={!isManualOverride || phase === 'FIRING'}
          className={`px-8 py-3 rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2
            ${!isManualOverride || phase === 'FIRING'
              ? 'bg-slate-900/30 text-slate-600 border border-transparent cursor-not-allowed'
              : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]'
            }`}
        >
          <iconify-icon icon="solar:flame-bold-duotone" class="text-lg"></iconify-icon>
          Execute Fire
        </button>
      </div>
    </footer>
  );
}