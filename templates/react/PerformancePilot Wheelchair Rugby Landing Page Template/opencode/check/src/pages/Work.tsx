import { Link } from "react-router-dom";
import SiteImage from "../components/SiteImage";

// Self-hosted photography lives in /public/images with Wikimedia Commons
// (CC BY-SA 4.0) originals as the fallback source.
const photos = {
  compete: {
    src: "/images/wheelchair-rugby-hero.jpg",
    fallback:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wheelchair_rugby_191020d1.jpg/1280px-Wheelchair_rugby_191020d1.jpg",
    alt: "Two wheelchair rugby athletes contest possession on an indoor court.",
  },
  develop: {
    src: "/images/wheelchair-rugby-preparation.jpg",
    fallback:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Wheelchair_rugby_191020d21.jpg/1280px-Wheelchair_rugby_191020d21.jpg",
    alt: "An athlete prepares a wheelchair rugby competition chair at the edge of the court.",
  },
  connect: {
    src: "/images/wheelchair-rugby-team.jpg",
    fallback:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wheelchair_rugby_191020c3.jpg/1280px-Wheelchair_rugby_191020c3.jpg",
    alt: "Wheelchair rugby athletes gather in a team huddle before entering the court.",
  },
};

const pillars = [
  {
    n: "01",
    title: "Compete",
    lede: "Public fixtures, tournaments, and the results the team is proud to publish.",
    copy:
      "The season is built around sanctioned competition. Every public match on the calendar is approved before it appears here, and results follow once they are cleared.",
    photo: photos.compete,
    link: { label: "See the schedule", to: "/schedule" },
  },
  {
    n: "02",
    title: "Develop",
    lede: "Chairs, classification, and the long work before the first whistle.",
    copy:
      "Rugby chairs are built and tuned for each athlete. Classification shapes roles on court. Behind every published story is a season of preparation that stays private.",
    photo: photos.develop,
    link: { label: "Read team stories", to: "/stories" },
  },
  {
    n: "03",
    title: "Connect",
    lede: "Volunteers, families, sponsors, and the supporters who travel with us.",
    copy:
      "Community support covers competition, travel, and equipment. It also covers the quieter work: rides to training, a hand on the chair, a crowd that knows the names.",
    photo: photos.connect,
    link: { label: "Support the team", to: "/donate" },
  },
];

export default function Work() {
  return (
    <>
      <section className="page-intro" aria-labelledby="work-title">
        <p className="site-eyebrow">Our work</p>
        <h1 id="work-title">What the season is made of.</h1>
        <p className="page-intro__lede">
          Three kinds of work keep PerformancePilot moving: competing in public, developing athletes and
          equipment, and connecting the community that makes both possible.
        </p>
      </section>

      <section className="site-section" aria-label="Pillars of the program">
        <ol className="work-list">
          {pillars.map((pillar) => (
            <li key={pillar.n} className="work-item">
              <figure className="site-figure work-item__figure">
                <SiteImage
                  src={pillar.photo.src}
                  fallbackSrc={pillar.photo.fallback}
                  alt={pillar.photo.alt}
                  sizes="(max-width: 960px) 100vw, 48vw"
                />
              </figure>
              <div className="work-item__content">
                <span className="work-item__n" aria-hidden="true">
                  {pillar.n}
                </span>
                <h2>{pillar.title}</h2>
                <p className="work-item__lede">{pillar.lede}</p>
                <p>{pillar.copy}</p>
                <Link className="work-item__link" to={pillar.link.to}>
                  {pillar.link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="site-section" aria-labelledby="work-boundary-title">
        <div className="support-panel">
          <div className="support-panel__content">
            <p className="site-eyebrow">Public by design</p>
            <h2 id="work-boundary-title">Everything here has been cleared for publication.</h2>
            <p>
              Athlete medical notes, attendance, private travel, and training operations live in the private
              PerformancePilot application and never appear on this site.
            </p>
            <div className="site-actions">
              <Link className="site-button" to="/about">
                About the program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
