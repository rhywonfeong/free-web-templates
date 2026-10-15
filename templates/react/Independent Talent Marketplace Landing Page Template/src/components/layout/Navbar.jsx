import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Find Talent', path: '/talent' },
    { name: 'Find Work', path: '/projects' },
    { name: 'Enterprise', path: '/enterprise' },
  ];

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent',
        scrolled ? 'bg-white/80 backdrop-blur-md border-zinc-200/50 shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-8 h-8 bg-[#098178] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#098178]/20"
            >
              <iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
            </motion.div>
            <span className="font-semibold text-xl tracking-tight text-zinc-950">Aura</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium text-zinc-500 hover:text-[#098178] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#098178] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-zinc-700 hover:text-[#098178] px-4 py-2 transition-colors">
            Log in
          </Link>
          <Link to="/signup" className="text-sm font-medium bg-[#098178] text-white px-6 py-2.5 rounded-full hover:bg-[#076b63] transition-all duration-300 shadow-md shadow-[#098178]/20 hover:shadow-lg hover:shadow-[#098178]/40 hover:-translate-y-0.5">
            Sign up
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden flex items-center text-zinc-900 hover:text-[#098178] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-base font-medium text-zinc-700 hover:text-[#098178] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-zinc-100 my-2"></div>
              <Link to="/login" className="text-base font-medium text-zinc-700 hover:text-[#098178] transition-colors">Log in</Link>
              <Link to="/signup" className="text-base font-medium text-[#098178]">Sign up</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}