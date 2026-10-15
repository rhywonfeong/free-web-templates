export default function Background() {
  return (
    <div
      className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center"
      id="aura-image"
      style={{
        backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fc312c-6e6d-48a3-bae2-a2fae18be4be_3840w.png")',
        maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'
      }}
      data-alpha-mask="80"
    />
  );
}