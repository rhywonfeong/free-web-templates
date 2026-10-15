import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#f4f6f8] border-t border-[#bdc7cc]/30 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#4862ff] flex items-center justify-center text-white">
                 <iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
              </div>
              <span className="font-semibold text-lg tracking-tight text-slate-900">Serenity Star</span>
            </Link>
            <p className="text-sm text-slate-500 mb-6 max-w-sm leading-relaxed">
              El ecosistema empresarial que cierra la brecha entre la exploración y la producción real en IA generativa.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-[#4862ff] transition-colors" aria-label="Twitter">
                <iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-[#4862ff] transition-colors" aria-label="LinkedIn">
                <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-[#4862ff] transition-colors" aria-label="GitHub">
                <iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
              </a>
              <a href="#" className="text-slate-400 hover:text-[#4862ff] transition-colors" aria-label="Discord">
                <iconify-icon icon="simple-icons:discord" width="20"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm">Plataforma</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/platform" className="text-sm text-slate-500 hover:text-[#4862ff]">AI Hub</Link></li>
              <li><Link to="/platform" className="text-sm text-slate-500 hover:text-[#4862ff]">AI Chat</Link></li>
              <li><Link to="/platform" className="text-sm text-slate-500 hover:text-[#4862ff]">Agent Builder</Link></li>
              <li><Link to="/pricing" className="text-sm text-slate-500 hover:text-[#4862ff]">Precios</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm">Soluciones</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/soluciones" className="text-sm text-slate-500 hover:text-[#4862ff]">Para Desarrolladores</Link></li>
              <li><Link to="/soluciones" className="text-sm text-slate-500 hover:text-[#4862ff]">Salud / Pharma</Link></li>
              <li><Link to="/soluciones" className="text-sm text-slate-500 hover:text-[#4862ff]">Finanzas</Link></li>
              <li><Link to="/casos-de-uso" className="text-sm text-slate-500 hover:text-[#4862ff]">Casos de éxito</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm">Compañía</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-[#4862ff]">Sobre nosotros</Link></li>
              <li><Link to="/recursos" className="text-sm text-slate-500 hover:text-[#4862ff]">Blog</Link></li>
              <li><Link to="/contacto" className="text-sm text-slate-500 hover:text-[#4862ff]">Contacto</Link></li>
              <li><Link to="/legal" className="text-sm text-slate-500 hover:text-[#4862ff]">Privacidad</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#bdc7cc]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Serenity Star. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
            Enterprise Grade Security
          </div>
        </div>
      </div>
    </footer>
  );
}