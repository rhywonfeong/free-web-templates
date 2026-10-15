import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <>
      {/* Utility Top Bar */}
      <div className="hidden md:flex bg-[#050505] border-b border-subtle text-[11px] uppercase tracking-widest text-[#B0B0B0] py-2 px-6 justify-between items-center z-50 relative">
        <div className="flex items-center gap-4">
          <span>Beyond Limits Known™</span>
          <span className="text-[#6B6B6B]">·</span>
          <span>Indaiatuba, SP</span>
          <span className="text-[#6B6B6B]">·</span>
          <span>Est. 2018</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
            <iconify-icon icon="simple-icons:instagram" width="12" /> @forgee.academy
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed md:sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-subtle py-3' : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-[1440px] flex items-center justify-between">
          
          <Link to="/" className="text-white font-display font-bold text-2xl tracking-tighter hover:text-[#E8400A] transition-colors">
            FORGEE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-widest text-[#B0B0B0] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#planos" className="text-[13px] font-medium uppercase tracking-widest text-white hover:text-[#E8400A] transition-colors">
              Sou Membro
            </a>
            <Button href="#contato">Agendar Visita</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} width="28" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#111111] border-b border-subtle shadow-2xl py-6 px-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-display uppercase tracking-tight text-[#B0B0B0] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="w-full h-px bg-[#2A2A2A]"></div>
            <div className="flex flex-col gap-4">
              <a href="#planos" className="text-sm font-medium uppercase tracking-widest text-white text-center py-2">
                Sou Membro
              </a>
              <Button href="#contato" fullWidth>Agendar Visita</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;