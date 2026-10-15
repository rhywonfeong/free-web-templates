import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerSections = [
    {
      title: 'Platform',
      links: ['Find Talent', 'Find Work', 'Agencies', 'Enterprise', 'Pricing']
    },
    {
      title: 'Resources',
      links: ['Help Center', 'Blog', 'Community', 'Case Studies', 'API Documentation']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Trust & Safety', 'Contact']
    }
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-24 border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#098178]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-16 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-[#098178] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#098178]/20 group-hover:scale-105 group-hover:rotate-12 transition-transform duration-300">
                <iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
              </div>
              <span className="font-semibold text-2xl tracking-tight text-white">Aura</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-10 text-zinc-400 font-light">
              The premium network for independent professionals. Elevating the standard of freelance work through rigorous vetting and exceptional talent.
            </p>
            <div className="flex items-center gap-4">
              {['twitter', 'linkedin', 'github'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center hover:bg-[#098178] hover:border-[#098178] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#098178]/20">
                  <iconify-icon icon={`simple-icons:${social}`} width="18"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-medium text-sm mb-8 tracking-wide">{section.title}</h4>
              <ul className="flex flex-col gap-5">
                {section.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm font-light hover:text-[#098178] transition-colors relative group inline-flex">
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#098178] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light">
          <p>© {new Date().getFullYear()} Aura Platform Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#098178] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#098178] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#098178] transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}