import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import About from '../components/sections/About';
import Equipment from '../components/sections/Equipment';
import Protocol from '../components/sections/Protocol';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Coaches from '../components/sections/Coaches';
import FAQ from '../components/sections/FAQ';
import Location from '../components/sections/Location';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Equipment />
      <Protocol />
      <Testimonials />
      <Pricing />
      <Coaches />
      <FAQ />
      <Location />
      <CTA />
    </>
  );
}