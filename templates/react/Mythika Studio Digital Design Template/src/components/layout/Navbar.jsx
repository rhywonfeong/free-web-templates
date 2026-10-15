import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#2E2E2E]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <iconify-icon icon="solar:star-fall-bold-duotone" class="text-[#9333EA] text-2xl"></iconify-icon>
          MYTHIKA
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">Sobre</a>
          <a href="#servicos" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">Serviços</a>
          <a href="#metodo" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">Método</a>
          <a href="#portfolio" className="text-sm text-[#8A8A8A] hover:text-white transition-colors">Portfólio</a>
        </nav>

        <a 
          href="#contato"
          className="hidden md:flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-[#2E2E2E] px-4 py-2 rounded-lg text-sm font-medium transition-all"
        >
          Falar com a Mythika
        </a>

        <button className="md:hidden text-white text-2xl">
          <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
        </button>
      </div>
    </header>
  );
};

export default Navbar;