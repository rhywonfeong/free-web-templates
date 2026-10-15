import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import StructureSection from '../components/sections/StructureSection'
import ProgramsSection from '../components/sections/ProgramsSection'
import PricingSection from '../components/sections/PricingSection'
import TeamSection from '../components/sections/TeamSection'
import FAQSection from '../components/sections/FAQSection'
import LocationSection from '../components/sections/LocationSection'
import CTASection from '../components/sections/CTASection'

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <div id="espaco">
        <AboutSection />
        <StructureSection />
      </div>
      <div id="programas">
        <ProgramsSection />
      </div>
      <div id="planos">
        <PricingSection />
      </div>
      <div id="equipe">
        <TeamSection />
      </div>
      <FAQSection />
      <LocationSection />
      <CTASection />
    </div>
  )
}

export default Home