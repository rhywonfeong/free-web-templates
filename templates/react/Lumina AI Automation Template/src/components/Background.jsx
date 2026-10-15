import React from 'react';
import UnicornScene from 'unicornstudio-react';

export default function Background() {
  return (
    <>
      {/* Background (component) added by Aura */}
      <div 
        className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-75" 
        data-alpha-mask="80" 
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' 
        }}
      >
        <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
          <div className="absolute w-full h-full left-0 top-0 -z-10">
             <UnicornScene projectId="uFY4IYPs2LU8fWm96Im2" />
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[60vh] bg-gradient-to-b from-zinc-400/30 via-zinc-500/5 to-transparent z-10"></div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-48 h-56 bg-zinc-400/10 blur-[100px] rounded-full z-10"></div>
        <div className="absolute -top-[50vh] w-[150vw] h-[100vh] rounded-[100%] border border-zinc-500/10 shadow-[0_0_120px_rgba(161,161,170,0.1)]"></div>
        <div className="absolute top-[20vh] w-[120vw] h-[120vh] rounded-[100%] border border-zinc-600/5 shadow-[0_0_80px_rgba(161,161,170,0.05)]"></div>
        <div className="absolute top-[30%] left-[15%] w-64 h-64 bg-zinc-500/5 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-zinc-400/5 blur-[100px] rounded-full"></div>
      </div>
    </>
  );
}