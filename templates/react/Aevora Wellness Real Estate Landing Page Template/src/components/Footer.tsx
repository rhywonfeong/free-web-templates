import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="frame footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3 L21 20 H3 Z" strokeLinejoin="round" />
                  <path d="M12 9.5 L16.5 18.5 H7.5 Z" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="brand-name">Aevora</span>
            </div>
            <p className="footer-copy">
              Advisory for residential real estate designed around human health, restorative
              environments, and long-horizon asset value.
            </p>
            <div className="footer-badges">
              <span className="badge">Accredited Wellness Building Professionals</span>
              <span className="badge">Multi-Unit Residential Experience</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Practice</h4>
            <Link to="/services">Advisory Services</Link>
            <Link to="/services">Certification Readiness</Link>
            <Link to="/services">Property Assessments</Link>
            <Link to="/projects">Project Experience</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About the Practice</Link>
            <Link to="/about">Credentials</Link>
            <Link to="/contact">Start a Consultation</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@aevora-advisory.com">hello@aevora-advisory.com</a>
            <a href="tel:+14165550188">+1 (416) 555-0188</a>
            <span className="footer-muted">Toronto · New York · Remote worldwide</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aevora Advisory Inc. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
