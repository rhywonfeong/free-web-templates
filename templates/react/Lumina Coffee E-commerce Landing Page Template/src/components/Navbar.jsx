import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform">
            <iconify-icon icon="solar:cup-hot-bold" width="20"></iconify-icon>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-stone-900">Lumina.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-stone-100/50 backdrop-blur-sm px-8 py-3 rounded-full border border-white/20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-amber-700 ${
                location.pathname === link.path ? 'text-amber-700' : 'text-stone-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex w-10 h-10 rounded-full border border-stone-200 items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors">
            <iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
          </button>
          <button className="hidden md:flex w-10 h-10 rounded-full border border-stone-200 items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors">
            <iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-stone-200 items-center justify-center text-stone-600 hover:bg-stone-50 transition-colors relative flex"
          >
            <iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            className="md:hidden w-12 h-12 flex items-center justify-center text-stone-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} width="28"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-lg font-bold uppercase tracking-tight text-stone-800 py-2 border-b border-stone-50"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-4">
             <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-stone-100 rounded-xl font-medium text-sm">
                <iconify-icon icon="solar:magnifer-linear"></iconify-icon> Search
             </button>
             <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-stone-100 rounded-xl font-medium text-sm">
                <iconify-icon icon="solar:user-circle-linear"></iconify-icon> Account
             </button>
          </div>
        </div>
      )}
    </nav>
  );
}