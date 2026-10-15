import React, { useState, useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import StackingSection from './components/StackingSection'
import Conviction from './components/Conviction'
import Philosophy from './components/Philosophy'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  useGSAP(() => {
    if (!preloaderDone) return;
    
    // Global Scroll Reveals
    gsap.utils.toArray('.rv').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
      })
    })
  }, [preloaderDone])

  return (
    <>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <Navbar />
      <Hero preloaderDone={preloaderDone} />
      <Works />
      <StackingSection />
      <Conviction />
      <Philosophy />
      <Story />
      <Contact />
      <Footer />
    </>
  )
}

export default App