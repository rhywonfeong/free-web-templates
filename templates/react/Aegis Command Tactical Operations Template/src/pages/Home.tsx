import { useState } from "react";
import { Link } from "react-router-dom";
import UnicornScene from "unicornstudio-react";
import { CmdButton, Corners, PanelHeader, SegBar, StatusDot, Telemetry } from "../components/hud";
import { useReveal } from "../components/motion";
import { Battlecruiser, Mineral, ProtossMark, TerranMark, Vespene, ZergMark } from "../components/sc2";
import { CommandCard, MinimapFrame, PortraitPlate, SheetBanner, SheetFrame } from "../components/sheet";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
type Unit = {
  id: string;
  cls: string;
  status: "READY" | "DEPLOYED" | "WARNING" | "CRITICAL" | "STANDBY";
  loc: string;
  readiness: number;
  objective: string;
  next: string;
  systems: { label: string; value: number; display?: string }[];
  pos: { x: number; y: number };
};

const UNITS: Unit[] = [
  {
    id: "RAVEN-04",
    cls: "RECON / SUPPORT",
    status: "READY",
    loc: "SECTOR A-17",
    readiness: 86,
    objective: "Secure Relay Node",
    next: "22:30",
    systems: [
      { label: "POWER", value: 87 },
      { label: "MOBILITY", value: 94 },
      { label: "COMMS", value: 100 },
      { label: "ARMOR", value: 72 },
      { label: "SUPPLIES", value: 68 },
      { label: "CREW", value: 100, display: "READY" },
    ],
    pos: { x: 176, y: 118 },
  },
  {
    id: "ECHO-07",
    cls: "SIGNAL / RELAY",
    status: "CRITICAL",
    loc: "SECTOR A-16",
    readiness: 41,
    objective: "Restore Comms Link",
    next: "HOLD",
    systems: [
      { label: "POWER", value: 63 },
      { label: "MOBILITY", value: 58 },
      { label: "COMMS", value: 12 },
      { label: "ARMOR", value: 66 },
      { label: "SUPPLIES", value: 44 },
      { label: "CREW", value: 100, display: "READY" },
    ],
    pos: { x: 84, y: 62 },
  },
  {
    id: "VANTA-02",
    cls: "HEAVY / ESCORT",
    status: "DEPLOYED",
    loc: "SECTOR B-03",
    readiness: 91,
    objective: "Escort Civilian Team",
    next: "21:55",
    systems: [
      { label: "POWER", value: 92 },
      { label: "MOBILITY", value: 84 },
      { label: "COMMS", value: 97 },
      { label: "ARMOR", value: 95 },
      { label: "SUPPLIES", value: 81 },
      { label: "CREW", value: 100, display: "READY" },
    ],
    pos: { x: 268, y: 74 },
  },
  {
    id: "IRIS-11",
    cls: "MEDICAL / EVAC",
    status: "WARNING",
    loc: "SECTOR A-17",
    readiness: 64,
    objective: "Forward Position",
    next: "23:10",
    systems: [
      { label: "POWER", value: 71 },
      { label: "MOBILITY", value: 88 },
      { label: "COMMS", value: 90 },
      { label: "ARMOR", value: 52 },
      { label: "SUPPLIES", value: 34 },
      { label: "CREW", value: 100, display: "READY" },
    ],
    pos: { x: 210, y: 178 },
  },
  {
    id: "ONYX-09",
    cls: "STRIKE / ASSAULT",
    status: "STANDBY",
    loc: "BASE PERIMETER",
    readiness: 97,
    objective: "—",
    next: "00:00",
    systems: [
      { label: "POWER", value: 99 },
      { label: "MOBILITY", value: 96 },
      { label: "COMMS", value: 100 },
      { label: "ARMOR", value: 98 },
      { label: "SUPPLIES", value: 94 },
      { label: "CREW", value: 100, display: "READY" },
    ],
    pos: { x: 52, y: 168 },
  },
];

const statusTone: Record<Unit["status"], "ok" | "warn" | "crit" | "cyan" | "idle"> = {
  READY: "ok",
  DEPLOYED: "cyan",
  WARNING: "warn",
  CRITICAL: "crit",
  STANDBY: "idle",
};

