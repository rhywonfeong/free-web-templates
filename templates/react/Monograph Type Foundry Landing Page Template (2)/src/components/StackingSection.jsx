import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const StackingSection = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const slides = gsap.utils.toArray('.card-slide')

    slides.forEach((slide, i) => {
      const isLast = i === slides.length - 1

      if (!isLast) {
        ScrollTrigger.create({
          trigger: slide,
          start: 'top top',
          end: '+=100%',
          pin: true,
          pinSpacing: false
        })

        const content = slide.querySelector('.card-content')
        const overlay = slide.querySelector('.card-overlay')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: 'top top',
            end: '+=100%',
            scrub: true
          }
        })

        tl.to(content, {
          scale: 0.92,
          rotateX: 4,
          ease: 'none',
        }, 0)

        if (overlay) {
          tl.to(overlay, {
            opacity: 0.7,
            ease: 'none',
          }, 0)
        }
      }
    })
  }, { scope: sectionRef })

  return (
    <section id="stacking-section" ref={sectionRef}>
      <div className="stack-intro">
        <div className="stack-intro-inner">
          <h2 className="rv">A studio built on<br />typographic systems.</h2>
          <p className="stack-intro-desc rv">
            We don't just draw letters. We build robust systems that solve complex design challenges, creating a cohesive visual language that scales across every touchpoint of a brand's ecosystem.
          </p>
        </div>
      </div>

      <div className="card-slide">
        <div className="card-wrapper">
          <div className="card-content card-cream">
            <div className="card-overlay" style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0, pointerEvents: 'none', zIndex: 10 }}></div>
            <div className="card-top">
              <span className="card-num">01</span>
              <h3 className="card-title">Bespoke Type</h3>
            </div>
            <div className="card-bottom">
              <div className="card-left-rail">
                <div className="card-middle">
                  <div className="card-mini-panel">
                    <span className="card-mini-label">Focus</span>
                    <h4 className="card-mini-title">Brand Voice</h4>
                    <p className="card-mini-copy">Custom typefaces designed exclusively to express your brand's unique character.</p>
                  </div>
                  <div className="card-mini-panel">
                    <span className="card-mini-label">Output</span>
                    <ul className="card-signal-list">
                      <li><span>Variable Fonts</span></li>
                      <li><span>Web Fonts</span></li>
                      <li><span>App Licenses</span></li>
                    </ul>
                  </div>
                  <div className="card-mini-panel card-mini-panel--wide card-specimen-box">
                    <span className="card-specimen-word">Exclusive</span>
                    <p className="card-specimen-meta">Full ownership and exclusive rights to your custom typography.</p>
                  </div>
                </div>
              </div>
              <div className="card-img-col">
                <img src="https://images.unsplash.com/photo-1760820708737-d204f21bc602?w=800&q=80" alt="Bespoke Type" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-slide">
        <div className="card-wrapper">
          <div className="card-content card-dark">
            <div className="card-overlay" style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0, pointerEvents: 'none', zIndex: 10 }}></div>
            <div className="card-top">
              <span className="card-num">02</span>
              <h3 className="card-title">Retail Library</h3>
            </div>
            <div className="card-bottom">
              <div className="card-left-rail">
                <div className="card-middle">
                  <div className="card-mini-panel">
                    <span className="card-mini-label">Focus</span>
                    <h4 className="card-mini-title">Ready to use</h4>
                    <p className="card-mini-copy">High-quality, rigorously tested typefaces available for immediate licensing.</p>
                  </div>
                  <div className="card-mini-panel">
                    <span className="card-mini-label">Styles</span>
                    <div className="card-chip-row">
                      <span className="card-chip">Sans</span>
                      <span className="card-chip">Serif</span>
                      <span className="card-chip">Mono</span>
                      <span className="card-chip">Display</span>
                    </div>
                  </div>
                  <div className="card-mini-panel card-mini-panel--wide card-specimen-box">
                    <span className="card-specimen-word">Accessible</span>
                    <p className="card-specimen-meta">Flexible licensing options for projects of all sizes and scopes.</p>
                  </div>
                </div>
              </div>
              <div className="card-img-col">
                <img src="https://images.unsplash.com/photo-1599758069393-1b64a75a8289?w=800&q=80" alt="Retail Library" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-slide">
        <div className="card-wrapper">
          <div className="card-content card-warm">
            <div className="card-overlay" style={{ position: 'absolute', inset: 0, background: '#000', opacity: 0, pointerEvents: 'none', zIndex: 10 }}></div>
            <div className="card-top">
              <span className="card-num">03</span>
              <h3 className="card-title">Modifications</h3>
            </div>
            <div className="card-bottom">
              <div className="card-left-rail">
                <div className="card-middle">
                  <div className="card-mini-panel">
                    <span className="card-mini-label">Focus</span>
                    <h4 className="card-mini-title">Tailored</h4>
                    <p className="card-mini-copy">Adjustments to existing retail fonts to better suit your specific needs.</p>
                  </div>
                  <div className="card-mini-panel">
                    <span className="card-mini-label">Capabilities</span>
                    <ul className="card-signal-list">
                      <li><span>Custom Glyphs</span></li>
                      <li><span>Language Support</span></li>
                      <li><span>Weight Tweaks</span></li>
                    </ul>
                  </div>
                  <div className="card-mini-panel card-mini-panel--wide card-specimen-box">
                    <span className="card-specimen-word">Optimized</span>
                    <p className="card-specimen-meta">Fine-tuned typography that aligns perfectly with your design system.</p>
                  </div>
                </div>
              </div>
              <div className="card-img-col">
                <img src="https://images.unsplash.com/photo-1764429612824-76b4a677556a?w=800&q=80" alt="Modifications" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StackingSection