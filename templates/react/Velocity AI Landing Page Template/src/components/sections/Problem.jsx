import React from 'react'

export default function Problem() {
  const problems = [
    {
      icon: "solar:ruler-linear",
      title: "Slow Architecture",
      desc: "Legacy structural cycles take months, causing you to lose competitive advantage and market share in digital space."
    },
    {
      icon: "solar:city-linear",
      title: "Poor Foundation",
      desc: "Beautiful but generic templates fail to support complex usage, leading to high friction and lost revenue."
    },
    {
      icon: "solar:buildings-2-linear",
      title: "Tech Debt",
      desc: "Outdated stacks and messy codebases make scaling impossible without complete, expensive teardowns and rebuilds."
    }
  ]

  return (
    <section className="py-24 px-6 relative bg-white dark:bg-slate-900" id="problem">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[14px] font-medium text-teal-500 tracking-wider uppercase mb-3">The Challenge</h2>
          <h3 className="text-[30px] md:text-[48px] font-semibold tracking-[-0.025em] text-slate-900 dark:text-white mb-6 leading-tight">
            Building digital infrastructure shouldn't feel unstable.
          </h3>
          <p className="text-[14px] text-slate-500 dark:text-slate-400 font-normal leading-[20px]">
            Most agencies deliver static solutions. We recognize the systemic pain points blocking your structural growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="group p-[1px] rounded-[24px] bg-gradient-to-br from-white/40 via-white/10 to-transparent dark:from-slate-700/40 dark:via-slate-800/10 shadow-[0_8px_10px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-700">
              <div className="h-full bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-[12px] border border-slate-100/50 dark:border-slate-800/50 rounded-[23px] p-8">
                <div className="w-12 h-12 rounded-[16px] bg-white dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <iconify-icon icon={item.icon} width="24"></iconify-icon>
                </div>
                <h4 className="text-[20px] font-semibold text-slate-900 dark:text-white mb-3 tracking-[-0.025em]">{item.title}</h4>
                <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-[20px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}