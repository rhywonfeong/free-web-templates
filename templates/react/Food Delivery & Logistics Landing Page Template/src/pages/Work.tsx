import React from 'react';
import { Link } from 'react-router-dom';
import 'iconify-icon';
import Button from '../components/Button';
import CityIllustration, { CityName } from '../components/CityIllustration';

const PageHeader = () => (
  <section className="relative bg-brand-gradient text-white pt-24 pb-24 overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[80px] text-center">
      <div className="inline-flex items-center space-x-2 bg-white/15 text-white px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6">
        <iconify-icon icon="solar:map-point-bold" width="16"></iconify-icon>
        <span>Our Work</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">Serving You In</h1>
      <p className="text-white/90 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
        We are expanding our network every day. Find Island Run delivery drivers currently operating in these major hubs:
      </p>
    </div>
    <div className="umbrella-curve-hero"></div>
  </section>
);

type Hub = {
  name: CityName;
  note: string;
  stat: string;
  href?: string;
  to?: string;
};

const HubGrid = () => {
  const hubs: Hub[] = [
    {
      name: 'Jamaica',
      note: 'Where it all began — the app that brings Caribbean food straight to your door.',
      stat: 'Founding Hub',
      href: 'https://www.islandrunja.com/'
    },
    {
      name: 'New York',
      note: 'High-density dispatch across the five boroughs, from bodegas to fine dining.',
      stat: 'US Flagship',
      to: '/contact'
    },
    {
      name: 'Los Angeles',
      note: 'Coast-to-coast coverage with routes tuned for sprawling LA neighborhoods.',
      stat: 'West Coast Hub',
      to: '/contact'
    },
    {
      name: 'Houston',
      note: 'Rapid expansion across the metro area with round-the-clock driver coverage.',
      stat: 'Fastest Growing',
      to: '/contact'
    },
    {
      name: 'Atlanta',
      note: 'Southern kitchens and quick logistics, delivered with world-class standards.',
      stat: 'Southeast Hub',
      to: '/contact'
    },
    {
      name: 'Southern Florida',
      note: 'Caribbean flavors meet US logistics across Miami and the surrounding coast.',
      stat: 'Coastal Network',
      to: '/contact'
    }
  ];

  return (
    <section className="py-[96px] px-6 lg:px-[80px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hubs.map((hub) => {
          const cardContent = (
            <>
              {/* City image banner */}
              <div className="relative h-48 overflow-hidden">
                <CityIllustration
                  city={hub.name}
                  className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                  {hub.stat}
                </span>
              </div>

              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-3xl mb-4 inline-flex items-center gap-2 group-hover:text-brand-primary transition-colors">
                  {hub.name}
                  <iconify-icon
                    icon={hub.href ? 'solar:square-top-up-linear' : 'solar:arrow-right-linear'}
                    width="24"
                    className="text-brand-primary opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
                  ></iconify-icon>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed flex-grow">{hub.note}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                  Drivers Active Now
                </span>
              </div>
            </>
          );

          const cardClass =
            'network-card group flex flex-col h-full !p-0 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/10';

          return hub.href ? (
            <a
              key={hub.name}
              href={hub.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order in ${hub.name} — opens islandrunja.com`}
              className={cardClass}
            >
              {cardContent}
            </a>
          ) : (
            <Link key={hub.name} to={hub.to ?? '/contact'} aria-label={`Get started in ${hub.name}`} className={cardClass}>
              {cardContent}
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <Link to="/contact">
          <Button variant="primary" className="text-lg px-8 py-4 shadow-lg shadow-brand-primary/30 hover:-translate-y-0.5">
            Bring Island Run to Your City
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default function Work() {
  return (
    <>
      <PageHeader />
      <HubGrid />
    </>
  );
}
