import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center px-6 pt-20" id="hero">
      <motion.div 
        className="flex flex-col items-center text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs tracking-widest uppercase backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.03)]">
          <iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
          Revenue Optimization System
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-[84px] font-light text-white tracking-tight leading-[1.05] mb-8"
        >
          Where missed inquiries <br className="hidden md:block" />
          <span className="text-zinc-500">stop existing.</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-12"
        >
          The invisible infrastructure for property managers. Capturing demand and increasing bookings, quietly executing in the background while you sleep.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]">
            Deploy Infrastructure
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all duration-300 hover:scale-[1.02]">
            View Architecture
          </button>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500/50 to-transparent"></div>
      </motion.div>
    </section>
  )
}