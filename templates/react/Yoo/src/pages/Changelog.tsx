const __auraToastCompatDispatch = (..._args: unknown[]) => undefined;
const __auraToastCompatApi = Object.assign(__auraToastCompatDispatch, {
  toast: __auraToastCompatDispatch,
  success: __auraToastCompatDispatch,
  error: __auraToastCompatDispatch,
  info: __auraToastCompatDispatch,
  warning: __auraToastCompatDispatch,
  dismiss: () => undefined,
});
const toast = __auraToastCompatApi;

const RELEASES = [
  {
    version: "1.2.0",
    date: "Latest",
    tone: "current",
    title: "Full restore + big feature expansion",
    notes: [
      "Restored every feature that was previously removed — nothing was torn out.",
      "Rebuilt the GUI into tabs: Combat · Visuals · Movement · Player, each scrollable.",
      "Added Fly, WalkSpeed, JumpPower, Spinbot, Silent Aim, Aim Circle, ESP Distance, NoFog, God Mode, Anti-Fling, Anti-AFK and Reset.",
      "Added sliders for FOV, aim smoothing, walk speed, jump power, fly speed and spin speed.",
      "Every loop and BodyMover disconnects cleanly on toggle-off, no leaked connections.",
    ],
  },
  {
    version: "1.1.0",
    date: "Earlier",
    tone: "past",
    title: "Bug fixes & small polish",
    notes: [
      "Restored the original Claude Code style hub — every feature kept intact.",
      "Fixed the truncated Notify function and its stacking notification holder.",
      "Cleaned up leftover ESP / RunService connections so nothing stays running after toggle-off.",
      "RightShift now smoothly hides and re-centers the panel.",
    ],
  },
  {
    version: "1.6.2",
    date: "Earlier",
    tone: "past",
    title: "Ping meter polish",
    notes: [
      "Added colour-graded ping quality from Godly to Rough.",
      "Reduced ping poll interval for a more responsive readout.",
      "Fixed a rare nil error when network stats were unavailable.",
    ],
  },
  {
    version: "1.5.0",
    date: "Earlier",
    tone: "past",
    title: "Notifications & X-Ray",
    notes: [
      "Introduced stacked, tweened toast notifications with an accent bar.",
      "Added X-Ray with translucent world geometry and crisp players.",
      "Fullbright now restores original lighting cleanly when disabled.",
    ],
  },
];

export default function Changelog() {
  return (
    <>
      <section className="page-head container">
        <span className="pill">
          <span className="pill-dot" /> Release history
        </span>
        <h1>What changed, and why it matters.</h1>
        <p>
          Every release focuses on making the suite calmer and more reliable —
          fewer surprises, cleaner toggles, better feel.
        </p>
      </section>

      <section className="section container">
        <div className="timeline">
          {RELEASES.map((r) => (
            <article
              className={`release ${r.tone === "current" ? "release-current" : ""}`}
              key={r.version}
            >
              <div className="release-marker" aria-hidden="true">
                <span className="release-dot" />
              </div>
              <div className="release-body">
                <div className="release-head">
                  <h3>v{r.version}</h3>
                  <span className="release-date">{r.date}</span>
                </div>
                <p className="release-title">{r.title}</p>
                <ul>
                  {r.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
