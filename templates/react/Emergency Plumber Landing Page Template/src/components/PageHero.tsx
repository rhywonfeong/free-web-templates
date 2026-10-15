import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../data'
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from './Icons'

type Props = {
  eyebrow: string
  title: ReactNode
  sub: string
  bullets?: string[]
  onRequest?: () => void
  ctaLabel?: string
}

export default function PageHero({
  eyebrow,
  title,
  sub,
  bullets = [],
  onRequest,
  ctaLabel = 'Solicită Intervenție',
}: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="page-hero__grid" aria-hidden="true" />

      <div className="shell page-hero__in">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Acasă</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>

        <span className="eyebrow">
          <span className="dot" /> {eyebrow}
        </span>

        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__sub">{sub}</p>

        {bullets.length > 0 && (
          <ul className="page-hero__tags">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}

        <div className="page-hero__cta">
          <a className="btn btn--blue btn--lg btn--pulse" href={PHONE_TEL}>
            <PhoneIcon /> {PHONE_DISPLAY}
          </a>
          <a
            className="btn btn--green btn--lg"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
          {onRequest && (
            <button type="button" className="btn btn--ghost btn--lg" onClick={onRequest}>
              {ctaLabel} <ArrowIcon />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
