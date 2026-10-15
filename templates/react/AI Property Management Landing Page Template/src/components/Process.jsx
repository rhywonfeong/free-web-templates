import React from 'react'
import { motion } from 'framer-motion'

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Architecture Audit",
      description: "We map your existing friction points and identify where revenue is leaking in the current booking funnel."
    },
    {
      number: "02",
      title: "Logic Integration",
      description: "The LaunchLayer systems are woven into your infrastructure, trained specifically on your property variables."
    },
    {
      number: "03",
      title: "Autonomous Execution",
      description: "The system goes live. It captures, qualifies, and routes traffic 24/7, invisible to the end user."
    }
  ]

  return (
    <section className="w-full py-32 px-6 relative" id="integration">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
            Deployment Sequence
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Implementation is surgical. Zero downtime. Zero disruption to ongoing operations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Badge */}
                <div className="w-24 h-24 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-2xl font-light text-zinc-500 mb-8 relative z-10 group-hover:border-amber-500/30 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  {step.number}
                  {/* Subtle pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-white/5 scale-110 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
                </div>

                <h3 className="text-xl font-medium text-white tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}