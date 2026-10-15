import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex items-center justify-between"
    >
      {/* Left: Brand Identity */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-8 h-8 rounded-lg bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-amber-500/80 group-hover:text-amber-400 group-hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.1)]">
          <iconify-icon icon="solar:layers-minimalistic-linear" width="18" height="18"></iconify-icon>
        </div>
        <span className="text-white font-medium text-[15px] tracking-wide">LaunchLayer AI</span>
      </div>

      {/* Center: Navigation - Hidden on mobile for minimalism, clean on desktop */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        {['Architecture', 'Capabilities', 'Integration', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-[13px] font-light text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Right: CTA */}
      <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-[13px] font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
        Book Call
      </button>
    </motion.header>
  )
}