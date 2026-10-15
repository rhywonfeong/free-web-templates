import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BigSound from './components/BigSound';
import UseCasesPricing from './components/UseCasesPricing';
import Specs from './components/Specs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Feature Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-12"></div>
        
        <BigSound />
        <UseCasesPricing />
        <Specs />
      </main>

      <Footer />
    </>
  );
}

export default App;