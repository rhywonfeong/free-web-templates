import React from 'react';

const FeatureGrid = () => {
  const features = [
    {
      icon: "solar:database-bold-duotone",
      title: "Immutable Quote Versioning",
      desc: "Every pricing decision is tied to a specific quote version. Snapshot prices never mutate after creation."
    },
    {
      icon: "solar:user-check-bold-duotone",
      title: "Approval Control",
      desc: "Approvals apply only to the exact version submitted. New edits require new approvals."
    },
    {
      icon: "solar:shield-check-bold-duotone",
      title: "Proposal Acceptance Integrity",
      desc: "Accepted proposals must match the exact quote version and terms hash before jobs can be created."
    },
    {
      icon: "solar:calendar-search-bold-duotone",
      title: "Job & Scheduling Readiness",
      desc: "Jobs snapshot accepted quote payloads, inventory requirements, payment settlement, and staffing guards."
    },
    {
      icon: "solar:chart-square-bold-duotone",
      title: "Tenant-Scoped Analytics",
      desc: "Owner dashboards, cohort segmentation, revenue reporting, and exports remain tenant-scoped and auditable."
    },
    {
      icon: "solar:magic-stick-3-bold-duotone",
      title: "Human-Gated AI",
      desc: "AI can suggest, parse, and explain, but humans must explicitly approve any commercial impact."
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-b border-white/5 dotted-texture relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Architected for accuracy.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our platform guarantees that operational execution perfectly matches the commercial agreement. No manual drift, no unapproved overrides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/[0.04] transition-all duration-500 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <iconify-icon icon={feat.icon} width="24" class="text-[#D4AF37]"></iconify-icon>
              </div>
              <h3 className="text-white text-base font-semibold tracking-tight mb-3">{feat.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;