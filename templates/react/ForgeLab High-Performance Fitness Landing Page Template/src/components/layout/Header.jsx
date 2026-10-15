import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
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
    { name: 'A Metodologia', href: '#sobre' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Protocolos', href: '#protocolos' },
    { name: 'Planos', href: '#planos' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col">
      {/* Utility Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 bg-[#0D0D0D] border-b border-white/10 text-xs font-medium text-neutral-400 tracking-wide">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <iconify-icon icon="solar:map-point-linear"></iconify-icon>
            Av. Brigadeiro Faria Lima, 3.477 — SP
          </span>
          <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <iconify-icon icon="solar:phone-linear"></iconify-icon>
            (11) 94567-8901
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:instagram" width="14"></iconify-icon></a>
          <a href="#" className="hover:text-white transition-colors"><iconify-icon icon="simple-icons:whatsapp" width="14"></iconify-icon></a>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#141414]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-[#141414] py-5 border-b border-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 z-50">
            <iconify-icon icon="solar:dumbbell-large-bold" class="text-[#E84E1B] text-3xl"></iconify-icon>
            <span className="font-extrabold text-xl tracking-tighter uppercase">ForgeLab</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-neutral-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm">Agende Visita</Button>
            <Button variant="primary" size="sm">Comece Agora</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-2xl z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0D0D0D] z-40 transition-transform duration-300 lg:hidden flex flex-col justify-center items-center gap-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold uppercase tracking-tight text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4 w-full px-8 mt-8">
          <Button variant="primary" className="w-full text-center justify-center">Comece Agora</Button>
          <Button variant="outline" className="w-full text-center justify-center">Agende Visita</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;