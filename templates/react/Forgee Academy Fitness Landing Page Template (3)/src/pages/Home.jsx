import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import MetricsBar from '../components/sections/MetricsBar';
import About from '../components/sections/About';
import Structure from '../components/sections/Structure';
import Programs from '../components/sections/Programs';
import Pricing from '../components/sections/Pricing';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';
import Location from '../components/sections/Location';
import FinalCTA from '../components/sections/FinalCTA';

const Home = () => {
  return (
    <div className="relative bg-[#0A0A0A]">
      <div className="p-2 md:p-6 lg:p-8 min-h-screen">
        <div className="relative rounded-[2rem] md:rounded-[3rem] bg-[#131313] min-h-[95vh] border border-white/10 overflow-hidden flex flex-col">
          <Navbar inHero={true} />
          <Hero />
        </div>
      </div>
      
      <MetricsBar />
      <About />
      <Structure />
      <Programs />
      <Pricing />
      <Team />
      <FAQ />
      <Location />
      <FinalCTA />
    </div>
  );
};

export default Home;