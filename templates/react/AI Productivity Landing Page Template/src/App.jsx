import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Features from './components/Features';
import Interface from './components/Interface';
import Metrics from './components/Metrics';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Features />
        <Interface />
        <Metrics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}