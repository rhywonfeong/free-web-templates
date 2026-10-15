import { FormEvent, useState } from 'react'

const projectTypes = [
  'New Development',
  'Existing Building',
  'Portfolio Assessment',
  'Design Consultation',
  'Certification Support',
  'Other / Not Sure',
]

const proofItems = [
  {
    title: 'Response within one business day',
    text: 'Every inquiry is read by a principal advisor, not routed to a queue.',
  },
  {
    title: 'Confidential by default',
    text: 'Drawings, pro formas, and test data are handled under NDA on request.',
  },
  {
    title: 'No-obligation scoping',
    text: 'The first conversation and high-level feasibility read are always complimentary.',
  },
]

export default function Contact() {
  const [projectType, setProjectType] = useState<string>(projectTypes[0])
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="section page-head ruled">
        <div className="joint tl" /><div className="joint tr" />
        <p className="eyebrow">Contact</p>
        <h1 className="display-sm">
          Tell us about the building. <em>We&rsquo;ll map the path to certified.</em>
        </h1>
        <p className="lede">
          Whether you are sketching a new community or repositioning an existing asset, share a
          few details below and we will come back with a clear next step — typically within one
          business day.
        </p>
        <div className="hero-proof">
          <span className="badge badge-accent">Accredited wellness building advisors</span>
          <span className="badge">Multi-unit residential specialists</span>
          <span className="badge">North America · Remote worldwide</span>
        </div>
      </section>

      <section className="section ruled contact-grid">
        <div className="joint tl" /><div className="joint tr" />

        {/* Form panel */}
        <div className="card-shell contact-form-shell">
          <div className="card contact-card">
            {submitted ? (
              <div className="form-success" role="status">
                <span className="icon-circle" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12.5 9.5 18 20 6.5" />
                  </svg>
                </span>
                <h3>Thank you — we have your details.</h3>
                <p>
                  A principal advisor will review your project and respond within one business
                  day. If the matter is urgent, call{' '}
                  <a href="tel:+14165550188">+1 (416) 555-0188</a>.
                </p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="form-title">Start a consultation</h3>
                <p className="form-sub">All fields marked required help us respond precisely the first time.</p>

                <fieldset className="chip-fieldset">
                  <legend className="field-label">Project type</legend>
                  <div className="chip-row" role="group" aria-label="Project type">
                    {projectTypes.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={`chip ${projectType === t ? 'is-selected' : ''}`}
                        aria-pressed={projectType === t}
                        onClick={() => setProjectType(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="field-row">
                  <label className="field">
                    <span className="field-label">Full name *</span>
                    <input type="text" name="name" placeholder="Jordan Meyer" required autoComplete="name" />
                  </label>
                  <label className="field">
                    <span className="field-label">Work email *</span>
                    <input type="email" name="email" placeholder="jordan@developer.com" required autoComplete="email" />
                  </label>
                </div>

                <div className="field-row">
                  <label className="field">
                    <span className="field-label">Company / organization</span>
                    <input type="text" name="company" placeholder="Meridian Development Group" autoComplete="organization" />
                  </label>
                  <label className="field">
                    <span className="field-label">Phone</span>
                    <input type="tel" name="phone" placeholder="+1 (555) 000-0000" autoComplete="tel" />
                  </label>
                </div>

                <div className="field-row">
                  <label className="field">
                    <span className="field-label">Project location</span>
                    <input type="text" name="location" placeholder="City, State / Province" />
                  </label>
                  <label className="field">
                    <span className="field-label">Approximate unit count</span>
                    <select name="units" defaultValue="">
                      <option value="" disabled>Select a range</option>
                      <option>Under 50 units</option>
                      <option>50 – 150 units</option>
                      <option>150 – 300 units</option>
                      <option>300+ units</option>
                      <option>Portfolio / multiple assets</option>
                    </select>
                  </label>
                </div>

                <label className="field">
                  <span className="field-label">Tell us about the project *</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Stage, goals, timeline, and whether certified wellness status is already a target…"
                  />
                </label>

                <div className="form-footer">
                  <button type="submit" className="btn btn-primary btn-lg">Send inquiry</button>
                  <p className="form-note">
                    By submitting, you agree to be contacted about your inquiry. We never share
                    your details.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Support column */}
        <aside className="contact-aside">
          <div className="card-shell">
            <div className="card">
              <h3>Direct lines</h3>
              <div className="contact-lines">
                <a href="mailto:hello@aevora-advisory.com">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  hello@aevora-advisory.com
                </a>
                <a href="tel:+14165550188">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                  </svg>
                  +1 (416) 555-0188
                </a>
                <span>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21c4-3.5 7-7.2 7-11a7 7 0 0 0-14 0c0 3.8 3 7.5 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Toronto · New York · Remote worldwide
                </span>
              </div>
            </div>
          </div>

          <div className="proof-stack">
            {proofItems.map((p) => (
              <div className="card-shell" key={p.title}>
                <div className="card proof-card">
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-shell">
            <div className="card aside-quote">
              <p>
                “Aevora answered in hours, scoped in days, and had our certification roadmap
                ready before our next investment committee meeting.”
              </p>
              <span className="quote-role">VP Development, purpose-built rental sponsor</span>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
