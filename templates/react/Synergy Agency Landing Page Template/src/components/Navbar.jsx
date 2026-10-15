import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-t-0 border-x-0 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-medium tracking-tighter text-lg uppercase flex items-center gap-2">
          <iconify-icon icon="solar:globus-linear" stroke-width="1.5" className="text-brand-blue text-xl"></iconify-icon>
          SYNERGY
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60 font-medium">
          <a href="#services" className="hover:text-white transition-colors">Architecture</a>
          <a href="#pricing" className="hover:text-white transition-colors">Engine</a>
          <a href="#compliance" className="hover:text-white transition-colors">Compliance</a>
        </div>
        <button className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors">
          Initialize Project
        </button>
      </div>
    </nav>
  );
}

export default Navbar;