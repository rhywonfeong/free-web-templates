import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <header className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent',
        isScrolled ? 'bg-[#F5F3EF]/90 backdrop-blur-md border-[#D6CFC5] py-4' : 'bg-transparent py-6'
      )}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-[#1A1812] uppercase relative z-50">
            FORGEE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-8">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="text-xs font-medium uppercase tracking-[0.12em] text-[#6B6259] hover:text-[#1A1812] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-6 border-l border-[#D6CFC5] pl-6">
              <Link to="/login" className="text-xs font-medium uppercase tracking-[0.12em] text-[#1A1812] hover:opacity-60 transition-opacity">
                Sou Membro
              </Link>
              <Link to="#agendar" className="text-xs font-medium uppercase tracking-[0.12em] text-[#F5F3EF] bg-[#1A1812] px-6 py-3 hover:bg-[#2D3A2E] transition-colors">
                [ Agendar Visita ]
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 text-[#1A1812] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} width="28"></iconify-icon>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={clsx(
        'fixed inset-0 bg-[#F5F3EF] z-40 flex flex-col justify-center px-6 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]',
        mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      )}>
        <nav className="flex flex-col space-y-8 mb-12">
          {['Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="text-4xl font-semibold tracking-tight text-[#1A1812] uppercase">
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col space-y-4 pt-8 border-t border-[#D6CFC5]">
          <Link to="/login" className="text-sm font-medium uppercase tracking-[0.1em] text-[#6B6259]">Sou Membro</Link>
          <Link to="#agendar" className="text-sm font-medium uppercase tracking-[0.1em] text-[#1A1812] underline underline-offset-4">Agendar Visita</Link>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#1A1812] text-[#F5F3EF] pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 mb-24">
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-4">FORGEE</h2>
              <p className="text-[#A09688] text-sm tracking-[0.2em] uppercase">B e y o n d L i m i t s K n o w n ™</p>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-[#A09688] mb-6">Academia</h4>
            <ul className="space-y-4">
              {['Espaço', 'Programas', 'Equipe', 'Planos'].map(item => (
                <li key={item}><Link to={`/${item.toLowerCase()}`} className="text-sm hover:text-[#C4A882] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-[#A09688] mb-6">Legal & Redes</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm hover:text-[#C4A882] transition-colors">Política de Privacidade</Link></li>
              <li><Link to="#" className="text-sm hover:text-[#C4A882] transition-colors">Termos de Uso</Link></li>
              <li><a href="#" className="text-sm hover:text-[#C4A882] transition-colors flex items-center gap-2"><iconify-icon icon="simple-icons:instagram"></iconify-icon> Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2E2A24] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-xs text-[#A09688] uppercase tracking-wider leading-relaxed">
            FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP<br className="md:hidden" />
            <span className="hidden md:inline"> · </span>DESIGN SYSTEM © 2026
          </div>
          <button onClick={scrollToTop} className="w-12 h-12 border border-[#2E2A24] flex items-center justify-center hover:bg-[#2E2A24] transition-colors" aria-label="Voltar ao topo">
            <iconify-icon icon="solar:arrow-up-linear" width="20"></iconify-icon>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F5F3EF] text-[#1A1812] selection:bg-[#1A1812] selection:text-[#F5F3EF]">
      <Header />
      <main className="flex-grow pt-[80px] md:pt-[104px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}