const FEED = [
  { t: "21:42:18", src: "RAVEN-04", msg: "Entered Sector A-17", sev: "ok" as const },
  { t: "21:41:52", src: "NODE-7", msg: "Objective telemetry updated", sev: "cyan" as const },
  { t: "21:40:04", src: "ECHO-07", msg: "Communications degraded — packet loss 84%", sev: "crit" as const },
  { t: "21:37:22", src: "LOGISTICS", msg: "Supply request #4417 approved", sev: "ok" as const },
  { t: "21:35:48", src: "IRIS-11", msg: "Supplies below 40% threshold", sev: "warn" as const },
  { t: "21:31:09", src: "VANTA-02", msg: "Escort convoy departed waypoint B-03/W2", sev: "cyan" as const },
  { t: "21:27:44", src: "SYSTEM", msg: "Sector A-17 grid recalibrated", sev: "ok" as const },
];

/* ------------------------------------------------------------------ */
/* Tactical map                                                         */
/* ------------------------------------------------------------------ */
function portraitKind(id: string): "marine" | "stalker" | "hydra" {
  if (id.startsWith("ECHO") || id.startsWith("IRIS")) return "hydra";
  if (id.startsWith("VANTA") || id.startsWith("ONYX")) return "stalker";
  return "marine";
}

