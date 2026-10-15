import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Espaço', href: '#espaco' },
    { name: 'Programas', href: '#programas' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Planos', href: '#planos' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#2E2E2E]' : 'bg-transparent'
      }`}
    >
      {/* Utility Bar */}
      <div className="hidden md:flex justify-end items-center px-8 py-2 text-xs text-[#808080] font-medium tracking-widest border-b border-[#2E2E2E]/50">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <iconify-icon icon="solar:phone-linear"></iconify-icon> (19) 98234-5678
          </span>
          <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <iconify-icon icon="solar:map-point-linear"></iconify-icon> INDAIATUBA, SP
          </span>
          <div className="flex gap-4 ml-4">
            <a href="#" className="hover:text-[#FF6B35] transition-colors"><iconify-icon icon="simple-icons:instagram" width="14"></iconify-icon></a>
            <a href="#" className="hover:text-[#FF6B35] transition-colors"><iconify-icon icon="simple-icons:whatsapp" width="14"></iconify-icon></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-3xl tracking-wide text-white group">
          FORG<span className="text-[#E8190F] group-hover:text-[#FF6B35] transition-colors">EE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-semibold tracking-wider uppercase text-[#BFBFBF]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8190F] hover:after:w-full after:transition-all after:duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-[#2E2E2E] pl-8">
            <button className="text-sm font-semibold tracking-wider uppercase hover:text-[#FF6B35] transition-colors">
              Sou Membro
            </button>
            <Button variant="primary" size="sm">Agendar Visita</Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-2xl text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1C1C1C] border-b border-[#2E2E2E] flex flex-col p-6 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="py-4 text-lg font-semibold uppercase tracking-wider text-[#BFBFBF] hover:text-white border-b border-[#2E2E2E]/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-6">
            <button className="py-3 text-left font-semibold uppercase tracking-wider">Sou Membro</button>
            <Button variant="primary" className="w-full justify-center">Agendar Visita</Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar