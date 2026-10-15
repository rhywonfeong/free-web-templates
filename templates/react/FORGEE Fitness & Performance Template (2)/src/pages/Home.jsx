import React, { useState } from 'react';
import { Label, Display, H2, BodyText, SectionMarker } from '../components/Typography';
import clsx from 'clsx';

// Sections
import HeroSection from './sections/HeroSection';
import ManifestoSection from './sections/ManifestoSection';
import MetricsSection from './sections/MetricsSection';
import StructureSection from './sections/StructureSection';
import ProgramsSection from './sections/ProgramsSection';
import PlansSection from './sections/PlansSection';
import TeamSection from './sections/TeamSection';
import FAQSection from './sections/FAQSection';
import LocationSection from './sections/LocationSection';
import FinalCTASection from './sections/FinalCTASection';

export default function Home() {
  return (
    <div className="bg-[#F5F3EF]">
      <HeroSection />
      <ManifestoSection />
      <MetricsSection />
      <StructureSection />
      <ProgramsSection />
      <PlansSection />
      <TeamSection />
      <FAQSection />
      <LocationSection />
      <FinalCTASection />
    </div>
  );
}