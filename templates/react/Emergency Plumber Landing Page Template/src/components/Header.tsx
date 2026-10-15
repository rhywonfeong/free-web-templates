import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL, TIKTOK_URL, WHATSAPP_URL } from '../data'
import { useBodyLock, useStuck } from '../hooks'
import {
  ArrowIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  ServiceIcon,
  ShieldIcon,
  TikTokIcon,
  WhatsAppIcon,
} from './Icons'

export type NavLinkItem = { to: string; label: string }

export const NAV_LINKS: NavLinkItem[] = [
  { to: '/', label: 'Acasă' },
  { to: '/servicii', label: 'Servicii' },
  { to: '/despre-noi', label: 'Despre Noi' },
  { to: '/recenzii', label: 'Recenzii' },
  { to: '/intrebari-frecvente', label: 'Întrebări Frecvente' },
  { to: '/contact', label: 'Contact' },
]

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="InstalatorulTau24.ro - prima pagină">
      <span className="logo__mark">
        <ServiceIcon name="faucet" />
      </span>
      <span className="logo__text">
        <span className="logo__name">
          InstalatorulTau24<span>.ro</span>
        </span>
        <span className="logo__tag">Instalator autorizat 24/24</span>
      </span>
    </Link>
  )
}

export default function Header({ onRequest }: { onRequest: () => void }) {
  const [open, setOpen] = useState(false)
  const stuck = useStuck(10)
  const { pathname } = useLocation()
  useBodyLock(open)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const go = () => {
    setOpen(false)
    onRequest()
  }

  return (
    <>
      <div className="topbar">
        <div className="shell topbar__in">
          <span className="topbar__item">
            <ShieldIcon /> Instalator autorizat · peste 14 ani experiență
          </span>
          <span className="topbar__item topbar__hide">
            <PhoneIcon /> Program non-stop: 24 ore / 7 zile
          </span>
        </div>
      </div>

      <header className={`header${stuck ? ' is-stuck' : ''}`}>
        <div className="shell header__in">
          <Logo />

          <nav className="nav" aria-label="Navigație principală">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__cta">
            <a className="btn btn--ghost btn--sm" href={PHONE_TEL}>
              <PhoneIcon /> {PHONE_DISPLAY}
            </a>
            <a
              className="btn btn--green btn--sm"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <a
              className="btn btn--tiktok btn--sm"
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Urmărește-ne pe TikTok (se deschide într-o filă nouă)"
              title="TikTok — InstalatorulTau24.ro"
            >
              <TikTokIcon /> <span className="btn__label">TikTok</span>
            </a>
            <button type="button" className="btn btn--blue btn--sm btn--pulse" onClick={go}>
              Solicită Intervenție
            </button>
          </div>

          <div className="header__mini">
            <a
              className="icon-btn icon-btn--tiktok"
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Urmărește-ne pe TikTok (se deschide într-o filă nouă)"
            >
              <TikTokIcon />
            </a>
            <a className="icon-btn icon-btn--green" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Scrie pe WhatsApp">
              <WhatsAppIcon />
            </a>
            <a className="icon-btn icon-btn--blue" href={PHONE_TEL} aria-label={`Sună la ${PHONE_DISPLAY}`}>
              <PhoneIcon />
            </a>
          </div>

          <button
            type="button"
            className="burger"
            aria-label="Deschide meniul"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <div className="drawer__panel" role="dialog" aria-modal="true" aria-label="Meniu">
          <div className="drawer__top">
            <Logo />
            <button
              type="button"
              className="burger"
              aria-label="Închide meniul"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="drawer__links" aria-label="Navigație mobilă">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                onClick={() => setOpen(false)}
              >
                {l.label}
                <ArrowIcon />
              </NavLink>
            ))}
          </nav>

          <div className="drawer__note">
            <strong style={{ color: '#fff' }}>Urgență instalații sanitare?</strong>
            <br />
            Intervenim non-stop, inclusiv noaptea și în weekend.
          </div>

          <div className="drawer__cta">
            <a className="btn btn--blue btn--block" href={PHONE_TEL}>
              <PhoneIcon /> Sună Acum
            </a>
            <a
              className="btn btn--green btn--block"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <a
              className="btn btn--tiktok btn--block"
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon /> Urmărește-ne pe TikTok
            </a>
            <button type="button" className="btn btn--ghost btn--block" onClick={go}>
              Solicită Intervenție
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
