import React from 'react';
import Hero from '../components/home/Hero';
import LiveTicker from '../components/home/LiveTicker';
import TechnicalSpecs from '../components/home/TechnicalSpecs';
import TargetAudience from '../components/home/TargetAudience';
import ApiPreview from '../components/home/ApiPreview';
import Pricing from '../components/home/Pricing';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      <Hero />
      <LiveTicker />
      <TechnicalSpecs />
      <TargetAudience />
      <ApiPreview />
      <Pricing />
    </div>
  );
}