import { FormEvent, useState } from "react";
import { CmdButton, Corners, PanelHeader, StatusDot, Telemetry } from "../components/hud";

const CHANNELS = ["FLEET OPS", "LOGISTICS", "SECURITY", "DISPATCH", "FIELD TEAMS", "OTHER"];

const PROOF = [
  { value: "00:04:12", label: "MEDIAN RESPONSE TIME", sub: "Priority channel, last 30 cycles" },
  { value: "99.98%", label: "UPLINK AVAILABILITY", sub: "Redundant SAT relay mesh" },
  { value: "1,240+", label: "OPERATIONS SUPPORTED", sub: "Across 14 active sectors" },
];

export default function Contact() {
  const [channel, setChannel] = useState("FLEET OPS");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="page">
      <div className="contact">
        {/* Left: CTA + proof */}
        <div className="contact__intro">
          <p className="page__sub mono">SYS-04 // SECURE TRANSMISSION CHANNEL</p>
          <h1 className="contact__title">
            OPEN A DIRECT LINE
            <br />
            TO COMMAND
          </h1>
          <p className="contact__copy">
            Route a request to the operations desk. Every transmission is triaged by a duty
            officer, assigned a priority class, and acknowledged on the same uplink — no
            unmonitored inboxes, no dead channels.
          </p>

          <div className="contact__badges">
            <span className="badge mono">
              <StatusDot tone="ok" /> AES-256 ENCRYPTED
            </span>
            <span className="badge mono">
              <StatusDot tone="cyan" /> PRIORITY QUEUE
            </span>
            <span className="badge mono">
              <StatusDot tone="cyan" /> 24/7 DUTY OFFICER
            </span>
          </div>

          <div className="contact__proof">
            {PROOF.map((p) => (
              <div className="proof" key={p.label}>
                <span className="proof__value mono">{p.value}</span>
                <span className="proof__label">{p.label}</span>
                <span className="proof__sub">{p.sub}</span>
              </div>
            ))}
          </div>

          <div className="contact__alt panel">
            <PanelHeader title="ALTERNATE CHANNELS" meta="FALLBACK" />
            <ul className="contact__alt-list">
              <li>
                <span className="telemetry__label">EMERGENCY FREQ</span>
                <span className="mono tone-cyan">121.500 MHz</span>
              </li>
              <li>
                <span className="telemetry__label">OPS DESK</span>
                <span className="mono">ops@aegis-cmd.io</span>
              </li>
              <li>
                <span className="telemetry__label">RELAY TERMINAL</span>
                <span className="mono">TERM A17-042 // BAY 3</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: transmission form */}
        <section className="panel panel--relative contact__form-panel">
          <Corners />
          <PanelHeader title="TRANSMISSION FORM" meta="CHN-04 SECURE" />

          {sent ? (
            <div className="empty contact__sent">
              <StatusDot tone="ok" pulse />
              <div className="empty__title tone-ok">TRANSMISSION RECEIVED</div>
              <p className="empty__copy">
                Message logged as <span className="mono tone-cyan">MSG-8841</span>. A duty
                officer will acknowledge on this channel within the current cycle.
              </p>
              <CmdButton small onClick={() => setSent(false)}>
                SEND ANOTHER TRANSMISSION
              </CmdButton>
            </div>
          ) : (
            <form className="cform" onSubmit={onSubmit}>
              <fieldset className="cform__fieldset">
                <legend className="cform__label">REQUEST CHANNEL</legend>
                <div className="cform__chips">
                  {CHANNELS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`chip${channel === c ? " is-active" : ""}`}
                      aria-pressed={channel === c}
                      onClick={() => setChannel(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="cform__row">
                <label className="cform__field">
                  <span className="cform__label">OPERATOR NAME</span>
                  <input type="text" placeholder="J. MERCER" required />
                </label>
                <label className="cform__field">
                  <span className="cform__label">CALLSIGN / ORG</span>
                  <input type="text" placeholder="NORTHWATCH LOGISTICS" />
                </label>
              </div>

              <div className="cform__row">
                <label className="cform__field">
                  <span className="cform__label">RETURN FREQUENCY (EMAIL)</span>
                  <input type="email" placeholder="operator@org.io" required />
                </label>
                <label className="cform__field">
                  <span className="cform__label">PRIORITY CLASS</span>
                  <select defaultValue="ROUTINE">
                    <option>ROUTINE</option>
                    <option>PRIORITY</option>
                    <option>IMMEDIATE</option>
                    <option>FLASH</option>
                  </select>
                </label>
              </div>

              <label className="cform__field">
                <span className="cform__label">MESSAGE BODY</span>
                <textarea
                  rows={5}
                  placeholder="State the objective, affected units, sector, and required response window."
                  required
                />
              </label>

              <div className="cform__meta mono">
                <span>EST. TRANSMIT SIZE: 2.4 KB</span>
                <span>RELAY: SAT-3 → A-17</span>
                <span className="tone-ok">CHANNEL CLEAR</span>
              </div>

              <div className="cform__submit">
                <CmdButton variant="primary" type="submit">
                  TRANSMIT REQUEST
                </CmdButton>
                <span className="cform__disclaimer">
                  Transmissions are logged and retained per operations policy OPS-114.
                </span>
              </div>
            </form>
          )}
        </section>
      </div>

      <section className="panel">
        <PanelHeader title="CHANNEL TELEMETRY" meta="LIVE" />
        <div className="ops-strip__grid">
          <Telemetry label="QUEUE DEPTH" value="03" tone="cyan" />
          <Telemetry label="DUTY OFFICER" value="ON STATION" tone="ok" dot />
          <Telemetry label="AVG ACK TIME" value="00:04:12" />
          <Telemetry label="ENCRYPTION" value="AES-256-GCM" />
          <Telemetry label="LAST ACK" value="21:39:51" />
          <Telemetry label="CHANNEL LOAD" value="18%" />
        </div>
      </section>
    </div>
  );
}
