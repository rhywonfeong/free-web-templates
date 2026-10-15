import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: "How does your AI-driven process differ from traditional agencies?",
      a: "We use AI copilots and generative tools to automate boilerplate code, initial design drafts, and data analysis. This allows our senior human talent to focus entirely on custom business logic, UX strategy, and high-level architecture, resulting in faster delivery and higher quality."
    },
    {
      q: "What technologies do you specialize in?",
      a: "Our core stack is built around React, Next.js, Node.js, and modern serverless architectures (Vercel, AWS). We also specialize in integrating AI APIs like OpenAI, Anthropic, and custom machine learning models into web applications."
    },
    {
      q: "How long does a typical project take?",
      a: "While timelines vary based on complexity, our agile approach typically delivers MVPs (Minimum Viable Products) within 4-6 weeks, and comprehensive enterprise platforms within 3-4 months."
    },
    {
      q: "Do you offer ongoing support and maintenance?",
      a: "Yes. We offer continuous integration, monitoring, and retainer-based optimization packages to ensure your digital product scales seamlessly as your business grows."
    }
  ]

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#131920]/50" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-gray-900 dark:text-white mb-12">
          Frequently asked questions.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border ${openIndex === idx ? 'border-[#EF295A]/30 dark:border-[#EF295A]/30 bg-white dark:bg-[#131920]' : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 bg-white/50 dark:bg-transparent'} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="text-base font-medium text-gray-900 dark:text-white">{faq.q}</span>
                <iconify-icon 
                  icon="solar:alt-arrow-down-linear" 
                  className={`text-gray-500 dark:text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#EF295A]' : ''}`}
                  width="20"
                ></iconify-icon>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}