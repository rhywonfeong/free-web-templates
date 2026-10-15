import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2E2E2E]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Left Nav (Desktop) */}
        <nav className="hidden lg:flex gap-8 w-1/3">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-wide text-neutral-400 hover:text-white transition-colors"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="flex flex-col items-center justify-center w-1/3">
          <Link to="/" className="text-2xl font-black tracking-widest text-white">
            FORGEE
          </Link>
          <span className="text-[10px] tracking-[0.2em] text-neutral-500 mt-1 hidden md:block">
            BEYOND LIMITS KNOWN™
          </span>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center justify-end gap-6 w-1/3">
          <a href="#login" className="text-sm font-medium tracking-wide text-neutral-400 hover:text-white transition-colors">
            SOU MEMBRO
          </a>
          <Button variant="outline" size="sm">
            AGENDAR VISITA
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-square-outline" : "solar:hamburger-menu-outline"} width="24" height="24"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#111111] border-b border-[#2E2E2E] p-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-bold tracking-wider text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4 pt-4 border-t border-[#2E2E2E]">
            <Button variant="outline" className="w-full justify-center">SOU MEMBRO</Button>
            <Button variant="primary" className="w-full justify-center">AGENDAR VISITA</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;