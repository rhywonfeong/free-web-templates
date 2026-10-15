import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Global Ambient Glows */}
      <div className="fixed top-0 left-0 w-[80vw] h-[80vh] bg-purple-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-velvet-pulse z-0"></div>
      <div className="fixed bottom-0 right-0 w-[60vw] h-[60vh] bg-fuchsia-900/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none animate-velvet-pulse-delayed z-0"></div>

      <div className="z-10 flex-grow">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App