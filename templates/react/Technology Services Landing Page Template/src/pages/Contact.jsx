import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    timeline: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '', company: '', email: '', phone: '', service: '', message: '', timeline: '', budget: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pb-24">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Let’s Build a Smarter Solution for Your Business</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Tell us about your workflow, challenge, or idea — and let’s explore the right technical solution for your business.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          
          {isSuccess && (
            <div className="mb-8 p-4 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200 flex items-center gap-3 fade-in-up">
              <iconify-icon icon="solar:check-circle-bold" width="24" height="24" className="text-emerald-500"></iconify-icon>
              <div>
                <h4 className="font-semibold">Inquiry sent successfully!</h4>
                <p className="text-sm opacity-90">We've received your message and will be in touch shortly.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name *</label>
                <input 
                  type="text" id="name" name="name" required
                  value={formState.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company Name *</label>
                <input 
                  type="text" id="company" name="company" required
                  value={formState.company} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address *</label>
                <input 
                  type="email" id="email" name="email" required
                  value={formState.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                  placeholder="jane@acmecorp.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number (Optional)</label>
                <input 
                  type="tel" id="phone" name="phone"
                  value={formState.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="block text-sm font-medium text-slate-700">What service are you interested in? *</label>
              <select 
                id="service" name="service" required
                value={formState.service} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-white"
              >
                <option value="" disabled>Select a service...</option>
                <option value="Custom Web Application">Custom Web Application</option>
                <option value="Workflow Automation">Workflow Automation</option>
                <option value="Technical Solutions">Technical Solutions</option>
                <option value="System Integration">System Integration</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Briefly describe your project or challenge *</label>
              <textarea 
                id="message" name="message" rows="4" required
                value={formState.message} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all resize-y"
                placeholder="We are struggling with..."
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-700">Estimated Timeline (Optional)</label>
                <select 
                  id="timeline" name="timeline"
                  value={formState.timeline} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-white"
                >
                  <option value="">Select timeline...</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-medium text-slate-700">Estimated Budget (Optional)</label>
                <select 
                  id="budget" name="budget"
                  value={formState.budget} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-white"
                >
                  <option value="">Select budget range...</option>
                  <option value="Under $5k">Under $5k</option>
                  <option value="$5k - $15k">$5k - $15k</option>
                  <option value="$15k - $30k">$15k - $30k</option>
                  <option value="$30k+">$30k+</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white font-medium py-4 px-8 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <iconify-icon icon="solar:spinner-linear" className="animate-spin" width="20" height="20"></iconify-icon>
                  Sending...
                </>
              ) : (
                "Send Inquiry"
              )}
            </button>
            <p className="text-center text-sm text-slate-500 mt-4">
              We’ll review your inquiry and get back to you within 24 hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}