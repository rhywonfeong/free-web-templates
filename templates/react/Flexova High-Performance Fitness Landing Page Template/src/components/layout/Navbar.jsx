import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="font-heading font-bold text-2xl tracking-wide flex items-center gap-1">
          FLEXOVA<span className="text-[var(--color-primary)]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="nav">Programs</Button>
          <Button variant="nav">Coaches</Button>
          <Button variant="nav">Membership</Button>
          <Button variant="nav">About</Button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex py-3 px-6 text-[11px]">Join Now</Button>
          
          {/* Mobile/Expand Menu Toggle */}
          <button className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-primary)] transition-colors bg-[var(--color-surface)]/50 backdrop-blur-sm">
            <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
          </button>
        </div>

      </div>
    </nav>
  )
}