import React from 'react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import PortfolioAllocation from './components/PortfolioAllocation';
import AbstractBand from './components/AbstractBand';
import SplitFeature from './components/SplitFeature';
import MobileAppMockup from './components/MobileAppMockup';

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-hidden">
      <Hero />
      
      {/* Main Content Area - Overlaps Hero Slightly */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-24 pb-24">
        
        <Showcase />
        
        <div className="mt-24 md:mt-40">
          <PortfolioAllocation />
        </div>

      </div>

      <AbstractBand />

      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <SplitFeature />
      </div>

      <div className="py-24 md:py-40 bg-white/50 border-t border-emerald-900/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-950">Ecosystem Interface</h2>
          <p className="mt-4 text-emerald-800/60 max-w-xl mx-auto text-sm">Experience seamless asset management through our proprietary mobile terminal, designed for precision and clarity.</p>
        </div>
        <MobileAppMockup />
      </div>
      
      {/* Detailed Footer */}
      <footer className="bg-emerald-950 text-white pt-24 pb-12 px-8 border-t border-emerald-900">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 bg-lime-400 rotate-45"></div>
                <span className="font-bold tracking-tight text-2xl">Quantivate.</span>
              </div>
              <p className="text-emerald-400/60 text-sm leading-relaxed max-w-sm mb-8 font-medium">
                Transforming digital asset structures for the modern web. Institutional-grade vault logic with algorithmic fail-safes and redundancy.
              </p>
              
              {/* Social / Connect */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-emerald-900 hover:border-emerald-700 transition-colors text-emerald-400">
                  <span className="text-xs font-bold tracking-widest">X</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-emerald-900 hover:border-emerald-700 transition-colors text-emerald-400">
                  <span className="text-xs font-bold tracking-widest">IN</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-emerald-800 flex items-center justify-center hover:bg-emerald-900 hover:border-emerald-700 transition-colors text-emerald-400">
                  <span className="text-xs font-bold tracking-widest">GH</span>
                </a>
              </div>
            </div>

            {/* Links Column 1: Platform */}
            <div>
              <h4 className="text-lime-400 text-xs font-bold tracking-widest uppercase mb-6">Platform</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-emerald-300/70">
                <li><a href="#" className="hover:text-white transition-colors">Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Algorithmic Staking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Yield Vectors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terminal App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            {/* Links Column 2: Company */}
            <div>
              <h4 className="text-lime-400 text-xs font-bold tracking-widest uppercase mb-6">Company</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-emerald-300/70">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Methodology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Links Column 3: Legal */}
            <div>
              <h4 className="text-lime-400 text-xs font-bold tracking-widest uppercase mb-6">Legal</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-emerald-300/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclosures</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-emerald-500/60 font-medium tracking-wide">
            <div>&copy; {new Date().getFullYear()} Quantivate Systems. All rights reserved.</div>
            <div className="flex items-center gap-3 bg-emerald-900/30 px-3 py-1.5 rounded-full border border-emerald-800/50">
              <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse shadow-[0_0_8px_rgba(163,230,53,0.6)]"></div>
              <span className="uppercase tracking-widest text-[10px] text-emerald-300 text-opacity-90">All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;