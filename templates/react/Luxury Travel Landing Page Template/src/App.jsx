import React from 'react';
import Hero from './components/Hero';
import HiddenGems from './components/HiddenGems';
import PromiseSection from './components/PromiseSection';
import Destinations from './components/Destinations';
import Newsletter from './components/Newsletter';
import Spotlight from './components/Spotlight';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <Hero />
      <HiddenGems />
      <PromiseSection />
      <Destinations />
      <Newsletter />
      <Spotlight />
      <Footer />
    </div>
  );
}

export default App;