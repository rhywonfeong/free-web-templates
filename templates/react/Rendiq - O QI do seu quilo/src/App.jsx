import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. NAVEGAÇÃO */}
      <Header />
      
      <main className="flex-grow pt-[104px]">
        {/* 2. SEÇÃO 01 — Hero */}
        <Hero />
        
        {/* 3. SEÇÃO 02 — Problema */}
        <Problem />
        
        {/* 4. SEÇÃO 03 — Como Funciona */}
        <HowItWorks />
        
        {/* 5. SEÇÃO 04 — Funcionalidades */}
        <Features />
        
        {/* 6. SEÇÃO 05 — Planos */}
        <Pricing />
        
        {/* 7. SEÇÃO 06 — Equipe */}
        <Team />
        
        {/* 8. SEÇÃO 07 — FAQ */}
        <FAQ />
        
        {/* 9. SEÇÃO 08 — Contato */}
        <Contact />
        
        {/* 10. SEÇÃO 09 — CTA Final */}
        <CTAFinal />
      </main>
      
      {/* 11. RODAPÉ */}
      <Footer />
    </div>
  );
}

export default App;