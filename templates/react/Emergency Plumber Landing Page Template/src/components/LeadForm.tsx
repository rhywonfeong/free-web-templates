import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import {
  EMAIL,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_OPTIONS,
  WHATSAPP_URL,
} from '../data'
import {
  CheckIcon,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
  UploadIcon,
  WhatsAppIcon,
} from './Icons'
import { sendGaEvent } from '../hooks'

type Values = {
  nume: string
  telefon: string
  email: string
  adresa: string
  serviciu: string
  descriere: string
}

type Errors = Partial<Record<keyof Values, string>>

const EMPTY: Values = {
  nume: '',
  telefon: '',
  email: '',
  adresa: '',
  serviciu: '',
  descriere: '',
}

const URGENCY = ['Urgent – acum', 'Astăzi', 'În 2-3 zile', 'Doar o estimare']

const POINTS = [
  'Răspundem la fiecare solicitare, non-stop',
  'Estimare orientativă înainte de deplasare',
  'Instalator autorizat, cu peste 14 ani experiență',
  'Garanție pentru lucrările efectuate',
]

export default function LeadForm({ preselect }: { preselect: { value: string; n: number } }) {
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [urgency, setUrgency] = useState(URGENCY[0])
  const [fileName, setFileName] = useState('')
  const [sent, setSent] = useState(false)
  const serviceRef = useRef<HTMLSelectElement | null>(null)
  // Guarantees exactly one `generate_lead` hit per successful submission.
  const leadTrackedRef = useRef(false)

  /**
   * Fires the GA4 conversion only once the submission has actually succeeded
   * (validation passed and the confirmation panel is rendered) — never on a
   * plain submit-button click. No form field values are sent to Analytics.
   */
  useEffect(() => {
    if (!sent) {
      // Back to an editable form — arm the tracker for the next submission.
      leadTrackedRef.current = false
      return
    }
    if (leadTrackedRef.current) return
    leadTrackedRef.current = true
    sendGaEvent('generate_lead', { form_name: 'contact_form' })
  }, [sent])

  useEffect(() => {
    if (!preselect.value) return
    const match = SERVICE_OPTIONS.find((o) =>
      o.toLowerCase().includes(preselect.value.toLowerCase().split(' ')[0])
    )
    setSent(false)
    setValues((v) => ({ ...v, serviciu: match ?? SERVICE_OPTIONS[SERVICE_OPTIONS.length - 1] }))
    const t = window.setTimeout(() => serviceRef.current?.focus({ preventScroll: true }), 480)
    return () => window.clearTimeout(t)
  }, [preselect])

  const set = (key: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const val = e.target.value
    setValues((v) => ({ ...v, [key]: val }))
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0]
    setFileName(f ? f.name : '')
  }

  const validate = (v: Values): Errors => {
    const next: Errors = {}
    if (v.nume.trim().length < 3) next.nume = 'Te rugăm să introduci numele complet.'
    if (!/^[0-9+()\s.-]{9,}$/.test(v.telefon.trim()))
      next.telefon = 'Introdu un număr de telefon valid, ex: 0720 423 076.'
    if (v.email.trim() && !/^\S+@\S+\.\S{2,}$/.test(v.email.trim()))
      next.email = 'Adresa de email nu pare corectă.'
    if (!v.serviciu) next.serviciu = 'Alege tipul de serviciu de care ai nevoie.'
    if (v.descriere.trim().length < 10)
      next.descriere = 'Descrie pe scurt problema (minim 10 caractere).'
    return next
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length > 0) return
    setSent(true)
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setFileName('')
    setUrgency(URGENCY[0])
    setSent(false)
  }

  return (
    <section className="section section--tint" id="formular">
      <div className="shell lead">
        <div className="lead__aside reveal">
          <header className="section-head section-head--left">
            <span className="eyebrow">
              <span className="dot" /> Formular client
            </span>
            <h2 className="section-title">
              Spune-ne cu ce te putem <span className="grad">ajuta</span>
            </h2>
            <p className="section-sub">
              Completează formularul în mai puțin de un minut. Te contactăm rapid cu o estimare
              pentru intervenție sau montaj obiecte sanitare.
            </p>
          </header>

          <ul className="lead__points">
            {POINTS.map((p) => (
              <li key={p}>
                <CheckIcon /> {p}
              </li>
            ))}
          </ul>

          <div className="lead__proof">
            <div className="proof">
              <b>&lt; 5 min</b>
              <span>timp mediu de răspuns</span>
            </div>
            <div className="proof">
              <b>24/24</b>
              <span>preluăm solicitări</span>
            </div>
            <div className="proof">
              <b>5.0★</b>
              <span>rating clienți</span>
            </div>
          </div>

          <a className="lead__call" href={PHONE_TEL}>
            <PhoneIcon />
            <span>
              <b>Preferi să vorbim direct? {PHONE_DISPLAY}</b>
              <span>Apel gratuit, non-stop, inclusiv în weekend.</span>
            </span>
          </a>
        </div>

        <div className="form-panel reveal">
          {sent ? (
            <div className="success" role="status" aria-live="polite">
              <span className="success__ring">
                <CheckIcon />
              </span>
              <h3>Solicitarea a fost trimisă cu succes.</h3>
              <p>
                Veți fi contactat în cel mai scurt timp. Dacă este o urgență, sună direct sau
                scrie-ne pe WhatsApp pentru intervenție imediată.
              </p>
              <div className="success__cta">
                <a className="btn btn--blue" href={PHONE_TEL}>
                  <PhoneIcon /> Sună Acum
                </a>
                <a
                  className="btn btn--green"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
                <button type="button" className="btn btn--ghost" onClick={reset}>
                  Trimite altă solicitare
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="form-panel__head">
                <div>
                  <h3>Solicită intervenție sau ofertă</h3>
                  <p>Completează datele, iar noi revenim cu un instalator autorizat.</p>
                </div>
                <span className="badge">
                  <ShieldIcon /> Răspuns 24/24
                </span>
              </div>

              <div className="grid-2">
                <div className={`field${errors.nume ? ' field--error' : ''}`}>
                  <label htmlFor="nume">
                    Nume <span>*</span>
                  </label>
                  <input
                    id="nume"
                    name="nume"
                    type="text"
                    autoComplete="name"
                    placeholder="Ex: Andrei Popescu"
                    value={values.nume}
                    onChange={set('nume')}
                  />
                  {errors.nume && <span className="field__err">{errors.nume}</span>}
                </div>

                <div className={`field${errors.telefon ? ' field--error' : ''}`}>
                  <label htmlFor="telefon">
                    Telefon <span>*</span>
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Ex: 0720 423 076"
                    value={values.telefon}
                    onChange={set('telefon')}
                  />
                  {errors.telefon && <span className="field__err">{errors.telefon}</span>}
                </div>

                <div className={`field${errors.email ? ' field--error' : ''}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nume@email.ro"
                    value={values.email}
                    onChange={set('email')}
                  />
                  {errors.email && <span className="field__err">{errors.email}</span>}
                </div>

                <div className="field">
                  <label htmlFor="adresa">Adresă</label>
                  <input
                    id="adresa"
                    name="adresa"
                    type="text"
                    autoComplete="street-address"
                    placeholder="Stradă, număr, oraș"
                    value={values.adresa}
                    onChange={set('adresa')}
                  />
                </div>
              </div>

              <div
                className={`field${errors.serviciu ? ' field--error' : ''}`}
                style={{ marginTop: 14 }}
              >
                <label htmlFor="serviciu">
                  Tip serviciu <span>*</span>
                </label>
                <select
                  id="serviciu"
                  name="serviciu"
                  ref={serviceRef}
                  value={values.serviciu}
                  onChange={set('serviciu')}
                >
                  <option value="">Alege tipul de lucrare…</option>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                {errors.serviciu && <span className="field__err">{errors.serviciu}</span>}
              </div>

              <div className="field" style={{ marginTop: 14 }}>
                <label>Cât de urgent este?</label>
                <div className="chips" role="group" aria-label="Nivel de urgență">
                  {URGENCY.map((u) => (
                    <button
                      type="button"
                      key={u}
                      className={`chip${urgency === u ? ' is-active' : ''}`}
                      aria-pressed={urgency === u}
                      onClick={() => setUrgency(u)}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className={`field${errors.descriere ? ' field--error' : ''}`}
                style={{ marginTop: 14 }}
              >
                <label htmlFor="descriere">
                  Descriere problemă <span>*</span>
                </label>
                <textarea
                  id="descriere"
                  name="descriere"
                  placeholder="Ex: Am o scurgere sub chiuveta din bucătărie și se adună apă în mobilier."
                  value={values.descriere}
                  onChange={set('descriere')}
                />
                {errors.descriere && <span className="field__err">{errors.descriere}</span>}
              </div>

              <div className="field" style={{ marginTop: 14 }}>
                <label htmlFor="foto">Încarcă fotografie</label>
                <label className="upload" htmlFor="foto">
                  <UploadIcon />
                  <span>
                    <b>{fileName || 'Adaugă o poză cu problema'}</b>
                    <span>JPG sau PNG, max. 10 MB — ne ajută la o estimare mai exactă.</span>
                  </span>
                  <input id="foto" name="foto" type="file" accept="image/*" onChange={onFile} />
                </label>
              </div>

              <div className="form-submit">
                <p>Datele tale sunt folosite exclusiv pentru a te contacta legat de lucrare.</p>
                <button type="submit" className="btn btn--blue btn--lg btn--pulse">
                  Trimite Solicitarea
                </button>
              </div>

              <div className="form-note">
                <span>
                  <CheckIcon /> Fără costuri ascunse
                </span>
                <span>
                  <CheckIcon /> Confirmare telefonică
                </span>
                <span>
                  <MailIcon /> <a href={EMAIL_HREF}>{EMAIL}</a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
