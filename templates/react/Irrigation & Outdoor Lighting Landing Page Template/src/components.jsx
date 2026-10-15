import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NAV_ITEMS, LOGO_URL, HERO_SLIDES, FEATURES,
  TESTIMONIALS, SERVICE_AREAS, INTEREST_OPTIONS,
} from "./data.js";

/* ---------- Header ---------- */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-black/70 backdrop-blur-sm"
      } border-b border-[#149116]/20`}
    >
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <img src={LOGO_URL} alt="Emerald Lawn Sprinklers" className="h-12 w-auto" />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLinkItem key={item.path} item={item} />
          ))}
        </nav>

        <a
          href="tel:7323882248"
          className="hidden xl:flex items-center gap-2 bg-[#149116] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#0f7011] transition-colors"
        >
          <iconify-icon icon="solar:phone-bold" width="16" />
          (732) 388-2248
        </a>

        <button
          className="xl:hidden text-[#dfb610] p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <iconify-icon icon={open ? "solar:close-square-linear" : "solar:hamburger-menu-linear"} width="28" />
        </button>
      </div>

      {open && (
        <nav className="xl:hidden bg-black/98 border-t border-[#149116]/20 px-5 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="py-2.5 px-3 rounded-lg text-sm text-gray-200 hover:bg-[#149116]/20 hover:text-[#dfb610] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:7323882248"
            className="mt-2 flex items-center justify-center gap-2 bg-[#149116] text-white px-4 py-3 rounded-full text-sm font-medium"
          >
            <iconify-icon icon="solar:phone-bold" width="16" />
            (732) 388-2248
          </a>
        </nav>
      )}
    </header>
  );
}

function NavLinkItem({ item }) {
  const isActive = window.location.pathname === item.path;
  return (
    <Link
      to={item.path}
      className={`px-3 py-2 rounded-full text-[0.82rem] font-medium transition-colors whitespace-nowrap ${
        isActive
          ? "text-[#dfb610] bg-[#149116]/15"
          : "text-gray-300 hover:text-[#dfb610] hover:bg-white/5"
      }`}
    >
      {item.label}
    </Link>
  );
}

/* ---------- Section Heading ---------- */
export function SectionHeading({ eyebrow, title, description, center = true, light = false }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-12`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${light ? "bg-white/10 text-[#dfb610]" : "bg-[#149116]/15 text-[#149116]"}`}>
          <span className="size-1.5 rounded-full bg-[#dfb610]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------- Hero Carousel ---------- */
