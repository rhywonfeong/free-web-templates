import React from 'react';
import Hero from './components/Hero';
import WhatWeAutomate from './components/WhatWeAutomate';
import CaseStudy from './components/CaseStudy';
import Integrations from './components/Integrations';
import WorkflowCTA from './components/WorkflowCTA';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeAutomate />
      <CaseStudy />
      <Integrations />
      <WorkflowCTA />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;