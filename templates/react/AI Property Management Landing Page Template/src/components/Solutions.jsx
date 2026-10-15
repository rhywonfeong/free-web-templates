import React from 'react'
import { motion } from 'framer-motion'

export default function Solutions() {
  return (
    <section className="w-full py-32 px-6 relative" id="architecture">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs tracking-widest uppercase mb-6">
            <iconify-icon icon="solar:cpu-linear" width="14"></iconify-icon>
            Core Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
            Invisible Infrastructure
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl font-light leading-relaxed">
            A cohesive intelligence layer that sits behind your existing systems. It doesn't replace your brand; it optimizes the mathematical probability of a booking.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 group relative rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col justify-between p-8"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-600/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-amber-600/10 transition-colors duration-700" />
            <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 mb-6 group-hover:scale-110 transition-transform duration-500">
              <iconify-icon icon="solar:radar-linear" width="24"></iconify-icon>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-medium text-white tracking-tight mb-3">Autonomous Capture Protocol</h3>
              <p className="text-zinc-400 font-light max-w-md leading-relaxed">
                The system intercepts every inquiry across channels instantly, qualifying leads and answering complex variables without human intervention.
              </p>
            </div>
          </motion.div>

          {/* Medium Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group relative rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col p-8"
          >
            <div className="relative z-10 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 mb-6 group-hover:scale-110 transition-transform duration-500">
              <iconify-icon icon="solar:git-branch-linear" width="20"></iconify-icon>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-xl font-medium text-white tracking-tight mb-2">Dynamic Routing</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Identifies intent instantly and routes high-value prospects to closing sequences.
              </p>
            </div>
          </motion.div>

          {/* Medium Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col p-8"
          >
            <div className="relative z-10 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 mb-6 group-hover:scale-110 transition-transform duration-500">
              <iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-xl font-medium text-white tracking-tight mb-2">Persistent Memory</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Retains contextual history across sessions, ensuring seamless, non-repetitive interactions.
              </p>
            </div>
          </motion.div>

          {/* Wide Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="md:col-span-2 group relative rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col justify-center p-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 mb-4 group-hover:scale-110 transition-transform duration-500">
                  <iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight mb-2">Telemetry & Yield Optimization</h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                  Continuous data ingestion refines responses over time, quietly increasing conversion metrics.
                </p>
              </div>
              
              {/* Abstract Visual representation */}
              <div className="flex gap-2 p-4 bg-white/5 rounded-xl border border-white/5 w-full sm:w-auto opacity-70 group-hover:opacity-100 transition-opacity">
                 {[40, 70, 45, 90, 65, 100].map((h, i) => (
                   <div key={i} className="w-2 bg-amber-500/40 rounded-full" style={{ height: `${h}px` }} />
                 ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}