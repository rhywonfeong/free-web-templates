import React from 'react';

export default function Solution() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="mb-10 reveal">
              <span className="text-[#E76F9B] font-medium text-xs tracking-wider mb-3 block uppercase">The No-Code Advantage</span>
              <h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333] mb-4">Master the tools that power the modern web</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Our bootcamps teach you the visual programming frameworks to build scalable, secure apps without writing syntax.</p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF7F9] flex items-center justify-center text-[#E76F9B] shadow-sm group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
                  <iconify-icon icon="solar:layers-bold-duotone" width="28"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#333333] mb-2">Bubble.io Mastery</h4>
                  <p className="text-sm text-[#777777] leading-relaxed">Learn the most powerful full-stack no-code platform to build complex web apps, SaaS products, and two-sided marketplaces.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF7F9] flex items-center justify-center text-[#E76F9B] shadow-sm group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
                  <iconify-icon icon="solar:pen-new-round-bold-duotone" width="28"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#333333] mb-2">Webflow Design</h4>
                  <p className="text-sm text-[#777777] leading-relaxed">Master pixel-perfect web design and complex animations to create stunning, high-converting front-end experiences.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF7F9] flex items-center justify-center text-[#E76F9B] shadow-sm group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
                  <iconify-icon icon="solar:database-bold-duotone" width="28"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#333333] mb-2">API & Automations</h4>
                  <p className="text-sm text-[#777777] leading-relaxed">Connect thousands of apps using Zapier and Make.com to automate your entire business workflow and scale operations.</p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#FFF7F9] flex items-center justify-center text-[#E76F9B] shadow-sm group-hover:bg-[#E76F9B] group-hover:text-white transition-colors duration-300">
                  <iconify-icon icon="solar:users-group-two-rounded-bold-duotone" width="28"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-[#333333] mb-2">1-on-1 Mentorship</h4>
                  <p className="text-sm text-[#777777] leading-relaxed">Get dedicated support from expert developers who review your projects, unblock you, and guide you to graduation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center reveal delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FDE2E4]/40 to-transparent rounded-[3rem] transform rotate-3 scale-105"></div>
            <div className="w-full max-w-md border shadow-2xl rounded-[2.5rem] p-6 relative z-10 bg-white border-gray-100">
              
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FDE2E4] text-[#E76F9B]">
                    <iconify-icon icon="solar:shield-user-linear"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#333333]">Expert Tutor</p>
                    <p className="text-xs text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 text-gray-400">
                  <iconify-icon icon="solar:video-camera-linear" width="18"></iconify-icon>
                  <iconify-icon icon="solar:menu-dots-circle-linear" width="18"></iconify-icon>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-sm p-3 max-w-[80%] text-xs bg-gray-100 text-gray-600">
                    Hi, I'm stuck on setting up the database relations for my marketplace app.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#E76F9B] rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-xs shadow-md shadow-[#FDE2E4] text-white">
                    Hey! 🚀 No worries. You just need to create a list of 'Items' on the User data type. Check out module 4, lesson 2 for a walkthrough:
                    <div className="mt-2 p-2 rounded-xl flex items-center justify-between cursor-pointer transition-colors bg-white/20 hover:bg-white/30">
                      <div className="flex items-center gap-2">
                        <iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                        <span>Watch Lesson</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-sm p-3 max-w-[80%] text-xs bg-gray-100 text-gray-600">
                    Ah, that makes perfect sense now. Thanks!
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#E76F9B] rounded-2xl rounded-tl-sm p-3 max-w-[85%] text-xs shadow-md shadow-[#FDE2E4] text-white">
                    You got it ✅ Let me know if you need help with the API workflows!
                  </div>
                </div>
              </div>

              <div className="rounded-full p-2 flex items-center gap-2 border bg-gray-50 border-gray-100">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm bg-white text-gray-400">
                  <iconify-icon icon="solar:paperclip-linear"></iconify-icon>
                </div>
                <div className="flex-1 text-xs text-gray-400">Ask a question...</div>
                <div className="w-8 h-8 rounded-full bg-[#E76F9B] flex items-center justify-center shadow-sm text-white">
                  <iconify-icon icon="solar:plain-2-linear"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}