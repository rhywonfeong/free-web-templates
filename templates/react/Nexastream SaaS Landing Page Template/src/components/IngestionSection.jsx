import React from 'react';

const IngestionSection = () => {
  return (
    <div className="z-20 flex flex-col w-full border-white/5 border-t relative">
      <section className="z-10 md:px-12 lg:py-32 w-full max-w-[1400px] mx-auto pt-24 px-6 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 max-w-xl">
            <h2 className="md:text-6xl text-3xl font-normal text-white tracking-tight font-serif-custom mb-6">
              Centralize your
              <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-sky-400 to-indigo-500"> data ingestion</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
              Capture telemetry across any infrastructure interaction—from server logs to API webhooks—and normalize it
              into a single structured stream linked to your data warehouse.
            </p>
            <p className="text-base text-zinc-500 font-light leading-relaxed mb-10">
              Nexastream integrates seamlessly with the tools you already use, so you can create pipelines directly from
              your cloud providers, SaaS platforms, or custom event emitters without managing complex schema registries.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-sky-500 pb-0.5 hover:text-sky-400 transition-colors">
                Explore integrations
                <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Right: Visualization */}
          <div className="order-1 lg:order-2 w-full relative">
            {/* Diagram Container */}
            <div className="lg:mr-0 w-full max-w-lg mx-auto relative">
              
              {/* Labels */}
              <div className="flex justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6 px-4">
                <span>Ingestion Sources</span>
                <span className="mr-12">Stream Processing</span>
              </div>

              {/* Icons Row (Top) */}
              <div className="flex mb-12 px-2 relative items-center justify-between">
                {/* Group 1 */}
                <div className="flex gap-3 md:gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg hover:border-white/20 hover:scale-105 transition-all duration-300 group text-white/50 hover:text-white">
                    <iconify-icon icon="simple-icons:stripe" width="20" height="20" className="group-hover:opacity-100 transition-opacity opacity-80" style={{ color: '#fff' }}></iconify-icon>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg hover:border-white/20 hover:scale-105 transition-all duration-300 group text-white/50 hover:text-white">
                    <iconify-icon icon="simple-icons:slack" width="20" height="20" className="group-hover:opacity-100 transition-opacity opacity-80" style={{ color: '#fff' }}></iconify-icon>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg hover:border-white/20 hover:scale-105 transition-all duration-300 group text-white/50 hover:text-white">
                    <iconify-icon icon="simple-icons:zendesk" width="20" height="20" className="group-hover:opacity-100 transition-opacity opacity-80" style={{ color: '#fff' }}></iconify-icon>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg hover:border-white/20 hover:scale-105 transition-all duration-300 group text-white/50 hover:text-white">
                    <iconify-icon icon="simple-icons:github" width="20" height="20" className="group-hover:opacity-100 transition-opacity opacity-80" style={{ color: '#fff' }}></iconify-icon>
                  </div>
                </div>

                {/* Group 2 */}
                <div className="flex gap-3 md:gap-4 border-dashed border-white/5 border-l pl-8">
                  <div className="flex hover:border-white/20 hover:scale-105 transition-all duration-300 group hover:text-white text-white/50 bg-zinc-900 w-12 h-12 border border-white/10 rounded-xl shadow-lg items-center justify-center">
                    <iconify-icon icon="simple-icons:amazonaws" width="20" height="20" className="group-hover:opacity-100 transition-opacity opacity-80" style={{ color: '#fff' }}></iconify-icon>
                  </div>
                  <div className="flex hover:border-white/20 hover:scale-105 transition-all duration-300 group hover:text-white text-white/50 bg-zinc-900 w-12 h-12 border border-white/10 rounded-xl shadow-lg items-center justify-center">
                    <iconify-icon icon="simple-icons:amazonaws" width="20" height="20" className="group-hover:opacity-100 transition-opacity opacity-80" style={{ color: '#fff' }}></iconify-icon>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg hover:border-white/20 hover:scale-105 transition-all duration-300 group text-white/50 hover:text-white">
                    <iconify-icon icon="simple-icons:vercel" width="20" height="20" className="group-hover:opacity-100 transition-opacity opacity-80" style={{ color: '#fff' }}></iconify-icon>
                  </div>
                </div>
              </div>

              {/* Connecting Lines (SVG) */}
              <div className="absolute top-10 left-0 w-full h-[180px] pointer-events-none z-0 hidden sm:block">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 512 180">
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8"></stop>
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8"></stop>
                    </linearGradient>
                  </defs>

                  {/* Background Lines (Faint) */}
                  <path d="M 32 24 C 32 80, 256 40, 256 120" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1.5"></path>
                  <path d="M 92 24 C 92 80, 256 40, 256 120" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1.5"></path>
                  <path d="M 152 24 C 152 80, 256 40, 256 120" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1.5"></path>
                  <path d="M 212 24 C 212 80, 256 40, 256 120" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1.5"></path>
                  <path d="M 360 24 C 360 80, 256 40, 256 120" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1.5"></path>
                  <path d="M 420 24 C 420 80, 256 40, 256 120" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1.5"></path>
                  <path d="M 480 24 C 480 80, 256 40, 256 120" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1.5"></path>

                  {/* Animated Beam Lines */}
                  <path d="M 32 24 C 32 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" className="animate-beam"></path>
                  <path d="M 92 24 C 92 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" className="animate-beam" style={{ animationDelay: '-1s' }}></path>
                  <path d="M 152 24 C 152 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" className="animate-beam" style={{ animationDelay: '-2s' }}></path>
                  <path d="M 212 24 C 212 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" className="animate-beam" style={{ animationDelay: '-3s' }}></path>
                  <path d="M 360 24 C 360 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" className="animate-beam" style={{ animationDelay: '-1.5s' }}></path>
                  <path d="M 420 24 C 420 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" className="animate-beam" style={{ animationDelay: '-2.5s' }}></path>
                  <path d="M 480 24 C 480 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" className="animate-beam" style={{ animationDelay: '-0.5s' }}></path>

                  {/* Glowing Node at convergence */}
                  <circle cx="256" cy="120" r="3" fill="#6366f1" className="animate-pulse">
                    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"></animate>
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"></animate>
                  </circle>

                  {/* Vertical Line Down */}
                  <line x1="256" y1="120" x2="256" y2="160" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5"></line>
                </svg>
              </div>

              {/* Cards Stack */}
              <div className="z-10 flex flex-col gap-6 mt-16 relative items-center">
                
                {/* Card 1: Incoming Payload */}
                <div className="w-full bg-zinc-900/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 shadow-2xl relative group">
                  <div className="absolute -left-px top-8 h-8 w-[3px] bg-indigo-500 rounded-r-full"></div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shrink-0">
                      <iconify-icon icon="solar:code-scan-bold-duotone" width="18" height="18"></iconify-icon>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-white font-mono">POST /v1/ingest/webhook</h4>
                        <span className="text-[10px] text-zinc-500 font-mono">24ms</span>
                      </div>
                      <p className="text-zinc-400 text-xs font-mono leading-relaxed truncate opacity-70">
                        {`{"source":"stripe", "event":"charge.failed", "amount":4900}`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector Node */}
                <div className="relative flex flex-col items-center">
                  <div className="h-6 w-px bg-gradient-to-b from-white/10 to-transparent border-r border-dashed border-zinc-700"></div>
                  <div className="my-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black border border-zinc-800 shadow-xl z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] font-medium text-zinc-400 font-mono">NORMALIZER</span>
                  </div>
                  <div className="h-6 w-px bg-gradient-to-b from-transparent to-white/10 border-r border-dashed border-zinc-700"></div>
                </div>

                {/* Card 2: Processed Event */}
                <div className="w-full bg-[#0c0c0e] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="flex items-center gap-3 mb-4">
                    <iconify-icon icon="solar:database-bold-duotone" width="20" height="20" className="text-neutral-50"></iconify-icon>
                    <span className="text-sm font-medium text-zinc-200">Production Database</span>
                    <div className="ml-auto flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                    </div>
                  </div>

                  {/* Data Row */}
                  <div className="rounded-lg bg-zinc-900/50 border border-white/5 p-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]"></div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-medium text-white truncate">failed_payment_event</span>
                        <span className="text-[10px] text-zinc-500 font-mono truncate">id: evt_1N4k... • queue: retry-high</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-white/5 text-[10px] text-zinc-400 font-mono">Q4 2024</span>
                      <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center border border-white/5">
                        <span className="text-[10px] text-zinc-400">17</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IngestionSection;