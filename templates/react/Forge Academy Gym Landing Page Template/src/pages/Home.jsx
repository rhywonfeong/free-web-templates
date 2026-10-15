import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import EquipmentSection from '../components/sections/EquipmentSection'
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
      <AboutSection />
      <EquipmentSection />
      <ProgramsSection />
      <PricingSection />
      <TeamSection />
      <FAQSection />
      <LocationSection />
      <CTASection />
    </div>
  )
}

export default Home