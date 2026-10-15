import React, { useState } from 'react'
import FlashlightCard from './ui/FlashlightCard'

const FaqSection = () => {
  const faqs = [
    {
      question: "Can you guarantee 99.99% recursive uptime?",
      answer: "Our recursive neural topology autonomously reroutes data streams through redundant nodes, ensuring continuous availability even during catastrophic localized failures."
    },
    {
      question: "Where are the neural data nodes geographically located?",
      answer: "Nodes are distributed across 40+ tier-4 data centers globally, with primary clusters in Tokyo, Frankfurt, and Northern Virginia to minimize signal latency."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="z-20 w-full border-white/5 border-t relative">
      <div className="lg:px-[6%] max-w-[1600px] mr-auto ml-auto pr-6 pl-6">
        
        {/* FAQ Segment */}
        <div className="max-w-3xl pt-24 pb-24">
          <div className="space-y-0">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div key={idx} className="group border-white/5 border-b">
                  <button 
                    className="w-full pt-8 pb-8 flex items-center justify-between cursor-pointer text-left focus:outline-none" 
                    onClick={() => toggleFaq(idx)}
                  >
                    <h3 className="text-lg font-light text-white/90 group-hover:text-white transition-colors">{faq.question}</h3>
                    <iconify-icon 
                      icon="solar:add-circle-bold-duotone" 
                      class={`text-2xl text-white/30 group-hover:text-purple-400 transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    ></iconify-icon>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/60 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Banner with Flashlight Effect */}
        <FlashlightCard className="overflow-hidden w-full rounded-sm mb-32 relative group">
          <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20 mix-blend-screen" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.15), transparent 40%)' }}></div>

          <svg className="absolute top-0 right-0 h-full w-full opacity-20 pointer-events-none z-0" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="850" cy="200" r="150" stroke="white" strokeWidth="1" strokeDasharray="4 4"></circle>
              <circle cx="850" cy="200" r="280" stroke="white" strokeWidth="0.5" opacity="0.5"></circle>
              <path d="M0 400 C 300 400, 600 200, 1000 200" stroke="white" strokeWidth="0.5" fill="none"></path>
              <circle cx="750" cy="300" r="2" fill="white"></circle>
          </svg>

          <div className="lg:px-16 lg:py-20 flex flex-col lg:flex-row lg:items-end bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a5c78a4-2c8f-45ca-be6a-164d15d324bc_3840w.webp)] bg-cover z-10 pt-16 pr-8 pb-16 pl-8 relative gap-x-12 gap-y-12 items-start justify-between" style={{ position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))' }}>
              <div className="max-w-xl relative z-30">
                  <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-12 leading-[1.1]">
                      Unsure of the optimal
                      <span className="opacity-70"> topology for you?</span>
                  </h2>

                  <a href="#" className="group relative inline-flex flex-col justify-between w-64 h-28 border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/30 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] transition-all duration-500 rounded-sm p-5 overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>
                       <div className="w-full flex justify-end relative z-10">
                          <iconify-icon icon="solar:arrow-right-up-linear" class="text-xl text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></iconify-icon>
                       </div>
                       <span className="text-sm font-medium uppercase tracking-wider text-white relative z-10">Initiate Consult</span>
                  </a>
              </div>

              <div className="max-w-sm pb-2 relative z-30">
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                      Our dedicated architecture team is standing by to assist with custom deployment strategies and recursive scaling.
                  </p>
              </div>
          </div>
        </FlashlightCard>

      </div>
    </section>
  )
}

export default FaqSection