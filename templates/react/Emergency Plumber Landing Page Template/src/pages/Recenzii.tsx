import PageHero from '../components/PageHero'
import Reviews from '../components/Reviews'
import UrgentStrip from '../components/UrgentStrip'
import PageCta from '../components/PageCta'

export default function Recenzii({ onRequest }: { onRequest: () => void }) {
  return (
    <>
      <PageHero
        eyebrow="Recenzii"
        title={
          <>
            Ce spun oamenii despre <span className="grad">instalatorul lor 24/24</span>
          </>
        }
        sub="Recenzii reale de la clienți care au avut nevoie de intervenții urgente, desfundări canalizare și montaj obiecte sanitare."
        bullets={['5.0 rating mediu', 'Peste 120 de clienți', 'Garanție pentru lucrări']}
        onRequest={onRequest}
        ctaLabel="Solicită Intervenție"
      />

      <Reviews />
      <UrgentStrip />

      <PageCta
        tone="dark"
        title="Vrei să fii următorul client mulțumit?"
        text="Trimite detaliile lucrării și primești un instalator autorizat la ușă."
        to="/contact"
        label="Solicită intervenție"
      />
    </>
  )
}
