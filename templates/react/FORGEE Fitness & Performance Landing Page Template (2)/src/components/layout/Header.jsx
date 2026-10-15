import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Espaço', href: '/#espaco' },
    { label: 'Programas', href: '/#programas' },
    { label: 'Equipe', href: '/#equipe' },
    { label: 'Planos', href: '/#planos' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-zinc-950/80 backdrop-blur-md border-zinc-800/50 py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-tighter text-white">
            FORGEE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              SOU MEMBRO
            </Link>
            <Link 
              to="/agendar" 
              className="px-5 py-2.5 bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              AGENDAR VISITA
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <iconify-icon 
              icon={mobileMenuOpen ? "solar:close-linear" : "solar:hamburger-menu-linear"} 
              width="24" 
              height="24"
            />
          </button>
        </div>
      </div>

      {/* Tagline Bar */}
      <div className="w-full bg-zinc-900 border-y border-zinc-800/50 py-2 mt-4 hidden md:block">
        <div className="container mx-auto px-6 md:px-12 flex justify-center items-center gap-4 text-xs tracking-widest text-zinc-500 uppercase">
          <span>Beyond Limits Known™</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
          <span>Indaiatuba, SP</span>
          <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
          <span>Est. 2018</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-lg font-medium text-zinc-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800">
            <Link 
              to="/login" 
              className="w-full py-3 text-center text-sm font-medium text-zinc-300 hover:text-white border border-zinc-800"
            >
              SOU MEMBRO
            </Link>
            <Link 
              to="/agendar" 
              className="w-full py-3 text-center bg-white text-black text-sm font-medium hover:bg-zinc-200"
            >
              AGENDAR VISITA
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}