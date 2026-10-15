import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import EquipmentSection from '../components/sections/EquipmentSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import PricingSection from '../components/sections/PricingSection';
import CoachesSection from '../components/sections/CoachesSection';
import FAQSection from '../components/sections/FAQSection';
import LocationSection from '../components/sections/LocationSection';
import FinalCTASection from '../components/sections/FinalCTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <div id="espaco">
        <AboutSection />
        <StatsSection />
      </div>
      <TestimonialsSection />
      <EquipmentSection />
      <div id="programas">
        <ProgramsSection />
      </div>
      <div id="planos">
        <PricingSection />
      </div>
      <div id="equipe">
        <CoachesSection />
      </div>
      <FAQSection />
      <LocationSection />
      <FinalCTASection />
    </>
  );
};

export default Home;