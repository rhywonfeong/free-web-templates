import { useState } from 'react';
import RevealText from './RevealText';

const faqs = [
  {
    question: "What exactly is Aether's spatial network?",
    answer: "Aether is a decentralized spatial infrastructure that allows developers to host, scale, and render 3D interfaces and digital ecosystems globally with near-zero latency using edge-distributed nodes."
  },
  {
    question: "How do I deploy a local node?",
    answer: "You can initialize a local node via our CLI tool. Running `aether init` will containerize your current spatial configuration and instantly broadcast it to your local subnet for testing before pushing to the global grid."
  },
  {
    question: "Is the framework compatible with existing React applications?",
    answer: "Yes. Aether provides a seamless integration layer for React, Three.js, and WebGL. You can wrap your existing components in an <AetherProvider> to automatically inject spatial coordinates and network state."
  },
  {
    question: "What are the latency expectations for global clusters?",
    answer: "Through our proprietary quantum routing protocol, active clusters typically maintain sub-20ms latency globally. Data is dynamically cached at the node physically closest to the user requesting the spatial render."
  },
  {
    question: "How does pricing scale with node count?",
    answer: "Billing is dynamically calculated based on continuous uptime and bandwidth throughput rather than a strict node count. You can spin up thousands of ephemeral nodes for a traffic spike and only pay for the active compute seconds."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto px-6 z-10 relative">
      <div className="flex flex-col items-center text-center mb-12">
        <RevealText 
          text="Frequently Asked Questions." 
          className="text-3xl md:text-[3.5rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)] mb-4" 
        />
        <p className="text-base text-zinc-400 font-geist font-light max-w-lg">
          Everything you need to know about scaling your spatial architecture.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className={`relative group rounded-2xl p-[1px] transition-all duration-500 overflow-hidden ${
                isOpen 
                  ? 'bg-gradient-to-b from-zinc-500/40 via-zinc-700/20 to-black/80 shadow-[0_8px_20px_rgba(0,0,0,0.4)]' 
                  : 'bg-gradient-to-b from-white/10 to-transparent hover:from-white/20'
              }`}
            >
              <div className="absolute inset-[1px] bg-zinc-950/90 backdrop-blur-xl rounded-[calc(1rem-1px)] z-0"></div>
              
              <div className="relative z-10">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-lg font-geist tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? 'bg-white/10 border-white/20 text-white rotate-180' 
                      : 'border-white/5 text-zinc-500 group-hover:text-zinc-300 group-hover:border-white/10'
                  }`}>
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 text-zinc-400 font-geist leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}