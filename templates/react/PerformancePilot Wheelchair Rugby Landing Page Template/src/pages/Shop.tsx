import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <section className="page-intro" aria-labelledby="shop-page-title">
        <p className="site-eyebrow">Team gear</p>
        <h1 id="shop-page-title">Carry the team beyond the court.</h1>
        <p className="page-intro__lede">
          Browse published PerformancePilot gear. The current catalog is for discovery only; checkout and order
          handling remain separate.
        </p>
      </section>

      <section className="site-section" aria-labelledby="catalog-title">
        <div className="section-heading">
          <h2 id="catalog-title">Published catalog.</h2>
          <p>Items appear here once they are approved for public listing.</p>
        </div>
        <div className="public-empty-state" role="status">
          <h3>The team gear catalog is being prepared.</h3>
          <p>Published items are temporarily unavailable. Please check again soon.</p>
        </div>
        <div className="site-actions">
          <Link className="site-button site-button--primary" to="/donate">
            Support the team
          </Link>
          <Link className="site-button site-button--secondary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
