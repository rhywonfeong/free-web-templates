import React from 'react';

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 text-center pt-16 pb-24">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-brand-blue mb-8 border-brand-blue/20">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
        System Status: Operational
      </div>
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gradient max-w-4xl mx-auto leading-[1.1] mb-6">
        Engineering Digital Dominance
      </h1>
      <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-10">
        A masterclass in technical consulting and performance marketing. We deploy cinematic web experiences, AI automation, and data-driven scaling strategies.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#pricing" className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform duration-300">
          Explore Frameworks
        </a>
        <a href="#services" className="w-full sm:w-auto px-6 py-3 rounded-full glass-panel text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
          View Architecture <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
        </a>
      </div>
    </section>
  );
}

export default Hero;