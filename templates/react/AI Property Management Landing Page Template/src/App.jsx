import React from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatusBadge from './components/StatusBadge'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Ambient Environment */}
      <Background />
      
      {/* UI Elements */}
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-6">
        <Hero />
      </main>

      {/* Floating Indicators */}
      <StatusBadge />
    </div>
  )
}

export default App