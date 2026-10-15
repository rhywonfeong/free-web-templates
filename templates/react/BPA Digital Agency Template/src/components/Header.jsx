import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getNavLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `nav-link text-sm transition-colors ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}`;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={closeMobileMenu} className="nav-link text-white text-xl font-semibold tracking-tighter hover:text-[#ccff00] transition-colors">
          BPA.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/about" className={getNavLinkClass('/about')}>O nás</Link>
          <Link to="/services" className={getNavLinkClass('/services')}>Služby</Link>
          <Link to="/work" className={getNavLinkClass('/work')}>Naše práce</Link>
          <Link to="/blog" className={getNavLinkClass('/blog')}>Blog</Link>
          <Link to="/career" className={getNavLinkClass('/career')}>Kariéra</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="nav-link bg-[#ccff00] text-black px-6 py-2.5 text-sm font-medium hover:bg-[#b3e600] transition-colors rounded-full inline-flex items-center gap-2">
            Získat návrh
            <iconify-icon icon="solar:arrow-right-linear" width="1.2em" height="1.2em"></iconify-icon>
          </Link>
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden text-white p-2">
          <iconify-icon 
            icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
            width="1.5em" 
            height="1.5em"
          ></iconify-icon>
        </button>
      </div>

      <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} absolute top-20 left-0 w-full bg-black border-b border-neutral-900 p-6 flex-col gap-6 md:hidden`}>
        <Link to="/about" onClick={closeMobileMenu} className="nav-link text-lg text-white text-left">O nás</Link>
        <Link to="/services" onClick={closeMobileMenu} className="nav-link text-lg text-white text-left">Služby</Link>
        <Link to="/work" onClick={closeMobileMenu} className="nav-link text-lg text-white text-left">Naše práce</Link>
        <Link to="/blog" onClick={closeMobileMenu} className="nav-link text-lg text-white text-left">Blog</Link>
        <Link to="/career" onClick={closeMobileMenu} className="nav-link text-lg text-white text-left">Kariéra</Link>
        <Link to="/contact" onClick={closeMobileMenu} className="nav-link bg-[#ccff00] text-black px-5 py-3 text-sm font-medium rounded-full flex justify-center items-center gap-2 mt-4">
          Získat návrh
          <iconify-icon icon="solar:arrow-right-linear" width="1.2em" height="1.2em"></iconify-icon>
        </Link>
      </div>
    </header>
  );
}