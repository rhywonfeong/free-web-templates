import { memo, useMemo, useState } from "react";

const flavors = ["Peanut Butter", "Almond Butter", "Cashew Butter"];

function useLocalCart() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("naked-cart")) || [];
    } catch {
      return [];
    }
  });

  const updateCart = (nextCart) => {
    setCart(nextCart);
    localStorage.setItem("naked-cart", JSON.stringify(nextCart));
  };

  const addItem = (item) => {
    const id = `${item.sku}-${Date.now()}`;
    updateCart([{ ...item, id }, ...cart]);
  };

  const clearCart = () => updateCart([]);

  return { cart, addItem, clearCart };
}

function ProductArt({ type = "packets" }) {
  if (type === "jars") {
    return (
      <div className="product-stage jar-stage" aria-label="Three jar bundle product display">
        {["PEANUT", "ALMOND", "CASHEW"].map((label, index) => (
          <div className={`jar jar-${index + 1}`} key={label}>
            <div className="jar-lid" />
            <div className="jar-label">
              <span>NAKED</span>
              <strong>{label}</strong>
              <small>ORGANIC BUTTER</small>
            </div>
          </div>
        ))}
        <div className="splash splash-green">Mix</div>
        <div className="splash splash-red">Match</div>
      </div>
    );
  }

  if (type === "six") {
    return (
      <div className="product-stage six-stage" aria-label="Six jar stock up product display">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className={`mini-jar mini-jar-${index + 1}`} key={index}>
            <div className="mini-lid" />
            <div className="mini-label">
              <span>NAKED</span>
              <strong>PB</strong>
            </div>
          </div>
        ))}
        <div className="save-burst">15% OFF</div>
      </div>
    );
  }

  return (
    <div className="product-stage packet-stage" aria-label="NAKED peanut butter packet product display">
      {Array.from({ length: 7 }).map((_, index) => (
        <div className={`packet packet-${index + 1}`} key={index}>
          <span>NAKED</span>
          <strong>PEANUT BUTTER</strong>
          <small>ONE INGREDIENT</small>
        </div>
      ))}
      <div className="packet-count">30 packets</div>
    </div>
  );
}

const Button = memo(function Button({ children, onClick, loading, tone = "dark", className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={`group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-semibold tracking-wide transition duration-300 focus:outline-none focus:ring-4 focus:ring-amber-900/20 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto ${
        tone === "red"
          ? "bg-[#D93622] text-cream hover:-translate-y-1 hover:bg-[#BC2C1C]"
          : "bg-[#2A1708] text-cream hover:-translate-y-1 hover:bg-[#42230B]"
      } ${className}`}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <span className="loader" />
          Packing it up...
        </>
      ) : (
        <>
          {children}
          <iconify-icon
            icon="solar:arrow-right-up-linear"
            class="text-xl transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </>
      )}
    </button>
  );
});

function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div
      className="fixed left-4 right-4 top-4 z-50 mx-auto flex max-w-md items-center gap-3 rounded-3xl bg-[#2A1708] p-4 text-cream shadow-2xl shadow-amber-950/20"
      role="status"
      aria-live="polite"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#67A348]">
        <iconify-icon icon="solar:check-circle-linear" class="text-2xl" />
      </span>
      <div>
        <p className="text-sm font-semibold">{toast.title}</p>
        <p className="text-xs text-cream/75">{toast.message}</p>
      </div>
    </div>
  );
}

