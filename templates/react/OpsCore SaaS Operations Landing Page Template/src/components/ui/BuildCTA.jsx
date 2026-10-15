import React from 'react';

const BuildCTA = () => {
  return (
    <button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center">
      <style>
        {`
          @keyframes dots-move { 
              0% { background-position: 0 0; } 
              100% { background-position: 24px 24px; } 
          }
        `}
      </style>
      
      {/* Full Border Beam (Single Beam) */}
      <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#D4AF37_360deg)] animate-[spin_3s_linear_infinite]"></div>
          <div className="absolute inset-[1px] rounded-full bg-[#050505]"></div>
      </div>

      {/* Inner Background & Effects */}
      <div className="-z-10 overflow-hidden bg-[#0A0A0A] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
          {/* Light Monotone Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
          
          {/* Animated Dots Pattern */}
          <div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite' }}></div>
          
          {/* Gold Glow on Hover */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#D4AF37]/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-[#D4AF37]/30"></div>
      </div>

      {/* Content */}
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">Start Building</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </button>
  );
};

export default BuildCTA;