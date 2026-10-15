import React from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const services = [
  {
    num: '01',
    title: 'Pre-Litigation Strategy & Triage',
    text: 'Early-stage review of defect allegations, plans, and developer documentation to isolate technical exposure and case viability.',
  },
  {
    num: '02',
    title: 'Forensic Site Investigation',
    text: 'Execution of site inspections, destructive testing (DT) coordination, and comprehensive evidence preservation.',
  },
  {
    num: '03',
    title: 'Defensible Expert Reporting',
    text: 'Production of highly detailed, objective technical reports outlining standard of care deviations and repair methodology.',
  },
  {
    num: '04',
    title: 'Deposition & Trial Testimony',
    text: 'Authoritative defense of technical findings under cross-examination, leveraging decades of actual project accountability.',
  },
]

function Services() {
  const sectionRef = useRevealOnScroll()

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="services" style={{ backgroundColor: '#F5F7F8' }} className="py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-[#5E7A96] text-[10px] font-bold uppercase tracking-[0.2em] block mb-6">
              Engagement Scope
            </span>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", color: '#1C232B' }}
              className="text-4xl font-medium tracking-tight mb-6 reveal-on-scroll"
            >
              Structured for Litigation Support.
            </h2>
            <p className="text-[#6B7280] font-light leading-relaxed mb-8 reveal-on-scroll">
              Methodical, standards-driven support from initial claim evaluation through trial verdict.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="text-sm font-semibold text-[#1C232B] border-b-2 border-[#5E7A96] pb-1 hover:text-[#5E7A96] transition-colors"
            >
              View Fee Schedule →
            </a>
          </div>
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
              {services.map((service, i) => (
                <div key={i} className="group reveal-on-scroll">
                  <span className="block text-4xl font-light text-[#9FB3C8]/40 mb-4 group-hover:text-[#5E7A96] transition-colors">
                    {service.num}
                  </span>
                  <h3 className="text-[#1C232B] font-semibold text-base mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm font-light leading-relaxed">
                    {service.text}
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

export default Services