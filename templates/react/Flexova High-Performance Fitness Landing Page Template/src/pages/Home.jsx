import React from 'react'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 xl:px-20 overflow-hidden">
        {/* Background Imagery & FX */}
        <div className="absolute inset-0 z-0">
          {/* Main Hero Image */}
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Athlete lifting" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          {/* Dark Gradients to blend with background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent w-2/3"></div>
          
          {/* Light Leaks */}
          <div className="light-leak light-leak-1"></div>
          <div className="light-leak light-leak-2"></div>
          
          {/* Dot Matrix Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(var(--color-text-muted) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col justify-center h-full mt-12">
          
          {/* Trust / Eyebrow */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-slide-up">
            <div className="flex text-[var(--color-primary)]">
              {[...Array(5)].map((_, i) => (
                <iconify-icon key={i} icon="solar:star-bold" width="16" height="16"></iconify-icon>
              ))}
            </div>
            <span className="text-[11px] font-heading uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
              Trusted by 10,000+ Athletes
            </span>
          </div>

          {/* Heavy Typography Display */}
          <h1 className="font-display flex flex-col uppercase tracking-[-0.02em] leading-[0.9] mb-8 opacity-0 animate-slide-up delay-100">
            <span className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] text-[var(--color-primary)] drop-shadow-[0_0_40px_rgba(232,64,10,0.3)]">Stronger</span>
            <span className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[180px] text-white">Starts Here</span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-[var(--color-text-secondary)] max-w-[500px] leading-[1.6] mb-10 opacity-0 animate-slide-up delay-200">
            Identity is forged, not given. Enter the combustion zone and reshape your physical limitations through high-performance training and uncompromising discipline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-up delay-300">
            <Button>Start Your Trial</Button>
            <Button variant="ghost">View Programs</Button>
          </div>
        </div>
      </section>

      {/* --- STATS ROW --- */}
      <section className="relative z-10 bg-[var(--color-bg)] border-y border-[var(--color-border)] py-12 px-6 md:px-12 xl:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-[var(--color-border)]">
          
          {[
            { value: "850+", label: "Active Members" },
            { value: "40+", label: "Expert Coaches" },
            { value: "120+", label: "Weekly Classes" },
            { value: "98%", label: "Success Rate" }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start md:pl-12 first:pl-0">
              <span className="font-display text-[56px] md:text-[72px] leading-none text-[var(--color-primary)] mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="font-heading uppercase tracking-[0.1em] text-[12px] text-[var(--color-text-secondary)]">
                {stat.label}
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* --- FEATURE / ABOUT SECTION --- */}
      <section className="relative z-10 py-24 md:py-[128px] px-6 md:px-12 xl:px-20 bg-[var(--color-bg)]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column (Left) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[4px] overflow-hidden group">
              {/* Subtle border to frame it sharply */}
              <div className="absolute inset-0 border border-[var(--color-border)] z-10 pointer-events-none rounded-[4px]"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop" 
                alt="Gym Equipment" 
                className="w-full h-auto aspect-[4/5] object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              
              {/* Accent block */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-bg)] to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6 border-l-2 border-[var(--color-primary)] pl-4">
                <p className="font-heading uppercase text-[14px] text-white tracking-widest">Technological Precision</p>
                <p className="text-[var(--color-text-muted)] text-[13px] mt-1">Equipment engineered for maximum yield.</p>
              </div>
            </div>
          </div>

          {/* Content Column (Right) */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="inline-block border border-[var(--color-border)] px-3 py-1 mb-6 rounded-[2px]">
              <span className="font-heading uppercase tracking-[0.14em] text-[11px] text-[var(--color-primary)]">
                The Methodology
              </span>
            </div>
            
            <h2 className="font-heading font-bold text-[40px] md:text-[56px] uppercase leading-[1.05] mb-6 tracking-tight">
              Shatter the <br/>
              <span className="text-[var(--color-primary)]">Plateau.</span>
            </h2>
            
            <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.6] mb-10 max-w-xl">
              We don't offer shortcuts. We provide the raw materials: elite-grade equipment, data-driven coaching, and an environment engineered to extract your maximum potential. The transformation is on you.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {[
                "Olympic-grade lifting platforms",
                "Bio-mechanic resistance machines",
                "Thermal recovery suites",
                "Combustion HIIT zones",
                "1-on-1 kinetic assessments",
                "24/7 facility access"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" width="20" height="20" class="text-[var(--color-primary)] shrink-0 mt-[2px]"></iconify-icon>
                  <span className="text-[14px] text-[var(--color-text-primary)]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 border-t border-[var(--color-border)] pt-8">
              <Button>Explore Facility</Button>
              <Button variant="ghost">Meet The Team</Button>
            </div>
          </div>

        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="relative py-24 px-6 md:px-12 bg-[var(--color-surface)] border-y border-[var(--color-border)] overflow-hidden">
        <div className="text-behind-subject opacity-10">FORGE</div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center">
          <iconify-icon icon="solar:flame-bold" width="48" height="48" class="text-[var(--color-primary)] mb-6 drop-shadow-[0_0_15px_rgba(232,64,10,0.5)]"></iconify-icon>
          <h2 className="font-heading font-bold text-[48px] uppercase leading-none mb-6">
            Ready to ignite?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-10">
            Join the ranks of those who refuse to remain static. Claim your spot on the floor today.
          </p>
          <Button className="w-full sm:w-auto">Commit Now</Button>
        </div>
      </section>

    </div>
  )
}