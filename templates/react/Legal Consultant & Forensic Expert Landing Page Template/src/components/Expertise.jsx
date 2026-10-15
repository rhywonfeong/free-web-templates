import React from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const capabilities = [
  {
    icon: 'lucide:layers',
    title: 'Roofing System Evaluation',
    text: 'Comprehensive assessment of commercial and residential roof assemblies to identify latent defects, installation errors, and premature material degradation.',
  },
  {
    icon: 'lucide:droplets',
    title: 'Waterproofing & Water Intrusion',
    text: 'Systematic diagnosis of envelope breaches, moisture migration paths, and below-grade waterproofing failures using destructive and non-destructive protocols.',
  },
  {
    icon: 'lucide:box',
    title: 'Building Envelope Consulting',
    text: 'Technical analysis of fenestration, weather-resistive barriers (WRB), and critical transition detailing across dissimilar materials.',
  },
  {
    icon: 'lucide:search',
    title: 'Construction Defect Analysis',
    text: 'Methodical auditing of workmanship against applicable building codes, approved plans, and manufacturer technical specifications.',
  },
  {
    icon: 'lucide:scale',
    title: 'Expert Witness Testimony',
    text: 'Objective, authoritative testimony for deposition and trial, grounded in decades of active field execution and contracting experience.',
  },
  {
    icon: 'lucide:camera',
    title: 'Site Inspections & Documentation',
    text: 'Rigorous field investigations, complete with exhaustive photographic evidence and precise condition mapping for litigation use.',
  },
  {
    icon: 'lucide:calculator',
    title: 'Repair Scope & Cost Analysis',
    text: 'Development of defensible remediation methodologies and accurate cost estimates utilizing localized, current trade pricing.',
  },
  {
    icon: 'lucide:file-text',
    title: 'Expert Report Preparation',
    text: 'Production of highly detailed, Rule 26-compliant technical reports that distill complex building science for the trier of fact.',
  },
  {
    icon: 'lucide:briefcase',
    title: 'Litigation Support',
    text: 'Strategic pre-litigation triage, standard of care evaluation, and continuous technical advisory from discovery through verdict.',
  },
]

function Expertise() {
  const sectionRef = useRevealOnScroll()

  return (
    <section
      id="expertise"
      style={{ backgroundColor: '#FFFFFF' }}
      className="py-24 lg:py-32 border-t border-[rgba(28,35,43,0.05)]"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-[#5E7A96] text-[10px] font-bold uppercase tracking-[0.2em] block mb-6 reveal-on-scroll">
            Practice Areas
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: '#1C232B', lineHeight: 1.1 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight mb-6 reveal-on-scroll"
          >
            Capabilities
          </h2>
          <p style={{ color: '#6B7280', lineHeight: 1.8 }} className="text-lg font-light reveal-on-scroll">
            Berger Forensic Consulting provides focused technical support for attorneys, insurance professionals, HOAs, property managers, and clients involved in construction defect disputes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#F9FAFB',
                border: '1px solid rgba(28,35,43,0.06)',
              }}
              className="p-8 hover:bg-white hover:shadow-xl transition-all duration-500 group reveal-on-scroll"
            >
              <div className="mb-8 flex items-center justify-center w-12 h-12 bg-[#EEF2F5] group-hover:bg-[#5E7A96] transition-colors duration-500 rounded-sm">
                <iconify-icon 
                  icon={item.icon} 
                  width="22" 
                  className="text-[#5E7A96] group-hover:text-white transition-colors duration-500"
                ></iconify-icon>
              </div>
              <h3
                style={{ fontFamily: "'Inter', sans-serif", color: '#1C232B' }}
                className="text-base font-semibold tracking-wide mb-3"
              >
                {item.title}
              </h3>
              <p style={{ color: '#6B7280', lineHeight: 1.7 }} className="text-sm font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise