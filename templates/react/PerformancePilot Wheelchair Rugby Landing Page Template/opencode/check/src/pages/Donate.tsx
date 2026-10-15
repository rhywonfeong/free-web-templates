import { Link } from "react-router-dom";

const impactAreas = [
  {
    title: "Competition",
    copy: "Entry fees, officials, and court time so the team can line up for every sanctioned match.",
  },
  {
    title: "Travel",
    copy: "Accessible transport and lodging for away tournaments across the season.",
  },
  {
    title: "Equipment",
    copy: "Competition chairs, wheels, tyres, and the repairs that keep athletes rolling.",
  },
  {
    title: "The work around every match",
    copy: "Volunteers, training support, and the people who make play possible.",
  },
];

export default function Donate() {
  return (
    <>
      <section className="page-intro" aria-labelledby="donate-title">
        <p className="site-eyebrow">Support</p>
        <h1 id="donate-title">Help the season move.</h1>
        <p className="page-intro__lede">
          Community support keeps PerformancePilot competing. Every contribution goes toward the public, published
          needs of the team.
        </p>
      </section>

      <section className="site-section" aria-labelledby="impact-title">
        <div className="section-heading">
          <h2 id="impact-title">Where support goes.</h2>
          <p>Published funding priorities for the current season.</p>
        </div>
        <ul className="impact-grid">
          {impactAreas.map((area) => (
            <li key={area.title} className="impact-card">
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="site-section" aria-labelledby="give-title">
        <div className="support-panel">
          <div className="support-panel__content">
            <h2 id="give-title">Giving is being prepared.</h2>
            <p>
              Online giving is not yet open on this public site. When approved, secure donation options will
              appear here. Until then, reach out through the team's published contact channels.
            </p>
            <div className="site-actions">
              <Link className="site-button site-button--secondary" to="/schedule">
                See the public schedule
              </Link>
              <Link className="site-button" to="/">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
