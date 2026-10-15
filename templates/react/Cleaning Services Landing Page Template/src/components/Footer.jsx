import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-shell">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <div className="site-footer-brand-mark">
              <div className="site-footer-brand-square">CK</div>
              <div className="site-footer-brand-name-wrap">
                <span className="site-footer-brand-name">Cleanecs</span>
                <span className="site-footer-brand-sub">Koh Samui</span>
              </div>
            </div>

            <p className="site-footer-brand-text">
              Premium residential and commercial cleaning services designed for consistency, quality, and guest-ready excellence.
            </p>
          </div>

          <div>
            <span className="site-footer-col-title">Explore</span>
            <div className="site-footer-links">
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#reviews">Reviews</a>
              <a href="#quote">Quote</a>
            </div>
          </div>

          <div>
            <span className="site-footer-col-title">Contact</span>
            <div className="site-footer-contact">
              <a href="mailto:hello@cleanecs.com">hello@cleanecs.com</a>
              <a href="tel:+66800000000">+66 80 000 0000</a>
              <p className="is-soft">Serving Koh Samui and surrounding islands.</p>
            </div>

            <div className="site-footer-hours-wrap">
              <span className="site-footer-col-title">Hours</span>
              <p className="site-footer-hours">
                Mon–Sat — 9:00–18:00
                <br />
                Sunday by request
              </p>
            </div>
          </div>

          <div>
            <span className="site-footer-col-title">Have a Question?</span>
            <p className="site-footer-note">
              A member of our local team will respond within 24 hours to help recommend
              the right cleaning rhythm for your property.
            </p>

            <a href="#quote" className="site-footer-service-link">
              Request a Quote
              <iconify-icon
                icon="solar:arrow-right-up-linear"
                width="16"
              ></iconify-icon>
            </a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <div className="site-footer-bottom-left">
            <span className="site-footer-bottom-line">
              Professional cleaning for Koh Samui.
            </span>
            <span className="site-footer-bottom-line">
              © 2026 Cleanecs Koh Samui.
            </span>
          </div>

          <div className="site-footer-bottom-right">
            <div className="site-footer-meta-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>

            <div className="site-footer-social">
              <a href="#" aria-label="Instagram">
                <iconify-icon icon="mdi:instagram" width="16"></iconify-icon>
              </a>
              <a href="#" aria-label="Facebook">
                <iconify-icon icon="mdi:facebook" width="16"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}