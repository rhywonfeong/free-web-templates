import React from 'react'
import { motion } from 'framer-motion'

export default function Problem() {
  const problems = [
    {
      icon: "solar:clock-circle-linear",
      title: "Inquiry Latency",
      description: "High-intent prospects expect instant resolution. Delays of mere minutes result in exponential drop-off to competitors."
    },
    {
      icon: "solar:chat-round-unread-linear",
      title: "Context Collapse",
      description: "Generic automated replies frustrate users. Standard chatbots fail to maintain historical context or understand booking nuances."
    },
    {
      icon: "solar:graph-down-linear",
      title: "Conversion Leakage",
      description: "Friction in the funnel forces abandonment. Valuable leads vanish silently before the checkout sequence is ever completed."
    }
  ]

  return (
    <section className="w-full py-32 px-6 relative" id="problem">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
            The Friction Point
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Demand is constantly generated, but rarely captured optimally. Every gap in your current infrastructure is a compounding loss in revenue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-amber-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500/70 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-500 mb-6">
                  <iconify-icon icon={item.icon} width="24"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}