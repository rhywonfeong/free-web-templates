import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="reveal flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-3">Get in touch</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">We'd love to hear from you</h2>
            <p className="text-base text-slate-600 leading-relaxed mb-10">
              Have a question about our pricing, need technical support, or want to explore enterprise options? Send us a message and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-indigo-600 border border-slate-100">
                  <iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Email</h4>
                  <p className="text-sm text-slate-600">support@swiftfax.app</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-indigo-600 border border-slate-100">
                  <iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Office</h4>
                  <p className="text-sm text-slate-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="reveal bg-slate-50 border border-slate-200/60 rounded-2xl p-8 shadow-sm">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 transition-opacity duration-500">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                  <iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-sm text-slate-600 mb-6">Thanks for reaching out. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 py-2 px-4 rounded-full transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" 
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full p-3 border border-slate-200 rounded-xl bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white text-sm font-medium py-3 px-4 rounded-xl transition-all hover:shadow-md flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <iconify-icon icon="solar:spinner-linear" width="18" className="animate-spin"></iconify-icon>
                      Sending...
                    </>
                  ) : (
                    <>
                      <iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}