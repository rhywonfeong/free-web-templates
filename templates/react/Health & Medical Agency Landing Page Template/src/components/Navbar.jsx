import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  const navLinks = [
    { name: 'Services', path: '/#services' },
    { name: 'Chirurgiens', path: '/services/chirurgien-plasticien' },
    { name: 'Cliniques', path: '/services/clinique-medicale' },
  ];

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled ? "bg-[#050505]/90 backdrop-blur-xl py-4 border-b border-white/10" : "bg-transparent py-8"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group relative z-[60]">
            <span className="font-syne font-bold text-2xl tracking-tighter text-white uppercase">
              Roots<span className="text-[#c9a96e]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium tracking-wide text-white/70 hover:text-white uppercase transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c9a96e] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-white text-black font-syne font-bold text-sm uppercase px-6 py-3 hover:bg-[#c9a96e] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Audit gratuit
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white relative z-[60] mix-blend-difference"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-end gap-2">
              <span className={clsx("h-[2px] bg-white transition-all duration-300", mobileMenuOpen ? "w-8 rotate-45 translate-y-[10px]" : "w-8")}></span>
              <span className={clsx("h-[2px] bg-white transition-all duration-300", mobileMenuOpen ? "opacity-0" : "w-6")}></span>
              <span className={clsx("h-[2px] bg-white transition-all duration-300", mobileMenuOpen ? "w-8 -rotate-45 -translate-y-[10px]" : "w-4")}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <div 
        className={clsx(
          "fixed inset-0 bg-[#050505] z-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center px-6",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-syne font-bold text-5xl tracking-tighter text-white uppercase hover:text-[#c9a96e] transition-colors"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px w-full bg-white/10 my-4"></div>
          <Link
            to="/contact"
            className="font-syne font-bold text-3xl tracking-tighter text-[#c9a96e] uppercase"
          >
            Audit gratuit <iconify-icon icon="solar:arrow-right-up-linear" className="inline-block"></iconify-icon>
          </Link>
        </nav>
      </div>
    </>
  );
}