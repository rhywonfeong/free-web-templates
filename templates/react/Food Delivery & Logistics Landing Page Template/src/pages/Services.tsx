import React from 'react';
import { Link } from 'react-router-dom';
import 'iconify-icon';
import Button from '../components/Button';

const PageHeader = () => (
  <section className="relative bg-brand-gradient text-white pt-24 pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[80px] text-center">
      <div className="inline-flex items-center space-x-2 bg-white/15 text-white px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6">
        <iconify-icon icon="solar:box-bold" width="16"></iconify-icon>
        <span>Services</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">Caribbean Food. Straight to Your Door.</h1>
      <p className="text-white/90 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
        From fresh island meals to full-scale vendor logistics, Island Run keeps every order moving.
      </p>
    </div>
    <div className="umbrella-curve-hero"></div>
  </section>
);

const ServiceGrid = () => {
  const services = [
    {
      title: 'Caribbean Food Delivery',
      desc: 'Your favorite Caribbean meals delivered piping hot, straight from the kitchen to your door.',
      icon: 'solar:chef-hat-bold-duotone',
      color: 'bg-brand-primary/10'
    },
    {
      title: 'Grocery Runs',
      desc: 'Everyday essentials picked and delivered in minutes, with real-time tracking on every basket.',
      icon: 'solar:cart-large-2-bold-duotone',
      color: 'bg-brand-accent/20'
    },
    {
      title: 'Package Logistics',
      desc: 'Secure same-day package delivery across our hubs, managed with world-class quality standards.',
      icon: 'solar:box-minimalistic-bold-duotone',
      color: 'bg-surface'
    },
    {
      title: 'Vendor Partnerships',
      desc: 'Reach thousands of new customers. Grow your sales with our seamless international logistics network.',
      icon: 'solar:shop-2-bold-duotone',
      color: 'bg-brand-primary/10'
    },
    {
      title: 'Driver Network',
      desc: 'Join our network of swift delivery drivers. Earn on your own schedule with flexible hours in every hub.',
      icon: 'solar:scooter-bold-duotone',
      color: 'bg-brand-accent/20'
    },
    {
      title: 'Enterprise Dispatch',
      desc: 'Dedicated dispatch for restaurants and retailers scaling from the Caribbean to major US metros.',
      icon: 'solar:server-square-update-bold-duotone',
      color: 'bg-surface'
    }
  ];

  return (
    <section className="py-[96px] px-6 lg:px-[80px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item) => (
          <div key={item.title} className="network-card flex flex-col h-full">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 ${item.color}`}>
              <iconify-icon icon={item.icon} width="40" className="text-black"></iconify-icon>
            </div>
            <h3 className="text-3xl mb-4">{item.title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed flex-grow">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 flex flex-wrap justify-center gap-4">
        <a href="https://onelink.to/a6939s" target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className="text-lg px-8 py-4 shadow-lg shadow-brand-primary/30 hover:-translate-y-0.5">
            Order Now
          </Button>
        </a>
        <Link to="/contact">
          <Button variant="outline" className="text-lg px-8 py-4 hover:-translate-y-0.5">
            Partner with Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default function Services() {
  return (
    <>
      <PageHeader />
      <ServiceGrid />
    </>
  );
}