function TacticalMap({ units, selectedId, onSelect }: { units: Unit[]; selectedId: string | null; onSelect: (id: string) => void }) {
  const sel = units.find((u) => u.id === selectedId);
  return (
    <section className="panel map-panel">
      <Corners />
      <PanelHeader title="TACTICAL GRID — SECTOR A-17" meta="MINIMAP FRAME // A17-042-991" />
      <MinimapFrame>
      <div className="map-panel__body">
        <svg viewBox="0 0 320 220" className="map" preserveAspectRatio="xMidYMid meet">
          {/* grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="#16222f" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="320" height="220" fill="url(#grid)" />
          {/* coordinate rulers */}
          {[40, 100, 160, 220, 280].map((x, i) => (
            <text key={x} x={x} y={10} className="map__coord">
              {String(i * 6 + 12).padStart(2, "0")}
            </text>
          ))}
          {[40, 90, 140, 190].map((y, i) => (
            <text key={y} x={5} y={y} className="map__coord">
              {String.fromCharCode(65 + i)}7
            </text>
          ))}
          {/* threat zone */}
          <path d="M60 30 L128 22 L142 84 L74 96 Z" className="map__threat" />
          <text x="82" y="58" className="map__zone-label">
            THREAT Z-2
          </text>
          {/* resource zone */}
          <rect x="232" y="140" width="70" height="52" className="map__resource" />
          <text x="240" y="168" className="map__zone-label map__zone-label--teal">
            SUPPLY R-1
          </text>
          {/* objective node */}
          <g>
            <circle cx="252" cy="52" r="7" className="map__objective" />
            <circle cx="252" cy="52" r="12" className="map__objective-ring" />
            <text x="238" y="36" className="map__id">
              NODE-7
            </text>
          </g>
          {/* path line from selected to objective */}
          {sel && (
            <path
              d={`M${sel.pos.x} ${sel.pos.y} L${(sel.pos.x + 252) / 2} ${(sel.pos.y + 52) / 2 - 14} L252 52`}
              className="map__path"
            />
          )}
          {/* unit markers */}
          {units.map((u) => {
            const t = statusTone[u.status];
            const active = u.id === selectedId;
            return (
              <g
                key={u.id}
                transform={`translate(${u.pos.x} ${u.pos.y})`}
                className={`map__unit map__unit--${t}${active ? " is-active" : ""}`}
                onClick={() => onSelect(u.id)}
              >
                {active && <rect x="-11" y="-11" width="22" height="22" className="map__lock" />}
                <path d="M0 -6 L6 5 L-6 5 Z" className="map__unit-shape" />
                <text x="9" y="4" className="map__id">
                  {u.id}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="map__readout mono">
          <span>X: 184.02</span>
          <span>Y: 772.91</span>
          <span>Z: 018.44</span>
          <span className="map__readout-right">VECTOR 047° // 4.8 KM</span>
        </div>
      </div>
      </MinimapFrame>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>("RAVEN-04");
  const [order, setOrder] = useState("ATTACK");
  const sel = UNITS.find((u) => u.id === selectedId) ?? null;
  const root = useReveal(".reveal", []);

  return (
    <div className="command font-rajdhani" ref={root}>
      <div
        className="aura-background-component fixed top-0 w-full h-screen -z-10"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      >
        <UnicornScene projectId="mrwNzKDmDWpepWU4ly6w" className="w-full h-full" />
      </div>
      <div className="command__center">
        <section className="doctrine reveal">
          <SheetBanner />
          <div className="doctrine__marks" aria-hidden="true">
            <TerranMark size={34} />
            <ZergMark size={34} />
            <ProtossMark size={34} />
          </div>
          <div className="doctrine__copy">
            <span className="mono doctrine__kicker">ASSET SHEET LOCKED // FRAMES · PORTRAIT · COMMAND CARD</span>
            <strong>Console rebuilt from the sheet. Wireframes hold the lock.</strong>
          </div>
          <div className="doctrine__ships" aria-hidden="true">
            <Battlecruiser size={118} />
          </div>
          <div className="doctrine__res" aria-hidden="true">
            <Mineral size={28} />
            <Vespene size={28} />
          </div>
          <Link to="/features" className="cmd cmd--primary cmd--small">
            <span className="cmd__chevron">▸</span>OPEN INTERFACE
          </Link>
        </section>
        {/* OPERATIONS overview strip */}
        <section className="panel ops-strip reveal">
          <PanelHeader title="OPERATIONS" meta="CYCLE 0442 // LIVE" />
          <div className="ops-strip__grid">
            <Telemetry label="ACTIVE UNITS" value="12" tone="cyan" />
            <Telemetry label="AVAILABLE" value="04" tone="ok" dot />
            <Telemetry label="DEPLOYED" value="06" />
            <Telemetry label="NEED ATTENTION" value="02" tone="crit" dot />
            <Telemetry label="OBJECTIVES" value="03" />
            <Telemetry label="SUPPLY LEVEL" value="71%" tone="warn" />
          </div>
        </section>

        <div className="command__row">
          {/* Unit roster */}
          <section className="panel roster reveal">
            <PanelHeader title="TACTICAL ROSTER" meta={`${UNITS.length} UNITS`} />
            <div className="roster__head mono">
              <span>UNIT</span>
              <span>STATUS</span>
              <span>RDY</span>
            </div>
            <ul className="roster__list">
              {UNITS.map((u) => {
                const t = statusTone[u.status];
                return (
                  <li key={u.id}>
                    <button
                      className={`roster__row${u.id === selectedId ? " is-selected" : ""}`}
                      onClick={() => setSelectedId(u.id)}
                    >
                      <span className="roster__edge" aria-hidden="true" />
                      <span className="roster__unit">
                        <span className="roster__id mono">{u.id}</span>
                        <span className="roster__cls">{u.cls}</span>
                      </span>
                      <span className={`roster__status tone-${t}`}>
                        <StatusDot tone={t} pulse={t === "crit"} />
                        {u.status}
                      </span>
                      <span className="roster__rdy mono">{u.readiness}%</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Selected unit */}
          {sel ? (
            <SheetFrame tone={sel.status === "CRITICAL" ? "red" : "brass"} className="selected-frame">
            <section className={`panel selected reveal${sel.status === "CRITICAL" ? " selected--crit" : ""}`}>
              <Corners tone={sel.status === "CRITICAL" ? "red" : "cyan"} />
              <div className="selected__scan" aria-hidden="true" />
              <div className="selected__head">
                <PortraitPlate callsign={sel.id} faction={sel.cls} kind={portraitKind(sel.id)} />
                <div>
                  <div className="selected__eyebrow">
                    <StatusDot tone={statusTone[sel.status]} pulse={sel.status === "CRITICAL"} />
                    TARGET LOCKED — FIELD OPERATIONS UNIT
                  </div>
                  <h2 className="selected__id mono">{sel.id}</h2>
                  <span className="selected__order mono">ORDER // {order}</span>
                </div>
                <div className="selected__readiness">
                  <span className="telemetry__label">READINESS</span>
                  <span className={`selected__pct mono ${sel.readiness < 60 ? "tone-crit" : sel.readiness < 80 ? "tone-warn" : "tone-ok"}`}>
                    {sel.readiness}%
                  </span>
                </div>
              </div>

              <div className="selected__grid">
                <Telemetry label="STATUS" value={sel.status} tone={statusTone[sel.status] === "idle" ? undefined : (statusTone[sel.status] as "ok" | "warn" | "crit" | "cyan")} dot />
                <Telemetry label="CLASS" value={sel.cls} />
                <Telemetry label="LOCATION" value={sel.loc} />
                <Telemetry label="CURRENT OBJECTIVE" value={sel.objective} />
                <Telemetry label="NEXT DEPLOYMENT" value={sel.next} />
                <Telemetry label="UPLINK ID" value="A17-042-991" />
              </div>

              <div className="selected__systems">
                <div className="selected__systems-label">SUBSYSTEM READINESS</div>
                {sel.systems.map((s) => (
                  <SegBar key={s.label} label={s.label} value={s.value} display={s.display} />
                ))}
              </div>

              <div className="selected__actions">
                <CmdButton variant="primary">DEPLOY</CmdButton>
                <CmdButton>INSPECT</CmdButton>
                <CmdButton>TRACK</CmdButton>
                <CmdButton variant="danger">ABORT</CmdButton>
              </div>
              <CommandCard active={order} onPick={setOrder} />
            </section>
            </SheetFrame>
          ) : (
            <section className="panel selected selected--empty">
              <Corners />
              <div className="empty">
                <div className="empty__title">NO UNIT SELECTED</div>
                <p className="empty__copy">Select a unit from the tactical roster.</p>
              </div>
            </section>
          )}
        </div>

        <div className="command__row command__row--map">
          <TacticalMap units={UNITS} selectedId={selectedId} onSelect={setSelectedId} />

          {/* Objective panel */}
          <section className="panel objective">
            <Corners />
            <PanelHeader title="ACTIVE OBJECTIVE" meta="OBJ-07" />
            <h3 className="objective__name">Secure Relay Node 7</h3>
            <div className="objective__grid">
              <Telemetry label="PRIORITY" value="HIGH" tone="warn" dot />
              <Telemetry label="SECTOR" value="A-17" />
              <Telemetry label="DISTANCE" value="4.8 KM" />
              <Telemetry label="ETA" value="06:42" />
              <Telemetry label="UNIT ASSIGNED" value="RAVEN-04" tone="cyan" />
              <Telemetry label="SUPPORT UNITS" value="02" />
            </div>
            <div className="objective__status">
              <span className="telemetry__label">STATUS</span>
              <span className="objective__badge mono">
                <StatusDot tone="cyan" pulse />
                IN PROGRESS
              </span>
            </div>
            <div className="objective__actions">
              <CmdButton variant="primary" small>
                OPEN OBJECTIVE
              </CmdButton>
              <CmdButton small>REASSIGN</CmdButton>
              <CmdButton small>TRACK</CmdButton>
              <CmdButton variant="danger" small>
                ABORT
              </CmdButton>
            </div>
          </section>
        </div>

        {/* Event feed */}
        <section className="panel feed reveal">
          <PanelHeader title="EVENT TELEMETRY" meta="STREAMING" />
          <ul className="feed__list">
            {FEED.map((e, i) => (
              <li className="feed__row" key={i}>
                <span className={`feed__sev feed__sev--${e.sev}`} aria-hidden="true" />
                <span className="feed__time mono">{e.t}</span>
                <span className="feed__src mono">{e.src}</span>
                <span className="feed__msg">{e.msg}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Right tactical rail */}
      <aside className="tacrail">
        <section className="panel">
          <PanelHeader title="TACTICAL STATUS" />
          <ul className="tacrail__status">
            <li>
              <StatusDot tone="crit" pulse /> 2 Critical Alerts
            </li>
            <li>
              <StatusDot tone="warn" /> 1 Unresolved Objective
            </li>
            <li>
              <StatusDot tone="ok" /> Readiness 86%
            </li>
            <li>
              <StatusDot tone="cyan" /> Communications Online
            </li>
          </ul>
        </section>

        <section className="panel">
          <PanelHeader title="ALERTS" meta="02" tone="crit" />
          <div className="alert alert--warn">
            <div className="alert__title">AMMO BELOW THRESHOLD</div>
            <div className="alert__meta mono">RAVEN-04 // 12% remaining</div>
            <CmdButton small>RESUPPLY</CmdButton>
          </div>
          <div className="alert alert--crit">
            <div className="alert__title">COMMS INTERRUPTED</div>
            <div className="alert__meta mono">ECHO-07 // last contact 00:42 ago</div>
            <CmdButton small>INSPECT</CmdButton>
          </div>
        </section>

        <section className="panel">
          <PanelHeader title="OBJECTIVES" meta="03" />
          <ol className="tacrail__objectives">
            <li>
              <span className="mono">01</span> Secure Relay Node
              <span className="tacrail__obj-state tone-cyan mono">ACTIVE</span>
            </li>
            <li>
              <span className="mono">02</span> Extract Civilian Team
              <span className="tacrail__obj-state tone-warn mono">QUEUED</span>
            </li>
            <li>
              <span className="mono">03</span> Establish Forward Position
              <span className="tacrail__obj-state mono">HOLD</span>
            </li>
          </ol>
        </section>
      </aside>
    </div>
  );
}
