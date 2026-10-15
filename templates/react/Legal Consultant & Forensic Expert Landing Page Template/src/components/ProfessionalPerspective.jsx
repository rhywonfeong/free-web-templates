import React, { useState, useCallback } from 'react'

const slides = [
  {
    quote: 'My analysis is strictly objective: what was built, what the code required, and what the manufacturer specified.',
    author: 'Douglas Berger',
    role: 'Construction Defect Consultant & Expert Witness',
    tag: 'Empirical Evidence',
  },
  {
    quote: 'The most defensible expert opinions come from professionals who still carry the liability of active construction.',
    author: 'Douglas Berger',
    role: 'President, HNS Services',
    tag: 'Contractor Accountability',
  },
  {
    quote: 'I do not deal in hypotheticals. I evaluate failures based on a quarter-century of actual commercial envelope installation.',
    author: 'Douglas Berger',
    role: 'CSLB Subject Matter Expert',
    tag: 'Field Authority',
  },
]

function ProfessionalPerspective() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const changeSlide = useCallback((newIndex) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setAnimating(false)
    }, 400)
  }, [animating])

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length
    changeSlide(newIndex)
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % slides.length
    changeSlide(newIndex)
  }

  const slide = slides[currentIndex]

  return (
    <section
      id="professional-perspective"
      style={{ backgroundColor: '#1C232B', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      className="py-24 lg:py-32 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Vertical Label */}
          <div className="hidden lg:flex flex-col items-center shrink-0 w-8">
            <div style={{ width: '1px', height: '80px', backgroundColor: 'rgba(255,255,255,0.1)' }} className="mb-8"></div>
            <div className="relative h-48 w-full flex items-center justify-center">
              <span
                style={{ color: '#5E7A96', transform: 'rotate(-90deg)', whiteSpace: 'nowrap' }}
                className="absolute text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                Professional Perspective
              </span>
            </div>
            <div style={{ width: '1px', height: '80px', backgroundColor: 'rgba(255,255,255,0.1)' }} className="mt-8"></div>
          </div>

          {/* Mobile Label */}
          <div className="lg:hidden mb-4">
            <span style={{ color: '#5E7A96' }} className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Professional Perspective
            </span>
          </div>

          {/* Main Content */}
          <div className="flex-grow relative">
            <h2
              style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF', lineHeight: 1.1 }}
              className="text-3xl lg:text-4xl font-medium tracking-tight mb-16"
            >
              Why Douglas Berger Is Retained
            </h2>

            <div className="relative">
              {/* Oversized Number */}
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: 'rgba(255,255,255,0.03)',
                  position: 'absolute',
                  top: '-60px',
                  right: 0,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: animating ? 0 : 1,
                  transform: animating ? 'translateY(-10px)' : 'translateY(0)',
                }}
                className="text-[140px] md:text-[200px] lg:text-[240px]"
              >
                {String(currentIndex + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 pt-4">
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#FFFFFF',
                    lineHeight: 1.5,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: animating ? 0 : 1,
                    transform: animating ? 'translateY(10px)' : 'translateY(0)',
                  }}
                  className="text-2xl sm:text-3xl lg:text-4xl max-w-4xl mb-12 lg:mb-16 min-h-[140px]"
                >
                  "{slide.quote}"
                </p>

                <div
                  className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-[rgba(255,255,255,0.1)] pt-8 lg:pt-10"
                >
                  <div
                    style={{
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      opacity: animating ? 0 : 1,
                    }}
                  >
                    <p
                      style={{ color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}
                      className="text-base font-semibold tracking-wide mb-1"
                    >
                      {slide.author}
                    </p>
                    <p style={{ color: '#9FB3C8' }} className="text-sm font-light mb-4">
                      {slide.role}
                    </p>
                    <span
                      style={{ color: '#5E7A96', border: '1px solid rgba(94,122,150,0.3)' }}
                      className="inline-block text-[10px] uppercase tracking-widest px-3 py-1 bg-[rgba(94,122,150,0.05)]"
                    >
                      {slide.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <button
                      onClick={handlePrev}
                      style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF' }}
                      className="w-12 h-12 flex items-center justify-center hover:bg-[#5E7A96] hover:border-[#5E7A96] transition-colors bg-transparent group"
                    >
                      <iconify-icon icon="lucide:arrow-left" width="20" className="group-hover:-translate-x-1 transition-transform"></iconify-icon>
                    </button>
                    <button
                      onClick={handleNext}
                      style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF' }}
                      className="w-12 h-12 flex items-center justify-center hover:bg-[#5E7A96] hover:border-[#5E7A96] transition-colors bg-transparent group"
                    >
                      <iconify-icon icon="lucide:arrow-right" width="20" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalPerspective