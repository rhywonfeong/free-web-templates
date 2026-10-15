import React from 'react';
import { ModalProvider } from './context/ModalContext';
import { Header } from './components/global/Header';
import { FloatingActions } from './components/global/FloatingActions';
import { InquiryModal } from './components/global/InquiryModal';
import { FomoTicker } from './components/global/FomoTicker';
import { Footer } from './components/global/Footer';

// Sections
import { Hero } from './sections/Hero';
import { Location } from './sections/Location';
import { Stats } from './sections/Stats';
import { Overview } from './sections/Overview';
import { Construction } from './sections/Construction';
import { Developer } from './sections/Developer';
import { Gallery } from './sections/Gallery';
import { Video } from './sections/Video';
import { Pricing } from './sections/Pricing';
import { Payment } from './sections/Payment';
import { MasterPlan } from './sections/MasterPlan';
import { FloorPlans } from './sections/FloorPlans';
import { Inventory } from './sections/Inventory';
import { Team } from './sections/Team';
import { SocialProof } from './sections/SocialProof';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen font-sans selection:bg-[#58A0C8]/30 selection:text-white">
        <Header />
        
        <main>
          <Hero />
          <Location />
          <Stats />
          <Overview />
          <Construction />
          <Developer />
          <Gallery />
          <Video />
          <Pricing />
          <Payment />
          <MasterPlan />
          <FloorPlans />
          <Inventory />
          <Team />
          <SocialProof />
          <FAQ />
          <Contact />
        </main>

        <Footer />
        <FloatingActions />
        <InquiryModal />
        <FomoTicker />
      </div>
    </ModalProvider>
  );
}

export default App;