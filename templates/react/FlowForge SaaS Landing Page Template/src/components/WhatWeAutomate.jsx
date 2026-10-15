import React from 'react';

const WhatWeAutomate = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl tracking-tight font-medium text-white mb-4">What We Automate</h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-xl font-light">End-to-end integration mapping across hardware interfaces and digital infrastructure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300 group">
          <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-colors">
            <iconify-icon icon="solar:routing-2-linear" style={{ strokeWidth: '1.5' }} className="text-xl"></iconify-icon>
          </div>
          <h3 className="text-lg font-medium text-white tracking-tight mb-2">Supply Chain Logic</h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">Autonomous routing, predictive inventory load balancing, and autonomous dispatch synchronization.</p>
        </div>
        
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300 group">
          <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-colors">
            <iconify-icon icon="solar:database-linear" style={{ strokeWidth: '1.5' }} className="text-xl"></iconify-icon>
          </div>
          <h3 className="text-lg font-medium text-white tracking-tight mb-2">Data ETL Pipelines</h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">Self-healing data extraction, schema normalization, and dynamic multi-node stream processing.</p>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300 group">
          <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-8 text-zinc-300 group-hover:text-white transition-colors">
            <iconify-icon icon="solar:cpu-linear" style={{ strokeWidth: '1.5' }} className="text-xl"></iconify-icon>
          </div>
          <h3 className="text-lg font-medium text-white tracking-tight mb-2">Factory Hardware</h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">Direct PLC integrations, robotic arm pathing optimization, and real-time sensory array ingestion.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAutomate;