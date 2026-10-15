import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'BLOG', path: '/blog' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-6 pb-2 transition-all duration-300">
      <div className="mx-auto max-w-7xl">
        <nav className="glass-panel rounded-[2rem] px-4 py-3 flex items-center justify-between">
          
          {/* Zone 1: Logo */}
          <Link to="/" className="flex items-center gap-2 px-2 hover:opacity-80 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-800 text-white shadow-sm">
              <iconify-icon icon="solar:leaf-bold" width="24" height="24"></iconify-icon>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-gray-900 leading-tight">Modern</span>
              <span className="text-xs font-medium text-gray-500 leading-tight tracking-widest">HEALTH CLINIC</span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center bg-white/50 border border-white/60 rounded-full p-1 shadow-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300",
                    isActive 
                      ? "bg-emerald-800/10 text-emerald-900 shadow-sm" 
                      : "text-gray-500 hover:text-gray-900 hover:bg-white/40"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Zone 3: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link 
              to="/book" 
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[11px] font-semibold tracking-widest text-emerald-950 uppercase glass-button"
            >
              Book Your Appointment
            </Link>
            
            <button 
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full glass-button text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24" height="24"></iconify-icon>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-2 md:hidden animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book" 
              className="mt-2 text-center w-full px-6 py-3 rounded-xl text-xs font-semibold tracking-widest text-emerald-950 uppercase glass-button"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Your Appointment
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;