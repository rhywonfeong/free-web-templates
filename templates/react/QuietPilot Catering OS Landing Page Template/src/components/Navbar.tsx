import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import GlowButton from './GlowButton';

const links = [
  { to: '/#spine', label: 'The Spine', hash: 'spine' },
  { to: '/#platform', label: 'Platform', hash: 'platform' },
  { to: '/roi', label: 'ROI Calculator' },
  { to: '/pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className={`navbar ${open ? 'is-open' : ''}`}>
      <Link to="/" className="navbar__brand">
        <span className="navbar__logo">
          <Icon name="infinity" size={18} strokeWidth={2} />
        </span>
        QuietPilot
      </Link>

      <div className="navbar__links">
        {links.map((l) =>
          l.hash ? (
            <Link
              key={l.label}
              to={l.to}
              className={`navbar__link ${location.pathname === '/' && location.hash === `#${l.hash}` ? 'is-active' : ''}`}
            >
              {l.label}
            </Link>
          ) : (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          )
        )}
      </div>

      <div className="navbar__actions">
        <GlowButton label="Initialize Demo" to="/pricing" size="sm" avatar="" />
        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'x' : 'menu'} size={20} />
        </button>
      </div>

      <div className="navbar__mobile">
        {links.map((l) => (
          <Link key={l.label} to={l.to} className="navbar__mobile-link">
            {l.label}
            <Icon name="arrow-right" size={14} />
          </Link>
        ))}
      </div>
    </nav>
  );
}
