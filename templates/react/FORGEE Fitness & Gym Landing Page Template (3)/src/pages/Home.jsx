import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import StructureSection from '../components/sections/StructureSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import PlansSection from '../components/sections/PlansSection';
import TeamSection from '../components/sections/TeamSection';
import FAQSection from '../components/sections/FAQSection';
import LocationSection from '../components/sections/LocationSection';
import CTAFinalSection from '../components/sections/CTAFinalSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <StructureSection />
      <ProgramsSection />
      <PlansSection />
      <TeamSection />
      <FAQSection />
      <LocationSection />
      <CTAFinalSection />
    </div>
  );
}