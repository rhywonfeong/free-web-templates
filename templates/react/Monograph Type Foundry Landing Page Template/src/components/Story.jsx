import React from 'react'

const Story = () => {
  return (
    <section className="story" id="story">
      <div className="story-inner">
        <div className="story-grid">
          <div className="story-left">
            <p className="section-label rv">Background</p>
            <ul className="story-timeline">
              <li className="tl-item rv">
                <span className="tl-year">2017</span>
                <span className="tl-event">Studio established in London, focusing on editorial lettering.</span>
              </li>
              <li className="tl-item rv">
                <span className="tl-year">2019</span>
                <span className="tl-event">Released our first full retail family, Foundry Display.</span>
              </li>
              <li className="tl-item rv">
                <span className="tl-year">2021</span>
                <span className="tl-event">Transitioned entirely to variable font technologies.</span>
              </li>
              <li className="tl-item rv">
                <span className="tl-year">2024</span>
                <span className="tl-event">Expanded our custom type division for global brands.</span>
              </li>
            </ul>
          </div>
          
          <div className="story-right">
            <h2 className="story-h2 rv">A practice built on precision and patience.</h2>
            <div className="story-body rv">
              <p>Monograph began as a specialized practice dedicated to bespoke lettering. Today, we are a comprehensive type foundry developing expansive typographic systems for a global roster of clients.</p>
              <p>Our philosophy remains unchanged: every curve, counter, and terminal must serve a structural and expressive purpose. We design typefaces that endure.</p>
            </div>
          </div>
        </div>
        
        <div className="story-stats">
          <div className="stat-cell rv">
            <span className="stat-val">24</span>
            <span className="stat-lbl">Type Families</span>
          </div>
          <div className="stat-cell rv">
            <span className="stat-val">380+</span>
            <span className="stat-lbl">Brand Clients</span>
          </div>
          <div className="stat-cell rv">
            <span className="stat-val">12</span>
            <span className="stat-lbl">Design Awards</span>
          </div>
          <div className="stat-cell rv">
            <span className="stat-val">100%</span>
            <span className="stat-lbl">Independent</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story