import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:infinity-line-duotone" class="text-3xl text-[#0a1433]"></iconify-icon>
          <span className="text-xl font-semibold tracking-tight text-[#0a1433]">SubgenAI</span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-4">
          <Link to="/#who-we-are" className="text-sm font-medium text-[#263669] hover:text-[#4ba8ed] transition-colors">Who We Are</Link>
          <Link to="/#solutions" className="text-sm font-medium text-[#263669] hover:text-[#4ba8ed] transition-colors">Solutions</Link>
          <Link to="/investors" className="text-sm font-medium text-[#263669] hover:text-[#4ba8ed] transition-colors">Investors</Link>
          <Link to="/news" className="text-sm font-medium text-[#263669] hover:text-[#4ba8ed] transition-colors">News</Link>
          <a href="#" className="text-sm font-medium text-[#263669] hover:text-[#4ba8ed] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="text-[#0a1433] hover:text-[#4ba8ed] transition-colors">
            <iconify-icon icon="simple-icons:linkedin" class="text-xl"></iconify-icon>
          </a>
          <a href="#" aria-label="Twitter" className="text-[#0a1433] hover:text-[#4ba8ed] transition-colors">
            <iconify-icon icon="simple-icons:x" class="text-xl"></iconify-icon>
          </a>
          <a href="#" aria-label="GitHub" className="text-[#0a1433] hover:text-[#4ba8ed] transition-colors">
            <iconify-icon icon="simple-icons:github" class="text-xl"></iconify-icon>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Subgen AI. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#263669] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#263669] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer