import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import SiteImage from "../components/SiteImage";
import HeroCinematic from "../components/hero/HeroCinematic";

// The team huddle photo is served from the shared asset library. Remaining
// self-hosted photography lives in /public/images; the remote sources are the
// original Wikimedia Commons files (CC BY-SA 4.0) and are used only as a
// fallback if the primary asset cannot be served.
const photos = {
  team: {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b001d7fb-306a-4d9c-ad41-e815a28f1596_1600w.png",
    fallback:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wheelchair_rugby_191020c3.jpg/1280px-Wheelchair_rugby_191020c3.jpg",
    alt: "Wheelchair rugby athletes gather in a team huddle before entering the court.",
    caption: {
      eyebrow: "Match day",
      title: "Huddle before the whistle",
      location: "Courtside",
    },
  },
  preparation: {
    src: "/images/wheelchair-rugby-preparation.jpg",
    fallback:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Wheelchair_rugby_191020d21.jpg/1280px-Wheelchair_rugby_191020d21.jpg",
    alt: "An athlete prepares a wheelchair rugby competition chair at the edge of the court.",
  },
};

export default function Home() {
  return (
    <>
      {/* Recommended direction: Concept A "Cinematic Shore". Compare all three at /portfolio. */}
      <HeroCinematic headingAs="h1" id="home-hero" underHeader />

      <section className="mission-band" aria-labelledby="mission-title">
        <div className="mission-band__inner">
          <h2 id="mission-title">Speed. Strategy. Contact.</h2>
          <p>
            PerformancePilot brings the public side of the season together: team stories, competition updates,
            community support, and the people who make play possible.
          </p>
        </div>
      </section>

      <section className="site-section" id="stories" aria-labelledby="stories-title">
        <div className="section-heading">
          <h2 id="stories-title">The season has a story.</h2>
          <p>
            Published team news lives here. Private athlete, attendance, travel, and training details stay
            protected.
          </p>
        </div>
        <div className="public-empty-state" role="status">
          <h3>Team stories are being prepared.</h3>
          <p>Published stories are temporarily unavailable. Please check again soon.</p>
        </div>
      </section>

      <section className="site-section schedule-layout" id="schedule" aria-labelledby="schedule-title">
        <div className="section-heading">
          <h2 id="schedule-title">Next match.</h2>
          <p>Public games and events appear here after they are approved for publication.</p>
        </div>
        <div>
          <div className="public-empty-state" role="status">
            <h3>The public schedule is being prepared.</h3>
            <p>
              Private practices, travel, RSVP notes, and team operations never appear in this public schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section" aria-labelledby="support-title">
        <div className="support-feature">
          <figure className="site-figure site-figure--captioned">
            <SiteImage
              src={photos.team.src}
              fallbackSrc={photos.team.fallback}
              alt={photos.team.alt}
              sizes="(max-width: 768px) 100vw, 54vw"
            />
            <figcaption className="site-figure__caption">
              <span className="site-figure__eyebrow">{photos.team.caption.eyebrow}</span>
              <span className="site-figure__title">{photos.team.caption.title}</span>
              <span className="site-figure__meta">
                <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
                {photos.team.caption.location}
              </span>
            </figcaption>
          </figure>
          <div className="support-feature__content">
            <h2 id="support-title">Help the season move.</h2>
            <p>
              Community support can help with competition, travel, equipment, and the work around every match.
            </p>
            <div className="site-actions">
              <Link className="site-button" to="/donate">
                Support the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" aria-labelledby="sponsors-title">
        <div className="section-heading">
          <h2 id="sponsors-title">Backed by our community.</h2>
          <p>Approved sponsor recognition appears here when partnerships are published.</p>
        </div>
        <div className="public-empty-state" role="status">
          <h3>Sponsor recognition is being prepared.</h3>
          <p>Published sponsors are temporarily unavailable. Please check again soon.</p>
        </div>
      </section>

      <section className="site-section" aria-labelledby="shop-title">
        <div className="shop-feature" id="shop">
          <div className="shop-feature__content">
            <h2 id="shop-title">Carry the team beyond the court.</h2>
            <p>
              Browse published PerformancePilot gear. The current catalog is for discovery only; checkout and
              order handling remain separate.
            </p>
            <div className="site-actions">
              <Link className="site-button" to="/shop">
                Browse team gear
              </Link>
            </div>
          </div>
          <figure className="site-figure">
            <SiteImage
              src={photos.preparation.src}
              fallbackSrc={photos.preparation.fallback}
              alt={photos.preparation.alt}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
