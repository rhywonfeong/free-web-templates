import React from 'react';
import SceneManager from '../components/scene/SceneManager';
import HUD from '../components/ui/HUD';
import { useTowerState } from '../hooks/useTowerState';

export default function NodeControlPage() {
  const towerSystem = useTowerState();

  return (
    <main className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950">
      {/* 3D-ish Scene Container */}
      <SceneManager state={towerSystem.phase} progress={towerSystem.charge} />
      
      {/* Overlay UI */}
      <div className="absolute inset-0 z-50 pointer-events-none p-6 md:p-12 flex flex-col justify-between scanlines">
        <header className="flex justify-between items-start pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center backdrop-blur-md">
              <iconify-icon icon="solar:ranking-bold-duotone" class="text-cyan-400 text-2xl"></iconify-icon>
            </div>
            <div>
              <h1 className="text-xl font-medium tracking-tight text-white m-0 leading-tight">PROJECT AETHER</h1>
              <p className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase">Node Control Interface</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${towerSystem.phase === 'FIRING' ? 'bg-fuchsia-400' : 'bg-cyan-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${towerSystem.phase === 'FIRING' ? 'bg-fuchsia-500' : 'bg-cyan-500'}`}></span>
            </span>
            <span className="text-xs font-mono text-white/80">LIVE</span>
          </div>
        </header>

        <HUD system={towerSystem} />
      </div>
    </main>
  );
}