import Hero from '../components/sections/Hero';
import Thesis from '../components/sections/Thesis';
import FocusAreas from '../components/sections/FocusAreas';
import StageTicket from '../components/sections/StageTicket';
import FitCriteria from '../components/sections/FitCriteria';
import HowWeWork from '../components/sections/HowWeWork';
import Team from '../components/sections/Team';
import ClosingCTA from '../components/sections/ClosingCTA';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div id="thesis"><Thesis /></div>
      <div id="focus"><FocusAreas /></div>
      <div id="stage"><StageTicket /></div>
      <div id="fit"><FitCriteria /></div>
      <div id="how-we-work"><HowWeWork /></div>
      <div id="team"><Team /></div>
      <ClosingCTA />
    </div>
  );
}