import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Socials from '../components/Socials';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Socials />
    </main>
  );
}