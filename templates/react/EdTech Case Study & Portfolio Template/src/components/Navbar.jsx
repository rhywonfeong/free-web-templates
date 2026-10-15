import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-b border-[#2E2E2E] bg-[#0A0A0A] sticky top-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-opacity-90">
      <Link to="/" className="text-xl font-medium tracking-tight text-[#F0F0F0] flex items-center gap-2 transition-opacity hover:opacity-80">
        <iconify-icon icon="solar:slash-circle-linear" style={{ fontSize: '24px' }}></iconify-icon>
        Mythika.
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest text-[#8A8A8A] font-medium">
        <Link to="/" className="hover:text-[#F0F0F0] transition-colors">Agência</Link>
        <Link to="/" className="text-[#F0F0F0]">Portfólio</Link>
        <Link to="/" className="hover:text-[#F0F0F0] transition-colors">Serviços</Link>
      </div>

      <button className="px-5 py-2 border border-[#2E2E2E] rounded-full text-xs font-medium text-[#F0F0F0] hover:bg-[#F0F0F0] hover:text-[#0A0A0A] transition-all duration-300">
        Iniciar Projeto
      </button>
    </nav>
  );
}