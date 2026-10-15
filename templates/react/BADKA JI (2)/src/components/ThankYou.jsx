import React from 'react';
import { Reveal } from './Reveal';

export function ThankYou() {
  return (
    <section className="min-h-[60vh] flex overflow-hidden bg-zinc-950 border-white/5 border-t relative items-center justify-center">
      
      {/* Background Bye Animation */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center overflow-hidden z-0">
        
        {/* Huge Floating 'BYE' Text */}
        <div className="absolute inset-0 flex items-center justify-center mix-blend-screen">
          <span className="text-[25vw] font-black font-playfair text-transparent stroke-bye opacity-20 animate-bye select-none tracking-tighter">
            BYE!
          </span>
        </div>

        {/* Waving Stickman Backdrop */}
        <div className="absolute bottom-[-5%] right-[5%] w-64 h-64 md:w-80 md:h-80 opacity-20 stickman-container">
          <svg className="w-full h-full stickman-svg overflow-visible" viewBox="0 0 100 100">
            <g className="stickman-group" style={{ '--sp': '2s', '--bounce': '-5px' }}>
              {/* Static Body & Legs */}
              <line x1="50" y1="55" x2="40" y2="95"></line>
              <line x1="50" y1="55" x2="60" y2="95"></line>
              <line className="torso" x1="50" y1="26" x2="50" y2="55"></line>
              <circle className="head" cx="50" cy="18" r="8" fill="none"></circle>
              
              {/* Left Arm (Relaxed) */}
              <line x1="50" y1="30" x2="35" y2="60"></line>
              
              {/* Waving Right Arm */}
              <g className="wave-arm" style={{ transformOrigin: '50px 30px' }}>
                <line x1="50" y1="30" x2="70" y2="15"></line>
                <line className="wave-forearm" x1="70" y1="15" x2="90" y2="10" style={{ transformOrigin: '70px 15px' }}></line>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <Reveal className="relative z-10 flex flex-col items-center justify-center text-center px-8">
        <h2 className="sm:text-7xl text-5xl text-white tracking-tight font-playfair font-medium mb-4 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">
          THANK YOU
        </h2>
        
        {/* Glowing Thematic Line Underneath */}
        <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_red] mb-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        </div>
        
        <p className="leading-relaxed text-xl text-zinc-400 font-pt-serif max-w-lg">
          PORTFOLIO END!
        </p>
      </Reveal>
    </section>
  );
}