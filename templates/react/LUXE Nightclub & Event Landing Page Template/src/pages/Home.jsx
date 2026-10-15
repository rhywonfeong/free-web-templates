import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Ticker from '../components/home/Ticker';
import EventCard from '../components/ui/EventCard';
import { eventsData, scheduleData } from '../data/events';
import { clsx } from 'clsx';

export default function Home() {
  // Show exactly 4 events as requested
  const featuredEvents = eventsData.slice(0, 4);

  const igImages = [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
    "https://images.unsplash.com/photo-1545128485-c4002eaec0ea?w=400&q=80",
    "https://images.unsplash.com/photo-1516450524969-0c6800caa3eb?w=400&q=80",
    "https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&q=80"
  ];

  return (
    <div className="pb-0 bg-luxe-black">
      <Hero />
      <Ticker />

      {/* Quick Events Section */}
      <section className="py-20 px-6 relative border-b border-white/5">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <p className="font-display text-sm tracking-[0.3em] uppercase text-luxe-blue-neon mb-2">Grab Your Tickets</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Upcoming Events</h2>
            </div>
            <Link to="/events" className="text-white hover:text-luxe-blue-neon transition-colors font-display text-sm tracking-[0.15em] uppercase flex items-center gap-2 group border border-white/20 px-6 py-3 rounded-full hover:border-luxe-blue-neon w-fit">
              View All <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 px-6 relative border-b border-white/5 bg-luxe-deep">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
             <p className="font-display text-sm tracking-[0.3em] uppercase text-luxe-pink-hot mb-2">Every Week at Luxe</p>
             <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Weekly Lineup</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {scheduleData.map((day, idx) => (
              <div 
                key={day.day}
                className={clsx(
                  "p-6 rounded transition-all duration-300 hover:-translate-y-1 border border-white/10 hover:border-luxe-pink-hot relative overflow-hidden group bg-luxe-black/60 shadow-lg",
                  day.closed && "opacity-60 grayscale"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-luxe-pink-hot/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-display text-xs tracking-[0.2em] uppercase text-luxe-pink-hot mb-2 relative z-10">{day.day}</p>
                <h3 className="font-display text-lg md:text-xl font-bold tracking-wide uppercase text-white mb-2 relative z-10">{day.theme}</h3>
                <p className="text-xs md:text-sm text-luxe-white-dim relative z-10">{day.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Teaser */}
      <section className="py-20 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,61,255,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-luxe-purple-dark to-luxe-black p-8 md:p-12 rounded-2xl border border-luxe-purple-bright/30 shadow-[0_0_40px_rgba(139,61,255,0.2)]">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight uppercase mb-4 text-white">
              Skip the Line.<br /> <span className="text-luxe-blue-glow">Be a VIP.</span>
            </h2>
            <p className="text-luxe-white-dim text-sm md:text-base leading-relaxed mb-8">
              Priority entry, member-only drink specials, early access to tickets, and a free birthday package for your whole crew.
            </p>
            <Link to="/vip" className="inline-flex items-center justify-center gap-2 bg-white text-luxe-black px-8 py-4 rounded font-display font-bold text-sm tracking-[0.15em] uppercase hover:bg-luxe-blue-glow hover:shadow-[0_0_20px_rgba(64,224,255,0.6)] transition-all w-full md:w-auto">
              <iconify-icon icon="solar:crown-star-bold" class="text-xl" /> Claim VIP Access
            </Link>
          </div>
          <div className="hidden md:flex w-56 h-56 rounded-full border-2 border-luxe-blue-glow/30 items-center justify-center bg-luxe-blue-electric/10 relative shadow-[0_0_50px_rgba(0,180,255,0.2)]">
            <div className="absolute inset-4 border border-luxe-blue-glow/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <iconify-icon icon="solar:star-fall-bold" class="text-7xl text-luxe-blue-glow" />
          </div>
        </div>
      </section>

      {/* Featured Video / Instagram Promo Section */}
      <section className="py-24 px-6 relative bg-luxe-black overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(255,45,138,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="max-w-lg text-center md:text-left order-2 md:order-1">
            <p className="font-display text-sm tracking-[0.3em] uppercase text-luxe-pink-hot mb-3 flex items-center justify-center md:justify-start gap-2">
              <iconify-icon icon="solar:videocamera-record-bold" class="text-lg animate-pulse" /> Live The Vibe
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-white mb-6 leading-[1.1]">
              Nights to <br className="hidden md:block" /> Remember
            </h2>
            <p className="text-luxe-white-dim text-sm md:text-base leading-relaxed mb-8">
              Immerse yourself in the ultimate nightlife experience. World-class DJs, immersive lighting, and unforgettable moments wait for you on the dancefloor. Experience it firsthand on our socials.
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-luxe-pink-hot to-[#ff4b72] text-white px-8 py-4 rounded-full font-display font-bold text-sm tracking-[0.15em] uppercase hover:shadow-[0_0_30px_rgba(255,45,138,0.4)] transition-all hover:-translate-y-1 w-full md:w-auto"
            >
              <iconify-icon icon="simple-icons:instagram" class="text-xl" /> Follow @luxenightclub
            </a>
          </div>

          {/* Vertical Video Container */}
          <div className="order-1 md:order-2 relative w-full max-w-[300px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(255,45,138,0.15)] border-[4px] border-white/10 group bg-luxe-deep flex-shrink-0 transition-transform duration-500 hover:scale-[1.02]">
            <video 
              src="https://assets.cdn.filesafe.space/MjyEHjDJZG3zbHPDNIPy/media/69d0707cef360d7dca25b905.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
            {/* Instagram Link Overlay inside video */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="absolute inset-0 bg-luxe-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-luxe-pink-hot/20 flex items-center justify-center">
                <iconify-icon icon="simple-icons:instagram" class="text-4xl text-white drop-shadow-[0_0_15px_rgba(255,45,138,1)]" />
              </div>
              <span className="font-display tracking-[0.2em] uppercase text-xs text-white font-bold border border-white/30 px-4 py-2 rounded-full">Watch Reel</span>
            </a>
          </div>
          
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-20 px-6 bg-luxe-deep">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10">
            <iconify-icon icon="simple-icons:instagram" class="text-4xl text-luxe-pink-hot mb-3 drop-shadow-[0_0_10px_rgba(255,45,138,0.6)]" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight uppercase text-white">More From The Floor</h2>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block text-luxe-blue-electric mt-2 font-display tracking-[0.2em] uppercase text-sm hover:text-white transition-colors">@luxenightclub</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {igImages.map((src, i) => (
              <a href="https://instagram.com" target="_blank" rel="noreferrer" key={i} className="aspect-square bg-luxe-black relative group overflow-hidden rounded border border-white/5 block">
                <img 
                  src={src} 
                  alt="Nightclub Vibe" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <iconify-icon icon="simple-icons:instagram" class="text-3xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}