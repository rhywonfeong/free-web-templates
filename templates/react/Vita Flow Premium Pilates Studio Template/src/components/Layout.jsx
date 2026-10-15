import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import Button from './Button';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Planos', href: '#planos' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById(href.replace('#', ''));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-ui text-[#4A4A4A] bg-[#EDE6DA]">
      {/* Header */}
      <header 
        className={clsx(
          "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
          isScrolled ? "py-4 bg-[#EDE6DA]/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <iconify-icon icon="solar:leaf-linear" width="32" class="text-[#6F725C] group-hover:text-[#481315] transition-colors duration-300"></iconify-icon>
            <span className="font-editorial text-[#2E2E2E] text-2xl font-semibold tracking-[-0.02em]">Vita Flow</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[14px] font-medium tracking-[0.05em] uppercase text-[#4A4A4A] hover:text-[#481315] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/agendar" variant="primary">Agendar Aula</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#2E2E2E]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="32"></iconify-icon>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={clsx(
        "fixed inset-0 bg-[#EDE6DA] z-40 lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center items-center gap-8",
        isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="font-editorial text-3xl text-[#2E2E2E] hover:text-[#481315] transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="mt-8">
          <Button to="/agendar" variant="primary" onClick={() => setIsMobileMenuOpen(false)}>
            Agendar Aula Experimental
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative pt-[80px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#2E2E2E] text-[#E0D4C1] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 text-white">
              <iconify-icon icon="solar:leaf-linear" width="32"></iconify-icon>
              <span className="font-editorial text-2xl font-semibold tracking-[-0.02em]">Vita Flow</span>
            </Link>
            <p className="text-[15px] leading-[1.6] text-[#D5C0A7]">
              Redefina seu movimento. Transforme sua vida. Um estúdio de Pilates premium focado em saúde integral e movimento consciente.
            </p>
          </div>

          <div>
            <h4 className="font-editorial text-white text-xl mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map(link => (
                <li key={link.name}>
                   <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-[15px] hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-editorial text-white text-xl mb-6">Contato</h4>
            <ul className="space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <iconify-icon icon="solar:map-point-linear" width="20" class="shrink-0 mt-1"></iconify-icon>
                <span>Rua das Acácias, 1234<br/>Jardim Botânico, Porto Alegre - RS</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
                <span>(51) 99999-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                <span>contato@vitaflow.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-editorial text-white text-xl mb-6">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#6F725C] flex items-center justify-center text-white hover:bg-[#6F725C] transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#6F725C] flex items-center justify-center text-white hover:bg-[#6F725C] transition-colors">
                <iconify-icon icon="simple-icons:facebook" width="18"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#6F725C] flex items-center justify-center text-white hover:bg-[#6F725C] transition-colors">
                <iconify-icon icon="simple-icons:youtube" width="18"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 mt-16 pt-8 border-t border-[#4A4A4A] flex flex-col md:flex-row justify-between items-center text-sm text-[#6F725C]">
          <p>&copy; 2026 Vita Flow Pilates Studio. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#D5C0A7] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#D5C0A7] transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}