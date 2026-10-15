import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] flex flex-col justify-between pt-16 md:pt-24 pb-12 px-6 lg:px-[6%] overflow-hidden">
      {/* Top eyebrow */}
      <div className="animate-reveal flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Now accepting Q2 engagements</span>
      </div>

      {/* Main stacked headline — short words only, fits cleanly without wrapping */}
      <div className="flex-1 flex items-center py-12 md:py-16">
        <h1 className="font-semibold tracking-tighter leading-[0.9] text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] xl:text-[8.5vw] 2xl:text-[8vw]">
          <span className="block text-white animate-reveal">By the project.</span>
          <span className="block text-white/30 animate-reveal delay-100">By the month.</span>
          <span className="block text-white animate-reveal delay-200">Behind your brand.</span>
        </h1>
      </div>

      {/* Bottom supporting content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        <div ref={addToRefs} className="scroll-reveal lg:col-span-5 xl:col-span-4">
          <p className="text-base md:text-lg text-white/60 leading-relaxed">
            <span className="text-white">SignalWorks is your AI department,</span> sized to how you want to work. Delivering custom AI engineering for small businesses, founder-led brands, and agencies. We build the workflows you wish your AI tools did on their own.
          </p>
        </div>

        <div ref={addToRefs} className="scroll-reveal delay-200 lg:col-span-3 lg:col-start-9 xl:col-span-3 xl:col-start-10 flex lg:justify-end">
          <a
            href="#book"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider bg-white text-black py-4 px-6 rounded-sm hover:bg-purple-50 transition-colors"
          >
            Start a project
            <iconify-icon icon="solar:arrow-right-linear" class="text-base group-hover:translate-x-1 transition-transform"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero