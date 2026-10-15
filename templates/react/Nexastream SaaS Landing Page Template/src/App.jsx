import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClusteringSection from './components/ClusteringSection';
import IngestionSection from './components/IngestionSection';
import ExpertsSection from './components/ExpertsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Background />
      
      <main className="min-h-screen overflow-hidden flex flex-col lg:max-w-[1400px] lg:min-h-[900px] lg:rounded-[2.5rem] lg:border lg:border-white/10 lg:shadow-2xl lg:shadow-black bg-black/20 w-full relative backdrop-blur-xl">
        {/* Grid Lines Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-50 md:opacity-100">
          <div className="w-px h-full bg-white/5"></div>
          <div className="w-px h-full bg-white/5 hidden sm:block"></div>
          <div className="w-px h-full bg-white/5 hidden md:block"></div>
          <div className="w-px h-full bg-white/5 hidden lg:block"></div>
          <div className="w-px h-full bg-white/5 hidden xl:block"></div>
          <div className="w-px h-full bg-white/5"></div>
        </div>

        <Navbar />
        
        {/* Main Content Area Container */}
        <div className="flex-1 z-20 flex flex-col md:flex-row h-full relative">
          <Hero />
        </div>

        <ClusteringSection />
        <IngestionSection />
        <ExpertsSection />
        <CTASection />
        <Footer />
        
      </main>
    </>
  );
}

export default App;