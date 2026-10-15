import { Link } from "react-router-dom";
import SiteImage from "../components/SiteImage";

const photos = {
  team: {
    src: "/images/wheelchair-rugby-team.jpg",
    fallback:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wheelchair_rugby_191020c3.jpg/1280px-Wheelchair_rugby_191020c3.jpg",
    alt: "Wheelchair rugby athletes gather in a team huddle before entering the court.",
  },
};

const storyNotes = [
  {
    title: "Match reports",
    copy: "Published recaps of public games, written after results are cleared for the public site.",
  },
  {
    title: "Athlete features",
    copy: "Stories athletes choose to share. Private medical, travel, and training notes stay off this page.",
  },
  {
    title: "Community notes",
    copy: "Volunteer weekends, sponsor nights, and the people who keep the season moving.",
  },
];

export default function Stories() {
  return (
    <>
      <section className="page-intro" aria-labelledby="stories-page-title">
        <p className="site-eyebrow">Stories</p>
        <h1 id="stories-page-title">The season has a story.</h1>
        <p className="page-intro__lede">
          Published team news lives here. Private athlete, attendance, travel, and training details stay protected.
        </p>
      </section>

      <section className="site-section" aria-labelledby="stories-catalog-title">
        <div className="story-layout">
          <figure className="site-figure">
            <SiteImage
              src={photos.team.src}
              fallbackSrc={photos.team.fallback}
              alt={photos.team.alt}
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </figure>
          <div>
            <div className="section-heading">
              <h2 id="stories-catalog-title">What gets published.</h2>
              <p>Only stories cleared for the public site appear in this feed.</p>
            </div>
            <ul className="impact-grid">
              {storyNotes.map((note) => (
                <li key={note.title} className="impact-card">
                  <h3>{note.title}</h3>
                  <p>{note.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="site-section" aria-labelledby="stories-status-title">
        <div className="public-empty-state" role="status">
          <h2 id="stories-status-title">Team stories are being prepared.</h2>
          <p>Published stories are temporarily unavailable. Please check again soon.</p>
        </div>
        <div className="site-actions">
          <Link className="site-button site-button--primary" to="/schedule">
            See the public schedule
          </Link>
          <Link className="site-button site-button--secondary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
