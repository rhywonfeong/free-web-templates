import MaskedText from './MaskedText'

export default function FeaturesSection() {
  const features = [
    {
      icon: "solar:cpu-bolt-linear",
      title: "Real-time Processing",
      description: "Analyze thousands of data streams concurrently with millisecond latency, powered by our distributed neural engine."
    },
    {
      icon: "solar:shield-network-linear",
      title: "Enterprise Security",
      description: "Bank-grade encryption, role-based access control, and continuous threat monitoring built into the core architecture."
    },
    {
      icon: "solar:branching-paths-up-linear",
      title: "Dynamic Routing",
      description: "Automatically route complex tasks to the most efficient cognitive models, minimizing costs while maximizing throughput."
    },
    {
      icon: "solar:database-linear",
      title: "Vector Assimilation",
      description: "Instantly convert unstructured enterprise data into searchable, semantic vector spaces for instant retrieval."
    },
    {
      icon: "solar:code-square-linear",
      title: "API-First Design",
      description: "Integrate seamlessly with your existing stack using our comprehensive REST and GraphQL endpoints."
    },
    {
      icon: "solar:chart-square-linear",
      title: "Predictive Scaling",
      description: "Our infrastructure anticipates load spikes and auto-scales compute resources before bottlenecks occur."
    }
  ]

  return (
    <section className="bg-[#131315]/80 flex flex-col relative z-20 backdrop-blur-sm">
      
      {/* Header Area */}
      <div className="flex flex-col border-y text-center bg-[#000000] w-full border-[#27272a] pt-28 pb-20 items-center">
        <div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb] text-xs font-medium tracking-wide font-geist mb-6">
          <iconify-icon icon="solar:stars-linear"></iconify-icon>
          Platform Capabilities
        </div>
        <MaskedText 
          as="h2"
          text="Intelligence at every layer"
          className="text-3xl md:text-5xl font-light tracking-tighter text-white font-geist max-w-2xl mb-6 justify-center"
        />
        <p className="reveal-element text-zinc-400 text-lg font-extralight max-w-xl font-geist leading-relaxed">
          Everything you need to build, deploy, and scale cognitive workflows without worrying about underlying infrastructure.
        </p>
      </div>

      {/* Grid Content */}
      <div className="flex flex-col xl:px-20 bg-[#000000] w-full mt-[-1px] pb-20">
        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#27272a] border border-[#27272a] w-full">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="stagger-item bg-[#18181b] hover:bg-[#1e1e22] transition-colors duration-300 p-10 xl:p-14 group flex flex-col cursor-pointer"
            >
              <div className="flex justify-between items-start mb-14">
                <div className="w-14 h-14 border border-[#27272a] flex items-center justify-center group-hover:border-[#2563eb]/50 transition-colors bg-[#131315]">
                  <iconify-icon icon={feature.icon} class="text-2xl text-zinc-500 group-hover:text-[#2563eb] transition-colors"></iconify-icon>
                </div>
                <span className="text-5xl font-extralight text-[#27272a] group-hover:text-zinc-600 transition-colors font-geist tracking-tighter">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-medium tracking-tight text-zinc-100 font-geist mb-4 group-hover:text-[#2563eb] transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm font-extralight leading-relaxed font-geist">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}