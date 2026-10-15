import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white transition-colors-all overflow-x-hidden font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}