import React from 'react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    { icon: "solar:inbox-in-linear", title: "Omnichannel Intake", text: "Unifies queries from all platforms into a single algorithmic queue." },
    { icon: "solar:text-field-focus-linear", title: "Contextual Analysis", text: "Deciphers human nuances and complex multi-variable requests." },
    { icon: "solar:history-linear", title: "Automated Nurturing", text: "Executes follow-up sequences precisely timed to intent signals." },
    { icon: "solar:hand-money-linear", title: "Conversion Protocols", text: "Drives hesitant prospects toward checkout with targeted urgency." },
    { icon: "solar:pie-chart-2-linear", title: "Analytics Engine", text: "Surfaces actionable telemetry on demand patterns and friction." },
    { icon: "solar:ghost-linear", title: "Silent Operation", text: "Executes entirely in the background, maintaining your premium brand feel." }
  ]

  return (
    <section className="w-full py-32 px-6 relative" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
            System Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group flex gap-5"
            >
              <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all duration-300">
                <iconify-icon icon={feature.icon} width="20"></iconify-icon>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white tracking-tight mb-2 group-hover:text-amber-50/90 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}