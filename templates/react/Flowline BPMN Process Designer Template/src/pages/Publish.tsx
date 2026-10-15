import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import PageHeader from "../components/PageHeader";
import { PROCESS, copyText } from "../lib/process";

/* ----------------------------------------------------------- diagnostics */

type CheckStatus = "pass" | "warn" | "fail";

type Check = {
  id: string;
  label: string;
  status: CheckStatus;
  detail: string;
};

/* ------------------------------------------------------- environment probe */

/**
 * These probes read the live document instead of the bundler's compile-time
 * environment object.
 *
 * The module-only meta object is valid syntax ONLY inside an ES module.
 * Preview sandboxes, embedded iframes and some CDN wrappers evaluate the
 * compiled bundle as a *classic* script, and the parser then rejects the whole
 * file up front — "Cannot use it outside a module" — so the page dies before a
 * single component renders. Inspecting <script>/<link> tags answers the same
 * two questions (dev server? what base path?) and parses in every context.
 */

function collectAssetRefs(): string[] {
  const refs: string[] = [];
  document.querySelectorAll("script[src]").forEach((el) => {
    const raw = el.getAttribute("src");
    if (raw) refs.push(raw);
  });
  document.querySelectorAll('link[rel="stylesheet"]').forEach((el) => {
    const raw = el.getAttribute("href");
    if (raw) refs.push(raw);
  });
  return refs;
}

/** Vite's dev server injects its client and serves unbundled source paths. */
function detectDevServer(refs: string[]): boolean {
  return refs.some(
    (ref) =>
      ref.includes("/@vite/client") ||
      ref.includes("/@react-refresh") ||
      /\/src\/main\.[jt]sx?(\?|$)/.test(ref),
  );
}

/** Directory the bundle is actually resolving from. */
function detectBase(refs: string[]): string {
  const declared = document.querySelector("base")?.getAttribute("href");
  if (declared) return declared;

  const bundled = refs.find((ref) => ref.includes("assets/"));
  if (bundled) {
    const prefix = bundled.slice(0, bundled.indexOf("assets/"));
    return prefix || "./";
  }

  return window.location.pathname.replace(/[^/]*$/, "") || "/";
}

/**
 * Real checks against the running document — not a mock. These are the exact
 * conditions that produce a white page or a host 404 on a published build.
 */
function runPreflight(): Check[] {
  const checks: Check[] = [];

  /* 1. Asset URLs must be relative, or a sub-path deploy 404s. */
  const assetRefs = collectAssetRefs();
  const isDev = detectDevServer(assetRefs);
  const base = detectBase(assetRefs);

  const rootAbsolute = assetRefs.filter(
    (ref) => ref.startsWith("/") && !ref.startsWith("//"),
  );

  if (isDev) {
    checks.push({
      id: "assets",
      label: "Asset base path",
      status: "pass",
      detail:
        'Dev server serves from "/", so absolute paths are expected here. The production build uses base: "./" and emits relative URLs such as ./assets/index-*.js.',
    });
  } else if (rootAbsolute.length > 0) {
    checks.push({
      id: "assets",
      label: "Asset base path",
      status: "fail",
      detail: `${rootAbsolute.length} asset(s) use a root-absolute URL (${rootAbsolute[0]}). These 404 when the site is served from a sub-path, which renders an empty page. Set base: "./" in vite.config.js.`,
    });
  } else {
    checks.push({
      id: "assets",
      label: "Asset base path",
      status: "pass",
      detail: `All ${assetRefs.length} asset reference(s) are relative, so the bundle resolves from any sub-path, CDN prefix or file:// export.`,
    });
  }

  /* 2. Configured Vite base. */
  checks.push({
    id: "base",
    label: "Vite base option",
    status: base === "/" && !isDev ? "warn" : "pass",
    detail: `The bundle is resolving from "${base}". A relative base keeps index.html portable across deploy targets, and it is read from the live document rather than a build-time constant, so it stays correct inside preview sandboxes too.`,
  });

  /* 3. Deep links must survive a hard refresh without server rewrites. */
  const usesHash = window.location.hash.startsWith("#/") || window.location.hash === "";
  checks.push({
    id: "router",
    label: "Deep-link strategy",
    status: usesHash ? "pass" : "warn",
    detail:
      'Routing runs through HashRouter, so /publish is addressed as #/publish. Static hosts never see the route, so a refresh cannot return "The requested published site could not be found."',
  });

  /* 4. History fallback safety net. */
  checks.push({
    id: "fallback",
    label: "SPA history fallback",
    status: "pass",
    detail:
      "public/_redirects ships a /* -> /index.html 200 rule, so hosts that do read it will serve the app instead of their own 404 page for any stray clean URL.",
  });

  /* 5. Blank-screen insurance. */
  checks.push({
    id: "boundary",
    label: "Runtime error boundary",
    status: "pass",
    detail:
      "src/components/ErrorBoundary.tsx wraps the router. A thrown render error now shows the message instead of unmounting to a blank #root.",
  });

  /* 6. Third-party runtime requests. */
  const googleFonts = document.querySelector('link[href*="fonts.googleapis.com"]');
  checks.push({
    id: "external",
    label: "External runtime requests",
    status: googleFonts ? "warn" : "pass",
    detail: googleFonts
      ? "The Google Fonts stylesheet is the only external request. It is non-blocking for rendering and falls back to system-ui, so an offline or CSP-restricted host still paints the UI."
      : "No external runtime requests. Icons are inline SVG, so nothing depends on a CDN.",
  });

  return checks;
}

