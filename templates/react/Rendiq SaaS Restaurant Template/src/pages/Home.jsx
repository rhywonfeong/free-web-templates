import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import TeamSection from '../components/sections/TeamSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <div className="pt-[82px]">
      {/* Tagline Institucional below header */}
      <div className="bg-[#0C0C0C] text-[#FCFBFC] text-xs py-2 text-center tracking-wide font-medium">
        Controle real para quem não pode perder. · São Paulo, SP · Est. 2026
      </div>
      
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </div>
  );
};

export default Home;