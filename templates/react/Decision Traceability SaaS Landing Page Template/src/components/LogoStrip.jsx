export default function LogoStrip() {
  return (
    <section className="border-y border-border/60 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left">
          POWERING STRATEGY AT
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <span className="font-sans text-lg font-bold text-obsidian tracking-tight flex items-center gap-2">
            <iconify-icon icon="simple-icons:vercel" width="20"></iconify-icon>
            VERCEL
          </span>
          <span className="font-sans text-lg font-bold text-obsidian tracking-tight flex items-center gap-2">
            <iconify-icon icon="simple-icons:stripe" width="32"></iconify-icon>
            stripe
          </span>
          <span className="font-sans text-lg font-bold text-obsidian tracking-tight flex items-center gap-2">
            <iconify-icon icon="simple-icons:linear" width="20"></iconify-icon>
            Linear
          </span>
          <span className="font-sans text-lg font-bold text-obsidian tracking-tight flex items-center gap-2">
            <iconify-icon icon="simple-icons:openai" width="20"></iconify-icon>
            OpenAI
          </span>
          <span className="font-sans text-lg font-bold text-obsidian tracking-tight flex items-center gap-2">
            <iconify-icon icon="simple-icons:raycast" width="20"></iconify-icon>
            Raycast
          </span>
        </div>
      </div>
    </section>
  );
}