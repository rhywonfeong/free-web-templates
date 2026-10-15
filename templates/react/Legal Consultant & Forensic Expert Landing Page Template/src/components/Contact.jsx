import React, { useState } from 'react'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function Contact() {
  const sectionRef = useRevealOnScroll()
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    phone: '',
    email: '',
    caseSummary: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" style={{ backgroundColor: '#FFFFFF' }} className="py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div style={{ width: '24px', height: '1px', backgroundColor: '#5E7A96' }}></div>
              <span style={{ color: '#5E7A96' }} className="text-xs font-semibold uppercase tracking-widest">
                Retain an Expert
              </span>
            </div>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", color: '#1C232B', lineHeight: 1.1 }}
              className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 reveal-on-scroll"
            >
              Your case deserves an expert who's been on the roof.
            </h2>
            <p style={{ color: '#6B7280', lineHeight: 1.8 }} className="text-base font-light mb-12 reveal-on-scroll">
              If your construction defect case involves roofing, waterproofing,
              or building envelope issues, I can help determine what failed, why
              it failed, and what it costs to fix.
            </p>

            <div className="space-y-8">
              <div>
                <p style={{ color: '#6B7280' }} className="text-xs uppercase tracking-widest mb-2">
                  Phone
                </p>
                <a
                  href="tel:7604978699"
                  style={{ color: '#1C232B' }}
                  className="text-xl font-light hover:text-[#5E7A96] transition-colors"
                >
                  760-497-8699
                </a>
              </div>
              <div>
                <p style={{ color: '#6B7280' }} className="text-xs uppercase tracking-widest mb-2">
                  Email
                </p>
                <a
                  href="mailto:dsbjcc@gmail.com"
                  style={{ color: '#1C232B' }}
                  className="text-xl font-light hover:text-[#5E7A96] transition-colors"
                >
                  dsbjcc@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div
              style={{
                backgroundColor: '#F5F7F8',
                border: '1px solid rgba(28,35,43,0.05)',
              }}
              className="p-8 lg:p-12 shadow-xl border-t-4 border-[#1C232B]"
            >
              <h3
                style={{ fontFamily: "'Playfair Display', serif", color: '#1C232B' }}
                className="text-2xl font-medium tracking-tight mb-2"
              >
                Schedule a Consultation
              </h3>
              <p style={{ color: '#6B7280' }} className="text-sm font-light mb-8">
                Confidential. Typically respond within one business day.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <p style={{ color: '#1C232B' }} className="text-lg font-medium mb-2">
                    Thank you for your inquiry.
                  </p>
                  <p style={{ color: '#6B7280' }} className="text-sm font-light">
                    We will respond within one business day.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      style={{ color: '#1C232B' }}
                      className="text-xs font-semibold uppercase tracking-widest block mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(28,35,43,0.1)',
                        color: '#1C232B',
                      }}
                      className="w-full px-5 py-4 text-sm focus:outline-none focus:border-[#5E7A96] transition-all rounded-none"
                      placeholder="Attorney name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      style={{ color: '#1C232B' }}
                      className="text-xs font-semibold uppercase tracking-widest block mb-3"
                    >
                      Firm
                    </label>
                    <input
                      type="text"
                      name="firm"
                      value={formData.firm}
                      onChange={handleChange}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(28,35,43,0.1)',
                        color: '#1C232B',
                      }}
                      className="w-full px-5 py-4 text-sm focus:outline-none focus:border-[#5E7A96] transition-all rounded-none"
                      placeholder="Law firm name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label
                        style={{ color: '#1C232B' }}
                        className="text-xs font-semibold uppercase tracking-widest block mb-3"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(28,35,43,0.1)',
                          color: '#1C232B',
                        }}
                        className="w-full px-5 py-4 text-sm focus:outline-none focus:border-[#5E7A96] transition-all rounded-none"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <label
                        style={{ color: '#1C232B' }}
                        className="text-xs font-semibold uppercase tracking-widest block mb-3"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(28,35,43,0.1)',
                          color: '#1C232B',
                        }}
                        className="w-full px-5 py-4 text-sm focus:outline-none focus:border-[#5E7A96] transition-all rounded-none"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      style={{ color: '#1C232B' }}
                      className="text-xs font-semibold uppercase tracking-widest block mb-3"
                    >
                      Case Summary
                    </label>
                    <textarea
                      rows="4"
                      name="caseSummary"
                      value={formData.caseSummary}
                      onChange={handleChange}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(28,35,43,0.1)',
                        color: '#1C232B',
                        resize: 'none',
                      }}
                      className="w-full px-5 py-4 text-sm focus:outline-none focus:border-[#5E7A96] transition-all rounded-none"
                      placeholder="Brief description of the construction defect matter..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    style={{ backgroundColor: '#5E7A96', color: '#FFFFFF' }}
                    className="w-full py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#1C232B] transition-colors rounded-none mt-4"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact