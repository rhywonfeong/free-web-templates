import React from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Pricing from './components/Pricing';

function App() {
  useScrollAnimation();

  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Features />
      <DashboardPreview />
      <Pricing />
    </>
  );
}

export default App;