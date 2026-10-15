import React, { useState, useEffect } from 'react';
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
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Equipamentos', href: '#equipamentos' },
    { name: 'Protocolo', href: '#protocolo' },
    { name: 'Planos', href: '#planos' },
    { name: 'Coaches', href: '#coaches' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <iconify-icon icon="solar:dumbbell-large-minimalistic-bold" class="text-[28px] text-[#FF3A00] group-hover:text-[#FF5A1A] transition-colors"></iconify-icon>
          <span className="font-display font-bold text-2xl tracking-wide uppercase">Forge</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button variant="voltage">Agendar Visita</Button>
          </div>
          <button 
            className="lg:hidden text-[#F5F5F5] text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#111111] border-b border-[#2A2A2A] p-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-display font-medium uppercase tracking-wider text-[#CCCCCC]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="voltage" className="w-full justify-center">Agendar Visita</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;