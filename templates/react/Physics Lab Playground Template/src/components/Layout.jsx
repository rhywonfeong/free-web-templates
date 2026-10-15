import { Outlet, NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

export default function Layout() {
  return (
    <div className="flex h-screen w-full flex-col bg-zinc-950 text-zinc-100 font-sans">
      {/* Top Navigation Bar */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-zinc-950/80 px-6 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
            <iconify-icon icon="solar:atom-line-duotone" width="20" height="20"></iconify-icon>
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">NovaLab Physics</span>
        </div>
        
        <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => clsx(
              "rounded-full px-4 py-1 text-xs font-medium transition-ui",
              isActive ? "bg-white/10 text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
            )}
          >
            Playground
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => clsx(
              "rounded-full px-4 py-1 text-xs font-medium transition-ui",
              isActive ? "bg-white/10 text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
            )}
          >
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-4 text-zinc-400">
          <a href="#" className="hover:text-white transition-colors flex items-center">
            <iconify-icon icon="simple-icons:github" width="18" height="18"></iconify-icon>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative">
        <Outlet />
      </main>
    </div>
  );
}