import React from 'react';

export default function EnergyEffects({ state, progress }) {
  const isFiring = state === 'FIRING';
  const isCharging = state === 'CHARGING';

  return (
    <>
      {/* Inline styles for complex keyframe animations specific to this component */}
      <style>
        {`
          @keyframes fire-beam {
            0% { transform: scaleY(0); opacity: 0; }
            5% { transform: scaleY(1); opacity: 1; }
            80% { opacity: 1; filter: brightness(1.5); }
            100% { opacity: 0; filter: brightness(1); }
          }
          
          @keyframes expand-ring {
            0% { transform: translate(-50%, -50%) scale(0) rotateX(75deg); opacity: 1; border-width: 15px; }
            100% { transform: translate(-50%, -50%) scale(25) rotateX(75deg); opacity: 0; border-width: 1px; }
          }
          
          .beam-anim {
            transform-origin: bottom center;
            animation: fire-beam 1.2s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
          }
          
          .ring-anim-1 { animation: expand-ring 1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards; }
          .ring-anim-2 { animation: expand-ring 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) 0.1s forwards; }
          .ring-anim-3 { animation: expand-ring 1.5s cubic-bezier(0.1, 0.8, 0.3, 1) 0.2s forwards; }
        `}
      </style>

      {/* The Main Vertical Energy Beam */}
      <div 
        className={`absolute bottom-[50vh] left-1/2 -translate-x-1/2 w-8 h-[100vh] z-10 pointer-events-none mix-blend-screen
                    ${isFiring ? 'beam-anim' : 'hidden'}`}
      >
        <div className="w-full h-full bg-white glow-intense blur-[2px]"></div>
        <div className="absolute inset-0 w-full h-full bg-cyan-300 blur-[8px]"></div>
        <div className="absolute inset-0 w-full h-full bg-cyan-500 blur-[20px] opacity-70"></div>
      </div>

      {/* Expanding Shockwave Rings */}
      {isFiring && (
        <div className="absolute bottom-[50vh] left-1/2 z-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-cyan-300 ring-anim-1 shadow-[0_0_30px_cyan]"></div>
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-cyan-400 ring-anim-2 shadow-[0_0_20px_cyan]"></div>
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-white ring-anim-3 shadow-[0_0_40px_white]"></div>
        </div>
      )}

      {/* Charging Particles / Ambient energy gathering */}
      {isCharging && (
        <div className="absolute bottom-[50vh] left-1/2 -translate-x-1/2 z-0 pointer-events-none">
          <div 
            className="w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl transition-transform duration-100 ease-out mix-blend-screen"
            style={{ transform: `scale(${progress / 100})`, opacity: progress / 100 }}
          />
        </div>
      )}
    </>
  );
}