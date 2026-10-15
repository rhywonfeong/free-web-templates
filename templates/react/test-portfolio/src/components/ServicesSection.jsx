export default function ServicesSection() {
  return (
    <section className="section section-muted">
      <div className="container-main section-standard">
        <div className="section-heading reveal-up">
          <div className="eyebrow-row">
            <span className="eyebrow">Services</span>
            <div className="eyebrow-line" />
          </div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Habilidades
          </h2>
          <p className="section-lead">
            Design, identity, development, and growth — crafted as polished, cohesive experiences.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card reveal-up reveal-delay-1">
            <div
              className="service-visual"
              style={{ background: '#f5f5f5', border: '1px solid #f5f5f5' }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '1rem',
                  background: '#fff',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                  borderRadius: '0.5rem',
                  border: '1px solid #e5e5e5',
                  padding: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', gap: '0.375rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '999px', background: 'rgba(248,113,113,0.8)' }} />
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '999px', background: 'rgba(251,191,36,0.8)' }} />
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '999px', background: 'rgba(74,222,128,0.8)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ height: '0.5rem', width: '33.3333%', background: '#e5e5e5', borderRadius: '999px' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.5rem' }}>
                    <div style={{ height: '4rem', background: '#fafafa', borderRadius: '0.25rem', border: '1px solid #f5f5f5' }} />
                    <div style={{ height: '4rem', background: '#fafafa', borderRadius: '0.25rem', border: '1px solid #f5f5f5' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="service-badge badge-blue">
              <iconify-icon icon="solar:paint-roller-linear" width="14" height="14" />
              Design
            </div>
            <h3 className="card-title">UX/UI Design</h3>
            <p className="card-copy">
              Creating intuitive interfaces that offer a frictionless experience. We combine
              creativity with usability.
            </p>
          </div>

          <div className="service-card reveal-up reveal-delay-2">
            <div
              className="service-visual"
              style={{
                background: '#171717',
                border: '1px solid #262626',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 0.75rem',
                  borderBottom: '1px solid #262626',
                  background: 'rgba(23,23,23,0.5)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.375rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '999px', background: '#ef4444' }} />
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '999px', background: '#eab308' }} />
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '999px', background: '#22c55e' }} />
                </div>
              </div>
              <div
                className="font-geist-mono"
                style={{
                  padding: '0.75rem',
                  fontSize: '10px',
                  color: '#a3a3a3',
                  lineHeight: 1.7,
                  whiteSpace: 'pre-line'
                }}
              >
                <span style={{ color: '#c084fc' }}>const</span>{' '}
                <span style={{ color: '#60a5fa' }}>App</span> = () =&gt; {'{'}
                <br />
                &nbsp;&nbsp;<span style={{ color: '#c084fc' }}>return</span> (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#f87171' }}>div</span>{' '}
                <span style={{ color: '#fbbf24' }}>className</span>=
                <span style={{ color: '#4ade80' }}>"hero"</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#f87171' }}>h1</span>&gt;Hello&lt;/
                <span style={{ color: '#f87171' }}>h1</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: '#f87171' }}>div</span>&gt;
                <br />
                &nbsp;&nbsp;)
                <br />
                {'}'}
              </div>
            </div>

            <div className="service-badge badge-purple">
              <iconify-icon icon="solar:code-2-linear" width="14" height="14" />
              Development
            </div>
            <h3 className="card-title">Web Development</h3>
            <p className="card-copy">
              Beautiful, performant websites tailored to your brand. Seamless user experiences that
              engage visitors.
            </p>
          </div>

          <div className="service-card reveal-up reveal-delay-3">
            <div
              className="service-visual"
              style={{
                background: '#f5f5f5',
                border: '1px solid #f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: '0.75rem',
                  width: '100%',
                  maxWidth: '200px'
                }}
              >
                <div style={{ aspectRatio: '1 / 1', borderRadius: '999px', background: '#171717', boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }} />
                <div style={{ aspectRatio: '1 / 1', borderRadius: '999px', background: '#a3a3a3', boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }} />
                <div style={{ aspectRatio: '1 / 1', borderRadius: '999px', background: '#e5e5e5', boxShadow: '0 10px 20px rgba(0,0,0,0.12)' }} />
                <div
                  style={{
                    gridColumn: 'span 3 / span 3',
                    height: '0.5rem',
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, #171717 0%, #737373 50%, #e5e5e5 100%)',
                    marginTop: '0.5rem'
                  }}
                />
              </div>
            </div>

            <div className="service-badge badge-emerald">
              <iconify-icon icon="solar:widget-4-linear" width="14" height="14" />
              Branding
            </div>
            <h3 className="card-title">Brand Identity</h3>
            <p className="card-copy">
              Cohesive brand systems with crafted color palettes, typography, and visual elements
              that resonate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}