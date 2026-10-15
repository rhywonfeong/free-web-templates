import React from 'react';
import Button from '../components/Button';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-stone-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-stone-500 mb-12">Have a question about your order, our products, or just want to talk coffee? We're here to help.</p>
            
            <div className="space-y-8 mb-12">
               <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-600 shrink-0">
                     <iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
                  </div>
                  <div>
                     <h4 className="font-bold uppercase tracking-tight">HQ Office</h4>
                     <p className="text-stone-500 mt-1">123 Roaster's Ave, Portland, OR 97204</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-600 shrink-0">
                     <iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
                  </div>
                  <div>
                     <h4 className="font-bold uppercase tracking-tight">Email Us</h4>
                     <p className="text-stone-500 mt-1">hello@luminacoffee.com</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-stone-100">
             <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-bold uppercase tracking-wide text-stone-700 mb-2">First Name</label>
                      <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 focus:bg-white transition-colors" placeholder="Jane" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold uppercase tracking-wide text-stone-700 mb-2">Last Name</label>
                      <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 focus:bg-white transition-colors" placeholder="Doe" />
                   </div>
                </div>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-wide text-stone-700 mb-2">Email Address</label>
                   <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 focus:bg-white transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-wide text-stone-700 mb-2">Message</label>
                   <textarea rows="4" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 focus:bg-white transition-colors resize-none" placeholder="How can we help?"></textarea>
                </div>
                <Button variant="dark" className="w-full">Send Message</Button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
}