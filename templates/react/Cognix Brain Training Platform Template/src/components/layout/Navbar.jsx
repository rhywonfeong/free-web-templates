import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT APP', path: '/about' },
    { name: 'CONTACT US', path: '#' },
    { name: 'DOWNLOAD', path: '#' }
  ];

  return (
    <nav 
      className={clsx(
        "sticky top-0 flex items-center justify-between z-50 transition-all duration-500 rounded-b-2xl md:rounded-b-3xl -mx-4 px-4 md:-mx-8 md:px-8",
        scrolled 
          ? "py-4 bg-[#0A0A1A]/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] mt-4" 
          : "py-8 border-b border-transparent mt-0"
      )}
    >
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center animate-pulse-glow group-hover:scale-105 transition-transform">
          <iconify-icon icon="solar:programming-linear" className="text-white text-lg" stroke-width="1.5"></iconify-icon>
        </div>
        <span className="group-hover:text-fuchsia-300 transition-colors text-lg font-medium tracking-tight">C O G N I</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={clsx(
              "hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300",
              location.pathname === link.path && "text-white"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
      
      <button 
        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-2xl transition-transform active:scale-90" stroke-width="1.5"></iconify-icon>
      </button>

      {/* Mobile Menu Dropdown */}
      <div className={clsx(
        "absolute top-full left-0 w-full bg-[#0A0A1A]/95 backdrop-blur-xl border border-white/10 rounded-2xl mt-2 flex flex-col shadow-2xl md:hidden z-40 transition-all duration-300 origin-top overflow-hidden",
        isMobileMenuOpen ? "opacity-100 scale-y-100 p-4 gap-4" : "opacity-0 scale-y-0 h-0 p-0 gap-0"
      )}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className="px-4 py-3 hover:bg-white/10 hover:translate-x-2 rounded-lg transition-all text-sm font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}