export function HeroCarousel() {
  const [idx, setIdx] = useState(0);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 9000);
    return () => clearInterval(t);
  }, [total]);

  const slide = HERO_SLIDES[idx];
  const go = (n) => setIdx((n + total) % total);

  return (
    <section className="pt-28 pb-16 px-5 bg-gradient-to-b from-black via-[#0a1a0a] to-black">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[#149116]/30 bg-[#0d0d0d] shadow-2xl shadow-[#149116]/10">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Video */}
            <div className="relative bg-black aspect-video lg:aspect-auto lg:min-h-[460px]">
              <iframe
                key={slide.embed}
                src={slide.embed}
                title={slide.heading}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 bg-gradient-to-br from-[#0d1a0d] to-black">
              <span className="text-[#dfb610] text-sm font-semibold tracking-widest uppercase mb-4">
                Emerald Lawn Sprinklers
              </span>
              <h1 key={slide.heading} className="text-2xl md:text-4xl font-semibold tracking-tight text-white leading-tight animate-fade-in">
                {slide.heading}
              </h1>
              <p key={slide.description} className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed animate-fade-in">
                {slide.description}
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#149116] hover:bg-[#0f7011] text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:gap-3 w-fit group"
              >
                Contact Us
                <iconify-icon icon="solar:arrow-right-linear" width="18" className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => go(idx - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-[26%] size-10 rounded-full bg-black/60 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-[#149116] transition-colors z-10"
            aria-label="Previous slide"
          >
            <iconify-icon icon="solar:arrow-left-linear" width="20" />
          </button>
          <button
            onClick={() => go(idx + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-[26%] size-10 rounded-full bg-black/60 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-[#149116] transition-colors z-10"
            aria-label="Next slide"
          >
            <iconify-icon icon="solar:arrow-right-linear" width="20" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[#dfb610]" : "w-2 bg-gray-600 hover:bg-gray-400"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
export function FeaturesSection() {
  return (
    <section className="py-20 px-5 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Smart Irrigation"
          title="Technology That Saves Water & Money"
          description="From rain sensors to WiFi-controlled clocks, we install systems designed to protect your landscape and conserve resources."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <article
              key={f.heading}
              className="rounded-2xl border border-[#149116]/25 bg-gradient-to-br from-[#0f1a0f] to-[#0a0a0a] p-7 hover:border-[#dfb610]/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="size-12 rounded-xl bg-[#149116]/20 flex items-center justify-center text-[#dfb610]">
                  <iconify-icon icon={f.icon} width="26" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{f.heading}</h3>
              </div>
              {f.video && (
                <div className="relative aspect-video rounded-xl overflow-hidden mb-5 border border-white/10">
                  <iframe
                    src={f.video}
                    title={f.heading}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <ul className="space-y-3">
                {f.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                    <iconify-icon icon="solar:check-circle-bold" width="18" className="text-[#149116] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {f.button && (
                <Link
                  to={f.button.path}
                  className="mt-6 inline-flex items-center gap-2 bg-[#dfb610] hover:bg-[#c9a30e] text-black px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                >
                  {f.button.label}
                  <iconify-icon icon="solar:arrow-right-linear" width="16" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Free Estimate ---------- */
export function FreeEstimateSection() {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-black to-[#0a1a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="No Cost, No Obligation"
          title="Get Your Free Estimate Today"
          description="Family owned since 1978 — let us design an irrigation system tailored to your property at no charge."
        />
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl overflow-hidden border border-[#149116]/25 bg-[#0d0d0d]">
            <img
              src="https://emeraldlawnsprinklers.com/wp-content/uploads/2019/02/Flyer-1-3.png"
              alt="Emerald Lawn Sprinklers free estimate flyer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl border border-[#dfb610]/30 bg-gradient-to-br from-[#149116]/15 to-black p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold tracking-tight text-white mb-6">
              Why Choose Emerald?
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Family owned & operated since 1978",
                "Full installation from start to finish",
                "5 Year Warranty on new installations",
                "Serving Central & Northern New Jersey",
                "WiFi & smart controller upgrades available",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-gray-200">
                  <span className="size-7 rounded-full bg-[#149116] flex items-center justify-center shrink-0">
                    <iconify-icon icon="solar:check-read-linear" width="16" className="text-white" />
                  </span>
                  <span className="text-sm md:text-base">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#dfb610] hover:bg-[#c9a30e] text-black px-6 py-3 rounded-full text-sm font-semibold transition-all w-fit"
            >
              Request Free Estimate
              <iconify-icon icon="solar:arrow-right-linear" width="18" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
export function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 7000);
    return () => clearInterval(t);
  }, [total]);

  const t = TESTIMONIALS[idx];
  const go = (n) => setIdx((n + total) % total);

  return (
    <section className="py-20 px-5 bg-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          description="Real reviews from satisfied homeowners across New Jersey."
        />
        <div className="relative rounded-3xl border border-[#149116]/30 bg-gradient-to-br from-[#0f1a0f] to-black overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            <div className="relative min-h-[280px] md:min-h-[400px] bg-black">
              <img
                key={t.image}
                src={t.image}
                alt={t.heading}
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 md:to-[#0f1a0f]" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex gap-1 mb-5 text-[#dfb610]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <iconify-icon key={i} icon="solar:star-bold" width="20" />
                ))}
              </div>
              <h3 key={t.heading} className="text-2xl font-semibold tracking-tight text-white mb-4 animate-fade-in">
                {t.heading}
              </h3>
              <p key={t.content} className="text-gray-400 leading-relaxed mb-6 animate-fade-in">
                "{t.content}"
              </p>
              <p className="text-sm text-[#149116] font-medium">{t.author}</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-5 border-t border-[#149116]/20">
            <button
              onClick={() => go(idx - 1)}
              className="size-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#149116] transition-colors"
              aria-label="Previous testimonial"
            >
              <iconify-icon icon="solar:arrow-left-linear" width="20" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[#dfb610]" : "w-2 bg-gray-600"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(idx + 1)}
              className="size-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#149116] transition-colors"
              aria-label="Next testimonial"
            >
              <iconify-icon icon="solar:arrow-right-linear" width="20" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact Form ---------- */
export function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", interest: "", comments: "", robot: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Valid email required";
    if (!/^[\d\s()+-]{7,}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.robot) e.robot = "Please verify you're not a robot";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const inputCls = (k) =>
    `w-full bg-[#111] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#149116] transition ${
      errors[k] ? "border-red-500" : "border-white/15"
    }`;

  if (submitted) {
    return (
      <section className="py-20 px-5 bg-gradient-to-b from-[#0a1a0a] to-black">
        <div className="max-w-2xl mx-auto text-center rounded-3xl border border-[#149116]/40 bg-[#0d1a0d] p-12">
          <div className="size-16 rounded-full bg-[#149116] flex items-center justify-center mx-auto mb-6">
            <iconify-icon icon="solar:check-read-bold" width="32" className="text-white" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">Thank You!</h2>
          <p className="text-gray-400">
            Your message has been received. A member of the Emerald team will reach out shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 px-5 bg-gradient-to-b from-[#0a1a0a] to-black">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          description="Fill out the form below and we'll get back to you about your irrigation or lighting needs."
          light
        />
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-[#149116]/30 bg-[#0d0d0d] p-8 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="First name*" error={errors.firstName}>
              <input className={inputCls("firstName")} value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="John" />
            </Field>
            <Field label="Last name*" error={errors.lastName}>
              <input className={inputCls("lastName")} value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Doe" />
            </Field>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Email address*" error={errors.email}>
              <input type="email" className={inputCls("email")} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
            </Field>
            <Field label="Phone number*" error={errors.phone}>
              <input className={inputCls("phone")} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(732) 000-0000" />
            </Field>
          </div>
          <Field label="Address*" error={errors.address}>
            <input className={inputCls("address")} value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="123 Main St, NJ" />
          </Field>
          <Field label="I would like to know about:">
            <div className="relative">
              <select
                className={`${inputCls("interest")} appearance-none pr-10`}
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
              >
                <option value="">Select an option...</option>
                {INTEREST_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <iconify-icon icon="solar:alt-arrow-down-linear" width="18" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </Field>
          <Field label="Comments/Suggestions">
            <textarea
              rows="4"
              className={inputCls("comments")}
              value={form.comments}
              onChange={(e) => update("comments", e.target.value)}
              placeholder="Tell us about your project..."
            />
          </Field>

          {/* Fake reCAPTCHA */}
          <div className={`flex items-center gap-3 bg-[#111] border rounded-lg p-4 ${errors.robot ? "border-red-500" : "border-white/15"}`}>
            <button
              type="button"
              onClick={() => update("robot", !form.robot)}
              className={`size-7 rounded border-2 flex items-center justify-center transition-colors ${form.robot ? "bg-[#149116] border-[#149116]" : "border-gray-500"}`}
              aria-label="I'm not a robot"
            >
              {form.robot && <iconify-icon icon="solar:check-read-bold" width="16" className="text-white" />}
            </button>
            <span className="text-sm text-gray-300">I'm not a robot</span>
            <iconify-icon icon="simple-icons:recaptcha" width="28" className="ml-auto text-gray-500" />
          </div>
          {errors.robot && <p className="text-xs text-red-400 -mt-2">{errors.robot}</p>}

          <button
            type="submit"
            className="w-full bg-[#149116] hover:bg-[#0f7011] text-white py-3.5 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2"
          >
            Send Message
            <iconify-icon icon="solar:plain-2-linear" width="18" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">{label}</span>
      {children}
      {error && <span className="block text-xs text-red-400 mt-1">{error}</span>}
    </label>
  );
}

/* ---------- CTA Section + Review Popup ---------- */
export function CtaSection() {
  const [showReview, setShowReview] = useState(false);

  return (
    <section className="py-20 px-5 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {/* CTA 1 */}
        <div className="rounded-2xl border border-[#dfb610]/30 bg-gradient-to-br from-[#dfb610]/10 to-black p-8 flex flex-col text-center items-center">
          <div className="size-14 rounded-full bg-[#dfb610]/20 flex items-center justify-center text-[#dfb610] mb-5">
            <iconify-icon icon="solar:tag-price-bold" width="28" />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">$10 Off Your Next Service Call</h3>
          <button
            onClick={() => setShowReview(true)}
            className="mt-auto inline-flex items-center gap-2 bg-[#dfb610] hover:bg-[#c9a30e] text-black px-5 py-3 rounded-full text-sm font-semibold transition-colors"
          >
            Click Here to Leave A Review
          </button>
        </div>

        {/* CTA 2 */}
        <div className="rounded-2xl border border-[#149116]/30 bg-gradient-to-br from-[#149116]/10 to-black p-8 flex flex-col text-center items-center">
          <div className="size-14 rounded-full bg-[#149116]/20 flex items-center justify-center text-[#149116] mb-5">
            <iconify-icon icon="solar:shield-star-bold" width="28" />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Warranty</h3>
          <p className="text-gray-400 mb-5">We now offer a 5 YEAR WARRANTY!</p>
          <Link to="/about" className="mt-auto inline-flex items-center gap-2 bg-[#149116] hover:bg-[#0f7011] text-white px-5 py-3 rounded-full text-sm font-semibold transition-colors">
            See About Us
          </Link>
        </div>

        {/* CTA 3 */}
        <div className="rounded-2xl border border-[#149116]/30 bg-gradient-to-br from-[#149116]/10 to-black p-8 flex flex-col text-center items-center">
          <div className="size-14 rounded-full bg-[#149116]/20 flex items-center justify-center text-[#149116] mb-5">
            <iconify-icon icon="solar:phone-calling-bold" width="28" />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Contact Numbers</h3>
          <p className="text-gray-300 mb-5">
            <a href="tel:7323882248" className="block hover:text-[#dfb610]">(732) 388-2248</a>
            <a href="tel:9733767753" className="block hover:text-[#dfb610]">(973) 376-7753</a>
          </p>
          <Link to="/contact" className="mt-auto inline-flex items-center gap-2 bg-[#149116] hover:bg-[#0f7011] text-white px-5 py-3 rounded-full text-sm font-semibold transition-colors">
            or Contact Us
          </Link>
        </div>
      </div>

      {showReview && <ReviewPopup onClose={() => setShowReview(false)} />}
    </section>
  );
}

function ReviewPopup({ onClose }) {
  const [form, setForm] = useState({ name: "", rating: 5, review: "" });
  const [done, setDone] = useState(false);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-3xl border border-[#149116]/40 bg-[#0d0d0d] p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-white" aria-label="Close">
          <iconify-icon icon="solar:close-circle-linear" width="26" />
        </button>
        {done ? (
          <div className="text-center py-6">
            <iconify-icon icon="solar:hearts-bold" width="48" className="text-[#dfb610]" />
            <h3 className="text-2xl font-semibold text-white mt-4 mb-2">Thank You!</h3>
            <p className="text-gray-400">Your review means the world to us. Enjoy $10 off your next service call!</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-semibold tracking-tight text-white mb-1">Leave A Review</h3>
            <p className="text-sm text-gray-400 mb-6">Share your experience and get $10 off.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setDone(true); }}
              className="space-y-4"
            >
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full bg-[#111] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#149116]"
              />
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, rating: n }))}
                    className="text-[#dfb610]"
                    aria-label={`${n} stars`}
                  >
                    <iconify-icon icon={n <= form.rating ? "solar:star-bold" : "solar:star-linear"} width="28" />
                  </button>
                ))}
              </div>
              <textarea
                required
                rows="4"
                placeholder="Your review..."
                value={form.review}
                onChange={(e) => setForm((f) => ({ ...f, review: e.target.value }))}
                className="w-full bg-[#111] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#149116]"
              />
              <button type="submit" className="w-full bg-[#149116] hover:bg-[#0f7011] text-white py-3 rounded-full text-sm font-semibold transition-colors">
                Submit Review
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#149116]/20 pt-16 pb-8 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#dfb610] mb-5">
              Professional Associations
            </h4>
            <div className="flex flex-wrap items-center gap-4 bg-white/95 rounded-xl p-4">
              <img src="https://emeraldlawnsprinklers.com/wp-content/uploads/2017/02/IRRIGATION.gif" alt="Irrigation Association" className="h-12 w-auto" />
              <img src="https://emeraldlawnsprinklers.com/wp-content/uploads/2017/02/bb-acredited-4.png" alt="BBB Accredited" className="h-12 w-auto" />
              <img src="https://www.newwa.org/Portals/6/NEWWA%20Logo.png" alt="NEWWA" className="h-12 w-auto" />
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#dfb610] mb-5">
              Members of NJ
            </h4>
            <div className="bg-white/95 rounded-xl p-3 mb-5">
              <img src="https://njconsumeraffairs.nj.gov/webheaderfinal.png" alt="NJ Consumer Affairs" className="w-full h-auto" />
            </div>
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Cards Accepted</p>
            <div className="flex gap-3 text-gray-300">
              <iconify-icon icon="simple-icons:visa" width="38" />
              <iconify-icon icon="simple-icons:mastercard" width="38" />
              <iconify-icon icon="simple-icons:americanexpress" width="38" />
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#dfb610] mb-5">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <iconify-icon icon="solar:phone-bold" width="16" className="text-[#149116]" />
                <a href="tel:7323882248" className="hover:text-[#dfb610]">(732) 388-2248</a>
              </li>
              <li className="flex items-center gap-2">
                <iconify-icon icon="solar:phone-bold" width="16" className="text-[#149116]" />
                <a href="tel:9733767753" className="hover:text-[#dfb610]">(973) 376-7753</a>
              </li>
              <li className="pt-2 text-gray-400">
                <p className="text-white font-medium mb-1">Business Hours</p>
                Mon - Fri: 8:00 a.m. - 5:00 p.m.<br />
                Sat: 8:00 a.m. - 4:00 p.m.
              </li>
            </ul>
            <a
              href="https://www.facebook.com/EmeraldLawnSprinklers/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#dfb610] transition-colors"
            >
              <iconify-icon icon="simple-icons:facebook" width="20" />
              Follow us on Facebook
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          Copyright © 2026 Emerald Lawn Sprinklers. Built by Divigner. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------- Generic Page Hero ---------- */
export function PageHero({ title, subtitle, image }) {
  return (
    <section className="pt-32 pb-16 px-5 relative overflow-hidden bg-black">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        </>
      )}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-[#dfb610] text-sm font-semibold tracking-widest uppercase">
          Emerald Lawn Sprinklers
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}

export { SERVICE_AREAS };