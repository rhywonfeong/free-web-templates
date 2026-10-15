import React, { useState } from 'react';

const TechSpecs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Encryption', 'Heuristics', 'Zero-Trust'];

  const features = [
    { icon: 'solar:shield-keyhole-linear', title: 'AES-256 Bit', desc: 'Military-grade cryptography.' },
    { icon: 'solar:graph-new-linear', title: 'Anomaly AI', desc: 'Instant pattern recognition.' },
    { icon: 'solar:server-path-linear', title: 'DDoS Mitigation', desc: 'Multi-terabit edge buffering.' },
    { icon: 'solar:routing-2-linear', title: 'Sub-ms Latency', desc: 'Imperceptible traffic inspection.' }
  ];

  return (
    <section className="relative py-24 border-t border-white/5 bg-[#030507]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Left: 2x2 Feature Grid */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl blur-3xl"></div>
          
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {features.map((feat, i) => (
              <div key={i} className="aspect-square bg-[#070D0A] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-emerald-500/30 transition-all dotted-texture-dense">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 relative bg-[#030706]">
                  <div className="absolute inset-1 rounded-full border border-dashed border-white/20 group-hover:border-emerald-500/50 group-hover:rotate-90 transition-all duration-1000"></div>
                  <iconify-icon icon={feat.icon} width="28" class="text-slate-300 group-hover:text-emerald-500 transition-colors"></iconify-icon>
                </div>
                <h4 className="text-white font-medium tracking-wide mb-1 text-sm">{feat.title}</h4>
                <p className="text-xs text-slate-500">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Content & Tabs */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          
          {/* Simulated Tabs */}
          <div className="flex gap-2 p-1 border border-white/10 rounded-lg bg-white/[0.02] mb-10">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2 rounded-md text-xs font-medium tracking-wider transition-all duration-300 ${
                  activeTab === idx 
                    ? 'bg-emerald-500 text-black shadow-md' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
            Autonomous,<br />military-grade prevention.
          </h2>
          
          <p className="text-slate-400 leading-relaxed text-sm mb-10 max-w-lg">
            Driven by a next-gen behavioral heuristic engine, Aegis V7 inspects and sanitizes inbound traffic in real-time, blocking advanced persistent threats before they infiltrate your environment.
          </p>

          {/* Rating Block */}
          <div className="flex items-center gap-6 p-5 border border-white/10 rounded-xl bg-[#070D0A]/50 w-full max-w-md mb-10">
            <div className="text-4xl font-semibold text-white">4.9</div>
            <div className="flex flex-col gap-1">
              <div className="flex text-emerald-500">
                {[...Array(5)].map((_, i) => (
                  <iconify-icon key={i} icon="solar:star-bold" width="16"></iconify-icon>
                ))}
              </div>
              <div className="text-xs text-slate-500">Securing 10,000+ enterprise networks</div>
            </div>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 border border-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-lg hover:bg-emerald-500/10 transition-colors">
            <iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
            View Architecture Whitepaper
          </button>

        </div>
      </div>
    </section>
  );
};

export default TechSpecs;