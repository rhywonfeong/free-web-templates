import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Stats from '../sections/Stats';
import Equipment from '../sections/Equipment';
import Protocol from '../sections/Protocol';
import Coaches from '../sections/Coaches';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Location from '../sections/Location';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  return (
    <div className="bg-[#100F0F] text-white w-full">
      <Hero />
      <About />
      <Stats />
      <Equipment />
      <Protocol />
      <Coaches />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Location />
      <FinalCTA />
    </div>
  );
}