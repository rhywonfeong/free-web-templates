import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { clsx } from 'clsx';

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Find Professionals', path: '/explore' },
    { name: 'Jobs', path: '/jobs' },
  ];

  if (isAuthenticated) {
    navLinks.push({ name: 'Messages', path: '/chat' });
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={clsx(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b',
      scrolled 
        ? 'bg-white/80 backdrop-blur-md border-slate-200/50 shadow-sm' 
        : 'bg-white/50 backdrop-blur-sm border-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
              <iconify-icon icon="solar:layer-bold" width="20"></iconify-icon>
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900">ProConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-indigo-600',
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link to="/chat" className="text-slate-400 hover:text-indigo-600 transition-colors p-2 hidden sm:block">
                  <iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
                </Link>
                <div className="h-8 w-px bg-slate-200 hidden sm:block mx-2"></div>
                <div className="group relative">
                  <button className="flex items-center gap-2 focus:outline-none">
                    <img 
                      src={user?.avatar || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80"} 
                      alt="User avatar" 
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <span className="text-sm font-medium text-slate-700 hidden sm:block">{user?.name?.split(' ')[0] || 'User'}</span>
                  </button>
                  {/* Dropdown - Simple hover for demo */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    <div className="p-2 space-y-1">
                      <Link to="/profile" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors">
                        <iconify-icon icon="solar:user-linear"></iconify-icon> Profile
                      </Link>
                      <button onClick={handleLogout} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <iconify-icon icon="solar:logout-2-linear"></iconify-icon> Log out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/auth" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors px-3 py-2">
                  Log in
                </Link>
                <Button onClick={() => navigate('/auth')}>
                  Sign up
                </Button>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}