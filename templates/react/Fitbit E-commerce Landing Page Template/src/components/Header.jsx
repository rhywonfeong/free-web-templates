import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Store', path: '/store' },
    { name: 'Products', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-3' 
          : 'bg-transparent py-5 border-b border-white/[0.02]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <iconify-icon 
            icon="simple-icons:fitbit" 
            class="text-2xl text-white group-hover:text-orange-500 transition-colors"
          ></iconify-icon>
          <span className="font-medium tracking-tight text-lg">fitbit</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-white ${
                location.pathname === link.path ? 'text-white' : 'text-neutral-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button className="text-neutral-400 hover:text-white transition-colors" aria-label="Search">
            <iconify-icon icon="solar:magnifer-linear" class="text-xl"></iconify-icon>
          </button>
          <button className="text-neutral-400 hover:text-white transition-colors relative" aria-label="Cart">
            <iconify-icon icon="solar:cart-large-2-linear" class="text-xl"></iconify-icon>
            <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-orange-500 text-[9px] font-bold flex items-center justify-center rounded-full text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;