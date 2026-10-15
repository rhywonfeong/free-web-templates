import { useEffect, useMemo, useState } from "react";
import { CmdButton, Corners, PanelHeader, StatusDot, Telemetry } from "../components/hud";

/* ------------------------------------------------------------------ */
/* Live-ish motion telemetry (deterministic oscillators, no randomness  */
/* per frame so the display feels calibrated, not noisy)                */
/* ------------------------------------------------------------------ */
function useTick(ms: number) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), ms);
    return () => clearInterval(t);
  }, [ms]);
  return tick;
}

type Track = {
  id: string;
  vector: number;
  speed: number;
  alt: string;
  signal: number;
  state: "TRACKING" | "LOCKED" | "DEGRADED";
};

const TRACKS: Track[] = [
  { id: "RAVEN-04", vector: 47, speed: 12.4, alt: "018.44", signal: 98, state: "LOCKED" },
  { id: "VANTA-02", vector: 133, speed: 8.1, alt: "004.02", signal: 94, state: "TRACKING" },
  { id: "IRIS-11", vector: 291, speed: 15.7, alt: "011.87", signal: 88, state: "TRACKING" },
  { id: "ECHO-07", vector: 12, speed: 0.0, alt: "022.31", signal: 12, state: "DEGRADED" },
];

const stateTone: Record<Track["state"], "cyan" | "ok" | "crit"> = {
  LOCKED: "cyan",
  TRACKING: "ok",
  DEGRADED: "crit",
};

function Sparkline({ seed, tone }: { seed: number; tone: "cyan" | "ok" | "crit" }) {
  const tick = useTick(900);
  const points = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 40; i++) {
      const x = i * 4;
      const y =
        16 +
        Math.sin((i + tick + seed * 7) * 0.55) * 6 +
        Math.sin((i + tick * 2 + seed * 3) * 0.21) * 4;
      pts.push(`${x},${y.toFixed(1)}`);
    }
    return pts.join(" ");
  }, [tick, seed]);
  return (
    <svg viewBox="0 0 160 32" className={`spark spark--${tone}`} preserveAspectRatio="none" aria-hidden="true">
      <polyline points={points} fill="none" />
    </svg>
  );
}

export default function Motion() {
  const tick = useTick(1000);
  const sweep = (tick * 30) % 360;
  const x = (184.02 + Math.sin(tick * 0.4) * 1.2).toFixed(2);
  const y = (772.91 + Math.cos(tick * 0.3) * 0.9).toFixed(2);

  return (
    <div className="page">
      <div className="page__title-row">
        <div>
          <h1 className="page__title">MOTION TRACK</h1>
          <p className="page__sub mono">SYS-03 // KINETIC TELEMETRY &amp; SENSOR FUSION // SECTOR A-17</p>
        </div>
        <div className="page__title-actions">
          <CmdButton>CALIBRATE SENSORS</CmdButton>
          <CmdButton variant="primary">ENGAGE AUTO-TRACK</CmdButton>
        </div>
      </div>

      <section className="panel ops-strip">
        <PanelHeader title="SENSOR FUSION" meta="4 FEEDS MERGED" />
        <div className="ops-strip__grid">
          <Telemetry label="TRACKS HELD" value="04" tone="cyan" />
          <Telemetry label="LOCK QUALITY" value="97.2%" tone="ok" dot />
          <Telemetry label="SWEEP RATE" value="2.4 s" />
          <Telemetry label="DOPPLER DRIFT" value="0.03%" />
          <Telemetry label="DEGRADED FEEDS" value="01" tone="crit" dot />
          <Telemetry label="LATENCY" value="41 ms" />
        </div>
      </section>

      <div className="page__cols page__cols--radar">
        {/* Radar */}
        <section className="panel panel--relative radar-panel">
          <Corners />
          <PanelHeader title="PROXIMITY RADAR" meta="RANGE 8.0 KM" />
          <div className="radar">
            <svg viewBox="0 0 240 240" className="radar__svg">
              <circle cx="120" cy="120" r="110" className="radar__ring" />
              <circle cx="120" cy="120" r="74" className="radar__ring" />
              <circle cx="120" cy="120" r="38" className="radar__ring" />
              <path d="M120 10v220M10 120h220" className="radar__axis" />
              <text x="120" y="24" className="map__coord" textAnchor="middle">000</text>
              <text x="226" y="124" className="map__coord">090</text>
              <text x="120" y="234" className="map__coord" textAnchor="middle">180</text>
              <text x="6" y="124" className="map__coord">270</text>
              {/* sweep */}
              <g transform={`rotate(${sweep} 120 120)`} className="radar__sweep-g">
                <path d="M120 120 L120 12 A108 108 0 0 1 158 19 Z" className="radar__sweep" />
              </g>
              {/* blips */}
              <circle cx="164" cy="86" r="3.5" className="radar__blip radar__blip--cyan" />
              <circle cx="92" cy="152" r="3.5" className="radar__blip radar__blip--ok" />
              <circle cx="146" cy="168" r="3.5" className="radar__blip radar__blip--ok" />
              <circle cx="72" cy="76" r="3.5" className="radar__blip radar__blip--crit" />
              <text x="172" y="82" className="map__id">RVN-04</text>
              <text x="60" y="66" className="map__id map__id--crit">ECH-07</text>
            </svg>
            <div className="map__readout mono">
              <span>X: {x}</span>
              <span>Y: {y}</span>
              <span>Z: 018.44</span>
              <span className="map__readout-right">SWEEP {String(sweep).padStart(3, "0")}°</span>
            </div>
          </div>
        </section>

        {/* Track table */}
        <section className="panel">
          <PanelHeader title="ACTIVE TRACKS" meta="TELEMETRY 1 Hz" />
          <div className="tracks">
            {TRACKS.map((t, i) => {
              const tone = stateTone[t.state];
              return (
                <div className={`track track--${tone}`} key={t.id}>
                  <div className="track__head">
                    <span className="track__id mono">{t.id}</span>
                    <span className={`track__state tone-${tone}`}>
                      <StatusDot tone={tone} pulse={tone === "crit"} />
                      {t.state}
                    </span>
                  </div>
                  <Sparkline seed={i + 1} tone={tone} />
                  <div className="track__stats mono">
                    <span>
                      <b>VEC</b> {String(t.vector).padStart(3, "0")}°
                    </span>
                    <span>
                      <b>SPD</b> {t.speed.toFixed(1)} m/s
                    </span>
                    <span>
                      <b>ALT</b> {t.alt}
                    </span>
                    <span className={t.signal < 40 ? "tone-crit" : undefined}>
                      <b>SIG</b> {t.signal}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="tracks__footer">
            <span className="mono dim">SYNCING TELEMETRY<span className="ellipsis" /></span>
            <CmdButton small>EXPORT TRACK DATA</CmdButton>
          </div>
        </section>
      </div>

      <section className="panel">
        <PanelHeader title="MOTION EVENTS" meta="LAST 15 MIN" />
        <ul className="feed__list">
          <li className="feed__row">
            <span className="feed__sev feed__sev--cyan" aria-hidden="true" />
            <span className="feed__time mono">21:42:04</span>
            <span className="feed__src mono">RAVEN-04</span>
            <span className="feed__msg">Velocity change +3.2 m/s — course held at 047°</span>
          </li>
          <li className="feed__row">
            <span className="feed__sev feed__sev--crit" aria-hidden="true" />
            <span className="feed__time mono">21:40:11</span>
            <span className="feed__src mono">ECHO-07</span>
            <span className="feed__msg">Track quality dropped below lock threshold — coasting on last vector</span>
          </li>
          <li className="feed__row">
            <span className="feed__sev feed__sev--warn" aria-hidden="true" />
            <span className="feed__time mono">21:36:47</span>
            <span className="feed__src mono">SENSOR-2</span>
            <span className="feed__msg">Doppler recalibration scheduled — expect 400ms gap</span>
          </li>
          <li className="feed__row">
            <span className="feed__sev feed__sev--ok" aria-hidden="true" />
            <span className="feed__time mono">21:33:29</span>
            <span className="feed__src mono">IRIS-11</span>
            <span className="feed__msg">Entered supply corridor R-1 at 15.7 m/s</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
