import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 w-full z-40 transition-all duration-500 border-b ${
    scrolled || !isHome 
      ? 'bg-[#050A10]/90 backdrop-blur-md py-4 border-white/5 shadow-lg' 
      : 'bg-transparent py-6 border-transparent'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <iconify-icon icon="solar:anchor-outline" style={{ fontSize: '24px' }} className="text-gold transition-transform group-hover:scale-110"></iconify-icon>
          <span className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-gold transition-colors">Aurelia</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-body text-sm text-gray-300">
          {['Destinations', 'Ships', 'Experiences'].map((item) => (
            <Link 
              key={item} 
              to="/" 
              className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/book" 
            className="px-6 py-2.5 bg-transparent border border-white/20 text-white font-body text-sm hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm hidden sm:block"
          >
            Sign In
          </Link>
          <Link 
            to="/book" 
            className="px-6 py-2.5 bg-gold text-[#050A10] font-body font-medium text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(230,201,138,0.4)] transition-all duration-300"
          >
            Reserve
          </Link>
        </div>
      </div>
    </nav>
  );
}