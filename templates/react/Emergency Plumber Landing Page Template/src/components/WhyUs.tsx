import { REASONS, WHATSAPP_URL } from '../data'
import { ServiceIcon, WhatsAppIcon } from './Icons'

export default function WhyUs() {
  return (
    <section className="section section--dark" aria-labelledby="de-ce-noi">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">De ce să ne alegi</span>
          <h2 className="section-title" id="de-ce-noi">
            Un instalator pe care te poți <span className="grad">baza oricând</span>
          </h2>
          <p className="section-sub">
            Lucrăm curat, explicăm ce reparăm și îți spunem prețul înainte de a începe lucrarea.
          </p>
        </header>

        <div className="cards">
          {REASONS.map((r, i) => (
            <article className="why-card reveal" key={r.title}>
              <span className="why-card__num">{i + 1}</span>
              <span className="why-card__icon">
                <ServiceIcon name={r.icon} />
              </span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>

        <div className="services__foot reveal">
          <p>
            <strong>Vrei o estimare în 2 minute?</strong> Trimite o poză cu problema pe WhatsApp.
          </p>
          <a
            className="btn btn--green"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Trimite poză pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
