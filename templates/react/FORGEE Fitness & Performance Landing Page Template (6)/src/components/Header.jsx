import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Espaço', path: '/espaco' },
    { name: 'Programas', path: '/programas' },
    { name: 'Equipe', path: '/equipe' },
    { name: 'Planos', path: '/planos' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-6 pb-4 pointer-events-none">
      <div 
        className={`w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-md border border-[#242424]' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <iconify-icon icon="solar:bolt-bold" class="text-[#E30000] text-2xl group-hover:scale-110 transition-transform"></iconify-icon>
          <span className="font-black tracking-tighter text-xl uppercase">FORGEE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-medium text-[#C4C4C4] hover:text-white uppercase tracking-wider transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-[#C4C4C4] hover:text-white uppercase tracking-wider transition-colors px-4 py-2">
            Sou Membro
          </Link>
          <Button size="sm">Agendar Visita</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="28" height="28"></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] bg-[#0A0A0A]/95 backdrop-blur-xl z-40 p-6 flex flex-col pointer-events-auto">
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-2xl font-black tracking-tighter text-white uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <Button variant="outline" className="w-full text-center justify-center">Sou Membro</Button>
            <Button className="w-full text-center justify-center">Agendar Visita</Button>
          </div>
        </div>
      )}
    </header>
  )
}