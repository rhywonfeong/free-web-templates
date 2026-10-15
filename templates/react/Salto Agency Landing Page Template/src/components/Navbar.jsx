import React from 'react';

const navItems = [
  { label: 'Inicio', href: '#', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { label: 'Servicios', href: '#servicios', onClick: (e) => { e.preventDefault(); document.querySelector('section:nth-of-type(3)')?.scrollIntoView({ behavior: 'smooth' }); } },
  { label: 'Trabajos', href: '#trabajos', onClick: (e) => { e.preventDefault(); document.querySelector('section:nth-of-type(3)')?.scrollIntoView({ behavior: 'smooth' }); } },
  { label: 'Proceso', href: '#proceso', onClick: (e) => { e.preventDefault(); document.querySelector('section:nth-of-type(2)')?.scrollIntoView({ behavior: 'smooth' }); } },
  { label: 'Precios', href: '#precios', onClick: (e) => { e.preventDefault(); document.querySelector('#precios')?.scrollIntoView({ behavior: 'smooth' }); } },
];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
      <a
        href="/"
        aria-label="Ir al inicio de Salto"
        className="pointer-events-auto h-12 px-5 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-body font-medium tracking-tight hover:bg-white/10 transition-colors"
      >
        Salto
      </a>

      <div className="pointer-events-auto hidden md:flex liquid-glass rounded-full pt-1 pr-1.5 pb-1 pl-1.5 items-center">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={item.onClick}
            className="hover:text-white transition-colors text-sm font-medium text-white/90 font-body pt-2 pr-4 pb-2 pl-4"
          >
            {item.label}
          </a>
        ))}
        <button 
          type="button"
          onClick={() => window.location.href='mailto:hola@salto.es?subject=Quiero%20reservar%20una%20llamada&body=Hola,%20me%20gustaría%20reservar%20una%20llamada%20para%20hablar%20sobre%20mi%20web.'}
          className="bg-white text-black hover:bg-white/90 transition-colors rounded-full px-3.5 py-1.5 text-sm font-medium flex items-center gap-1.5 ml-2"
        >
          Reservar llamada
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
        </button>
      </div>
      
      <div className="md:hidden pointer-events-auto liquid-glass rounded-full p-3 flex items-center justify-center">
         <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24" className="text-white"></iconify-icon>
      </div>
    </nav>
  );
}