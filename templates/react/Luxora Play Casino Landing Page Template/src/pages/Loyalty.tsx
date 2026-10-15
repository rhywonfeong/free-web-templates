export default function Loyalty() {
  return (
    <div className="flex flex-col gap-8 w-full pb-10 mt-8">
      <div className="flex items-center gap-4">
        <iconify-icon icon="solar:star-bold" width="36" style={{ color: "#ffd12e" }}></iconify-icon>
        <h1 className="serif text-4xl font-bold">VIP & Loyalty</h1>
      </div>
      <p className="text-white/60">Climb the ranks to unlock unparalleled rewards, dedicated account managers, and exclusive events.</p>

      <div className="rounded-[1.75rem] p-10 flex flex-col items-center justify-center text-center gap-6 card-shine mt-4 min-h-[400px]" style={{ background: "linear-gradient(135deg, rgba(28,15,61,0.9) 0%, rgba(42,22,80,0.9) 100%)", border: "1px solid rgba(255,209,46,0.15)" }}>
        <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#ffe08a,#ffd12e)", boxShadow: "0 0 40px rgba(255,209,46,0.2)" }}>
           <iconify-icon icon="solar:crown-minimalistic-bold" width="48" style={{ color: "#3a2405" }}></iconify-icon>
        </div>
        <div>
          <h2 className="serif text-3xl font-bold gold-text">Luxora Elite</h2>
          <p className="text-white/50 mt-2 max-w-sm mx-auto">You are currently at the Bronze tier. Play more to reach Silver and unlock 10% daily cashback.</p>
        </div>
        <div className="w-full max-w-md bg-white/5 rounded-full h-2 mt-4 overflow-hidden border border-white/10">
          <div className="h-full rounded-full" style={{ width: "35%", background: "linear-gradient(90deg,#ffd12e,#e0940d)" }}></div>
        </div>
        <span className="text-xs font-bold text-white/40 uppercase tracking-widest">1,250 / 5,000 XP</span>
      </div>
    </div>
  );
}
