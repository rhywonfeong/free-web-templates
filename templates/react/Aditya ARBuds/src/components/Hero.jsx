import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="space-y-6 max-w-4xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-base font-medium mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          New Release
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 pb-2">
          EXPERIENCE THE<br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">FUTURE OF SOUND</span>
        </h1>
        
        {/* 3D Case & Image Representation */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto my-16 group perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative w-full h-full rounded-full border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center shadow-[0_0_80px_rgba(34,211,238,0.15)] transition-transform duration-700 hover:scale-105">
            {/* Outer Ring Glow */}
            <div className="absolute inset-2 rounded-full border-[3px] border-transparent border-t-cyan-400 border-l-blue-500 opacity-50 rotate-45 group-hover:rotate-90 transition-transform duration-1000"></div>
            {/* Inner Device Image */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-slate-950 shadow-inner flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80" 
                alt="AR Buds Pro Wireless Earbuds" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/80"></div>
              <div className="absolute bottom-6 flex flex-col items-center">
                <span className="text-3xl font-semibold tracking-tight text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] font-mono">100%</span>
                <span className="text-xs text-cyan-500 uppercase tracking-widest mt-1 font-medium">Charged</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-300">
            MUSIC. CALLS. LIFE.
          </h2>
          <div className="flex items-center justify-center gap-4 text-slate-500 tracking-[0.3em] text-base">
            <span>P</span><span>E</span><span>R</span><span>F</span><span>E</span><span>C</span><span>T</span><span>E</span><span>D</span><span>.</span>
          </div>
        </div>

        {/* Quick Specs Row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-16 text-base text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <iconify-icon icon="lucide:bluetooth" width="20" height="20" className="text-blue-400"></iconify-icon> BLUETOOTH 5.3
          </div>
          <div className="flex items-center gap-2">
            <iconify-icon icon="lucide:gamepad-2" width="20" height="20" className="text-cyan-400"></iconify-icon> LOW LATENCY
          </div>
          <div className="flex items-center gap-2">
            <iconify-icon icon="lucide:mic" width="20" height="20" className="text-blue-400"></iconify-icon> HD CALLING
          </div>
          <div className="flex items-center gap-2">
            <iconify-icon icon="lucide:bot" width="20" height="20" className="text-cyan-400"></iconify-icon> VOICE ASSISTANT
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;