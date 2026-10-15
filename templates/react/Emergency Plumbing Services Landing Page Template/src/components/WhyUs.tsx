import { PHONE_TEL, WHATSAPP } from '../site'
import { IconBolt, IconClock, IconMedal, IconPhone, IconShield, IconWhatsapp } from './Icons'

const REASONS = [
  {
    title: 'Intervenție Rapidă',
    text: 'Ajungem în cel mai scurt timp posibil.',
    kpi: 'Program flexibil · rută optimizată',
    icon: <IconBolt />
  },
  {
    title: 'Experiență',
    text: 'Peste 14 ani în domeniul instalațiilor.',
    kpi: '14+ ani · instalator autorizat',
    icon: <IconMedal />
  },
  {
    title: 'Disponibilitate 24/24',
    text: 'Suntem disponibili inclusiv seara, noaptea și în weekend.',
    kpi: '24 ore / 7 zile',
    icon: <IconClock />
  },
  {
    title: 'Preț Corect',
    text: 'Oferim soluții eficiente și transparente.',
    kpi: 'Prețuri transparente · fără costuri ascunse',
    icon: <IconShield />
  }
]

export default function WhyUs() {
  return (
    <section className="section section--alt" id="despre">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Despre noi</span>
          <h2 className="section-title">
            De ce să ne alegi ca <span className="grad-text">instalator autorizat</span>
          </h2>
          <p className="section-sub">
            Lucrăm curat, explicăm soluția înainte de a începe și oferim garanție pentru fiecare
            lucrare de instalații sanitare.
          </p>
        </div>

        <div className="grid grid--4">
          {REASONS.map((reason) => (
            <article className="card why-card reveal" key={reason.title}>
              <span className="icon-tile">{reason.icon}</span>
              <h3 className="card__title">{reason.title}</h3>
              <p className="card__text">{reason.text}</p>
              <div className="why-card__kpi">{reason.kpi}</div>
            </article>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 30
          }}
        >
          <a className="btn btn--blue btn--lg" href={PHONE_TEL}>
            <IconPhone size={18} /> Cere intervenție telefonic
          </a>
          <a
            className="btn btn--green btn--lg"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsapp size={18} /> Trimite poze pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
