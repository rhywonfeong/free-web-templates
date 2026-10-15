import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20 flex flex-col lg:flex-row gap-16 items-center">
      
      {/* Left side: Framed Visual */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative">
        <div className="relative w-full aspect-square max-w-[500px] border-gradient border-gradient-purple rounded-2xl p-1 group">
          <div className="w-full h-full bg-[#060D0A] rounded-2xl relative overflow-hidden flex items-center justify-center">
            {/* Inner texture and frame */}
            <div className="absolute inset-4 border border-emerald-500/10 rounded-xl dotted-texture opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5"></div>
            
            {/* Center Graphic */}
            <div className="relative z-10 w-48 h-48 rounded-full border border-emerald-500/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
              <div className="w-32 h-32 rounded-full border border-emerald-500/20 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                 <div className="w-20 h-20 rounded-full border border-emerald-500/40 border-dashed animate-[spin_20s_linear_infinite_reverse]"></div>
              </div>
              <iconify-icon icon="solar:shield-network-linear" width="64" class="absolute text-emerald-400 opacity-80 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"></iconify-icon>
            </div>
            
            {/* L-Brackets */}
            <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-emerald-500/50"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-emerald-500/50"></div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex gap-3 mt-8 ml-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-emerald-500"></div>
          <span className="text-[10px] text-emerald-500 tracking-[0.2em] font-medium uppercase">Zero-Trust Architecture</span>
        </div>

        {/* Massive Title */}
        <div className="flex items-end gap-6 mb-10">
          <h1 className="text-7xl lg:text-8xl font-medium tracking-tight text-white leading-none">V7</h1>
          <div className="h-16 w-px bg-white/20 mb-2"></div>
          <div className="flex flex-col mb-2">
            <span className="text-xl lg:text-2xl font-light text-slate-300 tracking-wider">CLOUD SECURITY</span>
            <span className="text-xl lg:text-2xl font-semibold text-white tracking-widest">AEGIS</span>
          </div>
        </div>

        {/* Feature List */}
        <ul className="flex flex-col gap-5 mb-10 w-full max-w-md">
          {[
            { icon: 'solar:radar-2-linear', text: 'Real-time Threat Detection AI' },
            { icon: 'solar:shield-check-linear', text: 'Military-grade Encryption Protocols' },
            { icon: 'solar:bolt-linear', text: 'Automated Incident Response' }
          ].map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                <iconify-icon icon={feature.icon} width="16" class="text-emerald-500"></iconify-icon>
              </div>
              <span className="text-sm text-slate-300">{feature.text}</span>
            </li>
          ))}
        </ul>

        {/* Metric Bars */}
        <div className="w-full max-w-md space-y-4 mb-12">
          {[
            { label: 'Threat Block Rate', val: 99.9 },
            { label: 'System Uptime', val: 99.9 },
            { label: 'API Latency (ms)', val: 12 }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[11px] uppercase tracking-widest text-slate-400 font-medium">
                <span>{stat.label}</span>
                <span className="text-white">{stat.val}{i === 2 ? '' : '%'}</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500/50 to-emerald-500 rounded-full"
                  style={{ width: `${i === 2 ? 96 : stat.val}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-6">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Start Free Trial
            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
          </button>
          <div className="flex gap-2">
            <span className="px-3 py-1.5 rounded-md border border-emerald-500/20 text-xs text-emerald-400 bg-emerald-500/5">SOC 2 Type II</span>
            <span className="px-3 py-1.5 rounded-md border border-emerald-500/20 text-xs text-emerald-400 bg-emerald-500/5">ISO 27001</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;