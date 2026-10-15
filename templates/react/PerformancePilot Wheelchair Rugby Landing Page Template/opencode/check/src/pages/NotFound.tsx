import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-intro" aria-labelledby="missing-title">
      <p className="site-eyebrow">404</p>
      <h1 id="missing-title">That page is not on the public site.</h1>
      <p className="page-intro__lede">
        The link may be private, unpublished, or mistyped. Head back to a published page.
      </p>
      <div className="site-actions">
        <Link className="site-button site-button--primary" to="/">
          Back to home
        </Link>
        <Link className="site-button site-button--secondary" to="/schedule">
          Public schedule
        </Link>
      </div>
    </section>
  );
}
