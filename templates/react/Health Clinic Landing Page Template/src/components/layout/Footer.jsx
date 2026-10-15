import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative mt-20 pt-16 pb-8 border-t border-black/5 bg-white/40 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column - Contact Form */}
          <div className="glass-panel p-8 sm:p-10 rounded-[2.5rem]">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Need help booking an appointment?</h3>
            <p className="text-gray-500 mb-8">We can help! Fill out the form below.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="sr-only" htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="First Name" 
                    className="w-full bg-white/60 border border-white/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name" 
                    className="w-full bg-white/60 border border-white/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    className="w-full bg-white/60 border border-white/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Phone" 
                    className="w-full bg-white/60 border border-white/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  placeholder="Type your message here..." 
                  className="w-full bg-white/60 border border-white/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full glass-button-primary px-6 py-4 rounded-xl text-sm font-semibold tracking-wider text-gray-900 uppercase mt-2">
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Hours & Info */}
          <div className="flex flex-col justify-center">
            
            <div className="mb-12">
              <h3 className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.2em] mb-6">Clinic Hours</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between items-center py-2 border-b border-black/5">
                  <span className="font-medium text-gray-900">Monday:</span>
                  <span>9:30am - 1:30pm <span className="mx-2 text-gray-300">/</span> 3:30pm - 7:00pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-black/5">
                  <span className="font-medium text-gray-900">Tuesday:</span>
                  <span>9:30am - 1:30pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-black/5">
                  <span className="font-medium text-gray-900">Wednesday:</span>
                  <span>9:30am - 1:30pm <span className="mx-2 text-gray-300">/</span> 3:30pm - 7:00pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-black/5">
                  <span className="font-medium text-gray-900">Thursday:</span>
                  <span>9:30am - 1:30pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-black/5">
                  <span className="font-medium text-gray-900">Friday:</span>
                  <span>9:30am - 1:30pm <span className="mx-2 text-gray-300">/</span> 3:30pm - 7:00pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-black/5">
                  <span className="font-medium text-gray-900">Saturday:</span>
                  <span>9:30am - 1:30pm</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-900">Sunday:</span>
                  <span>9:30am - 1:30pm</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.2em] mb-4">Our Location</h3>
              <p className="text-gray-900 font-medium text-sm sm:text-base leading-relaxed">
                Unit 102 - 317 Renfrew Dr,<br />
                Markham, Ontario L3R 9S8
              </p>
              <p className="text-gray-500 text-sm mt-1 mb-8">(Entrance at the back)</p>

              <div className="flex items-center gap-4">
                <Link to="/book" className="glass-button px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest text-emerald-950 uppercase border border-gray-200">
                  Book Your Appointment
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-500">
            <a href="mailto:info@modernhealthclinic.ca" className="hover:text-emerald-700 transition-colors">
              info@modernhealthclinic.ca
            </a>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-300"></span>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">Follow Us</span>
              <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors" aria-label="Instagram">
                <iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-700 transition-colors" aria-label="Facebook">
                <iconify-icon icon="simple-icons:facebook" width="18"></iconify-icon>
              </a>
            </div>
          </div>
          
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} by Modern Health Clinic
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;