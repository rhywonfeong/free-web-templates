import React from 'react';
import Skyline from './Skyline';
import Tower from './Tower';
import EnergyEffects from './EnergyEffects';

export default function SceneManager({ state, progress }) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex items-end justify-center perspective-[1000px]">
      {/* Starfield / Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             backgroundPosition: 'center',
             transform: 'translateZ(-500px) scale(2)'
           }} 
      />

      {/* Main Container for 3D positioning */}
      <div className="relative w-full h-full max-w-7xl mx-auto flex items-end justify-center preserve-3d">
        
        {/* Distant City Layer */}
        <div className="absolute w-full h-[60vh] bottom-0 z-10 opacity-40">
          <Skyline layer="back" colorClass="bg-indigo-950" />
        </div>

        {/* Mid City Layer */}
        <div className="absolute w-full h-[45vh] bottom-0 z-20 opacity-60">
          <Skyline layer="mid" colorClass="bg-slate-900" />
        </div>

        {/* The Central Tower Element */}
        <div className="absolute bottom-0 z-30 flex flex-col items-center">
          <EnergyEffects state={state} progress={progress} />
          <Tower state={state} progress={progress} />
        </div>

        {/* Foreground City Layer */}
        <div className="absolute w-full h-[30vh] bottom-0 z-40">
          <Skyline layer="front" colorClass="bg-slate-950" />
        </div>
        
        {/* Ground Glow */}
        <div className="absolute bottom-[-10vh] w-full h-[20vh] bg-cyan-900/20 blur-[100px] z-50 rounded-[100%]" />
      </div>
    </div>
  );
}