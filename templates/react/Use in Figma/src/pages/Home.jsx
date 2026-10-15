import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Structure from '../components/sections/Structure';
import Programs from '../components/sections/Programs';
import Pricing from '../components/sections/Pricing';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';
import Location from '../components/sections/Location';
import FinalCTA from '../components/sections/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Structure />
      <Programs />
      <Pricing />
      <Team />
      <FAQ />
      <Location />
      <FinalCTA />
    </>
  );
};

export default Home;