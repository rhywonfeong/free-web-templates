import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HowItWorksSection from '../components/HowItWorksSection'
import FeaturesSection from '../components/FeaturesSection'
import MetricsSection from '../components/MetricsSection'
import TestimonialSection from '../components/TestimonialSection'
import PricingSection from '../components/PricingSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const VerticalLines = () => (
  <div className="fixed inset-0 pointer-events-none z-0 flex justify-center overflow-hidden mix-blend-screen">
    <div className="w-full max-w-7xl h-full flex justify-between px-6 opacity-[0.05]">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-vertical-line w-[1px] h-full bg-white"></div>
      ))}
    </div>
  </div>
)

export default function Home() {
  const mainRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Individual Reveal Elements (Fade + Slide + Blur)
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

      // 2. Staggered Container Items
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

      // 3. Vertical Background Lines Intro Animation
      gsap.fromTo('.bg-vertical-line', 
        { scaleY: 0, opacity: 0 },
        { 
          scaleY: 1, 
          opacity: 1, 
          duration: 2, 
          stagger: 0.1, 
          ease: 'expo.inOut',
          transformOrigin: 'top' 
        }
      )
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen relative bg-[#030303]">
      <VerticalLines />
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MetricsSection />
      <TestimonialSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  )
}