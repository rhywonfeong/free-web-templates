import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { ChatProvider, useChat } from "./components/ChatDialog";
import { Moon, Sun } from "./components/Icons";
import { CONTACT_EMAIL, GITHUB_URL } from "./data";
import About from "./pages/About";
import Apps from "./pages/Apps";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

type Theme = "dark" | "light";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

const NAV_ITEMS = [
  { label: "Apps", to: "/apps", match: (path: string, _hash: string) => path.startsWith("/apps") },
  {
    label: "Approach",
    to: "/#approach",
    match: (path: string, hash: string) => path === "/" && hash === "#approach",
  },
  {
    label: "Studio",
    to: "/#studio",
    match: (path: string, hash: string) => path === "/" && hash === "#studio",
  },
  { label: "About", to: "/about", match: (path: string, _hash: string) => path.startsWith("/about") },
];

const navListVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 28 },
  },
};

function SiteHeader({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  const { openChat } = useChat();
  const location = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const activeLabel =
    NAV_ITEMS.find((item) => item.match(location.pathname, location.hash))?.label ??
    null;
  const pillLabel = hovered ?? activeLabel;

  return (
    <motion.header
      className="northstar-header"
      data-scrolled={scrolled ? "true" : "false"}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
    >
      <div className="northstar-container northstar-header__inner">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 26 }}
        >
          <Link className="northstar-brand" aria-label="MBMApps home" to="/">
            <motion.span
              className="northstar-brand__mark"
              whileHover={{ rotate: [0, -6, 5, 0], transition: { duration: 0.5 } }}
            >
              <span>MBM</span>
              <span className="northstar-brand__light">Apps</span>
            </motion.span>
          </Link>
        </motion.div>
        <motion.nav
          className="northstar-nav"
          aria-label="Primary navigation"
          variants={navListVariants}
          initial="hidden"
          animate="show"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeLabel === item.label;
            return (
              <motion.div
                key={item.label}
                className="northstar-nav-item"
                variants={navItemVariants}
                onMouseEnter={() => setHovered(item.label)}
                onFocus={() => setHovered(item.label)}
              >
                {pillLabel === item.label && (
                  <motion.span
                    className="northstar-nav-pill"
                    layoutId="nav-pill"
                    aria-hidden="true"
                    transition={{ type: "spring", stiffness: 480, damping: 34 }}
                  />
                )}
                <Link
                  className={`northstar-nav-link${isActive ? " active" : ""}`}
                  to={item.to}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.span
                    className="northstar-nav-underline"
                    layoutId="nav-underline"
                    aria-hidden="true"
                    transition={{ type: "spring", stiffness: 520, damping: 32 }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.nav>
        <motion.div
          className="northstar-header__actions"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.16, type: "spring", stiffness: 300, damping: 26 }}
        >
          <span className="availability-mark availability-mark--live">
            <span className="availability-mark__dot" aria-hidden="true"></span>
            Open for new engagements
          </span>
          <motion.button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                className="theme-toggle__icon"
                initial={{ rotate: -120, opacity: 0, scale: 0.4 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 120, opacity: 0, scale: 0.4 }}
                transition={{ duration: 0.28 }}
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </motion.span>
            </AnimatePresence>
            <span>[t] {theme === "dark" ? "light" : "dark"}</span>
          </motion.button>
          <button type="button" className="northstar-header-link" onClick={openChat}>
            Start a conversation
          </button>
          <motion.div
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            style={{ display: "inline-flex" }}
          >
            <Link className="northstar-header-cta" to="/apps">
              Browse apps
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="northstar-scroll-progress"
        aria-hidden="true"
        style={{ scaleX: progress }}
      />
    </motion.header>
  );
}

function SiteFooter() {
  return (
    <footer className="northstar-footer">
      <div className="northstar-container">
        <div className="northstar-footer__grid">
          <div>
            <p className="northstar-kicker">MBMApps / Independent software studio</p>
            <p className="northstar-footer__statement">
              Purpose-built software for work that cannot run on guesswork.
            </p>
            <p className="northstar-footer__note">
              Explore MBMApps applications for catering operations, youth-sports
              management, and quote-to-event workflows, or start a conversation about a
              custom system.
            </p>
          </div>
          <div>
            <p className="northstar-kicker">Applications</p>
            <div className="northstar-footer__links">
              <a href="https://www.quietpilot.us" className="northstar-footer-link">
                QuietPilot
              </a>
              <a href="https://www.leaguepilot.us" className="northstar-footer-link">
                LeaguePilot
              </a>
              <a href="https://tonicatering.web.app" className="northstar-footer-link">
                QuoteFlow
              </a>
            </div>
          </div>
          <div>
            <p className="northstar-kicker">Company</p>
            <div className="northstar-footer__links">
              <Link className="northstar-footer-link" to="/apps">
                All applications
              </Link>
              <Link className="northstar-footer-link" to="/#studio">
                Studio
              </Link>
              <Link className="northstar-footer-link" to="/about">
                About
              </Link>
              <Link className="northstar-footer-link" to="/contact">
                Contact
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="northstar-footer-link northstar-footer-link--email"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <div className="northstar-footer__meta">
          <p>© 2026 MBMApps LLC · chicago, usa · built for clear decisions</p>
          <div className="instrument-strip">
            <span className="instrument-chip instrument-chip--live">
              <span className="instrument-chip__dot" aria-hidden="true"></span>3 products
              live
            </span>
            <a href={GITHUB_URL} className="northstar-footer-link">
              GitHub / TOTALLYMAJOR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <ChatProvider>
        <ScrollManager />
        <div className="site-shell">
          <SiteHeader
            theme={theme}
            onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
      </ChatProvider>
    </BrowserRouter>
  );
}
