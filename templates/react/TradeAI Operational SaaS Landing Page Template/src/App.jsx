import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-emerald-400">
            <iconify-icon icon="solar:widget-linear" class="w-4 h-4"></iconify-icon>
            <span className="text-white">TradeAI</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">Sturij</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-neutral-400 hidden md:block">Pilot Details</span>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2">
              Login
              <iconify-icon icon="solar:arrow-right-linear" class="w-3.5 h-3.5"></iconify-icon>
            </button>
          </div>
        </div>
      </nav>

      <main className="w-full pt-24">
        
        {/* AI Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto px-6 lg:my-16 gap-12 min-h-[80vh] relative">
          <div className="absolute inset-0 grid-bg pointer-events-none z-0 mask-image-linear-gradient"></div>

          {/* Left Column: Text */}
          <div className="lg:col-span-5 flex flex-col justify-center z-20 relative pt-10 lg:pt-0 animate-on-scroll">
            <div className="inline-flex items-center gap-2 mb-6 border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] animate-pulse"></span>
              <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest">Q3 Regional Pilot Intake</span>
            </div>

            <h1 className="text-5xl lg:text-[5.5rem] leading-[0.9] uppercase font-display tracking-tighter mb-8 text-white">
              Stop <span className="text-neutral-600">quoting.</span><br />
              Start <span className="text-emerald-400">trusting.</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-md leading-relaxed mb-12 font-light">
              We are opening five regional slots for independent joiners competing with national fitted-furniture companies. Get the platform setup and full workflow implemented at a heavily subsidised pilot rate.
            </p>

            <div className="flex flex-col items-start">
              <a href="#claim" className="btn-wrapper group">
                <div className="line horizontal top"></div>
                <div className="line vertical right"></div>
                <div className="line horizontal bottom"></div>
                <div className="line vertical left"></div>
                <div className="dot top left"></div>
                <div className="dot top right"></div>
                <div className="dot bottom right"></div>
                <div className="dot bottom left"></div>
                <button className="btn w-full sm:w-auto">
                  <span className="btn-text">Claim Allocation</span>
                  <iconify-icon icon="lucide:arrow-up-right" class="btn-svg"></iconify-icon>
                </button>
              </a>
            </div>
          </div>

          {/* Center Column: Floating UI Cards */}
          <div className="lg:col-span-5 flex h-[500px] lg:h-auto relative perspective-[1200px] items-center justify-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            
            {/* Centerpiece */}
            <div className="relative z-20 w-72 bg-neutral-950 border border-white/10 shadow-2xl rounded-2xl transform rotate-[-2deg] p-8 flex flex-col items-center text-center group glass">
              <div className="absolute -top-4 -right-4 z-30 drop-shadow-lg animate-bounce-slow">
                <div className="bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm mb-1 ml-4 font-mono">System</div>
                <iconify-icon icon="lucide:message-square-text" class="text-emerald-500 text-2xl"></iconify-icon>
              </div>

              <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest mb-6">Pilot Allocation Value</p>
              <h2 className="text-5xl font-display font-bold text-white tracking-tight mb-2">£1,250</h2>
              <p className="text-neutral-600 line-through text-sm mb-8">£3,500 standard setup</p>

              <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full w-[100%] bg-emerald-500"></div>
              </div>
            </div>

            {/* Floating Top Left */}
            <div className="absolute top-[5%] left-[-5%] sm:left-[0%] w-64 bg-neutral-950/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl z-10 transform -rotate-6">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <div className="flex items-center gap-2 text-white">
                  <iconify-icon icon="lucide:mic" class="w-4 h-4 text-emerald-400"></iconify-icon>
                  <span className="text-sm font-medium font-mono text-xs">Site Note Capture</span>
                </div>
              </div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Client wants fitted wardrobe alcove to alcove. Mentioned concerns about oak veneer looking cheap. Needs reassurance on finish durability.
              </p>
            </div>

            {/* Floating Bottom Right */}
            <div className="absolute bottom-[10%] right-[-5%] sm:right-[0%] w-60 bg-neutral-950 border border-white/10 rounded-xl p-4 shadow-xl z-30 transform rotate-6">
              <div className="flex gap-3 mb-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                  <iconify-icon icon="lucide:bot" class="w-4 h-4 text-black"></iconify-icon>
                </div>
                <div className="bg-neutral-900 p-2 rounded-lg border border-white/5">
                  <p className="text-[11px] text-neutral-300 leading-relaxed">I recommend generating a Supplier Proof Board for the Egger Feelwood range.</p>
                </div>
              </div>
            </div>

            {/* Warning Small Card */}
            <div className="absolute top-[40%] right-[-10%] w-48 bg-[#0a1a14] border border-emerald-500/30 p-3 rounded-lg shadow-lg z-0 transform rotate-12 hidden md:block">
              <div className="flex items-center gap-2 mb-1">
                <iconify-icon icon="lucide:check-circle-2" class="w-3 h-3 text-emerald-400"></iconify-icon>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Verified Asset</span>
              </div>
              <p className="text-[10px] text-neutral-500">Texture properties imported.</p>
            </div>
          </div>

          {/* Right Column: Stats */}
          <div className="lg:col-span-2 flex flex-col relative z-20 lg:border-l lg:border-white/5 lg:pl-8 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="hidden lg:block beam-border-v" style={{ left: '-1px' }}></div>
            
            <div className="flex flex-col justify-center h-full gap-12">
              <div className="group">
                <iconify-icon icon="lucide:database" class="text-2xl text-neutral-600 group-hover:text-emerald-400 transition-colors duration-300 mb-2"></iconify-icon>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block border-l-2 border-transparent group-hover:border-emerald-400 pl-2 transition-all">Full supplier library ingest</span>
              </div>
              <div className="group">
                <iconify-icon icon="lucide:calendar-clock" class="text-2xl text-neutral-600 group-hover:text-emerald-400 transition-colors duration-300 mb-2"></iconify-icon>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block border-l-2 border-transparent group-hover:border-emerald-400 pl-2 transition-all">3 months platform access</span>
              </div>
              <div className="group">
                <iconify-icon icon="lucide:users" class="text-2xl text-neutral-600 group-hover:text-emerald-400 transition-colors duration-300 mb-2"></iconify-icon>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block border-l-2 border-transparent group-hover:border-emerald-400 pl-2 transition-all">Direct founder support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Showcase Section (Artefacts) */}
        <section className="sm:p-8 max-w-7xl relative bg-neutral-900/40 border-white/5 border rounded-3xl mt-32 mx-auto mb-20 p-6 backdrop-blur animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start relative z-10">
            
            {/* Left: Heading + Timeline */}
            <div className="flex flex-col min-h-full justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Physical Evidence</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[0.9] tracking-tighter mt-4 text-white">
                  Built for physical evidence.
                </h2>
                <p className="text-sm sm:text-base text-neutral-400 mt-6 leading-relaxed">
                  TradeAI is not a generic text bot. It is a structured operational surface that turns customer conversations into material proof, accurate quotes, and workshop-ready handover assets.
                </p>

                {/* Timeline markers */}
                <div className="mt-12 flex flex-col gap-6 relative pr-4 pl-4">
                  
                  {/* Artefact 1 */}
                  <div className="relative group">
                    <div className="absolute left-2 top-8 bottom-[-1.5rem] w-px bg-gradient-to-b from-emerald-400/50 to-emerald-400/10"></div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-4 h-4 z-10 relative bg-neutral-950 border-emerald-400 border-2 rounded-full mt-0.5 group-hover:scale-125 transition-transform">
                        <div className="w-1.5 h-1.5 absolute top-0.5 left-0.5 bg-emerald-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 pb-2">
                        <span className="text-sm font-medium text-emerald-300 font-mono tracking-tight uppercase">Artefact 01: Recap</span>
                        <p className="text-sm text-neutral-400 mt-2 leading-relaxed">Automatically generate a customer-safe, designed PDF summary. Separate known facts, material assumptions, and exact next actions.</p>
                      </div>
                    </div>
                  </div>

                  {/* Artefact 2 */}
                  <div className="relative group">
                    <div className="absolute left-2 top-8 bottom-[-1.5rem] w-px bg-gradient-to-b from-emerald-400/50 to-emerald-400/10"></div>
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-4 h-4 z-10 relative bg-neutral-950 border-emerald-400/50 border-2 rounded-full mt-0.5 group-hover:border-emerald-400 transition-colors"></div>
                      <div className="flex-1 pb-2">
                        <span className="text-sm font-medium text-white font-mono tracking-tight uppercase">Artefact 02: Proof Board</span>
                        <p className="text-sm text-neutral-400 mt-2 leading-relaxed">Stop sending raw links. Pull verified CDN assets for boards, handles, and hardware into a governed commercial evidence record.</p>
                      </div>
                    </div>
                  </div>

                  {/* Artefact 3 */}
                  <div className="relative group">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-4 h-4 z-10 relative bg-neutral-950 border-emerald-400/50 border-2 rounded-full mt-0.5 group-hover:border-emerald-400 transition-colors"></div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-white font-mono tracking-tight uppercase">Artefact 03: QR Record</span>
                        <p className="text-sm text-neutral-400 mt-2 leading-relaxed">Every sold product receives a unique digital passport showing care guidance, warranty terms, and material origins via QR.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Project Grid */}
            <div className="grid grid-cols-2 gap-4 relative">
              <article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl group" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80)'}}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/90 group-hover:via-black/20 transition-all"></div>
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur glass">
                    <iconify-icon icon="lucide:file-json-2" class="w-3.5 h-3.5"></iconify-icon>
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center text-[10px] uppercase tracking-wider text-white/90 bg-black/40 border-white/15 border rounded-full py-1 px-2.5 backdrop-blur font-mono">Portal Ready</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-medium tracking-tight leading-tight">Structured JSON</p>
                </div>
              </article>

              <article className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl group" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=800&q=80)'}}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/90 group-hover:via-black/20 transition-all"></div>
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur glass">
                    <iconify-icon icon="lucide:layers" class="w-3.5 h-3.5"></iconify-icon>
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center text-[10px] uppercase tracking-wider text-white/90 bg-black/40 border-white/15 border rounded-full py-1 px-2.5 backdrop-blur font-mono">Verified</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-medium tracking-tight leading-tight">Material Source</p>
                </div>
              </article>

              <article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl group" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80)'}}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/90 group-hover:via-black/20 transition-all"></div>
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur glass">
                    <iconify-icon icon="lucide:qr-code" class="w-3.5 h-3.5"></iconify-icon>
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center text-[10px] uppercase tracking-wider text-white/90 bg-black/40 border-white/15 border rounded-full py-1 px-2.5 backdrop-blur font-mono">Post-Sale</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-medium tracking-tight leading-tight">Customer Facing</p>
                </div>
              </article>

              <article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl group" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=800&q=80)'}}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/90 group-hover:via-black/20 transition-all"></div>
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur glass">
                    <iconify-icon icon="lucide:clipboard-check" class="w-3.5 h-3.5"></iconify-icon>
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center text-[10px] uppercase tracking-wider text-white/90 bg-black/40 border-white/15 border rounded-full py-1 px-2.5 backdrop-blur font-mono">Workflow</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-medium tracking-tight leading-tight">Workshop Ready</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* UI Workspace Highlight Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 animate-on-scroll">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">Contextual UI</p>
              <h2 className="text-4xl md:text-5xl font-display text-white tracking-tighter mt-2">
                The workspace wraps the conversation.
              </h2>
              <p className="sm:text-lg max-w-[85ch] text-base text-neutral-400 mt-4 leading-relaxed">
                The app shell is a calm operating frame. Skills and capabilities appear contextually at the bottom of the working surface to close the gap between talk and trust.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large feature */}
            <div className="relative lg:col-span-2 ring-1 ring-white/10 p-8 md:p-12 overflow-hidden bg-neutral-950 rounded-3xl shadow-2xl">
              <div className="absolute -right-20 -top-20 h-96 w-96 bg-gradient-to-tr from-emerald-500/10 to-teal-400/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">Active Session Sync</span>
                </div>

                <div className="space-y-6 max-w-xl">
                  {/* Note block */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 shadow-lg transform transition-transform hover:scale-[1.01]">
                    <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <iconify-icon icon="lucide:mic" class="w-3 h-3"></iconify-icon> Voice Capture
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      "Client wants a fitted wardrobe in the master bedroom, alcove to alcove. They mentioned concerns about the oak veneer looking cheap compared to solid timber. Needs reassuring on finish durability."
                    </p>
                  </div>
                  
                  {/* System response */}
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 ml-12 shadow-lg transform transition-transform hover:scale-[1.01]">
                    <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <iconify-icon icon="lucide:sparkles" class="w-3 h-3"></iconify-icon> System Response
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Logged. I recommend generating a Supplier Proof Board highlighting the Egger Feelwood range texture properties alongside the Confidence Builder Recap.
                    </p>
                    <div className="mt-4 pt-4 border-t border-emerald-500/10 flex gap-3">
                      <button className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-300 px-3 py-1.5 rounded-full hover:bg-emerald-500/20 transition-colors">Generate Board</button>
                      <button className="text-[10px] font-mono uppercase bg-white/5 text-neutral-400 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors">Ignore</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small card - capabilities */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <article className="relative bg-neutral-900 border-white/10 border rounded-3xl p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-xl tracking-tight font-display font-medium">Contextual Skills</h3>
                  <span className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-1 rounded-full font-mono text-neutral-400">Dynamic</span>
                </div>
                <p className="text-sm text-neutral-400 mb-8">We don't permanently display every feature—we show the tools required to build trust in the moment.</p>

                <div className="space-y-3 mt-auto">
                  <div className="flex items-center justify-between rounded-xl ring-1 ring-emerald-400/20 bg-emerald-500/5 px-4 py-3 group hover:bg-emerald-500/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <iconify-icon icon="lucide:drafting-compass" class="text-emerald-400 w-4 h-4"></iconify-icon>
                      <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Material Library</span>
                    </div>
                    <iconify-icon icon="lucide:chevron-right" class="text-emerald-400 w-4 h-4"></iconify-icon>
                  </div>
                  <div className="flex items-center justify-between rounded-xl ring-1 ring-white/10 bg-white/5 px-4 py-3 group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <iconify-icon icon="lucide:calculator" class="text-neutral-400 w-4 h-4"></iconify-icon>
                      <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Quote Generator</span>
                    </div>
                    <iconify-icon icon="lucide:chevron-right" class="text-neutral-500 w-4 h-4"></iconify-icon>
                  </div>
                  <div className="flex items-center justify-between rounded-xl ring-1 ring-white/10 bg-white/5 px-4 py-3 group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <iconify-icon icon="lucide:file-text" class="text-neutral-400 w-4 h-4"></iconify-icon>
                      <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Handover Assets</span>
                    </div>
                    <iconify-icon icon="lucide:chevron-right" class="text-neutral-500 w-4 h-4"></iconify-icon>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Community / CTA Section */}
        <section className="py-24 border-t border-white/5 overflow-hidden">
          <div className="mx-auto max-w-4xl text-center px-6 mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-6">
              Independent Joiners Network
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-display mb-6">
              Compete with national fitted-furniture companies.
            </h2>
            <p className="text-lg font-light text-neutral-400 max-w-2xl mx-auto">
              Join the Q3 regional pilot program and implement a highly professional, tech-forward quoting and handover process.
            </p>
          </div>

          {/* Marquee Images */}
          <div className="relative mx-auto max-w-[100vw] overflow-hidden mask-image-linear-gradient" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
            <div className="flex w-max animate-marquee gap-4 pr-4">
              {[
                "https://images.unsplash.com/photo-1540569014015-19a7be504e3a",
                "https://images.unsplash.com/photo-1622372738946-62e02505feb3",
                "https://images.unsplash.com/photo-1513694203232-719a280e022f",
                "https://images.unsplash.com/photo-1604014237800-1c9102c219da",
                "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                "https://images.unsplash.com/photo-1540569014015-19a7be504e3a",
                "https://images.unsplash.com/photo-1622372738946-62e02505feb3"
              ].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/10 w-48 sm:w-64 flex-shrink-0">
                  <img className="h-32 sm:h-40 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={`${src}?w=400&q=80`} alt="Workshop" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
             <a href="#claim" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors font-mono uppercase tracking-wider">
              Apply for Pilot Access
              <iconify-icon icon="lucide:arrow-right" class="w-4 h-4"></iconify-icon>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-neutral-500">
            <iconify-icon icon="solar:widget-linear" class="w-3 h-3"></iconify-icon>
            <span>TradeAI © {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;