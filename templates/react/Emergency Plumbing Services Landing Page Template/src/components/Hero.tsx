import { useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from '../site'
import { IconBolt, IconClock, IconPhone, IconShield, IconWhatsapp } from './Icons'

const TRUST = [
  'Disponibil 24/24',
  'Peste 14 ani experiență',
  'Intervenții rapide',
  'Prețuri transparente',
  'Garanție pentru lucrări'
]

const PHOTO =
  'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1100&q=70'

/** Designed fallback scene that always renders behind the photo. */
function VisualBackdrop() {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hb2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b8bff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2b8bff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="#0a1220" />
      <circle cx="300" cy="120" r="180" fill="url(#hb2)" />
      <g stroke="#4da3ff" strokeOpacity="0.35" strokeWidth="10" fill="none" strokeLinecap="round">
        <path d="M40 420h120a40 40 0 0 0 40-40V250a40 40 0 0 1 40-40h120" />
        <path d="M40 470h60a30 30 0 0 0 30-30V150a30 30 0 0 1 30-30h200" />
      </g>
      <g fill="#4da3ff" fillOpacity="0.18">
        <circle cx="300" cy="380" r="70" />
        <circle cx="90" cy="90" r="46" />
      </g>
    </svg>
  )
}

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section className="hero" id="acasa">
      <div className="hero__grid-bg" />
      <div className="shell hero__inner">
        <div className="hero__copy reveal">
          <div className="hero__badges">
            <span className="pill pill--live">
              <i className="dot" /> Acum disponibil · răspundem imediat
            </span>
            <span className="pill">
              <IconShield size={15} /> Instalator autorizat
            </span>
            <span className="pill">
              <IconClock size={15} /> Non-stop 24/24
            </span>
          </div>

          <h1 className="hero__title">
            Instalator Autorizat 24/24{' '}
            <span className="grad-text">Intervenții Rapide la Domiciliu</span>
          </h1>

          <p className="hero__sub">
            Instalator cu peste 14 ani experiență. Intervenții rapide pentru urgențe, reparații și
            instalații sanitare. Disponibil 24/24.
          </p>

          <div className="hero__cta">
            <a className="btn btn--blue btn--lg btn--pulse" href={PHONE_TEL}>
              <IconPhone size={19} /> Sună Acum · {PHONE_DISPLAY}
            </a>
            <a
              className="btn btn--green btn--lg"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsapp size={19} /> WhatsApp
            </a>
            <a className="btn btn--ghost btn--lg" href="#formular">
              <IconBolt size={18} /> Solicita Ofertă
            </a>
          </div>

          <ul className="hero__trust">
            {TRUST.map((item) => (
              <li className="trust-item" key={item}>
                <span className="check" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual reveal">
          <div className="hero__photo">
            <VisualBackdrop />
            {photoOk && (
              <img
                src={PHOTO}
                alt="Instalator profesionist autorizat în timpul unei intervenții sanitare într-o locuință modernă"
                loading="eager"
                decoding="async"
                onError={() => setPhotoOk(false)}
                style={{ position: 'relative', zIndex: 1 }}
              />
            )}
            <div className="hero__photo-tag">
              <strong>Intervenții sanitare la domiciliu</strong>
              <span>Urgențe, desfundări canalizare, montaj obiecte sanitare</span>
            </div>
          </div>

          <div className="float-card float-card--a">
            <span className="float-card__icon">
              <IconBolt size={19} />
            </span>
            <div>
              <b>Timp de răspuns rapid</b>
              <small>Ajungem în cel mai scurt timp</small>
            </div>
          </div>

          <div className="float-card float-card--b">
            <span className="float-card__icon">
              <IconShield size={19} />
            </span>
            <div>
              <b>Garanție lucrare</b>
              <small>Materiale și manoperă</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
