import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-[#D4AF37]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#D4AF37] to-[#856D24] flex items-center justify-center border border-[#F3E5AB]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <iconify-icon icon="solar:widget-5-bold-duotone" width="20" style={{ color: '#050505' }}></iconify-icon>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium tracking-tight text-lg leading-none">OpsCore</span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {['Platform', 'Workflows', 'Analytics', 'AI Controls', 'Security'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors relative group"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Login
          </Link>
          <button className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-black text-sm font-semibold rounded-md transition-colors duration-300">
            Book a Demo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-slate-300 hover:text-[#D4AF37]">
          <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
        </button>

      </div>
    </header>
  );
};

export default Navbar;