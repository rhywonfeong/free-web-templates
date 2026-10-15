import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Navbar() {
  const navLinks = [
    { name: 'Funcionalidades', path: '#features' },
    { name: 'Planos', path: '#pricing' },
    { name: 'Depoimentos', path: '#testimonials' },
    { name: 'FAQ', path: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 h-20 bg-[#090909]/90 backdrop-blur-sm border-b border-[#2A2A2A]">
      <Link to="/" className="flex items-center gap-2 group">
        <span className="font-display font-bold text-[24px] tracking-tight uppercase text-white group-hover:text-[#CCFF33] transition-colors">
          .FORGEE
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.path}
            className="font-body text-[14px] text-[#999999] hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link to="/login" className="hidden md:block font-body text-[14px] font-medium text-white hover:text-[#CCFF33] transition-colors">
          Entrar
        </Link>
        <Button variant="primary" size="md">
          Começar grátis
        </Button>
      </div>
    </header>
  );
}