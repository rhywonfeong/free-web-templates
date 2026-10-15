import React from 'react';

const team = [
  {
    name: 'Courtney Henry',
    role: 'Business Growth',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fteam%2Fteam1.webp&w=3840&q=75'
  },
  {
    name: 'Guy Hawkins',
    role: 'Product Designer',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fteam%2Fteam2.webp&w=3840&q=75'
  },
  {
    name: 'Ronald Richards',
    role: 'Graphic Designer',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fteam%2Fteam-03.webp&w=3840&q=75'
  },
  {
    name: 'Jane Cooper',
    role: 'Sales & Marketing',
    img: 'https://digital-arc.vercel.app/_next/image?url=%2Fimages%2Fteam%2Fteam4.webp&w=3840&q=75'
  }
];

export default function Team() {
  return (
    <>
      <section className="xl:px-0 px-5">
        <div className="container border-x xl:px-15 px-5 lg:py-20 py-8">
          <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-foreground"></span>
              <h6 className="uppercase font-medium text-base font-mono">Who we are</h6>
            </div>
            <h2 className="xl:text-6xl lg:text-5xl text-3xl font-semibold uppercase max-w-3xl tracking-tighter">
              team.
            </h2>
          </div>
        </div>

        <div className="container border-t pt-10">
          <div className="lg:flex grid md:grid-cols-2 border-x">
            {team.map((member, idx) => (
              <div key={idx} className="relative group lg:border-r last:border-r-0 transition-all duration-500 ease-out flex-1">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    alt={member.name} 
                    loading="lazy" 
                    className="object-cover absolute h-full w-full transition-all duration-500 scale-100 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                    src={member.img}
                  />
                </div>
                <div className="flex items-center gap-5 xl:px-10 px-5 py-5 border-t">
                  <img 
                    alt="icon" 
                    loading="lazy" 
                    width="30" 
                    height="30" 
                    className="brightness-0 invert opacity-80" 
                    src="https://digital-arc.vercel.app/images/logos/digitalarc-favicon.svg"
                  />
                  <div>
                    <h3 className="text-base font-semibold font-mono opacity-80">{member.name}</h3>
                    <p className="text-sm font-mono opacity-70">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="lg:py-7 py-5 border-y w-full"></section>
    </>
  );
}