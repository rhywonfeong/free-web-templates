import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Visão', path: '/' },
    { name: 'Recursos', path: '/' },
    { name: 'Exclusividade', path: '/' }
  ];

  return (
    <>
      <header 
        className={clsx(
          "w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-4 py-8 items-center relative z-50 shrink-0 transition-colors duration-300",
          isScrolled ? "bg-[#fbfbfb]/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 py-4" : "border-b border-gray-200 bg-transparent"
        )}
      >
        <div className="col-span-8 md:col-span-4 flex items-center gap-4 group">
          <Link to="/" className="flex items-center gap-4 outline-none">
            <div className="flex flex-col justify-center">
              <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase leading-none">
                MEDICAL<span className="text-emerald-500 mx-1">·</span>VOICES
              </span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex col-span-4 justify-center items-center gap-10 text-xs font-semibold tracking-widest uppercase text-gray-400">
          {navLinks.map((link, idx) => (
            <Link 
              key={`${link.name}-${idx}`} 
              to={link.path} 
              className="transition-colors duration-300 outline-none hover:text-gray-900 focus-visible:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="col-span-4 flex justify-end items-center">
          <Link 
            to="/contact" 
            className="hidden md:block text-xs font-semibold tracking-widest uppercase text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-4"
          >
            Quero fazer parte
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 flex items-center justify-center outline-none"
            aria-label="Toggle menu"
          >
            <iconify-icon 
              icon={isMobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} 
              width="24" 
              height="24" 
              stroke-width="1.5"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-[#fbfbfb] z-40 md:hidden flex flex-col justify-center px-6 transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-8 text-2xl font-medium tracking-tight">
          <Link to="/" className="border-b border-gray-200 pb-4 flex justify-between items-center group">
            Início
            <iconify-icon icon="solar:arrow-right-linear" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300"></iconify-icon>
          </Link>
          {navLinks.map((link, idx) => (
            <Link key={`${link.name}-${idx}`} to={link.path} className="border-b border-gray-200 pb-4 flex justify-between items-center group">
              {link.name}
              <iconify-icon icon="solar:arrow-right-linear" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300"></iconify-icon>
            </Link>
          ))}
          <Link to="/contact" className="border-b border-gray-200 pb-4 flex justify-between items-center group text-emerald-600">
            Quero fazer parte
            <iconify-icon icon="solar:arrow-right-up-linear" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300"></iconify-icon>
          </Link>
        </div>
      </div>
    </>
  );
}