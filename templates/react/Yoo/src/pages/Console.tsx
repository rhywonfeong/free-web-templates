import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type LogType = "Output" | "Information" | "Warning" | "Error";

type StackLine = { indent: number; text: string };

type LogEntry = {
  id: number;
  type: LogType;
  time: string;
  message: string;
  stack?: StackLine[];
};

// Recreation of the Roblox developer console that appeared instead of the GUI
// when the script failed to load ("и ниче не загрузилось"). This shows the
// exact kind of error the old script threw when the Drawing API was missing.
const LOGS: LogEntry[] = [
  {
    id: 1,
    type: "Error",
    time: "18:42:07.113",
    message: 'Players.LocalPlayer.PlayerGui.ClaudewareLoader: attempt to index nil with \'new\' (Drawing)',
    stack: [
      { indent: 1, text: "Stack Begin" },
      { indent: 2, text: 'Script "Claudeware.lua", Line 877 - function makeDrawSet' },
      { indent: 2, text: 'Script "Claudeware.lua", Line 810 - function buildESP' },
      { indent: 2, text: 'Script "Claudeware.lua", Line 872 - function refreshESP' },
      { indent: 2, text: 'Script "Claudeware.lua", Line 1210' },
      { indent: 1, text: "Stack End" },
    ],
  },
  {
    id: 2,
    type: "Error",
    time: "18:42:07.114",
    message: "Requested module experienced an error while loading",
    stack: [
      { indent: 1, text: "Stack Begin" },
      { indent: 2, text: 'Script "Claudeware.lua", Line 1 - main chunk' },
      { indent: 1, text: "Stack End" },
    ],
  },
  {
    id: 3,
    type: "Warning",
    time: "18:42:07.110",
    message: "Drawing API not detected on this executor — falling back to Highlight ESP.",
  },
  {
    id: 4,
    type: "Information",
    time: "18:42:06.998",
    message: "Claudeware :: fetching loader from https://claudeware.dev/loader.lua",
  },
  {
    id: 5,
    type: "Output",
    time: "18:42:06.940",
    message: "Executor attached · injecting Claudeware v1.2.0",
  },
];

const FILTERS: LogType[] = ["Output", "Information", "Warning", "Error"];

export default function Console() {
  const [active, setActive] = useState<"Log" | "Memory">("Log");
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Record<LogType, boolean>>({
    Output: true,
    Information: true,
    Warning: true,
    Error: true,
  });

  const toggleFilter = (t: LogType) =>
    setFilters((f) => ({ ...f, [t]: !f[t] }));

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LOGS.filter((l) => filters[l.type]).filter((l) => {
      if (!q) return true;
      if (l.message.toLowerCase().includes(q)) return true;
      return (l.stack || []).some((s) => s.text.toLowerCase().includes(q));
    });
  }, [filters, query]);

  return (
    <section className="console-page container">
      <div className="console-page-head">
        <h1>Developer Console</h1>
        <p>
          This is the log overlay that opened instead of the menu — the old
          build crashed on the <code>Drawing</code> API. It now loads and falls
          back to Highlight ESP.{" "}
          <Link to="/download" className="console-inline-link">
            Grab the fixed script →
          </Link>
        </p>
      </div>

      <div className="devconsole" role="log" aria-label="Roblox developer console">
        {/* Top tab bar */}
        <div className="dc-tabs">
          <button
            className={`dc-tab ${active === "Log" ? "dc-tab-active" : ""}`}
            onClick={() => setActive("Log")}
          >
            Log
          </button>
          <button
            className={`dc-tab ${active === "Memory" ? "dc-tab-active" : ""}`}
            onClick={() => setActive("Memory")}
          >
            Memory
          </button>
        </div>

        {active === "Log" ? (
          <>
            {/* Filter bar */}
            <div className="dc-filterbar">
              <div className="dc-checks">
                {FILTERS.map((t) => (
                  <label key={t} className="dc-check">
                    <input
                      type="checkbox"
                      checked={filters[t]}
                      onChange={() => toggleFilter(t)}
                    />
                    <span className="dc-box" aria-hidden="true" />
                    <span className="dc-check-label">{t}</span>
                  </label>
                ))}
              </div>

              <div className="dc-search">
                <span className="dc-search-icon" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="10.5"
                      cy="10.5"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="15.5"
                      y1="15.5"
                      x2="21"
                      y2="21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search log"
                />
              </div>
            </div>

            {/* Log list */}
            <div className="dc-log">
              {visible.length === 0 ? (
                <div className="dc-empty">No log entries match the filters.</div>
              ) : (
                visible.map((entry) => (
                  <div
                    key={entry.id}
                    className={`dc-entry dc-${entry.type.toLowerCase()}`}
                  >
                    <div className="dc-entry-main">
                      <span className="dc-icon" aria-hidden="true">
                        {entry.type === "Error" ? (
                          <span className="dc-x">
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                              <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                              <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                          </span>
                        ) : entry.type === "Warning" ? (
                          <span className="dc-tri">!</span>
                        ) : (
                          <span className="dc-dot" />
                        )}
                      </span>
                      <span className="dc-time">{entry.time}</span>
                      <span className="dc-msg">{entry.message}</span>
                    </div>
                    {entry.stack && (
                      <div className="dc-stack">
                        {entry.stack.map((line, i) => (
                          <div
                            key={i}
                            className="dc-stack-line"
                            style={{ paddingLeft: `${line.indent * 22}px` }}
                          >
                            {line.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <div className="dc-memory">
            <div className="dc-mem-row">
              <span>PlaceMemory</span>
              <span>412.6 MB</span>
            </div>
            <div className="dc-mem-row">
              <span>CoreMemory</span>
              <span>188.3 MB</span>
            </div>
            <div className="dc-mem-row">
              <span>UntrackedMemory</span>
              <span>73.9 MB</span>
            </div>
            <div className="dc-mem-row dc-mem-total">
              <span>Total</span>
              <span>674.8 MB</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
