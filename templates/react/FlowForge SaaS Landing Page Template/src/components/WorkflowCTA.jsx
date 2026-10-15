import React from 'react';

const WorkflowCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] min-h-[600px] flex items-center border-b border-white/5">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30"></div>

        <div className="absolute -top-10 -right-20 w-[120%] h-[120%] flex flex-col gap-16 transform -rotate-[6deg] select-none opacity-[0.03] blur-[1px]">
          <div className="text-[120px] font-medium tracking-tighter text-white whitespace-nowrap leading-none">Add Nodes Add Nodes Add Nodes</div>
          <div className="text-[80px] font-medium tracking-tighter text-white whitespace-nowrap leading-none ml-32">Drag nodes from here to the canvas</div>
          <div className="text-[100px] font-medium tracking-tighter text-white whitespace-nowrap leading-none ml-64">Search nodes... Search nodes...</div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-xs font-mono text-zinc-300">New Engine</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-6 leading-[1.1] text-balance">
            The easiest way to build for the AI era.
          </h2>
          
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-8 max-w-md">
            AI-powered workflow execution. From conditional logic to complex orchestration — build, test, and deploy with complete flexibility.
          </p>

          <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md transition-all duration-200 font-medium text-sm shadow-sm hover:bg-zinc-200">
            Get Started
            <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: '1.5' }} className="text-base group-hover:translate-x-0.5 transition-transform"></iconify-icon>
          </button>
        </div>

        <div className="w-full lg:w-5/12 flex justify-start lg:justify-end">
          <div className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl w-full max-w-md border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-xl tracking-tight font-medium text-white mb-6 leading-tight">
              Visual workflow engine with 370+ installable nodes
            </h3>

            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 relative">
              <span className="text-xs font-mono text-zinc-500 block mb-2">Integrations Available</span>
              <div className="text-5xl tracking-tighter font-medium text-white mb-3">800+</div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Over 200 installed with a default command. Connect to any service, API, or database across your entire stack.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowCTA;