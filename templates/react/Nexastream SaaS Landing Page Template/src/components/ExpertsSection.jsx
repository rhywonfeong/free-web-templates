import React from 'react';

const ExpertsSection = () => {
  return (
    <div className="flex flex-col bg-black/50 w-full z-20 border-white/5 border-t relative">
      {/* Vertical Lines Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-50 md:opacity-100">
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5 hidden sm:block"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5 hidden lg:block"></div>
        <div className="w-px h-full bg-white/5 hidden xl:block"></div>
        <div className="w-px h-full bg-white/5"></div>
      </div>

      <div className="z-10 md:px-12 lg:py-32 w-full max-w-[1400px] mx-auto pt-24 px-6 pb-24 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-normal font-serif-custom text-white tracking-tight max-w-3xl leading-[0.95]">
            Get pro help from
            <span className="block italic text-zinc-500">handpicked experts</span>
          </h2>
          <div className="flex gap-3 shrink-0">
            <button className="group inline-flex h-10 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black transition-all hover:bg-zinc-200">
              Get matched
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
            </button>
            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900 px-5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:border-white/20">
              Find an Expert
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative group w-full">
          {/* Scroll Container with Alpha Mask */}
          <div 
            className="flex overflow-x-auto -mx-6 no-scrollbar snap-x md:mx-0 md:pt-4 md:pl-12 py-4 px-6 gap-6" 
            style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}
          >

            {/* Card 1 */}
            <div className="min-w-[320px] md:min-w-[440px] snap-center group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="aspect-[16/10] rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden relative mb-5 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                {/* Browser Chrome */}
                <div className="h-8 w-full border-b border-white/5 bg-zinc-900/50 flex items-center px-4 gap-1.5 backdrop-blur-sm relative z-20">
                  <div className="w-2 h-2 rounded-full bg-zinc-600/50"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-600/50"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-600/50"></div>
                  <div className="ml-4 h-4 w-32 rounded-full bg-zinc-800/50"></div>
                </div>
                {/* Preview Content */}
                <div className="p-6 h-full bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
                  <div className="[background-size:16px_16px] opacity-20 absolute inset-0"></div>
                  <div className="relative z-10 flex flex-col gap-4">
                    <h3 className="text-xl font-medium text-white tracking-tight">Data Pipeline Automation</h3>
                    <p className="text-sm text-zinc-400">Automated ETL workflows for enterprise scale.</p>
                    <div className="mt-4 flex gap-2">
                      <span className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-mono">Snowflake</span>
                      <span className="px-2 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[10px] font-mono">dbt</span>
                    </div>
                    {/* Mini Graph UI */}
                    <div className="mt-auto h-24 w-full bg-zinc-800/50 rounded border border-white/5 flex items-end p-2 gap-1 group-hover/card:gap-1.5 transition-all duration-500">
                      <div className="w-1/5 bg-indigo-500/40 h-[40%] rounded-sm transition-all duration-500 group-hover/card:h-[50%]"></div>
                      <div className="w-1/5 bg-indigo-500/50 h-[60%] rounded-sm transition-all duration-500 group-hover/card:h-[70%]"></div>
                      <div className="w-1/5 bg-indigo-500/60 h-[30%] rounded-sm transition-all duration-500 group-hover/card:h-[45%]"></div>
                      <div className="w-1/5 bg-indigo-500/70 h-[80%] rounded-sm transition-all duration-500 group-hover/card:h-[90%]"></div>
                      <div className="w-1/5 bg-indigo-500 h-[75%] rounded-sm transition-all duration-500 group-hover/card:h-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-1">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/card:border-white/30 transition-colors">
                  <iconify-icon icon="solar:code-circle-bold-duotone" width="20" height="20"></iconify-icon>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Streamline Studio</div>
                  <div className="text-xs text-zinc-500">Berlin, Germany</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="min-w-[320px] md:min-w-[440px] snap-center group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="aspect-[16/10] rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden relative mb-5 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                <div className="h-8 w-full border-b border-white/5 bg-zinc-900/50 flex items-center px-4 gap-1.5 backdrop-blur-sm relative z-20">
                  <div className="w-2 h-2 rounded-full bg-zinc-600/50"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-600/50"></div>
                </div>
                <div className="p-6 h-full bg-zinc-900 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover/card:bg-emerald-500/10 transition-colors duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-medium text-white tracking-tight">Real-time Analytics</h3>
                    <p className="text-sm text-zinc-400 mt-2">Low-latency dashboards for fintech.</p>
                    <div className="mt-8 space-y-2 font-mono text-[10px] text-zinc-500">
                      <div className="flex gap-2 items-center"><span className="text-emerald-400">✓</span> ingest_rate: <span className="text-white">50k/s</span></div>
                      <div className="flex gap-2 items-center"><span className="text-emerald-400">✓</span> latency: <span className="text-white">&lt;10ms</span></div>
                      <div className="flex gap-2 items-center"><span className="text-emerald-400">✓</span> buffer_overflow: <span className="text-red-400">false</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-1">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/card:border-white/30 transition-colors">
                  <iconify-icon icon="solar:graph-up-bold-duotone" width="20" height="20"></iconify-icon>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">DataOps Labs</div>
                  <div className="text-xs text-zinc-500">San Francisco, US</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="min-w-[320px] md:min-w-[440px] snap-center group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="aspect-[16/10] rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden relative mb-5 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                <div className="h-8 w-full border-b border-white/5 bg-zinc-900/50 flex items-center px-4 gap-1.5 backdrop-blur-sm relative z-20">
                  <div className="w-2 h-2 rounded-full bg-zinc-600/50"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-600/50"></div>
                </div>
                <div className="p-6 h-full bg-zinc-900 relative flex items-center justify-center overflow-hidden">
                  <div className="relative w-full max-w-[200px] h-32 border border-dashed border-zinc-700 rounded-lg flex items-center justify-center group-hover/card:border-zinc-500 transition-colors">
                    <div className="absolute inset-0 bg-sky-500/5 group-hover/card:bg-sky-500/10 transition-colors"></div>
                    <div className="text-center relative z-10">
                      <div className="mx-auto w-8 h-8 bg-sky-500 rounded flex items-center justify-center text-white mb-2 shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover/card:scale-110 transition-transform">
                        <iconify-icon icon="solar:bolt-bold" width="16" height="16"></iconify-icon>
                      </div>
                      <span className="text-xs font-mono text-sky-200">Webhook Listener</span>
                    </div>
                    {/* Connection Line */}
                    <div className="absolute -right-4 top-1/2 w-4 h-px bg-zinc-700"></div>
                    <div className="absolute -right-6 top-1/2 w-2 h-2 rounded-full bg-zinc-700"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-1">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/card:border-white/30 transition-colors">
                  <iconify-icon icon="solar:server-bold-duotone" width="20" height="20"></iconify-icon>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Pipeline Pros</div>
                  <div className="text-xs text-zinc-500">London, UK</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="min-w-[320px] md:min-w-[440px] snap-center group/card cursor-pointer hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="aspect-[16/10] rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden relative mb-5 transition-all duration-500 group-hover/card:border-white/20 group-hover/card:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                <div className="h-8 w-full border-b border-white/5 bg-zinc-900/50 flex items-center px-4 gap-1.5 backdrop-blur-sm relative z-20">
                  <div className="w-2 h-2 rounded-full bg-zinc-600/50"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-600/50"></div>
                </div>
                <div className="p-6 h-full bg-zinc-900 flex flex-col relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className="text-xs font-mono text-zinc-500">Query Result</span>
                    <span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">JSON</span>
                  </div>
                  <div className="flex-1 rounded bg-black border border-white/5 p-3 font-mono text-[10px] text-zinc-400 leading-relaxed overflow-hidden relative z-10 group-hover/card:border-white/10 transition-colors">
                    <span className="text-purple-400">{`{`}</span><br />
                    &nbsp;&nbsp;"id": <span className="text-orange-400">"evt_293"</span>,<br />
                    &nbsp;&nbsp;"status": <span className="text-emerald-400">"processed"</span>,<br />
                    &nbsp;&nbsp;"enrichment": <span className="text-purple-400">{`{`}</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"geo": <span className="text-orange-400">"US-West"</span><br />
                    &nbsp;&nbsp;<span className="text-purple-400">{`}`}</span><br />
                    <span className="text-purple-400">{`}`}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-1">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover/card:border-white/30 transition-colors">
                  <iconify-icon icon="solar:database-bold-duotone" width="20" height="20"></iconify-icon>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Query Masters</div>
                  <div className="text-xs text-zinc-500">Toronto, Canada</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertsSection;