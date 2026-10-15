"use client";
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import AbstractGlassArt from './AbstractGlassArt';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const features = [
  {
    id: 'general-trading',
    tag: 'General Trading',
    count: 14,
    cardTitle: 'TRADE HUB',
    icon: 'solar:shop-2-linear',
    // Using high-quality contextual Unsplash images instead of broken local paths
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?w=800&q=80',
    contentLabel: 'GENERAL TRADING',
    contentBadge: 'CORE',
    contentTitle: 'Powering commerce across the region',
    contentBody: 'Our general trading arm spans a diverse product portfolio, supplying markets across the region with reliability and scale. With 14 branches and deep supplier networks, we keep commerce moving.',
    metrics: [
      { label: 'Branches', value: '14' },
      { label: 'Employees', value: '44' },
      { label: 'Companies', value: '3' }
    ]
  },
  {
    id: 'money-exchange',
    tag: 'Money Exchange',
    count: 5,
    cardTitle: 'FOREX VAULT',
    icon: 'solar:card-transfer-linear',
    image: 'https://images.unsplash.com/photo-1580519542036-ed47690ce456?w=800&q=80',
    contentLabel: 'FINANCIAL SERVICES',
    contentBadge: 'LICENSED',
    contentTitle: 'Trusted financial exchange & services',
    contentBody: 'Chya Group operates 5 dedicated money exchange offices delivering fast, secure, and competitive currency exchange alongside comprehensive financial services for individuals and businesses.',
    metrics: [
      { label: 'Offices', value: '5' },
      { label: 'Currencies', value: '20+' },
      { label: 'Daily Ops', value: '24/7' }
    ]
  },
  {
    id: 'mobile-tech',
    tag: 'Mobile & Tech',
    count: 3,
    cardTitle: 'TECH NEXUS',
    icon: 'solar:smartphone-2-linear',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    contentLabel: 'MOBILE & TECHNOLOGY',
    contentBadge: 'GROWTH',
    contentTitle: 'Connecting people through technology',
    contentBody: 'From mobile devices to digital solutions, our technology division serves consumers and enterprises alike. We bridge the gap between cutting-edge tech and everyday needs across the region.',
    metrics: [
      { label: 'Online Ops', value: '3' },
      { label: 'Partners', value: '10+' },
      { label: 'Support', value: '24/7' }
    ]
  },
  {
    id: 'printing',
    tag: 'Printing',
    count: 1,
    cardTitle: 'PRINT LAB',
    icon: 'solar:printer-minimalistic-linear',
    image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80',
    contentLabel: 'PRINTING & PHOTOCOPY',
    contentBadge: 'SERVICE',
    contentTitle: 'Professional printing for every need',
    contentBody: 'Our printing and photocopy center delivers high-quality print solutions for businesses, institutions, and individuals. From documents to banners, we handle it all with precision and speed.',
    metrics: [
      { label: 'Office', value: '1' },
      { label: 'Formats', value: 'All' },
      { label: 'Turnaround', value: 'Fast' }
    ]
  },
  {
    id: 'online-trading',
    tag: 'Online Trading',
    count: 3,
    cardTitle: 'MARKET EDGE',
    icon: 'solar:chart-square-linear',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    contentLabel: 'ONLINE TRADING',
    contentBadge: 'DIGITAL',
    contentTitle: 'Smart trading in digital markets',
    contentBody: 'Our online trading division operates 3 active digital market channels, giving clients access to global financial instruments. Backed by 14 bank & company partnerships for seamless execution.',
    metrics: [
      { label: 'Channels', value: '3' },
      { label: 'Bank Partners', value: '14' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
];

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Custom hook to trigger animation when section scrolls into view
  const [sectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.15 }, true);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % features.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance every 13 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 13000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={clsx(
        "w-full px-6 md:px-12 lg:px-24",
        "reveal-hidden", // Base state hidden and translated
        isIntersecting && "reveal-visible" // Triggers transition when intersecting
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Headline & Carousel */}
        <div className="flex flex-col relative z-20">
          
          {/* Headline Area - Improved Typography */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              Five <span className="font-editorial text-white/80 font-normal">sectors</span>,<br />
              one <span className="font-editorial text-white/80 font-normal">vision</span>.
            </h1>
            <p className="text-white/50 text-sm md:text-base max-w-md leading-relaxed font-light">
              Chya Group operates across five dynamic industries, spanning 14 branches with 44 professionals driving growth across the region.
            </p>
          </div>

          {/* Card Carousel */}
          <div className="relative h-[480px] w-full max-w-[500px] perspective-1000 mt-4">
            {features.map((feature, index) => {
              // Calculate relative position for the stack effect
              const offset = (index - activeIndex + features.length) % features.length;
              
              // Define styles based on stack position with smoother cubic-bezier transitions
              let stackClasses = "";
              let zIndex = 0;
              
              if (offset === 0) {
                // Front active card
                stackClasses = "translate-x-0 translate-y-0 scale-100 opacity-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] border-white/20";
                zIndex = 30;
              } else if (offset === 1) {
                // Middle card
                stackClasses = "translate-x-8 translate-y-8 scale-[0.92] opacity-60 border-white/5";
                zIndex = 20;
              } else if (offset === 2) {
                // Back card
                stackClasses = "translate-x-16 translate-y-16 scale-[0.84] opacity-20 border-white/5";
                zIndex = 10;
              } else {
                // Hidden cards
                stackClasses = "translate-x-24 translate-y-24 scale-75 opacity-0";
                zIndex = 0;
              }

              return (
                <div 
                  key={feature.id}
                  className={clsx(
                    "absolute top-0 left-0 w-full h-full rounded-3xl glass-panel transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col overflow-hidden",
                    stackClasses
                  )}
                  style={{ zIndex }}
                >
                  <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
                     <img 
                       src={feature.image} 
                       alt={feature.cardTitle} 
                       className="w-full h-full object-cover opacity-40 mix-blend-lighten transition-transform duration-10000 hover:scale-110" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  
                  {/* Decorative glass art inside the card */}
                  <div className="absolute inset-0 z-0 mix-blend-overlay opacity-50">
                     <AbstractGlassArt variant={index} />
                  </div>
                  
                  {/* Card Content Overlay */}
                  <div className="relative z-10 flex-1 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="px-2.5 py-1.5 bg-black/50 backdrop-blur-md rounded-md text-[10px] tracking-widest uppercase text-white/70 border border-white/10 flex items-center gap-2 font-medium">
                        <iconify-icon icon={feature.icon} width="14"></iconify-icon>
                        {feature.tag}
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20 relative shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-30" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-semibold tracking-tight text-white drop-shadow-xl mb-5">
                        {feature.cardTitle}
                      </h3>
                      <div className="flex gap-2.5">
                        <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-[10px] tracking-wider uppercase text-white border border-white/10 font-medium">
                          Active
                        </div>
                        <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg text-[10px] tracking-wider uppercase text-white/70 border border-white/5 flex items-center gap-1.5">
                          <iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                          Verified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Carousel Controls */}
            <div className="absolute -bottom-20 left-0 flex items-center gap-5 z-40">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous feature"
              >
                <iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
              </button>
              <div className="flex gap-2">
                {features.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className="py-2" // Larger click target
                  >
                    <div 
                      className={clsx(
                        "h-1 rounded-full transition-all duration-500 ease-out",
                        idx === activeIndex ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                      )}
                    />
                  </button>
                ))}
              </div>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
                aria-label="Next feature"
              >
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col mt-16 lg:mt-0 pt-0 lg:pt-16">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-12 justify-start lg:justify-end">
            {features.map((f, idx) => (
              <button
                key={f.tag}
                onClick={() => setActiveIndex(idx)}
                className={clsx(
                  "flex items-center gap-2 px-3.5 py-2 rounded-full text-[11px] font-medium transition-all duration-300 border uppercase tracking-wider",
                  idx === activeIndex 
                    ? "bg-white/10 text-white border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
                    : "bg-transparent text-white/40 border-transparent hover:text-white/80 hover:bg-white/5"
                )}
              >
                {f.tag}
                <span className={clsx(
                  "text-[9px] px-1.5 py-0.5 rounded-full bg-black/50 ml-1 border",
                  idx === activeIndex ? "text-white/90 border-white/10" : "text-white/30 border-transparent"
                )}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>

          {/* Info Card - We use a key based on activeIndex to trigger CSS animation on change */}
          <div 
            key={activeIndex} 
            className="glass-panel rounded-3xl p-8 lg:p-10 animate-fade-slide relative overflow-hidden bg-[#0a0a0a]/50"
          >
            {/* Subtle highlight effect on the card */}
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="flex justify-between items-start mb-6">
              <div className="text-[10px] tracking-[0.2em] font-semibold text-white/50 uppercase">
                {features[activeIndex].contentLabel}
              </div>
              <div className="px-2 py-1 rounded text-[9px] uppercase tracking-wider border border-white/10 text-white/40 bg-black/30">
                 {features[activeIndex].contentBadge}
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white mb-5 leading-snug">
              {features[activeIndex].contentTitle}
            </h2>
            
            <div className="space-y-5 mb-12 text-sm lg:text-base text-white/50 leading-relaxed font-light">
              <p>
                {features[activeIndex].contentBody}
              </p>
              <p className="text-white/30">
                Experience the next evolution of industry operations with zero friction and maximum visibility across the network.
              </p>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {features[activeIndex].metrics.map((metric, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="text-2xl lg:text-3xl font-medium text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[9px] tracking-[0.15em] uppercase text-white/40">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}