import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ESPAÇO', href: '#espaco' },
    { name: 'PROGRAMAS', href: '#programas' },
    { name: 'EQUIPE', href: '#equipe' },
    { name: 'PLANOS', href: '#planos' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#111111]/90 backdrop-blur-md border-[#2C2C2C]' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white font-display font-bold text-2xl tracking-tighter uppercase">
          <iconify-icon icon="solar:fire-bold" style={{ color: '#F46A17' }}></iconify-icon>
          FORGEE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[#CCCCCC] hover:text-white text-sm font-semibold tracking-widest transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-[#CCCCCC] hover:text-white text-sm font-semibold tracking-widest transition-colors">
            SOU MEMBRO
          </Link>
          <Button variant="primary">
            AGENDAR VISITA <iconify-icon icon="solar:arrow-right-linear" class="ml-1"></iconify-icon>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} style={{ fontSize: '28px' }}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#1A1A1A] border-b border-[#2C2C2C] p-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-display font-semibold tracking-widest uppercase">
                {link.name}
              </a>
            ))}
            <Link to="/" className="text-[#888888] text-sm font-semibold tracking-widest mt-4 uppercase">SOU MEMBRO</Link>
          </nav>
          <Button variant="primary" className="w-full justify-center">
            AGENDAR VISITA <iconify-icon icon="solar:arrow-right-linear" class="ml-1"></iconify-icon>
          </Button>
        </div>
      )}
    </header>
  );
}