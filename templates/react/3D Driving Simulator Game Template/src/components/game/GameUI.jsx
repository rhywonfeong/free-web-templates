import React from 'react';
import clsx from 'clsx';

export default function GameUI({ gameState, onRestart, onQuit }) {
  const { score, fuel, isGameOver } = gameState;

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 z-10">
      {/* Top HUD */}
      <div className="flex justify-between items-start">
        <div className="glass-panel px-6 py-4 rounded-2xl flex flex-col gap-1 min-w-[200px]">
          <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Distance</span>
          <div className="text-3xl font-bold text-white tracking-tight flex items-baseline gap-1">
            {score} <span className="text-lg text-slate-400 font-medium">m</span>
          </div>
        </div>

        <div className="glass-panel px-6 py-4 rounded-2xl flex flex-col gap-2 min-w-[240px]">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider flex items-center gap-1">
              <iconify-icon icon="solar:gas-station-linear"></iconify-icon> Fuel
            </span>
            <span className={clsx("text-sm font-bold", fuel < 20 ? "text-red-400" : "text-white")}>
              {Math.max(0, Math.floor(fuel))}%
            </span>
          </div>
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
            <div 
              className={clsx(
                "h-full transition-all duration-300",
                fuel > 50 ? "bg-gradient-to-r from-emerald-400 to-emerald-500" :
                fuel > 20 ? "bg-gradient-to-r from-amber-400 to-amber-500" :
                "bg-gradient-to-r from-red-500 to-red-600 animate-pulse"
              )}
              style={{ width: `${Math.max(0, Math.min(100, fuel))}%` }}
            />
          </div>
        </div>
      </div>

      {/* Controls Hint */}
      {!isGameOver && (
        <div className="mx-auto mb-8 glass-panel px-6 py-3 rounded-full flex gap-6 items-center opacity-50">
           <div className="flex items-center gap-2 text-sm text-white font-medium">
             <span className="px-2 py-1 bg-white/20 rounded">←</span> Brake
           </div>
           <div className="w-px h-4 bg-white/20"></div>
           <div className="flex items-center gap-2 text-sm text-white font-medium">
             Gas <span className="px-2 py-1 bg-white/20 rounded">→</span>
           </div>
        </div>
      )}

      {/* Game Over Screen */}
      {isGameOver && (
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center pointer-events-auto">
          <div className="glass-panel p-10 rounded-3xl max-w-md w-full flex flex-col items-center text-center animate-in zoom-in duration-300 shadow-[0_0_100px_rgba(0,0,0,0.5)] border-white/10">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
              <iconify-icon icon="solar:danger-triangle-bold-duotone" style={{ color: '#f87171', fontSize: '48px' }}></iconify-icon>
            </div>
            
            <h2 className="text-4xl font-bold text-white tracking-tight mb-2">Out of Fuel!</h2>
            <p className="text-slate-400 mb-8 font-light">Your journey ends here, but the road goes on forever.</p>
            
            <div className="w-full bg-black/40 rounded-2xl p-6 mb-8 border border-white/5">
              <div className="text-sm text-slate-400 uppercase tracking-widest mb-1">Final Distance</div>
              <div className="text-5xl font-bold text-gradient">{score}m</div>
            </div>

            <div className="flex w-full gap-4">
              <button 
                onClick={onQuit}
                className="flex-1 py-4 rounded-xl font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors border border-transparent hover:border-white/10"
              >
                Menu
              </button>
              <button 
                onClick={onRestart}
                className="flex-[2] py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <iconify-icon icon="solar:restart-linear" style={{ fontSize: '20px' }}></iconify-icon>
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}