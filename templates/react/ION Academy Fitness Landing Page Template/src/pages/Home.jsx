import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Pillars from '../components/Sections/Pillars';
import Numbers from '../components/Sections/Numbers';
import Testimonials from '../components/Sections/Testimonials';
import Structure from '../components/Sections/Structure';
import Programs from '../components/Sections/Programs';
import Pricing from '../components/Sections/Pricing';
import Team from '../components/Sections/Team';
import FAQ from '../components/Sections/FAQ';
import Location from '../components/Sections/Location';
import FinalCTA from '../components/Sections/FinalCTA';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Pillars />
      <Numbers />
      <Testimonials />
      <Structure />
      <Programs />
      <Pricing />
      <Team />
      <FAQ />
      <Location />
      <FinalCTA />
    </div>
  );
}