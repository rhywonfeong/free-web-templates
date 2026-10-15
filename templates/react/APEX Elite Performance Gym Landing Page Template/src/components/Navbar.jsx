import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
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
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Planos', href: '#planos' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#100F0F]/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-1 group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-white">AP</span>
          <span className="text-[#C8F135] group-hover:text-white transition-colors">EX</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 bg-[#1A1A1A]/50 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button variant="primary" className="hidden md:flex" icon="solar:arrow-right-line-duotone" onClick={(e) => scrollToSection(e, '#contato')}>
            Falar com especialista
          </Button>
          
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-square-line-duotone" : "solar:hamburger-menu-line-duotone"} width="28" height="28"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#100F0F] border-b border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[400px] py-6' : 'max-h-0 py-0'}`}>
        <div className="container mx-auto px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-semibold text-gray-300 hover:text-[#C8F135] transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="mt-4 w-full" icon="solar:arrow-right-line-duotone" onClick={(e) => scrollToSection(e, '#contato')}>
            Falar com especialista
          </Button>
        </div>
      </div>
    </header>
  );
}