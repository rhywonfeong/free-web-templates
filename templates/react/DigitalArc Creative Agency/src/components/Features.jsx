import React from 'react';

const features = [
  {
    num: '01',
    title: 'BRAND IDENTITY SYSTEMS',
    desc: 'We craft complete visual identities including logos, typography, and color systems that give your brand a consistent and recognizable presence.',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Ffeatures%2Ffeature1.webp&w=3840&q=75'
  },
  {
    num: '02',
    title: 'UI/UX DESIGN',
    desc: 'We design intuitive, user-focused interfaces that look beautiful and guide users effortlessly through your digital experience.',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Ffeatures%2Ffeature2.webp&w=3840&q=75'
  },
  {
    num: '03',
    title: 'DIGITAL STRATEGY',
    desc: 'We map out a strategic approach to ensure your digital presence is aligned with your goals and optimized for measurable success.',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fbackgrounds%2Ffeature-image.webp&w=3840&q=75'
  }
];

export default function Features() {
  return (
    <section className="bg-background xl:px-0 px-5">
      <div className="container border-x border-border xl:px-15 px-5 lg:py-20 py-10">
        <div className="flex md:flex-row flex-col gap-4 justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-foreground"></span>
            <h6 className="uppercase font-medium text-base font-mono text-foreground">We provide more</h6>
          </div>
          <h2 className="xl:text-6xl lg:text-5xl text-3xl font-semibold uppercase max-w-3xl tracking-tighter text-foreground">
            Features.
          </h2>
        </div>
      </div>

      <div className="container border-x border-t border-border">
        <div className="flex lg:flex-row flex-col border-t border-border mt-5">
          {features.map((feature, idx) => (
            <div key={idx} className="relative overflow-hidden lg:border-b-0 border-b last:border-b-0 md:border-r border-border flex-1 flex flex-col">
              <div className="xl:px-10 px-5 xl:pt-10 pt-5 flex flex-col gap-3 pb-8">
                <span className="text-base font-medium text-foreground font-mono">({feature.num})</span>
                <h3 className="md:text-2xl text-xl font-medium text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-base">{feature.desc}</p>
              </div>
              <div className="mt-auto aspect-[4/3] overflow-hidden">
                <img 
                  alt={feature.title} 
                  loading="lazy" 
                  className="object-cover h-full w-full hover:scale-110 transition-transform duration-700" 
                  src={feature.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}