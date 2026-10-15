import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';

function LayoutContent() {
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.collection'), path: '/collection' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.store'), path: '/store' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif tracking-tighter uppercase font-medium">
            Rajesh<span className="text-stone-500">Fashion</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-stone-500 ${
                  location.pathname === link.path ? 'text-stone-900 font-medium' : 'text-stone-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://vinted.com" 
              target="_blank" 
              rel="noreferrer"
              className="ml-4 bg-stone-900 text-white px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors flex items-center gap-2"
            >
              <iconify-icon icon="simple-icons:vinted" width="16"></iconify-icon>
              {t('nav.shop_vinted')}
            </a>
          </nav>

          {/* Mobile & Language Controls */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setLanguage('en')} 
                className={`text-xs font-medium tracking-widest transition-colors ${language === 'en' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}
              >
                EN
              </button>
              <span className="text-stone-300 text-xs">|</span>
              <button 
                onClick={() => setLanguage('nl')} 
                className={`text-xs font-medium tracking-widest transition-colors ${language === 'nl' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}
              >
                NL
              </button>
            </div>
            <button className="md:hidden text-stone-900">
              <iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="bg-stone-900 text-stone-300 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-serif tracking-tighter uppercase text-white mb-4 block">
              Rajesh<span className="text-stone-500">Fashion</span>
            </Link>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://vinted.com" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:vinted" width="24"></iconify-icon>
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:instagram" width="24"></iconify-icon>
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <iconify-icon icon="simple-icons:whatsapp" width="24"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">{t('footer.explore')}</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-widest mb-6">{t('footer.visit')}</h4>
            <address className="not-italic text-sm text-stone-400 space-y-2">
              <p>123 Fashion Avenue</p>
              <p>Amsterdam, 1012 AB</p>
              <p className="pt-4">Mon-Sat: 10:00 - 18:00</p>
              <p>Sun: 12:00 - 17:00</p>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Rajesh Fashion. {t('footer.rights')}</p>
          <p className="mt-2 md:mt-0">{t('footer.crafted')}</p>
        </div>
      </footer>
    </div>
  );
}

export default function Layout() {
  return (
    <LanguageProvider>
      <LayoutContent />
    </LanguageProvider>
  );
}