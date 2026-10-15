import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Modalities from '../components/sections/Modalities';
import History from '../components/sections/History';
import Testimonials from '../components/sections/Testimonials';
import TrialForm from '../components/sections/TrialForm';
import Shop from '../components/sections/Shop';
import Locations from '../components/sections/Locations';
import Instructors from '../components/sections/Instructors';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Stats />
      <Modalities />
      <History />
      <Testimonials />
      <TrialForm />
      <Shop />
      <Locations />
      <Instructors />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}