import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function GlobalHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/explore', label: 'Explore' },
    { path: '/ecosystem', label: 'Ecosystem' },
    { path: '/nodes', label: 'Nodes' },
    { path: '/network', label: 'Network' },
  ];

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer z-10">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00010d9a-49f0-4113-9e52-a8c593325660_320w.jpg" 
            alt="DRT Logo" 
            className="h-8 w-auto mix-blend-screen object-contain group-hover:opacity-80 transition-opacity"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={clsx(
                "text-sm font-medium transition-colors tracking-wide",
                location.pathname === link.path ? "text-white" : "text-zinc-400 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 z-10">
          <Link to="/start-scaling" className="hidden md:flex items-center gap-2 text-sm font-medium text-black bg-white px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Start Scaling
          </Link>
          <button className="md:hidden text-white p-2">
            <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
          </button>
        </div>
      </div>
    </header>
  );
}