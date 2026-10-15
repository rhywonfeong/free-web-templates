import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#FCFBFC]/90 backdrop-blur-md border-b border-[#E2E1E2]' : 'bg-[#FCFBFC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[82px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight text-[#0C0C0C]">RENDIQ</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#produto" className="text-sm font-medium text-[#3D3C3D] hover:text-[#0C0C0C] transition-colors">Produto</a>
            <a href="#funcionalidades" className="text-sm font-medium text-[#3D3C3D] hover:text-[#0C0C0C] transition-colors">Funcionalidades</a>
            <a href="#planos" className="text-sm font-medium text-[#3D3C3D] hover:text-[#0C0C0C] transition-colors">Planos</a>
            <a href="#faq" className="text-sm font-medium text-[#3D3C3D] hover:text-[#0C0C0C] transition-colors">FAQ</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 text-sm font-medium text-[#0C0C0C] bg-[#F0EFF0] hover:bg-[#E2E1E2] rounded-full transition-colors">
              ENTRAR
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold text-lime-contrast bg-lime-accent bg-lime-hover rounded-full transition-colors flex items-center gap-2">
              TESTE GRÁTIS
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#0C0C0C] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon 
              icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
              width="28"
            ></iconify-icon>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FCFBFC] pt-[82px] px-6 flex flex-col h-screen">
          <nav className="flex flex-col gap-6 text-xl font-medium mt-8">
            <a href="#produto" onClick={() => setMobileMenuOpen(false)}>Produto</a>
            <a href="#funcionalidades" onClick={() => setMobileMenuOpen(false)}>Funcionalidades</a>
            <a href="#planos" onClick={() => setMobileMenuOpen(false)}>Planos</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          </nav>
          <div className="mt-auto mb-12 flex flex-col gap-4">
            <button className="w-full py-4 text-base font-medium text-[#0C0C0C] bg-[#F0EFF0] rounded-full">
              ENTRAR
            </button>
            <button className="w-full py-4 text-base font-semibold text-lime-contrast bg-lime-accent rounded-full">
              TESTE GRÁTIS
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;