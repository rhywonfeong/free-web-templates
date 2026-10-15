import { useMemo, useState } from "react";
import {
  LUAU_SCRIPT,
  SCRIPT_VERSION,
  SCRIPT_FILENAME,
} from "../data/script";

const LOADSTRING =
  'loadstring(game:HttpGet("https://claudeware.dev/loader.lua"))()';

const STEPS = [
  {
    n: "01",
    title: "Copy the full script",
    body: "Use the Copy button below to grab the entire LuaU source — it is completely self-contained, no external loader required.",
  },
  {
    n: "02",
    title: "Paste into your executor",
    body: "Any modern HttpGet-capable executor works. Drop it straight into the editor and hit Execute.",
  },
  {
    n: "03",
    title: "The interface fades in",
    body: "A draggable, tabbed panel (Combat · Visuals · Movement · Player) with a live ping meter, sliders and notifications animates in. Press RightShift to hide it.",
  },
];

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }
}

export default function Download() {
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedLoad, setCopiedLoad] = useState(false);

  const lineCount = useMemo(
    () => LUAU_SCRIPT.split("\n").length,
    []
  );

  const copyScript = async () => {
    await copyText(LUAU_SCRIPT);
    setCopiedScript(true);
    window.setTimeout(() => setCopiedScript(false), 1800);
  };

  const copyLoad = async () => {
    await copyText(LOADSTRING);
    setCopiedLoad(true);
    window.setTimeout(() => setCopiedLoad(false), 1800);
  };

  const downloadScript = () => {
    const blob = new Blob([LUAU_SCRIPT], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = SCRIPT_FILENAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <>
      <section className="page-head container">
        <span className="pill">
          <span className="pill-dot" /> Stable · v{SCRIPT_VERSION}
        </span>
        <h1>Claudeware script, copy and pawte to your executor</h1>
        <p>Free, open source but universal yea.</p>
      </section>

      <section className="section container">
        <div className="script-card">
          <div className="script-head">
            <div className="script-meta">
              <span className="script-file">{SCRIPT_FILENAME}</span>
              <span className="script-stats">
                LuaU · {lineCount} lines · self-contained
              </span>
            </div>
            <div className="script-actions">
              <button className="btn btn-ghost btn-sm" onClick={downloadScript}>
                Download .lua
              </button>
              <button className="btn btn-primary btn-sm" onClick={copyScript}>
                {copiedScript ? "Copied ✓" : "Copy script"}
              </button>
            </div>
          </div>
          <pre className="script-code" tabIndex={0}>
            <code>{LUAU_SCRIPT}</code>
          </pre>
        </div>
      </section>

      <section className="section container">
        <div className="loadstring-card">
          <div className="loadstring-head">
            <span className="loadstring-label">
              Prefer a one-liner? (optional)
            </span>
            <button className="btn btn-ghost btn-sm" onClick={copyLoad}>
              {copiedLoad ? "Copied ✓" : "Copy"}
            </button>
          </div>
          <pre className="loadstring-code">
            <code>{LOADSTRING}</code>
          </pre>
          <p className="loadstring-note">
            The loadstring is a convenience wrapper. If your executor blocks
            HttpGet, just use the full script above — it needs nothing external.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="requirements">
          <h2>Requirements</h2>
          <ul className="req-list">
            <li>
              <span className="req-key">Executor</span>
              <span className="req-val">Any modern LuaU executor</span>
            </li>
            <li>
              <span className="req-key">Drawing API</span>
              <span className="req-val">
                Used for ESP/tracers · falls back to Highlight if missing
              </span>
            </li>
            <li>
              <span className="req-key">Toggle key</span>
              <span className="req-val">RightShift hides / shows the panel</span>
            </li>
            <li>
              <span className="req-key">Footprint</span>
              <span className="req-val">
                Single ScreenGui · all connections cleaned on re-execute
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="disclaimer container">
        <p>
          Shared for learning about game clients and Roblox UI design. Use it
          responsibly, and only where you are actually allowed to.
        </p>
      </section>
    </>
  );
}
