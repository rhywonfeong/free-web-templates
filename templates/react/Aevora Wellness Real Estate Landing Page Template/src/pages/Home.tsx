import { Link } from 'react-router-dom'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12c2.5-5 5.5-7.5 8-7.5S17.5 7 20 12c-2.5 5-5.5 7.5-8 7.5S6.5 17 4 12Z" />
        <path d="M12 15.5a3.5 3.5 0 1 0 0-7" />
      </svg>
    ),
    title: 'Air & Light Quality',
    text: 'Ventilation strategy, filtration performance, and circadian lighting design reviewed against the leading wellness building standard.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c4-3.5 7-7.2 7-11a7 7 0 0 0-14 0c0 3.8 3 7.5 7 11Z" />
        <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </svg>
    ),
    title: 'Water & Nourishment',
    text: 'Potable water testing protocols, point-of-use treatment, and amenity programming that supports resident nutrition and hydration.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V9.5L12 4l8 5.5V19" />
        <path d="M9 19v-5h6v5" />
        <path d="M2 19h20" />
      </svg>
    ),
    title: 'Materials & Acoustics',
    text: 'Low-emission material specification, acoustic comfort mapping, and thermal strategies that reduce chronic stressors in the home.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
      </svg>
    ),
    title: 'Movement & Mind',
    text: 'Active design, biophilic connection, and restorative common spaces that measurably support resident longevity outcomes.',
  },
]

const stats = [
  { value: '2.4M+', label: 'sq ft of multi-unit residential advised' },
  { value: '11', label: 'wellness concept areas covered in every review' },
  { value: '100%', label: 'certification submissions accepted to date' },
  { value: '3–7%', label: 'typical rent premium for certified wellness assets' },
]

const testimonials = [
  {
    quote:
      'Their team translated a dense certification framework into a clear scope our architects and engineers could actually execute. We certified on the first submission.',
    name: 'Development Director',
    role: '212-unit rental community, Toronto',
  },
  {
    quote:
      'The pre-acquisition wellness assessment changed our underwriting. We understood exactly which upgrades would move resident health outcomes and asset value.',
    name: 'Principal',
    role: 'Private residential investment firm',
  },
  {
    quote:
      'From air quality testing to policy documentation, everything was managed quietly and precisely. It felt less like consulting and more like stewardship.',
    name: 'Asset Manager',
    role: 'Boutique condominium portfolio',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section hero ruled">
        <div className="joint tl" /><div className="joint tr" />
        <p className="eyebrow">Wellness &amp; Longevity Real Estate Advisory</p>
        <h1 className="display">
          Homes engineered for
          <br />
          <em>longer, healthier lives.</em>
        </h1>
        <p className="lede">
          Aevora advises developers, owners, and design teams on residential projects where human
          health is a design requirement — from first concept to certified wellness building
          status under the industry&rsquo;s governing standard.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">Start a Consultation</Link>
          <Link to="/services" className="btn btn-secondary">Explore Services</Link>
        </div>
        <div className="hero-proof">
          <span className="badge badge-accent">Certified wellness building advisors</span>
          <span className="badge">Multi-unit residential proven</span>
          <span className="badge">Design · Development · Assessment</span>
        </div>
      </section>

      {/* Stats strip */}
      <section className="stats ruled">
        <div className="joint tl" /><div className="joint tr" />
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Features / pillars */}
      <section className="section ruled">
        <div className="joint tl" /><div className="joint tr" />
        <div className="section-head">
          <p className="eyebrow">What we evaluate</p>
          <h2>Every dimension of a healthy residence</h2>
          <p className="section-sub">
            Our reviews map each project against the full body of evidence-based wellness concepts
            — so nothing is retrofitted late, and nothing is certified by accident.
          </p>
        </div>
        <div className="card-grid four">
          {pillars.map((p) => (
            <article className="card-shell" key={p.title}>
              <div className="card">
                <span className="icon-circle">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section-foot">
          <Link to="/services" className="btn btn-link">See the full advisory scope →</Link>
        </div>
      </section>

      {/* Process preview */}
      <section className="section ruled split">
        <div className="joint tl" /><div className="joint tr" />
        <div className="split-copy">
          <p className="eyebrow">How engagements run</p>
          <h2>A measured path to certified status</h2>
          <p className="section-sub">
            Whether you are acquiring, designing, or repositioning, we sequence the work so
            wellness performance is verifiable — not aspirational.
          </p>
          <Link to="/projects" className="btn btn-secondary">View project experience</Link>
        </div>
        <ol className="steps">
          <li className="step">
            <span className="step-num">01</span>
            <div>
              <h3>Baseline assessment</h3>
              <p>On-site and documentation review scoring the asset against every applicable wellness concept.</p>
            </div>
          </li>
          <li className="step">
            <span className="step-num">02</span>
            <div>
              <h3>Strategy &amp; feasibility</h3>
              <p>A prioritized roadmap balancing certification points, capital cost, and resident health impact.</p>
            </div>
          </li>
          <li className="step">
            <span className="step-num">03</span>
            <div>
              <h3>Design &amp; delivery support</h3>
              <p>Specification reviews, contractor coordination, and performance testing through construction.</p>
            </div>
          </li>
          <li className="step">
            <span className="step-num">04</span>
            <div>
              <h3>Certification &amp; stewardship</h3>
              <p>Submission management, verification testing, and ongoing recertification planning.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="section ruled">
        <div className="joint tl" /><div className="joint tr" />
        <div className="section-head">
          <p className="eyebrow">Quiet proof</p>
          <h2>Trusted by teams building for the long term</h2>
        </div>
        <div className="card-grid three">
          {testimonials.map((t) => (
            <figure className="card-shell" key={t.role}>
              <blockquote className="card quote">
                <span className="quote-mark" aria-hidden="true">“</span>
                <p>{t.quote}</p>
                <figcaption>
                  <span className="quote-name">{t.name}</span>
                  <span className="quote-role">{t.role}</span>
                </figcaption>
              </blockquote>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band ruled">
        <div className="joint tl" /><div className="joint tr" />
        <div>
          <h2>Planning a residential project with health at its core?</h2>
          <p>Tell us where the project stands. We will map the fastest credible route to certified wellness status.</p>
        </div>
        <Link to="/contact" className="btn btn-primary btn-lg">Start a Consultation</Link>
      </section>
    </>
  )
}
