import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-[#030308]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold tracking-tighter shadow-[0_0_15px_rgba(113,69,214,0.5)] group-hover:shadow-[0_0_25px_rgba(113,69,214,0.8)] transition-shadow">
            A
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">Astravia</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#diferencial" className="hover:text-white transition-colors">Enfoque</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#contacto" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-violet-500/50 transition-all text-white">
            Hablemos
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="28" height="28"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030308]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Servicios</a>
          <a href="#diferencial" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Enfoque</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">Proyectos</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="mt-4 inline-block text-center px-5 py-3 rounded-xl bg-violet-600 text-white font-medium">
            Hablemos
          </a>
        </div>
      )}
    </header>
  );
}