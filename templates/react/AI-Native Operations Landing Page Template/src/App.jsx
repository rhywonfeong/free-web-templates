import React from 'react';
import { useReveal } from './hooks/useReveal';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Studio from './components/Studio';
import Membership from './components/Membership';
import Outcomes from './components/Outcomes';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useReveal(); // Initialize scroll reveal observer

  return (
    <div className="app-container">
      <Hero />
      <Experiences />
      <Studio />
      <Membership />
      <Outcomes />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;