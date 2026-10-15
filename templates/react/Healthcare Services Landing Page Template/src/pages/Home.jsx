import Hero from '../components/sections/Hero';
import VisionMission from '../components/sections/VisionMission';
import About from '../components/sections/About';
import Values from '../components/sections/Values';
import Team from '../components/sections/Team';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <VisionMission />
      <About />
      <Values />
      <Team />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;