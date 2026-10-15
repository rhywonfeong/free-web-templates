import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Demo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 px-6">
      <div className="max-w-md w-full mx-auto">
        <Link to="/" className="inline-flex items-center text-sm text-stone-500 hover:text-stone-900 mb-8 transition-colors group">
          <iconify-icon icon="solar:arrow-left-linear" width="16" className="mr-2 group-hover:-translate-x-1 transition-transform"></iconify-icon>
          Back to home
        </Link>
        
        <div className="bg-white rounded-3xl border border-stone-200/80 shadow-sm p-8 md:p-10">
          <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-900 mb-6">
            <iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
          </div>
          
          <h1 className="text-2xl tracking-tight font-medium text-stone-900 mb-2">
            Request a Demo
          </h1>
          <p className="text-sm text-stone-500 mb-8">
            See how Orchestra can streamline your team's operations. We'll be in touch within 24 hours.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-xl p-6 text-center">
              <iconify-icon icon="solar:check-circle-linear" width="32" className="mb-2 text-emerald-600"></iconify-icon>
              <h3 className="font-medium mb-1">Request Received</h3>
              <p className="text-sm text-emerald-700/80">We've sent a confirmation to your email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-stone-700 mb-1.5">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-stone-400 focus:ring-0 outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-medium text-stone-700 mb-1.5">Company Size</label>
                <select 
                  id="company"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:border-stone-400 focus:ring-0 outline-none transition-colors text-sm appearance-none"
                >
                  <option>1-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-1000 employees</option>
                  <option>1000+ employees</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full mt-4 h-11 rounded-xl bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                Submit request
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}