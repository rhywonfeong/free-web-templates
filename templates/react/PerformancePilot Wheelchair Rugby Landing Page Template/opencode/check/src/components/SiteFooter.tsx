import { Link } from "react-router-dom";
import SiteBrand from "./SiteBrand";

const footerLinks = [
  { label: "Work", to: "/work" },
  { label: "Stories", to: "/stories" },
  { label: "Schedule", to: "/schedule" },
  { label: "About", to: "/about" },
  { label: "Support", to: "/donate" },
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
  { label: "Concepts", to: "/portfolio" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <SiteBrand variant="footer" />
          <p className="site-footer__statement">Competition, community, and opportunity through wheelchair rugby.</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="site-footer__links">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__boundary">Public information only. Private team operations remain protected.</p>
        <p className="site-footer__credit">
          Court photography by 江戸村のとくぞう via Wikimedia Commons,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license noreferrer" target="_blank">
            CC BY-SA 4.0
          </a>
          . Homepage photograph: Caregiver and Wheelchair User by a Misty Shore.
        </p>
      </div>
    </footer>
  );
}
