import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Specifications from './pages/Specifications'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black relative overflow-hidden">
      {/* Background subtle glow effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />
      
      <Navbar />
      
      <main className="flex-grow flex flex-col relative z-10 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/specs" element={<Specifications />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App