import React from 'react';

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333] mb-4">Why traditional development is holding you back</h2>
          <p className="text-gray-500 text-sm">Turning your idea into software shouldn't require a computer science degree or a massive budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2rem] border shadow-sm hover:shadow-md transition-shadow reveal delay-100 group bg-white border-gray-100">
            <div className="w-12 h-12 rounded-2xl bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:hourglass-linear" width="24" strokeWidth="1.5"></iconify-icon>
            </div>
            <h3 className="font-medium text-xl tracking-tight text-[#333333] mb-3">Slow Development</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Building with standard code takes months of complex engineering before you even see a working prototype of your idea.</p>
          </div>

          <div className="p-8 rounded-[2rem] border shadow-sm hover:shadow-md transition-shadow reveal delay-200 group bg-white border-gray-100">
            <div className="w-12 h-12 rounded-2xl bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:wallet-money-linear" width="24" strokeWidth="1.5"></iconify-icon>
            </div>
            <h3 className="font-medium text-xl tracking-tight text-[#333333] mb-3">Exorbitant Costs</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Hiring a decent development agency or technical co-founder often costs tens of thousands of dollars just for an MVP.</p>
          </div>

          <div className="p-8 rounded-[2rem] border shadow-sm hover:shadow-md transition-shadow reveal delay-300 group bg-white border-gray-100">
            <div className="w-12 h-12 rounded-2xl bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <iconify-icon icon="solar:lock-keyhole-linear" width="24" strokeWidth="1.5"></iconify-icon>
            </div>
            <h3 className="font-medium text-xl tracking-tight text-[#333333] mb-3">Technical Lock-in</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Changing features in a hard-coded app is painful, slow, and leaves you constantly dependent on external developers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}