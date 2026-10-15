import { IconStar } from './Icons'

const REVIEWS = [
  {
    quote:
      'Am avut o țeavă spartă într-o duminică seară. A ajuns foarte repede și a rezolvat problema impecabil. Recomand cu încredere.',
    author: 'Andrei M.',
    meta: 'Reparație țeavă apă · intervenție urgentă'
  },
  {
    quote: 'Profesionalism, punctualitate și preț corect. Cu siguranță voi apela din nou.',
    author: 'Cristina P.',
    meta: 'Intervenție sanitară la domiciliu'
  },
  {
    quote: 'Montajul boilerului a fost realizat perfect. Foarte mulțumit de lucrare.',
    author: 'Mihai D.',
    meta: 'Montaj boiler electric'
  }
]

export function Stars({ size = 15 }: { size?: number }) {
  return (
    <span className="stars" aria-label="5 stele din 5">
      {[0, 1, 2, 3, 4].map((index) => (
        <IconStar key={index} size={size} />
      ))}
    </span>
  )
}

export default function Reviews() {
  return (
    <section className="section section--alt" id="recenzii">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Recenzii clienți</span>
          <h2 className="section-title">
            Ce spun clienții despre <span className="grad-text">intervențiile noastre</span>
          </h2>
        </div>

        <div className="rating-summary reveal">
          <span className="rating-summary__score">5.0</span>
          <Stars size={19} />
          <span style={{ color: 'var(--muted)', fontSize: 14.5 }}>
            din recenzii reale ale clienților
          </span>
        </div>

        <div className="grid grid--3">
          {REVIEWS.map((review) => (
            <article className="card review reveal" key={review.author}>
              <Stars />
              <p className="review__quote">
                <span className="review__mark" aria-hidden="true">
                  “
                </span>
                {review.quote}
              </p>
              <div className="review__author">
                <span className="avatar" aria-hidden="true">
                  {review.author.charAt(0)}
                </span>
                <span>
                  <b>{review.author}</b>
                  <small>{review.meta}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
