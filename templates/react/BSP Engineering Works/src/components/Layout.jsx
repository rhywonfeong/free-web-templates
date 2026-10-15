import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import LiveStatus from './LiveStatus'
import FloatingCTA from './FloatingCTA'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] flex flex-col">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-noise z-50 mix-blend-overlay"></div>
      
      <Navbar />
      
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>

      <Footer />
      <LiveStatus />
      <FloatingCTA />
    </div>
  )
}