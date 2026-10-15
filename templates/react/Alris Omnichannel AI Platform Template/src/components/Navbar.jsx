import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky bg-[#0B0614]/95 z-50 border-white/10 border-b top-0 backdrop-blur-md">
      <div className="flex h-16 max-w-6xl mx-auto px-6 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-normal text-white tracking-tight font-['Instrument_Serif']">
            ALRIS
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#platform" className="hover:text-white transition-colors text-base text-white/70">
              Platform
            </a>
            <a href="#solutions" className="text-base text-white/70 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#pricing" className="text-base text-white/70 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#resources" className="text-base text-white/70 hover:text-white transition-colors">
              Resources
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="bg-[#8624FF] text-white text-base font-normal px-4 py-2 rounded-lg hover:bg-[#721ED9] transition-all duration-300 shadow-[0_0_15px_rgba(134,36,255,0.3)] hover:shadow-[0_0_20px_rgba(134,36,255,0.5)] hover:-translate-y-[1px]">
            Book Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;