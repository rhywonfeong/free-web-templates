import React from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const distinctions = [
  {
    title: 'Active Contractor Accountability',
    text: "Unlike pure consultants, Douglas Berger actively bids, builds, and guarantees commercial roofing projects today.",
  },
  {
    title: 'Designated CSLB C-39 Expert',
    text: 'Retained by the California State Contractors License Board to evaluate workmanship and standard of care for state disciplinary actions.',
  },
  {
    title: 'Empirical Methodologies',
    text: 'Relying on physical evidence and recognized industry parameters (SMACNA, NRCA, ASTM) rather than subjective opinion.',
  },
  {
    title: 'Balanced Representation',
    text: 'A proven track record of objective analysis for both plaintiff and defense counsel, bolstering credibility with the court.',
  },
]

function Distinguished() {
  const sectionRef = useRevealOnScroll()

  return (
    <section style={{ backgroundColor: '#1C232B' }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <h3
              style={{ fontFamily: "'Playfair Display', serif", color: '#FFFFFF', lineHeight: 1.2 }}
              className="text-2xl font-medium tracking-tight reveal-on-scroll"
            >
              A clear strategic advantage in defect litigation.
            </h3>
          </div>
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-10">
              {distinctions.map((item, i) => (
                <div key={i} className="reveal-on-scroll">
                  <div style={{ width: '24px', height: '1px', backgroundColor: '#5E7A96', marginBottom: '1.5rem' }}></div>
                  <h4 style={{ color: '#FFFFFF' }} className="text-sm font-semibold uppercase tracking-wide mb-3">
                    {item.title}
                  </h4>
                  <p style={{ color: '#9FB3C8', lineHeight: 1.7 }} className="text-sm font-light">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Distinguished