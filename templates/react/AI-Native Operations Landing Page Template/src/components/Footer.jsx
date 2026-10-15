import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer-v1">
      <div className="site-footer-shell-v1">
        <div className="site-footer-frame-v1">
          <div className="site-footer-inner-v1">
            <div className="site-footer-top-v1">
              <div className="site-footer-brand-v1 reveal-fade" style={{ transitionDelay: '0.08s' }}>
                <div className="site-footer-mark-v1 font-head">SP</div>
                <h2 className="site-footer-name-v1 font-head">Stillpoint<br/>Recovery Studio</h2>
                <p className="site-footer-text-v1">
                  A premium recovery environment designed to make restoration feel calm, structured, and easy to return
                  to.
                </p>
              </div>

              <div className="reveal-fade" style={{ transitionDelay: '0.14s' }}>
                <p className="site-footer-heading-v1">Navigate</p>
                <div className="site-footer-links-v1">
                  <a href="#hero" className="site-footer-link-v1">Home</a>
                  <a href="#experiences" className="site-footer-link-v1">Experiences</a>
                  <a href="#studio-experience" className="site-footer-link-v1">Studio Experience</a>
                  <a href="#membership" className="site-footer-link-v1">Membership</a>
                  <a href="#faq" className="site-footer-link-v1">FAQ</a>
                </div>
              </div>

              <div className="reveal-fade" style={{ transitionDelay: '0.20s' }}>
                <p className="site-footer-heading-v1">Connect</p>
                <div className="site-footer-contact-v1">
                  <a href="#" className="site-footer-contact-item-v1">Book Intro Session</a>
                  <a href="#" className="site-footer-contact-item-v1">hello@stillpointstudio.com</a>
                  <a href="#" className="site-footer-contact-item-v1">Instagram</a>
                  <a href="#" className="site-footer-contact-item-v1">Visit the Studio</a>
                </div>
              </div>
            </div>

            <div className="site-footer-bottom-v1 reveal-fade" style={{ transitionDelay: '0.24s' }}>
              <div className="site-footer-meta-v1">
                © 2026 Stillpoint Recovery Studio. All rights reserved.
              </div>

              <div className="site-footer-legal-v1">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}