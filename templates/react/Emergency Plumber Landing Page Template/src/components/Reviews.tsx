import { Link } from 'react-router-dom'
import { REVIEWS, WHATSAPP_URL } from '../data'
import { ArrowIcon, StarIcon, WhatsAppIcon } from './Icons'

function Stars() {
  return (
    <span className="stars" aria-label="5 stele din 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} />
      ))}
    </span>
  )
}

export default function Reviews({ limit, moreTo }: { limit?: number; moreTo?: string } = {}) {
  const list = typeof limit === 'number' ? REVIEWS.slice(0, limit) : REVIEWS

  return (
    <section className="section section--tint" id="recenzii">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">Recenzii clienți</span>
          <h2 className="section-title">
            Ce spun oamenii despre <span className="grad">instalatorul lor 24/24</span>
          </h2>
          <p className="section-sub">
            Recenzii reale de la clienți care au avut nevoie de intervenții urgente și de montaj
            obiecte sanitare.
          </p>
        </header>

        <div className="cards">
          {list.map((r) => (
            <article className="review reveal" key={r.author}>
              <span className="review__quote" aria-hidden="true">
                &rdquo;
              </span>
              <Stars />
              <p>{r.text}</p>
              <div className="review__author">
                <span className="avatar">{r.initials}</span>
                <span>
                  <b>{r.author}</b>
                  <span>{r.meta}</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews__bar reveal">
          <span>
            <b>5.0</b> rating mediu
          </span>
          <Stars />
          <span>
            Peste <b>120</b> de clienți mulțumiți · <b>garanție</b> pentru lucrări
          </span>
          {moreTo ? (
            <Link className="btn btn--blue btn--sm" to={moreTo}>
              Vezi toate recenziile <ArrowIcon />
            </Link>
          ) : (
            <a
              className="btn btn--green btn--sm"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Cere o recomandare
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
