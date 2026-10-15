import {
  EMAIL_DISPLAY,
  EMAIL_HREF,
  FACEBOOK,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP
} from '../site'
import {
  IconArrow,
  IconClock,
  IconFacebook,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsapp
} from './Icons'

export default function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow eyebrow--green">Contact non-stop</span>
          <h2 className="section-title">
            Un apel și <span className="grad-text">instalatorul e pe drum</span>
          </h2>
          <p className="section-sub">
            Alege canalul preferat. Răspundem la telefon, WhatsApp și email, 24 ore din 24, 7 zile
            din 7.
          </p>
        </div>

        <div className="contact-wrap">
          <div className="panel reveal">
            <h3 className="panel__title" style={{ fontSize: 22 }}>
              Canale de contact directe
            </h3>
            <p className="panel__sub" style={{ marginBottom: 18 }}>
              Toate butoanele funcționează cu un singur click, de pe telefon sau desktop.
            </p>

            <div className="channels">
              <a className="channel" href={PHONE_TEL}>
                <span className="channel__icon">
                  <IconPhone size={21} />
                </span>
                <span className="channel__meta">
                  <small>Telefon · click-to-call</small>
                  <b>{PHONE_DISPLAY}</b>
                </span>
                <IconArrow size={19} className="channel__arrow" />
              </a>

              <a
                className="channel channel--green"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="channel__icon">
                  <IconWhatsapp size={21} />
                </span>
                <span className="channel__meta">
                  <small>WhatsApp · conversație directă</small>
                  <b>Scrie-ne pe WhatsApp</b>
                </span>
                <IconArrow size={19} className="channel__arrow" />
              </a>

              <a className="channel" href={EMAIL_HREF}>
                <span className="channel__icon">
                  <IconMail size={21} />
                </span>
                <span className="channel__meta">
                  <small>Email · click-to-email</small>
                  <b>{EMAIL_DISPLAY}</b>
                </span>
                <IconArrow size={19} className="channel__arrow" />
              </a>

              <a
                className="channel"
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="channel__icon">
                  <IconFacebook size={20} />
                </span>
                <span className="channel__meta">
                  <small>Facebook · pagina oficială</small>
                  <b>InstalatorulTau24.ro</b>
                </span>
                <IconArrow size={19} className="channel__arrow" />
              </a>
            </div>
          </div>

          <div className="panel reveal">
            <h3 className="panel__title" style={{ fontSize: 22 }}>
              Program de lucru
            </h3>
            <p className="panel__sub">
              Disponibilitate: 24 ore din 24, 7 zile din 7 — inclusiv seara, noaptea, în weekend și
              de sărbători.
            </p>

            <div className="schedule">
              <div className="schedule__head">
                <IconClock size={19} /> Non-stop 24/24 · 7 zile din 7
              </div>
              <div className="schedule__rows">
                <div className="schedule__row">
                  <span>Luni – Vineri</span>
                  <b>00:00 – 24:00</b>
                </div>
                <div className="schedule__row">
                  <span>Sâmbătă – Duminică</span>
                  <b>00:00 – 24:00</b>
                </div>
                <div className="schedule__row">
                  <span>Sărbători legale</span>
                  <b>Non-stop</b>
                </div>
                <div className="schedule__row">
                  <span>Urgențe instalații</span>
                  <b>Prioritate imediată</b>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 18,
                color: 'var(--muted)',
                fontSize: 14.5
              }}
            >
              <span className="channel__icon" style={{ width: 40, height: 40 }}>
                <IconPin size={19} />
              </span>
              Deplasări pentru intervenții sanitare la domiciliu, în oraș și zonele limitrofe.
            </div>

            <div style={{ display: 'grid', gap: 10, marginTop: 20 }}>
              <a className="btn btn--blue btn--block btn--lg btn--pulse" href={PHONE_TEL}>
                <IconPhone size={19} /> Sună Acum · {PHONE_DISPLAY}
              </a>
              <a
                className="btn btn--green btn--block btn--lg"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsapp size={19} /> Deschide conversația WhatsApp
              </a>
              <a className="btn btn--ghost btn--block" href="#formular">
                Completează formularul de solicitare
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
