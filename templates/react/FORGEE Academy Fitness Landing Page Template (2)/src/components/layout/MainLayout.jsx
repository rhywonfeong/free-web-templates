import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function MainLayout() {
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

  const scrollToSection = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#3D3D3D]/50' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <Link to="/" className="font-display font-black text-3xl tracking-tighter text-white hover:text-[#E8001C] transition-colors">
              FORGEE
            </Link>
            <span className="font-display text-[10px] tracking-widest text-[#7A7A7A] uppercase mt-0.5 hidden md:block">
              Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-semibold text-[#C8C8C8] hover:text-white uppercase tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-xs font-semibold text-[#C8C8C8] hover:text-white uppercase tracking-wider border-b border-transparent hover:border-white transition-all pb-1">
              Sou Membro
            </button>
            <button className="bg-[#E8001C] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#B00015] hover:shadow-glow-red transition-all duration-300 rounded-none">
              Agendar Visita
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} width="28"></iconify-icon>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#141414] border-b border-[#3D3D3D] p-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-display font-bold text-[#C8C8C8] hover:text-white uppercase tracking-wider p-2 border-l-2 border-transparent hover:border-[#E8001C] transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <button className="w-full bg-[#1A1A1A] text-white px-6 py-4 text-sm font-bold uppercase tracking-widest">
                Sou Membro
              </button>
              <button className="w-full bg-[#E8001C] text-white px-6 py-4 text-sm font-bold uppercase tracking-widest shadow-glow-red">
                Agendar Visita
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 lg:pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-[#1A1A1A] pt-24 pb-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link to="/" className="font-display font-black text-4xl tracking-tighter text-white mb-2 block">
                FORGEE
              </Link>
              <p className="font-display text-sm tracking-[0.2em] text-[#E8001C] uppercase mb-6">
                B E Y O N D L I M I T S K N O W N ™
              </p>
              <p className="text-[#7A7A7A] text-sm max-w-sm">
                Ambiente mediano produz resultado mediano. Forjado pela disciplina em Indaiatuba, SP.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-xl uppercase tracking-wider mb-6 text-white">Academia</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#7A7A7A] hover:text-[#00C2E0] transition-colors text-sm uppercase tracking-wide">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-xl uppercase tracking-wider mb-6 text-white">Legal & Redes</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[#7A7A7A] hover:text-white transition-colors text-sm uppercase tracking-wide">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#" className="text-[#7A7A7A] hover:text-white transition-colors text-sm uppercase tracking-wide">Termos de Uso</a>
                </li>
                <li className="pt-4 flex space-x-4">
                  <a href="#" className="text-[#7A7A7A] hover:text-[#E8001C] transition-colors">
                    <iconify-icon icon="simple-icons:instagram" width="24"></iconify-icon>
                  </a>
                  <a href="#" className="text-[#7A7A7A] hover:text-[#E8001C] transition-colors">
                    <iconify-icon icon="simple-icons:whatsapp" width="24"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#3D3D3D] font-display uppercase tracking-widest">
            <p>FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP</p>
            <p className="mt-4 md:mt-0">DESIGN SYSTEM © 2026</p>
          </div>
        </div>
      </footer>
    </div>
  )
}