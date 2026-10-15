import SlideWrapper from '../components/ui/SlideWrapper';
import Header from '../components/ui/Header';

export default function Slide10() {
  return (
    <SlideWrapper theme="light" className="bg-brand-cream">
      <div className="w-full h-full flex flex-col px-24 py-20 relative">
        <Header 
          theme="light"
          subtitle="Financial Strategy"
          title="Business Model"
        />

        <div className="flex-1 flex gap-8 mt-12">
          
          {/* Revenue Streams */}
          <div className="w-1/3 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex-1 animate-slide-up delay-100">
              <h3 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-6">Revenue Streams</h3>
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b border-gray-50 pb-4">
                  <span className="text-lg text-brand-dark font-medium">Event Ticket</span>
                  <span className="text-2xl font-serif text-brand-indigo">$80</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-50 pb-4">
                  <span className="text-lg text-brand-dark font-medium">Retreat Spot</span>
                  <span className="text-2xl font-serif text-brand-indigo">$2,000</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-lg text-brand-dark font-medium">Coaching Client</span>
                  <span className="text-2xl font-serif text-brand-indigo">$3,000</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partnership Model */}
          <div className="w-1/3 flex flex-col gap-6">
             <div className="bg-brand-indigo p-8 rounded-3xl shadow-xl flex-1 text-white animate-slide-up delay-200 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <iconify-icon icon="solar:handshake-linear" width="160"></iconify-icon>
              </div>
              <h3 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-6 relative z-10">Partnerships</h3>
              <div className="flex-1 flex flex-col justify-center relative z-10">
                <div className="text-6xl font-light tracking-tight mb-2">70/30</div>
                <div className="text-xl text-white/80 font-serif italic mb-6">Revenue Split</div>
                <p className="text-white/60 leading-relaxed text-sm">
                  Strategic alliances with existing yoga and wellness studios minimize overhead while maximizing client acquisition and space utilization.
                </p>
              </div>
            </div>
          </div>

          {/* Forecast */}
          <div className="w-1/3 flex flex-col gap-6">
             <div className="bg-brand-dark p-8 rounded-3xl shadow-xl flex-1 text-white animate-slide-up delay-300 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent"></div>
              <h3 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-6 relative z-10">Year 1 Forecast</h3>
              <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10">
                <span className="text-7xl font-light text-brand-gold mb-4 tracking-tighter">$150k</span>
                <span className="text-lg text-white/80 font-medium uppercase tracking-widest">Projected Gross<br/>Revenue</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}