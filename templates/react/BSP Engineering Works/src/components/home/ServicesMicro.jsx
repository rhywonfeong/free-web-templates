import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'

const services = [
  {
    id: '01',
    title: 'Foundry Detailing',
    desc: 'Deep metallic restoration, blast cleaning, and elemental surfacing.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80'
  },
  {
    id: '02',
    title: 'Vintage Restoration',
    desc: 'Resurrecting mechanical souls with period-correct exactness.',
    img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1200&q=80'
  },
  {
    id: '03',
    title: 'Performance Tuning',
    desc: 'Extracting maximum output through computational engineering.',
    img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3c87?w=1200&q=80'
  }
]

export default function ServicesMicro() {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  return (
    <section className="relative min-h-screen py-24 flex items-center bg-[#0D0D0D] overflow-hidden">
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={hoveredIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale-[80%]"
          style={{ backgroundImage: `url(${services[hoveredIndex].img})` }}
        />
      </AnimatePresence>
      
      {/* Heavy Blur Overlay for "Heat Wave/Foundry" effect */}
      <div className="absolute inset-0 z-0 backdrop-blur-xl bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase mb-8 flex items-center gap-2">
            <iconify-icon icon="solar:flame-linear"></iconify-icon> Core Competencies
          </span>

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              className={clsx(
                "group cursor-pointer py-6 sm:py-10 border-b border-[#848884]/20 transition-all duration-500",
                hoveredIndex === index ? "opacity-100" : "opacity-40 hover:opacity-70"
              )}
            >
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="flex items-start gap-4 sm:gap-8">
                  <span className="font-mono text-sm sm:text-lg text-[#848884] mt-2">
                    {service.id}
                  </span>
                  <div className="overflow-hidden">
                    <motion.h2 
                      className="font-sans font-bold tracking-tighter text-4xl sm:text-6xl md:text-8xl uppercase text-white group-hover:text-[#FF4500] transition-colors duration-500"
                      initial={{ y: 100 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {service.title}
                    </motion.h2>
                  </div>
                </div>
                
                <motion.p 
                  className={clsx(
                    "font-mono text-xs sm:text-sm text-[#848884] max-w-xs transition-all duration-500 origin-left",
                    hoveredIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  )}
                >
                  {service.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}