import type { ReactNode } from 'react'
import { PHONE_TEL, WHATSAPP } from '../site'
import {
  IconArrow,
  IconBoiler,
  IconDrain,
  IconDrop,
  IconFaucet,
  IconPhone,
  IconPipe,
  IconShower,
  IconSink,
  IconSiren,
  IconSystem,
  IconToilet,
  IconWhatsapp
} from './Icons'

type Service = {
  title: string
  text: string
  icon: ReactNode
  urgent?: boolean
}

const SERVICES: Service[] = [
  {
    title: 'Desfundări 24/24',
    text: 'Desfundări canalizare, sifoane și coloane blocate, cu echipamente profesionale, non-stop.',
    icon: <IconDrain />,
    urgent: true
  },
  {
    title: 'Reparații țevi apă',
    text: 'Identificăm și reparăm țevi sparte sau fisurate, cu minim de intervenție la pereți.',
    icon: <IconPipe />
  },
  {
    title: 'Înlocuire baterii sanitare',
    text: 'Montaj și înlocuire baterii bucătărie, baie sau duș, inclusiv racorduri noi.',
    icon: <IconFaucet />
  },
  {
    title: 'Montaj cabine de duș',
    text: 'Asamblare și montaj cabine de duș cu etanșare corectă și verificare la scurgeri.',
    icon: <IconShower />
  },
  {
    title: 'Montaj vase WC',
    text: 'Montaj vas WC clasic sau suspendat, rezervor încastrat și racordare completă.',
    icon: <IconToilet />
  },
  {
    title: 'Montaj chiuvete',
    text: 'Montaj chiuvete bucătărie și lavoare baie, sifon, preaplin și racorduri flexibile.',
    icon: <IconSink />
  },
  {
    title: 'Montaj boilere',
    text: 'Montaj și înlocuire boilere electrice sau instant, cu grup de siguranță inclus.',
    icon: <IconBoiler />
  },
  {
    title: 'Reparații scurgeri',
    text: 'Detectăm și oprim scurgerile ascunse de la instalații, robineți sau îmbinări.',
    icon: <IconDrop />
  },
  {
    title: 'Instalații sanitare complete',
    text: 'Instalații sanitare complete pentru apartament, casă sau renovare la cheie.',
    icon: <IconSystem />
  },
  {
    title: 'Intervenții de urgență',
    text: 'Intervenții urgente instalații: inundații, avarii, presiune pierdută, seara și noaptea.',
    icon: <IconSiren />,
    urgent: true
  }
]

export default function Services() {
  return (
    <section className="section" id="servicii">
      <div className="shell">
        <div className="section-head reveal">
          <span className="eyebrow">Servicii instalator 24/24</span>
          <h2 className="section-title">
            Intervenții sanitare complete, <span className="grad-text">executate profesionist</span>
          </h2>
          <p className="section-sub">
            De la desfundări canalizare și reparații instalații sanitare, până la montaj obiecte
            sanitare. Instalator la domiciliu, disponibil non-stop.
          </p>
        </div>

        <div className="grid grid--3">
          {SERVICES.map((service, index) => (
            <article className="card reveal" key={service.title}>
              <span className="service-card__num">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={`icon-tile${service.urgent ? ' icon-tile--green' : ''}`}>
                {service.icon}
              </span>
              <h3 className="card__title">{service.title}</h3>
              <p className="card__text">{service.text}</p>
              <a className="card__link" href="#formular">
                Solicită Intervenție <IconArrow size={17} />
              </a>
            </article>
          ))}
        </div>

        <div
          className="panel reveal"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 18,
            flexWrap: 'wrap',
            marginTop: 22
          }}
        >
          <div>
            <h3 style={{ fontSize: 21 }}>Nu găsești serviciul de care ai nevoie?</h3>
            <p className="panel__sub" style={{ marginTop: 6 }}>
              Descrie problema pe WhatsApp sau telefonic și primești o estimare rapidă.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a className="btn btn--blue" href={PHONE_TEL}>
              <IconPhone size={18} /> Sună Acum
            </a>
            <a
              className="btn btn--green"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsapp size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
