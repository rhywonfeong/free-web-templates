import React, { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import {
  Header, Footer, HeroCarousel, FeaturesSection, FreeEstimateSection,
  TestimonialsSection, ContactForm, CtaSection, PageHero, SectionHeading,
  SERVICE_AREAS,
} from "./components.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

/* ---------- Home ---------- */
function Home() {
  return (
    <>
      <HeroCarousel />
      <FeaturesSection />
      <FreeEstimateSection />
      <TestimonialsSection />
      <ContactForm />
      <CtaSection />
    </>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <>
      <PageHero
        title="About Emerald Lawn Sprinklers"
        subtitle="The Best Family Owned Lawn Sprinkler Contractor in NJ since 1978."
        image="https://emeraldlawnsprinklers.com/wp-content/uploads/2017/02/installation-768x583.jpg"
      />
      <section className="py-16 px-5 bg-black">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
          <p>
            EMERALD LAWN SPRINKLERS CORP. has been proudly serving Central and Northern
            New Jersey since 1978. As a family owned and operated business, we take pride
            in delivering professional sprinkler and irrigation services with the personal
            touch only a family company can provide.
          </p>
          <p>
            From the initial design and measuring to a fully operational system, we install
            your sprinkler system from start to finish. We specialize in lawn irrigation,
            landscape lighting, WiFi-controlled smart systems, backflow testing, and
            seasonal maintenance.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            {[
              { icon: "solar:calendar-bold", stat: "1978", label: "Family Owned Since" },
              { icon: "solar:shield-star-bold", stat: "5 Year", label: "Warranty Offered" },
              { icon: "solar:map-point-bold", stat: "9", label: "Counties Served" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-[#149116]/25 bg-[#0d1a0d] p-6 text-center">
                <iconify-icon icon={s.icon} width="32" className="text-[#dfb610]" />
                <p className="text-3xl font-semibold text-white mt-3">{s.stat}</p>
                <p className="text-sm text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}

/* ---------- Service Detail page builder ---------- */
function ServicePage({ title, subtitle, image, intro, bullets, ctaText = "Request a Free Estimate" }) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} image={image} />
      <section className="py-16 px-5 bg-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 leading-relaxed text-lg mb-8">{intro}</p>
          <ul className="space-y-4 mb-10">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 items-start text-gray-300">
                <iconify-icon icon="solar:check-circle-bold" width="22" className="text-[#149116] shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#149116] hover:bg-[#0f7011] text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors">
            {ctaText}
            <iconify-icon icon="solar:arrow-right-linear" width="18" />
          </Link>
        </div>
      </section>
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

function Installation() {
  return (
    <ServicePage
      title="Sprinkler Installation"
      subtitle="Complete irrigation system installation from start to finish."
      image="https://emeraldlawnsprinklers.com/wp-content/uploads/2017/02/installation-768x583.jpg"
      intro="EMERALD LAWN SPRINKLERS CORP. is able to install your sprinkler system from start to finish. We design each system specifically for your property to ensure efficient, even coverage that keeps your lawn green all season long."
      bullets={[
        "Custom-designed systems tailored to your landscape",
        "Professional installation by experienced technicians",
        "WiFi & smart controller integration available",
        "Rain sensors to conserve water by 30-35%",
        "5 Year Warranty on new installations",
        `Serving ${SERVICE_AREAS.join(", ")} counties`,
      ]}
    />
  );
}

function ServiceRepair() {
  return (
    <ServicePage
      title="Sprinkler Service / Repair"
      subtitle="Keep your irrigation system running flawlessly all year round."
      image="https://emeraldlawnsprinklers.com/wp-content/uploads/2017/02/1-768x587.png"
      intro="Whether you need a spring start-up, seasonal winterization, or a quick repair, our team keeps your system in top condition. We handle broken lines and heads, controller issues, and backflow testing recommended yearly by the DEP."
      bullets={[
        "Spring start-up & system inspection",
        "Fall winterization to protect your investment",
        "Backflow testing — recommended every year by the DEP",
        "Repairs for broken lines, heads, and valves",
        "Controller upgrades and WiFi clock installation",
        "Service contracts available for hassle-free maintenance",
      ]}
      ctaText="Schedule Service"
    />
  );
}

function Lighting() {
  return (
    <ServicePage
      title="Outdoor / Landscape Lighting"
      subtitle="A touch of elegant lighting that makes your house the centerpiece of the neighborhood."
      image="https://emeraldlawnsprinklers.com/wp-content/uploads/2011/02/landscapelighting1.jpg"
      intro="We specialize in landscape lighting that adds beauty, safety, and value to your property. From accenting architectural features to illuminating walkways and gardens, our custom lighting designs transform your home after dark."
      bullets={[
        "Custom landscape lighting design",
        "Accent lighting for trees, gardens & architecture",
        "Pathway and safety lighting",
        "Energy-efficient LED options",
        "Smart timers and controls",
        "Professional installation and maintenance",
      ]}
      ctaText="Get a Lighting Estimate"
    />
  );
}

/* ---------- Careers ---------- */
function Careers() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join the best family owned lawn sprinkler contractor in NJ."
        image="https://emeraldlawnsprinklers.com/wp-content/uploads/2011/03/EdSnapshot.jpg"
      />
      <section className="py-16 px-5 bg-black">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Now Hiring"
            title="Grow With Emerald"
            description="We're always looking for hardworking, dedicated team members who take pride in quality work and customer service."
            center={false}
          />
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              "Irrigation Installation Technician",
              "Service & Repair Technician",
              "Landscape Lighting Installer",
              "Customer Service Representative",
            ].map((role) => (
              <div key={role} className="rounded-2xl border border-[#149116]/25 bg-[#0d1a0d] p-6 hover:border-[#dfb610]/40 transition-colors">
                <iconify-icon icon="solar:case-round-minimalistic-bold" width="26" className="text-[#dfb610]" />
                <h3 className="text-lg font-semibold text-white mt-3">{role}</h3>
                <p className="text-sm text-gray-400 mt-1">Full-time · Central & Northern NJ</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mb-6">
            Interested in joining our team? Send us your information through our contact form
            and let us know which position you're applying for.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#dfb610] hover:bg-[#c9a30e] text-black px-6 py-3 rounded-full text-sm font-semibold transition-colors">
            Apply Now
            <iconify-icon icon="solar:arrow-right-linear" width="18" />
          </Link>
        </div>
      </section>
    </>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out for a free estimate, service, or any questions. We're here to help."
      />
      <section className="py-12 px-5 bg-black">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
          {[
            { icon: "solar:phone-bold", title: "Call Us", lines: ["(732) 388-2248", "(973) 376-7753"] },
            { icon: "solar:clock-circle-bold", title: "Hours", lines: ["Mon-Fri: 8am - 5pm", "Sat: 8am - 4pm"] },
            { icon: "solar:map-point-bold", title: "Service Area", lines: ["Central & Northern", "New Jersey"] },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-[#149116]/25 bg-[#0d1a0d] p-6 text-center">
              <iconify-icon icon={c.icon} width="30" className="text-[#dfb610]" />
              <h3 className="text-lg font-semibold text-white mt-3 mb-2">{c.title}</h3>
              {c.lines.map((l) => <p key={l} className="text-sm text-gray-400">{l}</p>)}
            </div>
          ))}
        </div>
      </section>
      <ContactForm />
      <CtaSection />
    </>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/service-repair" element={<ServiceRepair />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}