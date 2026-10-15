import Hero from './Home/Hero';
import TrustLogos from './Home/TrustLogos';
import Features from './Home/Features';
import Categories from './Home/Categories';
import FeaturedTalent from './Home/FeaturedTalent';
import Testimonials from './Home/Testimonials';
import Process from './Home/Process';
import CallToAction from './Home/CallToAction';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustLogos />
      <Features />
      <Categories />
      <FeaturedTalent />
      <Testimonials />
      <Process />
      <CallToAction />
    </div>
  );
}