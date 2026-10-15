import React from 'react';
import { Link } from 'react-router-dom';
import 'iconify-icon';
import Logo from './Logo';

type FooterLink = {
  label: string;
  to?: string;
  href?: string;
};

const Footer = () => {
  const navigationLinks: FooterLink[] = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
    { label: 'Terms of Service', to: '/' }
  ];

  const footerColumns: { title: string; links: FooterLink[] }[] = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Features', to: '/features' },
        { label: 'Our Work', to: '/work' },
        { label: 'Partner with Us', to: '/contact' }
      ]
    },
    {
      title: 'Serving You In',
      links: [
        { label: 'Jamaica', href: 'https://www.islandrunja.com/' },
        { label: 'New York', to: '/work' },
        { label: 'Los Angeles', to: '/work' },
        { label: 'Houston', to: '/work' },
        { label: 'Atlanta', to: '/work' },
        { label: 'Southern Florida', to: '/work' }
      ]
    }
  ];

  return (
    <footer className="bg-brand-gradient text-white pt-20 relative">
      {/* Umbrella Curve Decorative Edge */}
      <div className="umbrella-curve-footer"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[80px]">

        {/* Top Section */}
        <div className="lg:flex border-b border-white/20 pb-16">
          <div className="flex flex-col lg:w-[35%] lg:pr-8 mb-12 lg:mb-0">
            <div className="mb-6">
              <Logo variant="light" size="lg" />
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-white tracking-tight">Island Run Delivery</h2>
              <p className="text-white/80 mt-2 font-medium">Caribbean food, straight to your door.</p>
            </div>

            {/* App Download Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://apps.apple.com/jm/app/island-run-delivery/id6742345415" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-md border border-white/10 hover:border-white/30">
                <iconify-icon icon="simple-icons:apple" width="24"></iconify-icon>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] leading-none text-gray-300 mb-1">Download on the</span>
                  <span className="text-sm font-semibold leading-none tracking-wide">App Store</span>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.customer.islandrun&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-md border border-white/10 hover:border-white/30">
                <iconify-icon icon="logos:google-play-icon" width="24"></iconify-icon>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] leading-none text-gray-300 mb-1">GET IT ON</span>
                  <span className="text-sm font-semibold leading-none tracking-wide">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:border-l border-white/20 flex-1 lg:pl-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <h3 className="uppercase text-brand-accent font-bold tracking-wider text-sm mb-6">Navigation</h3>
                <ul className="grid gap-4">
                  {navigationLinks.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to ?? '/'} className="text-white/90 hover:text-white hover:underline font-medium transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <h3 className="uppercase text-brand-accent font-bold tracking-wider text-sm mb-6">{col.title}</h3>
                  <ul className="grid gap-4">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {link.href ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/90 hover:text-white hover:underline font-medium transition-colors"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link to={link.to ?? '/'} className="text-white/90 hover:text-white hover:underline font-medium transition-colors">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 text-sm font-medium mb-6 md:mb-0">
            © 2026 Island Run Delivery. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-brand-accent transition-colors flex items-center gap-2 font-semibold">
              <iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
              <span className="hidden sm:inline">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-brand-accent transition-colors flex items-center gap-2 font-semibold">
              <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="#" className="text-white hover:text-brand-accent transition-colors flex items-center gap-2 font-semibold">
              <iconify-icon icon="simple-icons:facebook" width="20"></iconify-icon>
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a href="#" className="text-white hover:text-brand-accent transition-colors flex items-center gap-2 font-semibold">
              <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
