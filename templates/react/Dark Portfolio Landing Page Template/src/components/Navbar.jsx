import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Connect', id: 'connect' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 flex justify-between items-center',
        scrolled 
          ? 'liquid-glass py-3 border-b-0 rounded-b-3xl mx-4 mt-2' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-xl tracking-tight font-medium text-white flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <iconify-icon icon="solar:star-fall-minimalistic-linear" class="text-zinc-400 text-2xl animate-float"></iconify-icon>
          Studio
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative text-sm text-zinc-400 hover:text-white transition-colors tracking-wide font-medium group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white/50 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </button>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden liquid-glass p-2 rounded-xl flex items-center justify-center cursor-pointer">
          <iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl text-zinc-300"></iconify-icon>
        </div>
      </div>
    </nav>
  );
}