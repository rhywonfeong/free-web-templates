import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-2xl font-extrabold text-[#133875] tracking-tight group-hover:scale-105 transition-transform">tbw</div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold text-[#133875] leading-none uppercase tracking-widest">The Baker</span>
            <span className="text-sm font-bold text-[#D4AF37] leading-none uppercase tracking-widest">Wheat</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={clsx(
                "relative text-sm font-medium py-2 group transition-colors",
                location.pathname === link.path ? "text-[#133875]" : "text-slate-500 hover:text-[#133875]"
              )}
            >
              {link.name}
              <span className={clsx(
                "absolute bottom-0 left-0 h-0.5 bg-[#133875] transition-all duration-300",
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
          ))}
          <Link to="/contact" className="ml-4 bg-[#133875] hover:bg-[#102e60] text-white px-6 py-2.5 rounded-lg text-sm font-medium btn-press transition-colors shadow-soft">
            Partner With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#133875] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <iconify-icon icon={isOpen ? "lucide:x" : "lucide:menu"} width="24"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-soft py-4 px-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-600 hover:text-[#133875] p-2"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-[#133875] text-white text-center px-4 py-3 rounded-lg font-medium mt-2"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </nav>
  );
}