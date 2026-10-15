import React from 'react'

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C232B', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <span className="text-white font-semibold uppercase tracking-widest text-sm block mb-4">
              Douglas Berger
            </span>
            <p className="text-[#9FB3C8] text-xs font-light max-w-xs leading-relaxed">
              Forensic evaluation and expert witness testimony for complex roofing, waterproofing, and building envelope defect litigation.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <p className="text-[#5E7A96] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                Direct Contact
              </p>
              <p className="text-[#9FB3C8] text-sm font-light mb-2">760-497-8699</p>
              <p className="text-[#9FB3C8] text-sm font-light">
                CV available on request.
              </p>
            </div>
            <div>
              <p className="text-[#5E7A96] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                Legal
              </p>
              <p className="text-[#9FB3C8] text-sm font-light">
                © 2025. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer