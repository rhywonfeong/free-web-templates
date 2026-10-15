import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <Link to="/work" className="brand" aria-label="Fulcrum AI Labs home">
          <span className="brand-mark"><i /><i /></span>
          <span>FULCRUM <b>AI LABS</b></span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <NavLink to="/work">System</NavLink>
          <NavLink to="/contact">Deploy</NavLink>
          <Link className="nav-cta" to="/contact">Map a workflow <ArrowUpRight /></Link>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-line" />
      <div className="footer-main">
        <div>
          <Link to="/work" className="brand footer-brand">
            <span className="brand-mark"><i /><i /></span>
            <span>FULCRUM <b>AI LABS</b></span>
          </Link>
          <p>Forward deployed systems for<br />mission critical operations.</p>
        </div>
        <div className="footer-nav">
          <span>System</span>
          <Link to="/work">Operating model</Link>
          <Link to="/work#proof">Production proof</Link>
        </div>
        <div className="footer-nav">
          <span>Contact</span>
          <Link to="/contact">Bring us a workflow</Link>
          <a href="mailto:deploy@fulcrumlabs.ai">deploy@fulcrumlabs.ai</a>
        </div>
        <div className="footer-status">
          <span><i /> Accepting Q3 deployments</span>
          <small>NEW YORK / DISTRIBUTED</small>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 FULCRUM AI LABS</span>
        <span>SYSTEMS THAT STAY SHIPPED.</span>
      </div>
    </footer>
  )
}
