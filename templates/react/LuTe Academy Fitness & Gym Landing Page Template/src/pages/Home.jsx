import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Testimonials from '../components/sections/Testimonials'
import Structure from '../components/sections/Structure'
import Programs from '../components/sections/Programs'
import Plans from '../components/sections/Plans'
import Team from '../components/sections/Team'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Structure />
      <Programs />
      <Plans />
      <Team />
      <FAQ />
      <Contact />
      <CTASection />
    </>
  )
}