import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Simulated "Explosion" diagram effect on scroll
  const yCore = useTransform(scrollYProgress, [0, 1], [0, -200])
  const yShell = useTransform(scrollYProgress, [0, 1], [0, 150])
  const scaleCore = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#0D0D0D]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0D0D0D] to-[#0D0D0D] opacity-50"></div>

        {/* 3D/Schematic Visualizer */}
        <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center pointer-events-none">
          {/* Core Engine Element */}
          <motion.div 
            style={{ y: yCore, scale: scaleCore }}
            className="absolute z-20 w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-[#FF4500]/30 bg-black/50 backdrop-blur-md flex items-center justify-center copper-glow"
          >
            <iconify-icon icon="solar:settings-bold-duotone" className="text-[#FF4500] text-6xl sm:text-9xl animate-[spin_10s_linear_infinite]"></iconify-icon>
          </motion.div>

          {/* Outer Shell/Chassis Element */}
          <motion.div 
            style={{ y: yShell }}
            className="absolute z-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#848884]/20 border-dashed"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#848884] rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-[#848884] rounded-full"></div>
          </motion.div>
          
          {/* Wireframe Accents */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M0,50 L100,50 M50,0 L50,100" 
              stroke="#FF4500" 
              strokeWidth="0.2" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <circle cx="50" cy="50" r="30" stroke="#848884" strokeWidth="0.1" fill="none" />
            <circle cx="50" cy="50" r="40" stroke="#848884" strokeWidth="0.1" fill="none" strokeDasharray="1 1" />
          </svg>
        </div>

        {/* Typography */}
        <motion.div 
          style={{ opacity }}
          className="absolute z-30 bottom-24 text-center px-4 w-full max-w-5xl"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans font-black tracking-tighter text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-[#848884] leading-[0.9] pb-2"
          >
            BSP ENGINEERING
            <br />
            <span className="text-[#FF4500] mix-blend-screen">WORKS</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 font-mono text-[#848884] uppercase tracking-widest text-xs sm:text-sm max-w-md mx-auto"
          >
            Surgical precision forged in Eluru. We build, restore, and tune with foundry-level exactness.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="font-mono text-[10px] text-[#848884] uppercase tracking-widest mb-2">Initiate</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF4500] to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}