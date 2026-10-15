import PageHero from '../components/PageHero'
import Faq from '../components/Faq'
import UrgentStrip from '../components/UrgentStrip'
import PageCta from '../components/PageCta'

export default function IntrebariFrecvente({ onRequest }: { onRequest: () => void }) {
  return (
    <>
      <PageHero
        eyebrow="Întrebări Frecvente"
        title={
          <>
            Răspunsuri clare înainte de <span className="grad">a ne suna</span>
          </>
        }
        sub="Program, garanție, estimări și durata intervenției — tot ce ne întreabă cel mai des clienții, explicat pe scurt."
        bullets={['Program non-stop', 'Estimare înainte de deplasare', 'Fără costuri ascunse']}
        onRequest={onRequest}
      />

      <Faq />
      <UrgentStrip />

      <PageCta
        tone="tint"
        title="Nu ai găsit răspunsul?"
        text="Scrie-ne întrebarea în formular sau sună direct — răspundem 24/24."
        to="/contact"
        label="Întreabă-ne acum"
      />
    </>
  )
}
