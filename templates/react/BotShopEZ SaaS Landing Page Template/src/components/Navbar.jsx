import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tính năng', href: '#features' },
    { label: 'Cách hoạt động', href: '#how-it-works' },
    { label: 'Bảng giá', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center transition-transform group-hover:scale-110">
              <iconify-icon icon="solar:bot-linear" width="18" style={{ color: '#fff' }}></iconify-icon>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              BotShop<span className="text-indigo-400">EZ</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-sm text-zinc-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              Đăng nhập
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-white px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Bắt đầu miễn phí
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            <iconify-icon
              icon={mobileOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'}
              width="24"
            ></iconify-icon>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800 mt-3 space-y-2">
              <a href="#pricing" className="block text-sm text-center text-zinc-400 hover:text-white px-4 py-2.5 rounded-lg hover:bg-white/5 transition-all">
                Đăng nhập
              </a>
              <a href="#pricing" className="block text-sm text-center font-medium text-white px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all">
                Bắt đầu miễn phí
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}