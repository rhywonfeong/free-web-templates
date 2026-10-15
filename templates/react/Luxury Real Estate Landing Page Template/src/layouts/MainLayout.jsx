import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import BrandLogo from '../components/ui/BrandLogo';
import Button from '../components/ui/Button';
import { clsx } from 'clsx';

export default function MainLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('IT');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Proprietà', path: '/properties' },
    { name: 'Esperienze', path: '#' },
    { name: 'Diario', path: '#' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-[#DCA11D]/30 selection:text-white relative">
      <header 
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled 
            ? "bg-black/80 backdrop-blur-xl border-zinc-900 py-4" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <BrandLogo />
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-[#DCA11D]",
                  location.pathname === link.path ? "text-white" : "text-zinc-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="hidden sm:flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer mr-2">
              <iconify-icon icon="solar:global-linear" class="text-lg"></iconify-icon>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border-none text-sm font-medium focus:outline-none cursor-pointer appearance-none"
              >
                <option value="IT" className="bg-zinc-900 text-white">IT</option>
                <option value="EN" className="bg-zinc-900 text-white">EN</option>
                <option value="ES" className="bg-zinc-900 text-white">ES</option>
                <option value="FR" className="bg-zinc-900 text-white">FR</option>
                <option value="DE" className="bg-zinc-900 text-white">DE</option>
              </select>
            </div>

            <Link to="/contact" className="hidden sm:block">
              <Button variant="outline" size="sm">Contattaci</Button>
            </Link>
            <button className="md:hidden text-white p-2">
              <iconify-icon icon="solar:hamburger-menu-linear" style={{ fontSize: '24px' }}></iconify-icon>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col pt-24">
        <Outlet />
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <BrandLogo />
              <p className="mt-6 text-zinc-400 text-sm max-w-sm leading-relaxed">
                Le location più esclusive in Sicilia. Ridefiniamo il lusso attraverso un'ospitalità autentica e un servizio impareggiabile. Prenota direttamente e salta le commissioni.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6 tracking-tight">Portfolio</h4>
              <ul className="space-y-4">
                <li><Link to="/properties" className="text-zinc-400 hover:text-[#DCA11D] text-sm transition-colors">Tutte le Proprietà</Link></li>
                <li><Link to="#" className="text-zinc-400 hover:text-[#DCA11D] text-sm transition-colors">Ville sul Mare</Link></li>
                <li><Link to="#" className="text-zinc-400 hover:text-[#DCA11D] text-sm transition-colors">Attici Storici</Link></li>
                <li><Link to="#" className="text-zinc-400 hover:text-[#DCA11D] text-sm transition-colors">Tenute</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6 tracking-tight">Contatti</h4>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-zinc-400 hover:text-[#DCA11D] text-sm transition-colors">Supporto</Link></li>
                <li><a href="#" className="text-zinc-400 hover:text-[#DCA11D] text-sm transition-colors flex items-center gap-2">
                  <iconify-icon icon="simple-icons:instagram"></iconify-icon> Instagram
                </a></li>
                <li><a href="#" className="text-zinc-400 hover:text-[#DCA11D] text-sm transition-colors flex items-center gap-2">
                  <iconify-icon icon="simple-icons:x"></iconify-icon> Twitter
                </a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-xs">
              © {new Date().getFullYear()} RENTBASE Sicilia. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6 text-xs text-zinc-600">
              <Link to="#" className="hover:text-zinc-400">Privacy Policy</Link>
              <Link to="#" className="hover:text-zinc-400">Termini di Servizio</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}