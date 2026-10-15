import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Coverage', path: '/coverage' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Premium Progressive Blur Overlay for smooth header background */}
      <div className={clsx(
        "gradient-blur transition-opacity duration-300",
        isScrolled && !mobileMenuOpen ? "opacity-100" : "opacity-0"
      )}>
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      <header 
        className={clsx(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          mobileMenuOpen 
            ? "bg-transparent border-transparent py-4" /* Transparent when menu opens to blend seamlessly */
            : (isScrolled 
                ? "bg-[#050505]/60 border-[#FF3C00] shadow-[0_4px_30px_rgba(255,60,0,0.15)] py-2" 
                : "bg-[#050505] border-[#2A2A2A] py-4"
              )
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="flex items-center justify-center w-12 h-12 bg-[#FF3C00] clip-corner transition-transform group-hover:scale-105">
              <iconify-icon icon="solar:routing-2-bold" class="text-[#050505] text-3xl"></iconify-icon>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold tracking-tight text-white uppercase leading-none">
                TITAN<span className="text-[#FF3C00]">RECOVERY</span>
              </span>
              <span className="font-mono text-[9px] text-[#CCFF00] tracking-[0.2em] mt-1 hidden sm:block">
                HEAVY DUTY LOGISTICS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => clsx(
                  "relative font-heading text-lg tracking-wider uppercase transition-colors duration-300 group overflow-hidden py-1",
                  isActive ? "text-[#FF3C00]" : "text-gray-400 hover:text-white"
                )}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    <span className={clsx(
                      "absolute bottom-0 left-0 w-full h-[2px] bg-[#FF3C00] transform origin-left transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}></span>
                  </>
                )}
              </NavLink>
            ))}
            <a href="tel:9547589694" className="flex items-center gap-2 px-6 py-3 bg-[#121212] border border-[#333] text-white font-heading text-lg tracking-wider uppercase hover:border-[#FF3C00] hover:bg-[#FF3C00] hover:text-[#050505] transition-all duration-300 clip-corner group">
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#CCFF00] group-hover:bg-[#050505]"></span>
              </span>
              24/7 DISPATCH
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 -mr-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon 
              icon={mobileMenuOpen ? "solar:close-square-bold" : "solar:hamburger-menu-linear"} 
              class="text-4xl text-[#FF3C00]"
            ></iconify-icon>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay - Moved OUTSIDE the header to prevent backdrop-filter containing block scroll bugs */}
      <div className={clsx(
        "fixed inset-0 bg-[#050505] z-40 md:hidden transition-all duration-500 flex flex-col items-center justify-center gap-8 before:content-[''] before:absolute before:inset-0 before:bg-schematic",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => clsx(
              "font-heading text-4xl uppercase tracking-widest transition-colors duration-200 relative z-10",
              isActive ? "text-[#FF3C00]" : "text-gray-300 hover:text-white"
            )}
          >
            {link.name}
          </NavLink>
        ))}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] w-3/4 flex flex-col items-center gap-4 relative z-10">
           <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest">Emergency Line Active</span>
           <a href="tel:9547589694" className="font-heading text-4xl text-white tracking-tight text-[#FF3C00] glow-text">(954) 758-9694</a>
        </div>
      </div>
    </>
  );
}