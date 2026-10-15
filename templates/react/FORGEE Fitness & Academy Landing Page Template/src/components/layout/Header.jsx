import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Espaço', href: '#espaco' },
    { name: 'Programas', href: '#programas' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Planos', href: '#planos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-black tracking-tight text-white flex items-center gap-2">
          FORGEE
          <span className="text-[#FF1E00] text-sm">™</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase text-[#D9D9D9] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#planos" className="text-xs font-semibold tracking-widest uppercase text-white hover:text-[#FF1E00] transition-colors">
            Sou Membro
          </a>
          <a 
            href="#contato" 
            className="bg-white text-black px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#FF1E00] hover:text-white transition-colors duration-300 rounded-none"
          >
            Agendar Visita
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-square-outline" : "solar:hamburger-menu-outline"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-display tracking-widest uppercase text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-6 border-t border-white/10 mt-2">
            <a href="#planos" className="text-center text-sm font-semibold tracking-widest uppercase text-white">Sou Membro</a>
            <a href="#contato" className="bg-[#FF1E00] text-white text-center py-4 text-sm font-bold tracking-widest uppercase rounded-none">Agendar Visita</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;