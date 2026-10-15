import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-zinc-200' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xl font-medium tracking-tight text-zinc-900 flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 rounded-sm"></div>
            EPIC Ventures
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            {location.pathname === '/' ? (
              <>
                <a href="#thesis" className="hover:text-zinc-900 transition-colors">Thesis</a>
                <a href="#focus" className="hover:text-zinc-900 transition-colors">Focus</a>
                <a href="#stage" className="hover:text-zinc-900 transition-colors">Stage</a>
                <a href="#team" className="hover:text-zinc-900 transition-colors">Team</a>
              </>
            ) : (
              <Link to="/" className="hover:text-zinc-900 transition-colors">Return Home</Link>
            )}
            <Link 
              to="/pitch" 
              className="bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Submit pitch
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="bg-zinc-50 border-t border-zinc-200 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 bg-zinc-900 rounded-sm opacity-50"></div>
              <span className="text-lg font-medium tracking-tight text-zinc-900">EPIC Ventures</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Investing early in B2B technology built for real markets. Backing founders who solve strategic problems with software, AI, and cybersecurity.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-zinc-900 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link></li>
              <li><Link to="/pitch" className="hover:text-zinc-900 transition-colors">Submit Pitch</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-zinc-900 uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><span className="block text-zinc-400">Operated by</span></li>
              <li className="font-medium text-zinc-700">Epic Investments</li>
              <li className="mt-4"><a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-200 text-xs text-zinc-400 flex justify-between items-center">
          <p>© {new Date().getFullYear()} Epic Investments. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-900 transition-colors">
              <iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
            </a>
            <a href="#" className="hover:text-zinc-900 transition-colors">
              <iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}