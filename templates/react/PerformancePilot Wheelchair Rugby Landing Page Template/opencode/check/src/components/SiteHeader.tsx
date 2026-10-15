import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SiteBrand from "./SiteBrand";

const primaryLinks = [
  { label: "Work", to: "/work" },
  { label: "Stories", to: "/stories" },
  { label: "Schedule", to: "/schedule" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
  { label: "Concepts", to: "/portfolio", accent: true },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Close the mobile menu whenever navigation happens.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // On the homepage the header floats over the cinematic hero and only picks
  // up its solid navy surface once the visitor starts scrolling.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const headerClass = [
    "site-header",
    isHome ? "site-header--overlay" : "",
    scrolled || !isHome ? "is-solid" : "",
    menuOpen ? "is-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="site-header__inner">
        <SiteBrand />

        <button
          type="button"
          className="site-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-menu-toggle__bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="site-menu-toggle__label">{menuOpen ? "Close" : "Menu"}</span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={menuOpen ? "site-nav site-nav--open" : "site-nav"}
        >
          <ul className="site-navigation">
            {primaryLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    [isActive ? "is-active" : "", link.accent ? "is-accent" : ""].filter(Boolean).join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="site-button site-button--primary site-nav__cta" to="/donate">
            Support the team
          </Link>
        </nav>
      </div>
    </header>
  );
}
