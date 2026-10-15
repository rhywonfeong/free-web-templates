import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import Button from './Button';

const navLinks = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hizmetler', path: '/hizmetler' },
  { name: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300">
            <iconify-icon icon="solar:chart-line-linear" width="20" height="20"></iconify-icon>
          </div>
          <span className="font-semibold text-lg tracking-tight">Oğulcan Demirer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                location.pathname === link.path ? "text-indigo-600" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-px h-4 bg-slate-200 mx-2"></div>
          <Button as={Link} to="/iletisim" variant="primary" size="sm">
            Ücretsiz Analiz
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-600 p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <iconify-icon 
            icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
            width="24" 
            height="24"
          ></iconify-icon>
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={clsx(
          "absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "max-h-80 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        )}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={clsx(
                "text-base font-medium transition-colors",
                location.pathname === link.path ? "text-indigo-600" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <Button as={Link} to="/iletisim" variant="primary" className="w-full justify-center">
              Ücretsiz Analiz Al
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;