import React from 'react';

const BottomBanner = () => {
  return (
    <section className="py-24 px-6 lg:px-12 flex justify-center border-t border-white/5">
      <div className="w-full max-w-[1200px] relative">
        
        {/* Massive background decorative circle */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none z-0"></div>
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-emerald-500/10 pointer-events-none z-0"></div>

        {/* The Banner Card */}
        <div className="relative z-10 w-full bg-[#030706] border border-emerald-500/20 rounded-2xl p-12 lg:p-20 text-center dotted-texture overflow-hidden">
          
          {/* Subtle gradient glow inside */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl rounded-full"></div>

          <div className="max-w-2xl mx-auto flex flex-col items-center relative z-20">
            <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center mb-8">
              <iconify-icon icon="solar:shield-warning-linear" width="24" class="text-emerald-500"></iconify-icon>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
              Secure Your Perimeter
            </h2>
            
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-10">
              Deploy enterprise-grade protection across your entire multi-cloud environment in minutes. Stop advanced persistent threats and zero-day exploits before they breach your network.
            </p>
            
            <button className="flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black text-sm font-semibold rounded-lg hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Initialize Defense
              <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BottomBanner;