import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    id: '01',
    label: 'Research',
    title: 'Research & Concept',
    desc: 'Before a single vector is drawn, we establish the historical context and functional requirements of the typeface.',
    attr: 'Archive Study',
    tags: ['Historical', 'Context'],
    cardClass: 'phil-card-paper'
  },
  {
    id: '02',
    label: 'Drafting',
    title: 'Drafting & Refinement',
    desc: 'We develop the core character set, focusing on proportion, contrast, and rhythm across the entire system.',
    attr: 'Glyph Construction',
    tags: ['Vector', 'Optical'],
    cardClass: 'phil-card-ink'
  },
  {
    id: '03',
    label: 'Engineering',
    title: 'Engineering & Release',
    desc: 'The typeface is engineered into a robust variable font, extensively kerned and hinted for optimal performance.',
    attr: 'Quality Assurance',
    tags: ['Variable', 'Kerning'],
    cardClass: 'phil-card-brass'
  }
];

const Philosophy = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=250%', // Provides enough scroll distance to comfortably read the 3 phases
        pin: '.phil-sticky',
        scrub: 0.5, // Slight smoothing to the scroll animation
        onUpdate: (self) => {
          const p = self.progress;
          let index = 0;
          if (p < 0.33) index = 0;
          else if (p < 0.66) index = 1;
          else index = 2;
          
          setActiveIndex(index);
        }
      }
    });

    // Animate the progress bars sequentially tied to the scroll position
    phases.forEach((_, i) => {
      tl.to(`#prog-fill-${i}`, {
        width: '100%',
        ease: 'none',
        duration: 1
      }, i);
    });
  }, { scope: containerRef });

  // Determine standard classes for the cards to utilize the CSS transitions from index.css
  const getCardClass = (index) => {
    if (index === activeIndex) return 'vis';
    if (index === activeIndex + 1) return 'next';
    if (index < activeIndex) return 'past';
    return '';
  };

  return (
    <section className="philosophy" id="philosophy" ref={containerRef}>
      <div className="phil-pin-height">
        <div className="phil-sticky">
          
          {/* LEFT SIDE: Content & Progress Tracking */}
          <div className="phil-left">
            <div className="phil-left-bg">0{activeIndex + 1}</div>
            <div>
              <p className="phil-section-label">Methodology</p>
              <h2 className="phil-title">The Foundry Process</h2>
              <p className="phil-desc">
                Every typeface we release undergoes a rigorous development cycle, moving from conceptual sketches to engineered typographic systems.
              </p>
            </div>
            
            <ul className="phil-progress-list">
              {phases.map((phase, i) => (
                <li key={phase.id} className={`phil-prog-row ${i === activeIndex ? 'cur' : ''}`}>
                  <span className="phil-prog-n">{phase.id}</span>
                  <span className="phil-prog-label">{phase.label}</span>
                  <div className="phil-prog-track">
                    <div 
                      id={`prog-fill-${i}`} 
                      className="phil-prog-fill" 
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
            
            <p className="phil-side-note">
              Our process is non-linear, often returning to the drawing board to refine curves and optical sizing based on rigorous in-context testing.
            </p>
          </div>
          
          {/* RIGHT SIDE: Card Stacking Stage */}
          <div className="phil-right">
            <div className="phil-stage">
              <div className="phil-stage-orbit"></div>
              <div className="phil-stage-grid"></div>
              
              <div className="phil-stage-meta">
                <span className="phil-stage-kicker">Phase</span>
                <span className="phil-stage-no">0{activeIndex + 1}</span>
              </div>
              
              <div className="phil-card-stack">
                {phases.map((phase, i) => (
                  <div key={phase.id} className={`phil-card ${phase.cardClass} ${getCardClass(i)}`}>
                    <div className="phil-card-top">
                      <span className="phil-q-num">Phase {i + 1}</span>
                      <div className="phil-card-tags">
                        {phase.tags.map(tag => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                    <h3 className="phil-q-text">{phase.title}</h3>
                    <p className="phil-card-body">{phase.desc}</p>
                    <span className="phil-q-attr">{phase.attr}</span>
                  </div>
                ))}
              </div>
              
              <div className="phil-stage-footer">
                <span className="phil-stage-pulse">System Active</span>
                <span className="phil-stage-caption">Iterative refinement loop</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;