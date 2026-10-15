import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Pricing Engine</h2>
        <p className="text-sm text-white/50 max-w-xl mx-auto">Transparent, tiered investment structures designed for optimal resource allocation.</p>
      </div>

      {/* CSS Tab Logic Container */}
      <div className="relative w-full">
        
        {/* Radio Inputs (Hidden) */}
        <input type="radio" name="pricing-view" id="view-it" className="peer/it hidden" defaultChecked />
        <input type="radio" name="pricing-view" id="view-mkt" className="peer/mkt hidden" />

        {/* Tab Triggers */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 glass-panel rounded-full">
            <label htmlFor="view-it" className="cursor-pointer px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 peer-checked/it:bg-white peer-checked/it:text-black text-white/50 hover:text-white">
              IT Consulting
            </label>
            <label htmlFor="view-mkt" className="cursor-pointer px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 peer-checked/mkt:bg-white peer-checked/mkt:text-black text-white/50 hover:text-white">
              Digital Marketing
            </label>
          </div>
        </div>

        {/* IT Consulting Content Grid */}
        <div className="hidden peer-checked/it:grid grid-cols-1 lg:grid-cols-3 gap-6 animate-[fadeIn_0.5s_ease-in-out]">
          
          {/* Web Dev Tiers */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col lg:col-span-3 border-brand-blue/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-white mb-1">Web Development</h3>
                <p className="text-sm text-white/50">Next.js architecture with integrated SEO.</p>
              </div>
              <span className="mt-4 sm:mt-0 text-xs font-medium bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full border border-brand-blue/20">Core Service</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                <div className="text-xs text-white/50 uppercase tracking-widest mb-2 font-medium">Basic</div>
                <div className="text-2xl font-medium tracking-tight mb-4">₹14,999</div>
                <ul className="space-y-3 text-sm text-white/70 mb-6">
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> 3 Pages</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> Basic Automation</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> Foundational SEO</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> Domain Setup</li>
                </ul>
              </div>
              {/* Intermediate */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-white/10 text-[10px] uppercase tracking-wider px-2 py-1 rounded-bl-lg font-medium text-white/80">Popular</div>
                <div className="text-xs text-white/50 uppercase tracking-widest mb-2 font-medium">Intermediate</div>
                <div className="text-2xl font-medium tracking-tight mb-4">₹24,999</div>
                <ul className="space-y-3 text-sm text-white/70 mb-6">
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> 5-7 Pages</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> Mid-level Automation</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> Technical SEO</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> Domain Setup</li>
                </ul>
              </div>
              {/* Advance */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                <div className="text-xs text-white/50 uppercase tracking-widest mb-2 font-medium">Advance</div>
                <div className="text-2xl font-medium tracking-tight mb-4">₹44,999</div>
                <ul className="space-y-3 text-sm text-white/70 mb-6">
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> 9+ Pages</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> High-level Automation</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> Advanced SEO + Schema</li>
                  <li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" className="text-brand-blue"></iconify-icon> Domain Setup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other IT Services List */}
          <div className="glass-panel rounded-3xl p-8 lg:col-span-3">
            <h3 className="text-lg font-medium tracking-tight text-white mb-6">Advanced IT Systems</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
              
              {/* Item */}
              <div className="group border-l-2 border-white/10 pl-4 hover:border-brand-blue transition-colors">
                <div className="text-sm font-medium text-white/90 mb-1">Mobile App Development</div>
                <div className="text-xs text-white/50 mb-2">Basic to Advance Frameworks</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">₹1.5L</span> <span className="text-[10px] text-white/40">→ ₹5.5L+</span>
                </div>
              </div>

              {/* Item */}
              <div className="group border-l-2 border-white/10 pl-4 hover:border-brand-blue transition-colors">
                <div className="text-sm font-medium text-white/90 mb-1">AI Automation</div>
                <div className="text-xs text-white/50 mb-2">Workflow optimization &amp; LLMs</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">₹30k</span> <span className="text-[10px] text-white/40">→ ₹1.5L</span>
                </div>
              </div>

              {/* Item */}
              <div className="group border-l-2 border-white/10 pl-4 hover:border-brand-blue transition-colors">
                <div className="text-sm font-medium text-white/90 mb-1">Technical SEO</div>
                <div className="text-xs text-white/50 mb-2">Monthly indexing &amp; auditing</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">₹12k</span> <span className="text-[10px] text-white/40">/mo → ₹45k/mo</span>
                </div>
              </div>

              {/* Item */}
              <div className="group border-l-2 border-white/10 pl-4 hover:border-brand-blue transition-colors">
                <div className="text-sm font-medium text-white/90 mb-1">UI/UX Design</div>
                <div className="text-xs text-white/50 mb-2">Wireframing to High-Fidelity</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">₹20k</span> <span className="text-[10px] text-white/40">→ ₹1L</span>
                </div>
              </div>

              {/* Item */}
              <div className="group border-l-2 border-white/10 pl-4 hover:border-brand-blue transition-colors">
                <div className="text-sm font-medium text-white/90 mb-1">Cloud &amp; DevOps</div>
                <div className="text-xs text-white/50 mb-2">Setup &amp; Infrastructure Mgt</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">₹25k</span> <span className="text-[10px] text-white/40">Setup | ₹60k Mgt</span>
                </div>
              </div>

              {/* Item */}
              <div className="group border-l-2 border-white/10 pl-4 hover:border-brand-blue transition-colors">
                <div className="text-sm font-medium text-white/90 mb-1">Custom AI Agents</div>
                <div className="text-xs text-white/50 mb-2">Starter Bots to Enterprise</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">₹90k</span> <span className="text-[10px] text-white/40">→ ₹2L</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Digital Marketing Content Grid */}
        <div className="hidden peer-checked/mkt:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeIn_0.5s_ease-in-out]">
          
          {/* Card 1 */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <iconify-icon icon="solar:videocamera-record-linear" className="text-white text-lg"></iconify-icon>
            </div>
            <h3 className="text-lg font-medium tracking-tight mb-2">Video Production</h3>
            <p className="text-xs text-white/50 mb-6 flex-grow">End-to-end shoot and edit processes optimized for short-form retention.</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-sm text-white/70">Basic</span>
                <span className="text-sm font-medium">₹15k <span className="text-[10px] text-white/40 font-normal">/mo</span></span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-sm text-white/70">Intermediate</span>
                <span className="text-sm font-medium">₹35k <span className="text-[10px] text-white/40 font-normal">/mo</span></span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-white/70">Advance</span>
                <span className="text-sm font-medium">₹80k <span className="text-[10px] text-white/40 font-normal">/mo</span></span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col border-brand-lime/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-lime/10 blur-2xl rounded-full"></div>
            <div className="w-10 h-10 rounded-full bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center mb-6 relative z-10">
              <iconify-icon icon="solar:pie-chart-2-linear" className="text-brand-lime text-lg"></iconify-icon>
            </div>
            <h3 className="text-lg font-medium tracking-tight mb-2 relative z-10">Performance Ads</h3>
            <p className="text-xs text-white/50 mb-6 flex-grow relative z-10">Meta and Google ecosystem scaling.</p>
            
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-sm text-white/70">Starter</span>
                <span className="text-sm font-medium">₹15k <span className="text-[10px] text-white/40 font-normal">/mo</span></span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-sm text-white/70">Scale</span>
                <span className="text-sm font-medium">₹30k <span className="text-[10px] text-white/40 font-normal">/mo</span></span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-white/70">Elite</span>
                <span className="text-sm font-medium">₹60k <span className="text-[10px] text-white/40 font-normal">/mo</span></span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel rounded-3xl p-8 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
              <iconify-icon icon="solar:pen-new-round-linear" className="text-white text-lg"></iconify-icon>
            </div>
            <h3 className="text-lg font-medium tracking-tight mb-2">Graphic Designing</h3>
            <p className="text-xs text-white/50 mb-6 flex-grow">Brand identity and social collateral.</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-sm text-white/70">Basic</span>
                <span className="text-sm font-medium">₹10k <span className="text-[10px] text-white/40 font-normal">/mo</span></span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-sm text-white/70">Intermediate</span>
                <span className="text-sm font-medium">₹20k <span className="text-[10px] text-white/40 font-normal">/mo</span></span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-white/70">Advance</span>
                <span className="text-sm font-medium">₹40k <span className="text-[10px] text-white/40 font-normal">/mo</span></span>
              </div>
            </div>
          </div>
          
          {/* specialized block spanning full width */}
          <div className="glass-panel rounded-3xl p-6 lg:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-4">
               <div className="flex items-center gap-3">
                   <iconify-icon icon="solar:stars-linear" className="text-brand-lime text-xl"></iconify-icon>
                   <span className="text-sm font-medium text-white/90">Specialized Divisions:</span>
                   <span className="text-xs text-white/50 hidden sm:inline">AEO/GEO (AI Search), Influencer &amp; Brand Collabs</span>
               </div>
               <button className="text-xs px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors whitespace-nowrap">
                   Request Custom Quote
               </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;