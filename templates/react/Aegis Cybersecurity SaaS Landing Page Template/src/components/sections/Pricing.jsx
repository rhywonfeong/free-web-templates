import React, { useState } from 'react';

const Pricing = () => {
  const [isAnnually, setIsAnnually] = useState(true);
  const [animatePrice, setAnimatePrice] = useState(false);

  const handleToggle = (annually) => {
    if (isAnnually === annually) return;
    setAnimatePrice(true);
    setTimeout(() => {
      setIsAnnually(annually);
      setAnimatePrice(false);
    }, 150);
  };

  return (
    <section className="bg-[#030706] text-slate-300 antialiased relative selection:bg-emerald-500/30 selection:text-emerald-200 border-t border-white/5 overflow-hidden">
      
      {/* Subtle Grid Background & Ambient Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', 
          backgroundSize: '64px 64px' 
        }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32 relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
          {/* Sticky Sidebar: Context & Controls */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8 mb-16 lg:mb-0">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#070D0A] border border-white/10 text-slate-400 text-xs font-medium uppercase tracking-widest">
                <iconify-icon icon="solar:shield-network-linear"></iconify-icon>
                Flexible Protection
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                Enterprise defense, <span className="text-emerald-500">scaled to fit.</span>
              </h2>
              <p className="text-base text-slate-400 font-normal leading-relaxed">
                Align your security costs with your actual network throughput. Upgrade seamlessly as your infrastructure and endpoint needs grow.
              </p>
            </div>

            {/* Sleek Billing Toggle */}
            <div className="flex flex-col gap-3 mt-4">
              <div 
                className="inline-flex p-1 bg-[#050C09] border border-white/10 rounded-full relative w-max" 
                style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }}
              >
                {/* Sliding Indicator */}
                <div 
                  className="absolute top-1 bottom-1 w-[100px] bg-slate-800/80 border border-slate-700/50 rounded-full transition-transform duration-300 ease-out shadow-sm" 
                  style={{ transform: isAnnually ? 'translateX(100px)' : 'translateX(0)' }}
                ></div>
                
                <button 
                  onClick={() => handleToggle(false)}
                  className={`relative w-[100px] text-xs font-medium z-10 py-2.5 transition-colors duration-300 ${!isAnnually ? 'text-white' : 'text-slate-400 hover:text-slate-300'}`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => handleToggle(true)}
                  className={`relative w-[100px] text-xs font-medium z-10 py-2.5 transition-colors duration-300 ${isAnnually ? 'text-white' : 'text-slate-400 hover:text-slate-300'}`}
                >
                  Annually
                </button>
              </div>
              <p className="text-xs text-emerald-400 font-medium tracking-wide flex items-center gap-1.5 ml-2">
                <iconify-icon icon="solar:tag-linear"></iconify-icon>
                Includes 2 months free
              </p>
            </div>
          </div>

          {/* Horizontal Tier Stack */}
          <div className="lg:col-span-8 flex flex-col gap-6">
              
            {/* Standard Tier */}
            <div className="group flex flex-col sm:flex-row p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 gap-8 sm:items-center relative overflow-hidden backdrop-blur-sm">
              <div className="sm:w-[45%] flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-white flex items-center gap-2 mb-1">
                    <iconify-icon icon="solar:shield-user-linear" className="text-slate-500"></iconify-icon>
                    Standard Perimeter
                  </h3>
                  <p className="text-sm text-slate-400 font-normal">Baseline zero-trust architecture for early-stage deployments.</p>
                </div>
                <div className="flex items-end gap-1.5 mt-2 overflow-hidden">
                  <span 
                    className={`text-4xl font-medium tracking-tight text-white transition-all duration-150 ease-out ${animatePrice ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`} 
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    ${isAnnually ? '499' : '599'}
                  </span>
                  <span className="text-sm text-slate-500 mb-1">/mo</span>
                </div>
              </div>
              
              <div className="sm:w-[55%] border-t sm:border-t-0 sm:border-l border-white/5 pt-6 sm:pt-0 sm:pl-8 flex flex-col gap-6">
                <ul className="flex flex-col gap-3.5 text-sm text-slate-300 font-normal">
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-500 text-lg mt-0.5"></iconify-icon>
                    Up to 500 protected endpoints
                  </li>
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-500 text-lg mt-0.5"></iconify-icon>
                    Standard WAF & DDoS mitigation
                  </li>
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-500 text-lg mt-0.5"></iconify-icon>
                    7-day telemetry retention
                  </li>
                </ul>
                <button className="w-full sm:w-max px-6 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-medium border border-slate-700 hover:bg-slate-700 transition-colors">
                  Deploy Standard
                </button>
              </div>
            </div>

            {/* Advanced Tier (Highlighted) */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-b from-emerald-500/40 via-emerald-800/10 to-white/5 shadow-xl shadow-emerald-900/10 transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-8 z-10 -translate-y-1/2 bg-emerald-500 text-black text-[10px] px-3 py-1 rounded-full font-bold tracking-widest uppercase shadow-lg shadow-emerald-500/20">
                Recommended
              </div>
              
              <div className="flex flex-col sm:flex-row p-6 md:p-8 rounded-[calc(2rem-1px)] bg-[#050C09]/90 backdrop-blur-xl gap-8 sm:items-center relative overflow-hidden">
                {/* Subtle background flare */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>

                <div className="sm:w-[45%] flex flex-col gap-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-white flex items-center gap-2 mb-1">
                      <iconify-icon icon="solar:radar-2-linear" className="text-emerald-400"></iconify-icon>
                      Advanced Defense
                    </h3>
                    <p className="text-sm text-emerald-300/80 font-normal">AI-driven threat mitigation for high-traffic environments.</p>
                  </div>
                  <div className="flex items-end gap-1.5 mt-2 overflow-hidden">
                    <span 
                      className={`text-5xl font-medium tracking-tight text-white transition-all duration-150 ease-out ${animatePrice ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`} 
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      ${isAnnually ? '1499' : '1899'}
                    </span>
                    <span className="text-sm text-slate-500 mb-1.5">/mo</span>
                  </div>
                </div>
                
                <div className="sm:w-[55%] border-t sm:border-t-0 sm:border-l border-emerald-500/20 pt-6 sm:pt-0 sm:pl-8 flex flex-col gap-6 relative z-10">
                  <ul className="flex flex-col gap-3.5 text-sm text-slate-200 font-normal">
                    <li className="flex items-start gap-3">
                      <iconify-icon icon="solar:check-circle-linear" className="text-emerald-400 text-lg mt-0.5"></iconify-icon>
                      Unlimited protected endpoints
                    </li>
                    <li className="flex items-start gap-3">
                      <iconify-icon icon="solar:check-circle-linear" className="text-emerald-400 text-lg mt-0.5"></iconify-icon>
                      Behavioral heuristic AI engine
                    </li>
                    <li className="flex items-start gap-3">
                      <iconify-icon icon="solar:check-circle-linear" className="text-emerald-400 text-lg mt-0.5"></iconify-icon>
                      30-day telemetry retention
                    </li>
                    <li className="flex items-start gap-3">
                      <iconify-icon icon="solar:check-circle-linear" className="text-emerald-400 text-lg mt-0.5"></iconify-icon>
                      Automated incident response
                    </li>
                  </ul>
                  <button className="w-full sm:w-max px-6 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors shadow-sm">
                    Scale to Advanced
                  </button>
                </div>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="group flex flex-col sm:flex-row p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 gap-8 sm:items-center relative overflow-hidden backdrop-blur-sm">
              <div className="sm:w-[45%] flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-white flex items-center gap-2 mb-1">
                    <iconify-icon icon="solar:server-square-update-linear" className="text-slate-500"></iconify-icon>
                    Zero-Trust Enterprise
                  </h3>
                  <p className="text-sm text-slate-400 font-normal">Global scope with dedicated SOC integration.</p>
                </div>
                <div className="flex items-end gap-1.5 mt-2 overflow-hidden">
                  <span 
                    className={`text-4xl font-medium tracking-tight text-white transition-all duration-150 ease-out ${animatePrice ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`} 
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    ${isAnnually ? '4999' : '5999'}
                  </span>
                  <span className="text-sm text-slate-500 mb-1">/mo</span>
                </div>
              </div>
              
              <div className="sm:w-[55%] border-t sm:border-t-0 sm:border-l border-white/5 pt-6 sm:pt-0 sm:pl-8 flex flex-col gap-6">
                <ul className="flex flex-col gap-3.5 text-sm text-slate-300 font-normal">
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-500 text-lg mt-0.5"></iconify-icon>
                    Dedicated bare-metal instances
                  </li>
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-500 text-lg mt-0.5"></iconify-icon>
                    Custom threat models
                  </li>
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-500 text-lg mt-0.5"></iconify-icon>
                    Unlimited telemetry storage
                  </li>
                  <li className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-slate-500 text-lg mt-0.5"></iconify-icon>
                    24/7 dedicated SOC channel
                  </li>
                </ul>
                <button className="w-full sm:w-max px-6 py-2.5 rounded-xl bg-transparent border border-slate-700 text-slate-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;