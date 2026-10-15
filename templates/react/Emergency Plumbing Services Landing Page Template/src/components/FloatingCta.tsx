import { PHONE_TEL, WHATSAPP } from '../site'
import { IconPhone, IconWhatsapp } from './Icons'

export default function FloatingCta() {
  return (
    <>
      {/* Desktop / tablet floating stack */}
      <div className="fab-stack">
        <a
          className="fab fab--wa"
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrie-ne pe WhatsApp"
        >
          <span className="fab__ping" aria-hidden="true" />
          <IconWhatsapp size={21} /> WhatsApp
        </a>
        <a className="fab fab--call" href={PHONE_TEL} aria-label="Sună acum">
          <IconPhone size={20} /> Sună Acum
        </a>
      </div>

      {/* Mobile sticky conversion bar */}
      <div className="mobile-bar">
        <a className="btn btn--blue" href={PHONE_TEL}>
          <IconPhone size={19} /> Sună Acum
        </a>
        <a className="btn btn--green" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          <IconWhatsapp size={19} /> WhatsApp
        </a>
      </div>
    </>
  )
}
