import React, { useEffect, useRef } from 'react'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const revealEls = el.querySelectorAll('.reveal-on-scroll')
    revealEls.forEach((revEl, i) => {
      setTimeout(() => {
        revEl.classList.add('revealed')
      }, 200 + i * 150)
    })
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section style={{ backgroundColor: '#1C232B', overflow: 'hidden' }} className="relative" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center min-h-[90vh] lg:min-h-0 py-20 lg:py-0">
          <div className="lg:col-span-6 lg:py-32 xl:py-40 pr-0 lg:pr-12">
            <div className="flex items-center gap-4 mb-8 reveal-on-scroll">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#5E7A96' }}></div>
              <span
                style={{ color: '#9FB3C8', fontFamily: "'Inter', sans-serif", letterSpacing: '0.15em' }}
                className="text-xs font-semibold uppercase"
              >
                Expert Witness & Consultant
              </span>
            </div>

            <h1
              style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF', lineHeight: 1.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight mb-6 reveal-on-scroll"
            >
              Forensic Analysis for Complex Roofing & Waterproofing Litigation
            </h1>

            <p
              style={{ color: '#9FB3C8', lineHeight: 1.75 }}
              className="text-base max-w-lg mb-10 font-light reveal-on-scroll"
            >
              Specialized forensic analysis for building envelope failures and construction defect litigation. Delivering objective, field-verified opinions based on 25+ years of active commercial contracting experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16 reveal-on-scroll">
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                style={{ backgroundColor: '#5E7A96', color: '#FFFFFF' }}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium px-8 py-3.5 hover:bg-[#9FB3C8] hover:text-[#1C232B] transition-colors"
              >
                Request Consultation
              </a>
              <a
                href="tel:7604978699"
                style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#FFFFFF' }}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium px-8 py-3.5 hover:border-[#5E7A96] transition-colors"
              >
                760-497-8699
              </a>
            </div>

            <div
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}
              className="flex gap-12 reveal-on-scroll"
            >
              <div>
                <span
                  style={{ color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}
                  className="text-xl font-light"
                >
                  25+
                </span>
                <p style={{ color: '#9FB3C8' }} className="text-xs uppercase tracking-widest mt-1">
                  Years Execution
                </p>
              </div>
              <div>
                <span
                  style={{ color: '#FFFFFF', fontFamily: "'Inter', sans-serif" }}
                  className="text-xl font-light"
                >
                  SME
                </span>
                <p style={{ color: '#9FB3C8' }} className="text-xs uppercase tracking-widest mt-1">
                  CSLB Designated
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-full hidden lg:block">
            <div className="absolute inset-0 right-[-50vw] bg-[#1C232B]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C232B] via-[#1C232B]/80 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale opacity-40 mix-blend-screen"
                alt="Architecture abstract"
              />
            </div>
            <div className="absolute bottom-12 left-0 z-30 bg-white p-8 shadow-2xl border-l-4 border-[#5E7A96] max-w-xs transform -translate-x-12 hidden xl:block"
              style={{ animation: 'fadeSlideIn 1s ease-out 0.5s both' }}
            >
              <div className="space-y-4">
                <div>
                  <p className="text-[#1C232B] font-semibold text-sm uppercase tracking-wider mb-1">
                    Active Operator Authority
                  </p>
                  <p className="text-[#6B7280] text-xs leading-relaxed">
                    Direct perspective on commercial roof assemblies, below-grade waterproofing, and envelope integration.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[#1C232B] font-semibold text-sm uppercase tracking-wider mb-1">
                    State Agency SME
                  </p>
                  <p className="text-[#6B7280] text-xs leading-relaxed">
                    Appointed Subject Matter Expert by the CSLB. Authoritative testimony grounded in strict code compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-2rem) translateY(0); }
          to { opacity: 1; transform: translateX(-3rem) translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default Hero