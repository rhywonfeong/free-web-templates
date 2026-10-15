import React from 'react';

const AnalyticsAndAI = () => {
  return (
    <section className="bg-[#050505] text-slate-300 border-b border-white/5 py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Analytics & Reporting Section */}
        <div className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Revenue reporting that never <br className="hidden md:block" />recomputes history from mutable pricing.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/30 transition-colors">
              <h3 className="text-white text-xl font-medium mb-3">Accepted Revenue</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Derived from immutable accepted quote totals. Preserves historical accuracy entirely.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/30 transition-colors">
              <h3 className="text-white text-xl font-medium mb-3">Collected Revenue</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Derived only from settled checkout sessions securely logged in the master ledger.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#D4AF37]/30 transition-colors">
              <h3 className="text-white text-xl font-medium mb-3">Outstanding Revenue</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Calculated as accepted minus collected, never dropping below zero algorithmically.</p>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between flex-wrap gap-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <iconify-icon icon="solar:lock-password-bold-duotone" width="24" class="text-[#D4AF37]"></iconify-icon>
              <span className="text-white text-sm font-medium">Secure Data Extraction</span>
            </div>
            <p className="text-slate-400 text-xs">Signed, TTL-limited export links with auditable access.</p>
          </div>
        </div>

        {/* AI Governance Section */}
        <div>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                AI assistance <span className="text-[#D4AF37]">without AI authority.</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI can interpret requests, suggest quote changes, explain policies, and surface blockers. It cannot finalize pricing, approve versions, send proposals, create jobs, or transition state without validated human action.
              </p>
            </div>
          </div>

          {/* AI Flow Visualization */}
          <div className="relative p-8 rounded-2xl border border-[#D4AF37]/20 bg-[#0A0A0A] overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-center">
              
              {/* Suggest */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <iconify-icon icon="solar:magic-stick-3-bold-duotone" width="28" class="text-slate-300"></iconify-icon>
                </div>
                <h4 className="text-white font-medium mb-2">1. Suggest</h4>
                <p className="text-slate-400 text-xs">AI parses requests and drafts quote modifications.</p>
              </div>

              {/* Validate */}
              <div className="flex flex-col items-center text-center relative">
                <div className="hidden md:block absolute top-8 left-[-50%] w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 relative z-10">
                  <iconify-icon icon="solar:shield-check-bold-duotone" width="28" class="text-slate-300"></iconify-icon>
                </div>
                <h4 className="text-white font-medium mb-2">2. Validate</h4>
                <p className="text-slate-400 text-xs">System checks against policies and inventory guards.</p>
              </div>

              {/* Human Approves */}
              <div className="flex flex-col items-center text-center relative">
                <div className="hidden md:block absolute top-8 left-[-50%] w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                  <iconify-icon icon="solar:user-bold-duotone" width="28" class="text-[#D4AF37]"></iconify-icon>
                </div>
                <h4 className="text-white font-medium mb-2">3. Human Approves</h4>
                <p className="text-[#F3E5AB] text-xs">Owner explicitly approves the new commercial version.</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalyticsAndAI;