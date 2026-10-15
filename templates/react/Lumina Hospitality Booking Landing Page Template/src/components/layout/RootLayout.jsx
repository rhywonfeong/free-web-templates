import { Outlet } from 'react-router-dom'
import Navbar from '../navigation/Navbar'

export default function RootLayout() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden font-inter">
      <Navbar />
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  )
}