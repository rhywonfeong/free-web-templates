import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 max-w-[1800px] mx-auto pointer-events-none">
      
      {/* Left: Logo */}
      <div className="pointer-events-auto">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center bg-white/50 backdrop-blur-sm group-hover:bg-white transition-colors duration-500">
            <span className="font-serif-display text-lg leading-none pt-1">L</span>
          </div>
          <span className="font-medium tracking-tight text-sm uppercase hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 -ml-2 group-hover:ml-0">
            Lumina
          </span>
        </a>
      </div>

      {/* Center: Links (Pill) */}
      <div className="pointer-events-auto hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-black/5 shadow-sm">
        <a href="#" className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wide hover:bg-[#F2F0EB] transition-colors text-stone-600 hover:text-black">Classes</a>
        <a href="#" className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wide hover:bg-[#F2F0EB] transition-colors text-stone-600 hover:text-black">Gallery</a>
        <a href="#" className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wide hover:bg-[#F2F0EB] transition-colors text-stone-600 hover:text-black">Schedule</a>
      </div>

      {/* Right: Action */}
      <div className="pointer-events-auto flex items-center gap-3">
        <button className="md:hidden w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center">
          <iconify-icon icon="solar:hamburger-menu-linear" width="20" height="20"></iconify-icon>
        </button>
        <a href="#" className="hidden md:flex items-center gap-2 bg-[#1a1a1a] text-[#Fdfcf8] pl-5 pr-2 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide hover:bg-stone-800 transition-colors group">
          Enroll Now
          <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
            <iconify-icon icon="solar:arrow-right-up-linear" width="14" height="14"></iconify-icon>
          </span>
        </a>
      </div>
    </nav>
  );
}