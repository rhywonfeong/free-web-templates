import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import Equipment from '../components/sections/Equipment';
import Protocols from '../components/sections/Protocols';
import Pricing from '../components/sections/Pricing';
import Coaches from '../components/sections/Coaches';
import FAQ from '../components/sections/FAQ';
import Location from '../components/sections/Location';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      <Equipment />
      <Protocols />
      <Pricing />
      <Coaches />
      <FAQ />
      <Location />
      <FinalCTA />
    </main>
  );
}