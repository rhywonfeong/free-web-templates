import { PHONE_TEL, WHATSAPP_URL } from '../data'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export default function FloatingCta({ onRequest }: { onRequest: () => void }) {
  return (
    <>
      <a
        className="float-wa"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrie pe WhatsApp la +40 720 423 076"
      >
        <WhatsAppIcon />
        <span className="float-wa__txt">WhatsApp 24/24</span>
      </a>

      <div className="float-bar">
        <a className="btn btn--blue" href={PHONE_TEL}>
          <PhoneIcon /> Sună Acum
        </a>
        <button type="button" className="btn btn--ghost" onClick={onRequest}>
          Solicită Intervenție
        </button>
      </div>
    </>
  )
}
