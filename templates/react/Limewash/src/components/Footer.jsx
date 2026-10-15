import React from "react";
import { Link } from "react-router-dom";

const links = [
  ["Services", "/services"],
  ["Finishes", "/finishes"],
  ["Portfolio", "/portfolio"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span className="brand-name footer-brand">
            Limewash <span className="brand-italic">Atelier</span>
          </span>
          <p className="footer-blurb">
            Hand-applied limewash finishes for timeless spaces.
          </p>
        </div>
        <div>
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-list">
            {links.map(([l, p]) => (
              <li key={p}>
                <Link to={p} className="footer-link">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-list">
            <li>Phone: [Add Phone Number]</li>
            <li>Email: [Add Email]</li>
            <li>
              Service Area: Los Angeles, Beverly Hills, Santa Monica, Pacific
              Palisades, Malibu, Pasadena, Orange County
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Limewash Atelier. All rights reserved.
      </div>
    </footer>
  );
}
