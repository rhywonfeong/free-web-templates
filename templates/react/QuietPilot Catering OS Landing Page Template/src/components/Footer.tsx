import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <Icon name="infinity" size={16} className="footer__icon" />
        <span>QuietPilot</span>
      </div>
      <nav className="footer__nav" aria-label="Footer">
        <Link to="/">Home</Link>
        <Link to="/roi">ROI Calculator</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/#readiness">Execution</Link>
      </nav>
      <p>The Operating System for Catering Revenue. &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
