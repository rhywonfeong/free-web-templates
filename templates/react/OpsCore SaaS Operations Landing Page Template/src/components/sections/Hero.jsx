import React from 'react';
import BuildCTA from '../ui/BuildCTA';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] pt-28 pb-16 border-b border-[#D4AF37]/10 flex flex-col items-center">
      {/* Brand Navbar */}
      <div className="absolute top-0 left-0 w-full px-6 lg:px-12 py-6 flex items-center z-50">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/347b726c-22f8-408c-91bd-bb8cd77b499a/54e5bf79-0807-42e9-9ed3-3fcbab20fac7-image-1.png?v=1777499772618" 
          alt="Opscore" 
          className="h-8 w-auto" 
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[600px]">
          {/* Left Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              Immutable quote-to-cash operations
            </div>
            
            <h1 className="lg:text-7xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-6">
              Control pricing, approvals, jobs, and revenue with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">operational certainty.</span>
            </h1>
            
            <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed font-light">
              A premium operations platform where every quote version, approval, proposal, job, payment, and analytics view is tenant-scoped, auditable, and protected from accidental mutation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-black text-sm font-semibold rounded-lg transition-colors duration-300 shadow-[0_4px_14px_rgba(212,175,55,0.2)]">
                Book a Demo
              </button>
              <button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm">
                Explore Platform
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
              </button>
            </div>
          </div>

          {/* Right Futuristic Dashboard Graphic */}
          <div className="relative w-full h-[500px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* Central Progress Engine */}
              <div className="absolute z-10 w-48 h-48 rounded-full border border-[#D4AF37]/40 bg-gradient-to-b from-[#0A0A0A] to-[#050505] flex flex-col items-center justify-center shadow-[inset_0_0_40px_rgba(212,175,55,0.05)]">
                <div className="absolute inset-2 rounded-full border-[2px] border-dashed border-[#D4AF37]/30 animate-[spin_40s_linear_infinite]"></div>
                <iconify-icon icon="solar:refresh-circle-linear" width="32" class="text-[#D4AF37] mb-2"></iconify-icon>
                <span className="text-white text-sm font-semibold">Quote Version</span>
                <span className="text-[#F3E5AB] text-[10px] uppercase tracking-widest mt-1">Health: Valid</span>
              </div>

              {/* Orbiting rings */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-white/5 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute w-[460px] h-[460px] rounded-full border border-white/5 animate-[spin_80s_linear_infinite_reverse]"></div>

              {/* Floating Dashboard Cards */}
              <div className="absolute top-[5%] right-[10%] z-20 animate-[bounce_4s_infinite_ease-in-out]">
                <div className="px-4 py-3 rounded-lg bg-[#0A0A0A]/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl flex items-center gap-3">
                  <iconify-icon icon="solar:lock-keyhole-linear" width="18" class="text-[#D4AF37]"></iconify-icon>
                  <div>
                    <h4 className="text-white text-xs font-medium">Quote v4 Approved</h4>
                    <p className="text-slate-400 text-[10px]">Snapshot Locked</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[20%] left-[0%] z-20 animate-[bounce_5s_infinite_ease-in-out] delay-100">
                <div className="px-4 py-3 rounded-lg bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3">
                  <iconify-icon icon="solar:wallet-money-linear" width="18" class="text-white"></iconify-icon>
                  <div>
                    <h4 className="text-white text-xs font-medium">Payment Settlement</h4>
                    <p className="text-[#D4AF37] text-[10px]">Complete</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-[40%] -left-[10%] z-20 animate-[bounce_4.5s_infinite_ease-in-out] delay-200">
                <div className="px-4 py-3 rounded-lg bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3">
                  <iconify-icon icon="solar:calendar-mark-linear" width="18" class="text-white"></iconify-icon>
                  <div>
                    <h4 className="text-white text-xs font-medium">Scheduling Readiness</h4>
                    <p className="text-slate-400 text-[10px]">Inventory Guard Passed</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[5%] right-[15%] z-20 animate-[bounce_6s_infinite_ease-in-out] delay-300">
                <div className="px-4 py-3 rounded-lg bg-[#0A0A0A]/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl flex items-center gap-3">
                  <iconify-icon icon="solar:chart-square-linear" width="18" class="text-[#D4AF37]"></iconify-icon>
                  <div>
                    <h4 className="text-white text-xs font-medium">Owner Revenue Report</h4>
                    <p className="text-slate-400 text-[10px]">Tenant Scoped</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-[15%] left-[15%] z-20 animate-[bounce_5.5s_infinite_ease-in-out] delay-500">
                <div className="px-4 py-3 rounded-lg bg-[#050505]/90 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-3">
                  <iconify-icon icon="solar:magic-stick-3-linear" width="18" class="text-white"></iconify-icon>
                  <div>
                    <h4 className="text-white text-xs font-medium">AI Suggestion</h4>
                    <p className="text-slate-400 text-[10px]">Awaiting Human Approval</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;