import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../data'
import { ArrowIcon, CheckIcon, PhoneIcon, StarIcon, WhatsAppIcon } from './Icons'

const TRUST = [
  'Disponibil 24/24',
  'Peste 14 ani experiență',
  'Intervenții rapide',
  'Prețuri transparente',
  'Garanție pentru lucrări',
]

export default function Hero({ onRequest }: { onRequest: () => void }) {
  return (
    <section className="hero" id="acasa">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="shell hero__in">
        <div className="hero__copy reveal">
          <span className="eyebrow">
            <span className="dot" /> Instalator autorizat · non-stop
          </span>

          <h1>
            Instalator Autorizat 24/24 —{' '}
            <span className="grad">Intervenții Rapide la Domiciliu</span>
          </h1>

          <p className="hero__sub">
            Instalator cu peste 14 ani experiență. Intervenții rapide pentru urgențe, reparații
            și instalații sanitare. Disponibil 24/24.
          </p>

          <div className="hero__cta">
            <a className="btn btn--blue btn--lg btn--pulse" href={PHONE_TEL}>
              <PhoneIcon /> Sună Acum
            </a>
            <a
              className="btn btn--green btn--lg"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <button type="button" className="btn btn--ghost btn--lg" onClick={onRequest}>
              Solicită Ofertă <ArrowIcon />
            </button>
          </div>

          <ul className="hero__trust">
            {TRUST.map((t) => (
              <li className="trust-item" key={t}>
                <CheckIcon /> {t}
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero__panel reveal">
          <h3>Ai o urgență sanitară acum?</h3>
          <p>
            Sună direct instalatorul. Preluăm apelul non-stop și îți spunem în câteva minute când
            putem ajunge la tine.
          </p>

          <a className="hero__phone" href={PHONE_TEL}>
            <PhoneIcon />
            <span>
              <small>Dispecerat 24/24</small>
              <b>{PHONE_DISPLAY}</b>
            </span>
          </a>

          <div className="hero__stats">
            <div className="hero__stat">
              <b>14+</b>
              <span>ani exp.</span>
            </div>
            <div className="hero__stat">
              <b>24/7</b>
              <span>non-stop</span>
            </div>
            <div className="hero__stat">
              <b>2500+</b>
              <span>lucrări</span>
            </div>
          </div>

          <div className="hero__mini-review">
            <span className="stars" aria-label="Rating 5 din 5">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span>5.0 din peste 120 de recenzii</span>
          </div>

          <a
            className="btn btn--green btn--block"
            style={{ marginTop: 16 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Trimite poză pe WhatsApp
          </a>
        </aside>
      </div>
    </section>
  )
}
