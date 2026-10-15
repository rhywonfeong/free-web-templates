import Hero from '../components/Hero'
import UrgentStrip from '../components/UrgentStrip'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import About from '../components/About'
import Process from '../components/Process'
import Reviews from '../components/Reviews'
import Faq from '../components/Faq'
import LeadForm from '../components/LeadForm'
import PageCta from '../components/PageCta'
import type { Preselect, RequestService } from '../App'

export default function Home({
  onRequest,
  preselect,
}: {
  onRequest: RequestService
  preselect: Preselect
}) {
  return (
    <>
      <Hero onRequest={() => onRequest()} />
      <UrgentStrip />
      <Services onRequest={onRequest} limit={6} moreTo="/servicii" />
      <WhyUs />
      <About moreTo="/despre-noi" />
      <Process />
      <Reviews limit={3} moreTo="/recenzii" />
      <Faq limit={3} moreTo="/intrebari-frecvente" />
      <LeadForm preselect={preselect} />
      <PageCta
        tone="dark"
        title="Preferi să vorbim direct?"
        text="Telefon, WhatsApp, email sau Facebook — alege canalul care ți se potrivește."
        to="/contact"
        label="Vezi datele de contact"
      />
    </>
  )
}
