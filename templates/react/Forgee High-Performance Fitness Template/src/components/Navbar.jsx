import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Button from './ui/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Metodologia', href: '#protocolo' },
    { label: 'Planos', href: '#planos' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-white/90 backdrop-blur-[20px] border-[#E6E3E0] py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <iconify-icon icon="solar:bolt-circle-bold" width="32" class="text-[#E84E0F] group-hover:text-[#FF5500] transition-colors" />
          <span className="font-display font-black text-2xl uppercase tracking-tight text-[#0F0D0B]">
            Forgee
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold tracking-[0.5px] uppercase text-[#4A4540] hover:text-[#0F0D0B] transition-colors duration-fast"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="#planos" className="hidden lg:block text-[13px] font-semibold tracking-[0.5px] uppercase text-[#4A4540] hover:text-[#E84E0F] transition-colors">
            Login App
          </a>
          <Button variant="primary" size="sm" className="hidden sm:flex">
            Agendar Visita
          </Button>
          <button className="md:hidden text-[#0F0D0B] flex items-center">
            <iconify-icon icon="solar:hamburger-menu-linear" width="28" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;