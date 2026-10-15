const projects = [
  {
    year: '2024',
    category: 'Fintech',
    title: 'SaaS Dashboard',
    description:
      'A comprehensive dashboard design for a fintech startup, featuring real-time analytics, user management, and financial insights.',
    tags: ['React', 'TypeScript', 'D3.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    reverse: true
  },
  {
    year: '2024',
    category: 'E-commerce',
    title: 'Fashion Platform',
    description:
      'A modern e-commerce platform for a luxury fashion brand, featuring advanced filtering and AR try-on capabilities.',
    tags: ['Next.js', 'Shopify', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    reverse: false
  }
]

export default function WorkSection() {
  return (
    <section id="work" className="section" style={{ background: '#fff', borderTop: '1px solid #e5e5e5' }}>
      <div className="container-main section-standard">
        <div className="section-heading reveal-up">
          <div className="eyebrow-row">
            <span className="eyebrow">Selected Work</span>
            <div className="eyebrow-line" />
          </div>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Projetos
          </h2>
          <p className="section-lead">A collection of my latest design and development work.</p>
        </div>

        <div className="work-list">
          {projects.map((project, index) => (
            <div className="project-row reveal-up" key={project.title} style={{ animationDelay: `${0.08 * (index + 1)}s` }}>
              <div className={project.reverse ? 'order-lg-1' : ''}>
                <div className="project-meta">
                  <span>{project.year}</span>
                  <div className="meta-dot" />
                  <span>{project.category}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-copy">{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="project-link">
                  Ver projeto <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
                </a>
              </div>

              <div className={project.reverse ? 'order-lg-2' : ''}>
                <div className="project-shot">
                  <img src={project.image} alt="Project" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="center-row reveal-up reveal-delay-3">
          <a href="#" className="pill-button">
            Ver todos os projetos <iconify-icon icon="solar:add-circle-linear" width="16" height="16" />
          </a>
        </div>
      </div>
    </section>
  )
}