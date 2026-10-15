import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = ({ preloaderDone }) => {
  const heroRef = useRef(null)

  useGSAP(() => {
    if (!preloaderDone) return

    gsap.to('#heroImgReveal', {
      clipPath: 'inset(0 0 0% 0)',
      duration: 1.1, ease: 'power3.inOut', delay: 0.05
    })
    
    const lines = heroRef.current.querySelectorAll('.hero-h1 .hl span')
    gsap.to(lines, { y: '0%', duration: 0.85, ease: 'power3.out', stagger: 0.13, delay: 0.15 })
    
    gsap.to('#heroEyebrow', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.1 })
    gsap.to('#heroDesc', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.4 })
    gsap.to('#heroCta', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.55 })
    gsap.to('#heroFoot', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.7 })
    gsap.to('#heroImgLabel', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.85 })

  }, [preloaderDone, heroRef])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-main">
        {/* LEFT: Full-height image panel */}
        <div className="hero-img-panel">
          <div className="hero-img-reveal" id="heroImgReveal">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19ec10ef-c660-46b3-aedb-19c4deccecfa_1600w.jpg" alt="Neue Grotesk typeface specimen" />
            <div className="hero-img-overlay"></div>
          </div>

          <div className="hero-img-label" id="heroImgLabel">
            <span>Neue Grotesk</span>
            <span>Display · 2024</span>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="hero-content-panel">
          <div className="hero-copy-stack">
            <p className="hero-eyebrow" id="heroEyebrow">Est. 2017 — London</p>
            <h1 className="hero-h1" id="heroH1">
              <span className="hl"><span>Letters shaped</span></span>
              <span className="hl"><span>with intention</span></span>
              <span className="hl"><span>and precision</span></span>
            </h1>
            <p className="hero-desc" id="heroDesc">
              An independent type foundry crafting typefaces that carry meaning, establish voice, and endure. Every
              letterform is a decision. Every decision is culture.
            </p>
            <div className="hero-actions" id="heroCta">
              <a href="#works" className="btn-shimmer"><span className="btn-label">View Typefaces</span></a>
              <a href="#stacking-section" className="btn-outline-text"><span className="btn-label">Our Studio</span></a>
            </div>
          </div>
          <div className="hero-foot" id="heroFoot">
            <p className="hero-foot-note">Working across bespoke type systems, retail releases, and brand identities for
              cultural, editorial, and product-led teams.</p>
            <div className="hero-service-tags">
              <span>Bespoke commissions</span>
              <span>Retail library</span>
              <span>Variable systems</span>
            </div>
            <div className="hero-kpis" id="heroKpis">
              <div className="hero-kpi">
                <span className="kpi-val">24+</span>
                <span className="kpi-label">Typefaces</span>
              </div>
              <div className="hero-kpi">
                <span className="kpi-val">380+</span>
                <span className="kpi-label">Clients</span>
              </div>
              <div className="hero-kpi">
                <span className="kpi-val">9 yrs</span>
                <span className="kpi-label">In practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero