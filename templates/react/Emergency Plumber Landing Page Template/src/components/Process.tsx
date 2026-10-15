import { PHONE_TEL, STEPS } from '../data'
import { PhoneIcon } from './Icons'

export default function Process() {
  return (
    <section className="section section--dark" aria-labelledby="proces">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">Proces de lucru</span>
          <h2 className="section-title" id="proces">
            De la apel la problemă rezolvată în <span className="grad">5 pași simpli</span>
          </h2>
          <p className="section-sub">
            Fără drumuri inutile și fără costuri surpriză. Știi exact ce se întâmplă la fiecare
            etapă a intervenției.
          </p>
        </header>

        <div className="steps">
          {STEPS.map((s, i) => (
            <article className="step reveal" key={s.title}>
              <span className="step__num">{i + 1}</span>
              <h3>
                Pasul {i + 1} · {s.title}
              </h3>
              <p>{s.text}</p>
              <span className="step__line" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="services__foot reveal">
          <p>
            <strong>Începe cu pasul 1.</strong> Un apel scurt și îți spunem imediat cum rezolvăm.
          </p>
          <a className="btn btn--blue btn--pulse" href={PHONE_TEL}>
            <PhoneIcon /> Sună Acum
          </a>
        </div>
      </div>
    </section>
  )
}
