import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const leftLinks = [
    { name: 'Films', path: '/features' },
    { name: 'News', path: '/about' },
  ];
  
  const rightLinks = [
    { name: 'Contact', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <>
      <header 
        className={clsx(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b',
          isScrolled 
            ? 'bg-[#091728]/50 backdrop-blur-xl border-white/10 py-4 shadow-sm' 
            : 'bg-[#091728]/80 backdrop-blur-md border-transparent pt-8 pb-8',
          isMobileMenuOpen && '!bg-[#091728]/95 !border-transparent backdrop-blur-2xl'
        )}
      >
        <div className="container mx-auto px-8 md:px-16 flex items-center justify-between relative">
          
          <nav className="hidden md:flex flex-1 items-center gap-12">
            {leftLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="uppercase relative group text-sm font-medium text-[#8a9db5] tracking-[0.15em]"
              >
                <span className="group-hover:text-white transition-colors duration-500">{link.name}</span>
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-none md:flex md:justify-center z-50">
            <Link to="/" className="hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap text-3xl font-medium text-[#cca950] tracking-tight font-playfair inline-block">
              NEXGen Films
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-end gap-12">
            {rightLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="uppercase relative group text-sm font-medium text-[#8a9db5] tracking-[0.15em]"
              >
                <span className="group-hover:text-white transition-colors duration-500">{link.name}</span>
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto flex items-center justify-center text-[#cca950] hover:text-white transition-colors z-50 active:scale-95"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <iconify-icon icon="solar:close-circle-linear" width="32" height="32"></iconify-icon>
            ) : (
              <iconify-icon icon="solar:hamburger-menu-linear" width="32" height="32"></iconify-icon>
            )}
          </button>
        </div>
      </header>

      <div 
        className={clsx(
          "fixed inset-0 bg-[#091728]/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible delay-300"
        )}
      >
        <nav className="flex flex-col items-center gap-10">
          {allLinks.map((link, index) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={clsx(
                "font-playfair text-5xl text-[#cca950] hover:text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isMobileMenuOpen ? "opacity-100 translate-y-0 filter-none" : "opacity-0 translate-y-8 blur-md"
              )}
              style={{ transitionDelay: `${isMobileMenuOpen ? (index * 100) + 150 : 0}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div 
          className={clsx(
            "absolute bottom-16 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isMobileMenuOpen ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-xs uppercase tracking-widest text-white/70">
            curator@nexgenfilms.co
          </p>
        </div>
      </div>
    </>
  );
}