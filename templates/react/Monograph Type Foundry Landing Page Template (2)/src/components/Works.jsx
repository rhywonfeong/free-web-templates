import React from 'react'

const worksData = [
  { id: '01', name: 'Neue Grotesk', class: 'Grotesque Sans', year: '2024', img: 'https://images.unsplash.com/photo-1617683000755-0e2ff7b004f3?w=800&q=80' },
  { id: '02', name: 'Serif Variable', class: 'Variable Serif', year: '2023', img: 'https://images.unsplash.com/photo-1568041799811-58a50b955ea2?auto=format&fit=crop&w=1200&q=80' },
  { id: '03', name: 'Mono Pro', class: 'Monospace', year: '2023', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80' },
  { id: '04', name: 'Calligraphia', class: 'Calligraphic', year: '2022', img: 'https://images.unsplash.com/photo-1769522489292-df320ada3238?auto=format&fit=crop&w=1200&q=80' },
  { id: '05', name: 'Atlas Condensed', class: 'Condensed Display', year: '2022', img: 'https://images.unsplash.com/photo-1622966591413-81d31b41c8a3?w=800&q=80' },
  { id: '06', name: 'Breeze Script', class: 'Script / Informal', year: '2021', img: 'https://images.unsplash.com/photo-1720702214767-080952bb4b31?auto=format&fit=crop&w=1200&q=80' },
  { id: '07', name: 'Signal Mono', class: 'Technical Mono', year: '2020', img: 'https://images.unsplash.com/photo-1713224878100-456d41f5264d?w=800&q=80' },
  { id: '08', name: 'Foundry Display', class: 'Display / Titling', year: '2019', img: 'https://images.unsplash.com/photo-1763451161502-aa36943914b1?auto=format&fit=crop&w=1200&q=80' }
]

const Works = () => {
  return (
    <section className="works" id="works">
      <div className="works-hdr">
        <div className="works-hdr-left">
          <p className="section-label rv">Selected Works</p>
          <h2 className="rv">The Typeface Library</h2>
        </div>
        <div className="works-hdr-meta">
          <span className="rv">2017 — 2026</span>
          <span className="rv" style={{ color: 'var(--accent)' }}>24 faces · 8 families</span>
        </div>
      </div>

      <div className="works-grid">
        {worksData.map((work) => (
          <div key={work.id} className="work-card rv">
            <div className="work-card-img">
              <img src={work.img} alt={work.name} />
              <div className="work-card-overlay"><span className="work-card-view">View typeface</span></div>
            </div>
            <div className="work-card-info">
              <p className="work-card-num">{work.id}</p>
              <span className="work-card-name">{work.name}</span>
              <div className="work-card-meta">
                <span className="work-card-class">{work.class}</span>
                <span className="work-card-year">{work.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works