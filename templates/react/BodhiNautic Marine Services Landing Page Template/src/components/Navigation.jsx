import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles.css";

const logo = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a50be76-efcc-4549-9e22-88c20116de5d_800w.png";

const menus = {
  en: [
    { label: "Professionals", to: "/profesionales", links: ["Retubing", "Decking", "Logos", "Materials", "Console panels", "3D scan"] },
    { label: "Private owners", to: "/private-owners", links: ["Retubing", "Restoration", "Decking", "Logos", "Buying", "Outboards"] },
    { label: "Superyachts", to: "/superyacht", links: ["Transom fenders", "Toys & platforms", "Retubing", "Logos", "Console panels", "Outboards", "3D scan"] },
  ],
  es: [
    { label: "Profesionales", to: "/profesionales", links: ["Retubing", "Decking", "Logos", "Materiales", "Paneles de consola", "Escáner 3D"] },
    { label: "Particulares", to: "/particulares", links: ["Retubing", "Restauración", "Decking", "Logos", "Fuerabordas", "Compra"] },
    { label: "Superyates", to: "/superyacht", links: ["Defensas de popa", "Toys y plataformas", "Retubing", "Logos", "Paneles de consola", "Fuerabordas", "Escáner 3D"] },
  ],
};

const privateAnchors = {
  Retubing: "retubing", Restauración: "restoration", Restoration: "restoration", Decking: "decking", Logos: "logos",
  BodhiRental: "rental", Compra: "buying", Buying: "buying", BodhiRIBs: "bodhiribs",
  "Transom fenders": "transom-fenders", "Defensas de popa": "transom-fenders",
  "Toys & platforms": "toys", "Toys y plataformas": "toys",
  "Console panels": "console-panels", "Paneles de consola": "console-panels",
  Outboards: "outboards", Fuerabordas: "outboards",
  "3D scan": "3d-scan", "Escáner 3D": "3d-scan",
  Materials: "materials", Materiales: "materials",
};

export default function Navigation({ language = "en" }) {
  const [open, setOpen] = useState(false);
  const copy = language === "es"
    ? { shop: "Tienda", team: "Equipo", contact: "Contactar", menu: "Abrir menú", close: "Cerrar menú" }
    : { shop: "Shop", team: "Team", contact: "Get in touch", menu: "Open menu", close: "Close menu" };

  return (
    <header className="site-navigation">
      <div className="site-navigation__bar">
        <Link to="/" className="site-navigation__brand" aria-label="BodhiNautic home">
          <img src={logo} alt="BodhiNautic" />
        </Link>
        <nav className="site-navigation__desktop" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
          {menus[language].map((group) => (
            <div className="site-navigation__group" key={group.label}>
              {group.to ? <NavLink to={group.to}>{group.label}</NavLink> : <button type="button">{group.label}</button>}
              <div className="site-navigation__dropdown">
                {group.links.map((item) => <a href={group.to ? `${group.to}#${privateAnchors[item] || "services"}` : "#"} key={item}>{item}</a>)}
              </div>
            </div>
          ))}
          <NavLink to={language === "es" ? "/tienda" : "/shop"}>{copy.shop}</NavLink>
          <NavLink to={language === "es" ? "/equipo" : "/team"}>{copy.team}</NavLink>
        </nav>
        <div className="site-navigation__actions">
          <a className="site-navigation__contact" href="mailto:info@bodhinautic.com">{copy.contact}</a>
          <button className="site-navigation__toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? copy.close : copy.menu}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <nav className={open ? "site-navigation__mobile is-open" : "site-navigation__mobile"} aria-label={language === "es" ? "Navegación móvil" : "Mobile navigation"}>
        {menus[language].map((group) => (
          <section key={group.label}>
            {group.to ? <NavLink to={group.to} onClick={() => setOpen(false)}>{group.label}</NavLink> : <strong>{group.label}</strong>}
            {group.links.map((item) => <a href={group.to ? `${group.to}#${privateAnchors[item] || "services"}` : "#"} onClick={() => setOpen(false)} key={item}>{item}</a>)}
          </section>
        ))}
        <NavLink to={language === "es" ? "/tienda" : "/shop"} onClick={() => setOpen(false)}>{copy.shop}</NavLink>
        <NavLink to={language === "es" ? "/equipo" : "/team"} onClick={() => setOpen(false)}>{copy.team}</NavLink>
        <a className="site-navigation__mobile-contact" href="mailto:info@bodhinautic.com">{copy.contact}</a>
      </nav>
    </header>
  );
}
