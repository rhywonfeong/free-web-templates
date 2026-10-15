import PageHero from '../components/PageHero'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import UrgentStrip from '../components/UrgentStrip'
import Process from '../components/Process'
import PageCta from '../components/PageCta'

export default function DespreNoi({ onRequest }: { onRequest: () => void }) {
  return (
    <>
      <PageHero
        eyebrow="Despre Noi"
        title={
          <>
            Peste 14 ani de <span className="grad">instalații sanitare</span> făcute ca la carte
          </>
        }
        sub="InstalatorulTau24.ro este echipa la care apelezi când ai nevoie de un instalator la domiciliu, rapid și corect. Mii de urgențe rezolvate, în apartamente, case și spații comerciale."
        bullets={['14+ ani experiență', '2500+ intervenții', 'Disponibilitate 24/24']}
        onRequest={onRequest}
      />

      <About />
      <WhyUs />
      <UrgentStrip />
      <Process />

      <PageCta
        tone="tint"
        title="Vrei să lucrăm împreună?"
        text="Spune-ne ce ai de reparat sau de montat și revenim cu o estimare corectă."
        to="/contact"
        label="Contactează instalatorul"
      />
    </>
  )
}
