import React, { useState, useEffect } from 'react'
import StickyHeader from './components/StickyHeader'
import MobileBottomBar from './components/MobileBottomBar'
import FloatingButtons from './components/FloatingButtons'
import FomoNotification from './components/FomoNotification'
import InquiryModal from './components/InquiryModal'

import HeroSection from './sections/HeroSection'
import LocationSection from './sections/LocationSection'
import StatsSection from './sections/StatsSection'
import OverviewSection from './sections/OverviewSection'
import ConstructionProgress from './sections/ConstructionProgress'
import DeveloperTrust from './sections/DeveloperTrust'
import GallerySection from './sections/GallerySection'
import VideoSection from './sections/VideoSection'
import PricingSection from './sections/PricingSection'
import PaymentSchedule from './sections/PaymentSchedule'
import MasterPlan from './sections/MasterPlan'
import FloorPlans from './sections/FloorPlans'
import SoftInventory from './sections/SoftInventory'
import TeamSection from './sections/TeamSection'
import SocialProof from './sections/SocialProof'
import QnaSection from './sections/QnaSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#0B2D72' }}>
      <StickyHeader scrolled={scrolled} onOpenModal={openModal} />
      <main>
        <HeroSection onOpenModal={openModal} />
        <LocationSection />
        <StatsSection />
        <OverviewSection />
        <ConstructionProgress onOpenModal={openModal} />
        <DeveloperTrust />
        <GallerySection />
        <VideoSection />
        <PricingSection onOpenModal={openModal} />
        <PaymentSchedule onOpenModal={openModal} />
        <MasterPlan onOpenModal={openModal} />
        <FloorPlans onOpenModal={openModal} />
        <SoftInventory onOpenModal={openModal} />
        <TeamSection />
        <SocialProof onOpenModal={openModal} />
        <QnaSection />
        <ContactSection />
      </main>
      <FooterSection />
      <MobileBottomBar onOpenModal={openModal} />
      <FloatingButtons />
      <FomoNotification />
      {isModalOpen && <InquiryModal onClose={closeModal} />}
    </div>
  )
}