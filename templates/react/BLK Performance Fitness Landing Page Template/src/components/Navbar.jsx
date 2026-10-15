import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Protocolo', href: '#protocolo' },
    { name: 'Equipamentos', href: '#equipamentos' },
    { name: 'Planos', href: '#planos' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Localização', href: '#localizacao' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-[var(--color-carbon)]/90 backdrop-blur-md border-[var(--color-ash)]/50 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-display text-3xl tracking-tighter text-white">BLK<span className="text-[var(--color-primary)]">.</span></a>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[13px] uppercase tracking-[0.06em] text-[var(--color-silver)] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" className="py-3 px-6 text-xs">Matricule-se</Button>
        </div>

        <button className="lg:hidden text-white text-2xl">
          <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
        </button>
      </div>
    </header>
  );
}