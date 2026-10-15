import { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Download from "./pages/Download";
import Changelog from "./pages/Changelog";
import Console from "./pages/Console";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/features", label: "Features" },
  { to: "/download", label: "Download" },
  { to: "/changelog", label: "Changelog" },
  { to: "/console", label: "Console" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

const DECAL_SRC =
  "https://assetdelivery.roblox.com/v1/asset/?id=115798729575437";

function BrandDecal() {
  const [failed, setFailed] = useState(false);
  return (
    <span className="brand-mark" aria-hidden="true">
      {failed ? (
        <svg
          className="brand-glyph"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
        >
          <path
            d="M12 3.4 4 7.7v8.6l8 4.3 8-4.3V7.7l-8-4.3Z"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 3.4v17.2M4 7.7l8 4.4 8-4.4"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinejoin="round"
            opacity="0.75"
          />
        </svg>
      ) : (
        <img
          className="brand-decal"
          src={DECAL_SRC}
          alt=""
          onError={() => setFailed(true)}
          draggable={false}
        />
      )}
    </span>
  );
}

function Logo() {
  return (
    <Link to="/" className="brand" aria-label="Claudeware home">
      <BrandDecal />
      <span className="brand-text">
        Claude<span className="brand-accent">ware</span>
      </span>
    </Link>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <ScrollToTop />
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />

      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <Logo />

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/download"
              className="btn btn-primary nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Get Script
            </Link>
          </nav>

          <button
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/download" element={<Download />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/console" element={<Console />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tag">
              A tabbed Roblox utility with a Claude-styled panel. Single
              ScreenGui, clean teardown, no leftover connections.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Script</h4>
              <Link to="/features">Modules</Link>
              <Link to="/download">Get the source</Link>
              <Link to="/changelog">Changelog</Link>
            </div>
            <div className="footer-col">
              <h4>Read up</h4>
              <Link to="/console">Console log</Link>
              <Link to="/download">Requirements</Link>
              <Link to="/features">ESP layers</Link>
            </div>
            <div className="footer-col">
              <h4>Notes</h4>
              <span className="footer-note">Educational use only</span>
              <span className="footer-note">RightShift to hide</span>
              <span className="footer-note">Self-contained LuaU</span>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Claudeware · educational use only</span>
          <span className="footer-mono">v1.2.0 · stable</span>
        </div>
      </footer>
    </div>
  );
}
