import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Team from '../components/Team'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Pricing />
        <Team />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage