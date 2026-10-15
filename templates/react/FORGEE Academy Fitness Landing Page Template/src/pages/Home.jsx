import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'
import Equipment from '../components/sections/Equipment'
import Programs from '../components/sections/Programs'
import Pricing from '../components/sections/Pricing'
import Team from '../components/sections/Team'
import FAQ from '../components/sections/FAQ'
import Location from '../components/sections/Location'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      <Equipment />
      <Programs />
      <Pricing />
      <Team />
      <FAQ />
      <Location />
      <FinalCTA />
    </>
  )
}