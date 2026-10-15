import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Espaço', href: '#estrutura' },
    { name: 'Programas', href: '#programas' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Planos', href: '#planos' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A] py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-widest text-white group flex flex-col">
            FORGEE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[13px] uppercase tracking-[0.1em] text-[#B0B0B0] hover:text-[#E8400A] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden lg:flex">Sou Membro</Button>
            <Button size="sm">Agendar Visita</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} style={{ fontSize: '28px' }}></iconify-icon>
          </button>
        </div>
      </header>

      {/* Tagline institutional (only visible when not fully scrolled or in a subtle way, implemented as a subtle sub-header here) */}
      {!scrolled && (
        <div className="absolute top-[80px] w-full hidden md:flex justify-center z-40 pointer-events-none">
           <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B6B6B] bg-[#111111]/80 px-4 py-1 rounded-sm">
            Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
          </span>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] pt-24 px-6 flex flex-col border-t border-[#2A2A2A]">
          <nav className="flex flex-col gap-6 mb-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-display text-4xl text-white hover:text-[#E8400A] transition-colors border-b border-[#1E1E1E] pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-auto mb-12">
            <Button variant="secondary" className="w-full">Sou Membro</Button>
            <Button className="w-full">Agendar Visita</Button>
          </div>
        </div>
      )}
    </>
  );
}