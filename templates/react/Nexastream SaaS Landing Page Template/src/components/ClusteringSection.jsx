import React from 'react';

const ClusteringSection = () => {
  return (
    <div className="flex flex-col z-20 w-full border-white/5 border-t relative">
      <section className="md:px-12 lg:py-32 bg-black/50 w-full max-w-[1400px] z-10 mx-auto pt-24 px-6 pb-24 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-6xl font-normal text-white tracking-tight font-serif-custom mb-6">
            Intelligent clustering via
            <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-sky-400 to-indigo-500"> semantic context</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Our cutting-edge engine groups incoming data streams by context using vector embeddings, allowing
            for automated classification and routing.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Automated Classification */}
          <div className="group relative rounded-3xl bg-zinc-900/30 border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
            <div className="p-8 md:p-10 relative z-10 flex-1 flex flex-col">
              <h3 className="text-2xl font-medium text-white mb-3 flex items-center gap-3 tracking-tight">
                <iconify-icon icon="solar:tag-bold-duotone" width="28" height="28"></iconify-icon>
                Automated Classification
              </h3>
              <p className="text-zinc-400 font-light mb-12 text-base leading-relaxed">
                Reduce engineering time by tagging events based on semantic meaning and recurrence patterns.
              </p>

              {/* Visualization */}
              <div className="mt-auto relative h-[320px] w-full flex flex-col items-center justify-center border border-white/5 rounded-2xl bg-black/20 overflow-hidden">
                {/* Grid Floor Effect */}
                <div 
                  className="absolute inset-0 z-0 opacity-30" 
                  style={{ 
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                    backgroundSize: '30px 30px', 
                    transform: 'perspective(500px) rotateX(60deg) translateY(50px) scale(1.5)' 
                  }}
                ></div>

                {/* Flow Diagram */}
                <div 
                  className="flex gap-2 md:gap-4 text-[10px] md:text-xs text-zinc-300 font-mono z-20 mb-10 relative items-center justify-center" 
                  style={{ maskImage: 'linear-gradient(90deg, transparent, black 5%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 90%, transparent)' }}
                >
                  {/* Left Nodes */}
                  <div className="flex flex-col gap-3">
                    <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center gap-2 shadow-lg backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> AI Tagging
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center gap-2 shadow-lg backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse delay-75"></span> Words Tag
                    </div>
                  </div>

                  {/* SVG Connectors Left */}
                  <svg className="w-8 h-12 text-zinc-600" viewBox="0 0 32 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M0 12 C 16 12, 16 24, 32 24" strokeDasharray="3 3" className="opacity-50"></path>
                    <path d="M0 36 C 16 36, 16 24, 32 24" strokeDasharray="3 3" className="opacity-50"></path>
                  </svg>

                  {/* Center Node */}
                  <div className="px-3 py-2 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-600 shadow-xl text-white font-semibold z-10">
                    groups keywords
                  </div>

                  {/* SVG Connectors Right */}
                  <svg className="w-8 h-12 text-zinc-600" viewBox="0 0 32 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M0 24 C 16 24, 16 12, 32 12" strokeDasharray="3 3" className="opacity-50"></path>
                    <path d="M0 24 C 16 24, 16 36, 32 36" strokeDasharray="3 3" className="opacity-50"></path>
                  </svg>

                  {/* Right Nodes */}
                  <div className="flex flex-col gap-3">
                    <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-500 shadow-lg backdrop-blur-sm">
                      by context
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-500 shadow-lg backdrop-blur-sm">
                      by repetition
                    </div>
                  </div>
                </div>

                {/* Floating Context Tags (Bottom) */}
                <div className="absolute bottom-8 w-full px-10 flex justify-center gap-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[10px] shadow-[0_0_15px_rgba(99,102,241,0.2)] backdrop-blur-sm transform -rotate-2 hover:scale-105 transition-transform cursor-default select-none">Latency High</span>
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-[10px] shadow-[0_0_15px_rgba(14,165,233,0.2)] backdrop-blur-sm transform rotate-3 hover:scale-105 transition-transform cursor-default select-none">API Timeout</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-sm transform -translate-y-2 hover:scale-105 transition-transform cursor-default select-none">DB Lock</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Granular Control */}
          <div className="group relative rounded-3xl bg-zinc-900/30 border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
            <div className="p-8 md:p-10 relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-medium text-white mb-3 flex items-center gap-3 tracking-tight">
                <iconify-icon icon="solar:tuning-bold-duotone" width="28" height="28"></iconify-icon>
                Granular Control
              </h3>
              <p className="text-zinc-400 font-light mb-12 text-base leading-relaxed">
                Apply filters and boolean operators to refine your data views instantly.
              </p>

              {/* UI Interface Mockup */}
              <div className="mt-auto w-full bg-[#0c0c0e] rounded-xl border border-white/10 p-5 shadow-2xl relative overflow-hidden group-hover:shadow-indigo-500/10 transition-shadow duration-500">
                {/* Window Header */}
                <div className="flex items-center justify-between mb-5 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white tracking-wide">Filter Rules</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-zinc-800 text-[9px] font-medium text-zinc-400 border border-white/5">4 active</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                    <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                  </div>
                </div>

                {/* Rules List */}
                <div className="space-y-3 font-mono text-[10px] sm:text-xs relative z-10">
                  {/* Row 1 */}
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-zinc-500 text-right font-medium">Where</span>
                    <div className="flex-1 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-sky-300 group-hover:border-white/20 transition-colors">
                      region
                    </div>
                    <div className="w-8 h-7 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-zinc-400">
                      =
                    </div>
                    <div className="flex text-white bg-zinc-900 w-20 h-7 border-white/10 border rounded px-2 items-center text-[10px]">
                      us-east-1
                    </div>
                    <button className="w-5 h-7 flex items-center justify-center text-zinc-600 hover:text-white transition-colors">
                      <iconify-icon icon="solar:menu-dots-bold" width="16" height="16"></iconify-icon>
                    </button>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-zinc-500 text-right font-medium">And</span>
                    <div className="flex-1 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-sky-300 group-hover:border-white/20 transition-colors">
                      latency
                    </div>
                    <div className="w-8 h-7 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-zinc-400">
                      &gt;
                    </div>
                    <div className="w-20 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-emerald-400">
                      500ms
                    </div>
                    <button className="w-5 h-7 flex items-center justify-center text-zinc-600 hover:text-white transition-colors">
                      <iconify-icon icon="solar:menu-dots-bold" width="16" height="16"></iconify-icon>
                    </button>
                  </div>

                  {/* Nested Group */}
                  <div className="pl-4 border-l border-zinc-800 mt-2 pt-2 relative">
                    <span className="absolute -left-[17px] top-5 w-4 h-px bg-zinc-800"></span>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-zinc-600 text-[9px] uppercase tracking-wider font-semibold">Or Group</span>
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-10 text-zinc-500 text-right font-medium">Where</span>
                      <div className="flex-1 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-sky-300">
                        status
                      </div>
                      <div className="w-8 h-7 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-zinc-400">
                        in
                      </div>
                      <div className="flex text-[10px] text-orange-400 bg-zinc-900 w-20 h-7 border-white/10 border rounded px-2 items-center">
                        [500, 502]
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient Glow */}
                <div className="absolute -right-5 -bottom-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClusteringSection;