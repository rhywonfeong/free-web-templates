import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Espaço', href: '/#espaco' },
    { name: 'Programas', href: '/#programas' },
    { name: 'Equipe', href: '/#equipe' },
    { name: 'Planos', href: '/#planos' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <iconify-icon icon="solar:fire-bold" class="text-3xl text-[#E53935] group-hover:scale-110 transition-transform"></iconify-icon>
          <span className="font-black text-xl tracking-[0.1em] uppercase">Forgee</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.1em] text-[#AAAAAA] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden lg:flex">Sou Membro</Button>
          <Button to="/agendar" size="sm" icon="solar:calendar-linear">Agendar Visita</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#AAAAAA] hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} class="text-3xl"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#111111] border-b border-[#2A2A2A] shadow-2xl">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-base font-semibold uppercase tracking-[0.1em] text-[#AAAAAA] hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-[#2A2A2A]" />
            <Button variant="ghost" className="w-full justify-start">Sou Membro</Button>
            <Button to="/agendar" className="w-full">Agendar Visita</Button>
          </div>
        </div>
      )}
    </header>
  );
}