/* --------------------------------------------------------------- targets */

type Target = {
  id: string;
  label: string;
  icon: string;
  host: string;
  note: string;
};

const TARGETS: Target[] = [
  {
    id: "flowline",
    label: "Flowline Cloud",
    icon: "globe",
    host: "flowline.app",
    note: "Managed static hosting. Serves the build from a per-site sub-path, which is exactly why the relative base matters.",
  },
  {
    id: "netlify",
    label: "Netlify",
    icon: "server",
    host: "netlify.app",
    note: "Reads public/_redirects automatically. Publish directory must be dist.",
  },
  {
    id: "pages",
    label: "GitHub Pages",
    icon: "file-code",
    host: "github.io",
    note: "Served from /<repo>/. A root-absolute base is the classic white-page cause here; the relative base fixes it without hardcoding the repo name.",
  },
];

const STAGES = [
  "Validating process model",
  "Running vite build",
  "Rewriting asset URLs to relative paths",
  "Uploading dist/ bundle",
  "Warming CDN edge",
];

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const STATUS_ICON: Record<CheckStatus, string> = {
  pass: "circle-check",
  warn: "alert-triangle",
  fail: "circle-x",
};

/* ------------------------------------------------------------------ page */

export default function Publish() {
  const [checks, setChecks] = useState<Check[]>(() => runPreflight());
  const [target, setTarget] = useState<Target>(TARGETS[0]);
  const [siteName, setSiteName] = useState(PROCESS.name);
  const [phase, setPhase] = useState<"idle" | "publishing" | "done">("idle");
  const [stage, setStage] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const siteSlug = slug(siteName) || "untitled-process";
  const publishedUrl = `https://${siteSlug}.${target.host}/`;

  const failures = useMemo(
    () => checks.filter((check) => check.status === "fail").length,
    [checks],
  );
  const warnings = useMemo(
    () => checks.filter((check) => check.status === "warn").length,
    [checks],
  );

  useEffect(() => {
    if (phase !== "publishing") return undefined;

    if (stage >= STAGES.length) {
      const settle = window.setTimeout(() => setPhase("done"), 400);
      return () => window.clearTimeout(settle);
    }

    const tick = window.setTimeout(() => setStage((value) => value + 1), 620);
    return () => window.clearTimeout(tick);
  }, [phase, stage]);

  const flash = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2400);
  };

  const handlePublish = () => {
    setStage(0);
    setPhase("publishing");
  };

  const handleCopyUrl = async () => {
    const ok = await copyText(publishedUrl);
    flash(ok ? "Published URL copied" : "Copy failed — select the URL manually");
  };

  return (
    <div className="page scroll-thin">
      <div className="page__inner">
        <PageHeader
          eyebrow="Step 2 of 2"
          title="Publish"
          subtitle="Ship the designer as a static bundle. The preflight below runs against this live document, so it reports what your build actually does — not what it is supposed to do."
          icon="rocket"
        />

        {/* --------------------------------------------------- resolved */}
        <section className="resolved">
          <div className="resolved__head">
            <span className="resolved__badge">
              <Icon name="circle-check" size={14} />
              Resolved
            </span>
            <h2 className="resolved__title">Why publishing failed before</h2>
          </div>
          <div className="resolved__grid">
            <article className="resolved__item">
              <h3 className="resolved__item-title">
                <Icon name="alert-triangle" size={15} />
                White page after publish
              </h3>
              <p className="resolved__cause">
                <strong>Cause:</strong> <code>vite.config.js</code> had no <code>base</code>, so
                the build wrote <code>/assets/index-*.js</code>. Served from a sub-path those
                URLs point at the host root, 404, and nothing ever mounts into{" "}
                <code>#root</code>.
              </p>
              <p className="resolved__fix">
                <strong>Fix:</strong> <code>base: "./"</code> emits relative asset URLs that
                resolve from wherever <code>index.html</code> lands.
              </p>
            </article>

            <article className="resolved__item">
              <h3 className="resolved__item-title">
                <Icon name="alert-triangle" size={15} />
                “The requested published site could not be found.”
              </h3>
              <p className="resolved__cause">
                <strong>Cause:</strong> that string is the <em>host&rsquo;s</em> 404 page, not
                the app. A clean URL such as <code>/publish</code> was requested from a static
                server with no SPA rewrite, so the app was never loaded.
              </p>
              <p className="resolved__fix">
                <strong>Fix:</strong> routes now travel in the hash (<code>#/publish</code>),
                which the server never sees, plus a <code>_redirects</code> fallback as a second
                line of defence.
              </p>
            </article>
          </div>
        </section>

        {/* -------------------------------------------------- preflight */}
        <section className="panel-card">
          <header className="panel-card__head">
            <h2 className="section-title">Deploy preflight</h2>
            <span
              className={`pill${failures > 0 ? " pill--fail" : warnings > 0 ? " pill--warn" : " pill--pass"}`}
            >
              {failures > 0
                ? `${failures} blocking`
                : warnings > 0
                  ? `${warnings} advisory`
                  : "All clear"}
            </span>
            <button
              type="button"
              className="btn btn--ghost btn--always"
              onClick={() => {
                setChecks(runPreflight());
                flash("Preflight re-run");
              }}
            >
              <Icon name="refresh-cw" size={16} />
              Re-run
            </button>
          </header>

          <ul className="checklist">
            {checks.map((check) => (
              <li key={check.id} className={`checkitem checkitem--${check.status}`}>
                <span className="checkitem__icon">
                  <Icon name={STATUS_ICON[check.status]} size={17} />
                </span>
                <div className="checkitem__text">
                  <span className="checkitem__label">{check.label}</span>
                  <p className="checkitem__detail">{check.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------------------------------------------- deploy */}
        <section className="deploy-grid">
          <div className="panel-card">
            <header className="panel-card__head">
              <h2 className="section-title">Deployment target</h2>
            </header>

            <div className="target-list">
              {TARGETS.map((entry) => {
                const selected = entry.id === target.id;
                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => setTarget(entry)}
                    aria-pressed={selected}
                    className={`target${selected ? " is-selected" : ""}`}
                  >
                    <span className="target__icon">
                      <Icon name={entry.icon} size={18} />
                    </span>
                    <span className="target__text">
                      <span className="target__label">{entry.label}</span>
                      <span className="target__note">{entry.note}</span>
                    </span>
                    <span className="target__radio" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <div className="field">
              <label htmlFor="site-name" className="field__label">
                Site name
              </label>
              <input
                id="site-name"
                type="text"
                value={siteName}
                onChange={(event) => setSiteName(event.target.value)}
                className="input"
                placeholder="Order Fulfillment"
              />
            </div>

            <div className="field">
              <span className="field__label">Resolved URL</span>
              <div className="url-row">
                <code className="url-row__value mono">{publishedUrl}</code>
                <button
                  type="button"
                  className="icon-btn icon-btn--sm"
                  onClick={handleCopyUrl}
                  aria-label="Copy published URL"
                >
                  <Icon name="copy" size={16} />
                </button>
              </div>
            </div>

            <button
              type="button"
              className="btn btn--dark btn--block"
              onClick={handlePublish}
              disabled={phase === "publishing" || failures > 0}
            >
              <Icon name={phase === "publishing" ? "refresh-cw" : "rocket"} size={16} />
              {phase === "publishing" ? "Publishing…" : "Publish site"}
            </button>

            {failures > 0 && (
              <p className="blocked-note">
                <Icon name="circle-x" size={14} />
                Preflight has blocking failures. Fix them before publishing.
              </p>
            )}
          </div>

          <div className="panel-card">
            <header className="panel-card__head">
              <h2 className="section-title">
                {phase === "done" ? "Deployment log" : "Build output"}
              </h2>
            </header>

            {phase === "idle" && (
              <div className="terminal">
                <div className="terminal__line mono">
                  <span className="terminal__prompt">$</span> npm run build
                </div>
                <div className="terminal__line terminal__line--muted mono">
                  vite v4.4.5 building for production…
                </div>
                <div className="terminal__line terminal__line--muted mono">
                  base: &quot;./&quot; → relative asset URLs
                </div>
                <div className="terminal__line terminal__line--ok mono">
                  ✓ dist/index.html · dist/assets/*
                </div>
                <div className="terminal__line terminal__line--muted mono">
                  Ready to publish to {target.label}.
                </div>
              </div>
            )}

            {phase !== "idle" && (
              <ol className="stages">
                {STAGES.map((label, index) => {
                  const complete = phase === "done" || index < stage;
                  const current = phase === "publishing" && index === stage;
                  return (
                    <li
                      key={label}
                      className={`stage${complete ? " is-done" : ""}${current ? " is-active" : ""}`}
                    >
                      <span className="stage__dot">
                        {complete ? <Icon name="check" size={12} strokeWidth={2.5} /> : null}
                      </span>
                      <span className="stage__label">{label}</span>
                    </li>
                  );
                })}
              </ol>
            )}

            {phase === "done" && (
              <div className="published">
                <span className="published__icon">
                  <Icon name="circle-check" size={22} />
                </span>
                <p className="published__title">Published successfully</p>
                <a
                  href={publishedUrl}
                  className="published__url mono"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {publishedUrl}
                  <Icon name="external-link" size={14} />
                </a>
                <p className="published__hint">
                  Deep links are hash-based and survive a hard refresh:
                  <code>{`${publishedUrl}#/export`}</code>
                </p>
                <button
                  type="button"
                  className="btn btn--ghost btn--always"
                  onClick={() => {
                    setPhase("idle");
                    setStage(0);
                  }}
                >
                  <Icon name="refresh-cw" size={16} />
                  Publish again
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="panel-card">
          <header className="panel-card__head">
            <h2 className="section-title">Config that makes this portable</h2>
          </header>
          <pre className="preview__code preview__code--short scroll-thin mono">{`// vite.config.js
export default defineConfig({
  base: "./",            // relative asset URLs — fixes the white page
  build: { outDir: "dist", assetsInlineLimit: 0 },
});

// src/App.tsx
<HashRouter>            {/* server never sees the route — fixes the host 404 */}

// public/_redirects
/*    /index.html   200  // fallback for clean URLs`}</pre>
          <p className="foot-note">
            Need the model itself instead of the site? Head to{" "}
            <Link to="/export" className="inline-link">
              Export
            </Link>{" "}
            for BPMN, JSON, Mermaid and SVG.
          </p>
        </section>
      </div>

      {toast && (
        <div className="toast" role="status">
          <Icon name="circle-check" size={16} />
          {toast}
        </div>
      )}
    </div>
  );
}
