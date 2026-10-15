import React, { useState, useEffect } from 'react'

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileOpen(false)
    }
  }

  return (
    <nav
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid rgba(28, 35, 43, 0.10)',
      }}
      className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-[#1C232B]/5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <span
                style={{ color: '#1C232B' }}
                className="text-sm font-semibold tracking-wide uppercase"
              >
                Douglas Berger
              </span>
              <span
                style={{ color: '#6B7280' }}
                className="text-xs ml-3 hidden md:inline tracking-wide uppercase"
              >
                Construction Defect Expert
              </span>
            </div>
            <div className="sm:hidden block">
              <span
                style={{ color: '#1C232B' }}
                className="text-sm font-semibold tracking-wide uppercase"
              >
                D. Berger
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#expertise"
              onClick={(e) => handleNavClick(e, '#expertise')}
              style={{ color: '#6B7280' }}
              className="text-xs font-medium uppercase tracking-widest hover:text-[#1C232B] transition-colors"
            >
              Expertise
            </a>
            <a
              href="#why"
              onClick={(e) => handleNavClick(e, '#why')}
              style={{ color: '#6B7280' }}
              className="text-xs font-medium uppercase tracking-widest hover:text-[#1C232B] transition-colors"
            >
              Why Hire
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              style={{ color: '#6B7280' }}
              className="text-xs font-medium uppercase tracking-widest hover:text-[#1C232B] transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              style={{ backgroundColor: '#5E7A96', color: '#FFFFFF' }}
              className="text-xs font-medium uppercase tracking-widest px-6 py-2.5 hover:bg-[#2D3947] transition-colors"
            >
              Contact
            </a>
          </div>
          <button
            className="lg:hidden"
            style={{ color: '#1C232B' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
          </button>
        </div>
      </div>
      <div
        className={`${mobileOpen ? '' : 'hidden'} lg:hidden`}
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(28, 35, 43, 0.10)',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <a
            href="#expertise"
            onClick={(e) => handleNavClick(e, '#expertise')}
            style={{ color: '#6B7280' }}
            className="text-sm font-medium uppercase tracking-widest"
          >
            Expertise
          </a>
          <a
            href="#why"
            onClick={(e) => handleNavClick(e, '#why')}
            style={{ color: '#6B7280' }}
            className="text-sm font-medium uppercase tracking-widest"
          >
            Why Hire
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            style={{ color: '#6B7280' }}
            className="text-sm font-medium uppercase tracking-widest"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{ color: '#5E7A96' }}
            className="text-sm font-medium uppercase tracking-widest"
          >
            Contact →
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation