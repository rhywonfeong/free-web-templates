import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { cn } from '../../utils/cn'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 py-4",
      isScrolled ? "py-2" : "py-6"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-300",
        isScrolled ? "bg-[#111111]/90 backdrop-blur-md border border-[#2D2D2D] rounded-full px-6 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.6)]" : "px-2"
      )}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <iconify-icon icon="solar:flame-bold" class="text-[#E8651A] text-2xl"></iconify-icon>
          <span className="font-display font-bold text-xl tracking-tight text-[#F5F5F5]">FORGEE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[#E5E5E5] hover:text-[#E8651A] transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-[#E5E5E5] hover:text-[#E8651A] transition-colors">
            Sou Membro
          </a>
          <Button variant="danger" size="sm" className="gap-2">
            Agendar Visita <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl text-[#F5F5F5] z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden",
        mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <nav className="flex flex-col items-center gap-8 mb-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-bold text-[#F5F5F5] hover:text-[#E8651A] uppercase tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-6">
          <a href="#" className="text-lg text-[#E5E5E5]">Sou Membro</a>
          <Button variant="danger" size="lg">Agendar Visita</Button>
        </div>
      </div>
    </header>
  )
}