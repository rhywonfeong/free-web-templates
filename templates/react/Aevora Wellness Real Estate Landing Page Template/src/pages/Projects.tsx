import { Link } from 'react-router-dom'

const projects = [
  {
    kind: 'Multi-Unit Rental · 212 Units',
    title: 'Lakeside Commons',
    location: 'Toronto, ON',
    status: 'Certified — Gold level',
    summary:
      'Full certification advisory for a purpose-built rental community: ventilation redesign, circadian corridor lighting, and a resident movement program. Accepted on first submission.',
    metrics: [
      ['Air quality improvement', '38%'],
      ['Credits achieved', '84 / 110'],
      ['Lease-up premium', '+5.2%'],
    ],
  },
  {
    kind: 'Condominium · 96 Units',
    title: 'The Arbor Residences',
    location: 'Brooklyn, NY',
    status: 'Certified — Silver level',
    summary:
      'Design-phase engagement embedding low-emission materials, acoustic zoning, and water treatment into construction documents — avoiding six figures of late-stage retrofit cost.',
    metrics: [
      ['Retrofit cost avoided', '$640K'],
      ['Material credits', '100%'],
      ['Schedule impact', '0 days'],
    ],
  },
  {
    kind: 'Portfolio Assessment · 4 Assets',
    title: 'Meridian Residential Portfolio',
    location: 'Chicago & Austin',
    status: 'Roadmap delivered',
    summary:
      'Pre-acquisition wellness due diligence across four mid-rise assets, producing a prioritized capital plan tied to resident health outcomes and certification feasibility.',
    metrics: [
      ['Assets assessed', '4'],
      ['Concepts benchmarked', '11'],
      ['Roadmap horizon', '5 yrs'],
    ],
  },
  {
    kind: 'Senior Living · 148 Suites',
    title: 'Willowmere Longevity Community',
    location: 'Vancouver, BC',
    status: 'In certification review',
    summary:
      'Longevity-first programming for an age-in-place community: thermal comfort mapping, fall-safe lighting design, nourishment programming, and restorative garden planning.',
    metrics: [
      ['Suites advised', '148'],
      ['Wellness amenities', '9'],
      ['Target level', 'Platinum'],
    ],
  },
]

export default function Projects() {
  return (
    <>
      <section className="section page-head ruled">
        <div className="joint tl" /><div className="joint tr" />
        <p className="eyebrow">Project Experience</p>
        <h1 className="display-sm">Proven on real buildings, <em>not just frameworks.</em></h1>
        <p className="lede">
          Before launching under the Aevora name, our team delivered wellness certification and
          assessment work across multi-unit residential projects in North America. A selection:
        </p>
      </section>

      <section className="section ruled">
        <div className="joint tl" /><div className="joint tr" />
        <div className="card-grid two">
          {projects.map((p) => (
            <article className="card-shell" key={p.title}>
              <div className="card project-card">
                <div className="project-top">
                  <span className="badge">{p.kind}</span>
                  <span className="badge badge-accent">{p.status}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="project-loc">{p.location}</p>
                <p>{p.summary}</p>
                <dl className="metric-row">
                  {p.metrics.map(([label, value]) => (
                    <div className="metric" key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band ruled">
        <div className="joint tl" /><div className="joint tr" />
        <div>
          <h2>Your project could be next in this list.</h2>
          <p>Share your drawings, pro forma, or just an address — we will tell you what certified status would take.</p>
        </div>
        <Link to="/contact" className="btn btn-primary btn-lg">Discuss your project</Link>
      </section>
    </>
  )
}
