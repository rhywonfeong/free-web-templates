import React, { useState, useEffect } from 'react'
import { clsx } from 'clsx'
import Button from '../ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Quem Somos', href: '#about' },
    { name: 'Estrutura', href: '#structure' },
    { name: 'Metodologia', href: '#methodology' },
    { name: 'Planos', href: '#pricing' },
  ]

  const scrollTo = (id) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-[#2A2A2A] py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <iconify-icon icon="simple-icons:fitbit" width="28" class="text-[#E63422] group-hover:text-[#E8541A] transition-colors"></iconify-icon>
          <span className="text-white font-black text-2xl tracking-tighter uppercase">Forge</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-[#D4D4D4] hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm" onClick={() => scrollTo('#pricing')}>Matricule-se</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="28"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#111111] border-b border-[#2A2A2A] p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left text-lg font-medium text-[#D4D4D4] hover:text-[#E8541A] py-2"
            >
              {link.name}
            </button>
          ))}
          <Button className="mt-4 w-full" onClick={() => scrollTo('#pricing')}>Matricule-se</Button>
        </div>
      )}
    </header>
  )
}