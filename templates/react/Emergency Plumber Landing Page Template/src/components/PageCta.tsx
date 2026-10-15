import { Link } from 'react-router-dom'
import { ArrowIcon } from './Icons'

type Props = {
  title: string
  text: string
  to: string
  label: string
  tone?: 'tint' | 'dark'
}

export default function PageCta({ title, text, to, label, tone = 'tint' }: Props) {
  return (
    <section className={`section section--${tone} section--slim`}>
      <div className="shell">
        <div className="services__foot reveal">
          <p>
            <strong>{title}</strong> {text}
          </p>
          <Link className="btn btn--blue" to={to}>
            {label} <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
