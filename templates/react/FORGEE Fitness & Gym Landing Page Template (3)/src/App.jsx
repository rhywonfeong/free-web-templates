import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative font-body">
        {/* Global Ambient Glow */}
        <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#E8400A] opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-[#E8400A] opacity-[0.02] blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Catch-all routes back to home for this landing page architecture */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;