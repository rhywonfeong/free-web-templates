import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Preventa', path: '/' },
    { name: 'Panel dApp', path: '/dashboard' },
    { name: 'Portal RWA', path: '/rwa' },
    { name: 'Gobernanza', path: '/governance' },
    { name: 'Visión', path: '/narratives' }
  ];

  return (
    <div className="relative z-10 flex flex-col min-h-screen text-white w-full">
      {/* Navbar - Swiss Minimalist */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
              <span className="font-syne font-bold text-xl text-black tracking-tighter">D</span>
            </div>
            <span className="font-inter font-bold text-xl tracking-tight uppercase">Dracma Club</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => navigate(item.path)} 
                className={`${location.pathname === item.path ? 'text-white' : 'text-white/50 hover:text-white'} transition-colors tracking-wide`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button className="bg-white text-black rounded-sm px-6 py-2.5 flex items-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer">
            <span className="text-sm font-bold uppercase tracking-tight">Conectar Billetera</span>
            <iconify-icon icon="lucide:wallet" className="text-black"></iconify-icon>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 w-full">
        {children}
      </main>

      {/* Enterprise Footer */}
      <footer className="mt-auto border-t border-white/10 bg-[#050505] pt-20 pb-10 w-full">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center rounded-sm">
                <span className="font-syne font-bold text-xl text-white tracking-tighter">D</span>
              </div>
              <span className="font-inter font-bold text-xl tracking-tight uppercase">Dracma</span>
            </div>
            <p className="text-white/50 text-sm max-w-md mb-8 leading-relaxed">
              Infraestructura institucional de grado empresarial. Integrando RWA, Centros de Datos Alimentados por Energía Solar y soluciones Fintech a través de una red descentralizada de élite.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-sm">
                <iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-sm">
                <iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-sm">
                <iconify-icon icon="simple-icons:telegram" width="18"></iconify-icon>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-inter font-bold uppercase tracking-tight mb-6 text-white text-sm">Ecosistema</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors">Preventa Institucional</button></li>
              <li><button onClick={() => navigate('/dashboard')} className="hover:text-white transition-colors">Panel Fintech</button></li>
              <li><button onClick={() => navigate('/rwa')} className="hover:text-white transition-colors">Activos RWA</button></li>
              <li><button onClick={() => navigate('/governance')} className="hover:text-white transition-colors">Gobernanza Suiza</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-inter font-bold uppercase tracking-tight mb-6 text-white text-sm">Legal & Cumplimiento</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Libro Blanco (Whitepaper)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Auditoría de Contratos Inteligentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cumplimiento KYC / AML</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 uppercase tracking-widest font-medium">
          <p>© 2026 DRACMA CLUB DAO. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><iconify-icon icon="lucide:shield-check" className="text-white"></iconify-icon> Auditado por CertiK</span>
            <span className="flex items-center gap-2"><iconify-icon icon="lucide:server" className="text-white"></iconify-icon> Servidores Suizos Grado Bancario</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;