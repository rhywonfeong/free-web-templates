import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FAQS, PHONE_TEL, WHATSAPP_URL } from '../data'
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from './Icons'

export default function Faq({ limit, moreTo }: { limit?: number; moreTo?: string } = {}) {
  const [open, setOpen] = useState<number | null>(0)
  const list = typeof limit === 'number' ? FAQS.slice(0, limit) : FAQS

  return (
    <section className="section section--dark" id="intrebari-frecvente">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">Întrebări frecvente</span>
          <h2 className="section-title">
            Răspunsuri clare înainte de <span className="grad">a ne suna</span>
          </h2>
          <p className="section-sub">
            Dacă nu găsești răspunsul aici, scrie-ne pe WhatsApp — răspundem non-stop.
          </p>
        </header>

        <div className="faq">
          {list.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item reveal${isOpen ? ' is-open' : ''}`} key={f.q}>
                <h3>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {f.q}
                    <span className="faq__sign" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq__a">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="faq__help reveal">
          <span>Mai ai o întrebare despre intervenție?</span>
          {moreTo ? (
            <Link className="btn btn--blue btn--sm" to={moreTo}>
              Toate întrebările <ArrowIcon />
            </Link>
          ) : (
            <a className="btn btn--blue btn--sm" href={PHONE_TEL}>
              <PhoneIcon /> Sună Acum
            </a>
          )}
          <a
            className="btn btn--green btn--sm"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
