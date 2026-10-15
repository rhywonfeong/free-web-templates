import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Structure from '../components/sections/Structure';
import Programs from '../components/sections/Programs';
import Pricing from '../components/sections/Pricing';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';
import Location from '../components/sections/Location';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <About />
      <Structure />
      <Programs />
      <Pricing />
      <Team />
      <FAQ />
      <Location />
      <CTA />
    </div>
  );
}