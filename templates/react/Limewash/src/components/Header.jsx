import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const nav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Finishes", "/finishes"],
  ["Portfolio", "/portfolio"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link to="/" className="brand">
          <span className="brand-name">
            Limewash <span className="brand-italic">Atelier</span>
          </span>
        </Link>

        <nav className="nav-desktop">
          {nav.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-dark btn-sm header-cta">
            Request Consultation
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="nav-toggle"
            aria-label="Menu"
          >
            <iconify-icon
              icon={open ? "solar:close-square-linear" : "solar:hamburger-menu-linear"}
              width="28"
            ></iconify-icon>
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile">
          {nav.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === "/"} className="nav-mobile-link">
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-dark nav-mobile-cta">
            Request Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
