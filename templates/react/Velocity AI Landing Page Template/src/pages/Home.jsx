import React from 'react'
import Hero from '../components/sections/Hero'
import SocialProof from '../components/sections/SocialProof'
import Problem from '../components/sections/Problem'
import Solution from '../components/sections/Solution'
import Process from '../components/sections/Process'
import CaseStudies from '../components/sections/CaseStudies'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Process />
      <CaseStudies />
      <Services />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  )
}