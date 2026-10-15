import PageHero from '../components/PageHero'
import ContactSection from '../components/Contact'
import LeadForm from '../components/LeadForm'
import UrgentStrip from '../components/UrgentStrip'
import type { Preselect } from '../App'

export default function Contact({
  onRequest,
  preselect,
}: {
  onRequest: () => void
  preselect: Preselect
}) {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Sună, scrie pe WhatsApp sau <span className="grad">completează formularul</span>
          </>
        }
        sub="Alege modul preferat de contact. Pentru urgențe sanitare, apelul telefonic rămâne cea mai rapidă variantă — preluăm non-stop."
        bullets={['Răspuns în < 5 minute', 'Preluăm apeluri 24/24', 'Deplasare rapidă']}
        onRequest={onRequest}
        ctaLabel="Mergi la formular"
      />

      <ContactSection onRequest={onRequest} />
      <LeadForm preselect={preselect} />
      <UrgentStrip />
    </>
  )
}
