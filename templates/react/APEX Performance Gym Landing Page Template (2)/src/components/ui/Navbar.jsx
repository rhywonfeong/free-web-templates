import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#about' },
    { name: 'Estrutura', href: '#structure' },
    { name: 'Protocolo', href: '#protocol' },
    { name: 'Matrículas', href: '#plans' },
    { name: 'Coaches', href: '#coaches' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className={`glass border border-[#2E2E2E] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'shadow-card' : ''}`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-fire flex items-center justify-center text-white font-display font-black text-xl leading-none group-hover:scale-105 transition-transform">
              A
            </div>
            <span className="font-display font-bold text-xl tracking-wide uppercase">APEX.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-[#B0B0B0] hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button href="#plans" size="sm">Agendar Visita</Button>
            </div>
            
            <button 
              className="md:hidden text-white text-2xl flex items-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[100%] left-4 right-4 mt-2 glass border border-[#2E2E2E] rounded-2xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-lg font-medium text-[#F5F5F5] py-2 border-b border-[#2E2E2E] last:border-0"
              >
                {link.name}
              </a>
            ))}
            <Button href="#plans" className="w-full justify-center mt-2">Agendar Visita</Button>
          </div>
        )}
      </div>
    </header>
  );
}