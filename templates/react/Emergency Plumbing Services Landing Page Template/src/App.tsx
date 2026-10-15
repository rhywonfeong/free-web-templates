import Contact from './components/Contact'
import Faq from './components/Faq'
import FloatingCta from './components/FloatingCta'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import LeadForm from './components/LeadForm'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Urgent, { Marquee } from './components/Urgent'
import WhyUs from './components/WhyUs'
import { useReveal, useScrolled } from './hooks/useReveal'

export default function App() {
  useReveal()
  useScrolled(20)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Urgent />
        <Services />
        <WhyUs />
        <Process />
        <Reviews />
        <Faq />
        <LeadForm />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
