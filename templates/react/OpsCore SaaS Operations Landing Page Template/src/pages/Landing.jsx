import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Workflow from '../components/sections/CoreTechnologies';
import FeatureGrid from '../components/sections/Capabilities';
import DashboardPreview from '../components/sections/TechSpecs';
import AnalyticsAndAI from '../components/sections/Pricing';
import BottomBanner from '../components/sections/BottomBanner';

const Landing = () => {
  // Simple scroll to top on mount for simulated routing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-1000">
      <Hero />
      <Workflow />
      <FeatureGrid />
      <DashboardPreview />
      <AnalyticsAndAI />
      <BottomBanner />
    </div>
  );
};

export default Landing;