function Hero({ onAdd, loading }) {
  return (
    <section className="relative overflow-hidden bg-[#F5A800] py-12 md:py-20">
      <div className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-[#D93622]/25 blur-3xl" />
      <div className="absolute bottom-8 right-0 h-64 w-64 rounded-full bg-[#67A348]/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[1fr_1.05fr] md:px-8">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cream/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#2A1708]">
            <iconify-icon icon="solar:star-fall-linear" class="text-lg text-[#D93622]" />
            Paid ad favorite · 30 grab-and-go packets
          </div>

          <h1 className="tracking-tight text-5xl font-semibold leading-[0.92] text-[#2A1708] sm:text-6xl lg:text-7xl">
            Start with a packet, not a jar.
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#4B2A10] md:text-xl">
            30 single-serve packets of NAKED Organic Peanut Butter. One ingredient. Free shipping.
            Easy to pack and snack anywhere.
          </p>

          <div className="mt-8">
            <Button onClick={() => onAdd("packets")} loading={loading === "packets"} tone="red">
              Yes, Just Peanuts. Send Them.
            </Button>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-[#4B2A10]">
              <span>Free shipping</span>
              <span aria-hidden="true">·</span>
              <span>Ships fast</span>
              <span aria-hidden="true">·</span>
              <span>Snack sooner</span>
            </p>
          </div>
        </div>

        <ProductArt type="packets" />
      </div>
    </section>
  );
}

function StatBar() {
  const stats = [
    { icon: "solar:dollar-linear", text: "$1.77 per packet" },
    { icon: "solar:dumbbell-large-linear", text: "7g protein" },
    { icon: "solar:leaf-linear", text: "One ingredient" },
    { icon: "solar:cup-hot-linear", text: "Less than your morning coffee" }
  ];

  return (
    <section className="bg-[#FFF0C8] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-3 rounded-[2rem] bg-[#F8D26B] p-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.text}
              className="flex items-center justify-center gap-3 rounded-[1.5rem] bg-cream/70 px-4 py-5 text-center text-base font-semibold text-[#2A1708] transition duration-300 hover:-translate-y-1 hover:bg-cream"
            >
              <iconify-icon icon={item.icon} class="text-2xl text-[#D93622]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploreRange({ onAdd, loading }) {
  const [selected, setSelected] = useState(["Peanut Butter", "Almond Butter", "Cashew Butter"]);

  const toggleFlavor = (flavor) => {
    setSelected((current) => {
      if (current.includes(flavor)) {
        return current.length === 1 ? current : current.filter((item) => item !== flavor);
      }
      return [...current, flavor];
    });
  };

  return (
    <section className="overflow-hidden bg-[#FFE8B0] py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
        <ProductArt type="jars" />

        <div>
          <p className="mb-4 inline-flex rounded-full bg-[#67A348] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream">
            Free shipping unlocked over $50
          </p>
          <h2 className="tracking-tight text-4xl font-semibold leading-none text-[#2A1708] md:text-6xl">
            Can't pick just one? Try the whole lineup.
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-[#5B3514]">
            Mix and match 3 jars — peanut butter, almond butter, and cashew butter. Unlock free
            shipping automatically.
          </p>

          <div className="mt-6 rounded-[2rem] bg-[#F5A800]/35 p-4">
            <p className="mb-3 text-sm font-semibold text-[#2A1708]">Choose your butter flight:</p>
            <div className="flex flex-wrap gap-2">
              {flavors.map((flavor) => (
                <button
                  key={flavor}
                  type="button"
                  onClick={() => toggleFlavor(flavor)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-4 focus:ring-amber-900/15 ${
                    selected.includes(flavor)
                      ? "bg-[#2A1708] text-cream"
                      : "bg-cream/70 text-[#2A1708] hover:bg-cream"
                  }`}
                  aria-pressed={selected.includes(flavor)}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-[2rem] bg-cream/70 p-5 text-[#2A1708] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#D93622]">
                3-jar bundle
              </p>
              <p className="tracking-tight text-3xl font-semibold">$53.94</p>
            </div>
            <p className="rounded-full bg-[#67A348] px-4 py-2 text-sm font-semibold text-cream">
              Free shipping included
            </p>
          </div>

          <div className="mt-7">
            <Button onClick={() => onAdd("flight", selected)} loading={loading === "flight"}>
              Build My Butter Flight
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StockUp({ onAdd, loading }) {
  const [flavor, setFlavor] = useState("Peanut Butter");
  const [subscribe, setSubscribe] = useState(true);

  const price = subscribe ? "$81.55" : "$95.94";

  return (
    <section className="overflow-hidden bg-[#F5A800] py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-[#2A1708] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream">
            Returning customer stock-up
          </p>
          <h2 className="tracking-tight text-4xl font-semibold leading-none text-[#2A1708] md:text-6xl">
            Already obsessed? Stock up and save.
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-[#4B2A10]">
            Get 6 jars of your favorite, free shipping included, and 15% off when you subscribe.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-[#D93622] p-5 text-cream">
              <iconify-icon icon="solar:delivery-linear" class="text-3xl" />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide">Included</p>
              <p className="tracking-tight text-3xl font-semibold">FREE SHIPPING</p>
            </div>
            <div className="rounded-[2rem] bg-[#67A348] p-5 text-cream">
              <iconify-icon icon="solar:tag-price-linear" class="text-3xl" />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide">Subscribe</p>
              <p className="tracking-tight text-3xl font-semibold">15% OFF</p>
            </div>
          </div>

          <div className="mt-6 rounded-[2rem] bg-cream/70 p-4">
            <label className="text-sm font-semibold text-[#2A1708]" htmlFor="flavor">
              Favorite flavor
            </label>
            <select
              id="flavor"
              value={flavor}
              onChange={(event) => setFlavor(event.target.value)}
              className="mt-2 w-full rounded-2xl border-0 bg-[#FFE8B0] px-4 py-4 text-sm font-semibold text-[#2A1708] outline-none ring-2 ring-transparent transition focus:ring-[#2A1708]/20"
            >
              {flavors.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setSubscribe((value) => !value)}
              className="mt-4 flex w-full items-center justify-between rounded-2xl bg-[#2A1708] p-3 text-left text-cream transition duration-300 hover:bg-[#42230B]"
              aria-pressed={subscribe}
            >
              <span>
                <span className="block text-sm font-semibold">Subscribe & save</span>
                <span className="text-xs text-cream/70">Skip or cancel whenever you want.</span>
              </span>
              <span
                className={`relative h-8 w-14 rounded-full transition ${
                  subscribe ? "bg-[#67A348]" : "bg-cream/25"
                }`}
              >
                <span
                  className={`absolute top-1 h-6 w-6 rounded-full bg-cream transition ${
                    subscribe ? "left-7" : "left-1"
                  }`}
                />
              </span>
            </button>
          </div>

          <div className="mt-6 flex items-end justify-between rounded-[2rem] bg-[#2A1708] p-5 text-cream">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-cream/65">
                6-jar case
              </p>
              <p className="tracking-tight text-4xl font-semibold">{price}</p>
            </div>
            {subscribe && <p className="text-sm font-semibold text-[#F8D26B]">You save $14.39</p>}
          </div>

          <div className="mt-7">
            <Button
              onClick={() => onAdd("stock", { flavor, subscribe, price })}
              loading={loading === "stock"}
              tone="red"
            >
              Send Me 6 Jars
            </Button>
          </div>
        </div>

        <ProductArt type="six" />
      </div>
    </section>
  );
}

function TrustSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const submitEmail = (event) => {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      setStatus({ type: "error", message: "Enter a real email so we can send snack notes." });
      return;
    }

    setStatus({ type: "success", message: "You're on the list. Peanut butter intel incoming." });
    setEmail("");
  };

  const badges = [
    { icon: "solar:leaf-linear", title: "USDA Organic", text: "Made with organic peanuts." },
    { icon: "solar:minimalistic-magnifer-linear", title: "One Ingredient", text: "No additives. No fillers." },
    { icon: "solar:box-linear", title: "Free Shipping on All Orders", text: "Every order ships free." }
  ];

  return (
    <section className="bg-[#FFF0C8] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-[2.5rem] bg-[#FFE0A0] p-5 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-[#F5A800] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#2A1708]">
                NAKED Organic
              </p>
              <h2 className="tracking-tight text-4xl font-semibold leading-none text-[#2A1708] md:text-6xl">
                Peanut butter that doesn't hide anything.
              </h2>
              <p className="mt-5 text-lg font-medium leading-8 text-[#5B3514]">
                NAKED Organic keeps it simple: USDA organic peanuts, ground into rich, snackable
                butter with no additives, no extra oils, and no mystery ingredients.
              </p>

              <form onSubmit={submitEmail} className="mt-7 rounded-[2rem] bg-cream/75 p-3">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (status.type === "error") setStatus({ type: "idle", message: "" });
                    }}
                    placeholder="Get snack drops by email"
                    className="min-h-14 flex-1 rounded-full border-0 bg-[#FFF0C8] px-5 text-sm font-medium text-[#2A1708] outline-none ring-2 ring-transparent transition placeholder:text-[#7B5223]/70 focus:ring-[#2A1708]/20"
                    aria-invalid={status.type === "error"}
                    aria-describedby="email-status"
                  />
                  <button
                    type="submit"
                    className="min-h-14 rounded-full bg-[#2A1708] px-6 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-1 hover:bg-[#42230B] focus:outline-none focus:ring-4 focus:ring-amber-900/20"
                  >
                    Join the snack list
                  </button>
                </div>
                {status.message && (
                  <p
                    id="email-status"
                    className={`mt-3 px-3 text-sm font-semibold ${
                      status.type === "error" ? "text-[#D93622]" : "text-[#3B7F2D]"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>

            <div className="grid gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex gap-4 rounded-[2rem] bg-cream/75 p-5 text-[#2A1708] transition duration-300 hover:-translate-y-1 hover:bg-cream"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F5A800]">
                    <iconify-icon icon={badge.icon} class="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{badge.title}</h3>
                    <p className="mt-1 text-sm font-medium leading-6 text-[#5B3514]">
                      {badge.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-8 flex flex-col gap-3 rounded-[2rem] bg-[#2A1708] p-5 text-cream md:flex-row md:items-center md:justify-between">
          <p className="tracking-tight text-2xl font-semibold">NAKED Organic Peanut Butter</p>
          <p className="text-sm font-medium text-cream/70">
            One ingredient. Big peanut energy. Free shipping.
          </p>
        </footer>
      </div>
    </section>
  );
}

function CartPill({ cart, onClear }) {
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  if (!cart.length) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-2xl rounded-[2rem] bg-[#2A1708] p-3 text-cream shadow-2xl shadow-amber-950/30">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#F5A800] text-[#2A1708]">
            <iconify-icon icon="solar:cart-large-2-linear" class="text-2xl" />
          </span>
          <div>
            <p className="text-sm font-semibold">
              {cart.length} item{cart.length > 1 ? "s" : ""} ready · ${total.toFixed(2)}
            </p>
            <p className="text-xs text-cream/65">Free shipping applied automatically.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onClear}
            className="rounded-full bg-cream/10 px-4 py-3 text-xs font-semibold transition hover:bg-cream/20"
          >
            Clear
          </button>
          <button
            type="button"
            className="rounded-full bg-[#D93622] px-5 py-3 text-xs font-semibold transition hover:bg-[#BC2C1C]"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { cart, addItem, clearCart } = useLocalCart();
  const [loading, setLoading] = useState(null);
  const [toast, setToast] = useState(null);

  const handleAdd = (type, meta = {}) => {
    setLoading(type);

    window.setTimeout(() => {
      const itemMap = {
        packets: {
          sku: "30-pack-packets",
          title: "30 Single-Serve Packets",
          price: 53.1,
          description: "One ingredient packets"
        },
        flight: {
          sku: "3-jar-flight",
          title: "3-Jar Butter Flight",
          price: 53.94,
          description: Array.isArray(meta) ? meta.join(", ") : "Mix and match"
        },
        stock: {
          sku: "6-jar-stock-up",
          title: "6-Jar Stock Up",
          price: meta.subscribe ? 81.55 : 95.94,
          description: `${meta.flavor}${meta.subscribe ? " · subscribed" : ""}`
        }
      };

      addItem(itemMap[type]);
      setToast({
        title: `${itemMap[type].title} added`,
        message: "Free shipping is locked in. Snack mode activated."
      });
      setLoading(null);

      window.setTimeout(() => setToast(null), 3000);
    }, 650);
  };

  return (
    <main className="min-h-screen bg-[#FFF0C8] text-[#2A1708]">
      <Hero onAdd={handleAdd} loading={loading} />
      <StatBar />
      <ExploreRange onAdd={handleAdd} loading={loading} />
      <StockUp onAdd={handleAdd} loading={loading} />
      <TrustSection />
      <Toast toast={toast} />
      <CartPill cart={cart} onClear={clearCart} />
    </main>
  );
}