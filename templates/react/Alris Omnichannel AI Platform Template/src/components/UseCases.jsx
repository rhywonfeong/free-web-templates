import React from 'react';

const UseCases = () => {
  return (
    <section className="py-20 lg:py-32 px-6 bg-white border-[#E9E9F1] border-b" id="platform">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mx-auto w-fit px-4 py-1.5 rounded-full border border-[#E9E9F1] bg-white shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-base font-normal text-[#A1A1B0] tracking-wide">
            04
          </span>
          <span className="text-base font-normal text-[#1A1A22]">Use Cases</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-normal text-[#0F0F14] tracking-tight font-roboto text-center mb-6 max-w-3xl mx-auto leading-tight">
          One AI. All Channels. Unified Context.
        </h2>

        <p className="text-xl text-[#3F3F4A] text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Alris handles voice, email, SMS, and CRM updates in one unified agent.
          No more switching. No more manual work.
        </p>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="p-6 lg:p-8 flex flex-col hover:border-[#C7C7D4] transition-colors bg-white h-full border-[#E9E9F1] border rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#FBFBFE] border border-[#E9E9F1] flex items-center justify-center mb-8 text-[#1A1A22]">
                <iconify-icon icon="solar:phone-calling-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
                Phone Calls (24/7)
              </h3>
              <ul className="flex-grow mb-6 space-y-3">
                {[
                  "Inbound calls answered instantly",
                  "Outbound calls made proactively",
                  "Smart call routing",
                  "Seamless human handoff"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-[#3F3F4A]">
                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-[#8624FF] shrink-0 mt-0.5"></iconify-icon>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-[#E9E9F1] mt-auto">
                <p className="text-base font-medium text-[#8624FF] flex items-center gap-2">
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                  Customer not available? Auto SMS sent
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 lg:p-8 flex flex-col hover:border-[#C7C7D4] transition-colors bg-white h-full border-[#E9E9F1] border rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#FBFBFE] border border-[#E9E9F1] flex items-center justify-center mb-8 text-[#1A1A22]">
                <iconify-icon icon="solar:letter-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
                Email
              </h3>
              <ul className="space-y-3 mb-6 flex-grow">
                {[
                  "Read incoming emails",
                  "Draft replies automatically",
                  "Send personalized emails",
                  "Extract tasks and actions"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-[#3F3F4A]">
                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-[#8624FF] shrink-0 mt-0.5"></iconify-icon>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-[#E9E9F1] mt-auto">
                <p className="text-base font-medium text-[#8624FF] flex items-center gap-2">
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                  Customer prefers email? Continue there
                </p>
              </div>
            </div>
          </div>

          {/* Center Column (Visual/Waveform) */}
          <div className="relative w-full h-full min-h-[500px] lg:min-h-[700px] rounded-2xl overflow-hidden bg-[#0B0614] border border-[#E9E9F1] flex items-center justify-center group shadow-sm transition-all hover:shadow-lg">
            {/* Ambient Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A22] to-[#0B0614]"></div>
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-900/30 rounded-full blur-[100px] mix-blend-screen pointer-events-none group-hover:bg-emerald-900/50 transition-all duration-700"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-800/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none group-hover:bg-emerald-800/40 transition-all duration-700"></div>

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>

            {/* Audio Waveform Visualization */}
            <div className="relative z-10 flex items-center justify-center gap-2.5">
              <div className="w-3 rounded-full bg-[#8624FF]/60 h-12 group-hover:h-20 transition-all duration-500 ease-in-out"></div>
              <div className="w-3 rounded-full bg-[#8624FF]/80 h-24 group-hover:h-36 transition-all duration-500 ease-in-out delay-75"></div>
              <div className="w-3 rounded-full bg-[#8624FF] h-36 group-hover:h-56 transition-all duration-500 ease-in-out delay-150 shadow-[0_0_20px_rgba(134,36,255,0.4)]"></div>
              <div className="w-3 rounded-full bg-[#8624FF]/80 h-24 group-hover:h-32 transition-all duration-500 ease-in-out delay-75"></div>
              <div className="w-3 rounded-full bg-[#8624FF]/60 h-12 group-hover:h-24 transition-all duration-500 ease-in-out"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Card 3 */}
            <div className="p-6 lg:p-8 flex flex-col hover:border-[#C7C7D4] transition-colors bg-white h-full border-[#E9E9F1] border rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#FBFBFE] border border-[#E9E9F1] flex items-center justify-center mb-8 text-[#1A1A22]">
                <iconify-icon icon="solar:chat-line-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
                SMS
              </h3>
              <ul className="space-y-3 mb-6 flex-grow">
                {[
                  "Send confirmations & reminders",
                  "Handle text replies",
                  "Two-way conversations",
                  "Timely follow-ups"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-[#3F3F4A]">
                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-[#8624FF] shrink-0 mt-0.5"></iconify-icon>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-[#E9E9F1] mt-auto">
                <p className="text-base font-medium text-[#8624FF] flex items-center gap-2">
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                  Customer replies? AI continues conversation
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 lg:p-8 flex flex-col hover:border-[#C7C7D4] transition-colors bg-white h-full border-[#E9E9F1] border rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-[#FBFBFE] border border-[#E9E9F1] flex items-center justify-center mb-8 text-[#1A1A22]">
                <iconify-icon icon="solar:database-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-2xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
                Integration with Existing System
              </h3>
              <ul className="space-y-3 mb-6 flex-grow">
                {[
                  "Auto-update customer records",
                  "Unified conversation thread logged",
                  "Zero manual data entry",
                  "Real-time sync with your CRM"
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-[#3F3F4A]">
                    <iconify-icon icon="solar:check-circle-linear" width="20" height="20" className="text-[#8624FF] shrink-0 mt-0.5"></iconify-icon>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-[#E9E9F1] mt-auto">
                <p className="text-base font-medium text-[#8624FF] flex items-center gap-2">
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                  Everything automatically logged
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;