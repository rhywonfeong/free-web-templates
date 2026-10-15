import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={clsx(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e781811-d1f2-4321-9e50-25059e089591_320w.png" 
              alt="Growth Wizard Logo" 
              className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg p-1.5 shadow-sm group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className={clsx(
                      "text-sm font-medium transition-colors hover:text-indigo-600",
                      location.pathname === link.path ? "text-indigo-600" : "text-slate-600"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                Contact
              </Link>
              <Button to="/contact" variant="primary" size="sm">
                Book a Consultation
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <iconify-icon 
              icon={isOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
              width="28" 
              height="28"
            ></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden flex flex-col px-4 pt-2 pb-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={clsx(
                "px-4 py-3 rounded-lg text-base font-medium",
                location.pathname === link.path ? "bg-indigo-50 text-indigo-600" : "text-slate-700 hover:bg-slate-50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Contact
          </Link>
          <div className="px-4 pt-2">
            <Button to="/contact" variant="primary" className="w-full">
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}