import { useEffect, useRef, useMemo } from 'react'
import MaskedText from './MaskedText'

export default function HeroSection() {
  const containerRef = useRef(null)
  const numBars = 23
  const centerIndex = Math.floor(numBars / 2)

  const barsData = useMemo(() => {
    return Array.from({ length: numBars }).map((_, i) => {
      const dist = Math.abs(i - centerIndex)
      const normDist = dist / centerIndex
      const baseHeight = 22 + Math.pow(normDist, 1.4) * 68
      return { index: i, baseHeight }
    })
  }, [centerIndex, numBars])

  useEffect(() => {
    if (!containerRef.current) return

    const barsElements = Array.from(containerRef.current.children)
    let animationFrameId
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const time = (now - startTime) * 0.001

      barsElements.forEach((el, i) => {
        const data = barsData[i]
        if (!data) return

        const wave = Math.sin(time * 1.2 + (data.index * 0.25)) * 2
        el.style.height = `${data.baseHeight + wave}%`

        const pulse = Math.sin(time * 1.5 + (data.index * 0.15)) * 0.05
        el.style.opacity = (0.9 + pulse).toFixed(2)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [barsData])

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      <div 
        ref={containerRef}
        className="flex md:px-8 z-0 pr-2 pb-0 pl-2 absolute top-0 right-0 bottom-0 left-0 gap-x-0 gap-y-0 items-end justify-center"
        style={{
          maskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)'
        }}
      >
        {barsData.map((bar) => (
          <div 
            key={bar.index}
            className="flex-1 h-full w-full step-bar"
            style={{ height: `${bar.baseHeight}%`, opacity: 0.9 }}
          />
        ))}
      </div>

      <main className="flex-1 flex flex-col z-10 text-center mt-20 pr-4 pl-4 relative items-center justify-center">
        <MaskedText 
          as="h1"
          text="neural 23"
          className="md:text-5xl lg:text-8xl text-4xl font-light text-white tracking-tighter font-geist max-w-4xl mb-6 drop-shadow-2xl justify-center"
          delay={0.2}
        />

        <p className="reveal-element text-sm md:text-lg font-extralight text-gray-300 max-w-[580px] leading-relaxed mb-10 drop-shadow-md font-geist">
          Architect, automate, and optimize your workflows using an intelligent engine that assimilates your inputs and perpetually improves.
        </p>

        <div className="stagger-container flex flex-col sm:flex-row items-center gap-5">
          <button className="stagger-item w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.45)] hover:scale-[1.02] transition-all duration-300 font-geist">
            Launch Platform
          </button>
          <button className="stagger-item w-full sm:w-auto px-8 py-3.5 bg-black/40 backdrop-blur-md border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-geist">
            Explore Architecture
          </button>
        </div>
      </main>
      
      <div className="reveal-element absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50">
        <iconify-icon icon="solar:mouse-circle-linear" width="24" height="24"></iconify-icon>
      </div>
    </section>
  )
}