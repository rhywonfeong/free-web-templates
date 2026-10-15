import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Specifications', path: '/specs' },
  ];

  return (
    <nav className={clsx(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent',
      scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-zinc-800/50 py-3' : 'bg-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all">
            <iconify-icon icon="solar:bicycling-bold" width="20"></iconify-icon>
          </div>
          <span className="text-xl font-medium tracking-tight text-white">AeroX</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-cyan-400',
                location.pathname === link.path ? 'text-white' : 'text-zinc-400'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-sm font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
            Pre-order
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </button>
          
          {/* Mobile menu toggle (visual only for this demo) */}
          <button className="md:hidden text-zinc-300 hover:text-white">
            <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
          </button>
        </div>
      </div>
    </nav>
  );
}