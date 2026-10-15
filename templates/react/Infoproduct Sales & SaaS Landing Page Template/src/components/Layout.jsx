import { Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#FFD970]/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#487BFF]/[0.03] blur-[120px]" />
      </div>

      {/* Navbar */}
      <header
        className={clsx(
          'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
          scrolled ? 'bg-[#0C0C0C]/80 backdrop-blur-md border-white/5 py-3' : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-2xl font-semibold tracking-tight text-[#FFD970] flex items-center gap-2">
              <iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
              AUGE
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
              <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
              <a href="#para-quem" className="hover:text-white transition-colors">Para quem é</a>
              <a href="#conteudos" className="hover:text-white transition-colors">Conteúdos</a>
              <a href="#suporte" className="hover:text-white transition-colors">Suporte</a>
            </nav>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <button className="text-gray-300 hover:text-white transition-colors hidden sm:block">
              Entrar
            </button>
            <button className="bg-[#FFD970] text-[#0C0C0C] px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(255,217,112,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]">
              Criar conta
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow z-10 pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0C0C0C] pt-20 pb-10 z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-semibold tracking-tight text-[#FFD970] flex items-center gap-2">
                <iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
                AUGE
              </span>
              <p className="text-sm text-gray-500 max-w-xs">
                A plataforma completa para criar, vender e escalar infoprodutos.
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 font-medium">
              <a href="#" className="hover:text-white transition-colors">Sobre a AUGE</a>
              <a href="#" className="hover:text-white transition-colors">Termos e privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Suporte</a>
              <a href="#" className="hover:text-white transition-colors">Conteúdos</a>
            </nav>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} AUGE. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors text-lg"><iconify-icon icon="simple-icons:instagram"></iconify-icon></a>
              <a href="#" className="hover:text-white transition-colors text-lg"><iconify-icon icon="simple-icons:linkedin"></iconify-icon></a>
              <a href="#" className="hover:text-white transition-colors text-lg"><iconify-icon icon="simple-icons:x"></iconify-icon></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}