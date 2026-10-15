import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { clsx } from 'clsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Offset for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-[#2A2A2A] py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#00F9E4] text-[#0A0A0A] flex items-center justify-center font-bold text-lg tracking-tighter rounded-sm group-hover:shadow-[0_0_15px_rgba(0,249,228,0.5)] transition-shadow">
            LT
          </div>
          <span className="font-bold text-xl tracking-tight text-white">LuTe</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-[#9A9A9A] hover:text-[#00F9E4] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#planos" className="text-sm font-medium text-white hover:text-[#00F9E4] transition-colors uppercase tracking-widest">
            Sou Membro
          </a>
          <Button href="#contato" variant="primary">Agendar Visita</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon 
            icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} 
            width="28"
          ></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        'absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-[#2A2A2A] transition-all duration-300 overflow-hidden md:hidden',
        mobileMenuOpen ? 'max-h-[400px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
      )}>
        <nav className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-[#9A9A9A] hover:text-[#00F9E4] uppercase tracking-widest py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-[#2A2A2A] my-2" />
          <a href="#planos" className="text-lg font-medium text-white py-2 uppercase tracking-widest">
            Sou Membro
          </a>
          <Button href="#contato" variant="primary" className="w-full text-center mt-2">
            Agendar Visita
          </Button>
        </nav>
      </div>
    </header>
  )
}