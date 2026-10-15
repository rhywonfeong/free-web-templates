import React from 'react'
import Button from '../components/ui/Button'

const Investors = () => {
  return (
    <div className="min-h-[70vh] bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-sm font-medium text-[#4ba8ed] mb-4 uppercase tracking-wider">Investor Relations</div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0a1433] mb-8">
          Investing in the future of Enterprise AI
        </h1>
        <div className="w-16 h-1 bg-[#263669] mb-12"></div>
        
        <div className="prose prose-lg text-[#263669] max-w-none">
          <p className="lead text-xl mb-8">
            Subgen AI is positioned at the intersection of generative AI and enterprise infrastructure. Our mission is to provide the secure, scalable, and compliant foundation that organizations need to realize the value of artificial intelligence.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-16">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-[#0a1433] mb-2">Financial Reports</h3>
              <p className="text-sm mb-4">Access our latest quarterly earnings, annual reports, and proxy statements.</p>
              <a href="#" className="text-[#4ba8ed] text-sm font-medium hover:underline flex items-center">
                View Reports <iconify-icon icon="solar:download-linear" class="ml-1"></iconify-icon>
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-[#0a1433] mb-2">Corporate Governance</h3>
              <p className="text-sm mb-4">Review our board composition, committee charters, and governance documents.</p>
              <a href="#" className="text-[#4ba8ed] text-sm font-medium hover:underline flex items-center">
                Governance Docs <iconify-icon icon="solar:document-linear" class="ml-1"></iconify-icon>
              </a>
            </div>
          </div>

          <div className="bg-[#0a1433] text-white p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
              <p className="text-[#8fd9f7] opacity-80">For investor inquiries, please contact our IR team.</p>
            </div>
            <Button variant="white">Contact IR</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investors