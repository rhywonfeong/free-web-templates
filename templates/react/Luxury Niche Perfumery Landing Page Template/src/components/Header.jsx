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
    { name: 'Platform', path: '/platform' },
    { name: 'Labs', path: '/labs' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <>
      <header 
        className={clsx(
          "w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-4 py-8 items-center relative z-50 shrink-0 transition-colors duration-300",
          isScrolled ? "bg-[#fbfbfb]/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 py-4" : "border-b border-gray-200 bg-transparent"
        )}
      >
        <div className="col-span-6 md:col-span-3 flex items-center gap-4 group">
          <Link to="/" className="flex items-center gap-4 outline-none">
            <div className="w-6 h-6 bg-transparent border border-gray-900 flex items-center justify-center text-gray-900 transition-transform group-hover:scale-90 duration-300">
              <iconify-icon icon="solar:box-minimalistic-linear" width="14" height="14" stroke-width="1.5"></iconify-icon>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest uppercase leading-none mb-1">Lumina</span>
              <span className="text-xs text-gray-400 tracking-widest uppercase leading-none">Studio</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex col-span-6 justify-center items-center gap-10 text-xs font-semibold tracking-widest uppercase text-gray-400">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={clsx(
                "transition-colors duration-300 outline-none focus-visible:text-gray-900",
                location.pathname === link.path ? "text-gray-900" : "hover:text-gray-900"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="col-span-6 md:col-span-3 flex justify-end items-center">
          <Link 
            to="/contact" 
            className="hidden md:block text-xs font-semibold tracking-widest uppercase text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-4"
          >
            Initiate
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
            Home
            <iconify-icon icon="solar:arrow-right-linear" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300"></iconify-icon>
          </Link>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="border-b border-gray-200 pb-4 flex justify-between items-center group">
              {link.name}
              <iconify-icon icon="solar:arrow-right-linear" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300"></iconify-icon>
            </Link>
          ))}
          <Link to="/contact" className="border-b border-gray-200 pb-4 flex justify-between items-center group text-gray-500">
            Initiate Dialogue
            <iconify-icon icon="solar:arrow-right-up-linear" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300"></iconify-icon>
          </Link>
        </div>
      </div>
    </>
  );
}