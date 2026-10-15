import { useEffect, useState } from 'react';
import Button from '../components/Button';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });
    
    document.querySelectorAll('.reveal-on-scroll, .reveal-group').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="pt-32 md:pt-40 pb-32 px-6 container mx-auto max-w-5xl">
      <div className="bg-[#f3f2ee]/80 backdrop-blur-md rounded-[2rem] p-8 md:p-16 lg:p-20 shadow-2xl reveal-on-scroll reveal-group border border-[#091728]/5">
        <div className="text-center mb-24 reveal-item" style={{transitionDelay: '100ms'}}>
          <h1 className="font-playfair text-6xl md:text-8xl tracking-tight text-[#091728] mb-8">
            Get in Touch
          </h1>
          <p className="font-sans text-xl text-[#091728]/80 leading-relaxed font-light max-w-2xl mx-auto">
            For distribution inquiries, press requests, and general communication, please reach out to our global team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Contact Info */}
          <div className="flex flex-col reveal-item" style={{transitionDelay: '300ms'}}>
            <h3 className="font-playfair text-4xl text-[#091728] mb-10">Offices</h3>
            
            <div className="mb-10 border-l border-[#091728]/20 pl-6 transition-colors duration-500 hover:border-[#cca950]">
              <h4 className="font-sans text-sm uppercase tracking-[0.15em] text-[#8a9db5] mb-3">London</h4>
              <p className="font-sans text-base text-[#091728]/80 leading-relaxed">
                14 Cinema Square<br/>
                London, UK W1D 3QX
              </p>
            </div>

            <div className="mb-10 border-l border-[#091728]/20 pl-6 transition-colors duration-500 hover:border-[#cca950]">
              <h4 className="font-sans text-sm uppercase tracking-[0.15em] text-[#8a9db5] mb-3">New York</h4>
              <p className="font-sans text-base text-[#091728]/80 leading-relaxed">
                248 Film Row, Suite 300<br/>
                New York, NY 10013
              </p>
            </div>

            <div className="border-l border-[#091728]/20 pl-6 transition-colors duration-500 hover:border-[#cca950]">
              <h4 className="font-sans text-sm uppercase tracking-[0.15em] text-[#8a9db5] mb-3">Direct</h4>
              <p className="font-sans text-base text-[#091728]/80 leading-relaxed">
                <a href="mailto:curator@nexgenfilms.co" className="hover:text-[#cca950] transition-colors">curator@nexgenfilms.co</a><br/>
                +44 (0) 20 7946 0111
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-10 reveal-item" style={{transitionDelay: '450ms'}} onSubmit={handleSubmit}>
            <div className="group">
              <label htmlFor="name" className="block font-sans text-xs uppercase tracking-[0.15em] text-[#8a9db5] mb-3 transition-colors duration-300 group-focus-within:text-[#cca950]">Name</label>
              <input 
                id="name"
                type="text" 
                className="w-full bg-transparent border-b border-[#091728]/20 py-3 text-[#091728] focus:outline-none focus:border-[#cca950] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-base focus:pl-3" 
                placeholder="Your full name" 
                required 
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block font-sans text-xs uppercase tracking-[0.15em] text-[#8a9db5] mb-3 transition-colors duration-300 group-focus-within:text-[#cca950]">Email</label>
              <input 
                id="email"
                type="email" 
                className="w-full bg-transparent border-b border-[#091728]/20 py-3 text-[#091728] focus:outline-none focus:border-[#cca950] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-base focus:pl-3" 
                placeholder="you@example.com" 
                required 
              />
            </div>
            <div className="group">
              <label htmlFor="subject" className="block font-sans text-xs uppercase tracking-[0.15em] text-[#8a9db5] mb-3 transition-colors duration-300 group-focus-within:text-[#cca950]">Subject</label>
              <select 
                id="subject"
                defaultValue=""
                className="w-full bg-transparent border-b border-[#091728]/20 py-3 text-[#091728] focus:outline-none focus:border-[#cca950] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-base appearance-none rounded-none focus:pl-3" 
                required
              >
                <option value="" disabled>Select an inquiry type...</option>
                <option value="distribution">Distribution</option>
                <option value="press">Press & Media</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div className="group">
              <label htmlFor="message" className="block font-sans text-xs uppercase tracking-[0.15em] text-[#8a9db5] mb-3 transition-colors duration-300 group-focus-within:text-[#cca950]">Message</label>
              <textarea 
                id="message"
                rows="5" 
                className="w-full bg-transparent border-b border-[#091728]/20 py-3 text-[#091728] focus:outline-none focus:border-[#cca950] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans text-base resize-none focus:pl-3" 
                placeholder="How can we assist you?" 
                required
              ></textarea>
            </div>
            
            <Button 
              variant="primary" 
              size="lg"
              type="submit" 
              className="w-full md:w-fit mt-4"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'idle' && 'Send Transmission'}
              {formStatus === 'submitting' && 'Sending...'}
              {formStatus === 'success' && 'Message Received'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}