import Hero from '../components/sections/Hero';
import LogoTicker from '../components/sections/LogoTicker';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import TargetAudience from '../components/sections/TargetAudience';
import Stats from '../components/sections/Stats';
import Methodology from '../components/sections/Methodology';
import Differentiators from '../components/sections/Differentiators';
import Portfolio from '../components/sections/Portfolio';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <LogoTicker />
      <About />
      <Services />
      <TargetAudience />
      <Stats />
      <Methodology />
      <Differentiators />
      <Portfolio />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default Home;