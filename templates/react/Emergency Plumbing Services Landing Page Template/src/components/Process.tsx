import { PHONE_TEL } from '../site'
import { IconPhone } from './Icons'

const STEPS = [
  { title: 'Ne contactezi', text: 'Ne contactezi telefonic sau pe WhatsApp.' },
  { title: 'Analizăm problema', text: 'Analizăm problema și oferim estimare.' },
  { title: 'Venim la locație', text: 'Venim la locație.' },
  { title: 'Rezolvăm rapid', text: 'Rezolvăm problema rapid și profesionist.' },
  { title: 'Primești garanție', text: 'Primești garanție pentru lucrare.' }
]

export default function Process() {
  return (
    <section className="section" id="proces">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Proces de lucru</span>
          <h2 className="section-title">
            5 pași simpli până la <span className="grad-text">problema rezolvată</span>
          </h2>
          <p className="section-sub">
            Un proces clar, fără surprize: știi ce se întâmplă la fiecare pas al intervenției
            sanitare.
          </p>
        </div>

        <ol className="steps reveal">
          {STEPS.map((step, index) => (
            <li className="step" key={step.title}>
              <span className="step__num">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div style={{ textAlign: 'center', marginTop: 34 }} className="reveal">
          <a className="btn btn--blue btn--lg btn--pulse" href={PHONE_TEL}>
            <IconPhone size={19} /> Începe cu pasul 1 · Sună Acum
          </a>
        </div>
      </div>
    </section>
  )
}
