import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setCompact(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="main-nav" className={compact ? 'compact' : ''}>
      <a href="#" className="nav-logo">Monograph</a>
      <ul className="nav-links">
        <li><a href="#works">Typefaces</a></li>
        <li><a href="#stacking-section">Studio</a></li>
        <li><a href="#story">Works</a></li>
        <li><a href="#">Journal</a></li>
        <li><a href="#">Archive</a></li>
      </ul>
      <a href="#contact" className="nav-enquire">
        <span className="btn-label">Enquire</span>
        <span className="btn-icon">
          <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
        </span>
      </a>
    </nav>
  )
}

export default Navbar