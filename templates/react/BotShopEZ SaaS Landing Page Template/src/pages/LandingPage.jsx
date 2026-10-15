import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Solution from '../components/Solution';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import BusinessModel from '../components/BusinessModel';
import Stats from '../components/Stats';
import Pricing from '../components/Pricing';
import Personas from '../components/Personas';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Stats />
      <Problems />
      <Solution />
      <Features />
      <HowItWorks />
      <BusinessModel />
      <Personas />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}