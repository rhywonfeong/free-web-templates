import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full transition-all duration-300">
      {/* Tagline Institucional */}
      <div className="bg-neutral-900 text-neutral-0 text-xs text-center py-2 font-medium tracking-wide">
        Controle real para quem não pode perder. · São Paulo, SP · Est. 2026
      </div>

      {/* Main Nav */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-neutral-0/90 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3' : 'bg-neutral-0 py-5'}`}>
        <div className="container mx-auto px-6 md:px-12 xl:px-24 flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-wide uppercase">Rendiq</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-900">
            <a href="#produto" className="hover:text-green-500 transition-colors">Produto</a>
            <a href="#funcionalidades" className="hover:text-green-500 transition-colors">Funcionalidades</a>
            <a href="#planos" className="hover:text-green-500 transition-colors">Planos</a>
            <a href="#faq" className="hover:text-green-500 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:flex text-sm font-bold bg-transparent text-neutral-900 hover:bg-neutral-50 px-5 py-2.5 rounded-full transition-colors border border-transparent hover:border-neutral-100">
              ENTRAR
            </button>
            <button className="text-sm font-bold bg-lime-400 text-neutral-900 px-6 py-2.5 rounded-full hover:bg-lime-300 hover:scale-105 transition-all active:scale-95 shadow-[0_4px_16px_rgba(206,254,0,0.2)]">
              TESTE GRÁTIS
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header