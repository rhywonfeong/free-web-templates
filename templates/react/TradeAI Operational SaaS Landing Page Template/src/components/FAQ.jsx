import React, { useState } from 'react';
import clsx from 'clsx';

const faqs = [
  {
    question: "How long does the setup and ingest process take?",
    answer: "Typically 3-5 working days. Once you secure your allocation, we ask for your current supplier list (e.g., Egger, Kronospan, Hafele) and pricing matrix. We handle the full data ingest so the system is ready to quote accurately from day one."
  },
  {
    question: "What happens after the 3-month pilot?",
    answer: "Pilot users will be offered a locked-in founding rate for the ongoing SaaS subscription, which will be significantly lower than the public launch price. You retain all your generated assets and historical project data."
  },
  {
    question: "Do I need to be technically skilled to use it?",
    answer: "Not at all. TradeAI operates entirely through natural conversation. You simply speak or type your site notes as if talking to an assistant, and the system automatically structures the portals, quotes, and evidence boards behind the scenes."
  },
  {
    question: "Can I use my own bespoke material costs?",
    answer: "Yes. During onboarding, we calibrate the system to your specific profit margins, standard sheet rates, and hourly workshop costs. The generated quotes reflect your actual business economics, not generic averages."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative max-w-3xl mx-auto px-6 py-24 animate-on-scroll" id="faq">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">Common Questions</span>
        <h2 className="text-3xl md:text-4xl font-display text-white tracking-tighter mt-6">
          Pilot Allocation Details
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={clsx(
              "border rounded-2xl overflow-hidden transition-all duration-300 group",
              openIndex === idx 
                ? "bg-white/[0.04] border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]" 
                : "bg-neutral-950 border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={clsx("text-sm md:text-base font-medium transition-colors", openIndex === idx ? "text-emerald-300" : "text-neutral-200 group-hover:text-white")}>
                {faq.question}
              </span>
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0", openIndex === idx ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white")}>
                <iconify-icon 
                  icon="lucide:plus" 
                  class={clsx(
                    "transition-transform duration-500",
                    openIndex === idx && "rotate-45"
                  )}
                ></iconify-icon>
              </div>
            </button>
            <div 
              className={clsx(
                "grid transition-all duration-300 ease-in-out",
                openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed pt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}