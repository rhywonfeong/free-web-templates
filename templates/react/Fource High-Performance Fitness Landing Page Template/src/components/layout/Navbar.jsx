import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/' }, // Linking to home for single-page feel
    { name: 'Modalidades', path: '/features' },
    { name: 'Planos', path: '/pricing' },
    { name: 'Coaches', path: '/' },
    { name: 'Contato', path: '/' },
  ];

  return (
    <header 
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b',
        isScrolled ? 'bg-[#0A0A0A] border-[#2C2C2C] py-4' : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* FOURCE Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display text-3xl md:text-4xl tracking-wider text-white uppercase leading-none mt-1">
              Fource
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className={clsx(
                      "text-xs font-semibold uppercase tracking-[0.1em] transition-colors",
                      location.pathname === link.path && link.path !== '/' ? "text-[#E74C3C]" : "text-[#CCCCCC] hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="primary" className="py-2.5 px-6 text-sm">Comece Agora</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#CCCCCC] hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <iconify-icon 
              icon={isMobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} 
              style={{ fontSize: '32px' }}
            ></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        "lg:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-[#2C2C2C] transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="p-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="block text-lg font-display uppercase tracking-wider text-[#CCCCCC] hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-[#2C2C2C]">
            <Button variant="primary" className="w-full">Comece Agora</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;