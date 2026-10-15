import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'

export default function Header() {
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

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-2">
          <iconify-icon icon="solar:dumbbell-large-bold" style={{ color: '#C8FF00' }}></iconify-icon>
          FORGEE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#login" className="text-sm font-medium text-white hover:text-[#C8FF00] transition-colors">
            SOU MEMBRO
          </a>
          <a 
            href="#agendar" 
            className="px-5 py-2.5 rounded-full bg-[#C8FF00] text-black text-sm font-bold tracking-wide hover:bg-[#A8D900] shadow-[0_0_16px_rgba(200,255,0,0.2)] hover:shadow-[0_0_24px_rgba(200,255,0,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            AGENDAR VISITA
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-white py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a href="#login" className="text-center py-3 text-white border border-white/20 rounded-lg">
              SOU MEMBRO
            </a>
            <a href="#agendar" className="text-center py-3 bg-[#C8FF00] text-black font-bold rounded-lg">
              AGENDAR VISITA
            </a>
          </div>
        </div>
      )}
    </header>
  )
}