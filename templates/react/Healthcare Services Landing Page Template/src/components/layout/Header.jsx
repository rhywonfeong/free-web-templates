import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-teal-700 text-white rounded-md flex items-center justify-center group-hover:bg-teal-800 transition-colors">
              <iconify-icon icon="solar:health-bold" width="22" height="22"></iconify-icon>
            </div>
            <div>
              <h1 className="font-semibold text-lg md:text-xl text-slate-900 tracking-tight leading-none">EABENSON</h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-0.5">Healthcare Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
              <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-sm">
                Get in Touch
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-teal-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <iconify-icon 
              icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
              width="28" 
              height="28"
            ></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-base font-medium text-slate-700 py-3 border-b border-slate-50 hover:text-teal-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center px-5 py-3 mt-4 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors">
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;