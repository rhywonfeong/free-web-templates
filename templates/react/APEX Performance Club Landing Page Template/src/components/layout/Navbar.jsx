import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Quem Somos', href: '/#about' },
    { name: 'Estrutura', href: '/#equipment' },
    { name: 'O Método', href: '/#protocol' },
    { name: 'Planos', href: '/#pricing' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display font-black text-2xl tracking-tight uppercase flex items-center gap-2">
          <iconify-icon icon="solar:bolt-bold" class="text-acid text-2xl"></iconify-icon>
          APEX
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[13px] uppercase font-medium tracking-widest text-neutral-900 hover:text-neutral-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="primary" to="/agendar">Join Today</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-neutral-900 text-2xl p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-neutral-100 shadow-lg p-6 flex flex-col gap-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm uppercase font-semibold tracking-wider text-neutral-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <Button variant="primary" to="/agendar" className="w-full text-center">Agendar Visita</Button>
            <Button variant="outline" to="/agendar" className="w-full text-center">Falar com Especialista</Button>
          </div>
        </div>
      )}
    </header>
  );
}