import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Características', path: '/caracteristicas' },
    { name: 'Precios', path: '/precios' },
    { name: 'Recursos', path: '/recursos' },
  ];

  return (
    <nav className={clsx(
      "sticky top-0 w-full max-w-7xl px-6 flex items-center justify-between z-50 transition-all duration-300",
      scrolled 
        ? "py-4 bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.1] shadow-lg" 
        : "py-6 bg-transparent border-b border-white/[0.05]"
    )}>
      {/* Corner Brackets */}
      <div className={clsx(
        "absolute top-0 left-0 w-2 h-2 border-l border-t transition-colors duration-300",
        scrolled ? "border-white/40" : "border-white/20"
      )}></div>
      <div className={clsx(
        "absolute top-0 right-0 w-2 h-2 border-r border-t transition-colors duration-300",
        scrolled ? "border-white/40" : "border-white/20"
      )}></div>

      <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-white/30 transition-colors">
          <iconify-icon icon="solar:calendar-date-bold-duotone" class="text-xl text-rose-500"></iconify-icon>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium tracking-wide uppercase leading-none group-hover:text-rose-500 transition-colors">ReservaNova</span>
          <span className="text-[0.65rem] text-white/40 tracking-widest uppercase mt-0.5">Software Clínico</span>
        </div>
      </Link>

      <div className="hidden md:flex space-x-8 text-xs font-medium tracking-widest uppercase text-white/60">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={clsx(
              "transition-colors hover:text-white",
              location.pathname === link.path ? "text-rose-500" : ""
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex w-auto justify-end space-x-4 items-center">
         <Link to="/login" className="text-[0.65rem] tracking-widest uppercase text-white/60 hover:text-white transition-colors font-medium">
            Ingresar
         </Link>
         <button className="px-4 py-1.5 border border-rose-500/50 text-rose-500 text-[0.65rem] tracking-widest uppercase rounded-sm hover:bg-rose-500 hover:text-white transition-all">
            Probar Gratis
         </button>
      </div> 
    </nav>
  );
}