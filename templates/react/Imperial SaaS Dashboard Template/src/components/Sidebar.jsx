import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const navItems = [
  { group: 'Home', items: [
    { name: 'Overview', path: '/', icon: 'solar:pie-chart-2-linear' }
  ]},
  { group: 'Manage', items: [
    { name: 'Uploader', path: '/uploader', icon: 'solar:upload-linear' },
    { name: 'Gallery', path: '/gallery', icon: 'solar:gallery-linear' },
    { name: 'Keys', path: '/keys', icon: 'solar:key-minimalistic-linear' },
    { name: 'Domains', path: '/domains', icon: 'solar:earth-linear' }
  ]},
  { group: 'Developers', items: [
    { name: 'API', path: '/api', icon: 'solar:code-circle-linear' },
    { name: 'Webhooks', path: '/webhooks', icon: 'solar:routing-2-linear' }
  ]},
  { group: 'Account', items: [
    { name: 'Settings', path: '/settings', icon: 'solar:settings-linear' },
    { name: 'Billing', path: '/billing', icon: 'solar:card-linear' }
  ]}
];

export default function Sidebar({ isOpen }) {
  return (
    <div className={clsx(
      "relative hidden md:flex flex-col bg-[#060606] transition-all duration-300 ease-in-out border-r border-white/5",
      isOpen ? "w-[260px]" : "w-0 overflow-hidden"
    )}>
      <div className="flex h-16 items-center gap-2 px-4 shrink-0">
        <div className="flex items-center gap-2 font-semibold text-white tracking-tight">
          <div className="flex size-6 items-center justify-center rounded-md bg-[#1447e6] text-white">
            <iconify-icon icon="solar:crown-bold" width="14" height="14"></iconify-icon>
          </div>
          <span className="truncate">Imperial</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto no-scrollbar pb-4">
        {navItems.map((group, idx) => (
          <div key={group.group} className="flex flex-col p-2 w-full">
            <div className="flex h-8 items-center px-2 text-[11px] font-medium uppercase tracking-wider text-[#a1a1a1]">
              {group.group}
            </div>
            <ul className="flex flex-col gap-1 w-full">
              {group.items.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => clsx(
                      "flex items-center gap-2 w-full h-8 px-2 rounded-md text-sm transition-all duration-200",
                      isActive 
                        ? "bg-[#262626] text-white font-medium" 
                        : "text-[#a1a1a1] hover:bg-[#262626] hover:text-white"
                    )}
                  >
                    <iconify-icon icon={item.icon} width="16" height="16"></iconify-icon>
                    <span className="truncate">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-2 border-t border-white/10 shrink-0">
        <div className="relative m-2 rounded-xl bg-[#e5e5e5]/5 p-4 border border-[#e5e5e5]/10 group">
          <button className="absolute top-2 right-2 text-[#a1a1a1] hover:text-white transition-colors opacity-0 group-hover:opacity-100">
            <iconify-icon icon="solar:close-square-linear" width="14" height="14"></iconify-icon>
          </button>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none text-white">Imperial Shot</h4>
            <p className="text-xs text-[#a1a1a1] leading-snug">Switch to our blazing fast screen capture tool.</p>
            <a href="/uploader" className="text-xs font-medium text-white hover:underline inline-block mt-1">Get Started →</a>
          </div>
        </div>

        <button className="flex w-full items-center gap-2 h-12 p-2 rounded-md hover:bg-[#262626] transition-colors text-left outline-none focus-visible:ring-2 focus-visible:ring-white/20">
          <div className="relative flex size-8 shrink-0 overflow-hidden rounded-lg bg-[#262626] items-center justify-center font-medium text-xs">
            NT
          </div>
          <div className="flex flex-col flex-1 overflow-hidden leading-tight">
            <span className="truncate text-sm font-semibold text-white">NtInjectThread</span>
            <span className="truncate text-xs text-[#a1a1a1]">ffbifundd@gmail.com</span>
          </div>
          <iconify-icon icon="solar:alt-arrow-down-linear" width="16" height="16" className="text-[#a1a1a1] shrink-0"></iconify-icon>
        </button>
      </div>
    </div>
  );
}