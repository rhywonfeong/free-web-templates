import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BlueprintSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative py-32 bg-[#050505] overflow-hidden border-t border-[#1a1a1a]">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#848884 1px, transparent 1px), linear-gradient(90deg, #848884 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Animated Schematic */}
        <div className="relative w-full aspect-square max-w-lg mx-auto bg-black/40 border border-[#1a1a1a] rounded-lg p-8 glass-panel">
          <div className="absolute top-4 left-4 font-mono text-[10px] text-[#848884] uppercase tracking-widest">
            FIG. 1 / FOUNDRY-LEVEL PRECISION
          </div>
          
          <svg viewBox="0 0 100 100" className="w-full h-full mt-4">
            {/* Base Gear */}
            <motion.path
              d="M50 10 C 27.9 10 10 27.9 10 50 C 10 72.1 27.9 90 50 90 C 72.1 90 90 72.1 90 50 C 90 27.9 72.1 10 50 10 Z M50 20 C 66.5 20 80 33.5 80 50 C 80 66.5 66.5 80 50 80 C 33.5 80 20 66.5 20 50 C 20 33.5 33.5 20 50 20 Z"
              stroke="#848884"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Inner Technical Lines */}
            <motion.path
              d="M20 50 L80 50 M50 20 L50 80 M28 28 L72 72 M28 72 L72 28"
              stroke="#FF4500"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            />
            {/* Center Hub */}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              stroke="#FF4500"
              strokeWidth="1"
              fill="rgba(255, 69, 0, 0.1)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, type: "spring", delay: 1.5 }}
            />
          </svg>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans font-bold tracking-tighter text-4xl sm:text-5xl uppercase mb-4">
              B2B Trust & <br/><span className="text-[#848884]">Schematics</span>
            </h2>
            <p className="font-mono text-sm text-[#848884] leading-relaxed max-w-md">
              We operate on a higher frequency. Our facility is equipped to handle complex B2B engineering contracts, delivering micron-level tolerances and bespoke fabrication for high-stress automotive applications.
            </p>
          </motion.div>

          <motion.ul 
            className="flex flex-col gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {['CAD/CAM Integration', 'Metallurgical Analysis', 'Stress-Tested Components'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4500] text-lg"></iconify-icon>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}