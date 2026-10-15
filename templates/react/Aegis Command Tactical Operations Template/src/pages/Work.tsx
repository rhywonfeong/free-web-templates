import { useState } from "react";
import { CmdButton, Corners, PanelHeader, SegBar, StatusDot, Telemetry } from "../components/hud";

type OpStatus = "COMPLETE" | "IN PROGRESS" | "QUEUED" | "ABORTED" | "CRITICAL";

type Operation = {
  id: string;
  name: string;
  unit: string;
  sector: string;
  start: string;
  duration: string;
  status: OpStatus;
  progress: number;
};

const OPS: Operation[] = [
  { id: "OP-4471", name: "Secure Relay Node 7", unit: "RAVEN-04", sector: "A-17", start: "21:12:44", duration: "00:29:34", status: "IN PROGRESS", progress: 62 },
  { id: "OP-4470", name: "Civilian Escort — Corridor B", unit: "VANTA-02", sector: "B-03", start: "20:48:10", duration: "00:54:08", status: "IN PROGRESS", progress: 78 },
  { id: "OP-4469", name: "Restore Comms Link", unit: "ECHO-07", sector: "A-16", start: "20:31:52", duration: "01:10:26", status: "CRITICAL", progress: 24 },
  { id: "OP-4468", name: "Forward Position Survey", unit: "IRIS-11", sector: "A-17", start: "19:58:03", duration: "00:41:12", status: "QUEUED", progress: 0 },
  { id: "OP-4467", name: "Perimeter Sweep — North Grid", unit: "ONYX-09", sector: "BASE", start: "19:02:47", duration: "00:38:55", status: "COMPLETE", progress: 100 },
  { id: "OP-4466", name: "Supply Drop Recovery", unit: "IRIS-11", sector: "A-15", start: "18:22:31", duration: "00:52:19", status: "COMPLETE", progress: 100 },
  { id: "OP-4465", name: "Signal Triangulation Pass", unit: "ECHO-07", sector: "A-16", start: "17:41:09", duration: "00:19:03", status: "ABORTED", progress: 37 },
  { id: "OP-4464", name: "Ridge Overwatch Rotation", unit: "RAVEN-04", sector: "A-18", start: "16:55:26", duration: "01:22:41", status: "COMPLETE", progress: 100 },
];

const tone: Record<OpStatus, "ok" | "cyan" | "warn" | "idle" | "crit"> = {
  COMPLETE: "ok",
  "IN PROGRESS": "cyan",
  QUEUED: "warn",
  ABORTED: "idle",
  CRITICAL: "crit",
};

const FILTERS = ["ALL", "IN PROGRESS", "QUEUED", "COMPLETE", "CRITICAL"] as const;

export default function Work() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const rows = OPS.filter((o) => filter === "ALL" || o.status === filter);

  return (
    <div className="page">
      <div className="page__title-row">
        <div>
          <h1 className="page__title">OPERATIONS LOG</h1>
          <p className="page__sub mono">SYS-02 // MISSION RECORDS &amp; DEPLOYMENT HISTORY // CYCLE 0442</p>
        </div>
        <CmdButton variant="primary">AUTHORIZE NEW OPERATION</CmdButton>
      </div>

      <section className="panel ops-strip">
        <PanelHeader title="CYCLE SUMMARY" meta="LAST 24H" />
        <div className="ops-strip__grid">
          <Telemetry label="TOTAL OPERATIONS" value="08" tone="cyan" />
          <Telemetry label="COMPLETE" value="03" tone="ok" dot />
          <Telemetry label="IN PROGRESS" value="02" />
          <Telemetry label="CRITICAL" value="01" tone="crit" dot />
          <Telemetry label="ABORT RATE" value="12.5%" tone="warn" />
          <Telemetry label="AVG DURATION" value="00:46:02" />
        </div>
      </section>

      <section className="panel">
        <PanelHeader title="MISSION RECORDS" meta={`${rows.length} / ${OPS.length} SHOWN`} />
        <div className="filters" role="tablist" aria-label="Filter operations">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`filter${filter === f ? " is-active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {rows.length === 0 ? (
          <div className="empty">
            <div className="empty__title">NO MATCHING OPERATIONS</div>
            <p className="empty__copy">System awaiting command. Adjust filters or authorize a new operation.</p>
            <CmdButton small onClick={() => setFilter("ALL")}>
              RESET FILTERS
            </CmdButton>
          </div>
        ) : (
          <div className="opstable" role="table">
            <div className="opstable__head mono" role="row">
              <span>ID</span>
              <span>OPERATION</span>
              <span>UNIT</span>
              <span>SECTOR</span>
              <span>START</span>
              <span>DURATION</span>
              <span>PROGRESS</span>
              <span>STATUS</span>
            </div>
            {rows.map((o) => {
              const t = tone[o.status];
              return (
                <div className={`opstable__row opstable__row--${t}`} role="row" key={o.id}>
                  <span className="mono opstable__id">{o.id}</span>
                  <span className="opstable__name">{o.name}</span>
                  <span className="mono">{o.unit}</span>
                  <span className="mono">{o.sector}</span>
                  <span className="mono dim">{o.start}</span>
                  <span className="mono dim">{o.duration}</span>
                  <span className="opstable__progress">
                    <span className="opstable__bar">
                      <i style={{ width: `${o.progress}%` }} className={`opstable__fill opstable__fill--${t}`} />
                    </span>
                    <span className="mono dim">{o.progress}%</span>
                  </span>
                  <span className={`opstable__status tone-${t}`}>
                    <StatusDot tone={t} pulse={t === "crit"} />
                    {o.status}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <div className="page__cols">
        <section className="panel selected--crit panel--relative">
          <Corners tone="red" />
          <PanelHeader title="COMMUNICATION FAILURE" tone="crit" meta="ERR-0042" />
          <p className="failure__copy">
            Connection to <span className="mono tone-crit">ECHO-07</span> lost during operation OP-4469.
            Telemetry stream terminated mid-transmission.
          </p>
          <div className="failure__grid">
            <Telemetry label="LAST CONTACT" value="21:41:36" tone="crit" />
            <Telemetry label="PACKET LOSS" value="84%" tone="crit" />
            <Telemetry label="RELAY PATH" value="SAT-2 → A-16" />
          </div>
          <div className="selected__actions">
            <CmdButton variant="primary">RETRY CONNECTION</CmdButton>
            <CmdButton>REROUTE VIA SAT-3</CmdButton>
            <CmdButton variant="danger">DISCONNECT</CmdButton>
          </div>
        </section>

        <section className="panel panel--relative">
          <Corners />
          <PanelHeader title="RESOURCE ALLOCATION" meta="LOGISTICS" />
          <div className="selected__systems">
            <SegBar label="FUEL RESERVE" value={74} />
            <SegBar label="MUNITIONS" value={58} />
            <SegBar label="MED SUPPLIES" value={83} />
            <SegBar label="SPARE PARTS" value={39} />
            <SegBar label="RATIONS" value={91} />
          </div>
          <div className="selected__actions">
            <CmdButton variant="primary" small>
              REQUEST RESUPPLY
            </CmdButton>
            <CmdButton small>OPEN MANIFEST</CmdButton>
          </div>
        </section>
      </div>
    </div>
  );
}
