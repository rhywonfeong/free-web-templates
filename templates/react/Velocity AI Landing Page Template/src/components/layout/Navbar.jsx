import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
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
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors-all duration-300 ${
        scrolled 
          ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-[12px] shadow-sm border-b border-slate-100 dark:border-slate-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shadow-sm shadow-teal-500/20">
            <iconify-icon icon="solar:bolt-circle-linear" width="20"></iconify-icon>
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Velocity AI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-[14px] font-medium text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center text-slate-500 dark:text-slate-400"
              aria-label="Toggle Theme"
            >
              <iconify-icon 
                icon={isDark ? "solar:sun-linear" : "solar:moon-linear"} 
                width="20"
              ></iconify-icon>
            </button>
            
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[14px] font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1)]"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 text-slate-500 dark:text-slate-400">
             <iconify-icon icon={isDark ? "solar:sun-linear" : "solar:moon-linear"} width="20"></iconify-icon>
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-900 dark:text-white"
          >
            <iconify-icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-4 shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-[14px] font-medium py-2 text-slate-800 dark:text-slate-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 px-5 py-3 bg-teal-500 text-white text-center text-[14px] font-medium rounded-lg shadow-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  )
}