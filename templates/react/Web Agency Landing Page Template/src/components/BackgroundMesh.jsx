export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dark base with subtle noise texture */}
      <div className="absolute inset-0 bg-[#030308]" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-900/40 blur-[120px] animate-float-slow mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/30 blur-[120px] animate-float-slow mix-blend-screen" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-900/20 blur-[150px] animate-float-slow mix-blend-screen" style={{ animationDelay: '4s' }} />
    </div>
  );
}