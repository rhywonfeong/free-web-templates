import { useCart } from '../../context/CartContext';
import { clsx } from 'clsx';

export default function EventCard({ event }) {
  const { addItem } = useCart();

  return (
    <div className="group glass-panel rounded overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-luxe-blue-electric relative flex flex-col h-full bg-luxe-black/60 shadow-lg">
      {/* Top Border Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-luxe-blue-electric via-luxe-purple-bright to-luxe-pink-hot opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      
      {/* Image Area */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-luxe-card-bg to-transparent z-10" />
        <div className="absolute inset-0 bg-luxe-purple-dark/40 mix-blend-multiply z-10" />
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 text-luxe-blue-neon shadow-[0_0_15px_rgba(0,180,255,0.4)]">
          <iconify-icon icon={event.icon} class="text-xl" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 relative z-20 -mt-8">
        <p className="font-display text-[0.7rem] tracking-[0.25em] uppercase text-luxe-blue-neon mb-2 drop-shadow-md">
          {event.dateStr}
        </p>
        <h3 className="font-display text-xl font-bold tracking-tight uppercase mb-3 text-white group-hover:text-luxe-blue-glow transition-colors">
          {event.name}
        </h3>
        <p className="text-luxe-white-dim text-sm leading-relaxed mb-6 flex-1">
          {event.description}
        </p>
        
        <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t border-white/10">
          <span className="font-display text-lg font-bold text-luxe-blue-glow tracking-tight drop-shadow-[0_0_5px_rgba(0,180,255,0.5)]">
            {event.price === 0 ? <span className="text-luxe-pink-hot text-sm tracking-wider uppercase">Free</span> : `$${event.price}`}
          </span>
          <button 
            onClick={() => addItem(event)}
            className="bg-luxe-blue-electric/20 border border-luxe-blue-electric/50 text-white px-5 py-2 rounded font-display font-bold text-xs tracking-[0.15em] uppercase hover:bg-luxe-blue-electric hover:text-black transition-all hover:shadow-[0_0_15px_rgba(0,180,255,0.6)]"
          >
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
}