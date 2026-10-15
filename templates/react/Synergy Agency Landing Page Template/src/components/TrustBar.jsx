import React from 'react';

function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-6 overflow-hidden marquee-container mb-24">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex w-1/2 justify-around items-center text-white/30 text-sm font-medium tracking-tight">
          <span className="flex items-center gap-2"><iconify-icon icon="solar:code-linear" className="text-lg"></iconify-icon> NEXT.JS 14</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:database-linear" className="text-lg"></iconify-icon> SUPABASE</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:cpu-linear" className="text-lg"></iconify-icon> OPENAI</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:server-linear" className="text-lg"></iconify-icon> AWS CLOUD</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:smartphone-linear" className="text-lg"></iconify-icon> FLUTTER</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:target-linear" className="text-lg"></iconify-icon> META ADS</span>
        </div>
        <div className="flex w-1/2 justify-around items-center text-white/30 text-sm font-medium tracking-tight">
          <span className="flex items-center gap-2"><iconify-icon icon="solar:code-linear" className="text-lg"></iconify-icon> NEXT.JS 14</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:database-linear" className="text-lg"></iconify-icon> SUPABASE</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:cpu-linear" className="text-lg"></iconify-icon> OPENAI</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:server-linear" className="text-lg"></iconify-icon> AWS CLOUD</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:smartphone-linear" className="text-lg"></iconify-icon> FLUTTER</span>
          <span className="flex items-center gap-2"><iconify-icon icon="solar:target-linear" className="text-lg"></iconify-icon> META ADS</span>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;