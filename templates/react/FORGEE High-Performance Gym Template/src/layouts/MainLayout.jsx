import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#141414]">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#141414]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <Link to="/" className="font-display text-4xl tracking-tight leading-none text-white">FORGEE</Link>
            <span className="text-xs text-[#888888] font-medium tracking-widest mt-1 hidden md:block uppercase">Beyond Limits Known™ · Indaiatuba, SP · Est. 2018</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {['espaco', 'programas', 'equipe', 'planos'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-white/70 hover:text-white uppercase tracking-widest transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-semibold text-white uppercase tracking-wider px-6 py-3 rounded-md border border-white/20 hover:bg-white/5 transition-colors">
              Sou Membro
            </button>
            <button className="text-sm font-semibold text-white uppercase tracking-wider px-6 py-3 rounded-full bg-[#E84A1A] hover:shadow-[0_0_24px_rgba(232,74,26,0.4)] transition-all">
              Agendar Visita
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#141414] pt-32 px-6 flex flex-col gap-8">
          <nav className="flex flex-col gap-6">
            {['espaco', 'programas', 'equipe', 'planos'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-3xl font-display text-white uppercase tracking-tight text-left"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-8">
            <button className="text-sm font-semibold text-white uppercase tracking-wider px-6 py-4 rounded-md border border-white/20 text-center">
              Sou Membro
            </button>
            <button className="text-sm font-semibold text-white uppercase tracking-wider px-6 py-4 rounded-full bg-[#E84A1A] text-center">
              Agendar Visita
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] pt-24 pb-12 px-6 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="font-display text-6xl text-white tracking-tight mb-2">FORGEE</h2>
              <p className="text-[#CCFF00] tracking-widest text-sm uppercase font-medium mb-8">B E Y O N D L I M I T S K N O W N ™</p>
              <p className="text-[#888888] text-sm max-w-sm leading-relaxed">
                Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Academia</h4>
              <ul className="flex flex-col gap-4">
                {['Espaço', 'Programas', 'Equipe', 'Planos'].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item.toLowerCase())} className="text-[#888888] hover:text-white transition-colors text-sm">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Legal & Redes</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[#888888] hover:text-white transition-colors text-sm">Política de Privacidade</a></li>
                <li><a href="#" className="text-[#888888] hover:text-white transition-colors text-sm">Termos de Uso</a></li>
                <li className="mt-4 flex gap-4">
                  <a href="#" className="text-white/50 hover:text-[#E84A1A] text-2xl transition-colors">
                    <iconify-icon icon="simple-icons:instagram"></iconify-icon>
                  </a>
                  <a href="#" className="text-white/50 hover:text-[#E84A1A] text-2xl transition-colors">
                    <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#888888] uppercase tracking-widest text-center md:text-left">
              FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
            </p>
            <p className="text-xs text-[#888888] uppercase tracking-widest">
              DESIGN SYSTEM © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}