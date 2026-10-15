import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Equipment from '../components/sections/Equipment';
import Programs from '../components/sections/Programs';
import Plans from '../components/sections/Plans';
import Team from '../components/sections/Team';
import FAQ from '../components/sections/FAQ';
import Location from '../components/sections/Location';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="espaco">
        <About />
        <Equipment />
      </div>
      <div id="programas">
        <Programs />
      </div>
      <div id="planos">
        <Plans />
      </div>
      <div id="equipe">
        <Team />
      </div>
      <FAQ />
      <Location />
      <FinalCTA />
    </>
  );
}