import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Work', path: '/#work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="film-grain"></div>
      
      <header 
        className={clsx(
          'fixed top-0 w-full z-40 transition-all duration-500',
          scrolled ? 'glass py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-xl tracking-tighter font-medium uppercase z-50">
            Ziyad <span className="text-zinc-500">Mazzawi</span>
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              link.path.startsWith('/#') && location.pathname === '/' ? (
                <a 
                  key={link.name} 
                  href={link.path.substring(1)} 
                  className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Icon (Visual only for this demo) */}
          <button className="md:hidden text-zinc-50 z-50">
            <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl tracking-tighter font-medium mb-2">ZIYAD MAZZAWI</h3>
            <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} ZMCorp & Next Level Productions.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">
              <iconify-icon icon="simple-icons:instagram" width="24" height="24"></iconify-icon>
            </a>
            <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">
              <iconify-icon icon="simple-icons:linkedin" width="24" height="24"></iconify-icon>
            </a>
            <a href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">
              <iconify-icon icon="simple-icons:youtube" width="24" height="24"></iconify-icon>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}