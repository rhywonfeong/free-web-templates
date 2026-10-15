import Reveal from '../components/ui/Reveal';
import { useState } from 'react';
import clsx from 'clsx';

export default function Home() {
  return (
    <div className="w-full relative">
      <HeroSection />
      <LogoStrip />
      <ServicesSection />
      <CaseStudySection />
      <ProcessSection />
      <TestimonialSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}

// --- Section Components ---

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20">
            <Reveal delay={100}>
              <div className="eyebrow-tag mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mr-2"></span>
                Creative Agency
              </div>
            </Reveal>
            
            <Reveal delay={200} className="w-full">
              <h1 className="text-[3.5rem] sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-zinc-900 leading-[1.05] mb-8">
                Your business <br/>deserves <span className="font-serif-italic text-zinc-800">that growth.</span>
              </h1>
            </Reveal>
            
            <Reveal delay={300} className="max-w-md">
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                We craft premium digital experiences that elevate modern brands. Combining stunning editorial design with uncompromising performance.
              </p>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="pill-button">
                  Discover our work
                </button>
                <button className="pill-button-outline">
                  Book a strategy call
                </button>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-16 flex items-center gap-12">
                <div>
                  <p className="text-3xl font-bold text-zinc-900">40<span className="font-serif-italic text-[#FF6B00]">+</span></p>
                  <p className="text-sm font-medium text-zinc-500 mt-1 uppercase tracking-wider">Brands Scaled</p>
                </div>
                <div className="w-px h-12 bg-black/10"></div>
                <div>
                  <p className="text-3xl font-bold text-zinc-900">12<span className="font-serif-italic text-[#FF6B00]">M</span></p>
                  <p className="text-sm font-medium text-zinc-500 mt-1 uppercase tracking-wider">Revenue Gen</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center lg:h-[700px]">
            <Reveal delay={300} direction="left" className="relative z-10 w-full max-w-[340px] aspect-[9/19]">
              {/* Vibrant Orange Glow Behind */}
              <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Phone Container */}
              <div className="relative w-full h-full rounded-[3rem] border-[10px] border-zinc-900 bg-zinc-900 shadow-2xl overflow-hidden z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                {/* Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-3xl z-30"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" 
                  alt="Fashion UI" 
                  className="w-full h-full object-cover opacity-90"
                />
                
                {/* Fake UI Overlay inside phone */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <div className="font-serif-italic text-3xl mb-1">Aura.</div>
                  <p className="text-xs text-white/80">Spring Collection '24</p>
                </div>
              </div>

              {/* Slider Navigation Dots (Decorative) */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 hidden lg:flex">
                <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-zinc-900 hover:scale-110 transition-transform"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon></button>
                <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-zinc-900 hover:scale-110 transition-transform"><iconify-icon icon="solar:arrow-down-linear"></iconify-icon></button>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const logos = ['vogue', 'gq', 'forbes', 'wired', 'dribbble'];
  
  return (
    <section className="py-12 border-y border-black/5 bg-white/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              <iconify-icon icon={`simple-icons:${logo}`} width="80" className="text-zinc-800"></iconify-icon>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Brand Identity",
      desc: "Creating timeless, striking visual identities that position you as an authority in your market.",
      icon: "solar:pen-new-square-bold-duotone",
    },
    {
      title: "Digital Design",
      desc: "Editorial-style websites and interfaces built for high engagement and seamless user flows.",
      icon: "solar:monitor-smartphone-bold-duotone",
    },
    {
      title: "Growth Engine",
      desc: "Data-driven SEO and conversion strategies that turn your beautiful site into a revenue driver.",
      icon: "solar:rocket-bold-duotone",
    }
  ];

  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Reveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
            Our <span className="font-serif-italic">services.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 150} direction="up" className="soft-card p-10 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F5F5F2] flex items-center justify-center mb-8 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                <iconify-icon icon={service.icon} width="28"></iconify-icon>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{service.title}</h3>
              <p className="text-zinc-500 text-[15px] leading-relaxed mb-8">{service.desc}</p>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                Learn more <iconify-icon icon="solar:arrow-right-line-duotone" width="18" className="transition-transform group-hover:translate-x-1"></iconify-icon>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudySection() {
  return (
    <section id="cases" className="py-20 space-y-32">
      {/* Case 1: Image Right */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="eyebrow-tag mb-6">E-Commerce</div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Glowthins. <span className="font-serif-italic text-zinc-500 font-normal">Redefining wellness.</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-md">
              We partnered with Glowthins to create a premium e-commerce experience that perfectly reflects their sleek, minimalist product line. The result? A 200% increase in online conversions.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-black/5 pt-8 max-w-md">
              <div>
                <p className="text-3xl font-bold text-zinc-900">+200%</p>
                <p className="text-sm text-zinc-500 mt-1">Conversion Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900">1.2s</p>
                <p className="text-sm text-zinc-500 mt-1">Load Time</p>
              </div>
            </div>
            <button className="pill-button-outline">View Case Study</button>
          </Reveal>
          <Reveal direction="left" delay={200} className="order-1 lg:order-2">
            <div className="soft-card overflow-hidden aspect-square relative">
              <img 
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80" 
                alt="Product Packaging" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Case 2: Image Left */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right" className="relative">
            <div className="soft-card overflow-hidden aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" 
                alt="Editorial Portrait" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-serif-italic text-4xl mb-2">Bloom.</p>
                <p className="text-sm uppercase tracking-widest font-bold">Lookbook 2024</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="eyebrow-tag mb-6">Fashion Editorial</div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6">
              Capturing <span className="font-serif-italic">the essence.</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-md">
              An immersive digital lookbook designed to showcase high-end fashion photography. We focused on seamless typography, large imagery, and fluid scroll animations.
            </p>
            <ul className="space-y-4 mb-10 max-w-md">
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <iconify-icon icon="solar:check-circle-bold" className="text-zinc-900"></iconify-icon> Immersive Scroll Experience
              </li>
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <iconify-icon icon="solar:check-circle-bold" className="text-zinc-900"></iconify-icon> Bespoke Typography System
              </li>
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <iconify-icon icon="solar:check-circle-bold" className="text-zinc-900"></iconify-icon> High-Performance Media Loading
              </li>
            </ul>
            <button className="pill-button-outline">View Case Study</button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We align on your vision and goals." },
    { num: "02", title: "Strategy", desc: "Crafting the blueprint for success." },
    { num: "03", title: "Design", desc: "Creating stunning visual assets." },
    { num: "04", title: "Launch", desc: "Deploying with precision." }
  ];

  return (
    <section id="process" className="py-32 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
            Our process is <span className="font-serif-italic">simple and clear.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-px bg-zinc-200 z-0"></div>

          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 100} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-zinc-100 flex items-center justify-center text-xl font-serif-italic text-zinc-400 mb-6 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-500 max-w-[200px]">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          <Reveal className="soft-card p-12 flex flex-col justify-center">
            <iconify-icon icon="solar:quote-left-bold-duotone" width="48" className="text-zinc-300 mb-8"></iconify-icon>
            <h3 className="text-2xl lg:text-3xl font-medium text-zinc-900 leading-snug mb-10">
              "Working with Eddie was a game-changer. They didn't just build a website; they elevated our entire brand identity to a <span className="font-serif-italic">premium standard.</span>"
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80" alt="Sarah Jenkins" className="w-full h-full object-cover"/>
              </div>
              <div>
                <p className="font-bold text-zinc-900">Sarah Jenkins</p>
                <p className="text-sm text-zinc-500">Founder, Glowthins</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="soft-card overflow-hidden h-[500px] relative bg-zinc-900 group">
            <img 
              src="https://images.unsplash.com/photo-1542282811-943ef1a6470b?w=800&q=80" 
              alt="Studio Shot" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-zinc-900 transition-all duration-300">
                <iconify-icon icon="solar:play-bold" width="24" className="ml-1"></iconify-icon>
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "How long does a typical project take?", a: "Most editorial and e-commerce websites take between 6 to 8 weeks from discovery to final launch, ensuring meticulous attention to detail." },
    { q: "Do you build on standard CMS platforms?", a: "We primarily build custom React/Vite frontends connected to headless CMS platforms like Sanity or Shopify for ultimate performance and flexibility." },
    { q: "What is your pricing structure?", a: "We offer project-based pricing tailored to your specific needs. Our minimum engagement starts at $10k to ensure we can deliver our standard of quality." }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
            Frequently <span className="font-serif-italic">asked.</span>
          </h2>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 100} className="soft-card overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full text-left px-8 py-6 flex items-center justify-between font-bold text-zinc-900 hover:bg-zinc-50 transition-colors"
              >
                <span className="text-[17px]">{faq.q}</span>
                <div className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500",
                  openIndex === i ? "rotate-45 text-zinc-900 bg-zinc-100" : "text-zinc-400"
                )}>
                  <iconify-icon icon="solar:add-circle-bold-duotone" width="28"></iconify-icon>
                </div>
              </button>
              <div 
                className={clsx(
                  "overflow-hidden transition-all duration-500 ease-in-out bg-zinc-50/50",
                  openIndex === i ? "max-h-40 opacity-100 border-t border-black/5" : "max-h-0 opacity-0"
                )}
              >
                <p className="px-8 py-6 text-[15px] font-medium text-zinc-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Text CTA */}
          <Reveal className="soft-card p-12 lg:p-16 flex flex-col justify-center bg-[#FF6B00] border-none text-white">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to <span className="font-serif-italic">stand out?</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-sm">
              Let's create a digital experience that captures attention and drives measurable growth.
            </p>
            <div className="mt-auto">
              <button className="bg-white text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-colors flex items-center gap-2 w-fit">
                Start your project <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
              </button>
            </div>
          </Reveal>

          {/* Visual CTA */}
          <Reveal delay={200} className="soft-card bg-zinc-900 border-none overflow-hidden h-[400px] lg:h-auto relative flex items-center justify-center">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
             
             {/* Tilted Phone */}
             <div className="relative w-64 h-96 rounded-[2rem] border-8 border-zinc-800 bg-white shadow-2xl overflow-hidden transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-full h-full p-4 flex flex-col gap-4">
                  <div className="w-full h-32 bg-zinc-100 rounded-xl animate-pulse"></div>
                  <div className="w-3/4 h-6 bg-zinc-100 rounded-md animate-pulse"></div>
                  <div className="w-1/2 h-4 bg-zinc-100 rounded-md animate-pulse"></div>
                  <div className="mt-auto w-full h-12 bg-zinc-900 rounded-xl"></div>
                </div>
             </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}