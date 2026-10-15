import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PreviewWindow from "../components/PreviewWindow";
import { FEATURES } from "../data/features";

const DECAL_SRC =
  "https://assetdelivery.roblox.com/v1/asset/?id=115798729575437";

function PanelDecal({ size = 20 }: { size?: number }) {
  const [failed, setFailed] = useState(false);
  const box = { width: size, height: size };
  return (
    <span className="panel-decal" style={box} aria-hidden="true">
      {failed ? (
        <span className="panel-decal-dot" />
      ) : (
        <img
          src={DECAL_SRC}
          alt=""
          onError={() => setFailed(true)}
          draggable={false}
        />
      )}
    </span>
  );
}

function usePingSimulation() {
  const [ping, setPing] = useState(42);
  useEffect(() => {
    const id = window.setInterval(() => {
      setPing((prev) => {
        const drift = Math.round((Math.random() - 0.45) * 22);
        const next = prev + drift;
        return Math.min(210, Math.max(18, next));
      });
    }, 900);
    return () => window.clearInterval(id);
  }, []);

  const quality = useMemo(() => {
    if (ping < 50) return { label: "Godly ping", tone: "great" };
    if (ping < 100) return { label: "Pretty good ping", tone: "good" };
    if (ping < 140) return { label: "Good ping", tone: "ok" };
    if (ping < 180) return { label: "Mid ping", tone: "mid" };
    return { label: "Rough ping", tone: "bad" };
  }, [ping]);

  return { ping, quality };
}

type Row = { label: string; hint: string; on?: boolean };

const PANEL_TABS: Record<string, Row[]> = {
  Combat: [
    { label: "Aimbot", hint: "Hold RMB · FOV lock", on: true },
    { label: "Silent Aim", hint: "Hidden FOV target" },
    { label: "Aim Circle", hint: "FOV ring overlay", on: true },
  ],
  Visuals: [
    { label: "ESP · Box", hint: "Player outline", on: true },
    { label: "ESP · Health", hint: "Live HP bar", on: true },
    { label: "ESP · Tracer", hint: "Line to target" },
    { label: "ESP · Avatar", hint: "Headshot chip" },
    { label: "X-Ray", hint: "See-through walls" },
  ],
  Movement: [
    { label: "Fly", hint: "WASD + Space/Shift", on: true },
    { label: "WalkSpeed", hint: "Tunable slider" },
    { label: "Noclip", hint: "Phase through parts" },
    { label: "Infinite Jump", hint: "No cooldown" },
  ],
  Player: [
    { label: "God Mode", hint: "Auto-heal · anti-void", on: true },
    { label: "Anti-Fling", hint: "Kills velocity spikes" },
    { label: "Anti-AFK", hint: "Never idle-kicked", on: true },
  ],
};

const TAB_NAMES = Object.keys(PANEL_TABS);

export default function Home() {
  const { ping, quality } = usePingSimulation();
  const [tab, setTab] = useState<string>("Combat");

  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="pill">
            <span className="pill-dot" /> v1.2 · Claude-styled hub
          </span>
          <h1 className="hero-title">
            One clean panel.
            <span className="hero-grad"> No leftover GUIs.</span>
          </h1>
          <p className="hero-sub">
            Claudeware is a tabbed Roblox utility built around a soft,
            Claude-inspired interface — aimbot, layered ESP and movement tools
            that tear themselves down cleanly the moment you toggle off.
          </p>
          <div className="hero-actions">
            <Link to="/download" className="btn btn-primary btn-lg">
              Get the script
            </Link>
            <Link to="/features" className="btn btn-ghost btn-lg">
              See the modules
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>25+</strong>
              <span>Toggles</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Tabs</span>
            </div>
            <div>
              <strong>0</strong>
              <span>Leaked loops</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <PreviewWindow>
            <div className="ping-widget" data-tone={quality.tone}>
              <div className="ping-logo">
                <PanelDecal size={20} />
              </div>
              <div className="ping-body">
                <span className="ping-quality">{quality.label}</span>
                <div className="ping-value">
                  <strong>{ping}</strong>
                  <span>ms</span>
                </div>
              </div>
            </div>

            <div className="cw-panel">
              <div className="cw-panel-top">
                <div className="cw-brand">
                  <PanelDecal size={22} />
                  <div className="cw-brand-text">
                    <span className="cw-brand-name">Claudeware</span>
                  </div>
                </div>
                <span className="cw-ver">v1.2.0</span>
              </div>

              <div className="cw-body">
                <div className="cw-tabs" role="tablist">
                  {TAB_NAMES.map((name) => (
                    <button
                      key={name}
                      role="tab"
                      aria-selected={tab === name}
                      className={`cw-tab ${tab === name ? "is-active" : ""}`}
                      onClick={() => setTab(name)}
                    >
                      {name}
                    </button>
                  ))}
                </div>

                <div className="cw-page">
                  {PANEL_TABS[tab].map((row) => (
                    <MockToggle
                      key={row.label}
                      label={row.label}
                      hint={row.hint}
                      on={row.on}
                    />
                  ))}
                </div>
              </div>
            </div>
          </PreviewWindow>
          <div className="hero-visual-shadow" aria-hidden="true" />
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Rebuilt for stability, not screenshots</h2>
          <p>
            Every module runs off a single render loop and disconnects the
            moment it is toggled off — no duplicate ScreenGuis, no orphaned
            BodyMovers, no frames left drawing after you leave.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-icon" aria-hidden="true">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Paste it once. Done.</h2>
            <p>
              Copy the full LuaU source, execute, and the panel fades in. Press
              RightShift any time to hide it.
            </p>
          </div>
          <Link to="/download" className="btn btn-primary btn-lg">
            Copy the script
          </Link>
        </div>
      </section>
    </>
  );
}

function MockToggle({
  label,
  hint,
  on = false,
}: {
  label: string;
  hint: string;
  on?: boolean;
}) {
  const [active, setActive] = useState(on);
  return (
    <button
      type="button"
      className={`mock-toggle ${active ? "is-on" : ""}`}
      onClick={() => setActive((v) => !v)}
      aria-pressed={active}
    >
      <div className="mock-toggle-text">
        <span className="mock-toggle-label">{label}</span>
        <span className="mock-toggle-hint">{hint}</span>
      </div>
      <span className="switch" aria-hidden="true">
        <span className="switch-knob" />
      </span>
    </button>
  );
}
