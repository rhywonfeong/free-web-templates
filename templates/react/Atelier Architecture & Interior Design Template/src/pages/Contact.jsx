import React, { useState } from 'react';
import { Reveal } from '../components/shared/Reveal';
import { Input, Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Please tell us about your project";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
      }, 1500);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-warm-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <Reveal>
            <div>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Contact</h1>
              <p className="text-gray-600 font-light text-lg mb-16 max-w-md leading-relaxed">
                We welcome inquiries for residential, commercial, and hospitality projects globally. Please use the form to detail your requirements, or contact our studio directly.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Studio</h4>
                  <p className="font-light">42 Design District<br/>London, UK W1D 4EY</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Direct Inquiries</h4>
                  <p className="font-light"><a href="mailto:hello@atelier.com" className="hover:opacity-70 transition-opacity">hello@atelier.com</a></p>
                  <p className="font-light"><a href="tel:+442071234567" className="hover:opacity-70 transition-opacity">+44 (0) 207 123 4567</a></p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            {submitSuccess ? (
              <div className="bg-white p-12 text-center h-full flex flex-col justify-center items-center shadow-sm">
                <iconify-icon icon="solar:check-circle-linear" className="text-charcoal mb-6" width="64" height="64" />
                <h3 className="text-3xl font-serif mb-4">Inquiry Received</h3>
                <p className="text-gray-500 font-light">Thank you for reaching out. A director will review your project details and contact you within 48 hours.</p>
                <Button className="mt-8" onClick={() => setSubmitSuccess(false)} variant="secondary">Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 shadow-sm">
                <h3 className="text-2xl font-serif mb-8 tracking-tight border-b border-gray-100 pb-4">Project Inquiry</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input 
                    label="Full Name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    error={errors.name}
                    placeholder="Jane Doe"
                  />
                  <Input 
                    label="Email Address" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    error={errors.email}
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Project Type</label>
                    <select 
                      name="projectType" 
                      value={formData.projectType} 
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-charcoal focus:outline-none focus:border-charcoal appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Budget Range</label>
                    <select 
                      name="budget" 
                      value={formData.budget} 
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-charcoal focus:outline-none focus:border-charcoal appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Range</option>
                      <option value="<50k">Under £50,000</option>
                      <option value="50k-150k">£50,000 - £150,000</option>
                      <option value="150k-500k">£150,000 - £500,000</option>
                      <option value=">500k">£500,000+</option>
                    </select>
                  </div>
                </div>

                <Textarea 
                  label="Project Details" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  error={errors.message}
                  placeholder="Tell us about the scope, location, and timeline..."
                />

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full mt-4" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
              </form>
            )}
          </Reveal>

        </div>
      </div>
    </div>
  );
}