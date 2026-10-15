import { Link } from "react-router-dom";
import { heroCopy, shorePhoto, type HeadingLevel } from "./heroAssets";
import useHeroReady from "./useHeroReady";

type HeroMatchDayProps = {
  headingAs?: HeadingLevel;
  id?: string;
};

const ticker = [
  "Season 2026",
  "Public fixtures published after approval",
  "Stories from the court",
  "Support travel, chairs, and competition",
  "Community open to all",
];

/**
 * Concept C - "Match Day"
 * Broadcast energy: a diagonal gold slash cuts the canvas, the headline is
 * stacked in condensed uppercase with an outlined second line, and the
 * photograph rides inside an angled panel that slides in on load. A fixtures
 * ticker runs along the base.
 */
export default function HeroMatchDay({ headingAs = "h1", id = "hero-matchday" }: HeroMatchDayProps) {
  const { ready, imgRef, onLoad } = useHeroReady();
  const Heading = headingAs;
  const titleId = `${id}-title`;

  return (
    <section className={ready ? "hero-match is-ready" : "hero-match"} aria-labelledby={titleId}>
      <span className="hero-match__slash" aria-hidden="true" />

      <div className="hero-match__inner">
        <div className="hero-match__copy">
          <p className="hero-match__badge">
            <span className="hero-match__badge-live" aria-hidden="true" />
            Match day. Every day.
          </p>

          <Heading id={titleId} className="hero-match__title">
            <span className="hero-reveal">
              <span className="hero-reveal__line">All in.</span>
            </span>
            <span className="hero-reveal">
              <span className="hero-reveal__line hero-match__outline">All season.</span>
            </span>
          </Heading>

          <p className="hero-match__lede">
            PerformancePilot Wheelchair Rugby plays hard and shows up for each other. Follow the squad, find the
            next public match, and back the season.
          </p>

          <div className="hero-match__actions">
            <Link className="site-button site-button--primary site-button--square" to={heroCopy.primaryCta.to}>
              {heroCopy.primaryCta.label}
            </Link>
            <Link className="site-button site-button--ghost site-button--square" to={heroCopy.secondaryCta.to}>
              {heroCopy.secondaryCta.label}
            </Link>
          </div>

          <dl className="hero-match__board" aria-label="Scoreboard">
            <div>
              <dt>Speed</dt>
              <dd>Rugby chairs, sharp lines</dd>
            </div>
            <div>
              <dt>Strategy</dt>
              <dd>Roles and classifications</dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>Physical, respectful, loud</dd>
            </div>
          </dl>
        </div>

        <figure className="hero-match__panel">
          <div className="hero-match__panel-clip">
            <img
              ref={imgRef}
              className="hero-match__img"
              src={shorePhoto.src}
              srcSet={shorePhoto.srcSet}
              sizes="(max-width: 960px) 100vw, 52vw"
              width={shorePhoto.width}
              height={shorePhoto.height}
              alt={shorePhoto.alt}
              decoding="async"
              loading="eager"
              onLoad={onLoad}
            />
            <span className="hero-match__panel-tint" aria-hidden="true" />
          </div>
          <span className="hero-match__panel-edge" aria-hidden="true" />
          <figcaption className="hero-match__panel-tag">
            <strong>Pre-game</strong>
            <span>Boardwalk, dawn</span>
          </figcaption>
        </figure>
      </div>

      <div className="hero-match__ticker" aria-hidden="true">
        <div className="hero-match__ticker-track">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={`${item}-${i}`}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
