import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Protocolo', href: '#protocolo' },
    { name: 'Planos', href: '#planos' },
    { name: 'Coaches', href: '#coaches' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-white/5 py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <iconify-icon 
            icon="solar:flame-bold" 
            class="text-[#FF5500] text-3xl group-hover:scale-110 transition-transform"
          ></iconify-icon>
          <span className="font-display text-2xl tracking-wider text-white">AURA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#AAAAAA] hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#planos"
            className="bg-[#FF5500] hover:bg-[#FF6B2B] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 glow-orange hover:glow-orange-hover"
          >
            Agendar Visita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#111111] border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F5F5F5] text-lg font-medium py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#planos"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#FF5500] text-white px-6 py-3 rounded-full font-semibold text-center mt-4"
          >
            Agendar Visita
          </a>
        </div>
      )}
    </header>
  );
}