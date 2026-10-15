import React from 'react';

const RealExample = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-[#FBFBFE] border-t border-[#E9E9F1]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-[#E9E9F1] bg-white shadow-sm mb-6">
            <span className="text-xs font-medium text-[#1A1A22] tracking-wide uppercase">Live Workflow</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-normal text-[#0F0F14] tracking-tight font-roboto mb-6">
            Here's What It Actually Looks Like
          </h2>
          <p className="text-lg text-[#6B6B7A] max-w-2xl leading-relaxed">
            Watch how one conversation fluidly moves from voice to text to email, with perfect context maintained at every step.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto">

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-y-16 w-full relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-8 bottom-8 w-px bg-[#E9E9F1] -translate-x-1/2"></div>

            {/* STEP 1 */}
            <div className="group flex justify-end pr-16 relative">
              <div className="absolute right-0 top-12 w-16 h-px bg-[#E9E9F1] group-hover:bg-[#C7C7D4] transition-colors"></div>
              <div className="bg-white border border-[#E9E9F1] rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all w-full max-w-[440px] relative z-10 text-left">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-medium text-[#1A1A22]">Step 1: Phone Call</span>
                  <span className="text-xs font-medium text-[#A1A1B0] bg-[#F5F5FA] px-2.5 py-1 rounded-md border border-[#E9E9F1]">Minute 0</span>
                </div>
                <h3 className="text-xl font-medium text-[#0F0F14] tracking-tight mb-3">Customer Calls Out of Hours</h3>
                <p className="text-base text-[#6B6B7A] mb-8 leading-relaxed">
                  A client calls to reschedule. The AI agent picks up immediately, checks the calendar, and finds new available slots.
                </p>
                {/* Dialog */}
                <div className="bg-[#FBFBFE] rounded-xl p-5 border border-[#E9E9F1] flex flex-col gap-4">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#E9E9F1] flex items-center justify-center shrink-0 mt-0.5">
                      <iconify-icon icon="solar:user-linear" width="16" height="16" className="text-[#6B6B7A]"></iconify-icon>
                    </div>
                    <div className="bg-white border border-[#E9E9F1] rounded-lg rounded-tl-none py-2 px-3 shadow-sm text-sm text-[#3F3F4A]">
                      "I need to reschedule my appointment."
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-[#1A1A22] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <iconify-icon icon="solar:display-linear" width="16" height="16" className="text-white"></iconify-icon>
                    </div>
                    <div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-sm text-[#1A1A22]">
                      "I have times available: Tue 2 pm, Wed 10 am, or Thu 4 pm."
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#E9E9F1] flex items-center justify-center shrink-0 mt-0.5">
                      <iconify-icon icon="solar:user-linear" width="16" height="16" className="text-[#6B6B7A]"></iconify-icon>
                    </div>
                    <div className="bg-white border border-[#E9E9F1] rounded-lg rounded-tl-none py-2 px-3 shadow-sm text-sm text-[#3F3F4A]">
                      "Let me check my calendar and text you back."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dot */}
            <div className="relative flex justify-center mt-12">
              <div className="w-3.5 h-3.5 rounded-full bg-[#8624FF] ring-[6px] ring-[#FBFBFE] z-10 shadow-sm"></div>
            </div>
            <div></div>

            {/* STEP 2 */}
            <div></div>
            <div className="relative flex justify-center mt-12">
              <div className="w-3.5 h-3.5 rounded-full bg-[#8624FF] ring-[6px] ring-[#FBFBFE] z-10 shadow-sm"></div>
            </div>
            <div className="group flex justify-start pl-16 relative">
              <div className="absolute left-0 top-12 w-16 h-px bg-[#E9E9F1] group-hover:bg-[#C7C7D4] transition-colors"></div>
              <div className="bg-white border border-[#E9E9F1] rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all w-full max-w-[440px] relative z-10 text-left">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-medium text-[#1A1A22]">Step 2: Auto-Text</span>
                  <span className="text-xs font-medium text-[#A1A1B0] bg-[#F5F5FA] px-2.5 py-1 rounded-md border border-[#E9E9F1]">Minute 5</span>
                </div>
                <h3 className="text-xl font-medium text-[#0F0F14] tracking-tight mb-3">Seamless SMS Transition</h3>
                <p className="text-base text-[#6B6B7A] mb-8 leading-relaxed">
                  5 minutes later, the AI proactively sends a text with the options discussed, moving the conversation to the customer's preferred channel.
                </p>
                <div className="bg-[#FBFBFE] rounded-xl p-5 border border-[#E9E9F1] flex flex-col gap-4">
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-[#1A1A22] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <iconify-icon icon="solar:chat-line-linear" width="16" height="16" className="text-white"></iconify-icon>
                    </div>
                    <div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-sm text-[#1A1A22]">
                      "Hi! Here are the times we discussed: Tue 2pm, Wed 10am, Thu 4pm. Reply to confirm."
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#E9E9F1] flex items-center justify-center shrink-0 mt-0.5">
                      <iconify-icon icon="solar:user-linear" width="16" height="16" className="text-[#6B6B7A]"></iconify-icon>
                    </div>
                    <div className="bg-white border border-[#E9E9F1] rounded-lg rounded-tl-none py-2 px-3 shadow-sm text-sm text-[#3F3F4A]">
                      "Thursday 4 pm works!"
                    </div>
                  </div>
                   <div className="flex gap-3 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-[#1A1A22] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <iconify-icon icon="solar:chat-line-linear" width="16" height="16" className="text-white"></iconify-icon>
                    </div>
                    <div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-sm text-[#1A1A22]">
                      "Confirmed for Thursday 4 pm. You'll get an email reminder."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="group flex justify-end pr-16 relative">
              <div className="absolute right-0 top-12 w-16 h-px bg-[#E9E9F1] group-hover:bg-[#C7C7D4] transition-colors"></div>
              <div className="bg-white border border-[#E9E9F1] rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-[#C7C7D4] transition-all w-full max-w-[440px] relative z-10 text-left">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-medium text-[#1A1A22]">Step 3: Auto-Email</span>
                  <span className="text-xs font-medium text-[#A1A1B0] bg-[#F5F5FA] px-2.5 py-1 rounded-md border border-[#E9E9F1]">24h Prior</span>
                </div>
                <h3 className="text-xl font-medium text-[#0F0F14] tracking-tight mb-3">Proactive Email Follow-up</h3>
                <p className="text-base text-[#6B6B7A] mb-8 leading-relaxed">
                  A day before the appointment, the AI sends a reminder and automatically handles any pre-appointment questions via email.
                </p>
                <div className="bg-[#FBFBFE] rounded-xl p-5 border border-[#E9E9F1] flex flex-col gap-4">
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-[#1A1A22] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <iconify-icon icon="solar:letter-linear" width="16" height="16" className="text-white"></iconify-icon>
                    </div>
                    <div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-sm text-[#1A1A22]">
                      "Reminder: Appointment Thursday 4 pm. Please reply to confirm."
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#E9E9F1] flex items-center justify-center shrink-0 mt-0.5">
                      <iconify-icon icon="solar:user-linear" width="16" height="16" className="text-[#6B6B7A]"></iconify-icon>
                    </div>
                    <div className="bg-white border border-[#E9E9F1] rounded-lg rounded-tl-none py-2 px-3 shadow-sm text-sm text-[#3F3F4A]">
                      "Can I submit my information beforehand?"
                    </div>
                  </div>
                   <div className="flex gap-3 flex-row-reverse">
                    <div className="w-7 h-7 rounded-full bg-[#1A1A22] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <iconify-icon icon="solar:letter-linear" width="16" height="16" className="text-white"></iconify-icon>
                    </div>
                    <div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-sm text-[#1A1A22]">
                      "Yes! Here is the secure link to complete it."
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center mt-12">
              <div className="w-3.5 h-3.5 rounded-full bg-[#8624FF] ring-[6px] ring-[#FBFBFE] z-10 shadow-sm"></div>
            </div>
            <div></div>

          </div>

          {/* Mobile Layout */}
          <div className="md:hidden relative pl-8 space-y-12 w-full mt-12">
             <div className="absolute left-[11px] top-8 bottom-8 w-px bg-[#E9E9F1]"></div>

             {/* Mobile Step 1 */}
             <div className="relative w-full">
                <div className="absolute -left-[32px] top-8 w-3.5 h-3.5 rounded-full bg-[#8624FF] ring-[6px] ring-[#FBFBFE] z-10 shadow-sm"></div>
                <div className="bg-white border border-[#E9E9F1] rounded-2xl p-6 shadow-sm w-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-medium text-[#1A1A22]">Step 1: Phone Call</span>
                    <span className="text-xs font-medium text-[#A1A1B0] bg-[#F5F5FA] px-2 py-1 rounded-md border border-[#E9E9F1]">Minute 0</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#0F0F14] tracking-tight mb-3">Customer Calls Out of Hours</h3>
                  <p className="text-sm text-[#6B6B7A] mb-6 leading-relaxed">
                    A client calls to reschedule. The AI agent picks up immediately, checks the calendar, and finds new available slots.
                  </p>
                  <div className="bg-[#FBFBFE] rounded-xl p-4 border border-[#E9E9F1] flex flex-col gap-4">
                    <div className="flex gap-3">
                      <div className="bg-white border border-[#E9E9F1] rounded-lg rounded-tl-none py-2 px-3 shadow-sm text-sm text-[#3F3F4A]">
                        "I need to reschedule my appointment."
                      </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-sm text-[#1A1A22]">
                        "I have times available: Tue 2 pm, Wed 10 am, or Thu 4 pm."
                      </div>
                    </div>
                  </div>
                </div>
             </div>

             {/* Mobile Step 2 */}
             <div className="relative w-full">
                <div className="absolute -left-[32px] top-8 w-3.5 h-3.5 rounded-full bg-[#8624FF] ring-[6px] ring-[#FBFBFE] z-10 shadow-sm"></div>
                <div className="bg-white border border-[#E9E9F1] rounded-2xl p-6 shadow-sm w-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-medium text-[#1A1A22]">Step 2: Auto-Text</span>
                    <span className="text-xs font-medium text-[#A1A1B0] bg-[#F5F5FA] px-2 py-1 rounded-md border border-[#E9E9F1]">Minute 5</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#0F0F14] tracking-tight mb-3">Seamless SMS Transition</h3>
                  <p className="text-sm text-[#6B6B7A] mb-6 leading-relaxed">
                    5 minutes later, the AI proactively sends a text with the options discussed.
                  </p>
                  <div className="bg-[#FBFBFE] rounded-xl p-4 border border-[#E9E9F1] flex flex-col gap-4">
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-sm text-[#1A1A22]">
                        "Hi! Here are the times we discussed: Tue 2pm, Wed 10am, Thu 4pm. Reply to confirm."
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-white border border-[#E9E9F1] rounded-lg rounded-tl-none py-2 px-3 shadow-sm text-sm text-[#3F3F4A]">
                        "Thursday 4 pm works!"
                      </div>
                    </div>
                  </div>
                </div>
             </div>

             {/* Mobile Step 3 */}
             <div className="relative w-full">
                <div className="absolute -left-[32px] top-8 w-3.5 h-3.5 rounded-full bg-[#8624FF] ring-[6px] ring-[#FBFBFE] z-10 shadow-sm"></div>
                <div className="bg-white border border-[#E9E9F1] rounded-2xl p-6 shadow-sm w-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-medium text-[#1A1A22]">Step 3: Auto-Email</span>
                    <span className="text-xs font-medium text-[#A1A1B0] bg-[#F5F5FA] px-2 py-1 rounded-md border border-[#E9E9F1]">24h Prior</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#0F0F14] tracking-tight mb-3">Proactive Email Follow-up</h3>
                  <p className="text-sm text-[#6B6B7A] mb-6 leading-relaxed">
                    A day before the appointment, the AI sends a reminder and automatically handles any pre-appointment questions.
                  </p>
                  <div className="bg-[#FBFBFE] rounded-xl p-4 border border-[#E9E9F1] flex flex-col gap-4">
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="bg-[#F3EDFF] border border-[#F3EDFF] rounded-lg rounded-tr-none py-2 px-3 shadow-sm text-sm text-[#1A1A22]">
                        "Reminder: Appointment Thursday 4 pm. Please reply to confirm."
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-white border border-[#E9E9F1] rounded-lg rounded-tl-none py-2 px-3 shadow-sm text-sm text-[#3F3F4A]">
                        "Can I submit my information beforehand?"
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* System Shows Block */}
        <div className="mt-24 max-w-5xl mx-auto bg-white rounded-2xl p-8 lg:p-10 border border-[#E9E9F1] shadow-sm flex flex-col gap-10 hover:shadow-md transition-shadow">
          
          <h4 className="text-lg font-medium text-[#1A1A22] tracking-tight uppercase text-center md:text-left">
            What Your System Now Shows
          </h4>

          {/* Timeline UI */}
          <div className="w-full overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
            <div className="flex items-start justify-between min-w-[800px] md:min-w-0 w-full px-1">
              
              {/* Step 01 */}
              <div className="flex-1 flex flex-col snap-start">
                <div className="flex items-center w-full mb-5">
                  <div className="flex items-center gap-2 bg-[#FBFBFE] border border-[#E9E9F1] rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
                    <span className="text-xs font-medium text-[#3F3F4A] pl-0.5">Step 01</span>
                    <div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
                  </div>
                  <div className="flex-1 h-px border-t-2 border-dotted border-[#C7C7D4] ml-3 mr-3 opacity-60"></div>
                </div>
                <div className="pr-6">
                  <h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">Initial phone call</h5>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">All details captured</p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex-1 flex flex-col snap-start">
                <div className="flex items-center w-full mb-5">
                  <div className="flex items-center gap-2 bg-[#FBFBFE] border border-[#E9E9F1] rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
                    <div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
                    <span className="text-xs font-medium text-[#3F3F4A]">Step 02</span>
                    <div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
                  </div>
                  <div className="flex-1 h-px border-t-2 border-dotted border-[#C7C7D4] ml-3 mr-3 opacity-60"></div>
                </div>
                <div className="pr-6">
                  <h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">Text conversation</h5>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">All messages recorded</p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex-1 flex flex-col snap-start">
                <div className="flex items-center w-full mb-5">
                  <div className="flex items-center gap-2 bg-[#FBFBFE] border border-[#E9E9F1] rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
                    <div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
                    <span className="text-xs font-medium text-[#3F3F4A]">Step 03</span>
                    <div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
                  </div>
                  <div className="flex-1 h-px border-t-2 border-dotted border-[#C7C7D4] ml-3 mr-3 opacity-60"></div>
                </div>
                <div className="pr-6">
                  <h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">Email exchange</h5>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">All info logged</p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="flex-1 flex flex-col snap-start">
                <div className="flex items-center w-full mb-5">
                  <div className="flex items-center gap-2 bg-[#FBFBFE] border border-[#E9E9F1] rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
                    <div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
                    <span className="text-xs font-medium text-[#3F3F4A]">Step 04</span>
                    <div className="w-1.5 h-1.5 rounded-full border border-[#C7C7D4] bg-white"></div>
                  </div>
                  <div className="flex-1 h-px border-t-2 border-dotted border-[#C7C7D4] ml-3 mr-3 opacity-60"></div>
                </div>
                <div className="pr-6">
                  <h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">Appointment</h5>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">Scheduled seamlessly</p>
                </div>
              </div>

              {/* Step 05 */}
              <div className="flex-[0.8] flex flex-col snap-start">
                <div className="flex items-center w-full mb-5">
                  <div className="flex items-center gap-2 bg-[#F3EDFF] border border-[#8624FF]/30 rounded-md px-2 py-1 shadow-sm shrink-0 z-10">
                    <div className="w-1.5 h-1.5 rounded-full border border-[#8624FF] bg-[#8624FF]"></div>
                    <span className="text-xs font-medium text-[#8624FF] pr-0.5">Step 05</span>
                  </div>
                </div>
                <div className="pr-0">
                  <h5 className="text-base font-medium text-[#1A1A22] mb-1 tracking-tight">Complete record</h5>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">Of the entire conversation</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Bottom Statistics and Quote */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pt-8 border-t border-[#E9E9F1]">
            <div className="lg:w-1/2 flex items-center">
              <div className="w-full grid grid-cols-2 gap-8 bg-[#FBFBFE] p-8 rounded-xl border border-[#E9E9F1]">
                <div className="col-span-1">
                  <span className="block text-4xl font-['Instrument_Serif'] text-[#0F0F14] mb-2">
                    0 min
                  </span>
                  <span className="text-sm text-[#6B6B7A] font-medium tracking-wide">
                    Staff Time Spent
                  </span>
                </div>
                <div className="col-span-1">
                  <span className="block text-4xl font-['Instrument_Serif'] text-[#0F0F14] mb-2">
                    100%
                  </span>
                  <span className="text-sm text-[#6B6B7A] font-medium tracking-wide">
                    Automation
                  </span>
                </div>
                <div className="col-span-2 pt-6 border-t border-[#E9E9F1]">
                  <span className="block text-4xl font-['Instrument_Serif'] text-[#0F0F14] mb-2">
                    High
                    <span className="text-base font-sans font-normal text-[#A1A1B0] align-middle ml-2">
                      (Instant resolution)
                    </span>
                  </span>
                  <span className="text-sm text-[#6B6B7A] font-medium tracking-wide">
                    Customer Satisfaction
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex items-stretch">
              <div className="w-full px-8 py-8 bg-[#F5F5FA] rounded-xl border border-[#E9E9F1] border-l-4 border-l-[#8624FF] flex items-center">
                <p className="text-lg italic text-[#3F3F4A] leading-relaxed">
                  "That's what this does. Everything gets organized automatically.
                  Nothing falls through cracks. Your team focuses on actual work."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealExample;