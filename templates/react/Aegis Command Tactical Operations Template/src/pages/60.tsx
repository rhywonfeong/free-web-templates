import { Link } from "react-router-dom";
import { Corners, PanelHeader, StatusDot, Telemetry } from "../components/hud";
import { useReveal } from "../components/motion";
import { Battlecruiser, Carrier, Mutalisk, ProtossMark, ZergMark } from "../components/sc2";

const FRONTS = [
  { name: "Terran sky", unit: "BATTLECRUISER", supply: "6", state: "YAMATO CHARGED", tone: "cyan" as const, art: <Battlecruiser size={132} /> },
  { name: "Zerg screen", unit: "MUTALISK", supply: "2", state: "FLOCK 8", tone: "ok" as const, art: <Mutalisk size={120} /> },
  { name: "Protoss capital", unit: "CARRIER", supply: "6", state: "INTERCEPTORS 8/8", tone: "warn" as const, art: <Carrier size={128} /> },
];

export default function Supply60() {
  const root = useReveal(".reveal", []);

  return (
    <div className="page supply" ref={root}>
      <div className="page__title-row reveal">
        <div>
          <p className="page__sub mono">SUPPLY CAP 60 // MID GAME // MULTI-FRONT</p>
          <h1 className="page__title">
            <span className="sc2-duo">
              <ZergMark size={36} />
              <ProtossMark size={36} />
            </span>
            60 SUPPLY
          </h1>
        </div>
        <Link to="/features" className="cmd cmd--secondary">
          <span className="cmd__chevron">▸</span>INTERFACE
        </Link>
      </div>

      <section className="panel ops-strip reveal">
        <PanelHeader title="ARMY VALUE" meta="THREE FRONTS LIVE" />
        <div className="ops-strip__grid">
          <div className="telemetry">
            <span className="telemetry__label">SUPPLY USED</span>
            <span className="telemetry__value mono tone-cyan">
              48 / 60
            </span>
          </div>
          <Telemetry label="PRODUCTION" value="4 STRUCTURES" tone="ok" dot />
          <Telemetry label="UPGRADES" value="1/1" />
          <Telemetry label="THIRD BASE" value="SATURATING" tone="warn" dot />
          <Telemetry label="DETECTION" value="ONLINE" tone="ok" dot />
          <Telemetry label="THREAT" value="AIR" tone="crit" dot />
        </div>
      </section>

      <div className="fronts">
        {FRONTS.map((f, i) => (
          <article key={f.unit} className="panel front reveal" data-delay={160 + i * 110}>
            <Corners tone={f.tone === "warn" ? "amber" : "cyan"} />
            <PanelHeader title={f.name.toUpperCase()} meta={f.unit} />
            <div className="front__art">{f.art}</div>
            <div className="front__meta">
              <span className={`mono tone-${f.tone}`}>
                <StatusDot tone={f.tone === "ok" ? "ok" : f.tone === "warn" ? "warn" : "cyan"} pulse />
                {f.state}
              </span>
              <span className="mono dim">{f.supply} SUPPLY / UNIT</span>
            </div>
          </article>
        ))}
      </div>

      <section className="panel reveal">
        <PanelHeader title="60 SUPPLY CHECKLIST" meta="BEFORE THE PUSH" />
        <ul className="check-list">
          {[
            "Production saturated — no idle barracks, lair, or gateway",
            "Detection on the map before the mutalisk flock arrives",
            "Supply depots / overlords / pylons queued past 60",
            "Rally point matches the active objective on COMMAND",
          ].map((item) => (
            <li key={item}>
              <StatusDot tone="cyan" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
