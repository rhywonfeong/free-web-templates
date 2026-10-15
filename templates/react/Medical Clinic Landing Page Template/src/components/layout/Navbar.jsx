import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Início', path: '/' },
    { name: 'Corpo Clínico', path: '/#equipe' },
    { name: 'O Espaço', path: '/#espaco' },
    { name: 'Contato', path: '/contato' },
  ];

  const handleScroll = (e, path) => {
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        // Let standard routing handle it if not on home
        return;
      }
      e.preventDefault();
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-blue-800 hover:opacity-80 transition-opacity">
          <iconify-icon icon="solar:infinity-bold" width="24" height="24"></iconify-icon>
          <span className="font-semibold tracking-tight text-lg">Harmonia</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleScroll(e, link.path)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-700",
                location.pathname === link.path ? "text-blue-800" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contato">
            <Button size="sm" className="hidden sm:inline-flex">
              Agendar Consulta
            </Button>
          </Link>
          <button className="md:hidden p-2 text-slate-600">
            <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
          </button>
        </div>
      </div>
    </header>
  );
}