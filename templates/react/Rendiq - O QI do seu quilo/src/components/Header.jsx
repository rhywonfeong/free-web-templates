import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-neutral-0/70 backdrop-blur-md border-b border-neutral-200/50">
      <div className="flex items-center justify-between px-6 lg:px-12 h-14 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-display tracking-tight text-neutral-900">
          RENDIQ
        </div>

        {/* Menu Principal (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {['Produto', 'Funcionalidades', 'Planos', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-label text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <a href="#login" className="hidden md:block text-sm font-label text-neutral-700 hover:text-neutral-900 transition-colors">
            ENTRAR
          </a>
          <button className="bg-lime-400 text-neutral-900 text-xs font-label px-5 py-2.5 rounded-full hover:bg-lime-300 transition-colors">
            TESTE GRÁTIS
          </button>
        </div>
      </div>

      {/* Tagline Institucional */}
      <div className="bg-neutral-900/80 backdrop-blur-md w-full py-1.5 flex justify-center border-b border-neutral-800/50">
        <p className="text-[0.625rem] text-neutral-300 font-body text-center">
          A margem não avisa quando some. O Rendiq avisa.
        </p>
      </div>
    </header>
  );
};

export default Header;