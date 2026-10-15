import React from 'react';

const IntegrationCard = ({ name, icon }) => (
  <div className="group p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
    <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-white transition-colors duration-300">
      <iconify-icon icon={icon} style={{ strokeWidth: '1.5' }} className="text-xl"></iconify-icon>
    </div>
    <span className="text-sm font-medium text-zinc-200 mb-1">{name}</span>
    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
      <span className="text-xs font-mono text-zinc-400">Connect</span>
      <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: '1.5' }} className="text-xs text-zinc-400"></iconify-icon>
    </div>
  </div>
);

const Integrations = () => {
  const integrationsData = [
    { name: 'Webflow', icon: 'solar:gallery-minimalistic-linear' },
    { name: 'Stripe', icon: 'solar:card-linear' },
    { name: 'Hubspot', icon: 'solar:network-linear' },
    { name: 'Google', icon: 'solar:global-linear' },
    { name: 'Snowflake', icon: 'solar:snowflake-linear' },
    { name: 'Supabase', icon: 'solar:database-linear' },
    { name: 'Figma', icon: 'solar:pen-linear' },
    { name: 'GitHub', icon: 'solar:code-square-linear' },
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 border-b border-white/5">
      <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-4">Integrations are baked in.</h2>
        <p className="text-sm md:text-base text-zinc-400 font-light text-balance leading-relaxed">
          Connect to 370+ services, trigger workflows from any event. No migration, no lock-in.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {integrationsData.map((integration, index) => (
          <IntegrationCard key={index} name={integration.name} icon={integration.icon} />
        ))}
      </div>
    </section>
  );
};

export default Integrations;