import { useEffect, useMemo, useRef, useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const successTimeoutRef = useRef(null)

  const services = useMemo(
    () => [
      {
        title: 'Haircut',
        description: 'Precision cuts tailored to your face shape and style.',
        price: 'Starting ₹___',
        icon: 'solar:scissors-linear',
        extraClass: '',
      },
      {
        title: 'Beard Styling',
        description: 'Sharp contouring, trimming, and beard grooming.',
        price: 'Starting ₹___',
        icon: 'solar:magic-stick-3-linear',
        extraClass: '',
      },
      {
        title: 'Hair Coloring',
        description: 'Global color, highlights, and tone-enhancing finishes.',
        price: 'Starting ₹___',
        icon: 'solar:palette-round-linear',
        extraClass: '',
      },
      {
        title: 'Facial & Skincare',
        description: 'Refreshing facials and skincare treatments for glow.',
        price: 'Starting ₹___',
        icon: 'solar:leaf-linear',
        extraClass: '',
      },
      {
        title: 'Bridal/Groom Packages',
        description: 'Complete event-ready styling and beauty packages.',
        price: 'Starting ₹___',
        icon: 'solar:diamond-linear',
        extraClass: 'sm:col-span-2 xl:col-span-1',
      },
    ],
    [],
  )

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current)
      }
    }
  }, [])

  const handleNavClick = () => setMobileMenuOpen(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      setShowSuccess(true)
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
      })

      successTimeoutRef.current = setTimeout(() => {
        setShowSuccess(false)
      }, 4000)
    } catch (error) {
      window.alert('Unable to connect to the booking service.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400">
              <iconify-icon icon="solar:scissors-linear" class="h-5 w-5"></iconify-icon>
            </div>
            <div>
              <div className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                Let’s Change with Ragi
              </div>
              <div className="text-sm font-normal text-white/60">Unisex Salon · Nagpur</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-base font-normal text-white/70 transition hover:text-yellow-400">
              About
            </a>
            <a href="#services" className="text-base font-normal text-white/70 transition hover:text-yellow-400">
              Services
            </a>
            <a href="#gallery" className="text-base font-normal text-white/70 transition hover:text-yellow-400">
              Gallery
            </a>
            <a href="#reviews" className="text-base font-normal text-white/70 transition hover:text-yellow-400">
              Reviews
            </a>
            <a href="#contact" className="text-base font-normal text-white/70 transition hover:text-yellow-400">
              Contact
            </a>
          </nav>

          <a
            href="#booking"
            className="hidden rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2.5 text-sm font-medium text-yellow-300 transition hover:bg-yellow-500 hover:text-black md:inline-flex"
          >
            Book Appointment
          </a>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          >
            <iconify-icon
              icon={mobileMenuOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'}
              class="h-5 w-5"
            ></iconify-icon>
          </button>
        </div>

        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} border-t border-white/10 bg-black/95 md:hidden`}>
          <div className="space-y-2 px-4 py-4">
            <a
              href="#about"
              onClick={handleNavClick}
              className="block rounded-2xl px-4 py-3 text-base font-normal text-white/80 transition hover:bg-white/5 hover:text-yellow-400"
            >
              About
            </a>
            <a
              href="#services"
              onClick={handleNavClick}
              className="block rounded-2xl px-4 py-3 text-base font-normal text-white/80 transition hover:bg-white/5 hover:text-yellow-400"
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={handleNavClick}
              className="block rounded-2xl px-4 py-3 text-base font-normal text-white/80 transition hover:bg-white/5 hover:text-yellow-400"
            >
              Gallery
            </a>
            <a
              href="#reviews"
              onClick={handleNavClick}
              className="block rounded-2xl px-4 py-3 text-base font-normal text-white/80 transition hover:bg-white/5 hover:text-yellow-400"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block rounded-2xl px-4 py-3 text-base font-normal text-white/80 transition hover:bg-white/5 hover:text-yellow-400"
            >
              Contact
            </a>
            <a
              href="#booking"
              onClick={handleNavClick}
              className="mt-2 block rounded-2xl bg-yellow-500 px-4 py-3 text-center text-base font-medium text-black"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80"
            alt="Salon interior"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="reveal max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-normal text-yellow-300">
              <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
              Premium Unisex Salon in Nagpur
            </div>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let’s Change <span className="gold-text">with Ragi</span>
            </h1>
            <p className="mt-5 text-xl font-normal leading-8 text-white/75 sm:text-2xl">Style That Defines You</p>
            <p className="mt-6 max-w-xl text-lg font-normal leading-8 text-white/65 sm:text-xl">
              Modern grooming, sharp haircuts, elegant styling, and beauty services in a refined black-and-gold salon
              experience.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-6 py-3.5 text-base font-medium text-black transition hover:scale-[1.02] hover:bg-yellow-400"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-normal text-white transition hover:border-yellow-500/30 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="reveal lg:justify-self-end">
            <div className="glass-dark card-glow relative rounded-[2rem] border border-white/10 p-4">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80"
                  alt="Barber styling hair"
                  className="h-[26rem] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-[1.5rem] border border-yellow-500/30 bg-black/85 p-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-400">
                    <iconify-icon icon="solar:star-linear" class="h-5 w-5"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-white/60">Client Rating</p>
                    <p className="text-lg font-medium text-white">4.0 ⭐ Trusted Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-neutral-950 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/80">About Us</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Crafted looks, elevated confidence
            </h2>
          </div>
          <div className="reveal">
            <p className="text-lg font-normal leading-8 text-white/70 sm:text-xl">
              Premium unisex salon in Nagpur offering modern haircuts, styling, grooming, and beauty services.
            </p>
            <p className="mt-5 text-base font-normal leading-8 text-white/55 sm:text-lg">
              At Let’s Change with Ragi Unisex Salon, every detail is designed to feel refined and welcoming—from warm
              lighting and polished interiors to expert styling that helps you look your best for every occasion.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-black py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/80">Services</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Signature salon services
            </h2>
            <p className="mt-4 text-lg font-normal leading-8 text-white/65 sm:text-xl">
              Designed for modern style, grooming, and personal care.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => (
              <div
                key={service.title}
                className={`reveal rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-white/7 ${service.extraClass}`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                  <iconify-icon icon={service.icon} class="h-5 w-5"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-white">{service.title}</h3>
                <p className="mt-3 text-base font-normal leading-7 text-white/60">{service.description}</p>
                <p className="mt-5 text-sm font-medium text-yellow-300">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="border-t border-white/10 bg-neutral-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/80">Gallery</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Inside the salon experience
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="reveal image-zoom overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
                  alt="Salon mirrors and chairs"
                  className="h-80 w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white">Interior Chairs &amp; Mirrors</h3>
                <p className="mt-2 text-base font-normal text-white/60">
                  Premium black seating, mirror stations, and warm-lit styling zones.
                </p>
              </div>
            </div>

            <div className="reveal image-zoom overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <div className="overflow-hidden">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                  alt="Barber cutting hair"
                  className="h-80 w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white">Professional Grooming</h3>
                <p className="mt-2 text-base font-normal text-white/60">
                  Clean cuts, careful finishing, and a polished salon workflow.
                </p>
              </div>
            </div>

            <div className="reveal image-zoom overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 md:col-span-2 xl:col-span-1">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80"
                  alt="Salon exterior entrance"
                  className="h-80 w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white">Shop Entrance</h3>
                <p className="mt-2 text-base font-normal text-white/60">
                  Welcoming exterior presence with bold black and festive gold styling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-black py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/80">Appointment</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Book your salon session
            </h2>
            <p className="mt-4 max-w-xl text-lg font-normal leading-8 text-white/65 sm:text-xl">
              Reserve your preferred service and time. This form is ready to post to your Flask booking endpoint.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                  <iconify-icon icon="solar:clock-circle-linear" class="h-5 w-5"></iconify-icon>
                </div>
                <div>
                  <p className="text-base font-medium text-white">Open Daily</p>
                  <p className="text-base font-normal text-white/60">10 AM – 10 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                  <iconify-icon icon="solar:phone-linear" class="h-5 w-5"></iconify-icon>
                </div>
                <div>
                  <p className="text-base font-medium text-white">Call Us</p>
                  <p className="text-base font-normal text-white/60">07499411335</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal rounded-[2rem] border border-yellow-500/20 bg-white/5 p-6 card-glow sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-normal text-white/70">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="gold-ring w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3.5 text-base font-normal text-white placeholder:text-white/30"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-normal text-white/70">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="gold-ring w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3.5 text-base font-normal text-white placeholder:text-white/30"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-normal text-white/70">Service</label>
                <div className="relative">
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="gold-ring w-full appearance-none rounded-2xl border border-white/10 bg-black/60 px-4 py-3.5 pr-12 text-base font-normal text-white"
                  >
                    <option value="" className="text-black">
                      Select a service
                    </option>
                    <option className="text-black">Haircut</option>
                    <option className="text-black">Beard Styling</option>
                    <option className="text-black">Hair Coloring</option>
                    <option className="text-black">Facial &amp; Skincare</option>
                    <option className="text-black">Bridal/Groom Packages</option>
                  </select>
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    class="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
                  ></iconify-icon>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-normal text-white/70">Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="gold-ring w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3.5 text-base font-normal text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-normal text-white/70">Time</label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="gold-ring w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3.5 text-base font-normal text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-2xl bg-yellow-500 px-6 py-3.5 text-base font-medium text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-80"
              >
                {submitting ? 'Confirming...' : 'Confirm Appointment'}
              </button>

              <div
                className={`${
                  showSuccess ? 'block' : 'hidden'
                } rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-normal text-green-300`}
              >
                Appointment booked successfully. We’ll contact you soon.
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-t border-white/10 bg-neutral-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/80">Reviews</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Loved by local clients
              </h2>
            </div>
            <div className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-3 text-base font-medium text-yellow-300">
              4.0 ⭐ Rating
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                quote:
                  'Clean salon, professional staff, and a very polished haircut experience. The interiors feel premium and comfortable.',
                name: 'Aman Verma',
              },
              {
                quote:
                  'I booked for hair styling and really liked the finishing. Friendly atmosphere and good service quality.',
                name: 'Priya Sharma',
              },
              {
                quote:
                  'Great location and easy booking. The grooming service was neat, quick, and exactly what I wanted.',
                name: 'Rahul Meshram',
              },
            ].map((review) => (
              <div key={review.name} className="reveal rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex text-yellow-400">
                  <iconify-icon icon="solar:star-bold" class="h-4 w-4"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" class="h-4 w-4"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" class="h-4 w-4"></iconify-icon>
                  <iconify-icon icon="solar:star-bold" class="h-4 w-4"></iconify-icon>
                  <iconify-icon icon="solar:star-linear" class="h-4 w-4"></iconify-icon>
                </div>
                <p className="text-base font-normal leading-8 text-white/70">{review.quote}</p>
                <p className="mt-5 text-sm font-medium text-white">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/80">Contact</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Visit us in Nagpur
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="reveal rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                    <iconify-icon icon="solar:map-point-linear" class="h-5 w-5"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">Address</p>
                    <p className="mt-1 text-base font-normal leading-8 text-white/65">
                      No. 2, SRPF Gate, Hingna Rd, S R P Camp, Digdoh, Nagpur, Maharashtra 440016
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                    <iconify-icon icon="solar:phone-calling-linear" class="h-5 w-5"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">Phone</p>
                    <a
                      href="tel:07499411335"
                      className="mt-1 block text-base font-normal text-white/65 transition hover:text-yellow-400"
                    >
                      07499411335
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                    <iconify-icon icon="solar:clock-circle-linear" class="h-5 w-5"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">Opening Hours</p>
                    <p className="mt-1 text-base font-normal text-white/65">10 AM – 10 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
              <iframe
                title="Salon location map"
                src="https://www.google.com/maps?q=No.%202,%20SRPF%20Gate,%20Hingna%20Rd,%20S%20R%20P%20Camp,%20Digdoh,%20Nagpur,%20Maharashtra%20440016&output=embed"
                className="h-[24rem] w-full rounded-[1.5rem] grayscale invert-[0.92] contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-base font-medium text-white">Let’s Change with Ragi Unisex Salon</p>
            <p className="mt-1 text-sm font-normal text-white/50">© 2026 All rights reserved.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-yellow-500/30 hover:text-yellow-400"
              aria-label="Instagram"
            >
              <iconify-icon icon="simple-icons:instagram" class="h-5 w-5"></iconify-icon>
            </a>
            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-yellow-500/30 hover:text-yellow-400"
              aria-label="Facebook"
            >
              <iconify-icon icon="simple-icons:facebook" class="h-5 w-5"></iconify-icon>
            </a>
            <a
              href="https://wa.me/917499411335"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-yellow-500/30 hover:text-yellow-400"
              aria-label="WhatsApp"
            >
              <iconify-icon icon="simple-icons:whatsapp" class="h-5 w-5"></iconify-icon>
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/917499411335?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Let%E2%80%99s%20Change%20with%20Ragi."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-2xl transition hover:scale-[1.03] hover:bg-green-400"
      >
        <iconify-icon icon="solar:chat-round-linear" class="h-5 w-5"></iconify-icon>
        <span className="hidden sm:inline">Book Now</span>
      </a>
    </div>
  )
}

export default App