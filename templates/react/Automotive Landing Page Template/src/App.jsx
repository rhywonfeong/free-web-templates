import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroPage from './pages/HeroPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-[#010101] text-white selection:bg-white/20">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          {/* Future routes would go here */}
          <Route path="*" element={<HeroPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App