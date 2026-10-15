import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#333333]/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#E8350A] apex-clip-path flex items-center justify-center">
            <iconify-icon icon="solar:bolt-bold" class="text-white text-xl"></iconify-icon>
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-white uppercase group-hover:text-[#E8350A] transition-colors">
            APEX
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {['Protocolo', 'Equipamentos', 'Planos', 'Coaches'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium tracking-wider-custom text-[#999999] uppercase hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#planos" className="hidden md:flex items-center justify-center px-6 py-2.5 bg-[#E8350A] text-white text-xs font-bold uppercase tracking-wider-custom rounded hover:bg-[#FF2200] transition-colors shadow-[0_0_15px_rgba(232,53,10,0.3)]">
            Agendar Visita
          </a>
          <button className="lg:hidden text-white text-2xl">
            <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar