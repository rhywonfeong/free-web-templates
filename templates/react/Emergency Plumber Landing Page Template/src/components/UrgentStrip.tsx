import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../data'
import { PhoneIcon, ServiceIcon, WhatsAppIcon } from './Icons'

export default function UrgentStrip() {
  return (
    <section className="urgent" aria-label="Intervenții urgente instalații sanitare">
      <div className="shell urgent__in">
        <div className="urgent__txt">
          <ServiceIcon name="emergency" />
          <div>
            <strong>Urgență? Țeavă spartă, inundație sau canalizare înfundată?</strong>
            <span>Intervenții urgente instalații sanitare, non-stop, în toată zona.</span>
          </div>
        </div>
        <div className="urgent__cta">
          <a className="btn btn--light" href={PHONE_TEL}>
            <PhoneIcon /> {PHONE_DISPLAY}
          </a>
          <a
            className="btn btn--green"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Scrie pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
