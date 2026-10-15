import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ChevronDown, Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Platform', path: '/platform' },
    { label: 'Solutions', path: '/solutions', hasDropdown: true },
    { label: 'Customers', path: '/customers' },
    { label: 'Pricing', path: '/pricing' },
  ]

  return (
    <>
      <nav 
        className={`absolute top-0 left-0 w-full z-20 px-6 py-4 md:px-[120px] transition-all duration-300 ${
          scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Links Group */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="font-jakarta font-bold text-[20px] text-white">Lumina</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="group flex items-center gap-1 font-jakarta font-medium text-[14px] text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 opacity-70 group-hover:translate-y-[1px] transition-transform" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/signin"
              className="bg-transparent text-white hover:text-white/80 font-dm font-semibold text-[14px] px-4 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/start"
              className="bg-[#8b5cf6] hover:bg-[#7c3aed] rounded-[8px] px-4 py-2 font-dm font-semibold text-[14px] text-white transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex items-center text-white"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        links={navLinks}
      />
    </>
  )
}