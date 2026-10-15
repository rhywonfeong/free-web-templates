import { Link } from 'react-router-dom'
import { PHONE_TEL, WHATSAPP_URL } from '../data'
import { ArrowIcon, CheckIcon, PhoneIcon, ShieldIcon, WhatsAppIcon } from './Icons'

const POINTS = [
  {
    title: 'Instalator autorizat, nu improvizații',
    text: 'Lucrări executate conform normelor, cu materiale verificate și racorduri sigure.',
  },
  {
    title: 'Diagnostic corect din prima vizită',
    text: 'Identificăm cauza reală a scurgerii sau a înfundării, nu doar efectul vizibil.',
  },
  {
    title: 'Curățenie la finalul lucrării',
    text: 'Protejăm suprafețele și lăsăm spațiul curat după fiecare intervenție sanitară.',
  },
]

export default function About({ moreTo }: { moreTo?: string } = {}) {
  return (
    <section className="section section--tint" id="despre-noi">
      <div className="shell about">
        <div className="about__media reveal" role="img" aria-label="Instalator profesionist lucrând la o instalație sanitară modernă">
          <div className="about__badge">
            <ShieldIcon />
            <span>
              <b>Garanție pentru lucrări</b>
              <span>Manoperă și piese montate</span>
            </span>
          </div>
        </div>

        <div className="reveal">
          <header className="section-head section-head--left">
            <span className="eyebrow">Despre noi</span>
            <h2 className="section-title">
              Peste 14 ani de <span className="grad">instalații sanitare</span> făcute ca la carte
            </h2>
            <p className="section-sub">
              InstalatorulTau24.ro este echipa la care apelezi când ai nevoie de un instalator la
              domiciliu, rapid și corect. Am rezolvat mii de urgențe: desfundări canalizare,
              reparații țevi, montaj obiecte sanitare și instalații complete pentru apartamente și
              case.
            </p>
          </header>

          <ul className="about__list">
            {POINTS.map((p) => (
              <li key={p.title}>
                <CheckIcon />
                <span>
                  <b>{p.title}</b>
                  <span>{p.text}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="about__stats">
            <div className="stat">
              <b>14+</b>
              <span>ani experiență</span>
            </div>
            <div className="stat">
              <b>2500+</b>
              <span>intervenții</span>
            </div>
            <div className="stat">
              <b>24/24</b>
              <span>disponibilitate</span>
            </div>
          </div>

          <div className="about__cta">
            <a className="btn btn--blue" href={PHONE_TEL}>
              <PhoneIcon /> Sună Acum
            </a>
            {moreTo ? (
              <Link className="btn btn--ghost" to={moreTo}>
                Despre noi <ArrowIcon />
              </Link>
            ) : (
              <a
                className="btn btn--ghost"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> Discută pe WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
