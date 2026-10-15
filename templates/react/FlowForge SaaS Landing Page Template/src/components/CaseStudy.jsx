import React from 'react';

const CaseStudy = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-zinc-950/30 relative z-20">
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group bg-zinc-900">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
              alt="Factory automation" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-80 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-lg flex flex-col gap-1">
                <span className="text-xs font-mono text-zinc-500">Routing Latency</span>
                <span className="text-sm font-medium text-white">4.2ms</span>
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-lg flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <span className="text-xs font-mono text-zinc-300">Live Sync</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <iconify-icon icon="solar:chart-2-linear" style={{ strokeWidth: '1.5' }} className="text-zinc-400 text-sm"></iconify-icon>
            <span className="font-mono text-xs text-zinc-300">Case Study</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white leading-tight">
            How Global Logistics Inc reduced manual routing by 98%.
          </h2>
          
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            By implementing the FlowForge operational engine, GLI entirely bypassed their legacy ERP bottleneck. The system natively integrates with existing robotic arrays to process and allocate thousands of units per minute with zero human intervention.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div>
              <div className="text-3xl tracking-tighter font-medium text-white mb-2">10x</div>
              <div className="text-xs font-mono text-zinc-500">Throughput Increase</div>
            </div>
            <div>
              <div className="text-3xl tracking-tighter font-medium text-white mb-2">&lt;1s</div>
              <div className="text-xs font-mono text-zinc-500">Decision Latency</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;