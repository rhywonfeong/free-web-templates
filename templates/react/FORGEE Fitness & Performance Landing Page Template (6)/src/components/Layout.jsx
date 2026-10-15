import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Global Ambient Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF4500] opacity-[0.03] rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E30000] opacity-[0.04] rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3" />
      </div>
      
      <Header />
      <main className="flex-grow z-10 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}