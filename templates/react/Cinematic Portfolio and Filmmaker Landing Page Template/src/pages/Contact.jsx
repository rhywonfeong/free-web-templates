import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Music Production',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Music Production', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative flex items-center">
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <Reveal>
              <h1 className="text-5xl md:text-7xl tracking-tighter font-medium uppercase mb-6 leading-none">
                Let's Create <br/>
                <span className="text-amber-500">Something</span> <br/>
                Record-Breaking.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xl text-zinc-400 font-light mb-12 max-w-md">
                Whether it's a film score, a massive brand activation, or the next world record, everything starts with a conversation.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-widest text-zinc-600 mb-2">Direct Inquiry</p>
                  <a href="mailto:contact@zmcorp.com" className="text-2xl tracking-tight font-medium hover:text-amber-500 transition-colors">
                    contact@zmcorp.com
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-zinc-600 mb-2">Headquarters</p>
                  <p className="text-xl tracking-tight font-medium text-zinc-300">
                    Amman, Jordan<br/>
                    Operating Globally
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal delay={400} type="scale">
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-700"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-700"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm uppercase tracking-widest text-zinc-500">Area of Interest</label>
                  <div className="relative">
                    <select 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Music Production" className="bg-zinc-900">Music Production</option>
                      <option value="Filmmaking" className="bg-zinc-900">Filmmaking</option>
                      <option value="Event Production" className="bg-zinc-900">Event Production (ZMCorp)</option>
                      <option value="Partnerships" className="bg-zinc-900">Partnerships / PR</option>
                      <option value="Other" className="bg-zinc-900">Other</option>
                    </select>
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="20" class="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"></iconify-icon>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm uppercase tracking-widest text-zinc-500">Your Vision</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-zinc-700"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-zinc-100 text-zinc-950 font-medium tracking-widest uppercase hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {status === 'submitting' ? (
                     <iconify-icon icon="solar:spinner-linear" width="24" class="animate-spin"></iconify-icon>
                  ) : status === 'success' ? (
                    'Message Sent'
                  ) : (
                    <>Send Message <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></>
                  )}
                </button>
                
                {status === 'success' && (
                  <p className="text-amber-500 text-sm text-center animate-fade-in">Thank you. I will be in touch shortly.</p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}