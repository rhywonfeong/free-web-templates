import { memo, useEffect, useMemo, useRef, useState } from "react";
import "iconify-icon";
import "./index.css";

const services = [
  {
    icon: "solar:snowflake-linear",
    title: "Premium Air Conditioning Installation",
    copy: "Experience top-notch air conditioning installation for optimal comfort and efficiency.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
  },
  {
    icon: "solar:settings-linear",
    title: "Efficient Maintenance Services",
    copy: "Keep your systems running smoothly with our thorough and reliable maintenance services.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    icon: "solar:thermometer-linear",
    title: "Expert Refrigeration Solutions",
    copy: "Ensure your refrigeration needs are met with our specialized and professional solutions.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
  },
];

const solutionCards = [
  "Residential Air Conditioning",
  "Commercial Cooling Solutions",
  "Refrigeration Services",
  "Air Conditioning Maintenance",
];

const packages = [
  {
    name: "Basic Installation Package",
    label: "Basic airconditioning installation service",
    features: ["Standard install", "5 year warranty", "Basic features"],
  },
  {
    name: "Advanced Cooling Package",
    label: "Comprehensive installation with energy-efficient features.",
    popular: true,
    features: ["Efficient cooling", "Energy-saving", "Extended warranty"],
  },
  {
    name: "Premium Comfort Package",
    label: "Smart technology, premium support, and top-tier installation.",
    features: ["Smart control", "Priority support", "Advanced features"],
  },
];

const testimonials = [
  {
    quote:
      "A WAY Airconditioning and Refrigeration exceeded our expectations with their exceptional service. The team was professional, efficient, and the installation was seamless. Our new system works perfectly in the hot South African climate.",
    name: "Thabo Mokoena",
    role: "Commercial property owner",
  },
  {
    quote:
      "Fast response, clean workmanship, and excellent advice on energy-efficient cooling. Our office is more comfortable and our monthly running cost improved.",
    name: "Lerato Jacobs",
    role: "Operations manager",
  },
  {
    quote:
      "They helped us choose the correct refrigeration system and handled the maintenance plan professionally. Reliable team for Nelson Mandela Bay businesses.",
    name: "Michael Daniels",
    role: "Retail business owner",
  },
];

