import React from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const reasons = [
  {
    num: '01',
    title: 'Active Operator Authority',
    text: "Conclusions derived from ongoing management of complex commercial projects, avoiding the vulnerability of 'professional experts' who no longer actively build.",
  },
  {
    num: '02',
    title: 'Bulletproof Technical Foundation',
    text: 'Every opinion is rigorously mapped to specific CBC provisions, ASTM testing standards, and manufacturer published specifications.',
  },
  {
    num: '03',
    title: 'Translation for the Trier of Fact',
    text: 'The ability to distill complex building science and envelope integration failures into compelling, easily understood narratives for judges and juries.',
  },
  {
    num: '04',
    title: 'Comprehensive Litigation Support',
    text: 'Meticulously documented Rule 26 compliant reports, exhaustive photographic evidence, and composed, unflappable testimony.',
  },
]

function WhyAttorneys() {
  const sectionRef = useRevealOnScroll()

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="why" style={{ backgroundColor: '#FFFFFF' }} className="py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="mb-6">
              <span className="text-[#5E7A96] text-[10px] font-bold uppercase tracking-[0.2em]">
                Litigation Advantage
              </span>
            </div>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", color: '#1C232B', lineHeight: 1.1 }}
              className="text-3xl lg:text-4xl font-medium tracking-tight mb-8 reveal-on-scroll"
            >
              Why top defect litigators retain Douglas Berger.
            </h2>
            <p style={{ color: '#6B7280', lineHeight: 1.8 }} className="text-base font-light mb-10 reveal-on-scroll">
              In construction defect litigation, an expert's credibility rests on their operational authority. Douglas Berger provides counsel with an active contractor's perspective that withstands rigorous cross-examination.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              style={{ backgroundColor: '#5E7A96', color: '#FFFFFF' }}
              className="inline-flex items-center gap-2 text-sm font-medium px-8 py-3 hover:bg-[#1C232B] transition-colors"
            >
              Discuss Your Case
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-0">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: '1px solid rgba(28,35,43,0.1)',
                    ...(i === reasons.length - 1 ? { borderBottom: '1px solid rgba(28,35,43,0.1)' } : {}),
                  }}
                  className="py-10 reveal-on-scroll"
                >
                  <div className="flex gap-8">
                    <div
                      style={{ color: '#9FB3C8', fontFamily: "'Inter', sans-serif" }}
                      className="text-xl font-light"
                    >
                      {reason.num}
                    </div>
                    <div>
                      <h3
                        style={{ color: '#1C232B', fontFamily: "'Inter', sans-serif" }}
                        className="text-lg font-medium mb-3"
                      >
                        {reason.title}
                      </h3>
                      <p style={{ color: '#6B7280', lineHeight: 1.7 }} className="text-sm font-light">
                        {reason.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAttorneys