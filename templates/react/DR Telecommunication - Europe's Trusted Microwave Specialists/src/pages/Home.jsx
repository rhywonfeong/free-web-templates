import Hero from '../components/Hero';
import ClientTicker from '../components/ClientTicker';
import Features from '../components/Features';
import Integrations from '../components/Integrations';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center pb-0">
      {/* Hero Section (DRT) */}
      <section className="w-full px-4 md:px-8 pt-4 md:pt-8 flex justify-center">
        <Hero />
      </section>

      {/* Auto-Scrolling Client Logo Ticker Banner */}
      <div data-element-id="aura-emoztuhs9c499sri" className="w-full relative z-20">
        <ClientTicker />
      </div>

      {/* Spacer */}
      <div className="h-12 md:h-20 w-full max-w-[1400px] relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 h-full w-px bg-gradient-to-b from-white/10 to-transparent"></div>
      </div>

      {/* Features Section (Spatial Aesthetics) */}
      <section className="w-full">
        <Features />
      </section>

      {/* Integrations Section */}
      <section className="w-full mt-12 md:mt-24">
        <Integrations />
      </section>

      {/* Stats Section */}
      <section className="w-full mt-12">
        <Stats />
      </section>

      {/* Testimonials Section */}
      <section className="w-full mt-24">
        <Testimonials />
      </section>

      {/* Pricing Section */}
      <section className="w-full mt-24">
        <Pricing />
      </section>

      {/* FAQ Section */}
      <section className="w-full mt-24">
        <FAQ />
      </section>

      {/* CTA Section */}
      <section className="w-full mt-24 mb-12">
        <CTA />
      </section>
    </div>
  );
}