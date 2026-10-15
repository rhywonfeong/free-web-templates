import { Link } from "react-router-dom";
import "../styles.css";

export default function Home() {
  return (
    <main className="home-shell">
      <section className="language-landing" aria-labelledby="language-title">
        <div className="language-intro">
          <img
            className="language-logo"
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96f7782d-f99a-4eb6-8dbe-444335906c38_800w.png"
            alt="BodhiNautic"
            fetchpriority="high"
            decoding="async"
          />
          <p className="hero-eyebrow"><span />RIB & inflatable specialists</p>
          <h1 id="language-title">Welcome<br />to <em>BodhiNautic.</em></h1>
          <p className="language-note">Specialists in RIB Boats, Inflatable Tube Manufacturing, Bespoke Fendering Systems &amp; Custom Marine Components</p>
          <nav className="language-selector" aria-label="Language selector">
            <Link to="/particulares" lang="es">
              <div className="language-option-text">
                <span className="language-name">Español</span>
                <span className="language-desc">Particulares &amp; Profesionales</span>
              </div>
              <b>↗</b>
            </Link>
            <Link to="/superyacht" lang="en">
              <div className="language-option-text">
                <span className="language-name">English</span>
                <span className="language-desc">Superyacht Services</span>
              </div>
              <b>↗</b>
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
