const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Information */}
          <div className="lg:col-span-5">
            <span className="text-teal-700 font-semibold text-xs tracking-widest uppercase mb-4 block">Connect With Us</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-8">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-10 text-lg font-light">
              We provide streamlined corporate communication channels for your inquiries, appointments, and partnerships.
            </p>

            <div className="space-y-8">
              {/* Emergency Highlight */}
              <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-lg mb-8 flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-red-400">
                   <iconify-icon icon="solar:phone-calling-rounded-bold" width="24"></iconify-icon>
                 </div>
                 <div>
                   <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Emergency 24/7</p>
                   <p className="text-xl font-semibold text-white tracking-tight">+1 (800) 911-EABN</p>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                <iconify-icon icon="solar:map-point-linear" className="text-teal-600 mt-1" width="24"></iconify-icon>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-2">Corporate Office</h4>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">
                    123 Healthcare Avenue, Medical District<br />
                    New York, NY 10020
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <iconify-icon icon="solar:phone-linear" className="text-teal-600 mt-1" width="24"></iconify-icon>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-2">Direct Lines</h4>
                  <p className="text-slate-600 font-light text-sm mb-1">General: +1 (800) 123-4567</p>
                  <p className="text-slate-600 font-light text-sm">Fax: +1 (800) 123-4568</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <iconify-icon icon="solar:letter-linear" className="text-teal-600 mt-1" width="24"></iconify-icon>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-2">Digital Communication</h4>
                  <p className="text-slate-600 font-light text-sm mb-1">contact@eabensonhealthcare.com</p>
                  <p className="text-slate-600 font-light text-sm">Working Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Corporate Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@corporate.com" 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    placeholder="How can we assist you?" 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-colors h-32 resize-none text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm shadow-sm"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;