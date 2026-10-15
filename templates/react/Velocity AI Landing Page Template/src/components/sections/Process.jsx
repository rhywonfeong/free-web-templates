import React from 'react'

export default function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Deep dive into structural logic, spatial goals, and infrastructure needs." },
    { num: "02", title: "Blueprint", desc: "Architecting the technical stack and parametric flow patterns." },
    { num: "03", title: "Assembly", desc: "Rapid modular development with AI-assisted structural testing." },
    { num: "04", title: "Deployment", desc: "Launch, ongoing telemetry, and structural iteration." }
  ]

  return (
    <section className="py-24 px-6 overflow-hidden bg-white dark:bg-slate-900" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-[30px] md:text-[48px] font-semibold tracking-[-0.025em] text-slate-900 dark:text-white mb-6 leading-tight">
            A refined methodology for predictable scaling.
          </h2>
          <p className="text-[14px] text-slate-500 dark:text-slate-400 font-normal leading-[20px]">
            We've engineered out the chaos of traditional builds, replacing it with a transparent, architectural methodology.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="p-[1px] rounded-[24px] bg-gradient-to-br from-white/40 via-white/10 to-transparent dark:from-slate-700/30 dark:via-slate-800/10 shadow-[0_8px_10px_-6px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] h-full">
                  <div className="h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-[12px] border border-slate-100 dark:border-slate-800 rounded-[23px] p-8">
                    <div className="text-[48px] font-semibold text-slate-100 dark:text-slate-800/50 mb-6 font-sans tracking-[-0.025em] transition-colors duration-[700ms] group-hover:text-teal-500/20">
                      {step.num}
                    </div>
                    <h4 className="text-[20px] font-semibold text-slate-900 dark:text-white mb-2 tracking-[-0.025em]">{step.title}</h4>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-[18px]">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}