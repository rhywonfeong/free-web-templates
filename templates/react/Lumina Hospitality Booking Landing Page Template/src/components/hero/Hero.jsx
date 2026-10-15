import { Link } from 'react-router-dom'
import VideoBackground from '../media/VideoBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      
      {/* Background Video & Gradient Overlay */}
      <VideoBackground />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto w-full flex flex-col items-center">
        
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-1 pr-4 mb-8 transform hover:scale-105 transition-transform duration-300 shadow-xl">
          <span className="bg-[#8b5cf6] text-white rounded-full px-3 py-1 text-[12px] font-dm font-bold uppercase tracking-wider">
            New
          </span>
          <span className="font-dm font-medium text-[14px] text-white">
            Say Hello to Lumina v2.0
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-white text-5xl md:text-7xl leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Craft the <i className="italic font-light">perfect</i> stay instantly and hassle-free
        </h1>

        {/* Subtext */}
        <p className="font-inter font-normal text-[18px] text-white/70 max-w-[600px] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
          The modern booking engine for handpicked hotels and resorts. Increase direct conversions, manage availability, and offer 24/7 support.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
          <Link 
            to="/demo"
            className="w-full sm:w-auto bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg px-6 py-3 font-dm font-medium text-[16px] transition-colors shadow-lg"
          >
            Book a Free Demo
          </Link>
          <Link 
            to="/platform"
            className="w-full sm:w-auto bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-lg px-6 py-3 font-dm font-medium text-[16px] transition-colors shadow-lg"
          >
            Explore Platform
          </Link>
        </div>

      </div>
    </section>
  )
}