import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ConceptNav, { type ConceptKey } from "../components/hero/ConceptNav";
import HeroCinematic from "../components/hero/HeroCinematic";
import HeroEditorial from "../components/hero/HeroEditorial";
import HeroMatchDay from "../components/hero/HeroMatchDay";

type Concept = {
  key: ConceptKey;
  letter: string;
  name: string;
  thesis: string;
  nav: string;
  motion: string;
  strengths: string[];
  risks: string[];
  recommended?: boolean;
};

const concepts: Concept[] = [
  {
    key: "cinematic",
    letter: "A",
    name: "Cinematic Shore",
    thesis:
      "Let the photograph carry the page. The silhouettes dissolve into the navy canvas and the copy rises out of the dark, so the brand and the story share one frame.",
    nav: "Transparent overlay header that floats on the image, then settles into solid navy on scroll. Gold reserved for the CTA and the active state.",
    motion:
      "Ken Burns settle (1.14 to 1.0), two drifting mist layers, one gold light sweep, then headline lines rise in sequence. About 3.5 seconds, then still.",
    strengths: [
      "Strongest emotional read of the three. The caregiver-and-athlete moment lands before a word is read.",
      "Image is used at its most honest crop; nothing is squeezed into a box.",
      "Header and hero are one composition, which is rare and feels premium.",
    ],
    risks: [
      "Relies on good photography for every future hero swap.",
      "Overlay header needs the scroll-state treatment to keep contrast on inner pages.",
    ],
    recommended: true,
  },
  {
    key: "editorial",
    letter: "B",
    name: "Editorial Masthead",
    thesis:
      "A magazine spread. Oversized type with a serif italic accent, a numbered index for wayfinding, and the portrait held in a framed plate with a gold offset.",
    nav: "Centered masthead with links split left and right, a hairline double rule, and a sub-bar for the support CTA. Quiet, typographic, confident.",
    motion:
      "Vertical clip-path wipe reveals the plate, then a slow 10 second drift. Index rows slide in with a stagger. The least showy of the three.",
    strengths: [
      "Best typography of the three. Reads as a cultural institution, not a template.",
      "Portrait photo is shown in its native 3:4 ratio with no cropping compromise.",
      "Index list doubles as secondary navigation for first-time visitors.",
    ],
    risks: [
      "Introduces a second typeface (Fraunces), which the design system would need to adopt.",
      "Lower energy; less obviously a contact sport.",
    ],
  },
  {
    key: "matchday",
    letter: "C",
    name: "Match Day",
    thesis:
      "Broadcast energy. A diagonal gold slash, condensed uppercase headline with an outlined second line, the photo in an angled panel, and a running ticker.",
    nav: "Solid navy bar with a 4px gold top stripe, uppercase tracked links, a live next-match chip, and a squared gold CTA.",
    motion:
      "Slash wipes across, the angled panel slides in from the right with a skew that resolves, outlined text draws in, ticker runs continuously (pauses on reduced motion).",
    strengths: [
      "Loudest, most obviously sport. Great for match-week campaigns.",
      "Ticker and scoreboard give the team a place to publish live context.",
    ],
    risks: [
      "The angled crop fights the portrait image; the caregiver moment gets cut.",
      "Continuous ticker is the most demanding on accessibility and attention.",
      "Can drift toward generic esports styling if the gold is overused.",
    ],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<ConceptKey>("cinematic");
  const [replay, setReplay] = useState(0);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const baseId = useId();
  const current = concepts.find((c) => c.key === active) ?? concepts[0];

  // Remounts the stage so the page-load timeline runs again, then brings it into view.
  const showConcept = (key: ConceptKey, scroll = false) => {
    setActive(key);
    setReplay((n) => n + 1);
    if (scroll) {
      stageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="page-intro page-intro--concepts" aria-labelledby="portfolio-title">
        <p className="site-eyebrow">Design review &middot; Navigation and hero</p>
        <h1 id="portfolio-title">Three directions for the homepage.</h1>
        <p className="page-intro__lede">
          Each concept keeps the navy-and-gold identity and the same photograph, then takes a substantially
          different stance on composition, type, and motion. Switch between them below, then read the
          recommendation.
        </p>
      </section>

      <section className="site-section concept-section" aria-labelledby="concept-stage-title">
        <h2 id="concept-stage-title" className="sr-only">
          Concept previews
        </h2>

        <div className="concept-tabs" role="tablist" aria-label="Homepage concepts">
          {concepts.map((c) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              id={`${baseId}-tab-${c.key}`}
              aria-selected={active === c.key}
              aria-controls={`${baseId}-panel-${c.key}`}
              tabIndex={active === c.key ? 0 : -1}
              className={active === c.key ? "concept-tab is-active" : "concept-tab"}
              onClick={() => setActive(c.key)}
              onKeyDown={(event) => {
                const order = concepts.map((x) => x.key);
                const i = order.indexOf(c.key);
                let next: ConceptKey | null = null;
                if (event.key === "ArrowRight") next = order[(i + 1) % order.length];
                if (event.key === "ArrowLeft") next = order[(i - 1 + order.length) % order.length];
                if (event.key === "Home") next = order[0];
                if (event.key === "End") next = order[order.length - 1];
                if (!next) return;
                event.preventDefault();
                setActive(next);
                document.getElementById(`${baseId}-tab-${next}`)?.focus();
              }}
            >
              <span className="concept-tab__letter">{c.letter}</span>
              <span className="concept-tab__name">{c.name}</span>
              {c.recommended && <span className="concept-tab__flag">Recommended</span>}
            </button>
          ))}
        </div>

        <div
          key={`${current.key}-${replay}`}
          ref={stageRef}
          role="tabpanel"
          id={`${baseId}-panel-${current.key}`}
          aria-labelledby={`${baseId}-tab-${current.key}`}
          className="concept-stage"
        >
          <div className="concept-stage__bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <em>performancepilot.example / concept {current.letter.toLowerCase()}</em>
          </div>
          <div className="concept-stage__frame">
            <ConceptNav concept={current.key} />
            {current.key === "cinematic" && <HeroCinematic headingAs="h2" id="concept-a" />}
            {current.key === "editorial" && <HeroEditorial headingAs="h2" id="concept-b" />}
            {current.key === "matchday" && <HeroMatchDay headingAs="h2" id="concept-c" />}
          </div>
        </div>

        <div className="concept-notes">
          <div className="concept-notes__col">
            <h3>Thesis</h3>
            <p>{current.thesis}</p>
          </div>
          <div className="concept-notes__col">
            <h3>Navigation</h3>
            <p>{current.nav}</p>
          </div>
          <div className="concept-notes__col">
            <h3>Load motion</h3>
            <p>{current.motion}</p>
          </div>
        </div>
      </section>

      <section className="site-section" aria-labelledby="compare-title">
        <div className="section-heading">
          <h2 id="compare-title">Side by side.</h2>
          <p>What each direction does well, and what it would cost the brand to commit to it.</p>
        </div>
        <div className="concept-grid">
          {concepts.map((c) => (
            <article key={c.key} className={c.recommended ? "concept-card is-recommended" : "concept-card"}>
              <header className="concept-card__head">
                <span className="concept-card__letter">{c.letter}</span>
                <div>
                  <h3>{c.name}</h3>
                  {c.recommended && <span className="concept-card__flag">Recommended</span>}
                </div>
              </header>
              <h4>Strengths</h4>
              <ul>
                {c.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <h4>Risks</h4>
              <ul className="concept-card__risks">
                {c.risks.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <button type="button" className="concept-card__preview" onClick={() => showConcept(c.key, true)}>
                Preview concept {c.letter}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="site-section" aria-labelledby="rec-title">
        <div className="concept-rec">
          <p className="site-eyebrow">Recommendation</p>
          <h2 id="rec-title">Commit to Concept A, Cinematic Shore.</h2>
          <p>
            It is the only direction where the photograph, the identity, and the message share one frame. The
            navy canvas is literally the shadow in the image, the gold is the light on the water, and the
            headline reads as a promise rather than a slogan. Motion is a single, short cinematic settle, which
            is right for a public site with a MOTION_INTENSITY of five: felt once, then out of the way.
          </p>
          <p>
            Borrow one idea from each runner-up: the numbered index from Concept B becomes a quiet
            start-here strip on the homepage, and the live next-match chip from Concept C moves into the
            header once the schedule is published.
          </p>
          <div className="site-actions">
            <Link className="site-button site-button--primary" to="/">
              See it live on the homepage
            </Link>
            <button
              type="button"
              className="site-button site-button--ghost"
              onClick={() => showConcept("cinematic", true)}
            >
              Replay the load animation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
