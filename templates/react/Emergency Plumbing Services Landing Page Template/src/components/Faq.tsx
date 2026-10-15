import { useState } from 'react'
import { PHONE_TEL, WHATSAPP } from '../site'
import { IconPhone, IconWhatsapp } from './Icons'

const ITEMS = [
  {
    q: 'Lucrați și în weekend?',
    a: 'Da, intervenim 24/24. Suntem disponibili sâmbătă, duminică, de sărbători, seara și noaptea, pentru urgențe și lucrări programate.'
  },
  {
    q: 'Oferiți garanție?',
    a: 'Da, pentru lucrările efectuate. Primești garanție atât pentru manoperă, cât și pentru materialele montate de noi.'
  },
  {
    q: 'Pot trimite poze pe WhatsApp?',
    a: 'Da, pentru evaluare rapidă. Trimite 2-3 fotografii cu problema și primești o estimare orientativă înainte de deplasare.'
  },
  {
    q: 'Cât durează intervenția?',
    a: 'În funcție de locație și complexitate. Majoritatea intervențiilor curente, precum desfundările sau înlocuirea unei baterii sanitare, se rezolvă în aceeași vizită.'
  }
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section" id="faq">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Întrebări frecvente</span>
          <h2 className="section-title">
            Răspunsuri rapide despre <span className="grad-text">instalator 24/24</span>
          </h2>
        </div>

        <div className="faq reveal">
          {ITEMS.map((item, index) => {
            const isOpen = open === index
            return (
              <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <button
                  className="faq__q"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  {item.q}
                  <span className="faq__sign" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq__a">
                  <div className="faq__a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 30
          }}
        >
          <a className="btn btn--ghost" href={PHONE_TEL}>
            <IconPhone size={18} /> Mai ai o întrebare? Sună acum
          </a>
          <a
            className="btn btn--green"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsapp size={18} /> Întreabă pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
