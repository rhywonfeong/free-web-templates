import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-subtle backdrop-blur-md ${
        scrolled ? 'bg-darker/90 py-3' : 'bg-darker/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-brand">
            <iconify-icon icon="solar:fire-bold-duotone" width="20" height="20"></iconify-icon>
          </div>
          <span className="font-display font-semibold text-xl tracking-tight text-light">BRASEA</span>
        </div>

        {/* CTA */}
        <Button onClick={scrollToWaitlist} size="sm">
          Entrar na lista
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;