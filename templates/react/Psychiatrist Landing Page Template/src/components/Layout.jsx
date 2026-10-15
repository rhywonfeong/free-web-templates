import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import Button from './ui/Button';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre o Doutor', path: '/sobre' },
    { name: 'Tratamentos', path: '/tratamentos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header
        className={clsx(
          'fixed top-0 w-full z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-slate-200 shadow-sm py-3'
            : 'bg-transparent border-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 transition-transform duration-300 group-hover:scale-105">
                 <iconify-icon icon="solar:health-bold-duotone" width="24"></iconify-icon>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-medium text-slate-900 tracking-tight leading-tight">
                  Dr. Rafael Longo
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">
                  Psiquiatra
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:text-teal-600',
                    location.pathname === link.path
                      ? 'text-teal-700'
                      : 'text-slate-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button as={Link} to="/contato" variant="primary">
                Agendar Consulta
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <iconify-icon 
                icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
                width="28"
              ></iconify-icon>
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'block px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  location.pathname === link.path
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Button as={Link} to="/contato" variant="primary" className="w-full justify-center">
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="col-span-1 md:col-span-2 space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-teal-400">
                   <iconify-icon icon="solar:health-bold-duotone" width="20"></iconify-icon>
                </div>
                <span className="text-xl font-medium text-white tracking-tight">
                  Dr. Rafael Longo
                </span>
              </Link>
              <p className="text-sm leading-relaxed max-w-sm text-slate-400">
                Atendimento psiquiátrico ético, focado no acolhimento e na prática clínica baseada nas melhores evidências científicas.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                  <iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                  <iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Navegação</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:map-point-linear" width="20" className="text-teal-400 shrink-0"></iconify-icon>
                  <span>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:phone-linear" width="20" className="text-teal-400 shrink-0"></iconify-icon>
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:letter-linear" width="20" className="text-teal-400 shrink-0"></iconify-icon>
                  <span>contato@drrafaellongo.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Dr. Rafael Longo. Todos os direitos reservados.</p>
            <div className="flex gap-4">
               <span>CRM-SP 000000</span>
               <span>|</span>
               <span>RQE 00000</span>
            </div>
            <p>Responsável Técnico: Dr. Rafael Longo</p>
          </div>
          
          <div className="mt-4 text-[10px] text-slate-600 text-center md:text-left max-w-3xl">
            Aviso legal: As informações contidas neste site têm caráter informativo e não devem substituir a consulta médica. Em caso de emergência psiquiátrica, procure o pronto-socorro mais próximo ou ligue 192 (SAMU) / 188 (CVV).
          </div>
        </div>
      </footer>
    </div>
  );
}