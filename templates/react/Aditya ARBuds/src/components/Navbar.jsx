import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <iconify-icon icon="lucide:audio-lines" width="32" height="32" className="text-cyan-400"></iconify-icon>
          <span className="text-2xl font-semibold tracking-tight text-white">
            AR<span className="font-normal text-slate-400">Buds Pro</span>
          </span>
        </div>
        <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-base font-medium transition-colors border border-white/10 backdrop-blur-sm">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;