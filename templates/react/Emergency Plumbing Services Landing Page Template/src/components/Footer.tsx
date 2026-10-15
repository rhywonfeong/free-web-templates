import {
  EMAIL_DISPLAY,
  EMAIL_HREF,
  FACEBOOK,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP
} from '../site'
import { Logo } from './Header'
import { IconFacebook, IconMail, IconPhone, IconWhatsapp } from './Icons'

const QUICK_LINKS = [
  { label: 'Acasă', href: '#acasa' },
  { label: 'Servicii', href: '#servicii' },
  { label: 'Recenzii', href: '#recenzii' },
  { label: 'Contact', href: '#contact' }
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div>
            <Logo />
            <p className="footer__about">
              InstalatorulTau24.ro — instalator autorizat 24/24, cu peste 14 ani experiență în
              intervenții sanitare, desfundări canalizare, reparații instalații sanitare și montaj
              obiecte sanitare la domiciliu.
            </p>
            <div className="footer__socials">
              <a className="social" href={PHONE_TEL} aria-label="Sună acum">
                <IconPhone size={19} />
              </a>
              <a
                className="social social--wa"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <IconWhatsapp size={19} />
              </a>
              <a className="social" href={EMAIL_HREF} aria-label="Trimite email">
                <IconMail size={19} />
              </a>
              <a
                className="social"
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconFacebook size={19} />
              </a>
            </div>
          </div>

          <div>
            <h4>Link-uri rapide</h4>
            <nav className="footer__links" aria-label="Link-uri rapide">
              {QUICK_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4>Date contact</h4>
            <div className="footer__links">
              <a href={PHONE_TEL}>
                <IconPhone size={16} /> Telefon: {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <IconWhatsapp size={16} /> WhatsApp: {PHONE_DISPLAY}
              </a>
              <a href={EMAIL_HREF}>
                <IconMail size={16} /> {EMAIL_DISPLAY}
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
                <IconFacebook size={16} /> Facebook oficial
              </a>
            </div>
            <p style={{ marginTop: 16, color: 'var(--muted)', fontSize: 14 }}>
              Program: 24 ore din 24, 7 zile din 7.
            </p>
          </div>
        </div>

        <p className="footer__seo">
          Servicii: instalator 24/24 · instalator autorizat · intervenții sanitare · instalator la
          domiciliu · desfundări canalizare · reparații instalații sanitare · montaj obiecte
          sanitare · intervenții urgente instalații · montaj boilere · montaj vase WC · montaj
          chiuvete · reparații țevi apă · reparații scurgeri · montaj cabine de duș · înlocuire
          baterii sanitare.
        </p>

        <div className="footer__bottom">
          <span>© 2026 InstalatorulTau24.ro - Toate drepturile rezervate.</span>
          <span>Instalator autorizat · Intervenții rapide la domiciliu · 24/24</span>
        </div>
      </div>
    </footer>
  )
}
