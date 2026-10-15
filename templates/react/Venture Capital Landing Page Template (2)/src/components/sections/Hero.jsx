import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
            <span className="text-xs font-medium tracking-wide text-zinc-600 uppercase">Early-stage B2B technology investment</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 leading-[1.05] mb-8">
            Investing early in B2B technology built for real markets.
          </h1>
          
          <div className="space-y-6 text-lg text-zinc-500 leading-relaxed max-w-2xl mb-10">
            <p>
              EPIC Ventures backs software, AI, cybersecurity and selected IoT companies from pre-seed to early commercial stage. We partner with founders building products with clear market need and global potential, and with co-investors looking for focused, thesis-driven opportunities in high-conviction categories.
            </p>
            <p>
              We invest where technology improves how companies operate: where workflows become more digital, decisions become more intelligent, processes become more efficient and infrastructure becomes more secure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/pitch" 
              className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium text-center hover:bg-zinc-800 transition-all hover:shadow-xl hover:shadow-zinc-900/10 hover:-translate-y-0.5"
            >
              Submit your pitch
            </Link>
            <a 
              href="#focus" 
              className="px-8 py-4 rounded-full font-medium text-zinc-900 text-center border border-zinc-200 hover:border-zinc-900 transition-all hover:bg-zinc-50"
            >
              Explore our investment focus
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-white opacity-50 rounded-3xl transform rotate-3 scale-105"></div>
          <div className="relative flex flex-col gap-4">
            
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 shrink-0">
                  <iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 tracking-tight">Pre-seed to early commercial stage</h3>
                  <p className="text-sm text-zinc-500 mt-1">Entering where conviction matters most.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 shrink-0">
                  <iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 tracking-tight">PLN 1M-2M discovery tickets</h3>
                  <p className="text-sm text-zinc-500 mt-1">Initial capital to build commercial proof.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 shrink-0">
                  <iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 tracking-tight">Up to PLN 5M total exposure</h3>
                  <p className="text-sm text-zinc-500 mt-1">With structured follow-on potential.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}