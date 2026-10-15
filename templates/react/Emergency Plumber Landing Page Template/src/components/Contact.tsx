import {
  EMAIL,
  EMAIL_HREF,
  FACEBOOK_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  WHATSAPP_URL,
} from '../data'
import {
  ArrowIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TikTokIcon,
  WhatsAppIcon,
} from './Icons'

export default function Contact({ onRequest }: { onRequest: () => void }) {
  return (
    <section className="section section--dark" id="contact">
      <div className="shell">
        <header className="section-head reveal">
          <span className="eyebrow">
            <span className="dot" /> Contact
          </span>
          <h2 className="section-title">
            Sună, scrie pe WhatsApp sau <span className="grad">trimite un email</span>
          </h2>
          <p className="section-sub">
            Alege modul preferat de contact. Pentru urgențe, apelul telefonic rămâne cea mai
            rapidă variantă.
          </p>
        </header>

        <div className="contact-grid">
          <a className="contact-card contact-card--phone reveal" href={PHONE_TEL}>
            <span className="contact-card__icon">
              <PhoneIcon />
            </span>
            <small>Telefon</small>
            <b>{PHONE_DISPLAY}</b>
            <p>Apel direct către instalator, non-stop.</p>
            <span className="go">
              Sună Acum <ArrowIcon />
            </span>
          </a>

          <a
            className="contact-card contact-card--wa reveal"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon">
              <WhatsAppIcon />
            </span>
            <small>WhatsApp</small>
            <b>{PHONE_DISPLAY}</b>
            <p>Trimite poze cu problema pentru evaluare rapidă.</p>
            <span className="go">
              Deschide conversația <ArrowIcon />
            </span>
          </a>

          <a className="contact-card reveal" href={EMAIL_HREF}>
            <span className="contact-card__icon">
              <MailIcon />
            </span>
            <small>Email</small>
            <b>{EMAIL}</b>
            <p>Pentru oferte, devize și lucrări planificate.</p>
            <span className="go">
              Scrie un email <ArrowIcon />
            </span>
          </a>

          <a
            className="contact-card contact-card--fb reveal"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon">
              <FacebookIcon />
            </span>
            <small>Facebook</small>
            <b>InstalatorulTau24.ro</b>
            <p>Vezi lucrări recente și recenzii de la clienți.</p>
            <span className="go">
              Vizitează pagina <ArrowIcon />
            </span>
          </a>

          <a
            className="contact-card contact-card--tt reveal"
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon">
              <TikTokIcon />
            </span>
            <small>TikTok</small>
            <b>{TIKTOK_HANDLE}</b>
            <p>Filmări din intervenții reale și sfaturi de la instalator.</p>
            <span className="go">
              Urmărește-ne pe TikTok <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="schedule reveal">
          <div>
            <h3>Program: disponibilitate non-stop</h3>
            <p>
              Intervenim <strong>24 ore din 24</strong> și <strong>7 zile din 7</strong>, inclusiv
              seara, noaptea, în weekend și de sărbători. Deplasare rapidă pentru urgențe
              sanitare.
            </p>
            <div className="about__cta">
              <a className="btn btn--blue" href={PHONE_TEL}>
                <PhoneIcon /> Sună Acum
              </a>
              <a className="btn btn--ghost" href={EMAIL_HREF}>
                <MailIcon /> {EMAIL}
              </a>
              <button type="button" className="btn btn--ghost" onClick={onRequest}>
                Solicită Intervenție <ArrowIcon />
              </button>
            </div>
          </div>

          <div className="schedule__clock">
            <div className="clock-pill">
              <b>24</b>
              <span>ore din 24</span>
            </div>
            <div className="clock-pill">
              <b>7</b>
              <span>zile din 7</span>
            </div>
            <div className="clock-pill">
              <b>
                <PinIcon />
              </b>
              <span>la domiciliu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
