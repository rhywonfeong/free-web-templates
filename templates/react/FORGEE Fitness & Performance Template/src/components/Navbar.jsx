import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    { name: 'Espaço', href: '#espaco' },
    { name: 'Programas', href: '#programas' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Planos', href: '#planos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-[var(--neutral-800)] ${
        isScrolled ? 'bg-[var(--neutral-950)]/90 backdrop-blur-md py-3' : 'bg-[var(--neutral-950)] py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-[var(--neutral-0)] flex items-center gap-2">
          FORGEE
          <span className="w-2 h-2 rounded-full bg-[var(--flame-500)] inline-block"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-[var(--neutral-200)] hover:text-[var(--flame-500)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-xs font-semibold uppercase tracking-widest text-[var(--neutral-200)] hover:text-[var(--neutral-0)] transition-colors">
            SOU MEMBRO
          </button>
          <a 
            href="#contato"
            className="bg-[var(--neutral-0)] text-[var(--neutral-950)] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[var(--flame-500)] hover:text-[var(--neutral-0)] transition-all duration-300"
          >
            AGENDAR VISITA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--neutral-0)] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="28"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--neutral-900)] border-b border-[var(--neutral-800)] p-6 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-widest text-[var(--neutral-200)] hover:text-[var(--flame-500)]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4 pt-4 border-t border-[var(--neutral-800)]">
             <button className="text-sm font-semibold uppercase tracking-widest text-[var(--neutral-200)] text-left">
              SOU MEMBRO
            </button>
            <a 
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[var(--flame-500)] text-[var(--neutral-0)] px-6 py-4 text-center text-sm font-bold uppercase tracking-widest"
            >
              AGENDAR VISITA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}