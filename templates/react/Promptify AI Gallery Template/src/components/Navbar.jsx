import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 flex items-center justify-between shadow-2xl">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-zinc-950 transition-transform group-hover:scale-105 group-hover:rotate-3">
            <iconify-icon icon="solar:magic-stick-3-bold" width="20"></iconify-icon>
          </div>
          <span className="font-semibold tracking-tight text-lg">PROMPTIFY</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-white",
                location.pathname === link.path ? "text-white" : "text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link to="/explore" className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link 
            to="/explore"
            className="px-4 py-2 rounded-xl bg-white text-zinc-950 text-sm font-medium transition-all hover:scale-105 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
          >
            Start Creating
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </Link>
        </div>

      </div>
    </nav>
  );
}