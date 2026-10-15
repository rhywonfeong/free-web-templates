import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen noise-overlay pt-32">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 technical-grid opacity-60"></div>
      
      <div className="fixed inset-0 pointer-events-none z-0 max-w-[1400px] mx-auto border-x border-black/[0.03]">
        <div className="absolute left-1/4 h-full w-px bg-black/[0.03]"></div>
        <div className="absolute left-2/4 h-full w-px bg-black/[0.03]"></div>
        <div className="absolute left-3/4 h-full w-px bg-black/[0.03]"></div>
      </div>

      {/* Navigation */}
      <div className="fixed z-50 flex w-full top-6 px-6 justify-center">
        <nav className="flex w-full max-w-[1400px] mx-auto items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-4 h-4 bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
               <div className="w-1.5 h-1.5 bg-white"></div>
            </div>
            <span className="text-xs font-semibold tracking-tight text-black uppercase">
              Epic Ventures
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 backdrop-blur-xl bg-white/70 border border-black/5 rounded-full p-1.5 pr-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <NavLink to="/" label="Overview" current={location.pathname === "/"} />
            <NavLink to="/uslugi" label="Usługi" current={location.pathname === "/uslugi"} />
            <NavLink to="/portfolio" label="Portfolio" current={location.pathname === "/portfolio"} />
            <NavLink to="/kontakt" label="Kontakt" current={location.pathname === "/kontakt"} />
          </div>

          <button className="flex items-center gap-2 text-[11px] font-medium text-black uppercase tracking-wider hover:opacity-70 transition-opacity md:hidden">
            Menu
            <span className="text-neutral-400">+</span>
          </button>
          
          <div className="hidden md:block w-[100px]">
             {/* Balancer for flex-between */}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-12 border-t border-black/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="text-[12vw] leading-[0.8] font-semibold tracking-tighter text-black opacity-90 select-none hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-t hover:from-neutral-400 hover:to-black transition-all duration-700 cursor-default">
              EPIC VENTURES
            </div>
            <div className="flex flex-col gap-4 text-right mb-4">
              <Link to="/kontakt" className="text-lg text-neutral-500 hover:text-black transition-colors font-medium">
                Zainicjuj Projekt -&gt;
              </Link>
              <div className="text-sm text-neutral-400">
                Wrocław • Polska
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/5 pt-10">
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-400 mb-4">Sitemap</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li><Link to="/" className="hover:text-black">Strona Główna</Link></li>
                <li><Link to="/uslugi" className="hover:text-black">Zakres Usług</Link></li>
                <li><Link to="/portfolio" className="hover:text-black">Portfolio Inwestycji</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-400 mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-neutral-500">
                <li>biuro@epicventures.pl</li>
                <li>+48 604 102 100</li>
                <li className="pt-2">ul. Elementarzowa 4<br/>51-173 Wrocław</li>
              </ul>
            </div>
            <div className="md:col-span-2 text-right">
              <p className="text-[10px] font-mono uppercase text-neutral-400">
                System Status: <span className="text-emerald-600">Aktywny</span>
              </p>
              <p className="text-[10px] font-mono uppercase text-neutral-400 mt-1">
                © {new Date().getFullYear()} Epic Ventures Sp. z o.o.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavLink({ to, label, current }) {
  return (
    <Link 
      to={to} 
      className={`px-5 py-2 rounded-full text-[11px] font-medium transition-all tracking-wide ${
        current 
          ? 'bg-black text-white shadow-[0_4px_10px_rgba(0,0,0,0.15)]' 
          : 'text-neutral-500 hover:text-black hover:bg-black/5'
      }`}
    >
      {label}
    </Link>
  )
}