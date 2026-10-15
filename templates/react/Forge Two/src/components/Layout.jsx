import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
    { name: 'Espaço', href: '#espaco' },
    { name: 'Programas', href: '#programas' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Planos', href: '#planos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display font-bold text-2xl tracking-widest text-white">
          FORGEE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[13px] font-medium tracking-[0.1em] uppercase text-[#B0B0B0] hover:text-[#E8400A] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#login" className="text-[13px] font-medium tracking-[0.1em] uppercase text-white hover:text-[#B0B0B0] transition-colors">
            Sou Membro
          </a>
          <a href="#agendar" className="bg-[#E8400A] hover:bg-[#FF4D0D] text-white text-[13px] font-bold tracking-[0.1em] uppercase px-6 py-3 transition-colors">
            Agendar Visita
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} width="32" height="32"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-[#2A2A2A] p-6 flex flex-col space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium tracking-wide uppercase text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="h-[1px] w-full bg-[#2A2A2A]"></div>
          <div className="flex flex-col space-y-4">
            <a href="#login" className="text-center border border-[#2A2A2A] text-white text-[13px] font-bold tracking-[0.1em] uppercase px-6 py-4">
              Sou Membro
            </a>
            <a href="#agendar" className="text-center bg-[#E8400A] text-white text-[13px] font-bold tracking-[0.1em] uppercase px-6 py-4">
              Agendar Visita
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 border-t border-[#2A2A2A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="font-display font-bold text-4xl tracking-widest text-white block mb-2">
              FORGEE
            </Link>
            <p className="font-display text-[#6B6B6B] tracking-[0.2em] uppercase text-sm mb-6">
              Beyond Limits Known™
            </p>
            <p className="text-[#6B6B6B] text-sm max-w-sm">
              Indaiatuba, SP · Est. 2018<br/>
              Um espaço desenhado para quem treina com intenção.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-white tracking-[0.1em] uppercase mb-6 text-sm">Academia</h4>
            <ul className="space-y-4">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[#B0B0B0] hover:text-[#E8400A] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white tracking-[0.1em] uppercase mb-6 text-sm">Legal & Redes</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#B0B0B0] hover:text-white transition-colors text-sm">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-[#B0B0B0] hover:text-white transition-colors text-sm">Termos de Uso</a>
              </li>
              <li className="pt-2">
                <a href="#" className="flex items-center space-x-2 text-[#B0B0B0] hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
                  <span className="text-sm">@forgee.academy</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B6B6B] text-xs uppercase tracking-wider text-center md:text-left">
            FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
          </p>
          <p className="text-[#6B6B6B] text-xs uppercase tracking-wider">
            DESIGN SYSTEM © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-body bg-[#111111]">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;