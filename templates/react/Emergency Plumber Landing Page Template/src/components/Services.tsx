import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL, SERVICES } from '../data'
import { ArrowIcon, PhoneIcon, ServiceIcon } from './Icons'

function tone(tag: string) {
  if (tag === 'Urgență') return 'urgent'
  if (tag === 'Non-stop') return 'live'
  return 'default'
}

type Props = {
  onRequest: (service: string) => void
  /** Limits how many services are rendered (used for the home preview). */
  limit?: number
  /** Shows a "see all services" link instead of the phone CTA. */
  moreTo?: string
  heading?: string
}

export default function Services({ onRequest, limit, moreTo, heading }: Props) {
  const list = typeof limit === 'number' ? SERVICES.slice(0, limit) : SERVICES

  return (
    <section className="section section--tint" id="servicii">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">
            <span className="dot" /> Servicii instalator
          </span>
          <h2 className="section-title">
            {heading ?? (
              <>
                Reparații instalații sanitare și{' '}
                <span className="grad">montaj obiecte sanitare</span>
              </>
            )}
          </h2>
          <p className="section-sub">
            De la desfundări canalizare până la instalații sanitare complete: intervenim rapid, cu
            scule profesionale și garanție pentru fiecare lucrare.
          </p>
        </header>

        <div className="cards">
          {list.map((s) => (
            <article className="card reveal" key={s.id}>
              <span className="card__tag" data-tone={tone(s.tag)}>
                {s.tag}
              </span>
              <span className="card__icon">
                <ServiceIcon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="card__foot">
                <button
                  type="button"
                  className="card__btn"
                  onClick={() => onRequest(s.title)}
                >
                  Solicită Intervenție <ArrowIcon />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="services__foot reveal">
          {moreTo ? (
            <>
              <p>
                <strong>Vezi lista completă de servicii.</strong> Peste {SERVICES.length} tipuri de
                lucrări sanitare, cu detalii și timpi de intervenție.
              </p>
              <Link className="btn btn--blue" to={moreTo}>
                Vezi toate serviciile <ArrowIcon />
              </Link>
            </>
          ) : (
            <>
              <p>
                <strong>Nu găsești lucrarea ta în listă?</strong> Descrie problema și primești o
                estimare rapidă de la un instalator la domiciliu.
              </p>
              <a className="btn btn--blue" href={PHONE_TEL}>
                <PhoneIcon /> Sună la {PHONE_DISPLAY}
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
