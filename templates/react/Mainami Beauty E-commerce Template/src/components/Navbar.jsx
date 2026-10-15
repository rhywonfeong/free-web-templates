import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { openCart, itemCount } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-black text-[#F7F7F7] text-xs font-medium tracking-wide py-2.5 text-center px-4 relative z-50 flex items-center justify-center gap-2">
        <iconify-icon icon="solar:fire-bold" className="text-[#b7cad2] text-sm"></iconify-icon>
        <span>FREE SHIPPING OVER $40 ✦ 30-DAY MONEY-BACK GUARANTEE</span>
      </div>
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#F7F7F7]/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Mobile Menu Toggle (Visual only for landing page) */}
          <button className="md:hidden text-black/80 p-2 -ml-2" aria-label="Menu">
             <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
          </button>

          {/* Logo */}
          <a href="/" className="text-2xl font-semibold tracking-tighter text-black flex-1 text-center md:text-left md:flex-none">
            MAINAMI
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <a href="#product" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Shop</a>
            <a href="#results" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Results</a>
            <a href="#benefits" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Formula</a>
            <a href="#faq" className="text-sm font-medium text-black/60 hover:text-black transition-colors">FAQ</a>
          </nav>

          {/* Cart Toggle */}
          <div className="flex-1 md:flex-none flex justify-end">
            <button 
              onClick={openCart}
              className="relative p-2 text-black/80 hover:text-black transition-colors group flex items-center gap-2"
              aria-label="Open Cart"
            >
              <span className="hidden md:block text-sm font-medium uppercase tracking-wider group-hover:text-black">Cart</span>
              <div className="relative">
                <iconify-icon icon="solar:cart-large-2-linear" width="24" height="24"></iconify-icon>
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#b7cad2] text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}