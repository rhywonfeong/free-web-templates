import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PortfolioGrid from "./components/PortfolioGrid";
import CyberSecurityRoadmap from "./components/CyberSecurityRoadmap";
import TechStack from "./components/TechStack";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07070a] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PortfolioGrid />
        <CyberSecurityRoadmap />
        <TechStack />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
