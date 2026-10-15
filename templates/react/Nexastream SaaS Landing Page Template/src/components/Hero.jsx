import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Mobile Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/60 to-transparent md:hidden z-10 pointer-events-none"></div>

      {/* Left: Text Content */}
      <div className="w-full md:w-[50%] lg:w-[45%] px-6 md:px-12 pt-8 md:pt-24 z-30 pointer-events-none flex flex-col justify-start md:justify-between pb-12 h-full">
        <div className="pointer-events-auto max-w-xl mx-auto md:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium tracking-wide mb-6 shadow-[0_0_10px_rgba(14,165,233,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
            NEW VERSION 2.0
          </div>

          {/* Title */}
          <h1 className="leading-[0.95] sm:text-6xl lg:text-8xl md:leading-[0.9] md:mb-8 md:text-6xl text-6xl font-normal text-white tracking-tight font-serif-custom mb-8 drop-shadow-2xl">
            Orchestrate
            <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-sky-400 to-blue-600 pr-2"> live insights</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-zinc-400 mb-8 md:mb-12 max-w-md font-light">
            Ingest streams, transform with SQL, and materialize fresh results instantly.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20 w-full flex-none">
            {/* Primary */}
            <button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(14,165,233,0.3)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center w-full sm:w-auto flex-none">
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#38bdf8_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
              <span className="flex items-center justify-center gap-2 transition-colors duration-300 text-white text-sm font-medium bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:bg-gradient-to-b group-hover:from-zinc-900 group-hover:to-black">
                <span className="relative z-10">Start building</span>
                <iconify-icon icon="lucide:chevron-right" className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" width="16" height="16"></iconify-icon>
              </span>
            </button>

            {/* Secondary */}
            <button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center w-full sm:w-auto flex-none">
              <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#a1a1aa_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
              <span className="flex items-center justify-center gap-2 transition-colors duration-300 text-zinc-300 group-hover:text-white text-sm font-medium bg-black w-full h-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <iconify-icon icon="lucide:file-text" className="relative z-10" width="16" height="16"></iconify-icon>
                <span className="relative z-10">Documentation</span>
              </span>
            </button>
          </div>

          {/* Trusted By Section */}
          <div className="border-white/10 border-t mt-auto pt-8" style={{ maskImage: 'linear-gradient(90deg, transparent, black 5%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 70%, transparent)' }}>
            <p className="uppercase md:text-left text-xs font-semibold text-zinc-500 tracking-widest text-center mb-6 ml-4">
              Trusted by engineering teams at
            </p>
            <div className="flex flex-wrap md:justify-start gap-8 md:gap-10 hover:grayscale-0 hover:opacity-100 transition-all duration-500 opacity-50 ml-4 grayscale invert brightness-200 gap-x-8 gap-y-8 items-center justify-center">
              <iconify-icon icon="logos:asana" width="96" height="36" className="text-black"></iconify-icon>
              <iconify-icon icon="logos:stripe" width="96" height="36" className="text-black"></iconify-icon>
              <iconify-icon icon="logos:google" width="96" height="36" className="text-black"></iconify-icon>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Visualization */}
      <div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-0 opacity-40 md:opacity-100">
        <svg className="w-full h-full" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3"></stop>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2"></stop>
              <stop offset="100%" stopColor="#000000" stopOpacity="0.0"></stop>
            </linearGradient>
          </defs>

          {/* Main Flow Paths Reference */}
          <path id="pathMain" d="M 400 1000 C 600 900, 900 600, 1300 200" fill="none"></path>

          {/* Noodles (Visible only on Desktop) */}
          <g className="hidden lg:block">
            {/* Noodle 1 */}
            <rect x="580" y="600" width="120" height="400" rx="60" transform="rotate(-15 640 800)" fill="none" stroke="#3f3f46" strokeWidth="0.5" opacity="0.3"></rect>
            <rect x="580" y="600" width="120" height="400" rx="60" transform="rotate(-15 640 800)" fill="none" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" className="animate-beam" opacity="0.5"></rect>

            {/* Noodle 2 */}
            <rect x="880" y="300" width="140" height="450" rx="70" transform="rotate(-25 950 525)" fill="none" stroke="#3f3f46" strokeWidth="0.5" opacity="0.3"></rect>
            <rect x="880" y="300" width="140" height="450" rx="70" transform="rotate(-25 950 525)" fill="none" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" className="animate-beam" opacity="0.5" style={{ animationDelay: '-3s' }}></rect>

            {/* Noodle 3 */}
            <rect x="1050" y="50" width="100" height="300" rx="50" transform="rotate(-35 1100 200)" fill="none" stroke="#3f3f46" strokeWidth="0.5" opacity="0.3"></rect>
            <rect x="1050" y="50" width="100" height="300" rx="50" transform="rotate(-35 1100 200)" fill="none" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" className="animate-beam" opacity="0.5" style={{ animationDelay: '-6s' }}></rect>
          </g>

          {/* Background Roads */}
          <path d="M 600 1000 C 700 900, 800 700, 1300 550" fill="none" stroke="#1e293b" strokeWidth="30" opacity="0.3" strokeLinecap="round"></path>
          <path d="M 900 1000 C 950 900, 900 700, 1300 450" fill="none" stroke="#1e293b" strokeWidth="20" opacity="0.3" strokeLinecap="round"></path>

          {/* Main Highway */}
          <path d="M 400 1000 C 600 900, 900 600, 1300 200" fill="none" stroke="url(#roadGradient)" strokeWidth="50" opacity="0.8" strokeLinecap="butt"></path>
          <path d="M 400 1000 C 600 900, 900 600, 1300 200" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="20 40" opacity="0.6"></path>

          {/* Moving Data Packet */}
          <rect x="-30" y="-15" width="60" height="30" rx="4" fill="#0ea5e9" opacity="0.95" filter="drop-shadow(0 0 10px rgba(14,165,233,0.5))">
            <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#pathMain"></mpath>
            </animateMotion>
          </rect>
        </svg>

        {/* UI Cards Overlay (Nodes) */}

        {/* 03: Deliver */}
        <div className="hidden md:block absolute md:right-8 md:bottom-[20rem] lg:right-[10%] lg:top-[15%] lg:bottom-auto animate-float z-40 transform origin-bottom-right">
          <div className="bg-zinc-900/90 backdrop-blur-md p-5 w-52 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 relative z-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-400">03</span>
                <span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">Deliver</span>
              </div>
              <iconify-icon icon="lucide:server" className="text-zinc-500" width="16" height="16"></iconify-icon>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
              <span className="text-xs text-zinc-400 font-medium">Endpoint Active</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[10px] text-zinc-500 font-mono uppercase">Latency</span>
              <span className="text-xs text-emerald-400 font-mono font-medium">12ms</span>
            </div>
          </div>
        </div>

        {/* 02: Transform */}
        <div className="hidden md:block absolute md:right-8 md:bottom-[12rem] lg:right-[25%] lg:bottom-[40%] animate-float delay-200 z-40 transform origin-bottom-right">
          <div className="bg-zinc-900/90 backdrop-blur-md p-5 w-56 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 relative z-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-400">02</span>
                <span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">Transform</span>
              </div>
              <iconify-icon icon="lucide:cpu" className="text-zinc-500" width="16" height="16"></iconify-icon>
            </div>
            <div className="bg-black/40 p-2.5 rounded border border-white/5">
              <div className="flex gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
              </div>
              <p className="font-mono text-[10px] text-zinc-400 leading-tight">
                <span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> stream
                <br /><span className="text-purple-400">WHERE</span> val &gt; 0.95
              </p>
            </div>
          </div>
        </div>

        {/* 01: Ingest */}
        <div className="hidden md:block absolute md:right-8 md:bottom-12 lg:left-[52%] lg:bottom-[12%] lg:right-auto animate-float delay-500 z-40 transform origin-bottom-left">
          <div className="bg-zinc-900/90 backdrop-blur-md p-5 w-52 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 relative z-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-400">01</span>
                <span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">Ingest</span>
              </div>
              <iconify-icon icon="lucide:zap" className="text-zinc-500" width="16" height="16"></iconify-icon>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-orange-900/30 text-orange-400 flex items-center justify-center text-[10px] border border-orange-500/20">
                    <iconify-icon icon="lucide:kafka"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-medium text-zinc-400">Kafka</span>
                </div>
                <span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full font-medium">Live</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-900/30 text-blue-400 flex items-center justify-center text-[10px] border border-blue-500/20">
                    <iconify-icon icon="lucide:database"></iconify-icon>
                  </div>
                  <span className="text-[10px] font-medium text-zinc-400">Postgres</span>
                </div>
                <span className="text-[9px] text-zinc-600">Syncing</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;