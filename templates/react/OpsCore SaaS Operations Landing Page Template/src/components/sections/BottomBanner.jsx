import React from 'react';
import BuildCTA from '../ui/BuildCTA';

const BottomBanner = () => {
  return (
    <div className="bg-[#050505] relative overflow-hidden text-center">
      
      {/* Security / Compliance List Section */}
      <section className="py-24 border-b border-white/5 bg-[#0A0A0A]/50">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Designed around invariants, <span className="text-[#D4AF37]">not assumptions.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              "Immutable quote versions",
              "Terminal accepted/declined proposals",
              "State-machine enforced jobs",
              "Tenant-scoped reads",
              "PII-minimized exports",
              "Owner-only reporting",
              "Auditability across exports"
            ].map((invariant, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                <iconify-icon icon="solar:shield-check-bold-duotone" width="20" class="text-[#D4AF37]"></iconify-icon>
                <span className="text-slate-300 text-sm font-medium">{invariant}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 lg:px-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Bring certainty to every quote, job, payment, and report.
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Operate from one source of truth where commitments are preserved, approvals are explicit, and AI stays safely human-gated.
          </p>
          
          <BuildCTA />
        </div>
      </section>
    </div>
  );
};

export default BottomBanner;