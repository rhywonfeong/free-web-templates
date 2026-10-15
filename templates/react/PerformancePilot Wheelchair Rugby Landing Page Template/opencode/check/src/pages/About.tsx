import { Link } from "react-router-dom";
import SiteImage from "../components/SiteImage";

const photos = {
  preparation: {
    src: "/images/wheelchair-rugby-preparation.jpg",
    fallback:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Wheelchair_rugby_191020d21.jpg/1280px-Wheelchair_rugby_191020d21.jpg",
    alt: "An athlete prepares a wheelchair rugby competition chair at the edge of the court.",
  },
};

const pillars = [
  {
    title: "Speed",
    copy: "Rugby chairs, sharp lines, and a court that rewards athletes who read the play early.",
  },
  {
    title: "Strategy",
    copy: "Classifications, roles, and a game plan built for every public match on the calendar.",
  },
  {
    title: "Contact",
    copy: "The sport is physical. The public site stays respectful of the people who play it.",
  },
  {
    title: "Community",
    copy: "Volunteers, sponsors, and supporters who keep competition, travel, and equipment moving.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-intro" aria-labelledby="about-title">
        <p className="site-eyebrow">About</p>
        <h1 id="about-title">Competition, community, and opportunity.</h1>
        <p className="page-intro__lede">
          PerformancePilot Wheelchair Rugby is the public home of the team: stories, the published schedule,
          community support, and the people who make play possible.
        </p>
      </section>

      <section className="site-section" aria-labelledby="about-mission-title">
        <div className="story-layout">
          <figure className="site-figure">
            <SiteImage
              src={photos.preparation.src}
              fallbackSrc={photos.preparation.fallback}
              alt={photos.preparation.alt}
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </figure>
          <div className="support-feature__content">
            <h2 id="about-mission-title">Speed. Strategy. Contact.</h2>
            <p>
              This site publishes only what the team has cleared. Athlete medical notes, attendance, private
              travel, and training operations stay protected.
            </p>
            <div className="site-actions">
              <Link className="site-button site-button--primary" to="/schedule">
                Explore the season
              </Link>
              <Link className="site-button site-button--secondary" to="/contact">
                Contact the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" aria-labelledby="about-pillars-title">
        <div className="section-heading">
          <h2 id="about-pillars-title">How the public site works.</h2>
          <p>Four things visitors can count on.</p>
        </div>
        <ul className="impact-grid">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="impact-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
