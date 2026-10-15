import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import ServicesMicro from '../components/home/ServicesMicro'
import SplitSlider from '../components/home/SplitSlider'
import BlueprintSection from '../components/home/BlueprintSection'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      <Hero />
      <ServicesMicro />
      <SplitSlider />
      <BlueprintSection />
    </motion.div>
  )
}