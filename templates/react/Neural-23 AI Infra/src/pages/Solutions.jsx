import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import MaskedText from '../components/MaskedText'

gsap.registerPlugin(ScrollTrigger)

export default function Solutions() {
  const mainRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    
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
    }, mainRef)

    return () => ctx.revert()
  }, [])

  const solutions = [
    {
      title: "Financial Services",
      desc: "Automate risk assessment and fraud detection with millisecond latency using our predictive scaling architecture.",
      icon: "solar:wallet-money-linear"
    },
    {
      title: "Healthcare",
      desc: "Process vast amounts of unstructured patient data securely with HIPAA-compliant vector assimilation.",
      icon: "solar:health-linear"
    },
    {
      title: "E-Commerce",
      desc: "Dynamically route complex inventory and personalization algorithms to maximize conversion rates.",
      icon: "solar:cart-large-minimalistic-linear"
    },
    {
      title: "Cybersecurity",
      desc: "Continuous threat monitoring leveraging decentralized neural nodes for instant anomaly detection.",
      icon: "solar:shield-warning-linear"
    }
  ]

  return (
    <div ref={mainRef} className="flex flex-col min-h-screen bg-[#030303]">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        
        <div className="text-center px-6 py-20 max-w-4xl mx-auto">
          <div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb] text-xs font-medium tracking-wide font-geist mb-6">
            <iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon>
            Industry Solutions
          </div>
          <MaskedText 
            as="h1" 
            text="Tailored for your enterprise" 
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white font-geist mb-6 justify-center" 
          />
          <p className="reveal-element text-zinc-400 text-lg md:text-xl font-extralight font-geist leading-relaxed">
            Deploy cognitive architectures specifically tuned for your industry's unique challenges, compliance requirements, and scale.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="stagger-container grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#27272a] border border-[#27272a]">
            {solutions.map((sol, i) => (
              <div key={i} className="stagger-item bg-[#18181b] p-12 hover:bg-[#1e1e22] transition-colors duration-300 group">
                <iconify-icon icon={sol.icon} class="text-4xl text-[#2563eb] mb-8 group-hover:scale-110 transition-transform duration-300"></iconify-icon>
                <h3 className="text-2xl font-medium tracking-tight text-zinc-100 font-geist mb-4">{sol.title}</h3>
                <p className="text-zinc-500 text-base font-extralight leading-relaxed font-geist">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}