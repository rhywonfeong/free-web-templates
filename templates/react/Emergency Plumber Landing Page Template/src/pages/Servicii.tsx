import PageHero from '../components/PageHero'
import Services from '../components/Services'
import UrgentStrip from '../components/UrgentStrip'
import Process from '../components/Process'
import PageCta from '../components/PageCta'
import type { RequestService } from '../App'

export default function Servicii({ onRequest }: { onRequest: RequestService }) {
  return (
    <>
      <PageHero
        eyebrow="Servicii"
        title={
          <>
            Toate serviciile unui <span className="grad">instalator autorizat 24/24</span>
          </>
        }
        sub="Desfundări canalizare, reparații țevi, montaj obiecte sanitare și instalații complete. Alege lucrarea de care ai nevoie și trimitem un instalator la domiciliu."
        bullets={[
          'Intervenții urgente non-stop',
          'Scule profesionale, fără spargeri inutile',
          'Garanție pentru manoperă și piese',
        ]}
        onRequest={() => onRequest()}
        ctaLabel="Cere o ofertă"
      />

      <Services onRequest={onRequest} />
      <UrgentStrip />
      <Process />

      <PageCta
        tone="tint"
        title="Nu ești sigur ce lucrare îți trebuie?"
        text="Descrie problema în formular și îți spunem exact ce implică intervenția."
        to="/contact"
        label="Solicită o estimare"
      />
    </>
  )
}
