import EventCard from '../components/ui/EventCard';
import { eventsData } from '../data/events';

export default function Events() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative">
      {/* Enhanced electric purple/blue gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(139,61,255,0.12),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-luxe-blue-neon mb-3">Tickets & RSVP</p>
          <h1 className="font-display text-5xl font-medium tracking-tight uppercase mb-6 text-white drop-shadow-[0_0_15px_rgba(139,61,255,0.3)]">Upcoming Events</h1>
          <p className="text-luxe-white-dim text-sm leading-relaxed">
            Grab your tickets before they're gone. Free entry before midnight on Fridays & Saturdays subject to capacity. VIP tables available upon request.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eventsData.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
          {/* Add a generic "More TBA" card to fill grid nicely if needed */}
          <div className="glass-panel rounded flex flex-col items-center justify-center p-8 text-center min-h-[400px] border-dashed border-white/10 opacity-50 hover:border-luxe-blue-electric transition-colors">
            <iconify-icon icon="solar:calendar-date-linear" class="text-4xl text-luxe-blue-electric mb-4" />
            <h3 className="font-display text-lg uppercase tracking-wider text-white mb-2">More Dates TBA</h3>
            <p className="text-xs text-luxe-white-dim">Follow our socials for announcements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}