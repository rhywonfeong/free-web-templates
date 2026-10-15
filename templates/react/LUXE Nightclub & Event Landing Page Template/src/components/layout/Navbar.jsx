import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Events', path: '/events' },
    { name: 'Weekly', path: '/schedule' },
    { name: 'VIP', path: '/vip' },
  ];

  return (
    <nav className={clsx(
      'fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 py-4 transition-all duration-300',
      scrolled || mobileOpen ? 'bg-black/85 backdrop-blur-2xl border-b border-white/10 shadow-lg' : 'bg-transparent'
    )}>
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-full border-2 border-luxe-blue-electric flex items-center justify-center bg-luxe-blue-electric/5 group-hover:shadow-[0_0_15px_rgba(0,180,255,0.3)] transition-shadow">
          <span className="font-accent italic text-2xl text-luxe-white -ml-[2px]">L</span>
        </div>
        <div className="flex flex-col">
          <span className="font-display text-lg font-semibold tracking-[0.2em] text-luxe-white leading-none">LUXE</span>
          <span className="font-display text-[0.55rem] tracking-[0.35em] text-luxe-blue-electric mt-1">NIGHTCLUB</span>
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink 
              to={link.path}
              className={({ isActive }) => clsx(
                "font-display text-xs font-medium tracking-[0.12em] uppercase transition-colors relative group",
                isActive ? "text-luxe-blue-neon" : "text-luxe-white-dim hover:text-luxe-blue-neon"
              )}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span className={clsx(
                    "absolute -bottom-1 left-0 h-[1px] bg-luxe-blue-electric transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <button onClick={toggleCart} className="relative group cursor-pointer p-1">
          <iconify-icon 
            icon="solar:ticket-linear" 
            class="text-2xl text-luxe-white-dim group-hover:text-luxe-blue-neon transition-colors"
          />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-2 w-5 h-5 bg-luxe-pink-hot rounded-full flex items-center justify-center text-[0.6rem] font-bold text-white shadow-[0_0_10px_rgba(255,45,138,0.5)]">
              {totalItems}
            </span>
          )}
        </button>

        <Link 
          to="/events" 
          className="hidden md:inline-flex bg-gradient-to-br from-luxe-blue-electric to-luxe-purple-bright text-white px-5 py-2 font-display font-semibold text-xs tracking-[0.15em] uppercase hover:-translate-y-[1px] hover:shadow-[0_4px_30px_rgba(0,180,255,0.35)] transition-all"
        >
          Get Tickets
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-[5px] p-2 text-white relative z-[1001]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={clsx("w-6 h-[2px] bg-white transition-transform origin-right", mobileOpen && "-rotate-45 -translate-y-1")}></span>
          <span className={clsx("w-6 h-[2px] bg-white transition-opacity", mobileOpen && "opacity-0")}></span>
          <span className={clsx("w-6 h-[2px] bg-white transition-transform origin-right", mobileOpen && "rotate-45 translate-y-1")}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        "absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col px-6 py-6 gap-6 md:hidden transition-all duration-300 origin-top overflow-hidden",
        mobileOpen ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0 py-0 border-transparent"
      )}>
        {navLinks.map((link) => (
          <NavLink 
            key={link.name}
            to={link.path}
            className={({ isActive }) => clsx(
              "font-display text-sm tracking-[0.15em] uppercase w-fit",
              isActive ? "text-luxe-blue-neon font-medium drop-shadow-[0_0_8px_rgba(0,180,255,0.8)]" : "text-white/80 hover:text-white"
            )}
          >
            {link.name}
          </NavLink>
        ))}
        <Link 
          to="/events" 
          className="mt-2 text-center bg-gradient-to-br from-luxe-blue-electric to-luxe-purple-bright text-white px-5 py-3 font-display font-semibold text-xs tracking-[0.15em] uppercase rounded shadow-[0_0_20px_rgba(0,180,255,0.3)]"
        >
          Get Tickets
        </Link>
      </div>
    </nav>
  );
}