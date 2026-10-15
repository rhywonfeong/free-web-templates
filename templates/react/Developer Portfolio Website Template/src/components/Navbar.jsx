import React, { useState, useEffect } from 'react';
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

  const navLinks = [
    { name: 'Обо мне', href: '#about' },
    { name: 'Навыки', href: '#tech' },
    { name: 'Проекты', href: '#projects' },
  ];

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 py-4 flex justify-center",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <nav 
        className={clsx(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 w-full max-w-3xl",
          scrolled 
            ? "glass-panel bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg" 
            : "bg-transparent"
        )}
      >
        <a href="#" className="text-white font-medium text-lg tracking-tight flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-sm font-semibold shadow-[0_0_15px_rgba(43,108,238,0.5)] group-hover:shadow-[0_0_25px_rgba(43,108,238,0.7)] transition-all">
            НШ
          </span>
          <span className="hidden sm:block">Назарий</span>
        </a>

        <div className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="hidden sm:flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all backdrop-blur-md"
          >
            Связаться
          </a>
        </div>
      </nav>
    </header>
  );
}