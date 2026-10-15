import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import { cn } from '../../lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-neutral-950/80 backdrop-blur-md border-neutral-800 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-display font-bold tracking-tighter text-brand-green uppercase">
          ION
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 bg-neutral-900/50 backdrop-blur-sm p-1.5 rounded-full border border-neutral-800">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="flex-shrink-0">
              <Button variant="nav" size="nav">{link.name}</Button>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-semibold hidden lg:flex">Sou Membro</Button>
          <Button variant="primary" size="sm" className="hidden lg:flex">Agendar Visita</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-neutral-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="32" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-semibold text-neutral-200 uppercase tracking-widest py-2 border-b border-neutral-800"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="secondary" className="w-full">Sou Membro</Button>
            <Button variant="primary" className="w-full">Agendar Visita</Button>
          </div>
        </div>
      )}
    </header>
  );
}