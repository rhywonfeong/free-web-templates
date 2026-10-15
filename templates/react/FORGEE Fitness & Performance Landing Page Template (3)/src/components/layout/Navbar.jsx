import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled ? 'bg-[#111111]/80 backdrop-blur-md border border-[rgba(255,255,255,0.05)] shadow-lg' : 'bg-transparent'
        }`}>
          
          {/* Logo */}
          <Link to="/" className="text-xl font-serif font-semibold tracking-tight flex items-center gap-2">
            FORGEE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-[#888780] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="#login" className="hidden md:block text-sm font-medium text-white hover:text-[#BFFF00] transition-colors">
              SOU MEMBRO
            </a>
            <Button size="sm">AGENDAR VISITA</Button>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;