import React from 'react';

const WhyItMatters = () => {
  return (
    <section className="py-20 lg:py-32 px-6 bg-[#F5F5FA] border-y border-[#E9E9F1]">
      <div className="max-w-6xl mx-auto">
        <h2 className="lg:text-4xl text-3xl font-normal text-[#0F0F14] tracking-tight font-roboto text-center mb-12">
          Why It Matters
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E9E9F1] shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all group">
            <h4 className="text-lg font-normal text-[#1A1A22] mb-4 flex items-center justify-between">
              No Context Loss
              <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-[#8624FF] opacity-0 group-hover:opacity-100 transition-opacity"></iconify-icon>
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-base">
                <span className="text-[#A1A1B0]">Old Way</span>
                <span className="text-[#6B6B7A] line-through">
                  "Can you repeat that?"
                </span>
              </div>
              <div className="flex justify-between text-base font-normal">
                <span className="text-[#8624FF]">Alris</span>
                <span className="text-[#1A1A22]">
                  "I see you called earlier..."
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E9E9F1] shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all group">
            <h4 className="text-lg font-normal text-[#1A1A22] mb-4 flex items-center justify-between">
              Zero Manual Entry
              <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-[#8624FF] opacity-0 group-hover:opacity-100 transition-opacity"></iconify-icon>
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-base">
                <span className="text-[#A1A1B0]">Old Way</span>
                <span className="text-[#6B6B7A] line-through">
                  15 hrs/wk logging
                </span>
              </div>
              <div className="flex justify-between text-base font-normal">
                <span className="text-[#8624FF]">Alris</span>
                <span className="text-[#1A1A22]">
                  Automatic CRM sync
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E9E9F1] shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all group">
            <h4 className="text-lg font-normal text-[#1A1A22] mb-4 flex items-center justify-between">
              Always Available
              <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-[#8624FF] opacity-0 group-hover:opacity-100 transition-opacity"></iconify-icon>
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-base">
                <span className="text-[#A1A1B0]">Old Way</span>
                <span className="text-[#6B6B7A] line-through">
                  Missed after hours
                </span>
              </div>
              <div className="flex justify-between text-base font-normal">
                <span className="text-[#8624FF]">Alris</span>
                <span className="text-[#1A1A22]">
                  24/7 instant response
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;