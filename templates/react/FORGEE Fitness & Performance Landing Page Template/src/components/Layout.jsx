import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';

export default function Layout({ children }) {
  const location = useLocation();
  
  const navItems = [
    { name: 'Espaço', path: '/espaco' },
    { name: 'Programas', path: '/programas' },
    { name: 'Equipe', path: '/equipe' },
    { name: 'Planos', path: '/planos' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#111111]">
      <header className="sticky top-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-2xl tracking-wide text-white">
            FORGEE
          </Link>
          
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  location.pathname === item.path ? 'text-[#E8400A]' : 'text-[#B0B0B0] hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/planos" className="hidden sm:block text-sm font-medium tracking-wide uppercase text-white hover:text-[#E8400A] transition-colors">
              Sou Membro
            </Link>
            <Button>Agendar Visita</Button>
          </div>
        </div>
        {location.pathname === '/' && (
          <div className="w-full bg-[#0A0A0A] py-1 border-b border-[#2A2A2A] text-center">
            <span className="text-xs font-medium tracking-wide uppercase text-[#6B6B6B]">
              Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
            </span>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-[#0A0A0A] pt-24 pb-12 border-t border-[#2A2A2A] mt-auto">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-display font-bold text-4xl tracking-tight text-white mb-2">FORGEE</h3>
              <p className="text-xs font-medium tracking-wide uppercase text-[#E8400A] mb-8">Beyond Limits Known™</p>
              <p className="text-[#B0B0B0] text-sm max-w-sm">
                Um espaço desenhado para quem treina com intenção. Sem distrações. Sem promessas vazias. Só você, o equipamento e o trabalho.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-medium tracking-wide uppercase text-[#6B6B6B] mb-6">Academia</h4>
              <ul className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className="text-[#B0B0B0] text-sm hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs font-medium tracking-wide uppercase text-[#6B6B6B] mb-6">Legal & Redes</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#" className="text-[#B0B0B0] text-sm hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-[#B0B0B0] text-sm hover:text-white transition-colors">Termos de Uso</a></li>
                <li className="mt-4 flex gap-4">
                  <a href="#" className="text-[#B0B0B0] hover:text-[#E8400A] transition-colors text-xl">
                    <iconify-icon icon="simple-icons:instagram"></iconify-icon>
                  </a>
                  <a href="#" className="text-[#B0B0B0] hover:text-[#E8400A] transition-colors text-xl">
                    <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#6B6B6B]">FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
            <p className="text-xs text-[#6B6B6B]">DESIGN SYSTEM © 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}