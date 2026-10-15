import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-dashed bg-[#05080A] border-white/10 border-t pt-20 pb-10">
      <div className="max-w-6xl mx-auto w-full flex flex-col font-geist px-4 sm:px-6">
        <div className="relative bg-[#c6f91f] text-black w-full overflow-hidden rounded-[2.5rem]">
          <div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none">
            <div className="border-r border-dashed border-black/10 h-full"></div>
            <div className="border-r border-dashed border-black/10 h-full"></div>
            <div className="border-r border-dashed border-black/10 h-full"></div>
            <div className="h-full"></div>
          </div>

          <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 flex flex-col justify-between min-h-[400px]">
            <a
              href="mailto:hello@veritas.insure"
              className="group flex items-start justify-between w-full mb-24 md:mb-32 reveal-on-scroll"
            >
              <span className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-none font-semibold tracking-tighter break-all">
                HELLO@VERITAS.INSURE
              </span>
              <div className="pt-2 md:pt-6">
                <ArrowUpRight
                  className="w-10 h-10 md:w-20 md:h-20 transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300"
                  strokeWidth={1.5}
                />
              </div>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 md:text-base leading-relaxed z-20 text-sm font-medium relative">
              <div className="flex flex-col gap-4">
                <p className="font-semibold reveal-on-scroll">+1 (888) 555-0137</p>
                <p className="max-w-[220px] text-black/80 reveal-on-scroll">
                  900 Producer Way, Suite 400
                  <br />
                  Dallas, TX 75201
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <span className="block text-black/50 font-semibold tracking-tight reveal-on-scroll">
                  Platform
                </span>
                <div className="flex flex-col gap-2">
                  <Link to="/" className="hover:text-black/60 transition-colors reveal-on-scroll">
                    Home
                  </Link>
                  <Link to="/about" className="hover:text-black/60 transition-colors reveal-on-scroll">
                    About Veritas
                  </Link>
                  <Link to="/login" className="hover:text-black/60 transition-colors reveal-on-scroll">
                    Agent Login
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="block text-black/50 font-semibold tracking-tight reveal-on-scroll">
                  Agents
                </span>
                <div className="flex flex-col gap-2">
                  <Link to="/contact" className="hover:text-black/60 transition-colors reveal-on-scroll">
                    Get Contracted
                  </Link>
                  <Link to="/contact" className="hover:text-black/60 transition-colors reveal-on-scroll">
                    Support Center
                  </Link>
                  <Link to="/about" className="hover:text-black/60 transition-colors reveal-on-scroll">
                    Roadmap
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="block text-black/50 font-semibold tracking-tight reveal-on-scroll">
                  Legal
                </span>
                <div className="flex flex-col gap-2">
                  <a href="#" className="hover:text-black/60 transition-colors reveal-on-scroll">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-black/60 transition-colors reveal-on-scroll">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-black/60 transition-colors reveal-on-scroll">
                    Compliance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-[#05080A] text-white w-full overflow-hidden rounded-b-[2.5rem] border-x border-b border-dashed border-white/10 mt-px">
          <div className="relative z-10 w-full flex justify-center items-end leading-none select-none pt-12">
            <h1 className="text-[17vw] md:text-[13rem] font-semibold tracking-tighter text-center leading-[0.78] mb-[-0.06em] mix-blend-screen text-white reveal-on-scroll">
              VERITAS
            </h1>
          </div>
        </div>

        <p className="text-center text-[10px] tracking-widest uppercase text-white/30 mt-8">
          © 2026 Veritas — SureLC remains the licensing &amp; contracting infrastructure underneath.
        </p>
      </div>
    </footer>
  );
}
