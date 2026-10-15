import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030706]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-sm bg-white flex items-center justify-center border border-white/20 group-hover:bg-emerald-500 transition-colors duration-500">
            <iconify-icon icon="solar:shield-keyhole-linear" width="20" style={{ color: '#030706' }}></iconify-icon>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold tracking-wide leading-none text-lg">AEGIS</span>
            <span className="text-emerald-500 text-[10px] tracking-[0.2em] font-medium mt-1 leading-none">SECURE</span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {['PLATFORM', 'SOLUTIONS', 'THREAT LABS'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-xs font-medium tracking-[0.15em] text-slate-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Status Pill */}
        <div 
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 cursor-pointer hover:bg-emerald-500/10 transition-colors"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-1.5">
            {[1, 2, 3].map((dot) => (
              <div 
                key={dot} 
                className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${isHovered ? 'animate-pulse' : ''}`}
                style={{ animationDelay: `${dot * 150}ms` }}
              ></div>
            ))}
          </div>
          <span className="text-[10px] text-emerald-500 tracking-widest uppercase ml-2">Network Secure</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-300 hover:text-white">
          <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
        </button>

      </div>
    </header>
  );
};

export default Navbar;