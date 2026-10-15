import React, { useState } from 'react';

const faqs = [
  {
    q: 'WHAT SERVICES DO YOU OFFER?',
    a: 'We offer a comprehensive range of digital production services including app design, web design, product design, and brand identity systems tailored to elevate your business.'
  },
  {
    q: 'HOW DO WE START A PROJECT?',
    a: 'Starting is simple. Reach out through our contact page to schedule an initial consultation where we discuss your goals, scope, and vision.'
  },
  {
    q: 'DO YOU PROVIDE ONGOING SUPPORT?',
    a: 'Yes, we offer continuous maintenance and support packages post-launch to ensure your digital products remain secure, updated, and optimized.'
  },
  {
    q: 'WHAT IS YOUR TYPICAL TIMELINE?',
    a: 'Timelines vary based on project complexity. A standard web design project takes 4-8 weeks, while full product design can take 2-4 months.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="xl:px-0 px-5">
      <div className="container border-x xl:px-15 px-5 lg:py-20 py-8">
        <div className="flex md:flex-row flex-col gap-4 justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-foreground"></span>
            <h6 className="uppercase font-medium text-base font-mono">Know us better</h6>
          </div>
          <h2 className="xl:text-6xl lg:text-5xl text-3xl font-semibold uppercase max-w-3xl tracking-tighter">
            faq.
          </h2>
        </div>
      </div>

      <div className="container border-t border-x border-b">
        <div className="flex lg:flex-row flex-col">
          <div className="relative flex-1 lg:border-r">
            <img 
              alt="faq" 
              loading="lazy" 
              className="object-cover w-full h-full"
              src="https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fbackgrounds%2Ffaq.webp&w=3840&q=75"
            />
          </div>
          <div className="max-w-3xl w-full">
            <div className="flex flex-col w-full border-0">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="border-b last:border-b-0 p-7 flex flex-col gap-3">
                    <h3 className="flex">
                      <button 
                        type="button" 
                        onClick={() => toggleFAQ(idx)}
                        className="group relative flex flex-1 items-center justify-between transition-all outline-none text-left text-base font-medium tracking-wide uppercase hover:no-underline text-card-foreground cursor-pointer"
                      >
                        {faq.q}
                        {isOpen ? (
                          <iconify-icon icon="solar:minus-linear" class="size-5 shrink-0 ml-auto"></iconify-icon>
                        ) : (
                          <iconify-icon icon="solar:add-linear" class="size-5 shrink-0 ml-auto"></iconify-icon>
                        )}
                      </button>
                    </h3>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}