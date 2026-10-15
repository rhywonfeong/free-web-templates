import { Link } from "react-router-dom";
import { Corners, PanelHeader, SegBar, StatusDot, Telemetry } from "../components/hud";
import { useReveal } from "../components/motion";
import { Mineral, TerranMark, Vespene } from "../components/sc2";

const EARLY = [
  { unit: "SCV", role: "WORKER", supply: 1, count: 12, note: "Mineral line saturated at 16" },
  { unit: "MARINE", role: "BIO", supply: 1, count: 4, note: "Barracks rally to ramp" },
  { unit: "REAPER", role: "HARASS", supply: 1, count: 1, note: "Scout natural + third" },
  { unit: "COMMAND CENTER", role: "STRUCTURE", supply: 0, count: 1, note: "Orbital when 150 gas lands" },
];

export default function Supply20() {
  const root = useReveal(".reveal", []);

  return (
    <div className="page supply" ref={root}>
      <div className="page__title-row reveal">
        <div>
          <p className="page__sub mono">SUPPLY CAP 20 // EARLY GAME // TERRAN OPENER</p>
          <h1 className="page__title">
            <TerranMark size={42} /> 20 SUPPLY
          </h1>
        </div>
        <Link to="/60" className="cmd cmd--primary">
          <span className="cmd__chevron">▸</span>ADVANCE TO 60
        </Link>
      </div>

      <section className="panel ops-strip reveal">
        <PanelHeader title="ECONOMY LOCK" meta="CLOCK 02:40" />
        <div className="supply-econ">
          <div className="supply-econ__cell">
            <Mineral size={40} />
            <div>
              <span className="telemetry__label">MINERALS</span>
              <span className="supply-econ__num mono">420</span>
            </div>
          </div>
          <div className="supply-econ__cell">
            <Vespene size={40} />
            <div>
              <span className="telemetry__label">VESPENE</span>
              <span className="supply-econ__num mono">50</span>
            </div>
          </div>
          <Telemetry label="SUPPLY" value="18 / 20" tone="warn" dot />
          <Telemetry label="WORKERS" value="12" tone="cyan" />
          <Telemetry label="ARMY" value="5" />
          <Telemetry label="DEPOTS" value="01" tone="ok" dot />
        </div>
      </section>

      <div className="page__cols">
        <section className="panel reveal">
          <Corners />
          <PanelHeader title="BUILD ORDER" meta="14/14 INTO REAPER" />
          <ol className="build-order">
            {[
              "14 Supply Depot — ramp wall",
              "16 Barracks — continuous marine",
              "16 Refinery — one on gas",
              "19 Orbital Command",
              "20 Reaper — then second depot before block",
            ].map((step, i) => (
              <li key={step} className="reveal" data-delay={200 + i * 80}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="panel reveal">
          <PanelHeader title="ROSTER @ 20" meta="SUPPLY BLOCK WATCH" />
          <ul className="supply-roster">
            {EARLY.map((u) => (
              <li key={u.unit}>
                <div>
                  <strong className="mono">{u.unit}</strong>
                  <span className="dim">{u.role}</span>
                </div>
                <span className="mono">
                  <StatusDot tone="cyan" /> x{u.count}
                </span>
                <span>{u.note}</span>
                <SegBar label="CAP" value={Math.min(100, (u.supply * u.count * 100) / 20)} display={`${u.supply * u.count} SUP`} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
