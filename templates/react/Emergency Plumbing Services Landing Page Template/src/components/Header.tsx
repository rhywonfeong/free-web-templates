import { useEffect, useState } from 'react'
import { NAV_ITEMS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from '../site'
import { IconBolt, IconClock, IconPhone, IconShield, IconWhatsapp, IconWrench } from './Icons'

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className="logo" href="#acasa" aria-label="InstalatorulTau24.ro - acasă">
      <span className="logo__mark">
        <IconWrench size={22} />
      </span>
      <span className="logo__text">
        <span className="logo__name">
          InstalatorulTau<span>24</span>.ro
        </span>
        {!compact && <span className="logo__tag">Instalator autorizat 24/24</span>}
      </span>
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="topbar">
        <div className="topbar__inner">
          <span className="topbar__item">
            <IconClock size={15} /> Program non-stop: 24 ore din 24, 7 zile din 7
          </span>
          <span className="topbar__sep">•</span>
          <span className="topbar__item topbar__item--hide-sm">
            <IconShield size={15} /> Garanție pentru lucrări
          </span>
          <span className="topbar__sep">•</span>
          <a className="topbar__item" href={PHONE_TEL}>
            <IconPhone size={15} /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header className="header" id="site-header">
        <div className="shell header__inner">
          <Logo />

          <nav className="nav" aria-label="Navigație principală">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                className={`nav__link${index === 0 ? ' is-active' : ''}`}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <a
              className="btn btn--green btn--sm"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Scrie-ne pe WhatsApp"
            >
              <IconWhatsapp size={18} /> WhatsApp
            </a>
            <a className="btn btn--blue btn--sm btn--pulse" href="#formular">
              <IconBolt size={17} /> Solicită Intervenție
            </a>
            <button
              className={`burger${open ? ' is-open' : ''}`}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Deschide meniul"
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? ' is-open' : ''}`} role="dialog" aria-modal="true">
        <button
          className="drawer__backdrop"
          type="button"
          aria-label="Închide meniul"
          onClick={() => setOpen(false)}
        />
        <div className="drawer__panel">
          <div className="drawer__head">
            <Logo compact />
            <button
              className="burger is-open"
              type="button"
              style={{ display: 'block' }}
              onClick={() => setOpen(false)}
              aria-label="Închide meniul"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <nav className="drawer__nav" aria-label="Navigație mobilă">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                className="drawer__link"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <span aria-hidden="true">›</span>
              </a>
            ))}
          </nav>

          <div className="drawer__cta">
            <a className="btn btn--blue btn--block" href={PHONE_TEL}>
              <IconPhone size={18} /> Sună Acum
            </a>
            <a
              className="btn btn--green btn--block"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsapp size={18} /> Scrie pe WhatsApp
            </a>
            <a
              className="btn btn--ghost btn--block"
              href="#formular"
              onClick={() => setOpen(false)}
            >
              Solicită Ofertă
            </a>
          </div>

          <div className="drawer__meta">
            <span>Instalator autorizat cu peste 14 ani experiență</span>
            <span>Intervenții rapide la domiciliu · 24/24 · weekend inclus</span>
          </div>
        </div>
      </div>
    </>
  )
}
