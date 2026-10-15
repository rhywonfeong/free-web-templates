import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import BackgroundGlow from './components/ui/BackgroundGlow';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 overflow-hidden text-zinc-100">
      <BackgroundGlow />
      <Navbar />
      
      <main className="flex-grow flex flex-col relative z-10 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;