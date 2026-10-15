import React from 'react'
import Navbar from './components/Navbar'
import UnicornBackground from './components/UnicornBackground'
import GlobalGrid from './components/GlobalGrid'
import Hero from './components/Hero'
import Features from './components/Features'
import Validation from './components/Validation'
import TestimonialsMarquee from './components/TestimonialsMarquee'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <UnicornBackground />
      <GlobalGrid />
      
      <div className="relative z-10 flex flex-col w-full h-full">
        <Navbar />
        <main className="w-full">
          <Hero />
          <Features />
          <Validation />
          <TestimonialsMarquee />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App