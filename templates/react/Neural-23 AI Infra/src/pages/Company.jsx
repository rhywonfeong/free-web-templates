import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MetricsSection from '../components/MetricsSection'
import TestimonialSection from '../components/TestimonialSection'
import MaskedText from '../components/MaskedText'

gsap.registerPlugin(ScrollTrigger)

export default function Company() {
  const mainRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      const revealElements = gsap.utils.toArray('.reveal-element')
      revealElements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50, filter: 'blur(12px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            }
          }
        )
      })

      const staggerContainers = gsap.utils.toArray('.stagger-container')
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('.stagger-item')
        const staggerAmount = parseFloat(container.getAttribute('data-stagger')) || 0.1
        
        gsap.fromTo(items,
          { opacity: 0, y: 50, filter: 'blur(12px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: staggerAmount,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
            }
          }
        )
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen bg-[#030303]">
      <Navbar />
      <main className="flex-grow pt-32 pb-0">
        
        <div className="text-center px-6 py-20 max-w-5xl mx-auto">
          <MaskedText 
            as="h1" 
            text="Building the cognitive future" 
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white font-geist mb-6 justify-center" 
          />
          <p className="reveal-element text-zinc-400 text-lg md:text-xl font-extralight font-geist leading-relaxed mb-16 max-w-3xl mx-auto">
            We are a team of distributed systems engineers, neural architecture researchers, and design thinkers on a mission to make scalable intelligence accessible to every enterprise.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
            alt="CogniCore Team" 
            className="reveal-element w-full h-[300px] md:h-[500px] object-cover rounded-2xl border border-[#27272a] opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl" 
          />
        </div>

        <div className="pt-10">
          <MetricsSection />
        </div>
        
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  )
}