import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useLang } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.method, path: '/method' },
    { name: t.nav.outcomes, path: '/outcomes' },
    { name: t.nav.cases, path: '/cases' },
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
              <iconify-icon icon="solar:soundwave-linear" width="14" height="14" stroke-width="1.5"></iconify-icon>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase leading-none mb-1">{t.brand.name}<sup className="ml-0.5 text-[8px] tracking-normal">™</sup></span>
              <span className="text-[10px] text-gray-400 tracking-[0.25em] uppercase leading-none">{t.brand.tag}</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex col-span-6 justify-center items-center gap-10 text-xs font-semibold tracking-widest uppercase text-gray-400">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
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

        <div className="col-span-6 md:col-span-3 flex justify-end items-center gap-4">
          <LanguageSwitcher variant="header" />
          <Link 
            to="/engage" 
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors outline-none"
          >
            {t.nav.engage}
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

      <div 
        className={clsx(
          "fixed inset-0 bg-[#fbfbfb] z-40 md:hidden flex flex-col justify-center px-6 transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6 text-2xl font-medium tracking-tight">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="border-b border-gray-200 pb-4 flex justify-between items-center group">
              {link.name}
              <iconify-icon icon="solar:arrow-right-linear" className="opacity-30 group-hover:opacity-100 transition-opacity"></iconify-icon>
            </Link>
          ))}
          <Link to="/engage" className="border-b border-gray-200 pb-4 flex justify-between items-center group text-gray-500">
            {t.nav.engage}
            <iconify-icon icon="solar:arrow-right-up-linear" className="opacity-30 group-hover:opacity-100 transition-opacity"></iconify-icon>
          </Link>
          <div className="pt-4">
            <LanguageSwitcher variant="header" />
          </div>
        </div>
      </div>
    </>
  );
}