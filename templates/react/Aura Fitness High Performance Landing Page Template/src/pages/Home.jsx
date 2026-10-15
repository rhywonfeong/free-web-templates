import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import StatsSection from '../components/sections/StatsSection';
import EquipmentSection from '../components/sections/EquipmentSection';
import ProtocolSection from '../components/sections/ProtocolSection';
import PricingSection from '../components/sections/PricingSection';
import CoachesSection from '../components/sections/CoachesSection';
import FeedbackSection from '../components/sections/FeedbackSection';
import FAQSection from '../components/sections/FAQSection';
import LocationSection from '../components/sections/LocationSection';
import FinalCTASection from '../components/sections/FinalCTASection';

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <EquipmentSection />
      <ProtocolSection />
      <PricingSection />
      <CoachesSection />
      <FeedbackSection />
      <FAQSection />
      <LocationSection />
      <FinalCTASection />
    </div>
  );
}