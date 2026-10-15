import { Outlet, useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'solar:home-smile-linear', label: 'Garage' },
    { path: '/planner', icon: 'solar:calendar-mark-linear', label: 'Planner' },
    { path: '/timeline', icon: 'solar:history-linear', label: 'Timeline' },
    { path: '/profile', icon: 'solar:user-circle-linear', label: 'Profile' },
  ];

  return (
    <div className="flex min-h-screen justify-center bg-[#03050a] text-gray-100 font-sans selection:bg-blue-500/30">
      <div
        className="app-noise relative flex min-h-screen w-full max-w-[480px] flex-col overflow-hidden border-x border-white/[0.04] bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.96),rgba(5,7,11,1)_36%,rgba(4,6,10,1)_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        style={{ height: 'var(--app-height)' }}
      >
        <div className="pointer-events-none absolute inset-0 grid-sheen opacity-[0.06]" />
        <div className="glow-float pointer-events-none absolute -top-10 left-[-12%] h-52 w-52 rounded-full bg-sky-500/20 blur-[90px]" />
        <div className="glow-float pointer-events-none absolute top-[22%] right-[-16%] h-60 w-60 rounded-full bg-violet-500/16 blur-[100px]" />
        <div className="glow-float pointer-events-none absolute bottom-[12%] left-[8%] h-40 w-40 rounded-full bg-emerald-500/10 blur-[90px]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white/[0.04] to-transparent" />

        <main className="relative z-10 flex-1 overflow-y-auto pb-24 scroll-smooth">
          <div className="p-5">
            <Outlet />
          </div>
        </main>

        <div className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2">
          <button
            aria-label="Quick add"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-violet-500 shadow-[0_12px_35px_rgba(59,130,246,0.45)] transition-all duration-300 hover:scale-[1.06] hover:shadow-[0_16px_45px_rgba(99,102,241,0.5)] active:scale-[0.95]"
          >
            <span className="pulse-ring absolute inset-0 rounded-full border border-white/30" />
            <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))]" />
            <iconify-icon icon="solar:add-circle-bold" width="28" style={{ color: 'white' }} />
          </button>
        </div>

        <nav className="glass-panel absolute bottom-0 z-10 h-20 w-full border-t border-white/10 px-5 pb-4 pt-2">
          <div className="flex h-full items-center justify-between">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.label}
                  className="group relative flex h-full w-16 flex-col items-center justify-center"
                >
                  <div
                    className={clsx(
                      'absolute top-1 h-10 w-12 rounded-2xl transition-all duration-300',
                      isActive
                        ? 'bg-gradient-to-b from-sky-500/18 to-blue-500/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                        : 'bg-transparent group-hover:bg-white/[0.04]'
                    )}
                  />
                  <iconify-icon
                    icon={isActive ? item.icon.replace('-linear', '-bold') : item.icon}
                    width="24"
                    className={clsx(
                      'relative z-10 transition-all duration-300 ease-out',
                      isActive
                        ? 'scale-110 text-sky-400'
                        : 'text-gray-500 group-hover:-translate-y-0.5 group-hover:text-gray-300'
                    )}
                  />
                  <span
                    className={clsx(
                      'relative z-10 mt-1 text-[10px] font-medium transition-colors duration-300',
                      isActive ? 'text-sky-300' : 'text-gray-600 group-hover:text-gray-400'
                    )}
                  >
                    {item.label}
                  </span>

                  {isActive && (
                    <>
                      <div className="absolute -bottom-1 h-1 w-1 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]" />
                      <div className="absolute top-1 h-10 w-12 rounded-2xl border border-sky-400/10" />
                    </>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}