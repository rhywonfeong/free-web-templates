import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Motion from "./pages/Motion";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Supply20 from "./pages/20";
import Supply60 from "./pages/60";
import { StatusDot } from "./components/hud";
import { FactionGlyph, ResourceCluster } from "./components/sheet";

/* ------------------------------------------------------------------ */
/* Technical line icons (inline SVG, engineered look)                  */
/* ------------------------------------------------------------------ */
function Icon({ name }: { name: string }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square" as const,
  };
  switch (name) {
    case "command":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" />
        </svg>
      );
    case "work":
      return (
        <svg {...common}>
          <path d="M4 5h16v4H4zM4 11h16v4H4zM4 17h10v3H4z" />
        </svg>
      );
    case "motion":
      return (
        <svg {...common}>
          <path d="M2 12h5l2-7 3 14 2.5-9 1.5 2h6" />
        </svg>
      );
    case "comms":
      return (
        <svg {...common}>
          <path d="M12 21v-6M12 15a5 5 0 0 0 5-5V6a5 5 0 0 0-10 0v4a5 5 0 0 0 5 5z" />
          <path d="M4 10a8 8 0 0 0 16 0" />
        </svg>
      );
    case "features":
      return (
        <svg {...common}>
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
        </svg>
      );
    case "supply":
      return (
        <svg {...common}>
          <path d="M4 18V8l8-4 8 4v10l-8 4-8-4z" />
          <path d="M12 8v10M4 8l8 4 8-4" />
        </svg>
      );
    default:
      return null;
  }
}

const NAV = [
  { to: "/", label: "COMMAND", code: "SYS-01", icon: "command", end: true },
  { to: "/work", label: "OPERATIONS", code: "SYS-02", icon: "work", end: false },
  { to: "/motion", label: "MOTION TRACK", code: "SYS-03", icon: "motion", end: false },
  { to: "/contact", label: "COMMS UPLINK", code: "SYS-04", icon: "comms", end: false },
  { to: "/features", label: "INTERFACE", code: "SYS-05", icon: "features", end: false },
  { to: "/20", label: "20 SUPPLY", code: "SC2-20", icon: "supply", end: false },
  { to: "/60", label: "60 SUPPLY", code: "SC2-60", icon: "supply", end: false },
];

/* ------------------------------------------------------------------ */
/* Left command rail                                                    */
/* ------------------------------------------------------------------ */
function CommandRail() {
  return (
    <nav className="rail" aria-label="Module navigation">
      <div className="rail__insignia">
        <span className="rail__glyphs" aria-hidden="true">
          <FactionGlyph faction="terran" />
        </span>
        <div className="rail__insignia-text">
          <span className="rail__wordmark">AEGIS</span>
          <span className="rail__sub mono">CMD // v4.2.1</span>
        </div>
      </div>

      <div className="rail__section-label">MODULES</div>
      <ul className="rail__nav">
        {NAV.map((n) => (
          <li key={n.to}>
            <NavLink
              to={n.to}
              end={n.end}
              className={({ isActive }) => `rail__link${isActive ? " active" : ""}`}
            >
              <span className="rail__edge" aria-hidden="true" />
              <span className="rail__icon">
                <Icon name={n.icon} />
              </span>
              <span className="rail__texts">
                <span className="rail__label">{n.label}</span>
                <span className="rail__code mono">{n.code}</span>
              </span>
              <span className="rail__marker" aria-hidden="true">
                ◂
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="rail__spacer" />

      <div className="rail__block">
        <div className="rail__section-label">LINK STATE</div>
        <div className="rail__linkstate">
          <StatusDot tone="ok" />
          <span>UPLINK SECURE</span>
          <span className="mono rail__linkval">98%</span>
        </div>
        <div className="rail__linkstate">
          <StatusDot tone="cyan" />
          <span>SAT RELAY 3/3</span>
          <span className="mono rail__linkval">41ms</span>
        </div>
      </div>

      <div className="rail__operator">
        <div className="rail__avatar mono" aria-hidden="true">
          C1
        </div>
        <div className="rail__op-meta">
          <span className="rail__op-name">COMMAND-01</span>
          <span className="rail__op-role mono">CLEARANCE Δ</span>
        </div>
        <button className="rail__settings mono" aria-label="Settings">
          ⚙
        </button>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Top system status bar with live clock                                */
/* ------------------------------------------------------------------ */
function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function StatusBar() {
  const now = useClock();
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const cells: { label: string; value: string; tone?: string; dot?: "ok" | "warn" | "crit" }[] = [
    { label: "SYSTEM", value: "ONLINE", tone: "ok", dot: "ok" },
    { label: "MODE", value: "TACTICAL", tone: "cyan" },
    { label: "SECTOR", value: "A-17" },
    { label: "LOCAL TIME", value: time },
    { label: "NETWORK", value: "98%" },
    { label: "ACTIVE UNITS", value: "12" },
    { label: "ALERTS", value: "02", tone: "warn", dot: "warn" },
    { label: "OPERATOR", value: "COMMAND-01" },
  ];
  return (
    <header className="statusbar" role="banner">
      <div className="statusbar__sheet">
        <ResourceCluster minerals="1,840" gas="620" supply="48/60" compact />
      </div>
      {cells.map((c) => (
        <div className="statusbar__cell" key={c.label}>
          <span className="statusbar__label">{c.label}</span>
          <span className={`statusbar__value mono${c.tone ? ` tone-${c.tone}` : ""}`}>
            {c.dot && <StatusDot tone={c.dot} pulse={c.dot === "crit"} />}
            {c.value}
          </span>
        </div>
      ))}
      <div className="statusbar__fill" aria-hidden="true">
        <span className="statusbar__scan" />
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* App shell                                                            */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <BrowserRouter>
      <div className="shell">
        <CommandRail />
        <div className="shell__main">
          <StatusBar />
          <main className="shell__viewport">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/motion" element={<Motion />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/features" element={<Features />} />
              <Route path="/20" element={<Supply20 />} />
              <Route path="/60" element={<Supply60 />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
