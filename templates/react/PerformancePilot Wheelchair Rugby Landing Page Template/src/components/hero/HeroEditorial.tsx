import { Link } from "react-router-dom";
import { heroCopy, shorePhoto, type HeadingLevel } from "./heroAssets";
import useHeroReady from "./useHeroReady";

type HeroEditorialProps = {
  headingAs?: HeadingLevel;
  id?: string;
};

const index = [
  { n: "01", label: "Stories", note: "Published team news", to: "/stories" },
  { n: "02", label: "Schedule", note: "Public fixtures", to: "/schedule" },
  { n: "03", label: "Support", note: "Keep the season moving", to: "/donate" },
];

/**
 * Concept B - "Editorial Masthead"
 * A magazine spread: oversized typography on the left, the portrait photograph
 * held in a tall framed plate on the right with a gold offset border. The
 * image reveals through a vertical clip-path wipe and settles with a slow
 * drift; the index list types in line by line.
 */
export default function HeroEditorial({ headingAs = "h1", id = "hero-editorial" }: HeroEditorialProps) {
  const { ready, imgRef, onLoad } = useHeroReady();
  const Heading = headingAs;
  const titleId = `${id}-title`;

  return (
    <section className={ready ? "hero-edit is-ready" : "hero-edit"} aria-labelledby={titleId}>
      <div className="hero-edit__grid">
        <div className="hero-edit__copy">
          <p className="hero-edit__kicker">
            <span>Vol. 26</span>
            <span aria-hidden="true">&middot;</span>
            <span>{heroCopy.brand}</span>
          </p>

          <Heading id={titleId} className="hero-edit__title">
            <span className="hero-reveal">
              <span className="hero-reveal__line">The season,</span>
            </span>
            <span className="hero-reveal">
              <span className="hero-reveal__line">
                in <em>full contact.</em>
              </span>
            </span>
          </Heading>

          <p className="hero-edit__lede">
            Speed, strategy, and the people around the chair. The public home of PerformancePilot Wheelchair
            Rugby: stories, the published schedule, and the community that carries it.
          </p>

          <div className="hero-edit__actions">
            <Link className="site-button site-button--primary" to={heroCopy.primaryCta.to}>
              {heroCopy.primaryCta.label}
            </Link>
            <Link className="hero-edit__textlink" to={heroCopy.secondaryCta.to}>
              {heroCopy.secondaryCta.label}
            </Link>
          </div>

          <ol className="hero-edit__index" aria-label="Start here">
            {index.map((item) => (
              <li key={item.n}>
                <Link to={item.to}>
                  <span className="hero-edit__index-n">{item.n}</span>
                  <span className="hero-edit__index-label">{item.label}</span>
                  <span className="hero-edit__index-note">{item.note}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <figure className="hero-edit__plate">
          <span className="hero-edit__plate-frame" aria-hidden="true" />
          <div className="hero-edit__plate-mask">
            <img
              ref={imgRef}
              className="hero-edit__img"
              src={shorePhoto.src}
              srcSet={shorePhoto.srcSet}
              sizes="(max-width: 960px) 100vw, 44vw"
              width={shorePhoto.width}
              height={shorePhoto.height}
              alt={shorePhoto.alt}
              decoding="async"
              loading="eager"
              onLoad={onLoad}
            />
            <span className="hero-edit__plate-glow" aria-hidden="true" />
          </div>
          <figcaption className="hero-edit__caption">
            <span className="hero-edit__caption-n">Fig. 1</span>
            Dawn, boardwalk. Caregiver and athlete before the day begins.
          </figcaption>
        </figure>
      </div>

      <div className="hero-edit__rule" aria-hidden="true">
        <span>Public site</span>
        <span>Navy &amp; gold</span>
        <span>Est. on the court</span>
      </div>
    </section>
  );
}
