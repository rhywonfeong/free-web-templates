import { Link } from "react-router-dom";
import { Corners, PanelHeader, StatusDot } from "../components/hud";
import { AmbientField, FolderPlate, useReveal } from "../components/motion";
import { Battlecruiser, Carrier, Mineral, Mutalisk, ProtossMark, PsiBlade, TerranMark, Vespene, ZergMark } from "../components/sc2";
import { CommandCard, PortraitPlate, ResourceCluster, SheetFrame, WireframeUnit } from "../components/sheet";

const MODES = [
  {
    code: "SKD-01",
    title: "Skeder",
    copy: "Command overlay for selecting a faction doctrine before the grid locks. Terran armor, Zerg swarm, or Protoss psi — one mode, one uplink.",
    cta: "Select mode",
    to: "/20",
    art: <TerranMark size={86} />,
  },
  {
    code: "MRT-02",
    title: "Merthors",
    copy: "Mineral and vespene accounting fused into the operations strip. Supply thresholds pulse before a drop goes critical.",
    cta: "Initialize",
    to: "/60",
    art: (
      <span className="sc2-duo">
        <Mineral />
        <Vespene />
      </span>
    ),
  },
  {
    code: "YPH-03",
    title: "Yous Phars",
    copy: "Phase lanes for carrier interceptors and mutalisk screens. Motion stays secondary to the roster — never a screensaver.",
    cta: "Track lane",
    to: "/motion",
    art: <Carrier size={108} />,
  },
];

const STACK = [
  { title: "Herar", meta: "HER-04", copy: "Forward relay. Locks NODE-7 and paints the path from the selected unit.", icon: <ZergMark size={42} /> },
  { title: "Skertaray", meta: "SKY-05", copy: "High orbit scan. Battlecruiser silhouette holds the threat ring until abort.", icon: <Battlecruiser size={92} /> },
  { title: "Skertaroy", meta: "SKY-06", copy: "Psi lattice. Protoss mark confirms clearance Δ before a deploy order leaves the rail.", icon: <ProtossMark size={42} /> },
];

export default function Features() {
  const root = useReveal(".reveal", []);

  return (
    <div className="page features" ref={root}>
      <AmbientField />
      <div className="page__title-row reveal">
        <div>
          <p className="page__sub mono">SYS-FEAT // FUTURISTIC INTERFACE // KOPRULU DOCTRINE</p>
          <h1 className="page__title">SECTOR INTERFACE</h1>
        </div>
        <div className="page__title-actions">
          <Link to="/20" className="cmd cmd--secondary">
            <span className="cmd__chevron">▸</span>20 SUPPLY
          </Link>
          <Link to="/60" className="cmd cmd--primary">
            <span className="cmd__chevron">▸</span>60 SUPPLY
          </Link>
        </div>
      </div>

      <section className="feature-stage">
        <FolderPlate />
        <div className="feature-stage__grid">
          {MODES.map((m, i) => (
            <article key={m.code} className={`fi-card reveal`} data-delay={120 + i * 90}>
              <div className="fi-card__rim">
                <div className="fi-card__body">
                  <div className="fi-card__art">{m.art}</div>
                  <div>
                    <span className="mono fi-card__code">{m.code}</span>
                    <h2>{m.title}</h2>
                    <p>{m.copy}</p>
                  </div>
                  <Link to={m.to} className="fi-pill">
                    {m.cta}
                  </Link>
                </div>
              </div>
            </article>
          ))}

          <div className="fi-stack">
            {STACK.map((s) => (
              <article key={s.title} className="fi-slim reveal">
                <div className="fi-slim__icon">{s.icon}</div>
                <div>
                  <div className="fi-slim__meta mono">
                    {s.meta}
                    <StatusDot tone="indigo" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel reveal sheet-bay">
        <Corners tone="amber" />
        <PanelHeader title="CONCEPT SHEET" meta="SOURCED // FRAMES · WIRE · CARD · CLUSTER" />
        <div className="sheet-bay__row">
          <SheetFrame>
            <PortraitPlate callsign="RAVEN-04" faction="TERRAN WIRE" kind="marine" />
          </SheetFrame>
          <SheetFrame tone="green">
            <PortraitPlate callsign="ECHO-07" faction="ZERG WIRE" kind="hydra" />
          </SheetFrame>
          <SheetFrame tone="blue">
            <PortraitPlate callsign="VANTA-02" faction="PROTOSS WIRE" kind="stalker" />
          </SheetFrame>
          <div className="sheet-bay__wires">
            <WireframeUnit kind="marine" />
            <WireframeUnit kind="hydra" />
            <WireframeUnit kind="stalker" />
          </div>
        </div>
        <ResourceCluster minerals="2,450" gas="880" supply="52/60" />
        <CommandCard />
      </section>

      <section className="panel reveal">
        <Corners tone="indigo" />
        <PanelHeader title="ASSET BAY" meta="SC2 // ORIGINAL MARKS" />
        <div className="asset-bay">
          <div className="asset-bay__cell">
            <Battlecruiser size={160} />
            <span className="mono">TERRAN // BATTLECRUISER</span>
          </div>
          <div className="asset-bay__cell">
            <Mutalisk size={140} />
            <span className="mono">ZERG // MUTALISK</span>
          </div>
          <div className="asset-bay__cell">
            <Carrier size={150} />
            <span className="mono">PROTOSS // CARRIER</span>
          </div>
          <div className="asset-bay__cell asset-bay__cell--row">
            <Mineral size={56} />
            <Vespene size={56} />
            <PsiBlade size={44} />
            <span className="mono">MINERALS · VESPENE · PSI</span>
          </div>
        </div>
        <div className="feature-stage__foot">
          <span className="mono dim">COMMAND SHELL RETAINED · REVEAL STAGGER 70ms · POWER3-OUT</span>
        </div>
      </section>
    </div>
  );
}
