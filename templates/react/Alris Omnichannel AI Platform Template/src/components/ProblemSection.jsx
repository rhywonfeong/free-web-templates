import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-[#F9F9FB] border-[#E9E9F1] border-b">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-4xl lg:text-5xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-5">
            Your Team is Drowning in Tools
          </h2>
          <p className="leading-relaxed text-xl text-[#3F3F4A] max-w-2xl mx-auto">
            Most service businesses use 3-4 separate tools. Here's why that
            costs you time and money.
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid mb-6 gap-6 md:grid-cols-2 lg:gap-8 lg:mb-8">
          {/* Card 1 */}
          <div className="p-8 lg:p-10 flex flex-col bg-white border-[#E9E9F1] border rounded-2xl shadow-sm justify-between transition-all hover:shadow-md hover:border-[#C7C7D4]">
            <div>
              <h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-8">
                Your team is great at:
              </h3>
              <ul className="space-y-6">
                {[
                  "Answering customer calls",
                  "Writing follow-up emails",
                  "Sending SMS reminders",
                  "Updating records"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <iconify-icon icon="solar:check-circle-linear" width="16" height="16" className="text-emerald-600"></iconify-icon>
                    </div>
                    <span className="text-lg text-[#3F3F4A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 lg:p-10 flex flex-col bg-white border-[#E9E9F1] border rounded-2xl shadow-sm justify-between transition-all hover:shadow-md hover:border-[#C7C7D4]">
            <div>
              <h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight mb-8 font-roboto">
                But here's the reality:
              </h3>
              <ul className="space-y-6">
                {[
                  "Customer calls on Platform A",
                  "You follow up on Platform B",
                  "You remind on Platform C",
                  "You log everything manually"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
                      <iconify-icon icon="solar:close-circle-linear" width="16" height="16" className="text-rose-600"></iconify-icon>
                    </div>
                    <span className="text-lg text-[#3F3F4A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Span */}
        <div className="bg-white rounded-2xl border border-[#E9E9F1] shadow-sm grid lg:grid-cols-2 overflow-hidden items-stretch transition-all hover:shadow-md hover:border-[#C7C7D4]">
          <div className="p-8 lg:p-12 lg:border-r border-[#E9E9F1]">
            <h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-8">
              The Real Cost
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:danger-triangle-linear" width="20" height="20" className="text-amber-500 shrink-0 mt-1"></iconify-icon>
                <span className="leading-relaxed text-lg text-[#3F3F4A]">
                  Conversation context lost between platforms
                </span>
              </li>
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:restart-circle-linear" width="20" height="20" className="text-amber-500 shrink-0 mt-1"></iconify-icon>
                <span className="leading-relaxed text-lg text-[#3F3F4A]">
                  Customers repeat information across channels
                </span>
              </li>
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:clock-circle-linear" width="20" height="20" className="text-amber-500 shrink-0 mt-1"></iconify-icon>
                <span className="leading-relaxed text-lg text-[#3F3F4A]">
                  Staff spends 10-15 hours/week on manual data entry
                </span>
              </li>
              <li className="flex items-start gap-4">
                <iconify-icon icon="solar:wallet-linear" width="20" height="20" className="text-amber-500 shrink-0 mt-1"></iconify-icon>
                <span className="leading-relaxed text-lg text-[#3F3F4A]">
                  Software costs $500-1000/month for fragmented tools
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FBFBFE] p-8 lg:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(#E9E9F1_1px,transparent_1px)] [background-size:16px_16px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 max-w-sm">
              <div className="w-16 h-16 bg-white border border-[#E9E9F1] shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#8624FF] group-hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="solar:stars-linear" width="32" height="32"></iconify-icon>
              </div>
              <h4 className="text-3xl lg:text-4xl font-normal text-[#0F0F14] tracking-tight mb-0 font-roboto leading-tight">
                What if it was all in one place?
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;