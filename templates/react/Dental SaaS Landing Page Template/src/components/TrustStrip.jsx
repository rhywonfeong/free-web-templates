export default function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-slate-400 text-sm font-medium">
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:shield-check-linear" className="text-xl"></iconify-icon>
            Segurança de nível bancário
          </div>
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:users-group-rounded-linear" className="text-xl"></iconify-icon>
            Feito para operações reais
          </div>
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:chart-square-linear" className="text-xl"></iconify-icon>
            Estrutura para crescimento
          </div>
          <div className="flex items-center gap-2 hidden lg:flex">
            <iconify-icon icon="solar:smartphone-update-linear" className="text-xl"></iconify-icon>
            Jornada do paciente 100% digital
          </div>
        </div>
      </div>
    </section>
  );
}