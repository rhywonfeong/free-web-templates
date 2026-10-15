import React from 'react';
import { Link } from 'react-router-dom';
import 'iconify-icon';
import Button from '../components/Button';

const PageHeader = () => (
  <section className="relative bg-brand-gradient text-white pt-24 pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[80px] text-center">
      <div className="inline-flex items-center space-x-2 bg-white/15 text-white px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6">
        <iconify-icon icon="solar:heart-bold" width="16"></iconify-icon>
        <span>About Us</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">The Island Run Mission</h1>
      <p className="text-white/90 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
        Caribbean food, straight to your door. From the islands to major US metros.
      </p>
    </div>
    <div className="umbrella-curve-hero"></div>
  </section>
);

const Mission = () => (
  <section className="py-[96px] px-6 lg:px-[80px] max-w-[1000px] mx-auto">
    <div className="network-card p-10 md:p-14">
      <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center mb-8">
        <iconify-icon icon="solar:flag-2-bold-duotone" width="40" className="text-brand-primary"></iconify-icon>
      </div>
      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
        Island Run is the app that brings authentic Caribbean food straight to your door. Launched in Jamaica, we
        have grown into a sprawling delivery network, pairing beloved island kitchens with unmatched customer
        service to redefine delivery in New York,
        Los Angeles, Houston, Atlanta, and Southern Florida. Overseen by our Head of Operations,{' '}
        <strong className="text-gray-900">Chevonick Lynch</strong>, and our dedicated project management team led by{' '}
        <strong className="text-gray-900">Sasha</strong>, our mission is to ensure every single order meets strict,
        world-class quality standards.
      </p>
    </div>
  </section>
);

const Leadership = () => {
  const team = [
    {
      name: 'Chevonick Lynch',
      role: 'Head of Operations',
      desc: 'Oversees the entire Island Run logistics network, keeping every hub running at world-class standards.',
      icon: 'solar:user-check-bold-duotone',
      color: 'bg-brand-primary/10'
    },
    {
      name: 'Sasha',
      role: 'Project Management Lead',
      desc: 'Leads our dedicated project management team, ensuring every order meets strict quality benchmarks.',
      icon: 'solar:clipboard-check-bold-duotone',
      color: 'bg-brand-accent/20'
    }
  ];

  return (
    <section className="pb-[96px] px-6 lg:px-[80px] max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Leadership</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">The people who keep Island Run moving, every single day.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {team.map((member) => (
          <div key={member.name} className="network-card flex flex-col h-full">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 ${member.color}`}>
              <iconify-icon icon={member.icon} width="40" className="text-black"></iconify-icon>
            </div>
            <h3 className="text-3xl mb-1">{member.name}</h3>
            <p className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-5">{member.role}</p>
            <p className="text-lg text-gray-600 leading-relaxed">{member.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <Link to="/contact">
          <Button variant="primary" className="text-lg px-8 py-4 shadow-lg shadow-brand-primary/30 hover:-translate-y-0.5">
            Partner with Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <>
      <PageHeader />
      <Mission />
      <Leadership />
    </>
  );
}
