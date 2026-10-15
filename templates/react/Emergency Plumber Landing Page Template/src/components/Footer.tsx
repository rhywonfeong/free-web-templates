import {
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  WHATSAPP_URL,
} from '../data'
import { Link } from 'react-router-dom'
import { FacebookIcon, MailIcon, PhoneIcon, TikTokIcon, WhatsAppIcon } from './Icons'
import { Logo, NAV_LINKS } from './Header'

const QUICK = NAV_LINKS

const SEO_TAGS = [
  'instalator 24/24',
  'instalator autorizat',
  'intervenții sanitare',
  'instalator la domiciliu',
  'desfundări canalizare',
  'reparații instalații sanitare',
  'montaj obiecte sanitare',
  'intervenții urgente instalații',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div>
            <Logo />
            <p className="footer__about">
              InstalatorulTau24.ro — instalator autorizat cu peste 14 ani experiență. Intervenții
              rapide 24/24 pentru reparații, desfundări canalizare și instalații sanitare la
              domiciliu.
            </p>

            <div className="footer__social" aria-label="Rețele sociale">
              <a
                className="social-btn social-btn--fb"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook InstalatorulTau24.ro (se deschide într-o filă nouă)"
              >
                <FacebookIcon /> Facebook
              </a>
              <a
                className="social-btn social-btn--tt"
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok InstalatorulTau24.ro (se deschide într-o filă nouă)"
              >
                <TikTokIcon /> TikTok
              </a>
            </div>
          </div>

          <div>
            <h4>Link-uri rapide</h4>
            <nav className="footer__links" aria-label="Link-uri rapide">
              {QUICK.map((q) => (
                <Link key={q.to} to={q.to}>
                  {q.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4>Date contact</h4>
            <div className="footer__contact">
              <a href={PHONE_TEL}>
                <PhoneIcon /> Telefon {PHONE_DISPLAY}
              </a>
              <a
                className="is-wa"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> WhatsApp {PHONE_DISPLAY}
              </a>
              <a href={EMAIL_HREF}>
                <MailIcon /> {EMAIL}
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <FacebookIcon /> Facebook InstalatorulTau24.ro
              </a>
              <a className="is-tt" href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
                <TikTokIcon /> TikTok {TIKTOK_HANDLE}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__seo" aria-label="Servicii acoperite">
          {SEO_TAGS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© 2026 InstalatorulTau24.ro — Toate drepturile rezervate.</span>
          <span>Program: 24 ore din 24 · 7 zile din 7</span>
        </div>
      </div>
    </footer>
  )
}
