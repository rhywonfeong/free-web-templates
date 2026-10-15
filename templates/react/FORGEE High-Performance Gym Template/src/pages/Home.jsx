import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Structure from '../components/Structure';
import ProgramsSplit from '../components/ProgramsSplit';
import ProgramsList from '../components/ProgramsList';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Location from '../components/Location';
import CTAFinal from '../components/CTAFinal';

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <Hero />
      <div id="espaco">
        <About />
        <Structure />
      </div>
      <div id="programas" className="flex flex-col gap-32">
        <ProgramsSplit />
        <ProgramsList />
      </div>
      <div id="planos">
        <Pricing />
      </div>
      <div id="equipe">
        <Team />
      </div>
      <FAQ />
      <Location />
      <CTAFinal />
    </div>
  );
}