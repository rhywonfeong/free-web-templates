import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import StandardCare from './components/StandardCare';
import Process from './components/Process';
import Lifestyle from './components/Lifestyle';
import Testimonials from './components/Testimonials';
import FinalConversion from './components/FinalConversion';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  // Initialize scroll reveal animations for the components
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="">
        <Hero />
        <Services />
        <StandardCare />
        <Process />
        <Lifestyle />
        <Testimonials />
        <FinalConversion />
      </main>
      <Footer />
    </div>
  );
}

export default App;