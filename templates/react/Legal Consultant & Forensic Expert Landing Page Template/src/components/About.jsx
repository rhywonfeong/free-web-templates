import React from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const practiceCards = [
  {
    title: 'Technical Scope',
    text: 'TPO/PVC assemblies, BUR systems, below-grade waterproofing, envelope integration failures, and destructive testing (DT) protocols.',
  },
  {
    title: 'Litigation Support',
    text: 'Pre-litigation strategy, standard of care analysis, code compliance auditing, defensible expert reports, and authoritative trial testimony.',
  },
  {
    title: 'Professional Authority',
    text: 'Active commercial contractor, former VP of Royal Roof Company, and officially designated C-39 Subject Matter Expert (SME) for the CSLB.',
  },
]

function About() {
  const sectionRef = useRevealOnScroll()

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section style={{ backgroundColor: '#F5F7F8' }} className="py-24 lg:py-32 relative z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <div className="inline-block px-3 py-1 bg-[#5E7A96]/10 text-[#5E7A96] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Authority Profile
              </div>
              <h2
                style={{ fontFamily: "'Playfair Display', serif", color: '#1C232B', lineHeight: 1.1 }}
                className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 reveal-on-scroll"
              >
                Douglas Berger | Roofing & Building Envelope Expert Witness
              </h2>
              <p style={{ color: '#2D3947', lineHeight: 1.8 }} className="text-lg font-light reveal-on-scroll">
                Douglas Berger applies over 25 years of active commercial roofing and waterproofing experience to construction defect litigation. As the operating President of HNS Services, his forensic analysis is anchored in continuous field execution, real-world failure analysis, and current cost-to-repair data, rather than purely academic theory.
              </p>
            </div>
            <div className="space-y-4">
              {practiceCards.map((card, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(28,35,43,0.05)',
                    borderLeft: '3px solid #5E7A96',
                  }}
                  className="p-6 lg:p-8 hover:shadow-md transition-shadow reveal-on-scroll"
                >
                  <h3
                    style={{ fontFamily: "'Inter', sans-serif", color: '#1C232B' }}
                    className="text-sm font-semibold tracking-wide uppercase mb-3"
                  >
                    {card.title}
                  </h3>
                  <p style={{ color: '#6B7280', lineHeight: 1.6 }} className="text-sm font-light">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                style={{ backgroundColor: '#5E7A96', color: '#FFFFFF' }}
                className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3.5 hover:bg-[#1C232B] transition-colors"
              >
                Discuss a Matter
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative lg:sticky lg:top-32">
            <div
              className="absolute -inset-4 lg:-inset-6 bg-[#EEF2F5] transform translate-x-3 translate-y-4 lg:translate-x-6 lg:translate-y-6 z-0"
              style={{ border: '1px solid rgba(28,35,43,0.05)' }}
            ></div>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(28,35,43,0.08)',
              }}
              className="relative z-10 p-8 lg:p-10 shadow-xl"
            >
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                  alt="Douglas Berger"
                  className="w-56 h-56 lg:w-64 lg:h-64 rounded-full object-cover object-top grayscale mb-8 block mx-auto shadow-lg transition-transform hover:scale-105 duration-500"
                  style={{ border: '1px solid rgba(28,35,43,0.1)' }}
                />
                <h3
                  style={{ fontFamily: "'Playfair Display', serif", color: '#1C232B' }}
                  className="text-3xl font-medium tracking-tight mb-2 text-center"
                >
                  Douglas Berger
                </h3>
                <p
                  style={{ color: '#5E7A96' }}
                  className="text-xs font-semibold uppercase tracking-widest mb-5 text-center"
                >
                  Defect Consultant & CSLB SME
                </p>
                <p style={{ color: '#6B7280', lineHeight: 1.7 }} className="text-sm font-light">
                  Providing plaintiff and defense counsel with objective, defensible opinions for construction defect litigation involving complex envelope failures.
                </p>
              </div>
              <div className="space-y-5 pt-8" style={{ borderTop: '1px solid rgba(28,35,43,0.1)' }}>
                <div className="flex items-center gap-4">
                  <iconify-icon icon="lucide:briefcase" style={{ color: '#5E7A96' }} width="20"></iconify-icon>
                  <span style={{ color: '#1C232B' }} className="text-sm font-medium">
                    25+ Years Field Authority
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <iconify-icon icon="lucide:award" style={{ color: '#5E7A96' }} width="20"></iconify-icon>
                  <span style={{ color: '#1C232B' }} className="text-sm font-medium">
                    Subject Matter Expert, CSLB
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <iconify-icon icon="lucide:scale" style={{ color: '#5E7A96' }} width="20"></iconify-icon>
                  <span style={{ color: '#1C232B' }} className="text-sm font-medium">
                    Plaintiff & Defense Counsel
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <iconify-icon icon="lucide:phone" style={{ color: '#5E7A96' }} width="20"></iconify-icon>
                  <span style={{ color: '#1C232B' }} className="text-sm font-medium">
                    760-497-8699
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About