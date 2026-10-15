import React from 'react';

const blogs = [
  {
    title: 'Digital Vision & Structure',
    desc: 'We create conversion-driven layouts and visual structures that turn visitors into customers while keeping your brand visually powerful.',
    img: 'https://digital-arc.vercel.app/images/blogs/blog1.webp'
  },
  {
    title: 'Designing the Future of Digital',
    desc: 'We build scalable design systems that keep your website consistent, fast, and optimized for growth across every page and device.',
    img: 'https://digital-arc.vercel.app/images/blogs/blog5.webp'
  }
];

export default function Blogs() {
  return (
    <>
      <section className="lg:py-7 py-5 border-y border-border w-full bg-background"></section>
      
      <section className="bg-background xl:px-0 px-5">
        <div className="container border-x border-border xl:px-15 px-5 lg:py-20 py-10">
          <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-foreground"></span>
              <h6 className="uppercase font-medium text-base font-mono text-foreground">our blogs</h6>
            </div>
            <h2 className="xl:text-6xl lg:text-5xl text-3xl font-semibold uppercase max-w-3xl tracking-tighter text-foreground">
              Blogs.
            </h2>
          </div>
        </div>

        <div className="container border-x border-t border-border">
          <div className="flex lg:flex-row flex-col border-t border-border mt-5 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {blogs.map((blog, idx) => (
              <div key={idx} className="flex-1">
                <a className="group grid md:grid-cols-2 grid-cols-1 gap-0 h-full" href="#">
                  <div className="flex flex-col justify-between xl:p-10 p-5">
                    <h3 className="text-2xl font-medium text-foreground uppercase">{blog.title}</h3>
                    <p className="text-base font-light text-muted-foreground mt-4">{blog.desc}</p>
                  </div>
                  <div className="overflow-hidden shrink-0 aspect-square md:aspect-auto">
                    <img 
                      alt="blog" 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      src={blog.img}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 md:py-10 py-8 border-t border-border">
            <button className="inline-flex items-center justify-center transition-all bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 w-10 rounded-full border-none cursor-pointer">
              <iconify-icon icon="solar:arrow-left-linear" class="size-5"></iconify-icon>
            </button>
            <button className="inline-flex items-center justify-center transition-all bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 w-10 rounded-full border-none cursor-pointer">
              <iconify-icon icon="solar:arrow-right-linear" class="size-5"></iconify-icon>
            </button>
          </div>
        </div>
      </section>
      
      <section className="lg:py-7 py-5 border-y border-border w-full bg-background"></section>
    </>
  );
}