import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import StatsSection from '../components/sections/StatsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import EquipmentSection from '../components/sections/EquipmentSection'
import MethodologySection from '../components/sections/MethodologySection'
import PricingSection from '../components/sections/PricingSection'
import CoachesSection from '../components/sections/CoachesSection'
import FaqSection from '../components/sections/FaqSection'
import LocationSection from '../components/sections/LocationSection'
import FinalCtaSection from '../components/sections/FinalCtaSection'

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <EquipmentSection />
      <MethodologySection />
      <PricingSection />
      <CoachesSection />
      <FaqSection />
      <LocationSection />
      <FinalCtaSection />
    </div>
  )
}