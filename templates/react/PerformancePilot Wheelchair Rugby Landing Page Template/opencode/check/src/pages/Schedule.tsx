import { Link } from "react-router-dom";
import SiteImage from "../components/SiteImage";

const photos = {
  hero: {
    src: "/images/wheelchair-rugby-hero.jpg",
    fallback:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wheelchair_rugby_191020d1.jpg/1280px-Wheelchair_rugby_191020d1.jpg",
    alt: "Two wheelchair rugby athletes contest possession on an indoor court.",
  },
};

const publicRules = [
  {
    title: "Games and events",
    copy: "Sanctioned matches and community events appear after they are approved for publication.",
  },
  {
    title: "Venue and time",
    copy: "Public listings include the published venue, date, and start time. Nothing more.",
  },
  {
    title: "What stays private",
    copy: "Practices, travel, RSVP notes, and team operations never appear on this schedule.",
  },
];

export default function Schedule() {
  return (
    <>
      <section className="page-intro" aria-labelledby="schedule-page-title">
        <p className="site-eyebrow">Schedule</p>
        <h1 id="schedule-page-title">Next match.</h1>
        <p className="page-intro__lede">
          Public games and events appear here after they are approved for publication.
        </p>
      </section>

      <section className="site-section" aria-labelledby="schedule-status-title">
        <div className="story-layout">
          <div>
            <div className="public-empty-state" role="status">
              <h2 id="schedule-status-title">The public schedule is being prepared.</h2>
              <p>
                Private practices, travel, RSVP notes, and team operations never appear in this public schedule.
              </p>
            </div>
            <div className="site-actions">
              <Link className="site-button site-button--primary" to="/donate">
                Support the team
              </Link>
              <Link className="site-button site-button--secondary" to="/stories">
                Read team stories
              </Link>
            </div>
          </div>
          <figure className="site-figure">
            <SiteImage
              src={photos.hero.src}
              fallbackSrc={photos.hero.fallback}
              alt={photos.hero.alt}
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </figure>
        </div>
      </section>

      <section className="site-section" aria-labelledby="schedule-rules-title">
        <div className="section-heading">
          <h2 id="schedule-rules-title">What this page shows.</h2>
          <p>A public calendar, not a team operations board.</p>
        </div>
        <ul className="impact-grid">
          {publicRules.map((rule) => (
            <li key={rule.title} className="impact-card">
              <h3>{rule.title}</h3>
              <p>{rule.copy}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
