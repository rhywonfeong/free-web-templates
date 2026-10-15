import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  useGSAP(() => {
    // Scroll reveal animations for elements with .rv
    gsap.utils.toArray(sectionRef.current.querySelectorAll('.rv')).forEach(el => {
      gsap.fromTo(el, 
        { opacity: 0, y: 20 }, 
        {
          opacity: 1, 
          y: 0, 
          duration: 0.7, 
          ease: 'power2.out',
          scrollTrigger: { 
            trigger: el, 
            start: 'top 88%', 
            toggleActions: 'play none none none' 
          }
        }
      );
    });
  }, { scope: sectionRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      
      // Reset form after a few seconds
      setTimeout(() => {
        setStatus('idle');
        e.target.reset();
      }, 5000);
    }, 1500);
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-form-side">
        <p className="section-label contact-label rv">Enquiries</p>
        <h2 className="contact-h2 rv">Discuss a commission or licensing query.</h2>
        
        {status === 'success' ? (
          <div className="rv" style={{ padding: '2rem 0', minHeight: '300px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--serif)', fontStyle: 'italic' }}>
              Message Received
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '24rem' }}>
              Thank you for reaching out. Your enquiry has been received and we will get back to you within 1-2 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-cols">
              <div className="fg rv">
                <input type="text" id="name" className="fi" placeholder="Name" required disabled={status === 'submitting'} />
                <label htmlFor="name" className="fl">Name</label>
              </div>
              <div className="fg rv">
                <input type="email" id="email" className="fi" placeholder="Email" required disabled={status === 'submitting'} />
                <label htmlFor="email" className="fl">Email</label>
              </div>
            </div>
            <div className="fg rv">
              <input type="text" id="subject" className="fi" placeholder="Subject" required disabled={status === 'submitting'} />
              <label htmlFor="subject" className="fl">Subject</label>
            </div>
            <div className="fg rv">
              <textarea id="message" className="fi" placeholder="Message" required disabled={status === 'submitting'}></textarea>
              <label htmlFor="message" className="fl">Message</label>
            </div>
            <div className="contact-submit-row rv">
              <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              <span className="contact-note">We typically respond within 1-2 business days.</span>
            </div>
          </form>
        )}
      </div>
      
      <div className="contact-visual">
        <div className="cv-grid"></div>
        <span className="cv-letter">M</span>
        <div className="cv-content rv">
          <p className="cv-quote">"Every letterform is a decision.<br />Every decision is culture."</p>
          <div className="cv-divider"></div>
          <span className="cv-tagline">Monograph Type Foundry</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;