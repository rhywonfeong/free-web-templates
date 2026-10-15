import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#E8400A] selection:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App