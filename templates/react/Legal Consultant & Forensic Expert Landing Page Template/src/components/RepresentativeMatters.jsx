import React, { useRef, useCallback } from 'react'

const matters = [
  {
    tag: 'Roofing Assemblies',
    title: 'Commercial Roof Failures',
    text: 'Evaluation of premature membrane degradation, wind uplift failures, and improper attachment protocols in single-ply and BUR systems.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
  },
  {
    tag: 'Water Intrusion',
    title: 'Complex Moisture Intrusion',
    text: 'Tracing difficult-to-diagnose water intrusion pathways through destructive testing and AAMA/ASTM testing protocols.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop',
  },
  {
    tag: 'Waterproofing',
    title: 'Below-Grade Waterproofing',
    text: 'Analysis of hydrostatic pressure failures, blind-side waterproofing defects, and improper drainage mat installations.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
  },
  {
    tag: 'Sheet Metal',
    title: 'Transition Integration',
    text: 'Evaluation of flashing failures at critical envelope junctions, expansion joints, and parapet wall assemblies.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
  },
  {
    tag: 'Class Action',
    title: 'Multi-Family Defect Claims',
    text: 'Large-scale inspections and statistical extrapolation of workmanship defects across multi-unit residential developments.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
  },
]

function RepresentativeMatters() {
  const railRef = useRef(null)

  const scrollRail = useCallback((direction) => {
    if (!railRef.current) return
    const firstChild = railRef.current.firstElementChild
    const itemWidth = firstChild ? firstChild.offsetWidth + 24 : 350
    railRef.current.scrollBy({ left: direction * itemWidth, behavior: 'smooth' })
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="representative-matters" style={{ backgroundColor: '#1C232B', overflow: 'hidden' }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#5E7A96] text-[10px] font-bold uppercase tracking-[0.2em] block mb-6">
              Evaluation Scope
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF', lineHeight: 1.1 }}
              className="text-3xl lg:text-4xl font-medium tracking-tight mb-6"
            >
              Defect Scenarios Evaluated
            </h2>
            <p style={{ color: '#9FB3C8', lineHeight: 1.8 }} className="text-base font-light">
              High-stakes defect litigation requires nuanced technical understanding. Representative matters include comprehensive forensic evaluations across commercial and multi-family residential properties.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => scrollRail(-1)}
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF' }}
              className="w-12 h-12 flex items-center justify-center hover:bg-[#5E7A96] hover:border-[#5E7A96] transition-colors bg-transparent"
            >
              <iconify-icon icon="lucide:chevron-left" width="20"></iconify-icon>
            </button>
            <button
              onClick={() => scrollRail(1)}
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF' }}
              className="w-12 h-12 flex items-center justify-center hover:bg-[#5E7A96] hover:border-[#5E7A96] transition-colors bg-transparent"
            >
              <iconify-icon icon="lucide:chevron-right" width="20"></iconify-icon>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-8 max-w-[100vw] overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div
            ref={railRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 hide-scrollbar"
          >
            {matters.map((matter, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                className="snap-start shrink-0 w-[85vw] sm:w-[50vw] lg:w-[350px] group flex flex-col transition-colors hover:bg-[rgba(255,255,255,0.04)]"
              >
                <div className="h-56 overflow-hidden relative border-b border-[rgba(255,255,255,0.08)]">
                  <img
                    src={matter.image}
                    alt={matter.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale opacity-60 mix-blend-luminosity"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      style={{
                        backgroundColor: '#1C232B',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#9FB3C8',
                      }}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 backdrop-blur-sm"
                    >
                      {matter.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF' }}
                    className="text-xl font-medium tracking-tight mb-4"
                  >
                    {matter.title}
                  </h3>
                  <p style={{ color: '#9FB3C8', lineHeight: 1.7 }} className="text-sm font-light mb-8 flex-grow">
                    {matter.text}
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => handleClick(e, '#contact')}
                    style={{ color: '#FFFFFF' }}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-[#5E7A96] transition-colors w-fit pb-1 border-b border-transparent hover:border-[#5E7A96]"
                  >
                    Discuss a Matter
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RepresentativeMatters