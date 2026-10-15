import React, { useState, useEffect } from 'react';
import RevealText from '../components/RevealText';
import clsx from 'clsx';

export default function Initiate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'digital-platform',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: 'digital-platform',
          budget: '',
          message: ''
        });
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <main className="flex-1 w-full flex flex-col relative z-10">
      
      {/* 
        HERO SECTION 
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-16 md:pb-24 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-1 md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6 md:mb-0">Initiate Dialogue</p>
          </div>

          <div className="col-span-1 md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] font-medium tracking-tighter leading-[0.85] text-gray-900 mb-8">
              <RevealText text="Let's Build Together" />
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed font-medium mt-8">
              We partner with ambitious brands to construct scalable, immersive digital infrastructures. Please provide details regarding your operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 
        CONTENT & FORM SECTION
      */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-6">
          
          {/* Left Column: Contact Details */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-12 border-t border-gray-200 pt-6">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Direct Communication</h3>
              <a href="mailto:hello@luminastudio.example.com" className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-gray-500 transition-colors">
                hello@luminastudio.example.com
              </a>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Headquarters</h3>
              <p className="text-base text-gray-700 leading-relaxed font-medium">
                100 Digital Way, Suite 404<br />
                San Francisco, CA 94107<br />
                United States
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Social Network</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2 w-max">
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> Twitter / X
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2 w-max">
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> LinkedIn
                </a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2 w-max">
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="col-span-1 lg:col-span-7 lg:col-start-6">
            <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-2xl shadow-gray-200/40 relative overflow-hidden">
              
              {/* Form Success Overlay */}
              <div className={clsx(
                "absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-12 text-center transition-all duration-700 ease-in-out",
                status === 'success' ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-8"
              )}>
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <iconify-icon icon="solar:check-read-linear" width="32" height="32"></iconify-icon>
                </div>
                <h3 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Transmission Received</h3>
                <p className="text-gray-500 font-medium">
                  Thank you for initiating dialogue. Our engineering leads will review your requirements and respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Company / Organization</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectType" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Project Discipline</label>
                    <select 
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-gray-900 focus:bg-white transition-colors appearance-none cursor-pointer"
                    >
                      <option value="digital-platform">Digital Platform / Web App</option>
                      <option value="ecommerce">E-Commerce Architecture</option>
                      <option value="corporate-site">Corporate Infrastructure</option>
                      <option value="experimental">Experimental / R&D</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Project Brief *</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b border-gray-300 px-4 py-3 text-gray-900 font-medium focus:outline-none focus:border-gray-900 focus:bg-white transition-colors resize-none"
                    placeholder="Describe your technical requirements and business objectives..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full md:w-auto self-start mt-4 bg-gray-900 text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-gray-800 transition-all outline-none focus-visible:ring-4 focus-visible:ring-gray-300 disabled:opacity-70 flex items-center justify-center gap-3 min-w-[200px]"
                >
                  {status === 'submitting' ? (
                    <>
                      <iconify-icon icon="solar:spinner-linear" className="animate-spin" width="18"></iconify-icon>
                      Transmitting...
                    </>
                  ) : (
                    <>
                      Initialize Request
                      <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}