import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'py-4' : 'py-6'
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={clsx(
          'flex items-center justify-between transition-all duration-300 rounded-full px-6 py-3',
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border border-black/5' : 'bg-transparent'
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group w-[200px]">
            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-500">
              <iconify-icon icon="solar:star-fall-bold-duotone" width="18"></iconify-icon>
            </div>
            <span className="font-bold tracking-tight text-lg text-zinc-900">Eddie.</span>
          </Link>
          
          {/* Centered Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-zinc-600">
            <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#cases" className="hover:text-zinc-900 transition-colors">Cases</a>
            <a href="#process" className="hover:text-zinc-900 transition-colors">Process</a>
            <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
          </div>

          {/* CTA */}
          <div className="w-[200px] flex justify-end">
            <button className="hidden md:flex items-center justify-center bg-zinc-900 text-white px-6 py-2.5 rounded-full text-[14px] font-semibold hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
              Start Project
            </button>
            <button className="md:hidden text-zinc-900 text-2xl flex items-center">
              <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}