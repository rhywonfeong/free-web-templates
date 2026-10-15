import { useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, SERVICE_TYPES, WHATSAPP } from '../site'
import {
  IconArrow,
  IconBolt,
  IconCamera,
  IconCheckBig,
  IconClock,
  IconPhone,
  IconShield,
  IconWhatsapp
} from './Icons'

const QUICK_TYPES = [
  'Desfundări 24/24',
  'Reparații țevi apă',
  'Montaj boilere',
  'Montaj vase WC',
  'Reparații scurgeri',
  'Intervenții de urgență'
]

type FormState = {
  name: string
  phone: string
  email: string
  address: string
  service: string
  message: string
}

const EMPTY: FormState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  service: '',
  message: ''
}

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [fileName, setFileName] = useState('')
  const [sent, setSent] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const update = (key: keyof FormState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [key]: event.target.value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  const reset = () => {
    setForm(EMPTY)
    setFileName('')
    setSent(false)
    if (fileRef.current) fileRef.current.value = ''
  }

  return (
    <section className="section" id="formular">
      <div className="shell">
        <div className="contact-wrap">
          {/* ---------- CTA copy + proof ---------- */}
          <div className="panel reveal">
            <span className="eyebrow">Formular client</span>
            <h2 className="panel__title">
              Primești estimare rapidă și <span className="grad-text">intervenție programată</span>
            </h2>
            <p className="panel__sub">
              Completează formularul în mai puțin de un minut. Un instalator autorizat te contactează
              pentru confirmarea intervenției sanitare — inclusiv noaptea și în weekend.
            </p>

            <ul className="cta-copy__list">
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>
                Răspuns rapid la solicitări, non-stop 24/24
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>
                Estimare de preț transparentă, înainte de deplasare
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>
                Poți încărca o fotografie pentru evaluare corectă
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>
                Garanție pentru lucrare și materiale montate
              </li>
            </ul>

            <div className="proof">
              <div className="proof__item">
                <b>14+</b>
                <span>ani experiență</span>
              </div>
              <div className="proof__item">
                <b>24/24</b>
                <span>disponibilitate</span>
              </div>
              <div className="proof__item">
                <b>5.0★</b>
                <span>recenzii clienți</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
              <a className="btn btn--blue" href={PHONE_TEL}>
                <IconPhone size={18} /> {PHONE_DISPLAY}
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

          {/* ---------- Form panel ---------- */}
          <div className="panel panel--form reveal">
            {sent ? (
              <div className="success">
                <span className="success__icon">
                  <IconCheckBig size={34} />
                </span>
                <h3>Solicitarea a fost trimisă cu succes.</h3>
                <p>Veți fi contactat în cel mai scurt timp.</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6 }}>
                  <a className="btn btn--blue" href={PHONE_TEL}>
                    <IconPhone size={18} /> Sună acum pentru urgență
                  </a>
                  <a
                    className="btn btn--green"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconWhatsapp size={18} /> Trimite poze pe WhatsApp
                  </a>
                </div>
                <button className="btn btn--ghost btn--sm" type="button" onClick={reset}>
                  Trimite o altă solicitare
                </button>
              </div>
            ) : (
              <>
                <h2 className="panel__title">Spune-ne cu ce te putem ajuta</h2>
                <p className="panel__sub">
                  Alege tipul de serviciu și descrie problema. Câmpurile marcate cu{' '}
                  <i style={{ color: '#ff7a72', fontStyle: 'normal' }}>*</i> sunt obligatorii.
                </p>

                <div style={{ marginTop: 20 }}>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: '0.03em',
                      color: '#c3cddf'
                    }}
                  >
                    Tip serviciu solicitat frecvent
                  </span>
                  <div className="chips">
                    {QUICK_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`chip${form.service === type ? ' is-active' : ''}`}
                        onClick={() => setForm((prev) => ({ ...prev, service: type }))}
                        aria-pressed={form.service === type}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <form className="form" onSubmit={handleSubmit} noValidate={false}>
                  <div className="form__grid">
                    <div className="field">
                      <label htmlFor="lf-name">
                        Nume <i>*</i>
                      </label>
                      <input
                        id="lf-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Numele și prenumele"
                        value={form.name}
                        onChange={update('name')}
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="lf-phone">
                        Telefon <i>*</i>
                      </label>
                      <input
                        id="lf-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="07xx xxx xxx"
                        value={form.phone}
                        onChange={update('phone')}
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="lf-email">Email</label>
                      <input
                        id="lf-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="nume@email.ro"
                        value={form.email}
                        onChange={update('email')}
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="lf-address">
                        Adresă <i>*</i>
                      </label>
                      <input
                        id="lf-address"
                        name="address"
                        type="text"
                        required
                        autoComplete="street-address"
                        placeholder="Stradă, număr, oraș"
                        value={form.address}
                        onChange={update('address')}
                      />
                    </div>

                    <div className="field field--full">
                      <label htmlFor="lf-service">
                        Tip serviciu <i>*</i>
                      </label>
                      <select
                        id="lf-service"
                        name="service"
                        required
                        value={form.service}
                        onChange={update('service')}
                      >
                        <option value="">Selectează tipul de serviciu</option>
                        {SERVICE_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="field field--full">
                      <label htmlFor="lf-message">
                        Descriere problemă <i>*</i>
                      </label>
                      <textarea
                        id="lf-message"
                        name="message"
                        required
                        placeholder="Descrie pe scurt problema: ce nu funcționează, de când, ce ai încercat deja."
                        value={form.message}
                        onChange={update('message')}
                      />
                    </div>

                    <div className="field field--full">
                      <label htmlFor="lf-photo">Încarcă fotografie</label>
                      <label className="upload" htmlFor="lf-photo">
                        <span className="upload__icon">
                          <IconCamera size={20} />
                        </span>
                        <span className="upload__text">
                          <b>{fileName || 'Adaugă o poză cu problema'}</b>
                          <span>JPG sau PNG · ajută la o estimare mai exactă</span>
                        </span>
                        <input
                          id="lf-photo"
                          ref={fileRef}
                          type="file"
                          name="photo"
                          accept="image/*"
                          onChange={(event) =>
                            setFileName(event.target.files?.[0]?.name ?? '')
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <div className="form__submit">
                    <p className="form__note">
                      Prin trimiterea formularului accepți să fii contactat telefonic sau pe
                      WhatsApp în legătură cu solicitarea ta.
                    </p>
                    <button className="btn btn--blue btn--lg btn--pulse" type="submit">
                      <IconBolt size={19} /> Trimite Solicitarea <IconArrow size={18} />
                    </button>
                  </div>

                  <div className="form__badges">
                    <span className="badge">
                      <IconClock size={14} /> Răspuns rapid 24/24
                    </span>
                    <span className="badge">
                      <IconShield size={14} /> Instalator autorizat
                    </span>
                    <span className="badge">
                      <IconCheckBig size={14} /> Garanție pentru lucrări
                    </span>
                    <span className="badge">
                      <IconWhatsapp size={14} /> Evaluare pe WhatsApp
                    </span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
