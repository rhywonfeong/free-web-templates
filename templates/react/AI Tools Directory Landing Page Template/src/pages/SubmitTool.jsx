import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function SubmitTool() {
  const { user } = useAuth();
  const { categories } = useApp();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    tagline: '',
    description: '',
    category: '',
    pricing: 'Free',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // In a real app, we would add the tool to the database here
    }, 1500);
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <iconify-icon icon="solar:lock-password-linear" class="text-3xl text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Login Required</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">
          You need an account to submit a tool to the directory. This helps us prevent spam.
        </p>
        <Link to="/login">
          <Button variant="primary" fullWidth>Log In / Sign Up</Button>
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="max-w-lg mx-auto mt-20 p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
        <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <iconify-icon icon="solar:check-circle-bold" class="text-3xl text-emerald-500" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Submission Received!</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">
          Thank you for submitting {formData.name}. Our team will review your submission and publish it if it meets our guidelines.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => setSuccess(false)}>Submit Another</Button>
          <Button variant="primary" onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Submit an AI Tool
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          Built something amazing? Add it to our directory and get in front of thousands of early adopters and tech enthusiasts.
        </p>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-2">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Tool Name <span className="text-red-500">*</span></label>
                <Input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="e.g. NexAI Assistant" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Website URL <span className="text-red-500">*</span></label>
                <Input 
                  type="url" 
                  name="website" 
                  value={formData.website} 
                  onChange={handleChange} 
                  placeholder="https://..." 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Short Tagline <span className="text-red-500">*</span></label>
              <Input 
                name="tagline" 
                value={formData.tagline} 
                onChange={handleChange} 
                placeholder="Brief, catchy description (max 60 characters)" 
                maxLength={60}
                required 
              />
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-2">Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Category <span className="text-red-500">*</span></label>
                <select 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange} 
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                  required
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Pricing Model</label>
                <select 
                  name="pricing" 
                  value={formData.pricing} 
                  onChange={handleChange} 
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white"
                >
                  <option value="Free">Free</option>
                  <option value="Freemium">Freemium</option>
                  <option value="Paid">Paid</option>
                  <option value="Open Source">Open Source</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Full Description <span className="text-red-500">*</span></label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                rows="4" 
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white resize-none"
                placeholder="Describe what your tool does, who it's for, and key features..."
                required
              ></textarea>
            </div>
          </div>

          <div className="pt-6">
            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              fullWidth 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Tool for Review'}
            </Button>
            <p className="text-xs text-center text-zinc-500 mt-4">
              By submitting, you agree to our Terms of Service and guidelines.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}