import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Conviction = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    // Text Reveal Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.fromTo('.cv-eyebrow-row', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
      .fromTo('.cv-line', 
        { opacity: 0, y: 80 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, 
        '-=0.3'
      )
      .fromTo('.cv-sub-row', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
        '-=0.4'
      )
      
    // Image Panel Reveal
    gsap.fromTo('.cv-img-panel',
      { clipPath: 'inset(100% 0 0 0)' },
      { 
        clipPath: 'inset(0% 0% 0% 0%)', 
        duration: 1.2, 
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      }
    )

  }, { scope: sectionRef })

  return (
    <section className="conviction" id="conviction" ref={sectionRef}>
      <div className="cv-text">
        <div className="cv-eyebrow-row">
          <span className="cv-eye-label">Studio Conviction</span>
        </div>
        
        <div className="cv-overflow">
          <span className="cv-line">Typography is</span>
        </div>
        <div className="cv-overflow">
          <span className="cv-line accent">the voice</span>
        </div>
        <div className="cv-overflow">
          <span className="cv-line">of a brand.</span>
        </div>

        <div className="cv-sub-row">
          <div className="cv-sub-divider"></div>
          <p className="cv-sub">
            We believe that every typeface should serve a distinct purpose. 
            Our approach merges historical precedent with contemporary technical precision, 
            ensuring that each letterform we design establishes a lasting and authoritative presence.
          </p>
        </div>
      </div>

      <div className="cv-img-panel">
        <img 
          src="https://images.unsplash.com/photo-1619632973808-4acf8041df42?w=1600&q=80" 
          alt="Typography Specimen Detail" 
        />
        <div className="cv-img-veil"></div>
        <div className="cv-img-caption">
          <span>Foundry Process</span>
          <span>Manifesto</span>
        </div>
      </div>
    </section>
  )
}

export default Conviction