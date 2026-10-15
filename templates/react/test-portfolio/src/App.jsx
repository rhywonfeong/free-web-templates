import HeroSection from './components/HeroSection'
import SideRail from './components/SideRail'
import ProfileIntroSection from './components/ProfileIntroSection'
import ServicesSection from './components/ServicesSection'
import WorkSection from './components/WorkSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white text-neutral-900 antialiased selection:bg-neutral-200 selection:text-black">
      <HeroSection />
      <SideRail />
      <main id="main-content" className="relative z-20 bg-white">
        <ProfileIntroSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialSection />
        <Footer />
      </main>
    </div>
  )
}