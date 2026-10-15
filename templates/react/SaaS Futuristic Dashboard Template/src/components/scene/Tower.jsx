import React, { useMemo } from 'react';

export default function Tower({ state, progress }) {
  const isCharging = state === 'CHARGING';
  const isFiring = state === 'FIRING';
  
  const coreGlowStyles = useMemo(() => {
    if (isFiring) return { opacity: 1, filter: 'blur(20px) brightness(2)' };
    if (isCharging) return { opacity: 0.2 + (progress / 100) * 0.8, filter: `blur(${10 + (progress / 10)}px)` };
    return { opacity: 0.2, filter: 'blur(10px)' };
  }, [state, progress, isCharging, isFiring]);

  return (
    <div className="relative flex flex-col items-center w-64 h-[50vh] transition-transform duration-1000 z-30">
      {/* Tower Tip (Emitter) */}
      <div className="relative w-4 h-12 bg-slate-300 z-20 z-index-[2]">
        <div className="absolute inset-0 bg-cyan-400 opacity-50 mix-blend-overlay"></div>
        {/* Emitting Core Node */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-100 mix-blend-screen transition-all duration-300 ease-out"
          style={coreGlowStyles}
        >
          <div className="absolute inset-0 rounded-full bg-white glow-intense animate-pulse"></div>
        </div>
      </div>

      {/* Tower Neck */}
      <div className="w-12 h-24 bg-gradient-to-b from-slate-700 to-slate-800 flex justify-center overflow-hidden border-x border-slate-600 relative z-10">
        {/* Energy rising effect in neck */}
        <div 
          className="w-full bg-cyan-400/40 absolute bottom-0 transition-all duration-75 ease-linear"
          style={{ height: isFiring ? '100%' : `${progress}%`, opacity: state === 'IDLE' ? 0 : 1 }}
        />
        <div className="w-px h-full bg-slate-900/50 relative z-10"></div>
      </div>

      {/* Tower Base Structure */}
      <div className="w-32 h-full bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 border-x border-t border-slate-700/50 flex flex-col items-center relative rounded-t-lg shadow-2xl">
        {/* Geometric Accents */}
        <div className="w-full h-8 border-b border-cyan-900/30 flex justify-around items-center px-4">
          <div className={`w-2 h-2 rounded-full transition-colors ${state === 'CHARGING' ? 'bg-cyan-500 animate-pulse' : 'bg-slate-700'}`}></div>
          <div className={`w-2 h-2 rounded-full transition-colors ${state === 'FIRING' ? 'bg-fuchsia-500 shadow-[0_0_10px_#d946ef]' : 'bg-slate-700'}`}></div>
          <div className={`w-2 h-2 rounded-full transition-colors ${state === 'RECHARGING' ? 'bg-amber-500 animate-pulse' : 'bg-slate-700'}`}></div>
        </div>
        
        {/* Central Core Chamber */}
        <div className="mt-8 w-16 h-32 rounded-full border border-slate-700/50 bg-slate-900 p-1 relative overflow-hidden">
           <div 
             className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-cyan-600 to-cyan-300 transition-all duration-75"
             style={{ height: `${progress}%` }}
           >
             {/* Particles in chamber could go here */}
           </div>
           {/* Glass reflection */}
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-full"></div>
        </div>
        
        {/* Base stabilizers */}
        <div className="absolute -left-16 bottom-0 w-16 h-1/3 bg-slate-900 border-r border-t border-slate-700/30 transform skew-y-12 rounded-tl-md"></div>
        <div className="absolute -right-16 bottom-0 w-16 h-1/3 bg-slate-900 border-l border-t border-slate-700/30 transform -skew-y-12 rounded-tr-md"></div>
      </div>
    </div>
  );
}