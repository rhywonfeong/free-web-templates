export default function Promotions() {
  return (
    <div className="flex flex-col gap-8 w-full pb-10 mt-8">
      <div className="flex items-center gap-4">
        <iconify-icon icon="solar:gift-bold" width="36" style={{ color: "#ffd12e" }}></iconify-icon>
        <h1 className="serif text-4xl font-bold">Promotions</h1>
      </div>
      <p className="text-white/60">Discover the latest offers and exclusive bonuses available at LuxoraPlay.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Promo Card 1 */}
        <div className="rounded-[1.75rem] p-8 flex flex-col items-start gap-4 card-shine" style={{ background: "linear-gradient(135deg, rgba(28,15,61,0.9) 0%, rgba(42,22,80,0.9) 100%)", border: "1px solid rgba(255,209,46,0.15)" }}>
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full glass">
            <iconify-icon icon="solar:crown-minimalistic-bold" width="14" style={{ color: "#ffd12e" }}></iconify-icon> Welcome Offer
          </span>
          <h2 className="serif text-3xl font-bold tracking-tight">€3000 + 225 FS</h2>
          <p className="text-sm text-white/60">Kick off your journey with a boosted first deposit and free spins on top-tier slots.</p>
          <button className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-transform hover:-translate-y-px mt-2" style={{ background: "linear-gradient(135deg,#ffe08a,#ffd12e)", color: "#3a2405", boxShadow: "0 8px 24px rgba(255,209,46,0.28)" }}>Claim now</button>
        </div>

        {/* Promo Card 2 */}
        <div className="rounded-[1.75rem] p-8 flex flex-col items-start gap-4 card-shine" style={{ background: "linear-gradient(135deg, rgba(139,95,214,0.15) 0%, rgba(42,22,80,0.9) 100%)", border: "1px solid rgba(139,95,214,0.3)" }}>
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full glass">
            <iconify-icon icon="solar:calendar-bold" width="14" style={{ color: "#8b5fd6" }}></iconify-icon> Weekly Cashback
          </span>
          <h2 className="serif text-3xl font-bold tracking-tight">20% Cashback</h2>
          <p className="text-sm text-white/60">Play your favorite games and get a portion of your losses back every Friday.</p>
          <button className="px-6 py-2.5 rounded-xl text-sm font-semibold glass-strong hover:bg-white/10 transition-colors mt-2">Read more</button>
        </div>
      </div>
    </div>
  );
}
