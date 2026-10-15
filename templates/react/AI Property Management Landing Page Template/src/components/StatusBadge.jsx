import React from 'react'
import { motion } from 'framer-motion'

export default function StatusBadge() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-md shadow-xl"
    >
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </div>
      <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">
        System Active
      </span>
    </motion.div>
  )
}