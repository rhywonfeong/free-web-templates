import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e, targetId) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Espaço', id: 'estrutura' },
    { name: 'Programas', id: 'programas' },
    { name: 'Equipe', id: 'equipe' },
    { name: 'Planos', id: 'planos' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <iconify-icon icon="solar:bolt-circle-linear" class="text-3xl text-[#00F9E4] group-hover:scale-110 transition-transform"></iconify-icon>
            <span className="text-xl font-semibold tracking-tight text-white">FORGEE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-sm font-medium text-[#9A9A9A] hover:text-[#00F9E4] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden lg:flex">SOU MEMBRO</Button>
            <Button onClick={() => navigate('/agendar')} size="sm">AGENDAR VISITA</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[#F5F5F5] text-2xl p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-[#2A2A2A] p-6 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-lg font-medium text-[#F5F5F5] py-2 border-b border-[#1C1C1C]"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button variant="secondary" className="w-full">SOU MEMBRO</Button>
              <Button onClick={() => navigate('/agendar')} className="w-full">AGENDAR VISITA</Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-[#0A0A0A] border-t border-[#1C1C1C] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <iconify-icon icon="solar:bolt-circle-linear" class="text-3xl text-[#00F9E4]"></iconify-icon>
                <span className="text-2xl font-semibold tracking-tight text-white">FORGEE</span>
              </Link>
              <p className="text-[#6B6B6B] text-sm max-w-sm mb-6">
                BEYOND LIMITS KNOWN. Um espaço desenhado para quem treina com intenção. Sem distrações.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-[#6B6B6B] hover:text-[#00F9E4] transition-colors">
                  <iconify-icon icon="simple-icons:instagram" class="text-xl"></iconify-icon>
                </a>
                <a href="#" className="text-[#6B6B6B] hover:text-[#00F9E4] transition-colors">
                  <iconify-icon icon="simple-icons:whatsapp" class="text-xl"></iconify-icon>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">NAVEGAÇÃO</h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={`#${link.id}`} 
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="text-[#9A9A9A] hover:text-[#00F9E4] text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">LEGAL</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-[#9A9A9A] hover:text-white text-sm transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-[#9A9A9A] hover:text-white text-sm transition-colors">Termos de Uso</a></li>
                <li className="text-[#6B6B6B] text-sm mt-2">CNPJ 00.000.000/0001-00</li>
                <li className="text-[#6B6B6B] text-sm">CREF-SP</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1C1C1C] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6B6B6B] text-xs">© 2026 FORGEE ACADEMY. Todos os direitos reservados.</p>
            <p className="text-[#6B6B6B] text-xs font-medium tracking-widest uppercase">Design System Edition</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;