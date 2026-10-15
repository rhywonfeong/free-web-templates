import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import CoreTechnologies from '../components/sections/CoreTechnologies';
import TechSpecs from '../components/sections/TechSpecs';
import Capabilities from '../components/sections/Capabilities';
import Pricing from '../components/sections/Pricing';
import BottomBanner from '../components/sections/BottomBanner';

const Landing = () => {
  // Simple scroll to top on mount for simulated routing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-12 lg:gap-24 w-full animate-in fade-in duration-1000">
      <Hero />
      <CoreTechnologies />
      <TechSpecs />
      <Capabilities />
      <Pricing />
      <BottomBanner />
    </div>
  );
};

export default Landing;