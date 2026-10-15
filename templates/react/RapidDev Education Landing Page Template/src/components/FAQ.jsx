import React, { useState } from 'react';

const faqs = [
  {
    q: "Do I need any prior coding experience?",
    a: "Not at all! Our courses are designed for absolute beginners. We teach you the logic of programming visually, so you don't need to know any syntax or previous computer science concepts."
  },
  {
    q: "How long does it take to complete a bootcamp?",
    a: "Most students complete our core bootcamps in 4 to 8 weeks, depending on whether they study part-time or full-time. You have lifetime access to the materials, so you can learn at your own pace."
  },
  {
    q: "What kind of apps can I actually build with no-code?",
    a: "Almost anything! Marketplaces like Airbnb, social networks, SaaS tools, CRM systems, and internal business dashboards are all perfectly suited for no-code platforms like Bubble and Webflow."
  },
  {
    q: "Will I get a certificate upon completion?",
    a: "Yes, you'll receive a verified RapidDev completion certificate that you can add to your LinkedIn profile and resume to showcase your new technical skills to employers."
  },
  {
    q: "Do you offer refunds if I'm not satisfied?",
    a: "We offer a 14-day money-back guarantee. If you decide the bootcamp isn't the right fit for you within the first two weeks, we'll refund your full tuition, no questions asked."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white pt-24 pb-24" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-[#E76F9B] font-medium text-xs tracking-wider mb-3 block uppercase">FAQ</span>
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333]">Everything you need to know</h2>
        </div>
        
        <div className="space-y-2 reveal delay-100">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className="border-b last:border-0 border-gray-100">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="faq-btn flex group focus:outline-none text-left bg-gray-100 w-full py-6 items-center justify-between px-4 rounded-xl"
                >
                  <span className="font-medium text-base md:text-lg text-[#333333] group-hover:text-[#E76F9B] transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#FDE2E4] transition-colors bg-gray-50 ml-4">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className={`group-hover:text-[#E76F9B] transition-transform duration-300 text-gray-400 ${isOpen ? 'rotate-180' : ''}`}
                    ></iconify-icon>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out px-4 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-500 text-sm leading-relaxed pb-6 pt-2">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}