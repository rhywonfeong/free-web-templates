import { Link } from "react-router-dom";

const content = {
  en: {
    description: "Specialists in Hypalon tubes, inflatable structures and technical RIB solutions.",
    country: "Spain",
    legal: "Legal Notice & Privacy Policy",
    cookies: "Cookies Policy",
  },
  es: {
    description: "Especialistas en flotadores de Hypalon, estructuras inflables y soluciones técnicas para semirrígidas.",
    country: "España",
    legal: "Aviso legal y política de privacidad",
    cookies: "Política de cookies",
  },
};

export default function Footer({ language = "en" }) {
  const copy = content[language];
  const activeLanguage = language.toUpperCase();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59a4b2af-0471-419b-b994-d4d501825c8a_320w.png" alt="BodhiNautic" />
            </Link>
            <p>{copy.description}</p>
            <div className="site-footer__socials">
              <a href="https://www.instagram.com/bodhinautic/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram"><iconify-icon icon="mdi:instagram" width="20" height="20" /></a>
              <a href="https://www.tiktok.com/@bodhinautic" target="_blank" rel="noreferrer" aria-label="TikTok"><iconify-icon icon="ic:baseline-tiktok" width="20" height="20" /></a>
              <a href="https://www.youtube.com/@BodhiNautic" target="_blank" rel="noreferrer" aria-label="YouTube"><iconify-icon icon="mdi:youtube" width="20" height="20" /></a>
            </div>
          </div>
          <div className="site-footer__contact">
            <div><iconify-icon icon="lucide:map-pin" width="18" height="18" /><span>C/ Vidrieria 6, Palau-solità i Plegamans, Barcelona - {copy.country}</span></div>
            <div><iconify-icon icon="lucide:mail" width="18" height="18" /><a href="mailto:info@bodhinautic.com">info@bodhinautic.com</a></div>
            <div><iconify-icon icon="lucide:phone" width="18" height="18" /><a href="tel:+34653654342">+34 653 65 43 42</a></div>
          </div>
          <div className="site-footer__legal">
            <Link to="/legal">{copy.legal}</Link>
            <Link to="/cookies">{copy.cookies}</Link>
            <div>
              {language === "en" ? <span>{activeLanguage}</span> : <Link to="/private-owners">EN</Link>}
              <i>|</i>
              {language === "es" ? <span>{activeLanguage}</span> : <Link to="/particulares">ES</Link>}
            </div>
          </div>
        </div>
        <div className="site-footer__copyright">© 2026 BodhiNautic.</div>
      </div>
    </footer>
  );
}
