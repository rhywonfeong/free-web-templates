import Hero from './Home/Hero';
import Ticker from './Home/Ticker';
import Services from './Home/Services';
import TechStack from './Home/TechStack';
import Differential from './Home/Differential';
import Process from './Home/Process';
import Portfolio from './Home/Portfolio';
import FinalCTA from './Home/FinalCTA';
import Contact from './Home/Contact';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Ticker />
      <Services />
      <TechStack />
      <Differential />
      <Process />
      <Portfolio />
      <FinalCTA />
      <Contact />
    </div>
  );
}