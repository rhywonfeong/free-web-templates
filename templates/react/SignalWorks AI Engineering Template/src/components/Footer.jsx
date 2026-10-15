import React from 'react'

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/5 bg-[#0a051e] z-20 pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[6%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
               <iconify-icon icon="solar:atom-bold-duotone" class="text-purple-400 text-2xl w-[24px] h-[24px]"></iconify-icon>
               <span className="font-bold tracking-tight">SignalWorks.</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-white/40 uppercase mb-6">Developers</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">API Reference</a></li>
              <li>
                <a href="#" className="flex items-center text-sm text-white/60 hover:text-white transition-colors">
                  System Status
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 ml-2"></span>
                </a>
              </li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Open Source</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-white/40 uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-white/40 uppercase mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:x" class="text-xs"></iconify-icon> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:github" class="text-xs"></iconify-icon> GitHub
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <iconify-icon icon="simple-icons:discord" class="text-xs"></iconify-icon> Discord
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 lg:justify-end">
            <a href="#" className="group flex flex-col justify-between p-6 w-full sm:w-48 h-32 border border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all rounded-sm">
              <div className="w-full flex justify-end">
                 <iconify-icon icon="solar:arrow-right-up-linear" class="text-white/40 group-hover:text-purple-400 transition-colors"></iconify-icon>
              </div>
              <div>
                <span className="block text-xs font-mono text-white/40 mb-1">Enterprise</span>
                <span className="block text-sm font-medium text-white">Contact Sales</span>
              </div>
            </a>
            
            <a href="#" className="group flex flex-col justify-between p-6 w-full sm:w-48 h-32 border border-white/10 hover:bg-white/[0.03] hover:border-white/20 transition-all rounded-sm">
              <div className="w-full flex justify-end">
                 <iconify-icon icon="solar:arrow-right-up-linear" class="text-white/40 group-hover:text-purple-400 transition-colors"></iconify-icon>
              </div>
              <div>
                <span className="block text-xs font-mono text-white/40 mb-1">Technical</span>
                <span className="block text-sm font-medium text-white">Get Support</span>
              </div>
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
           <p className="text-xs text-white/30">© 2024 SignalWorks. All rights reserved.</p>
           <div className="flex gap-6">
              <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-white/30 hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer