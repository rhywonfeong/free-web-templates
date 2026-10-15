import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import ProductMontage from './components/ProductMontage';
import FeatureCards from './components/FeatureCards';
import DarkStats from './components/DarkStats';
import SolutionsExplainer from './components/SolutionsExplainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <ProductMontage />
        <FeatureCards />
        <DarkStats />
        <SolutionsExplainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;