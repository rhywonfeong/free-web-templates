import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import clsx from 'clsx'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#2A2A2A]/0',
        isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-[#2A2A2A]/100 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className="font-display font-black text-2xl tracking-tighter text-white">FORGEE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-widest text-[#B0B0B0] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#login" className="text-[11px] font-medium uppercase tracking-widest text-[#B0B0B0] hover:text-[#E8400A] transition-colors">
            Sou Membro
          </a>
          <Button size="sm">Agendar Visita</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24" height="24"></iconify-icon>
        </button>
      </div>

      {/* Tagline Bar - Only visible at absolute top on desktop */}
      <div className={clsx(
        "hidden lg:flex max-w-[1440px] mx-auto px-20 text-[#6B6B6B] text-[10px] uppercase tracking-widest transition-all duration-300 absolute left-0 right-0",
        isScrolled ? "opacity-0 -bottom-4" : "opacity-100 -bottom-6"
      )}>
        <p>Beyond Limits Known™ <span className="mx-2">·</span> Indaiatuba, SP <span className="mx-2">·</span> Est. 2018</p>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={clsx(
        "fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="font-display font-bold text-3xl uppercase tracking-tight text-white hover:text-[#E8400A]"
          >
            {link.name}
          </a>
        ))}
        <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
          <Button variant="secondary" className="w-full">Sou Membro</Button>
          <Button className="w-full">Agendar Visita</Button>
        </div>
      </div>
    </header>
  )
}

export default Header