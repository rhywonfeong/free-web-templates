import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

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
    { name: 'Metodologia', href: '#protocolo' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Planos', href: '#planos' },
    { name: 'Time', href: '#coaches' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#111111]/90 backdrop-blur-md border-b border-[#252525] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <iconify-icon icon="solar:bolt-bold" class="text-[#AAFF00] text-3xl group-hover:scale-110 transition-transform"></iconify-icon>
          <span className="font-display font-black text-2xl tracking-wider text-white uppercase">Aura</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-[#CCCCCC] hover:text-[#AAFF00] transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button variant="primary" size="sm" href="#agendar">
            Agendar Visita
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1A1A1A] border-b border-[#252525] p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-white hover:text-[#AAFF00] py-2 border-b border-[#252525]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <Button variant="primary" className="w-full justify-center" href="#agendar">
              Agendar Visita
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;