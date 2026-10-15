import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LibraryPage from './pages/LibraryPage'
import PricingPage from './pages/PricingPage'
import UnlockPage from './pages/UnlockPage'
import GridSystemLayout from './components/layout/GridSystemLayout'

function App() {
  useEffect(() => {
    // Global mouse tracking for flashlight effects
    const handleMouseMove = (e) => {
      const targets = document.querySelectorAll('.flashlight-target')
      targets.forEach(target => {
        const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        target.style.setProperty('--mouse-x', `${x}px`)
        target.style.setProperty('--mouse-y', `${y}px`)
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GridSystemLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/unlock" element={<UnlockPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App