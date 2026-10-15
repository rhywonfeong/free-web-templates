import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8 px-6 transition-colors-all">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white shadow-sm shadow-teal-500/20">
                <iconify-icon icon="solar:bolt-circle-linear" width="20"></iconify-icon>
              </div>
              <span className="text-[20px] font-semibold tracking-tight text-slate-900 dark:text-white">Velocity AI</span>
            </div>
            <p className="text-[12px] text-slate-400 dark:text-slate-400 mb-6 max-w-xs leading-[20px]">
              Architecting the future of digital experiences with artificial intelligence and modern web technologies.
            </p>
            <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
              <a href="#" className="hover:text-teal-500 transition-colors"><iconify-icon icon="simple-icons:x" width="20"></iconify-icon></a>
              <a href="#" className="hover:text-teal-500 transition-colors"><iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon></a>
              <a href="#" className="hover:text-teal-500 transition-colors"><iconify-icon icon="simple-icons:dribbble" width="20"></iconify-icon></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[14px] font-semibold mb-4 text-slate-900 dark:text-white">Services</h4>
            <ul className="space-y-3 text-[14px] text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">AI Integration</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Product Design</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold mb-4 text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-3 text-[14px] text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold mb-4 text-slate-900 dark:text-white">Legal</h4>
            <ul className="space-y-3 text-[14px] text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-slate-400">
            © {new Date().getFullYear()} Velocity AI / RVS Media. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[12px] text-slate-400">
            <span>Built with precision in</span>
            <iconify-icon icon="simple-icons:react" width="14"></iconify-icon>
          </div>
        </div>
      </div>
    </footer>
  )
}