import { useState } from 'react';
import RevealText from './RevealText';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Node Base",
      price: "Free",
      description: "Essential tools for local spatial environments and single nodes.",
      features: [
        "Up to 3 local nodes",
        "Standard spatial rendering",
        "Community support",
        "Basic asset library",
        "1GB local storage"
      ],
      buttonText: "Start for free",
      isPopular: false
    },
    {
      name: "Quantum Pro",
      price: isAnnual ? "$39" : "$49",
      period: "/mo",
      description: "Advanced capabilities for distributed networks and professional creators.",
      features: [
        "Unlimited network nodes",
        "High-fidelity WebGL exports",
        "Priority 24/7 support",
        "Full spatial asset library",
        "100GB cloud storage"
      ],
      buttonText: "Upgrade to Pro",
      isPopular: true
    },
    {
      name: "Aether Enterprise",
      price: "Custom",
      description: "Bespoke architecture and dedicated infrastructure for global scale.",
      features: [
        "Dedicated rendering clusters",
        "Custom API integrations",
        "SLA & Dedicated success manager",
        "On-premise deployment options",
        "Unlimited storage"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <div className="z-10 w-full max-w-[1200px] mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">
      <div className="flex flex-col items-center text-center mb-16">
        <RevealText 
          text="Scale your spatial network." 
          className="text-4xl md:text-[4rem] leading-[1.05] text-white font-thin tracking-tighter [text-shadow:0_4px_8px_rgba(0,0,0,0.6)] mb-4" 
        />
        <p className="text-zinc-400 max-w-2xl text-lg font-light">
          Choose the architecture that fits your digital ecosystem. Transparent pricing for individuals and enterprises.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-4 z-10 relative">
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-zinc-400'}`}>
            Monthly
          </span>
          <button 
            type="button" 
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black ${isAnnual ? 'bg-indigo-500' : 'bg-zinc-700'}`} 
            role="switch" 
            aria-checked={isAnnual}
          >
            <span className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></span>
          </button>
          <span className={`text-sm font-medium flex items-center transition-colors ${isAnnual ? 'text-white' : 'text-zinc-400'}`}>
            Annually 
            <span className="ml-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 px-2 py-0.5 text-[10px] font-semibold text-indigo-400 uppercase tracking-wide">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, i) => {
          if (plan.isPopular) {
            return (
              <div key={i} className="relative h-full">
                <div className="absolute top-0 right-8 transform -translate-y-1/2 z-20">
                  <span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(79,70,229,0.4)] tracking-wide uppercase">
                    Most Popular
                  </span>
                </div>
                
                <div className="relative h-full group rounded-[2rem] p-[1px] overflow-hidden bg-gradient-to-b from-indigo-500/50 via-zinc-700/30 to-black/80 shadow-[0_12px_30px_rgba(79,70,229,0.15)]">
                  <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-800/90 to-zinc-950/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none z-0"></div>
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                      <p className="text-sm text-zinc-400 font-light min-h-[40px]">{plan.description}</p>
                    </div>
                    <div className="mb-8 flex items-end gap-1">
                      <span className="text-4xl lg:text-5xl font-light tracking-tight text-white">{plan.price}</span>
                      {plan.period && <span className="text-zinc-500 mb-1">{plan.period}</span>}
                    </div>
                    <ul className="flex flex-col gap-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                          <iconify-icon icon="solar:check-circle-bold" class="text-lg mt-0.5 text-indigo-400"></iconify-icon>
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3.5 px-6 rounded-full text-sm font-medium transition-all duration-300 tracking-tight shadow-[0_4px_10px_rgba(0,0,0,0.2)] bg-white text-black hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98]">
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={i} className="relative group rounded-[2rem] p-[1px] overflow-hidden bg-gradient-to-b from-zinc-600/30 via-zinc-800/10 to-black/80 shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-800/90 to-zinc-950/90 backdrop-blur-xl rounded-[calc(2rem-1px)] z-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-400 font-light min-h-[40px]">{plan.description}</p>
                </div>
                <div className="mb-8 flex items-end gap-1">
                  <span className="text-4xl lg:text-5xl font-light tracking-tight text-white">{plan.price}</span>
                  {plan.period && <span className="text-zinc-500 mb-1">{plan.period}</span>}
                </div>
                <ul className="flex flex-col gap-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <iconify-icon icon="solar:check-circle-bold" class="text-lg mt-0.5 text-zinc-500"></iconify-icon>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 px-6 rounded-full text-sm font-medium transition-all duration-300 tracking-tight shadow-[0_4px_10px_rgba(0,0,0,0.2)] bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 hover:scale-[1.02] active:scale-[0.98]">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}