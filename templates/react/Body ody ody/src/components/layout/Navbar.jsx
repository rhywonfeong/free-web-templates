import { useState, useEffect } from 'react'
import Button from '../ui/Button'

export default function Navbar() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#2E2E2E] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-display text-3xl tracking-widest text-white uppercase">
          AURA
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <a href="#sobre" className="text-sm font-medium text-[#F5F5F5] hover:text-[#E5C000] transition-colors uppercase tracking-widest">Método</a>
            <a href="#planos" className="text-sm font-medium text-[#F5F5F5] hover:text-[#E5C000] transition-colors uppercase tracking-widest">Planos</a>
            <a href="#equipe" className="text-sm font-medium text-[#F5F5F5] hover:text-[#E5C000] transition-colors uppercase tracking-widest">Equipe</a>
          </nav>
          <Button variant="outline" size="sm">Agendar Visita</Button>
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <button className="md:hidden text-white text-2xl">
          <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
        </button>
      </div>
    </header>
  )
}