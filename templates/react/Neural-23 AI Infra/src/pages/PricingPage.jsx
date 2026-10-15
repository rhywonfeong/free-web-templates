import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingSection from '../components/PricingSection'
import CTASection from '../components/CTASection'

gsap.registerPlugin(ScrollTrigger)

export default function PricingPage() {
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
      <main className="flex-grow pt-20">
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}