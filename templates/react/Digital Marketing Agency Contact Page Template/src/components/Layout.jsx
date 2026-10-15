import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { 
      name: 'Hizmetler', 
      path: '/hizmetler',
      subLinks: [
        { name: 'SEO Optimizasyonu', path: '/hizmetler/seo' },
        { name: 'Google Ads & Performans', path: '/hizmetler/google-ads' },
        { name: 'Sosyal Medya Yönetimi', path: '/hizmetler/sosyal-medya' },
        { name: 'Web Tasarım & Yazılım', path: '/hizmetler/web-tasarim' },
      ]
    },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <header
        className={clsx(
          'fixed top-0 w-full z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-gray-200 py-3 shadow-sm'
            : 'bg-white border-transparent py-5'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
              <iconify-icon icon="solar:planet-3-bold" width="20"></iconify-icon>
            </div>
            <span className="font-semibold text-lg tracking-tight">Nexus.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={clsx(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-slate-900 py-2",
                    location.pathname.startsWith(link.path) ? "text-slate-900" : "text-slate-500"
                  )}
                >
                  {link.name}
                  {link.subLinks && (
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="transition-transform group-hover:rotate-180"></iconify-icon>
                  )}
                </Link>
                
                {link.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1 ring-1 ring-black ring-opacity-5">
                      {link.subLinks.map(sub => (
                        <Link 
                          key={sub.path} 
                          to={sub.path} 
                          className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/iletisim"
              className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all hover:shadow-md active:scale-95"
            >
              Teklif Alın
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-600 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç"
          >
            <iconify-icon 
              icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
              width="24"
            ></iconify-icon>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-4 flex flex-col gap-2 h-[85vh] overflow-y-auto z-50">
            {navLinks.map((link) => (
              <div key={link.path} className="flex flex-col border-b border-gray-50 pb-2">
                <Link
                  to={link.path}
                  className="text-base font-semibold text-slate-900 py-3 flex items-center justify-between"
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="flex flex-col gap-1 pl-4 mb-2 border-l-2 border-slate-100 ml-2">
                    {link.subLinks.map(sub => (
                      <Link 
                        key={sub.path} 
                        to={sub.path} 
                        className="text-sm font-medium text-slate-500 py-2 hover:text-slate-900 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/iletisim"
              className="text-center text-sm font-medium bg-slate-900 text-white px-4 py-3.5 rounded-xl mt-6 active:scale-95 transition-transform"
            >
              Teklif Alın
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24 pb-16">
        <Outlet />
      </main>

      <footer className="bg-slate-50 border-t border-gray-200 pt-16 pb-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
                  <iconify-icon icon="solar:planet-3-bold" width="14"></iconify-icon>
                </div>
                <span className="font-medium tracking-tight">Nexus Dijital</span>
              </Link>
              <p className="text-sm text-slate-500 mb-6 max-w-sm leading-relaxed">
                Yeni nesil teknoloji şirketleri ve büyümeyi hedefleyen markalar için veriye dayalı uçtan uca dijital pazarlama çözümleri.
              </p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-slate-900 transition-colors">
                  <iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
                </a>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  <iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
                </a>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  <iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Hizmetler</h3>
              <ul className="space-y-3">
                <li><Link to="/hizmetler/seo" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">SEO Optimizasyonu</Link></li>
                <li><Link to="/hizmetler/google-ads" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Google Ads & Performans</Link></li>
                <li><Link to="/hizmetler/sosyal-medya" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Sosyal Medya Yönetimi</Link></li>
                <li><Link to="/hizmetler/web-tasarim" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Web Tasarım & Yazılım</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Şirket</h3>
              <ul className="space-y-3">
                <li><Link to="/blog" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Blog & Vakalar</Link></li>
                <li><Link to="/iletisim" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">İletişim</Link></li>
                <li><a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Gizlilik Politikası</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Nexus Dijital Ajans. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              Designed for Growth in Istanbul
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}