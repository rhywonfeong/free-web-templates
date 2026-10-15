import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Espaço', href: '#estrutura' },
    { name: 'Programas', href: '#programas' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Planos', href: '#planos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-[#080808]/90 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col relative z-50">
            <span className="text-2xl font-black tracking-tightest leading-none">FORGEE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-[#757575] hover:text-white uppercase tracking-wide-label transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="#planos" 
              className="text-sm font-bold uppercase tracking-wide-label text-white hover:text-[#E8201A] transition-colors"
            >
              Sou Membro
            </a>
            <a 
              href="#agendar" 
              className="px-6 py-3 bg-[#E8201A] hover:bg-[#CC1810] text-white text-xs font-bold uppercase tracking-wide-label rounded-full transition-all hover:shadow-[0_0_24px_rgba(232,32,26,0.4)]"
            >
              Agendar Visita
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-square-line-duotone" : "solar:hamburger-menu-line-duotone"} width="28" height="28"></iconify-icon>
          </button>
        </div>

        {/* Tagline Sub-header (only visible when not fully scrolled on desktop, or inside mobile menu) */}
        <div className={`hidden lg:block mt-2 text-[10px] text-[#757575] uppercase tracking-wide-label transition-opacity ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
          Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#080808] z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center px-6 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-8 mb-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-tightest text-white hover:text-[#E8201A] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          <a 
            href="#agendar"
            onClick={() => setMobileMenuOpen(false)} 
            className="w-full text-center py-4 bg-[#E8201A] text-white text-sm font-bold uppercase tracking-wide-label rounded-full"
          >
            Agendar Visita
          </a>
          <a 
            href="#planos"
            onClick={() => setMobileMenuOpen(false)} 
            className="w-full text-center py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-wide-label rounded-full"
          >
            Sou Membro
          </a>
        </div>
        <div className="mt-auto pb-10 pt-8 border-t border-white/10 text-xs text-[#757575] uppercase tracking-wide-label">
          Beyond Limits Known™<br/>Indaiatuba, SP
        </div>
      </div>
    </header>
  );
};

export default Header;