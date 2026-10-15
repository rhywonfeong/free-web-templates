import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Protocolo', href: '#protocolo' },
    { name: 'Planos', href: '#planos' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Localização', href: '#localizacao' },
  ];

  // Dynamically set text color classes based on states
  const textColorClass = isScrolled ? 'text-[#FFF8F1]' : 'text-[#2B2B2B]';
  const headerTextColorClass = (isScrolled || isMobileMenuOpen) ? 'text-[#FFF8F1]' : 'text-[#2B2B2B]';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2B2B2B]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className={`text-2xl font-black uppercase tracking-tighter flex items-center gap-2 z-50 transition-colors duration-300 ${headerTextColorClass}`}>
          <iconify-icon icon="solar:dumbbell-large-bold" width="28" style={{ color: '#FF8000' }}></iconify-icon>
          APEX
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider hover:text-[#FF8000] transition-colors duration-300 ${textColorClass}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a href="#planos" className="bg-[#FF8000] text-[#2B2B2B] hover:bg-[#CC6600] hover:text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_4px_24px_rgba(255,128,0,0.2)]">
            Agendar Visita Gratuita
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden z-50 transition-colors duration-300 ${headerTextColorClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="32"></iconify-icon>
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-[#1A1A1A] z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black uppercase tracking-tighter text-[#FFF8F1] hover:text-[#FF8000]"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#planos" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 bg-[#FF8000] text-[#2B2B2B] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-center hover:bg-[#CC6600] hover:text-white transition-colors"
            >
              Agendar Visita Gratuita
            </a>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Navbar;