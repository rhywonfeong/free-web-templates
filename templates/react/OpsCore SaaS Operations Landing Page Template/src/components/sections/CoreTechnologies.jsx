import React from 'react';

const Workflow = () => {
  const steps = [
    { num: "01", title: "Quote Created", desc: "A fresh container for commercial commitments." },
    { num: "02", title: "Versioned Pricing Snapshot", desc: "Prices locked to the specific payload version." },
    { num: "03", title: "Approval Submitted", desc: "Internal checks restricted to the exact snapshot." },
    { num: "04", title: "Proposal Sent", desc: "Generated strictly from the approved version." },
    { num: "05", title: "Proposal Accepted", desc: "Client signature commits to the exact terms hash." },
    { num: "06", title: "Payment Settled", desc: "Funds verified via integrated secure checkout." },
    { num: "07", title: "Job Created", desc: "Operations unlocked with snapshot parameters." },
    { num: "08", title: "Scheduling Ready", desc: "Inventory and staffing guards passed." },
    { num: "09", title: "Owner Analytics", desc: "Tenant-scoped reporting updates seamlessly." }
  ];

  return (
    <section className="relative py-24 bg-[#050505] border-b border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            From quote to job, <br/>every commitment stays traceable.
          </h2>
          <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
            Quotes are containers. Commercial commitments live in immutable quote versions. Editing creates a new version. Accepted versions snapshot into jobs, meaning operations observe but cannot mutate commercial terms.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative w-full overflow-x-auto hide-scrollbar pb-12 cursor-grab active:cursor-grabbing">
          {/* Connecting Gold Line */}
          <div className="absolute top-[48px] left-0 w-[2400px] h-px bg-white/10 z-0">
            <div className="h-full bg-gradient-to-r from-[#D4AF37] to-transparent w-full opacity-50"></div>
          </div>

          <div className="flex items-start gap-6 w-max relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="w-[260px] flex flex-col items-start relative group">
                
                {/* Node */}
                <div className="w-24 h-24 flex items-center justify-center relative mb-8">
                  <div className="absolute inset-0 bg-[#0A0A0A] border border-white/10 rounded-full group-hover:border-[#D4AF37]/50 transition-colors duration-500 z-10 flex items-center justify-center">
                    <span className="text-[#D4AF37] font-medium font-mono text-sm">{step.num}</span>
                  </div>
                  {/* Subtle node glow */}
                  <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 rounded-full blur-xl transition-all duration-500 z-0"></div>
                </div>

                {/* Card */}
                <div className="bg-[#0A0A0A]/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 w-full group-hover:bg-[#0A0A0A] group-hover:border-white/10 transition-all duration-300">
                  <h3 className="text-white text-sm font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Workflow;