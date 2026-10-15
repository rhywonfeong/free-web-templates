import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Navbar = ({ inHero = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const handleNavClick = (e, href) => {
    if (location.pathname !== '/') {
      return; // Let it navigate to home first if not on home
    }
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 pt-4 md:pt-6',
        scrolled && !inHero ? 'translate-y-0' : '',
      )}
    >
      <div 
        className={clsx(
          'max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-full border transition-all duration-300',
          scrolled || !inHero 
            ? 'bg-[#131313]/90 backdrop-blur-md border-white/10 shadow-lg' 
            : 'bg-black/40 backdrop-blur-sm border-transparent'
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <iconify-icon icon="solar:dumbbell-large-minimalistic-bold" class="text-[#E8280D] text-2xl group-hover:rotate-12 transition-transform"></iconify-icon>
          <span className="font-display font-black text-xl tracking-widest uppercase">Forgee</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className="text-sm font-medium text-neutral-300 hover:text-white uppercase tracking-wider transition-colors">
            Sou Membro
          </Link>
          <Link 
            to="/agendar" 
            className="bg-[#E8280D] hover:bg-[#CC1F00] text-white text-sm font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,40,13,0.4)]"
          >
            Agendar Visita
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white text-2xl flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-4 right-4 bg-[#131313] border border-white/10 rounded-2xl p-4 flex flex-col gap-4 shadow-xl backdrop-blur-lg">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-neutral-300 hover:text-white uppercase p-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <Link to="/" className="text-center py-3 text-neutral-300 uppercase tracking-wider">Sou Membro</Link>
            <Link to="/agendar" className="bg-[#E8280D] text-white text-center py-3 rounded-full font-bold uppercase tracking-wider">Agendar Visita</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;