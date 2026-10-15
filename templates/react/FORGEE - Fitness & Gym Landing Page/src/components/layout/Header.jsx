import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Espaço', href: '#espaco' },
    { name: 'Programas', href: '#programas' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Planos', href: '#planos' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        mobileMenuOpen 
          ? 'bg-black border-zinc-900 py-4' // Solid opaque background when menu is open
          : scrolled 
            ? 'bg-black/90 backdrop-blur-md border-zinc-900 py-4' 
            : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-white tracking-tighter z-50 relative" onClick={() => setMobileMenuOpen(false)}>
          FORGEE<span className="text-red-600">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost">SOU MEMBRO</Button>
          <Button variant="secondary" className="px-6 py-3">AGENDAR VISITA</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} width="24" height="24"></iconify-icon>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col justify-center items-center gap-8`}>
          <nav className="flex flex-col items-center gap-8 text-center w-full px-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-3xl font-black uppercase tracking-tighter text-white hover:text-red-500 transition-colors w-full py-4 border-b border-zinc-900 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs px-6">
            <Button variant="secondary" className="w-full">SOU MEMBRO</Button>
            <Button variant="primary" className="w-full">AGENDAR VISITA</Button>
          </div>
        </div>
      </div>
    </header>
  );
}