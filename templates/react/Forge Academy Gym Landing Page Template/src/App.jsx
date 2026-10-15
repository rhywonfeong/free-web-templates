import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D]">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App