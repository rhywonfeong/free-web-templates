export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              The Story of El Sur
            </h1>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Born from a passion for contrasting culinary traditions, El Sur was conceived as a space where the vibrant, bold flavors of Mexico could seamlessly intersect with the delicate, precise art of Japanese sushi.
              </p>
              <p>
                We noticed a gap in Heraklion's nightlife and dining scene—a need for a place that didn't just serve food, but offered an immersive "Multi-Cult" experience. A place where you could start the evening with a perfectly rolled Spicy Tuna, transition into slow-cooked Birria Tacos, and end with premium shisha and a Yuzu Margarita.
              </p>
              <p>
                Our chefs respect the purist traditions of both cuisines while occasionally bending the rules to create signature fusion dishes that surprise and delight. It's not about confusing the palate; it's about expanding it.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden fade-in">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&q=80" 
              alt="Chef preparing food" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              number: "01",
              title: "The Ingredients",
              desc: "We source our seafood daily from local Cretan fishermen while importing authentic spices and chiles directly from Mexico."
            },
            {
              number: "02",
              title: "The Atmosphere",
              desc: "Designed to transition perfectly from a relaxed dinner to a high-energy evening destination with curated music and mood lighting."
            },
            {
              number: "03",
              title: "The Bar",
              desc: "A laboratory of mixology focusing on premium agave spirits, Japanese whiskies, and house-made infusions."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[#121212] border border-white/5 rounded-2xl">
              <span className="text-amber-500 font-mono text-sm mb-4 block">{item.number}</span>
              <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}