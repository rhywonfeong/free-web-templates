import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Button from '../ui/Button';

const MENU_ITEMS = [
  {
    label: 'Ecosistema',
    path: '/ecosistema',
    dropdown: [
      { title: '¿Qué es Serenity Star?', path: '/ecosistema/que-es' },
      { title: 'Framework GenAI Full Spectrum', path: '/ecosistema/framework' },
    ],
  },
  {
    label: 'Platform',
    path: '/platform',
    dropdown: [
      { title: 'Prebuilt Agents', path: '/platform/prebuilt' },
      { title: 'No-Code Agent Builder', path: '/platform/no-code' },
      { title: 'Agent Development Platform', path: '/platform/dev' },
      { title: 'Serenity AI Hub', path: '/platform/hub' },
      { title: 'Serenity AI Chat', path: '/platform/chat' },
    ],
  },
  {
    label: 'Soluciones',
    path: '/soluciones',
    dropdown: [
      { title: 'Por Rol', path: '/soluciones/rol' },
      { title: 'Por Industria', path: '/soluciones/industria' },
      { title: 'Por Caso de Uso', path: '/soluciones/casos' },
    ],
  },
  { label: 'Casos de Uso', path: '/casos-de-uso' },
  {
    label: 'Recursos',
    path: '/recursos',
    dropdown: [
      { title: 'Network de partners', path: '/recursos/partners' },
      { title: 'Documentación técnica', path: '/recursos/docs' },
      { title: 'Webinars & Training', path: '/recursos/training' },
    ],
  },
  { label: 'Pricing', path: '/pricing' },
];

export default function Header() {
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 rounded-lg bg-[#4862ff] flex items-center justify-center text-white shadow-md">
             <iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
          </div>
          <span className="font-semibold text-lg tracking-tight text-slate-900">Serenity Star</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {MENU_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.path}
                className="text-sm font-medium text-slate-600 hover:text-[#4862ff] transition-colors flex items-center gap-1 py-2"
              >
                {item.label}
                {item.dropdown && (
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
                )}
              </Link>
              
              {/* Dropdown Mega Menu (Simplified) */}
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-[#bdc7cc]/40 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 transform scale-95 group-hover:scale-100">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.path}
                      className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#4862ff] hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden lg:flex items-center gap-4 z-50">
          <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-[#4862ff] transition-colors">
            Login
          </Link>
          <Button href="/contacto" variant="primary" size="sm">
            Contacto
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 text-slate-900 p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <iconify-icon 
            icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
            width="24"
          ></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-all duration-300 lg:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6">
          {MENU_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-slate-100 pb-4">
              <Link to={item.path} className="text-lg font-semibold text-slate-900 block mb-3">
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="flex flex-col gap-3 pl-4">
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem.title} to={subItem.path} className="text-base text-slate-600">
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button href="/login" variant="outline" className="w-full justify-center">
              Login
            </Button>
            <Button href="/contacto" variant="primary" className="w-full justify-center">
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}