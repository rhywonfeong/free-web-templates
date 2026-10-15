import { motion } from 'framer-motion'
import { useRef } from 'react'

const capabilities = [
  {
    title: "Precision CNC Machining",
    desc: "Multi-axis milling and turning operations capable of holding micron-level tolerances for critical automotive and aerospace components.",
    icon: "solar:cpu-bolt-linear",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
  },
  {
    title: "Metallurgical Welding",
    desc: "TIG/MIG and localized orbital welding. Structural reinforcement of chassis and exhaust geometries with high-tensile alloys.",
    icon: "solar:flame-linear",
    img: "https://images.unsplash.com/photo-1581092113554-18458760fa0f?w=800&q=80"
  },
  {
    title: "Custom Fabrication",
    desc: "From raw billet to finished assembly. We prototype and manufacture bespoke brackets, manifolds, and suspension architectures.",
    icon: "solar:ruler-pen-linear",
    img: "https://images.unsplash.com/photo-1537726359516-7eb8a2e57088?w=800&q=80"
  },
  {
    title: "Metrology & QC",
    desc: "Non-destructive testing and CMM laser scanning to verify structural integrity and blueprint exactness before delivery.",
    icon: "solar:scanner-linear",
    img: "https://images.unsplash.com/photo-1580983554868-23215276cd8a?w=800&q=80"
  }
]

export default function Engineering() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="min-h-screen pt-32 pb-24 flex flex-col"
    >
      {/* Page Header */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div variants={itemVariants} className="max-w-3xl">
          <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase mb-4 block">The Facility</span>
          <h1 className="font-sans font-bold tracking-tighter text-5xl sm:text-7xl uppercase mb-8 leading-none">
            Machinery & <br />
            <span className="text-[#848884]">Processes</span>
          </h1>
          <p className="font-mono text-[#848884] leading-relaxed max-w-xl">
            A deep dive into our manufacturing methodologies. At BSP Engineering Works, we merge traditional metallurgy with computational accuracy to forge components that withstand extreme physical limits.
          </p>
        </motion.div>
      </div>

      {/* Capabilities Grid */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group relative h-[400px] overflow-hidden rounded-sm glass-panel border border-[#1a1a1a] hover:border-[#FF4500]/50 transition-colors duration-500"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-luminosity grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${cap.img})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-auto p-3 bg-black/50 w-fit rounded border border-[#1a1a1a] backdrop-blur-sm">
                  <iconify-icon icon={cap.icon} width="24" height="24" className="text-[#FF4500]"></iconify-icon>
                </div>
                <h3 className="font-sans font-bold tracking-tighter text-2xl uppercase mb-3 text-white">
                  {cap.title}
                </h3>
                <p className="font-mono text-xs text-[#848884] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Specifications Table Section */}
      <motion.div variants={itemVariants} className="container mx-auto px-6">
        <div className="border-t border-[#1a1a1a] pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-sans font-bold tracking-tighter text-3xl uppercase mb-4">Technical Data</h2>
              <p className="font-mono text-xs text-[#848884] leading-relaxed">
                Our infrastructure is rated for heavy industrial output while maintaining microscopic accuracy. Reference our operational specs for B2B contract considerations.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="flex flex-col border-b border-[#1a1a1a]">
                {[
                  { label: "Floor Space", value: "12,500 Sq. Ft. Facility" },
                  { label: "Machining Tolerance", value: "±0.005mm (ISO 2768-fH)" },
                  { label: "Alloy Handling", value: "Aluminum, Titanium, Carbon Steel, Chromoly" },
                  { label: "Production Volume", value: "Single Prototype to 10k+ Units/Mo." }
                ].map((spec, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between py-4 border-t border-[#1a1a1a] hover:bg-white/5 transition-colors px-4 -mx-4 rounded-sm">
                    <span className="font-mono text-sm text-[#848884] uppercase tracking-widest">{spec.label}</span>
                    <span className="font-mono text-sm text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}