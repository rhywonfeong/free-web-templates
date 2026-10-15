import React from 'react';

const LogoStrip = () => {
  return (
    <section className="border-white/5 border-b pt-10 pb-10">
      <p className="text-xs font-medium text-zinc-400 text-center mb-8">Meid on usaldanud Eesti tipptegijad</p>
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <iconify-icon icon="simple-icons:plaid" width="24" height="24" className="text-white"></iconify-icon> PLAID
        </div>
        <div className="flex items-center gap-2 text-xl font-semibold">
          <iconify-icon icon="solar:hexagon-linear" width="24" height="24" className="text-white"></iconify-icon> Griffin
        </div>
        <div className="flex items-center gap-2 text-xl font-semibold">
          <iconify-icon icon="simple-icons:airbnb" width="24" height="24" className="text-white"></iconify-icon> airbnb
        </div>
        <div className="flex items-center gap-2 text-xl font-semibold">
          <iconify-icon icon="simple-icons:patreon" width="24" height="24" className="text-white"></iconify-icon> PATREON
        </div>
        <div className="flex items-center gap-2 text-xl font-semibold">
          <iconify-icon icon="simple-icons:helpscout" width="24" height="24" className="text-white"></iconify-icon> HelpScout
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;