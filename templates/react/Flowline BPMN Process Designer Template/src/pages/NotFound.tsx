import { Link, useLocation } from "react-router-dom";
import Icon from "../components/Icon";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="page scroll-thin">
      <div className="page__inner page__inner--narrow">
        <div className="notfound">
          <span className="notfound__icon">
            <Icon name="alert-triangle" size={24} />
          </span>
          <span className="notfound__code mono">404</span>
          <h1 className="notfound__title">No such view in Flowline</h1>
          <p className="notfound__text">
            <code>{pathname}</code> is not a route in this app. This is Flowline&rsquo;s own
            404 — the bundle loaded fine, so it is <strong>not</strong> a publishing failure.
          </p>
          <div className="notfound__actions">
            <Link to="/" className="btn btn--dark">
              <Icon name="workflow" size={16} />
              Back to designer
            </Link>
            <Link to="/publish" className="btn btn--ghost btn--always">
              <Icon name="rocket" size={16} />
              Publish diagnostics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
