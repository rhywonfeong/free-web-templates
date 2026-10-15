import React from 'react';

export default function Navbar() {
  return (
    <div className="hero-nav-wrap">
      <nav className="hero-nav hero-fade-up" style={{ animationDelay: '0.05s' }}>
        <a href="#hero" className="hero-brand">
          <span className="hero-brand-mark">CK</span>
          <span className="hero-brand-text">
            <span className="hero-brand-name">Cleanecs</span>
            <span className="hero-brand-sub">Koh Samui</span>
          </span>
        </a>

        <div className="hero-nav-links">
          <a href="#hero" className="is-active">Home</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#reviews">Reviews</a>
          <a href="#quote">Quote</a>
        </div>

        <a href="#quote" className="hero-nav-cta">Get a Quote</a>
      </nav>
    </div>
  );
}