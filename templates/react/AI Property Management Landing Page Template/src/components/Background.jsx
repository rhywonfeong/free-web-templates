import React from 'react'
import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 mix-blend-screen" />
      
      {/* Right-side Ambient Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600/10 blur-[130px] rounded-full translate-x-1/4 -translate-y-1/4"
      />

      {/* Subtle Bottom Gradient to anchor the grid */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  )
}