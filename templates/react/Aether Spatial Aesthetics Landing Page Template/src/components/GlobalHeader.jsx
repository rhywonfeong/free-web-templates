import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function GlobalHeader() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/landing';

  // We hide the global header on Home/Landing because the Hero component has its own contained Aether header
  if (isHome) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex pointer-events-auto w-full items-center justify-between px-6 py-4 backdrop-blur-md bg-[#050505]/60 border-b border-white/5">
      <Link to="/" className="flex items-center gap-2 group cursor-pointer">
        <iconify-icon
          icon="solar:box-minimalistic-linear" width="28" height="28"
          class="text-white group-hover:text-indigo-300 transition-colors"
        ></iconify-icon>
        <span className="font-medium text-lg tracking-tight font-geist text-white">Aether</span>
      </Link>

      <nav className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 gap-6 text-sm text-zinc-300 border border-white/5 transition-all duration-300">
          <Link to="/ecosystem" className={clsx("hover:text-white transition-colors font-geist", location.pathname === '/ecosystem' && "text-white font-medium")}>Ecosystem</Link>
          <Link to="/nodes" className={clsx("hover:text-white transition-colors font-geist", location.pathname === '/nodes' && "text-white font-medium")}>Nodes</Link>
          <Link to="/network" className={clsx("hover:text-white transition-colors font-geist", location.pathname === '/network' && "text-white font-medium")}>Network</Link>
        </div>
        <Link to="/start-scaling" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 tracking-tight font-geist shadow-[0_0_15px_rgba(255,255,255,0.1)] inline-block">
          Start Scaling
        </Link>
      </nav>
    </header>
  );
}