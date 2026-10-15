import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Philosophy', path: '/philosophy' },
  ];

  const headerClass = clsx(
    "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
    {
      "bg-warm-white/90 backdrop-blur-md border-gray-200 py-4": isScrolled || mobileMenuOpen,
      "bg-transparent border-transparent py-8": !isScrolled && !mobileMenuOpen,
      "text-charcoal": isScrolled || !isHomePage || mobileMenuOpen,
      "text-white": !isScrolled && isHomePage && !mobileMenuOpen
    }
  );

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif tracking-tight font-medium relative z-50">
            Atelier.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm tracking-widest uppercase hover:opacity-50 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              to="/contact" 
              variant={!isScrolled && isHomePage ? 'ghost' : 'secondary'}
              className="py-3 px-6 text-xs"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon 
              icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} 
              width="28" 
              height="28"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-warm-white z-40 flex flex-col justify-center items-center transition-all duration-700 ease-in-out",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-3xl font-serif tracking-tight hover:opacity-50 transition-opacity"
              style={{ 
                transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileMenuOpen ? 1 : 0
              }}
            >
              {link.name}
            </Link>
          ))}
          <div 
            className="mt-8 transition-all duration-500"
            style={{ 
              transitionDelay: mobileMenuOpen ? '400ms' : '0ms',
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileMenuOpen ? 1 : 0
            }}
          >
             <Button to="/contact" variant="primary">Book Consultation</Button>
          </div>
        </nav>
      </div>
    </>
  );
}