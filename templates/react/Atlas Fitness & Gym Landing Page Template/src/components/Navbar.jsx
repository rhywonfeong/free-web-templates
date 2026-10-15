import React, { useState } from 'react';
import { clsx } from 'clsx';
import Button from './ui/Button';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'A Academia', href: '#quem-somos' },
    { name: 'Protocolo', href: '#protocolo' },
    { name: 'Planos', href: '#planos' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Localização', href: '#localizacao' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-neutral-950/80 backdrop-blur-md border-neutral-800 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => scrollToSection(e, '#hero')} className="text-2xl font-display font-black tracking-tightest uppercase text-offwhite hover:text-acid transition-colors">
          ATLAS
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-neutral-300 hover:text-acid transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" onClick={() => document.getElementById('planos').scrollIntoView({behavior: 'smooth'})}>
            Agendar Visita
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-offwhite p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="28" height="28"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        "fixed inset-0 bg-neutral-950 z-40 transition-transform duration-300 flex flex-col pt-24 px-6 md:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col gap-6 text-2xl font-display font-bold uppercase tracking-tight">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-neutral-300 hover:text-acid transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="mt-auto mb-10">
          <Button variant="primary" className="w-full justify-center text-lg py-4">
            Agendar Visita
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;