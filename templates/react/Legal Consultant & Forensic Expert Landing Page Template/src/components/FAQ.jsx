import React from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const faqs = [
  {
    question: '1. What types of matters does Douglas Berger handle?',
    answer: 'Douglas Berger handles construction defect matters involving roofing failures, waterproofing deficiencies, water intrusion, drainage and flashing failures, building envelope defects, improper installation issues, and repair scope evaluation.',
  },
  {
    question: '2. What services are available?',
    answer: 'Services include case evaluation, site inspections, expert reporting, deposition testimony, and trial testimony.',
  },
  {
    question: '3. Do you perform site inspections?',
    answer: 'Yes. Site inspections can include on-site condition assessment, photographic documentation, evaluation of visible deficiencies, and review of roofing, waterproofing, and building envelope issues.',
  },
  {
    question: '4. Do you provide expert reports and testimony?',
    answer: 'Yes. Services may include written expert opinions, deposition testimony, and trial testimony in support of construction defect litigation.',
  },
  {
    question: '5. Do you work with both plaintiff and defense counsel?',
    answer: 'Yes. Engagements may involve work with either side depending on the matter and scope of review.',
  },
  {
    question: '6. How does an engagement typically begin?',
    answer: 'Most engagements begin with an initial consultation or case evaluation to review the matter and determine next steps.',
  },
]

function FAQ() {
  const sectionRef = useRevealOnScroll()

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="faq"
      style={{ backgroundColor: '#F5F7F8' }}
      className="py-24 lg:py-32 border-b border-[rgba(28,35,43,0.05)]"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#5E7A96] text-[10px] font-bold uppercase tracking-[0.2em] block mb-6">
            Common Questions
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: '#1C232B', lineHeight: 1.1 }}
            className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 reveal-on-scroll"
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#6B7280', lineHeight: 1.8 }} className="text-base font-light max-w-2xl mx-auto reveal-on-scroll">
            Answers to common questions about construction defect consulting,
            inspections, expert reports, and testimony.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white border border-[rgba(28,35,43,0.05)]">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1C232B]">
                <h3
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-sm font-semibold tracking-wide"
                >
                  {faq.question}
                </h3>
                <span className="relative w-5 h-5 shrink-0">
                  <iconify-icon
                    icon="lucide:plus"
                    className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity"
                    width="20"
                  ></iconify-icon>
                  <iconify-icon
                    icon="lucide:minus"
                    className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity"
                    width="20"
                  ></iconify-icon>
                </span>
              </summary>
              <div className="p-6 pt-0">
                <p style={{ color: '#6B7280', lineHeight: 1.7 }} className="text-sm font-light">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center p-10 lg:p-12 bg-white border border-[rgba(28,35,43,0.05)] shadow-sm">
          <h3
            style={{ fontFamily: "'Playfair Display', serif", color: '#1C232B' }}
            className="text-2xl font-medium tracking-tight mb-4"
          >
            Need to discuss a matter?
          </h3>
          <p style={{ color: '#6B7280', lineHeight: 1.7 }} className="text-sm font-light mb-8 max-w-xl mx-auto">
            For construction defect cases involving roofing, waterproofing,
            water intrusion, or building envelope issues, contact Douglas Berger
            to discuss the matter and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              style={{ backgroundColor: '#5E7A96', color: '#FFFFFF' }}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium px-8 py-3.5 hover:bg-[#1C232B] transition-colors"
            >
              Contact Douglas Berger
            </a>
            <a
              href="tel:7604978699"
              style={{ border: '1px solid rgba(28,35,43,0.1)', color: '#1C232B' }}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium px-8 py-3.5 hover:border-[#5E7A96] transition-colors bg-white"
            >
              Call 760-497-8699
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