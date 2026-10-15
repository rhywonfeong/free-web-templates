import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Evidence before aesthetics',
    text: 'Every recommendation traces to measurable outcomes — air changes, lux levels, decibels, contaminant thresholds — never to trend.',
  },
  {
    title: 'Certification with integrity',
    text: 'We pursue certified status only where the building genuinely performs. Points follow health, not the other way around.',
  },
  {
    title: 'Quiet, senior counsel',
    text: 'Small team, principal-led engagements, and communication that respects your consultants, your schedule, and your capital.',
  },
]

const credentials = [
  'Accredited professionals under the leading wellness building certification body',
  'Performance verification experience across air, water, light, sound, and thermal testing',
  'Multi-unit residential delivery: rental, condominium, senior living, and mixed-use',
  'Working fluency with architects, MEP engineers, contractors, and property operators',
]

export default function About() {
  return (
    <>
      <section className="section page-head ruled">
        <div className="joint tl" /><div className="joint tr" />
        <p className="eyebrow">About Aevora</p>
        <h1 className="display-sm">
          A new name, carrying <em>years of certified residential work.</em>
        </h1>
        <p className="lede">
          Aevora is the formal home of an advisory team that has spent years helping residential
          developers and owners design for human health. The brand is new; the accreditation,
          project record, and standards fluency are not.
        </p>
      </section>

      <section className="section ruled split">
        <div className="joint tl" /><div className="joint tr" />
        <div className="split-copy">
          <p className="eyebrow">Why we exist</p>
          <h2>Longevity is becoming a real estate metric</h2>
          <p className="section-sub">
            People spend roughly 90% of their lives indoors, and most of that time at home. Yet
            housing is still designed, underwritten, and assessed with almost no reference to the
            health of the people inside it.
          </p>
          <p className="section-sub">
            Aevora closes that gap. We bring clinical-grade environmental standards into
            residential design and development — and we carry the accreditation to take projects
            all the way to certified wellness building status under the governing industry
            organization.
          </p>
        </div>
        <div className="card-shell">
          <div className="card">
            <h3>Credentials &amp; capability</h3>
            <ul className="check-list">
              {credentials.map((c) => (
                <li key={c}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 12.5 9.5 18 20 6.5" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section ruled">
        <div className="joint tl" /><div className="joint tr" />
        <div className="section-head">
          <p className="eyebrow">How we work</p>
          <h2>Principles that shape every engagement</h2>
        </div>
        <div className="card-grid three">
          {values.map((v) => (
            <article className="card-shell" key={v.title}>
              <div className="card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band ruled">
        <div className="joint tl" /><div className="joint tr" />
        <div>
          <h2>Meet the team behind the work.</h2>
          <p>A short call is the fastest way to understand whether we are the right fit for your project.</p>
        </div>
        <Link to="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
      </section>
    </>
  )
}
