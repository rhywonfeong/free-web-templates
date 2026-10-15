import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-luxe-deep border-t border-luxe-card-border pt-12 pb-8 px-6 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl tracking-[0.12em] mb-3 text-luxe-white font-medium">LUXE NIGHTCLUB</p>
          <p className="text-luxe-white-dim text-sm leading-relaxed max-w-sm">
            Chilliwack's #1 party spot. Home to the best DJs in the Fraser Valley. Weekly themed events, drink specials, and good vibes only.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <h4 className="font-display text-xs tracking-[0.25em] uppercase text-luxe-blue-electric mb-2">Visit</h4>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-sm text-luxe-white-dim hover:text-white transition-colors">9282 Main Street</a>
          <span className="text-sm text-luxe-white-dim">Chilliwack, BC V2P 4M5</span>
          <a href="tel:7788235893" className="text-sm text-luxe-white-dim hover:text-white transition-colors">(778) 823-5893</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-display text-xs tracking-[0.25em] uppercase text-luxe-blue-electric mb-2">Connect</h4>
          <a href="#" className="text-sm text-luxe-white-dim hover:text-white transition-colors flex items-center gap-2">
            <iconify-icon icon="simple-icons:instagram" /> Instagram
          </a>
          <a href="#" className="text-sm text-luxe-white-dim hover:text-white transition-colors flex items-center gap-2">
            <iconify-icon icon="simple-icons:tiktok" /> TikTok
          </a>
          <a href="mailto:hello@luxenightclub.com" className="text-sm text-luxe-white-dim hover:text-white transition-colors flex items-center gap-2">
            <iconify-icon icon="solar:letter-linear" /> Email Us
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <span>&copy; {new Date().getFullYear()} Luxe Nightclub. All rights reserved.</span>
        <Link to="/" className="hover:text-white/60 transition-colors">Powered by Luxe Media</Link>
      </div>
    </footer>
  );
}