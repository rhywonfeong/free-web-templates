import React from 'react'
import FlashlightCard from './ui/FlashlightCard'

const Validation = () => {
  return (
    <section className="overflow-hidden lg:py-32 text-white w-full z-20 pt-24 pb-24 relative">
      {/* Background Grid Lines (Hero Style) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 left-[6%]"></div>
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 left-[28%]">
          <div className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent beam-v" style={{ animation: 'beam-v 7s infinite' }}></div>
        </div>
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 left-[62%]">
          <div className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent beam-v" style={{ animation: 'beam-v 5s infinite 2s' }}></div>
        </div>
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 right-[6%]"></div>
        <div className="absolute left-0 right-0 h-[1px] bg-white/5 top-0"></div>
        <div className="absolute left-0 right-0 h-[1px] bg-white/5 bottom-0"></div>
      </div>

      <div className="lg:px-[6%] z-10 max-w-[1600px] mr-auto ml-auto pr-6 pl-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-8 gap-x-8 gap-y-8">
          
          {/* Left Column: Header + Feature Image */}
          <div className="lg:col-span-7 flex flex-col gap-6 gap-x-6 gap-y-6">
            <FlashlightCard className="hover:bg-white/[0.04] transition-all duration-500 border border-white/5 hover:border-white/10 rounded-sm backdrop-blur-lg p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center min-h-[240px]">
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

              <h2 className="leading-[0.95] lg:text-6xl text-4xl font-medium text-white tracking-tighter z-10 mb-2 relative">
                What every engagement
                <span className="text-white/30"> includes.</span>
              </h2>
              <div className="absolute -top-6 -right-6 opacity-[0.03] text-white">
                <iconify-icon icon="solar:checklist-minimalistic-bold-duotone" width="240"></iconify-icon>
              </div>
            </FlashlightCard>

            <FlashlightCard className="lg:h-[500px] overflow-hidden h-[420px] border-white/5 hover:border-white/10 border rounded-sm relative backdrop-blur-lg transition-all duration-500 shadow-sm">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5326861-9214-4075-b2d4-dedfcf9cc3ea_1600w.webp" alt="Data Network Structure" className="transition-transform duration-1000 group-hover:scale-105 filter group-hover:saturate-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" />
              <div className="bg-gradient-to-t from-black/60 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

              <div className="absolute bottom-10 right-10 text-right max-w-md">
                <span className="block text-5xl lg:text-7xl font-semibold text-white tracking-tighter shadow-black/20 drop-shadow-lg leading-[0.95]">30 days</span>
                <span className="block text-white/90 text-lg lg:text-xl font-light mt-3">of post-handoff support</span>
                <span className="block text-white/60 font-mono text-xs uppercase tracking-widest mt-3">Included with every engagement</span>
              </div>

              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-sm text-[10px] font-mono uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                Standard inclusion
              </div>
            </FlashlightCard>
          </div>

          {/* Right Column: Deliverable Cards Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Deliverable Card 1 */}
            <FlashlightCard className="hover:bg-white/[0.04] text-white p-10 rounded-sm transform transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col justify-between border border-white/5 hover:border-white/10 backdrop-blur-lg">
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <iconify-icon icon="solar:monitor-bold-duotone" class="text-purple-400 text-2xl"></iconify-icon>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Deliverable 01</span>
                </div>
                <h3 className="text-2xl font-medium text-white tracking-tight mb-4 leading-tight">A working dashboard you actually use</h3>
                <p className="text-base font-light leading-relaxed text-white/70">
                  No CLI handoffs. Every build ships with a web interface a non-technical user can operate.
                </p>
              </div>
            </FlashlightCard>

            {/* Deliverable Card 2 */}
            <FlashlightCard className="hover:bg-white/[0.04] p-8 rounded-sm border border-white/5 hover:border-white/10 transform transition-all duration-500 hover:-translate-y-1 relative text-white backdrop-blur-lg">
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <iconify-icon icon="solar:server-square-bold-duotone" class="text-purple-400 text-xl"></iconify-icon>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Deliverable 02</span>
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight mb-3 leading-tight">Code in your infrastructure</h3>
                <p className="text-sm font-light leading-relaxed text-white/60 mb-6">
                  Your AWS, GCP, or Azure. Infrastructure-as-code. You can redeploy, modify, or decommission without us.
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                  <iconify-icon icon="simple-icons:amazonaws" class="text-white/30 text-base"></iconify-icon>
                  <iconify-icon icon="simple-icons:googlecloud" class="text-white/30 text-base"></iconify-icon>
                  <iconify-icon icon="simple-icons:microsoftazure" class="text-white/30 text-base"></iconify-icon>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-auto">IaC standard</span>
                </div>
              </div>
            </FlashlightCard>

            {/* Deliverable Card 3 */}
            <FlashlightCard className="hover:bg-white/[0.04] p-8 rounded-sm border border-white/5 hover:border-white/10 transform transition-all duration-500 hover:-translate-y-1 relative backdrop-blur-lg">
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <iconify-icon icon="solar:notebook-bookmark-bold-duotone" class="text-purple-400 text-xl"></iconify-icon>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Deliverable 03</span>
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight mb-3 leading-tight">Handoff training and a runbook</h3>
                <p className="text-sm font-light leading-relaxed text-white/60 mb-6">
                  60-90 minute training for the team using the system, plus a one-page runbook covering what triggers it and what to do if it breaks.
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                    60-90 min session
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                    1-page runbook
                  </div>
                </div>
              </div>
            </FlashlightCard>

          </div>
        </div>

        {/* Bottom Banner CTA */}
        <div className="hover:bg-white/[0.04] rounded-sm p-8 lg:px-12 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group border border-white/5 hover:border-white/10 backdrop-blur-lg transition-all duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,33,128,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:0_0,0_0] transition-all duration-1000 group-hover:bg-[position:100%_100%,0_0]"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-2">Ready to scope your engagement?</h3>
            <p className="text-white/50 text-base font-light">A 30-minute call is enough to know if we're a fit.</p>
          </div>

          <a href="#book" className="relative z-10 bg-white text-black pl-8 pr-6 py-4 rounded-sm font-semibold text-xs uppercase tracking-widest hover:bg-purple-50 transition-all transform flex items-center gap-4 group/btn">
            Book an intro call
            <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                <iconify-icon icon="solar:arrow-right-bold-duotone" class="text-sm"></iconify-icon>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Validation