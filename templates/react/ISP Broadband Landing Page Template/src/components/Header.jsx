import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Planos', path: '/planos' },
    { name: 'IPTV', path: '/iptv' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Onde Estamos', path: '/onde-estamos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={clsx(
        "fixed top-0 w-full z-40 transition-all duration-300",
        isScrolled ? "bg-neutral-0/95 backdrop-blur-md shadow-card py-4" : "bg-neutral-0 py-6"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-blue-dark rounded-lg flex items-center justify-center text-neutral-0 group-hover:bg-brand-orange transition-colors">
            <iconify-icon icon="solar:routing-3-bold" width="24" height="24"></iconify-icon>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-brand-blue-dark tracking-tight leading-none uppercase">Provider</span>
            <span className="text-sm font-bold text-brand-orange tracking-widest leading-none">Mais Fibra</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={clsx(
                "text-sm font-semibold hover:text-brand-orange transition-colors",
                location.pathname === link.path ? "text-brand-orange" : "text-neutral-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-neutral-600">
            <a href="https://instagram.com/provider.fibra" target="_blank" rel="noreferrer" className="hover:text-brand-orange transition-colors">
              <iconify-icon icon="simple-icons:instagram" width="20" height="20"></iconify-icon>
            </a>
            <a href="https://wa.me/5577998444757" target="_blank" rel="noreferrer" className="flex items-center gap-1 font-semibold hover:text-brand-green transition-colors">
              <iconify-icon icon="simple-icons:whatsapp" width="20" height="20"></iconify-icon>
              (77) 99844-4757
            </a>
          </div>
          <Link 
            to="/planos"
            className="bg-brand-orange text-neutral-0 px-6 py-2.5 rounded-lg font-bold shadow-cta hover:bg-brand-orange-hover hover:shadow-hover hover:-translate-y-0.5 transition-all"
          >
            Assine Agora
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-brand-blue-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-linear"} width="32" height="32"></iconify-icon>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-0 shadow-modal py-4 px-6 flex flex-col gap-4 lg:hidden border-t border-neutral-100">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-lg font-semibold text-neutral-900 py-2 border-b border-neutral-50"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/planos"
            className="mt-4 bg-brand-orange text-neutral-0 px-6 py-3 rounded-lg font-bold text-center shadow-cta"
          >
            Assine Agora
          </Link>
        </div>
      )}
    </header>
  );
}