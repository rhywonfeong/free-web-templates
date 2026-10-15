import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={clsx(
          'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
          isScrolled || mobileMenuOpen
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-white/5 py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2 group">
            EL SUR
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 transition-transform"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-amber-400',
                  location.pathname === link.path ? 'text-amber-500' : 'text-zinc-400'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-400 transition-colors"
            >
              Book a Table
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-zinc-300 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <iconify-icon
              icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
              width="24"
              height="24"
            ></iconify-icon>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={clsx(
            'md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 transition-all duration-300 overflow-hidden',
            mobileMenuOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          )}
        >
          <div className="flex flex-col px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'text-lg font-medium transition-colors',
                  location.pathname === link.path ? 'text-amber-500' : 'text-zinc-300'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservations"
              className="mt-4 px-5 py-3 bg-white text-center text-black text-sm font-medium rounded-lg hover:bg-amber-400 transition-colors"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24 md:pt-0">
        <Outlet />
      </main>

      <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight text-white mb-4">EL SUR</h3>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              The ultimate Multi-Cult destination in Heraklion. Bridging the gap between vibrant Mexican street food and precise Japanese sushi, elevated by crafted cocktails.
            </p>
            <div className="flex items-center gap-4 text-zinc-400">
              <a href="#" className="hover:text-amber-500 transition-colors" aria-label="Instagram">
                <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors" aria-label="Facebook">
                <iconify-icon icon="simple-icons:facebook" width="20"></iconify-icon>
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors" aria-label="TikTok">
                <iconify-icon icon="simple-icons:tiktok" width="20"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Location</h4>
            <address className="text-zinc-400 not-italic flex flex-col gap-2">
              <p>Heraklion Central</p>
              <p>Crete, Greece</p>
              <a href="tel:+302810000000" className="hover:text-amber-500 transition-colors mt-2">
                +30 2810 000 000
              </a>
              <a href="mailto:hello@elsur.gr" className="hover:text-amber-500 transition-colors">
                hello@elsur.gr
              </a>
            </address>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Hours</h4>
            <ul className="text-zinc-400 flex flex-col gap-2">
              <li className="flex justify-between"><span>Mon - Thu</span> <span>18:00 - 01:00</span></li>
              <li className="flex justify-between"><span>Fri - Sat</span> <span>18:00 - 02:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>17:00 - 00:00</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 text-zinc-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} El Sur Heraklion. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}