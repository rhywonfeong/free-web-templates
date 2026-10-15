import { useState } from 'react';
import Button from '../components/Button';
import clsx from 'clsx';

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full text-left py-6 flex justify-between items-center focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-slate-900 pr-8 group-hover:text-indigo-600 transition-colors">
          {question}
        </span>
        <span className={clsx(
          "text-slate-400 transition-transform duration-300 shrink-0",
          isOpen ? "rotate-180" : ""
        )}>
          <iconify-icon icon="solar:alt-arrow-down-linear" width="24" height="24"></iconify-icon>
        </span>
      </button>
      <div 
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What types of businesses do you work with?",
      a: "We primarily work with small and medium businesses, startups, and teams that need smarter systems, workflow automation, or custom web-based solutions."
    },
    {
      q: "Do you build fully custom software?",
      a: "Yes. We create tailored web applications and technical solutions designed around your unique business needs and workflow rather than forcing you into a generic template."
    },
    {
      q: "Can you automate our existing process?",
      a: "In many cases, yes. We can review your current workflow, analyze your toolstack, and identify areas where automation can reduce manual work and improve efficiency without disrupting your business."
    },
    {
      q: "Do you work with existing tools and platforms?",
      a: "Yes. We can often integrate or improve your current setup rather than replacing everything from scratch. We work with Zapier, custom APIs, common CRMs, and more."
    },
    {
      q: "How do projects usually start?",
      a: "Most projects begin with a free discovery conversation to understand your workflow, challenges, and goals. From there, we map out a proposed solution."
    },
    {
      q: "Do you offer support after launch?",
      a: "Yes. Depending on the project, ongoing support, maintenance, and refinement retainers can be included to ensure the system scales with you."
    },
    {
      q: "How do I know what solution I need?",
      a: "You don’t need to have the technical answer before contacting us. That's our job. We help identify the right approach based on your business problems, not technical jargon."
    }
  ];

  return (
    <div className="pb-24">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-300">
            Answers to common questions about our services, process, and how we work.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </section>

      <section className="text-center max-w-2xl mx-auto px-4">
        <p className="text-slate-600 mb-6">Still have questions?</p>
        <Button to="/contact" variant="outline">Contact Us Directly</Button>
      </section>
    </div>
  );
}