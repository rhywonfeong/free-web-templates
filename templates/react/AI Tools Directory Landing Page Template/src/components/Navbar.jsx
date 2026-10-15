import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import Button from './ui/Button';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
    { name: 'Categories', path: '/categories' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-zinc-200 shadow-sm dark:bg-zinc-950/80 dark:border-zinc-800' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-500 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <iconify-icon icon="solar:cpu-bolt-bold" class="text-white text-xl" />
            </div>
            <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">
              NexAI
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-800' 
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={toggleTheme}
              className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800"
              aria-label="Toggle theme"
            >
              <iconify-icon icon={isDark ? "solar:sun-2-bold" : "solar:moon-bold"} class="text-xl block" />
            </button>
            
            <div className="h-5 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-1"></div>

            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/submit">
                  <Button variant="outline" size="sm" icon="solar:add-circle-linear">
                    Submit Tool
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-sm font-medium overflow-hidden cursor-pointer hover:ring-2 ring-blue-500 transition-all">
                    {user.name.charAt(0)}
                  </div>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">Log in</Button>
                </Link>
                <Link to="/login">
                  <Button variant="primary" size="sm">Sign up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-white"
            >
              <iconify-icon icon={isDark ? "solar:sun-2-bold" : "solar:moon-bold"} class="text-xl block" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-600 dark:text-zinc-300"
            >
              <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} class="text-2xl block" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800">
              {user ? (
                <div className="space-y-2">
                  <Link to="/dashboard" className="block px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300">
                    Dashboard
                  </Link>
                  <Link to="/submit" className="block px-3 py-2 text-base font-medium text-blue-600 dark:text-blue-400">
                    Submit Tool
                  </Link>
                  <button onClick={logout} className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 dark:text-red-400">
                    Log out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Link to="/login" className="w-full">
                    <Button variant="outline" fullWidth>Log in</Button>
                  </Link>
                  <Link to="/login" className="w-full">
                    <Button variant="primary" fullWidth>Sign up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}