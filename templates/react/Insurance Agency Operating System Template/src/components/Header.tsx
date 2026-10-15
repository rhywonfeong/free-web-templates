import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const navItems = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/contact', label: 'CONTACT' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#05080A]/85 backdrop-blur-md border-b border-dashed border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-[#c6f91f] flex items-center justify-center text-black shadow-[0_0_25px_rgba(198,249,31,0.25)]">
              <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <div className="leading-none">
              <span className="block text-white font-geist font-semibold tracking-[0.25em] text-sm">
                VERITAS
              </span>
              <span className="hidden sm:block text-[9px] text-white/50 font-geist tracking-[0.18em] uppercase mt-1">
                Agency Operating System
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full p-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-[11px] font-medium tracking-widest font-geist transition-colors ${
                    isActive
                      ? 'bg-[#c6f91f] text-black'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#c6f91f]/50 hover:bg-[#c6f91f]/10 px-5 py-2.5 text-[11px] font-medium tracking-widest text-white hover:text-[#c6f91f] transition-colors font-geist"
          >
            AGENT LOGIN
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <nav className="md:hidden flex items-center gap-2 pb-3 -mt-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-[10px] font-medium tracking-widest font-geist border transition-colors ${
                  isActive
                    ? 'bg-[#c6f91f] text-black border-[#c6f91f]'
                    : 'text-white/60 border-white/10 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </header>
  );
}
