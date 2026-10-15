export default function Metrics() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-[#030303]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-medium text-white tracking-tighter">12k<span className="text-orange-600">+</span></div>
            <p className="text-base text-gray-500 uppercase tracking-widest text-xs">Early Adopters</p>
          </div>
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-medium text-white tracking-tighter">4.5<span className="text-orange-600">h</span></div>
            <p className="text-base text-gray-500 uppercase tracking-widest text-xs">Saved Daily</p>
          </div>
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-medium text-white tracking-tighter">98<span className="text-orange-600">%</span></div>
            <p className="text-base text-gray-500 uppercase tracking-widest text-xs">Clarity Score</p>
          </div>
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-medium text-white tracking-tighter">24<span className="text-orange-600">/</span>7</div>
            <p className="text-base text-gray-500 uppercase tracking-widest text-xs">AI Assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
}