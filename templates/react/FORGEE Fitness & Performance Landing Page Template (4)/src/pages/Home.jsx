import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import StructureSection from '../components/StructureSection'
import ProgramsSection from '../components/ProgramsSection'
import PricingSection from '../components/PricingSection'
import TeamSection from '../components/TeamSection'
import FAQSection from '../components/FAQSection'
import LocationSection from '../components/LocationSection'
import FinalCTASection from '../components/FinalCTASection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StructureSection />
        <ProgramsSection />
        <PricingSection />
        <TeamSection />
        <FAQSection />
        <LocationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}

export default Home