function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl");
    if (!gl) return undefined;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const vs = `
      attribute vec2 position;
      void main(){ gl_Position = vec4(position,0.0,1.0); }
    `;

    const fs = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),f.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),f.x),f.y);
      }
      float fbm(vec2 p){float v=0.0,a=0.5; for(int i=0;i<4;i++){v+=a*noise(p);p*=2.05;a*=0.5;} return v;}
      void main(){
        vec2 uv=gl_FragCoord.xy/u_resolution.xy;
        float aspect=u_resolution.x/u_resolution.y;
        float beamX=0.64 + sin(u_time*.18)*.025;
        float dist=abs(uv.x-beamX)*aspect;
        float core=exp(-dist*720.0)*.7;
        float halo=exp(-dist*18.0)*.25;
        float smoke=fbm(uv*vec2(4.0,2.0)+vec2(0.0,-u_time*.08))*smoothstep(.45,.0,dist)*.46;
        vec3 bg=mix(vec3(.012,.016,.032),vec3(.02,.026,.045),uv.y);
        vec3 color=bg+vec3(0.0,.94,1.0)*(core+halo)+vec3(.0,.35,.55)*smoke;
        vec2 c=gl_FragCoord.xy/3.0;
        float d=mod(floor(c.x)+floor(c.y)*2.0,4.0)/4.0;
        float l=dot(color,vec3(.299,.587,.114));
        if(l<d*.22 && l<.75){ color*=.62; }
        color*=smoothstep(.92,.18,length(uv-.5));
        gl_FragColor=vec4(color,1.0);
      }
    `;

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, "u_resolution");
    const time = gl.getUniformLocation(program, "u_time");
    let frame;
    const start = performance.now();

    const render = () => {
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 h-full w-full opacity-90" aria-hidden="true" />;
}

const FramedSection = ({ children, className = "" }) => (
  <section className={`relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-12 ${className}`}>
    <div className="corner corner-tl" />
    <div className="corner corner-tr" />
    {children}
  </section>
);

const MetricDial = memo(function MetricDial() {
  const [active, setActive] = useState(true);
  const [value, setValue] = useState(98);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(active ? Math.floor(94 + Math.random() * 6) : 0);
    }, 1700);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <div className="glass-panel p-5">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400">
          <iconify-icon icon="solar:cpu-linear" class="text-lg text-cyan-400"></iconify-icon>
          Climate Diagnostics
        </span>
        <span className="font-mono text-xs text-cyan-300">LIVE</span>
      </div>

      <div className="dial mx-auto">
        <div className="dial-ring" />
        <div className="relative z-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">COMFORT INDEX</p>
          <p className="font-mono text-5xl font-light tracking-tight text-cyan-300">{String(value).padStart(2, "0")}</p>
          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setActive((current) => !current)}
        className="mt-5 flex w-full items-center justify-between rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-left transition hover:border-cyan-300/40"
        aria-pressed={active}
      >
        <span className="text-sm text-slate-300">Auxiliary power</span>
        <span className={`toggle ${active ? "toggle-on" : ""}`} aria-hidden="true">
          <span />
        </span>
      </button>
    </div>
  );
});

function Hero() {
  return (
    <FramedSection className="min-h-screen pt-8">
      <header className="relative z-10 mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <a href="#home" className="group inline-flex items-center gap-3" aria-label="A WAY home">
          <span className="grid size-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 shadow-cyan">
            <iconify-icon icon="solar:wind-linear" class="text-2xl text-cyan-300"></iconify-icon>
          </span>
          <span>
            <span className="block text-lg font-medium tracking-tight text-white">A WAY</span>
            <span className="block font-mono text-xs uppercase tracking-widest text-cyan-300">Airconditioning & Refrigeration</span>
          </span>
        </a>

        <nav className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400" aria-label="Primary navigation">
          {["Blog", "Services", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/40 hover:text-cyan-200">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <div id="home" className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400/60" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300 text-glow">Commercial and Industrial Water Heat Pumps</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted Aircon Installation Services & Repairs
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
            Expert Air Conditioning in Nelson Mandela Bay and Eastern Cape. We offer top residential installations and services,
            eco-friendly solutions, energy-efficient options, smart home systems, and leading commercial AC supply.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-medium text-slate-950 shadow-cyan transition hover:-translate-y-0.5 hover:bg-white">
              Book Installation Now
              <iconify-icon icon="solar:arrow-right-up-linear" class="text-lg"></iconify-icon>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
              Contact us
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["24/7", "Emergency support"],
              ["5 yr", "Warranty options"],
              ["Eco", "Efficient systems"],
            ].map(([stat, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                <p className="font-mono text-2xl tracking-tight text-cyan-300">{stat}</p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-white/10 bg-slate-950/50 p-3 shadow-2xl backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
              alt="HVAC technician working on an air conditioning system"
              className="h-80 w-full rounded-xl object-cover opacity-90"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">System status</p>
              <p className="mt-1 text-sm text-slate-200">Nelson Mandela Bay service crews ready for installations, repairs, refrigeration, heating, and ventilation.</p>
            </div>
          </div>
        </div>
      </div>
    </FramedSection>
  );
}

function Features() {
  const [selectedPackage, setSelectedPackage] = useState("Advanced Cooling Package");

  return (
    <FramedSection id="services">
      <div className="mb-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">Expert HVAC Solutions for Nelson Mandela Bay</p>
        <h2 className="mt-3 text-3xl font-light tracking-tight text-white sm:text-4xl">Air Conditioning Solutions calibrated for coastal homes and businesses.</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40">
            <img src={service.image} alt="" className="h-44 w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-95" />
            <div className="p-6">
              <iconify-icon icon={service.icon} class="text-3xl text-cyan-300"></iconify-icon>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{service.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <MetricDial />
        </div>

        <div className="glass-panel p-6 lg:col-span-8">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">Our Success Through Data Insights</p>
              <h3 className="mt-2 text-2xl font-light tracking-tight text-white">Efficient Cooling Solutions Available</h3>
            </div>
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 font-mono text-xs text-cyan-200">Slide 1 of 3</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {solutionCards.map((title, index) => (
              <div key={title} className="rounded-xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-cyan-300/40 hover:bg-cyan-300/5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                  <iconify-icon icon="solar:check-circle-linear" class="text-xl text-cyan-300"></iconify-icon>
                </div>
                <h4 className="text-lg font-medium tracking-tight text-white">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Discover optimal air conditioning systems tailored for homes and businesses, ensuring comfort year-round.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {packages.map((tier) => (
          <button
            key={tier.name}
            type="button"
            onClick={() => setSelectedPackage(tier.name)}
            className={`relative rounded-2xl border p-6 text-left transition hover:-translate-y-1 ${
              selectedPackage === tier.name ? "border-cyan-300/60 bg-cyan-300/10 shadow-cyan" : "border-white/10 bg-white/[0.03]"
            }`}
          >
            {tier.popular && <span className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 font-mono text-xs text-slate-950">Popular</span>}
            <h3 className="pr-20 text-xl font-medium tracking-tight text-white">{tier.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{tier.label}</p>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-300">
              More info <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
            </span>
            <ul className="mt-5 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                  <iconify-icon icon="solar:verified-check-linear" class="text-lg text-cyan-300"></iconify-icon>
                  {feature}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>
    </FramedSection>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const testimonial = testimonials[active];

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 12) next.message = "Tell us a little more about the installation or repair.";
    return next;
  };

  const submit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    setSent(false);
    if (Object.keys(next).length) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const fields = useMemo(
    () => [
      ["name", "Name", "text"],
      ["email", "Email", "email"],
    ],
    []
  );

  return (
    <FramedSection id="contact">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="glass-panel p-6 lg:col-span-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">Trusted across the Eastern Cape</p>
          <h2 className="mt-3 text-3xl font-light tracking-tight text-white">Customer proof for reliable air conditioning solutions.</h2>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <div className="mb-5 flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all ${active === index ? "w-10 bg-cyan-300" : "w-2 bg-slate-600 hover:bg-slate-400"}`}
                  aria-label={`Show testimonial from ${item.name}`}
                />
              ))}
            </div>
            <p className="text-lg leading-8 text-slate-200">“{testimonial.quote}”</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="grid size-12 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 font-mono text-cyan-200">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <p className="font-medium text-white">- {testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 lg:col-span-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">Contact Us for Expert Help</p>
          <h2 className="mt-3 text-3xl font-light tracking-tight text-white">Reach out to A WAY Airconditioning.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">Send your installation needs in Nelson Mandela Bay and we’ll help with sizing, repairs, maintenance, refrigeration, heating, and ventilation.</p>

          {sent && (
            <div role="status" className="mt-5 rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-4 text-sm text-cyan-100">
              Thanks — your request was queued. Our team will contact you shortly.
            </div>
          )}

          <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
            {fields.map(([name, label, type]) => (
              <label key={name} className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-400">{label}</span>
                <input
                  type={type}
                  value={form[name]}
                  onChange={(event) => setForm((current) => ({ ...current, [name]: event.target.value }))}
                  className={`field ${errors[name] ? "field-error" : ""}`}
                  aria-invalid={Boolean(errors[name])}
                />
                {errors[name] && <span className="mt-2 block text-xs text-rose-300">{errors[name]}</span>}
              </label>
            ))}

            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-400">Message</span>
              <textarea
                rows="5"
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                className={`field resize-none ${errors.message ? "field-error" : ""}`}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <span className="mt-2 block text-xs text-rose-300">{errors.message}</span>}
            </label>

            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-medium text-slate-950 shadow-cyan transition hover:-translate-y-0.5 hover:bg-white">
              Send
              <iconify-icon icon="solar:plain-2-linear" class="text-lg"></iconify-icon>
            </button>

            <p className="text-xs leading-5 text-slate-500">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          </form>
        </div>
      </div>
    </FramedSection>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-12">
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-medium tracking-tight text-white">A WAY Airconditioning and Refrigeration</p>
            <p className="mt-2 max-w-xl text-sm text-slate-400">Commercial and Industrial Water Heat Pumps, residential aircon installation, refrigeration, heating, and ventilation.</p>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-widest text-slate-400">
            {["Home", "Terms of service", "Privacy policy", "Team", "Phone"].map((item) => (
              <a key={item} href={item === "Home" ? "#home" : "#contact"} className="rounded-full border border-white/10 px-3 py-2 transition hover:border-cyan-300/40 hover:text-cyan-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030408] text-slate-300 selection:bg-cyan-400/30">
      <BackgroundCanvas />
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="grid-frame relative h-full w-full max-w-7xl" />
      </div>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}