import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner frame">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3 L21 20 H3 Z" strokeLinejoin="round" />
              <path d="M12 9.5 L16.5 18.5 H7.5 Z" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="brand-name">Aevora</span>
          <span className="brand-sub">Wellness &amp; Longevity Advisory</span>
        </Link>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-chip ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Start a Consultation
          </NavLink>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
