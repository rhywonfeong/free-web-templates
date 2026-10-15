import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import Equipment from '../components/sections/Equipment';
import Protocols from '../components/sections/Protocols';
import Pricing from '../components/sections/Pricing';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      <Equipment />
      <Protocols />
      <Pricing />
      <Team />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;