import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import TargetAudience from '../components/sections/TargetAudience';
import ChefProfile from '../components/sections/ChefProfile';
import FAQ from '../components/sections/FAQ';
import Waitlist from '../components/sections/Waitlist';

const Home = () => {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Features />
      <TargetAudience />
      <ChefProfile />
      <FAQ />
      <Waitlist />
    </main>
  );
};

export default Home;