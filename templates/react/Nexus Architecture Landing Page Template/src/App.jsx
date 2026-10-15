import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedImage = ({ src, alt, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const columns = gsap.utils.toArray('.anim-column');

      columns.forEach((col, i) => {
        const innerImg = col.querySelector('img');

        // Y Parallax animation
        gsap.fromTo(
          innerImg,
          { yPercent: i % 2 === 0 ? -15 : -5 },
          {
            yPercent: i % 2 === 0 ? 15 : 5,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );

        // Scroll-based Blur effect for columns
        gsap.fromTo(
          innerImg,
          { filter: 'blur(12px) brightness(0.9)' },
          {
            filter: 'blur(0px) brightness(1)',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 95%',
              end: 'center center',
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cols = 4;

  return (
    <div ref={containerRef} className={`image-anim-container ${className}`}>
      {Array.from({ length: cols }).map((_, i) => {
        const left = (i / cols) * 100;
        const right = 100 - ((i + 1) / cols) * 100;
        return (
          <div
            key={i}
            className="anim-column absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 ${right}% 0 ${left}%)`,
              WebkitClipPath: `inset(0 ${right}% 0 ${left}%)`,
            }}
          >
            <img
              src={src}
              alt={alt}
              className="absolute w-full object-cover max-w-none"
              style={{ height: '140%', top: '-20%', left: '0' }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // General GSAP Fade Up Animations
      gsap.utils.toArray('.gsap-fade-up').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
            },
          }
        );
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef}>
      {/* Header / Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-[#cdc9c1] lg:px-12">
        <nav className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans">Offices</a>
          <a href="#" className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans">Offerings</a>
          <a href="#" className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans">Developments</a>
          <a href="#" className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans">Vision</a>
          <a href="#" className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans hidden sm:flex">Our Story</a>
        </nav>
        <a href="#contact" className="flex items-center gap-1 text-sm font-semibold border-b border-[#3b3631] pb-0.5 hover:text-[#8c7b66] hover:border-[#8c7b66] transition-all font-sans hidden sm:flex">
          GET IN TOUCH <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" style={{ strokeWidth: "1.5px" }}></iconify-icon>
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden z-10">
        {/* Background Massive Text */}
        <h1 className="gsap-fade-up absolute top-0 w-full text-center text-9xl tracking-tighter text-[#3b3631] select-none z-0 mt-8 opacity-10 font-google-sans-flex font-normal" style={{ fontSize: "18vw", lineHeight: "0.8" }}>
          NEXUS<sup className="text-5xl align-top font-google-sans-flex font-normal">®</sup>
        </h1>

        {/* Hero Image (Column Animated & Blurred) */}
        <AnimatedImage
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4514c63-6bbd-4f90-a84b-21d5681df87d_1600w.jpg"
          alt="Modern Architecture"
          className="relative z-10 mx-auto w-11/12 max-w-7xl mt-24 lg:mt-32 shadow-2xl bg-[#dfdcd5] h-[60vh] overflow-hidden"
        />

        {/* Hero Text content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24">
          <h2 className="gsap-fade-up text-3xl lg:text-5xl tracking-tight leading-tight max-w-4xl font-google-sans-flex font-normal">
            We commit ourselves entirely to our partners and the solutions we deliver, bringing <span className="text-[#8c7b66] font-google-sans-flex font-normal">unmatched expertise.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-24 items-start">
            <div className="gsap-fade-up md:col-span-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase border border-[#cdc9c1] px-3 py-1 rounded-sm font-sans">
                <span className="w-1.5 h-1.5 bg-[#3b3631] rounded-full"></span> Our Identity
              </span>
            </div>
            <div className="gsap-fade-up md:col-span-6 flex flex-col gap-6">
              <p className="text-base text-[#6b645c] leading-relaxed max-w-md font-sans">
                We are a comprehensive property consultancy specializing in residential and commercial assets. With profound regional insights and a partner-centric philosophy, we navigate buyers and investors through every phase of the real estate cycle.
              </p>
              <div>
                <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold border-b border-[#3b3631] pb-0.5 hover:text-[#8c7b66] hover:border-[#8c7b66] transition-all font-sans">
                  CONNECT WITH US <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                </a>
              </div>
            </div>
            <div className="gsap-fade-up md:col-span-3 text-right">
              <p className="text-7xl tracking-tighter font-google-sans-flex font-normal">750+</p>
            </div>
          </div>

          {/* Image Row */}
          <div className="gsap-fade-up flex flex-wrap items-center justify-between gap-8 mt-32 text-xs font-semibold tracking-wider text-[#8c7b66] uppercase">
            <p className="font-sans">BEYOND CONVENTIONAL REAL ESTATE.</p>
            <div className="flex gap-4">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab939642-9744-4d1b-9924-388870efcac0_320w.webp" alt="Detail 1" className="w-32 h-20 object-cover bg-[#dfdcd5]" />
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4367c447-b57a-4fe0-832f-8b5e61a0252d_320w.webp" alt="Detail 2" className="w-32 h-20 object-cover bg-[#dfdcd5]" />
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b28eb2bd-1d0c-426c-b984-b9828cd8a5ea_320w.webp" alt="Detail 3" className="w-32 h-20 object-cover bg-[#dfdcd5]" />
            </div>
            <p className="font-sans">WE FORGE TRUST.</p>
          </div>
        </div>
      </section>

      {/* Dark Section: Spatial Experience */}
      <section className="relative bg-[#3b3631] text-[#ece9e4] pt-24 pb-32 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="gsap-fade-up flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-6">
            <h2 className="text-4xl md:text-5xl tracking-tight uppercase max-w-2xl leading-tight font-google-sans-flex font-normal">
              A portal to profound architectural environments
            </h2>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase border border-[#6b645c] px-3 py-1.5 rounded-full font-sans">
              <span className="w-1.5 h-1.5 bg-[#ece9e4] rounded-full"></span> Highlighted Properties
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="flex flex-col gap-12">
              <h3 className="gsap-fade-up text-3xl tracking-tight text-[#a69c91] max-w-md leading-snug font-google-sans-flex font-normal">
                Transforming visionary designs <span className="text-[#ece9e4] font-google-sans-flex font-normal">into tangible forms with</span> flawless execution.
              </h3>
              
              {/* Search Input */}
              <div className="gsap-fade-up relative max-w-sm">
                <iconify-icon icon="solar:map-point-linear" width="16" height="16" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a69c91]" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                <input type="text" placeholder="Search region..." className="w-full bg-transparent border border-[#6b645c] rounded-full py-3 pl-12 pr-4 text-sm text-[#ece9e4] placeholder-[#a69c91] focus:outline-none focus:border-[#8c7b66] transition-colors" />
              </div>

              <div className="gsap-fade-up flex items-center gap-8 mt-8">
                <div className="bg-[#322d28] border border-[#4a453f] rounded-lg p-4 flex flex-col gap-2">
                  <span className="text-xs text-[#a69c91] font-medium font-sans">Certified Partner</span>
                  <div className="flex items-center gap-2 font-semibold text-lg tracking-tight font-sans">
                    <iconify-icon icon="solar:hexagon-linear" width="20" height="20" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                    VANGUARD
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full border border-[#8c7b66]/50 bg-[#8c7b66]/20 text-[#ece9e4] text-xs font-medium font-sans">TOKYO</span>
                    <span className="px-3 py-1 rounded-full border border-[#6b645c] text-[#a69c91] text-xs font-medium hover:border-[#8c7b66] transition-colors cursor-pointer font-sans">BERLIN</span>
                    <span className="px-3 py-1 rounded-full border border-[#6b645c] text-[#a69c91] text-xs font-medium hover:border-[#8c7b66] transition-colors cursor-pointer font-sans">DUBAI</span>
                    <span className="px-3 py-1 rounded-full border border-[#6b645c] text-[#a69c91] text-xs font-medium hover:border-[#8c7b66] transition-colors cursor-pointer font-sans">MIAMI</span>
                  </div>
                  <p className="text-sm text-[#a69c91] leading-relaxed mb-4 max-w-sm font-sans">
                    Leveraging extensive regional intelligence and a partner-centric strategy, we navigate investors seamlessly.
                  </p>
                  <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-[#8c7b66] border-b border-[#8c7b66]/50 pb-0.5 hover:border-[#8c7b66] transition-all uppercase tracking-wider font-sans">
                    Explore Details <iconify-icon icon="solar:arrow-right-up-linear" width="12" height="12" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                  </a>
                </div>
              </div>
            </div>

            {/* Abstract Map Graphic Placeholder */}
            <div className="gsap-fade-up relative w-full aspect-square max-w-md ml-auto flex items-center justify-center opacity-70">
              <div className="grid grid-cols-12 gap-2 w-full h-full rotate-12 scale-110">
                <div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
                <div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
                <div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
                <div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
                <div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3b3631] via-transparent to-transparent"></div>
                <iconify-icon icon="solar:square-double-alt-arrow-up-outline" width="96" height="96" className="-translate-x-1/2 -translate-y-1/2 text-[#544e47] absolute top-1/2 left-1/2" style={{ strokeWidth: "0.5px" }}></iconify-icon>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="gsap-fade-up grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#4a453f] rounded-xl p-8 bg-[#322d28]/50 hover:bg-[#322d28] transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <p className="text-5xl tracking-tighter group-hover:text-[#8c7b66] transition-colors font-google-sans-flex font-normal">2500<span className="text-2xl text-[#a69c91] font-google-sans-flex font-normal">sq ft</span></p>
                <iconify-icon icon="solar:arrow-right-up-linear" width="20" height="20" className="text-[#a69c91] group-hover:text-[#8c7b66] transition-colors" style={{ strokeWidth: "1.5px" }}></iconify-icon>
              </div>
              <p className="text-sm text-[#a69c91] font-sans">Our signature expansive lofts are designed to maximize natural illumination and airflow.</p>
            </div>
            
            <div className="border border-[#4a453f] rounded-xl p-8 bg-[#322d28]/50 hover:bg-[#322d28] transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <p className="text-5xl tracking-tighter group-hover:text-[#8c7b66] transition-colors font-google-sans-flex font-normal">82<span className="text-4xl text-[#a69c91] font-google-sans-flex font-normal">%</span></p>
                <iconify-icon icon="solar:arrow-right-up-linear" width="20" height="20" className="text-[#a69c91] group-hover:text-[#8c7b66] transition-colors" style={{ strokeWidth: "1.5px" }}></iconify-icon>
              </div>
              <p className="text-sm text-[#a69c91] font-sans">The structure's dynamic facade is influenced by contemporary minimalist art forms.</p>
            </div>

            <div className="border border-[#4a453f] rounded-xl p-8 bg-[#322d28]/50 hover:bg-[#322d28] transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <p className="group-hover:text-[#8c7b66] transition-colors text-5xl font-normal tracking-tighter font-google-sans-flex">99.5<span className="text-4xl text-[#a69c91] font-google-sans-flex font-normal">%</span></p>
                <iconify-icon icon="solar:arrow-right-up-linear" width="20" height="20" className="text-[#a69c91] group-hover:text-[#8c7b66] transition-colors" style={{ strokeWidth: "1.5px" }}></iconify-icon>
              </div>
              <p className="text-sm text-[#a69c91] font-sans">Of partners assisted within the first 24 hours across multiple international time zones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative bg-[#3b3631] text-[#ece9e4] pb-32 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="gsap-fade-up flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-widest text-[#a69c91] uppercase font-sans">[ HEADQUARTERED IN ]</span>
              
              {/* Project 1 (Column Animated & Blurred) */}
              <AnimatedImage 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ba198c4-eafe-4d01-8017-63537641710a_800w.webp"
                alt="HQ"
                className="relative w-64 h-64 bg-[#322d28] overflow-hidden"
              />
              
              <div className="flex justify-between text-xs tracking-wider text-[#a69c91] uppercase font-medium">
                <span className="font-sans">RESIDENTIAL</span>
                <span className="font-sans">850 SQ FT</span>
              </div>
              <p className="text-base font-medium font-sans">Vertex Residences</p>
            </div>

            <div className="flex flex-col items-end text-right max-w-xl">
              <h2 className="gsap-fade-up text-4xl md:text-5xl tracking-tight uppercase mb-6 leading-tight font-google-sans-flex font-normal">
                CRAFTED WITH INTENT
              </h2>
              <p className="gsap-fade-up text-sm text-[#a69c91] leading-relaxed max-w-sm mb-12 font-sans">
                Explore exclusive assets in the most coveted districts. From contemporary urban lofts to secluded retreats, we curate spaces that align with your aspirations.
              </p>

              <div className="gsap-fade-up flex flex-col gap-6 text-left w-64 mr-32">
                {/* Project 2 (Column Animated & Blurred) */}
                <AnimatedImage 
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25941fa9-bf93-4893-80aa-717a659452dc_800w.webp"
                  alt="Project 2"
                  className="relative w-full h-64 bg-[#322d28] overflow-hidden"
                />
                <div className="flex justify-between text-xs tracking-wider text-[#a69c91] uppercase font-medium">
                  <span className="font-sans">COMMERCIAL</span>
                  <span className="font-sans">1200 SQ FT</span>
                </div>
                <p className="text-base font-medium font-sans">Lumina Lofts</p>
              </div>
            </div>
          </div>

          {/* Third Project Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="gsap-fade-up md:col-span-4 flex flex-col gap-4">
              <p className="text-6xl text-[#8c7b66] tracking-tighter font-google-sans-flex font-normal">8</p>
              <p className="text-xs font-semibold tracking-wider text-[#a69c91] uppercase leading-relaxed max-w-[150px] font-sans">
                VISIONARIES FROM THE STUDIO
              </p>
            </div>
            
            <div className="gsap-fade-up md:col-span-4 flex flex-col justify-end h-full pb-8">
              <h2 className="text-3xl tracking-tight uppercase leading-snug font-google-sans-flex font-normal">
                EMBODIES THE <br/>RAW ESSENCE
              </h2>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold border-b border-[#a69c91] pb-0.5 hover:text-[#8c7b66] hover:border-[#8c7b66] transition-all uppercase tracking-wider mt-6 w-fit text-[#a69c91] font-sans">
                BROWSE PORTFOLIO <iconify-icon icon="solar:arrow-right-up-linear" width="12" height="12" style={{ strokeWidth: "1.5px" }}></iconify-icon>
              </a>
            </div>

            <div className="gsap-fade-up md:col-span-4 flex flex-col gap-6">
              {/* Project 3 (Column Animated & Blurred) */}
              <AnimatedImage
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6c67a89-6280-428d-8244-e5c291ac5097_800w.webp"
                alt="Project 3"
                className="relative w-full aspect-[4/3] bg-[#322d28] overflow-hidden"
              />
              <div className="flex justify-between text-xs tracking-wider text-[#a69c91] uppercase font-medium">
                <span className="font-sans">PENTHOUSE</span>
                <span className="font-sans">3400 SQ FT</span>
              </div>
              <p className="text-base font-medium font-sans">Aether Pavilion</p>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-[#ece9e4] text-[#3b3631] py-32 z-10 border-t border-[#cdc9c1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="gsap-fade-up flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-5xl tracking-tight uppercase leading-tight font-google-sans-flex font-normal max-w-xl">
              Endorsements from our partners
            </h2>
            <span className="text-xs font-semibold tracking-widest text-[#8c7b66] uppercase font-sans">[ CLIENT PERSPECTIVES ]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="gsap-fade-up border border-[#cdc9c1] rounded-xl p-8 bg-[#dfdcd5]/30 flex flex-col justify-between group hover:border-[#8c7b66] transition-colors duration-300">
              <div>
                <iconify-icon icon="solar:quote-right-linear" width="32" height="32" className="text-[#8c7b66] mb-8 opacity-40 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                <p className="text-sm text-[#6b645c] leading-relaxed mb-10 font-sans">
                  "Nexus didn't just find us a property; they orchestrated a seamless transition into our new corporate headquarters. Their architectural foresight and ability to curate spaces is truly unmatched."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-10 h-10 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-300" />
                <div>
                  <p className="text-xs font-semibold text-[#3b3631] font-sans">Marcus V.</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#8c7b66] font-sans mt-0.5">CEO, Vanguard Logistics</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="gsap-fade-up border border-[#cdc9c1] rounded-xl p-8 bg-[#dfdcd5]/30 flex flex-col justify-between group hover:border-[#8c7b66] transition-colors duration-300">
              <div>
                <iconify-icon icon="solar:quote-right-linear" width="32" height="32" className="text-[#8c7b66] mb-8 opacity-40 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                <p className="text-sm text-[#6b645c] leading-relaxed mb-10 font-sans">
                  "The level of insight and market intelligence provided was exceptional. They turned what is usually a complex international acquisition into a profoundly refined and elegant experience."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-10 h-10 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-300" />
                <div>
                  <p className="text-xs font-semibold text-[#3b3631] font-sans">Elena R.</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#8c7b66] font-sans mt-0.5">Managing Partner, Astra</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="gsap-fade-up border border-[#cdc9c1] rounded-xl p-8 bg-[#dfdcd5]/30 flex flex-col justify-between group hover:border-[#8c7b66] transition-colors duration-300">
              <div>
                <iconify-icon icon="solar:quote-right-linear" width="32" height="32" className="text-[#8c7b66] mb-8 opacity-40 group-hover:opacity-100 transition-opacity" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                <p className="text-sm text-[#6b645c] leading-relaxed mb-10 font-sans">
                  "From spatial planning to final execution, their commitment is absolute. We now operate in a space that perfectly reflects our brand identity while optimizing daily operational flow."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-10 h-10 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-300" />
                <div>
                  <p className="text-xs font-semibold text-[#3b3631] font-sans">Sarah J.</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#8c7b66] font-sans mt-0.5">Founder, Atelier Studio</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-[#3b3631] text-[#ece9e4] py-32 z-10 border-t border-[#4a453f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="gsap-fade-up flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#a69c91] uppercase font-sans block mb-6">[ INITIATE DIALOGUE ]</span>
                <h2 className="text-4xl md:text-5xl tracking-tight uppercase leading-tight font-google-sans-flex font-normal mb-8 max-w-md">
                  Let's build the future together.
                </h2>
                <p className="text-sm text-[#a69c91] leading-relaxed max-w-sm font-sans mb-12">
                  Connect with our principal architects and regional directors to explore tailored solutions for your next venture. Whether acquiring a legacy asset or developing a commercial hub, we are ready to guide you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-12 border-t border-[#4a453f] pt-10 mt-8 lg:mt-auto">
                <div className="flex flex-col gap-2">
                  <span className="text-xs tracking-wider text-[#a69c91] uppercase font-semibold font-sans">General Inquiries</span>
                  <a href="mailto:hello@nexus.com" className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans">hello@nexus.com</a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs tracking-wider text-[#a69c91] uppercase font-semibold font-sans">Direct Line</span>
                  <a href="tel:+15551234567" className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans">+1 (555) 123-4567</a>
                </div>
              </div>
            </div>

            <div className="gsap-fade-up bg-[#322d28] rounded-2xl p-8 md:p-10 border border-[#4a453f]">
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-semibold tracking-wider text-[#a69c91] uppercase font-sans">First Name</label>
                    <input type="text" className="bg-transparent border-b border-[#544e47] text-sm text-[#ece9e4] py-2 focus:outline-none focus:border-[#8c7b66] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-xs font-semibold tracking-wider text-[#a69c91] uppercase font-sans">Last Name</label>
                    <input type="text" className="bg-transparent border-b border-[#544e47] text-sm text-[#ece9e4] py-2 focus:outline-none focus:border-[#8c7b66] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-semibold tracking-wider text-[#a69c91] uppercase font-sans">Email Address</label>
                  <input type="email" className="bg-transparent border-b border-[#544e47] text-sm text-[#ece9e4] py-2 focus:outline-none focus:border-[#8c7b66] transition-colors" />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label className="text-xs font-semibold tracking-wider text-[#a69c91] uppercase font-sans">Area of Interest</label>
                  <select defaultValue="" className="bg-transparent border-b border-[#544e47] text-sm text-[#ece9e4] py-2 focus:outline-none focus:border-[#8c7b66] transition-colors appearance-none cursor-pointer rounded-none">
                    <option value="" disabled className="bg-[#322d28]">Select an option...</option>
                    <option value="residential" className="bg-[#322d28]">Residential Properties</option>
                    <option value="commercial" className="bg-[#322d28]">Commercial Assets</option>
                    <option value="development" className="bg-[#322d28]">Development Partnerships</option>
                  </select>
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="16" height="16" className="absolute right-0 bottom-3 text-[#a69c91] pointer-events-none" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                </div>
                <div className="flex flex-col gap-2 relative mb-2">
                  <label className="text-xs font-semibold tracking-wider text-[#a69c91] uppercase font-sans">Message</label>
                  <textarea rows="3" className="bg-transparent border-b border-[#544e47] text-sm text-[#ece9e4] py-2 focus:outline-none focus:border-[#8c7b66] transition-colors resize-none"></textarea>
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <input type="checkbox" id="terms" className="peer appearance-none w-4 h-4 border border-[#544e47] rounded-sm checked:bg-[#8c7b66] checked:border-[#8c7b66] cursor-pointer transition-colors bg-transparent" />
                    <iconify-icon icon="solar:check-read-linear" width="12" height="12" className="absolute text-[#ece9e4] opacity-0 peer-checked:opacity-100 pointer-events-none" style={{ strokeWidth: "2px" }}></iconify-icon>
                  </div>
                  <label htmlFor="terms" className="text-xs text-[#a69c91] font-sans cursor-pointer">I agree to the Terms & Privacy Policy</label>
                </div>

                <button type="button" className="bg-[#ece9e4] hover:bg-[#8c7b66] hover:text-[#ece9e4] text-[#3b3631] text-xs font-semibold tracking-wider uppercase py-4 rounded transition-colors font-sans w-full flex justify-center items-center gap-2">
                  SUBMIT INQUIRY <iconify-icon icon="solar:arrow-right-up-linear" width="14" height="14" style={{ strokeWidth: "1.5px" }}></iconify-icon>
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#322d28] text-[#ece9e4] pt-24 pb-12 overflow-hidden z-10 border-t border-[#4a453f]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="gsap-fade-up flex justify-between items-center text-xs font-semibold tracking-wider text-[#a69c91] uppercase mb-16 border-b border-[#4a453f] pb-6">
            <span className="font-sans">FOUNDED '18</span>
            <span className="font-sans hidden md:inline">Excellence // Integration // Longevity</span>
            <button className="hover:text-[#ece9e4] transition-colors font-sans">DIRECTORY</button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#a69c91] font-medium gap-6 pt-4">
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span className="font-sans">ALL RIGHTS RETAINED.</span>
              <span className="font-sans">©2024 NEXUS GROUP</span>
            </div>
            <div className="text-center flex flex-col gap-1">
              <span className="font-sans">880 INNOVATION WAY, SUITE 400</span>
              <span className="font-sans">AUSTIN, TEXAS 78701</span>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1">
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#ece9e4] transition-colors font-sans">INSTAGRAM</a>
                <a href="#" className="hover:text-[#ece9e4] transition-colors font-sans">LINKEDIN</a>
              </div>
              <a href="#" className="hover:text-[#ece9e4] transition-colors font-sans">TERMS & PRIVACY</a>
            </div>
          </div>
        </div>

        {/* Massive Footer Graphic Text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03] transform translate-y-1/4">
          <h1 className="text-center tracking-tighter text-[#ece9e4] select-none font-google-sans-flex font-normal" style={{ fontSize: "25vw" }}>
            NEXUS
          </h1>
        </div>
      </footer>
    </div>
  );
}