export default function Support() {
  return (
    <div className="flex flex-col gap-8 w-full pb-10 mt-8 max-w-3xl">
      <div className="flex items-center gap-4">
        <iconify-icon icon="solar:headphones-round-bold" width="36" style={{ color: "#8b5fd6" }}></iconify-icon>
        <h1 className="serif text-4xl font-bold">24/7 Support</h1>
      </div>
      <p className="text-white/60">Our dedicated team is here to assist you around the clock. Choose a method below to get in touch.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <button className="flex flex-col items-center justify-center p-8 rounded-[1.5rem] glass-strong hover:bg-white/10 transition-colors text-center gap-4 border border-white/10 group">
          <div className="w-16 h-16 rounded-full flex items-center justify-center glass group-hover:scale-110 transition-transform">
             <iconify-icon icon="solar:chat-round-dots-linear" width="32" className="text-white/80"></iconify-icon>
          </div>
          <div>
            <h3 className="font-bold text-lg">Live Chat</h3>
            <p className="text-sm text-white/50 mt-1">Instant assistance</p>
          </div>
        </button>

        <button className="flex flex-col items-center justify-center p-8 rounded-[1.5rem] glass-strong hover:bg-white/10 transition-colors text-center gap-4 border border-white/10 group">
          <div className="w-16 h-16 rounded-full flex items-center justify-center glass group-hover:scale-110 transition-transform">
             <iconify-icon icon="solar:letter-linear" width="32" className="text-white/80"></iconify-icon>
          </div>
          <div>
            <h3 className="font-bold text-lg">Email Us</h3>
            <p className="text-sm text-white/50 mt-1">support@luxoraplay.com</p>
          </div>
        </button>
      </div>

      <div className="mt-8 rounded-[1.5rem] glass p-8 border border-white/5">
        <h2 className="serif text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          <div className="pb-4 border-b border-white/10">
            <h4 className="font-bold text-white/90">How long do withdrawals take?</h4>
            <p className="text-sm text-white/50 mt-2">Withdrawals are typically processed within 2-4 hours for e-wallets, and 1-3 business days for bank transfers.</p>
          </div>
          <div className="pb-4 border-b border-white/10">
            <h4 className="font-bold text-white/90">Are my details secure?</h4>
            <p className="text-sm text-white/50 mt-2">Yes, LuxoraPlay uses state-of-the-art SSL encryption and advanced security protocols to protect all personal and financial data.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
