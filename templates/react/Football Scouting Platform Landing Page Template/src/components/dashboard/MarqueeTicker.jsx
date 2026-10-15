import React from 'react';

const TickerItem = ({ icon, text, type = 'default' }) => {
  const iconColor = type === 'alert' ? 'text-pitch-500' : type === 'success' ? 'text-accent-500' : '';
  return (
    <>
      <span className="flex items-center gap-2">
        <iconify-icon icon={icon} className={`text-sm ${iconColor}`}></iconify-icon>
        {text}
      </span>
      <span>•</span>
    </>
  );
};

export default function MarqueeTicker() {
  const items = [
    { icon: 'solar:flame-linear', text: 'Top Target: J. Bellingham', type: 'alert' },
    { icon: 'solar:transfer-horizontal-linear', text: 'L. Yamal Contract Renewal', type: 'default' },
    { icon: 'solar:graph-up-linear', text: 'M. Salah Form +8%', type: 'success' },
    { icon: 'solar:shield-warning-linear', text: 'D. Sit Amet Injury Alert', type: 'default' },
  ];

  // Duplicate for seamless scroll
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="w-full border-b border-slate-200 bg-white/50 py-2.5 dark:border-slate-800/50 dark:bg-slate-950/50">
      <div className="mask-edges mx-auto max-w-[90rem] overflow-hidden px-4 lg:px-8">
        <div className="animate-marquee flex w-max items-center gap-10 text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {displayItems.map((item, idx) => (
            <TickerItem key={idx} icon={item.icon} text={item.text} type={item.type} />
          ))}
        </div>
      </div>
    </div>
  );
}