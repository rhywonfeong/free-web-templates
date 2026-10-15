import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={clsx(
      "text-sm font-medium transition-colors duration-200 hover:text-[#4ba8ed]",
      isActive ? "text-[#4ba8ed]" : "text-[#263669]"
    )}
  >
    {children}
  </Link>
);

const Dropdown = ({ title, items, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={clsx(
          "flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-[#4ba8ed]",
          isActive || isOpen ? "text-[#4ba8ed]" : "text-[#263669]"
        )}
      >
        {title}
        <iconify-icon 
          icon="solar:alt-arrow-down-linear" 
          class={clsx("text-xs transition-transform duration-200", isOpen && "rotate-180")}
        ></iconify-icon>
      </button>
      
      {/* Dropdown Menu */}
      <div 
        className={clsx(
          "absolute top-full left-0 pt-4 w-48 transition-all duration-200 origin-top-left",
          isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        )}
      >
        <div className="bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden py-2">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="block px-4 py-2.5 text-sm text-[#263669] hover:bg-gray-50 hover:text-[#4ba8ed] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quienesSomosItems = [
    { label: 'Quienes somos', to: '/#who-we-are' },
    { label: 'Qué hacemos', to: '/#what-we-do' },
    { label: 'Nuestro equipo', to: '/#team' },
  ];

  const solucionesItems = [
    { label: 'Substrate Cloud', to: '/#solutions' },
    { label: 'Serenity Star', to: '/#solutions' },
    { label: '4D AI COE', to: '/#solutions' },
  ];

  return (
    <header 
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/90 backdrop-blur-md border-gray-100 shadow-sm py-4" 
          : "bg-white border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-[#0a1433] flex items-center">
            {/* Using an iconify icon to represent the abstract logo shape described */}
            <iconify-icon 
              icon="solar:infinity-line-duotone" 
              class="text-3xl mr-1 text-[#0a1433] group-hover:text-[#4ba8ed] transition-colors"
            ></iconify-icon>
            <span className="text-xl font-semibold tracking-tight text-[#0a1433]">SubgenAI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Dropdown 
            title="Quienes somos" 
            items={quienesSomosItems} 
            isActive={location.hash === '#who-we-are' || location.hash === '#what-we-do' || location.hash === '#team'}
          />
          <Dropdown 
            title="Soluciones" 
            items={solucionesItems} 
            isActive={location.hash === '#solutions'}
          />
          <NavLink to="/investors" isActive={location.pathname === '/investors'}>Investors</NavLink>
          <NavLink to="/news" isActive={location.pathname === '/news'}>News</NavLink>
        </nav>

        {/* Mobile Menu Toggle (Simplified for demo) */}
        <button className="md:hidden text-[#0a1433]">
          <iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>
        </button>

      </div>
    </header>
  )
}

export default Navbar