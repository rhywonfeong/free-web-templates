import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from '../site'
import { IconPhone, IconSiren, IconWhatsapp } from './Icons'

export default function Urgent() {
  return (
    <section className="urgent" aria-label="Intervenții urgente instalații">
      <div className="shell urgent__inner">
        <span className="urgent__icon">
          <IconSiren size={28} />
        </span>
        <div className="urgent__text">
          <strong>Urgență acum? Inundație, țeavă spartă sau canalizare blocată?</strong>
          <p>
            Intervenții urgente instalații, non-stop. Sună imediat sau trimite o poză pe WhatsApp
            pentru evaluare rapidă.
          </p>
        </div>
        <div className="urgent__cta">
          <a className="btn btn--light btn--lg" href={PHONE_TEL}>
            <IconPhone size={19} /> {PHONE_DISPLAY}
          </a>
          <a
            className="btn btn--green btn--lg"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsapp size={19} /> WhatsApp urgent
          </a>
        </div>
      </div>
    </section>
  )
}

export function Marquee() {
  const items = [
    'Instalator 24/24',
    'Instalator autorizat',
    'Intervenții sanitare',
    'Instalator la domiciliu',
    'Desfundări canalizare',
    'Reparații instalații sanitare',
    'Montaj obiecte sanitare',
    'Intervenții urgente instalații'
  ]
  const loop = [...items, ...items]

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip__row">
        {loop.map((item, index) => (
          <span className="strip__item" key={`${item}-${index}`}>
            <i /> {item}
          </span>
        ))}
      </div>
    </div>
  )
}
