import { Link } from "react-router-dom";
import { heroCopy, shorePhoto, type HeadingLevel } from "./heroAssets";
import useHeroReady from "./useHeroReady";

type HeroCinematicProps = {
  /** Use "h2" when the hero is embedded inside another page (concept gallery). */
  headingAs?: HeadingLevel;
  /** Unique id so aria-labelledby stays valid when several heroes are mounted. */
  id?: string;
  /** Lets the hero sit underneath a transparent overlay header. */
  underHeader?: boolean;
};

/**
 * Concept A - "Cinematic Shore"
 * Full-bleed photography that the copy emerges from. The silhouettes dissolve
 * into the navy canvas on the left while the mist carries the eye to the right.
 * Page-load timeline: Ken Burns settle, drifting mist, a single gold light
 * sweep, then the headline lines rise in sequence.
 */
export default function HeroCinematic({ headingAs = "h1", id = "hero-cinematic", underHeader = false }: HeroCinematicProps) {
  const { ready, imgRef, onLoad } = useHeroReady();
  const Heading = headingAs;
  const titleId = `${id}-title`;

  return (
    <section
      className={[
        "hero-cine",
        ready ? "is-ready" : "",
        underHeader ? "hero-cine--under-header" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={titleId}
    >
      <div className="hero-cine__media" aria-hidden="true">
        <img
          ref={imgRef}
          className="hero-cine__img"
          src={shorePhoto.src}
          srcSet={shorePhoto.srcSet}
          sizes="(max-width: 960px) 100vw, 72vw"
          width={shorePhoto.width}
          height={shorePhoto.height}
          alt=""
          decoding="async"
          loading="eager"
          onLoad={onLoad}
        />
        <span className="hero-cine__mist hero-cine__mist--a" />
        <span className="hero-cine__mist hero-cine__mist--b" />
        <span className="hero-cine__sweep" />
        <span className="hero-cine__scrim" />
        <span className="hero-cine__grain" />
      </div>

      <div className="hero-cine__content">
        <p className="hero-cine__eyebrow">
          <span className="hero-cine__rule" aria-hidden="true" />
          {heroCopy.brand}
        </p>
        <Heading id={titleId} className="hero-cine__title">
          <span className="hero-reveal">
            <span className="hero-reveal__line">No one</span>
          </span>
          <span className="hero-reveal">
            <span className="hero-reveal__line">rolls alone.</span>
          </span>
        </Heading>
        <p className="hero-cine__lede">
          A team on the court and a community off it. Follow the season, find the next match, and help keep every
          push moving forward.
        </p>
        <div className="hero-cine__actions">
          <Link className="site-button site-button--primary" to={heroCopy.primaryCta.to}>
            {heroCopy.primaryCta.label}
          </Link>
          <Link className="site-button site-button--ghost" to={heroCopy.secondaryCta.to}>
            {heroCopy.secondaryCta.label}
            <span className="site-button__arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>

        <ul className="hero-cine__meta" aria-label="Season at a glance">
          <li>
            <span className="hero-cine__meta-label">Season</span>
            <span className="hero-cine__meta-value">2026 campaign</span>
          </li>
          <li>
            <span className="hero-cine__meta-label">Next match</span>
            <span className="hero-cine__meta-value">Announced soon</span>
          </li>
          <li>
            <span className="hero-cine__meta-label">Supporters</span>
            <span className="hero-cine__meta-value">Open to all</span>
          </li>
        </ul>
      </div>

      <p className="hero-cine__caption">
        <span className="hero-cine__caption-dot" aria-hidden="true" />
        Dawn on the boardwalk. Every athlete starts somewhere.
      </p>

      <span className="sr-only">{shorePhoto.alt}</span>
    </section>
  );
}
