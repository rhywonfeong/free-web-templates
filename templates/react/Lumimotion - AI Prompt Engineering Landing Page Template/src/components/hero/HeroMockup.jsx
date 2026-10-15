import React from 'react'

export default function HeroMockup() {
  return (
    <div className="flex flex-col w-full max-w-[1280px] mx-auto animate-fade-in -translate-y-4">
      {/* Outer wrapper: sharp edges, lime accents, dark theme */}
      <div className="w-full relative bg-[#0B0F12] p-2 border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group/window">
        
        {/* Subtle top highlight */}
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70 z-50 pointer-events-none"></div>

        {/* Inner Window */}
        <div className="overflow-hidden flex text-[13px] leading-normal antialiased text-white/60 font-sans bg-[#05080A] w-full h-[650px] md:h-[750px] border border-white/10 relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
          
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none z-0"></div>
          
          {/* Subtle lime glow at top */}
          <div className="absolute top-0 inset-x-0 h-80 bg-gradient-to-b from-[#c6f91f]/5 to-transparent pointer-events-none z-0"></div>

          {/* SIDEBAR */}
          <div className="w-[260px] bg-[#05080A]/80 backdrop-blur-md flex flex-col border-r border-white/10 shadow-[10px_0_30px_-15px_rgba(0,0,0,0.5)] flex-shrink-0 relative z-10 hidden md:flex">
            
            {/* Header */}
            <div className="flex h-16 border-b border-white/10 px-4 items-center justify-between">
              <div className="flex items-center gap-3 text-white font-bold text-sm tracking-wide group cursor-pointer">
                <iconify-icon icon="solar:folder-with-files-bold-duotone" class="text-[#c6f91f] text-lg"></iconify-icon>
                <span>Prompt Vault</span>
                <iconify-icon icon="solar:alt-arrow-down-linear" width="12" class="text-white/40 group-hover:text-white transition-colors"></iconify-icon>
              </div>
            </div>

            {/* Nav Links */}
            <div className="px-3 py-4 space-y-1">
              <div className="text-[10px] font-medium uppercase tracking-widest text-white/30 px-3 mb-2">Categories</div>

              {/* Active Item */}
              <div className="flex items-center gap-3 px-3 py-2 bg-gradient-to-b from-[#c6f91f]/10 to-transparent border border-[#c6f91f]/20 text-[#c6f91f] cursor-default relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></div>
                <iconify-icon icon="solar:widget-5-linear" width="16" class="drop-shadow-[0_0_5px_rgba(198,249,31,0.5)]"></iconify-icon>
                <span className="font-semibold">Dashboards</span>
              </div>

              {/* Inactive Items */}
              <div className="flex items-center gap-3 px-3 py-2 text-white/50 hover:bg-white/5 hover:text-white transition-colors cursor-pointer border border-transparent">
                <iconify-icon icon="solar:smartphone-linear" width="16"></iconify-icon>
                <span>Mobile Views</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-white/50 hover:bg-white/5 hover:text-white transition-colors cursor-pointer border border-transparent">
                <iconify-icon icon="solar:cursor-square-linear" width="16"></iconify-icon>
                <span>Landing Pages</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-white/50 hover:bg-white/5 hover:text-white transition-colors cursor-pointer border border-transparent">
                <iconify-icon icon="solar:layers-linear" width="16"></iconify-icon>
                <span>UI Components</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-white/50 hover:bg-white/5 hover:text-white transition-colors cursor-pointer border border-transparent">
                <iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
                <span>WebGL Canvas</span>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="mt-auto border-t border-white/10 p-4 bg-[#0B0F12]">
              <div className="flex items-center justify-between mb-2">
                 <span className="text-xs text-white/80 font-medium">Pro Access</span>
                 <iconify-icon icon="solar:shield-check-bold-duotone" class="text-[#c6f91f] text-lg drop-shadow-[0_0_5px_rgba(198,249,31,0.5)]"></iconify-icon>
              </div>
              <div className="h-1 w-full bg-white/10 overflow-hidden">
                 <div className="h-full w-[85%] bg-[#c6f91f] shadow-[0_0_10px_#c6f91f]"></div>
              </div>
              <div className="flex justify-between items-center mt-2 text-[10px]">
                 <span className="text-white/40">Usage</span>
                 <span className="text-[#c6f91f]">Unlimited</span>
              </div>
            </div>
          </div>

          {/* MAIN AREA */}
          <div className="flex-1 flex flex-col min-w-0 bg-transparent relative z-0">
            
            {/* Header */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-[#0B0F12]/80 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-4 flex-1">
                <iconify-icon icon="solar:magnifer-linear" width="18" class="text-white/40"></iconify-icon>
                <span className="text-sm text-white/40 font-mono tracking-wide">Search structurally typed prompts...</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-2 border border-white/10 bg-[#05080A] px-3 py-1.5 text-xs text-white/70">
                  <iconify-icon icon="simple-icons:claude" class="text-white"></iconify-icon> Claude 3.5 Sonnet
                </div>
                <div className="flex items-center gap-2 bg-[#c6f91f] text-black px-4 py-2 text-xs font-semibold hover:bg-[#aade17] transition-colors cursor-pointer shadow-[0_0_15px_rgba(198,249,31,0.3)]">
                  <iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon> New Prompt
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 no-scrollbar relative">
              
              {/* Top Banner / Featured Card */}
              <div className="border border-white/10 bg-[#0B0F12] relative group">
                {/* Decorative border glow */}
                <div className="absolute inset-0 border border-[#c6f91f]/0 group-hover:border-[#c6f91f]/30 transition-colors pointer-events-none z-20"></div>
                
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 bg-[#c6f91f]/10 text-[#c6f91f] border border-[#c6f91f]/20 text-[10px] uppercase tracking-widest font-semibold">Featured</span>
                      <span className="text-white/40 text-xs flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Updated 2h ago</span>
                    </div>
                    
                    <h2 className="text-2xl text-white font-medium tracking-tight mb-2">B2B Analytics OS</h2>
                    <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-lg">A comprehensive system prompt generating a complex sidebar layout, multi-layered data tables, and dynamic metric visualizations.</p>
                    
                    <div className="mt-auto flex items-center gap-4">
                      <button className="bg-[#c6f91f] text-black px-5 py-2.5 text-xs font-semibold flex items-center gap-2 hover:bg-[#aade17] transition-colors">
                        <iconify-icon icon="solar:copy-linear" width="16"></iconify-icon> Copy JSON Prompt
                      </button>
                      <button className="border border-white/10 bg-transparent text-white px-5 py-2.5 text-xs font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors">
                        Preview Output <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                      </button>
                    </div>
                  </div>

                  {/* Code Snippet Preview */}
                  <div className="w-full md:w-[350px] border border-white/10 bg-[#05080A] p-4 relative overflow-hidden flex flex-col shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-none bg-white/20"></div>
                        <div className="w-2.5 h-2.5 rounded-none bg-white/20"></div>
                        <div className="w-2.5 h-2.5 rounded-none bg-white/20"></div>
                      </div>
                      <span className="text-[10px] text-white/30 font-mono">system_prompt.json</span>
                    </div>
                    <div className="font-mono text-xs text-white/60 space-y-1.5 relative z-10 flex-1">
                      <div><span className="text-[#c6f91f]">"layout_type"</span>: <span className="text-white/80">"sidebar-left"</span>,</div>
                      <div><span className="text-[#c6f91f]">"theme_mode"</span>: <span className="text-white/80">"dark"</span>,</div>
                      <div><span className="text-[#c6f91f]">"color_accent"</span>: <span className="text-white/80">"#c6f91f"</span>,</div>
                      <div><span className="text-[#c6f91f]">"components"</span>: [</div>
                      <div className="pl-4"><span className="text-white/80">"MetricCard_Grid"</span>,</div>
                      <div className="pl-4"><span className="text-white/80">"AreaChart_Timeline"</span>,</div>
                      <div className="pl-4"><span className="text-white/80">"DataTable_Sortable"</span></div>
                      <div>],</div>
                      <div><span className="text-[#c6f91f]">"typography"</span>: <span className="text-white/80">"Inter"</span></div>
                    </div>
                    {/* Fade out bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#05080A] to-transparent z-20 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Grid Layout for smaller cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Secondary Card 1 */}
                <div className="border border-white/10 bg-[#05080A] p-6 flex flex-col hover:border-white/20 transition-colors group relative">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 bg-[#05080A] border border-white/10 text-white/70 group-hover:text-[#c6f91f] transition-colors">
                      <iconify-icon icon="solar:user-circle-linear" class="text-2xl"></iconify-icon>
                    </div>
                    <div className="text-[10px] border border-white/10 px-2 py-1 text-white/40 uppercase tracking-widest font-semibold">Auth Flow</div>
                  </div>
                  <h3 className="text-white text-base font-medium mb-2 tracking-tight">Multi-step Onboarding</h3>
                  <p className="text-xs text-white/40 leading-relaxed mb-6">Structured prompts for building high-converting wizard interfaces with progress indicators and form validations.</p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                     <div className="flex gap-2">
                        <iconify-icon icon="simple-icons:openai" class="text-white/30 hover:text-white transition-colors"></iconify-icon>
                        <iconify-icon icon="simple-icons:googlegemini" class="text-white/30 hover:text-white transition-colors"></iconify-icon>
                     </div>
                     <span className="text-xs text-[#c6f91f] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        Copy Template <iconify-icon icon="solar:copy-linear"></iconify-icon>
                     </span>
                  </div>
                </div>

                {/* Secondary Card 2 */}
                <div className="border border-white/10 bg-[#05080A] p-6 flex flex-col hover:border-white/20 transition-colors group relative">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2.5 bg-[#05080A] border border-white/10 text-white/70 group-hover:text-[#c6f91f] transition-colors">
                      <iconify-icon icon="solar:settings-linear" class="text-2xl"></iconify-icon>
                    </div>
                    <div className="text-[10px] border border-white/10 px-2 py-1 text-white/40 uppercase tracking-widest font-semibold">Settings</div>
                  </div>
                  <h3 className="text-white text-base font-medium mb-2 tracking-tight">Preferences Panel OS</h3>
                  <p className="text-xs text-white/40 leading-relaxed mb-6">Nested navigation, toggle switches, and tabbed interfaces for complex user settings configurations.</p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                     <div className="flex gap-2">
                        <iconify-icon icon="simple-icons:claude" class="text-white/30 hover:text-white transition-colors"></iconify-icon>
                     </div>
                     <span className="text-xs text-[#c6f91f] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                        Copy Template <iconify-icon icon="solar:copy-linear"></iconify-icon>
                     </span>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}