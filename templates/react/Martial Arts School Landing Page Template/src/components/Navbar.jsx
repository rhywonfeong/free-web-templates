import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Planos', href: '#planos' },
    { name: 'Unidades', href: '#unidades' },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0D14]/95 backdrop-blur-md border-b border-[#2B3045]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50 group" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-10 h-10 bg-[#E8193C] flex items-center justify-center rounded-sm transform group-hover:rotate-12 transition-transform">
            <iconify-icon icon="solar:shield-bold" style={{ color: 'white', fontSize: '24px' }}></iconify-icon>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter leading-none">KMAS</span>
            <span className="text-[10px] text-[#94A3B8] font-bold tracking-widest uppercase">Artes Marciais</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button 
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-semibold text-[#94A3B8] hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-[#2B3045] pl-6">
            <div className="flex gap-3">
              <a href="#" className="text-[#94A3B8] hover:text-white"><iconify-icon icon="simple-icons:instagram"></iconify-icon></a>
              <a href="#" className="text-[#94A3B8] hover:text-white"><iconify-icon icon="simple-icons:whatsapp"></iconify-icon></a>
            </div>
            <Button size="sm" onClick={() => scrollTo('#aula-experimental')}>Agendar Aula</Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-2xl z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>

      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0B0D14] z-40 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden pt-24 px-6`}>
        <ul className="flex flex-col gap-6 text-2xl font-bold uppercase tracking-tight">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button 
                onClick={() => scrollTo(link.href)}
                className="hover:text-[#E8193C] transition-colors w-full text-left"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-6">
          <Button size="lg" onClick={() => scrollTo('#aula-experimental')}>Agendar Aula Gratuita</Button>
          <div className="flex gap-6 justify-center text-2xl text-[#94A3B8]">
            <a href="#" className="hover:text-white"><iconify-icon icon="simple-icons:instagram"></iconify-icon></a>
            <a href="#" className="hover:text-white"><iconify-icon icon="simple-icons:facebook"></iconify-icon></a>
            <a href="#" className="hover:text-white"><iconify-icon icon="simple-icons:whatsapp"></iconify-icon></a>
          </div>
        </div>
      </div>
    </nav>
  );
}