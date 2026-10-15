import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Button from '../ui/Button'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
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
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-[#0A2E00]/90 backdrop-blur-lg border-white/10 py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="text-3xl font-display uppercase tracking-wider text-white">
          FOURCE HPH
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/80 hover:text-[#CCFF00] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-[#CCFF00]">
            SOU MEMBRO
          </Button>
          <Button variant="primary">
            AGENDAR VISITA
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon 
            icon={mobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} 
            width="32"
          ></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        "md:hidden absolute top-full left-0 w-full bg-[#0A2E00] border-b border-white/10 transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0 py-0 border-transparent"
      )}>
        <div className="flex flex-col px-6 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-white hover:text-[#CCFF00] uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-white/10">
            <Button variant="ghost" className="justify-center w-full">SOU MEMBRO</Button>
            <Button variant="primary" className="justify-center w-full">AGENDAR VISITA</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar