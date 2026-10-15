import React from 'react';

function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-3">Service Architecture</h2>
        <p className="text-sm text-white/50">Modular solutions designed for infinite scalability.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Large Feature Card */}
        <div className="glass-panel rounded-2xl p-6 md:col-span-2 lg:col-span-2 aspect-[4/3] md:aspect-auto flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <iconify-icon icon="solar:laptop-minimalistic-linear" stroke-width="1.5" className="text-3xl text-brand-blue mb-4 relative z-10"></iconify-icon>
          <div className="relative z-10 mt-auto">
            <h3 className="text-xl font-medium tracking-tight mb-2">Web &amp; Mobile Development</h3>
            <p className="text-sm text-white/50 leading-relaxed">High-performance applications built on Next.js and Flutter. Optimized for speed, accessibility, and conversion.</p>
          </div>
        </div>

        {/* Small Card 1 */}
        <div className="glass-panel rounded-2xl p-6 aspect-square flex flex-col justify-between group hover:bg-white/[0.05] transition-colors">
          <iconify-icon icon="solar:cpu-bolt-linear" stroke-width="1.5" className="text-2xl text-white/70 mb-4 group-hover:text-white transition-colors"></iconify-icon>
          <div>
            <h3 className="text-base font-medium tracking-tight mb-1">AI Agents</h3>
            <p className="text-xs text-white/40">Custom LLM integration and enterprise sales bots.</p>
          </div>
        </div>

        {/* Small Card 2 */}
        <div className="glass-panel rounded-2xl p-6 aspect-square flex flex-col justify-between group hover:bg-white/[0.05] transition-colors">
          <iconify-icon icon="solar:magnifer-bug-linear" stroke-width="1.5" className="text-2xl text-white/70 mb-4 group-hover:text-white transition-colors"></iconify-icon>
          <div>
            <h3 className="text-base font-medium tracking-tight mb-1">Technical SEO</h3>
            <p className="text-xs text-white/40">JSON-LD Schema and Answer Engine Optimization (AEO).</p>
          </div>
        </div>

        {/* Small Card 3 */}
        <div className="glass-panel rounded-2xl p-6 aspect-square flex flex-col justify-between group hover:bg-white/[0.05] transition-colors">
          <iconify-icon icon="solar:chart-square-linear" stroke-width="1.5" className="text-2xl text-brand-lime mb-4"></iconify-icon>
          <div>
            <h3 className="text-base font-medium tracking-tight mb-1">Performance Ads</h3>
            <p className="text-xs text-white/40">Meta and Google scaling strategies.</p>
          </div>
        </div>

        {/* Wide Card */}
        <div className="glass-panel rounded-2xl p-6 md:col-span-2 lg:col-span-3 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <iconify-icon icon="solar:shield-keyhole-linear" stroke-width="1.5" className="text-xl text-white"></iconify-icon>
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tight">Cloud &amp; Cyber Security</h3>
              <p className="text-xs text-white/50 mt-1">DevOps setup, infrastructure management, and security audits.</p>
            </div>
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-white/70 whitespace-nowrap">Audit starts at ₹50,000</span>
        </div>
      </div>
    </section>
  );
}

export default Services;