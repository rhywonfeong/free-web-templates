import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function SplitSlider() {
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  
  // Images for comparison
  const vintageImg = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1600&q=80" // Gritty vintage
  const modernImg = "https://images.unsplash.com/photo-1568772585407-9361f9bf3c87?w=1600&q=80" // Modern performance

  const x = useMotionValue(0)
  
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth
      setContainerWidth(width)
      x.set(width / 2) // Start in middle
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setContainerWidth(width)
        x.set(width / 2)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [x])

  // Transform x pixel value to a percentage for the clip-path
  const clipPath = useTransform(x, (value) => {
    if (containerWidth === 0) return `inset(0 50% 0 0)`
    const percentage = (value / containerWidth) * 100
    return `inset(0 ${100 - percentage}% 0 0)`
  })

  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h3 className="font-sans font-bold tracking-tighter text-3xl sm:text-5xl uppercase">The Split Soul</h3>
          <p className="font-mono text-[#848884] text-xs uppercase tracking-widest mt-2">Drag to compare engineering eras</p>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-7xl mx-auto h-[50vh] sm:h-[70vh] cursor-ew-resize overflow-hidden bg-[#1a1a1a]"
      >
        {/* Base Layer: Modern (Right) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${modernImg})` }}
        >
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          <div className="absolute bottom-6 right-6 font-mono text-xs uppercase tracking-widest text-white glass-panel px-4 py-2">
            Modern Performance
          </div>
        </div>

        {/* Top Layer: Vintage (Left) */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center sepia-[0.3]"
          style={{ 
            backgroundImage: `url(${vintageImg})`,
            clipPath 
          }}
        >
          <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay"></div>
          <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-white glass-panel px-4 py-2">
            Vintage Restoration
          </div>
        </motion.div>

        {/* Drag Handle */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: containerWidth }}
          dragElastic={0}
          dragMomentum={false}
          style={{ x }}
          className="absolute top-0 bottom-0 z-20 w-1 bg-[#FF4500] hover:w-2 transition-all group flex items-center justify-center -ml-[2px]"
        >
          <div className="w-8 h-12 bg-[#0D0D0D] border border-[#FF4500] rounded-sm flex items-center justify-center gap-1 shadow-[0_0_15px_rgba(255,69,0,0.5)] cursor-grab active:cursor-grabbing">
            <div className="w-[1px] h-4 bg-[#848884]"></div>
            <div className="w-[1px] h-4 bg-[#848884]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}