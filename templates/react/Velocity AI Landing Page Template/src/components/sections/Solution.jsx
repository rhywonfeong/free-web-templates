import React from 'react'

export default function Solution() {
  const benefits = [
    { title: "AI-Powered Architecture", text: "We utilize modern AI models to construct intelligent boilerplates, letting us focus on deep custom logic." },
    { title: "Parametric Design", text: "Every interface parameter is optimized based on structural design patterns and human psychology." },
    { title: "Future-Proof Foundations", text: "Built on strictly-typed modern stacks ensuring massive enterprise scalability and performance." }
  ]

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-[12px] font-medium text-slate-600 dark:text-slate-300 mb-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <iconify-icon icon="solar:menu-dots-bold" className="text-teal-500"></iconify-icon>
            The Velocity Advantage
          </div>
          <h2 className="text-[30px] md:text-[48px] font-semibold tracking-[-0.025em] text-slate-900 dark:text-white mb-6 leading-tight">
            Intelligent blueprints built for <span className="text-teal-600 dark:text-teal-400">hyper-scale.</span>
          </h2>
          <p className="text-[14px] text-slate-500 dark:text-slate-400 mb-10 font-normal leading-[24px]">
            We replace outdated agency models with a precision, technology-first approach that delivers exceptional products in half the structural time.
          </p>

          <div className="space-y-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100 dark:border-teal-800/50">
                  <iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-slate-900 dark:text-white mb-1">{b.title}</h4>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 leading-[18px]">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Abstract UI Visual */}
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[32px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 overflow-hidden group shadow-[0_8px_10px_-6px_rgba(0,0,0,0.05)]">
          {/* Decorative grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
          
          {/* Layered UI Cards */}
          <div className="relative z-10 w-full h-full flex items-center justify-center perspective-[1000px]">
            
            {/* Back Card */}
            <div className="absolute w-[80%] h-[60%] bg-white/40 dark:bg-slate-800/20 backdrop-blur-sm rounded-[24px] border border-slate-200/50 dark:border-slate-700/50 translate-y-8 scale-90 group-hover:translate-y-12 transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)]"></div>
            
            {/* Middle Card */}
            <div className="absolute w-[85%] h-[65%] bg-white/60 dark:bg-slate-800/40 backdrop-blur-[4px] rounded-[24px] border border-slate-200/80 dark:border-slate-700/80 translate-y-4 scale-95 group-hover:translate-y-6 transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[50ms]"></div>
            
            {/* Front Card using Gradient Border Shell */}
            <div className="absolute w-[90%] h-[70%] p-[1px] rounded-[24px] bg-gradient-to-br from-white/80 via-white/40 to-transparent dark:from-slate-600/50 dark:via-slate-700/20 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-[100ms]">
              <div className="w-full h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-[12px] rounded-[23px] border border-slate-100 dark:border-slate-800 p-6 flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                    <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  </div>
                  <div className="text-[12px] text-slate-400 font-mono">architecture_model.tsx</div>
                </div>
                
                {/* Mock content */}
                <div className="space-y-4 w-full">
                  <div className="h-4 w-1/3 bg-slate-100 dark:bg-slate-800 rounded"></div>
                  <div className="h-2 w-full bg-slate-50 dark:bg-slate-800/50 rounded"></div>
                  <div className="h-2 w-5/6 bg-slate-50 dark:bg-slate-800/50 rounded"></div>
                  
                  <div className="mt-8 flex gap-4">
                    <div className="h-16 w-16 rounded-[16px] bg-gradient-to-br from-teal-400 to-blue-500 opacity-90 shadow-sm"></div>
                    <div className="flex-1 space-y-2 py-1">
                       <div className="h-3 w-1/2 bg-slate-100 dark:bg-slate-800 rounded"></div>
                       <div className="h-2 w-full bg-slate-50 dark:bg-slate-800/50 rounded"></div>
                       <div className="h-2 w-3/4 bg-slate-50 dark:bg-slate-800/50 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}