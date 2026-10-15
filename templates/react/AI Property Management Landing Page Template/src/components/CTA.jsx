import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="w-full py-40 px-6 relative" id="contact">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden relative"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-amber-500/10 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <iconify-icon icon="solar:server-square-linear" width="32" className="text-amber-500/60 mb-8"></iconify-icon>
          
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Initialize System
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl font-light leading-relaxed mb-10">
            Stop losing revenue to latency and broken funnels. Deploy the invisible infrastructure and optimize your booking probability today.
          </p>
          
          <button className="px-10 py-4 rounded-full bg-white text-black text-[15px] font-medium hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]">
            Book Architecture Review
          </button>
        </div>
      </motion.div>
    </section>
  )
}