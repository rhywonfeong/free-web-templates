import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState('idle') // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('submitting')
    // Simulate API call
    setTimeout(() => {
      setFormState('success')
    }, 1500)
  }

  const inputClasses = "w-full bg-black/40 border border-[#1a1a1a] focus:border-[#FF4500] rounded-none px-4 py-3 font-mono text-sm text-white outline-none transition-colors placeholder:text-[#848884]/50 backdrop-blur-sm"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 relative overflow-hidden"
    >
      {/* Topographical Map SVG Background */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25 50 50 T 100 50 M0 20 Q 25 -5 50 20 T 100 20 M0 80 Q 25 55 50 80 T 100 80" fill="none" stroke="#FF4500" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs text-[#FF4500] tracking-widest uppercase mb-4 block">Secure Channel</span>
            <h1 className="font-sans font-bold tracking-tighter text-5xl sm:text-7xl uppercase mb-8 leading-none">
              Initiate <br />
              <span className="text-[#848884]">Transmission</span>
            </h1>
            <p className="font-mono text-[#848884] text-sm mb-12 max-w-md leading-relaxed">
              Whether you require a single vintage component restoration or a high-volume manufacturing contract, our engineers are standing by to review your schematics.
            </p>

            <div className="flex flex-col gap-8 border-l border-[#1a1a1a] pl-6">
              <div>
                <h4 className="font-mono text-xs text-[#848884] uppercase tracking-widest mb-2">Primary Facility</h4>
                <p className="font-sans text-xl text-white">West Godavari Hub</p>
                <p className="font-mono text-sm text-[#848884] mt-1">Eluru, Andhra Pradesh, India</p>
              </div>
              
              <div>
                <h4 className="font-mono text-xs text-[#848884] uppercase tracking-widest mb-2">Direct Comms</h4>
                <a href="mailto:chief.engineer@bspworks.com" className="font-sans text-xl text-white hover:text-[#FF4500] transition-colors block">
                  chief.engineer@bspworks.com
                </a>
                <a href="tel:+919876543210" className="font-mono text-sm text-[#848884] hover:text-white transition-colors mt-1 block">
                  +91 98765 43210
                </a>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#848884] uppercase tracking-widest mb-2">Operational Hours</h4>
                <p className="font-mono text-sm text-white">MON - SAT // 0800 - 1800 IST</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex items-center">
            <div className="w-full glass-panel p-8 sm:p-10 border-t-2 border-t-[#FF4500] relative overflow-hidden">
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <iconify-icon icon="solar:check-circle-bold-duotone" className="text-[#FF4500] text-7xl mb-6"></iconify-icon>
                  <h3 className="font-sans font-bold tracking-tighter text-3xl uppercase mb-2">Data Received</h3>
                  <p className="font-mono text-sm text-[#848884]">Our engineering team will analyze the parameters and respond within 24 cycles.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 font-mono text-xs text-white uppercase tracking-widest border border-[#1a1a1a] px-6 py-2 hover:bg-white/5 transition-colors"
                  >
                    Send New Query
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-[#848884] uppercase tracking-widest">Identification</label>
                      <input required type="text" placeholder="Full Name" className={inputClasses} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-[#848884] uppercase tracking-widest">Affiliation</label>
                      <input type="text" placeholder="Company (Optional)" className={inputClasses} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-[#848884] uppercase tracking-widest">Comms Node</label>
                    <input required type="email" placeholder="Email Address" className={inputClasses} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-[#848884] uppercase tracking-widest">Directive</label>
                    <select className={inputClasses}>
                      <option value="manufacturing">Contract Manufacturing</option>
                      <option value="restoration">Vintage Restoration</option>
                      <option value="consulting">Engineering Consultation</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                    <label className="font-mono text-[10px] text-[#848884] uppercase tracking-widest">Blueprint / Details</label>
                    <textarea required rows="4" placeholder="Describe the scope of work..." className={`${inputClasses} resize-none`}></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="bg-[#FF4500] text-white font-mono uppercase tracking-widest text-xs px-8 py-4 hover:bg-white hover:text-[#0D0D0D] transition-all duration-300 disabled:opacity-50 disabled:cursor-wait flex justify-center items-center gap-3"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <iconify-icon icon="solar:spinner-linear" className="animate-spin text-lg"></iconify-icon>
                        Transmitting...
                      </>
                    ) : (
                      'Transmit Blueprint'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}