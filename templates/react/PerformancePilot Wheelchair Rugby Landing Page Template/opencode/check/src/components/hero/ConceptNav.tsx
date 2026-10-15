import { Link } from "react-router-dom";

export type ConceptKey = "cinematic" | "editorial" | "matchday";

type ConceptNavProps = {
  concept: ConceptKey;
};

const links = [
  { label: "Work", to: "/work" },
  { label: "Stories", to: "/stories" },
  { label: "Schedule", to: "/schedule" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

function Mark() {
  return <img alt="" aria-hidden="true" width="36" height="36" className="cnav__mark" src="/icon.svg" />;
}

/**
 * Presentational navigation used inside the concept gallery so each hero can
 * be reviewed with the header treatment it was designed for. Links are real
 * routes, but the group is labelled as a preview so it never competes with the
 * site's primary navigation landmark.
 */
export default function ConceptNav({ concept }: ConceptNavProps) {
  if (concept === "editorial") {
    const left = links.slice(0, 3);
    const right = links.slice(3);
    return (
      <div className="cnav cnav--editorial" role="group" aria-label="Concept B navigation preview">
        <div className="cnav__edit-row">
          <ul className="cnav__list">
            {left.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <Link to="/" className="cnav__masthead" aria-label="PerformancePilot home">
            <Mark />
            <span>
              <strong>PerformancePilot</strong>
              <small>Wheelchair Rugby</small>
            </span>
          </Link>
          <ul className="cnav__list cnav__list--end">
            {right.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cnav__edit-sub">
          <span>Public site</span>
          <Link to="/donate" className="cnav__edit-cta">
            Support the team <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    );
  }

  if (concept === "matchday") {
    return (
      <div className="cnav cnav--match" role="group" aria-label="Concept C navigation preview">
        <div className="cnav__match-row">
          <Link to="/" className="cnav__brand" aria-label="PerformancePilot home">
            <Mark />
            <span>
              <strong>PerformancePilot</strong>
              <small>Wheelchair Rugby</small>
            </span>
          </Link>
          <ul className="cnav__list cnav__list--caps">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="cnav__match-end">
            <span className="cnav__chip">
              <i aria-hidden="true" />
              Next match: TBA
            </span>
            <Link to="/donate" className="site-button site-button--primary site-button--square cnav__cta">
              Support
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cnav cnav--cinematic" role="group" aria-label="Concept A navigation preview">
      <div className="cnav__cine-row">
        <Link to="/" className="cnav__brand" aria-label="PerformancePilot home">
          <Mark />
          <span>
            <strong>PerformancePilot</strong>
            <small>Wheelchair Rugby</small>
          </span>
        </Link>
        <ul className="cnav__list cnav__list--pill">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.to}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/donate" className="site-button site-button--primary cnav__cta">
          Support the team
        </Link>
      </div>
    </div>
  );
}
