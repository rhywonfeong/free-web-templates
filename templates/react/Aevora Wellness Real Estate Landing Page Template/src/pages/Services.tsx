import { Link } from 'react-router-dom'

const services = [
  {
    tag: 'Advisory',
    title: 'Certification Readiness & Management',
    text: 'End-to-end guidance toward certified wellness building status under the governing industry standard — scorecard strategy, documentation, performance verification, and submission management.',
    items: ['Feasibility scorecards & gap analysis', 'Documentation & policy authoring', 'Performance testing coordination', 'Submission & review management'],
  },
  {
    tag: 'Design',
    title: 'Wellness-Integrated Design Consulting',
    text: 'We embed health science into drawings before they harden — advising architects and interior teams on air, light, water, acoustic, thermal, and material decisions with certification credit in view.',
    items: ['Schematic & DD design reviews', 'Circadian lighting strategy', 'Low-emission material specification', 'Biophilic & active design planning'],
  },
  {
    tag: 'Development',
    title: 'Development & Repositioning Strategy',
    text: 'For developers and owners of multi-unit residential assets, we shape wellness positioning that underwrites — aligning capital plans, amenity programming, and brand promise with verifiable outcomes.',
    items: ['Pre-acquisition wellness due diligence', 'Capital plan prioritization', 'Amenity & operations programming', 'Leasing narrative & proof points'],
  },
  {
    tag: 'Assessment',
    title: 'Property Health Assessments',
    text: 'Independent, evidence-based evaluation of existing residences and communities — measuring what residents actually breathe, drink, hear, and experience, with a clear remediation roadmap.',
    items: ['Indoor air & water quality testing', 'Acoustic & thermal comfort mapping', 'Lighting & mold/moisture surveys', 'Prioritized remediation reporting'],
  },
]

const concepts = [
  { name: 'Air', pct: 100 },
  { name: 'Water', pct: 100 },
  { name: 'Nourishment', pct: 90 },
  { name: 'Light', pct: 100 },
  { name: 'Movement', pct: 85 },
  { name: 'Thermal Comfort', pct: 95 },
  { name: 'Sound', pct: 90 },
  { name: 'Materials', pct: 100 },
  { name: 'Mind', pct: 85 },
  { name: 'Community', pct: 80 },
]

export default function Services() {
  return (
    <>
      <section className="section page-head ruled">
        <div className="joint tl" /><div className="joint tr" />
        <p className="eyebrow">Services</p>
        <h1 className="display-sm">Advisory built around one question: <em>does this home make life longer and better?</em></h1>
        <p className="lede">
          Four connected practices covering the full arc of a residential asset — from first
          feasibility study to certified, operating community.
        </p>
      </section>

      <section className="section ruled">
        <div className="joint tl" /><div className="joint tr" />
        <div className="card-grid two">
          {services.map((s) => (
            <article className="card-shell" key={s.title}>
              <div className="card service-card">
                <span className="badge badge-accent">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="check-list">
                  {s.items.map((i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 12.5 9.5 18 20 6.5" />
                      </svg>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section ruled split">
        <div className="joint tl" /><div className="joint tr" />
        <div className="split-copy">
          <p className="eyebrow">Coverage</p>
          <h2>Fluency across every wellness concept</h2>
          <p className="section-sub">
            The governing standard evaluates buildings across interconnected health concepts. Our
            advisors carry the accreditation — and the field experience — to lead each one.
          </p>
          <Link to="/contact" className="btn btn-primary">Request a scoping call</Link>
        </div>
        <div className="tracks card-shell">
          <div className="card">
            {concepts.map((c) => (
              <div className="track" key={c.name}>
                <div className="track-head">
                  <span>{c.name}</span>
                  <span className="track-pct">{c.pct}%</span>
                </div>
                <div className="track-bar">
                  <span style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
            <p className="track-note">Share of available credits our team has delivered across past engagements.</p>
          </div>
        </div>
      </section>

      <section className="cta-band ruled">
        <div className="joint tl" /><div className="joint tr" />
        <div>
          <h2>Not sure which engagement fits?</h2>
          <p>Most clients start with a baseline assessment. It takes two to four weeks and answers everything that follows.</p>
        </div>
        <Link to="/contact" className="btn btn-primary btn-lg">Book a baseline assessment</Link>
      </section>
    </>
  )
}
