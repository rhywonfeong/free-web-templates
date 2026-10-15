import { clinicInfo } from '../../data/content';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-blue-800 mb-4">
              <iconify-icon icon="solar:infinity-bold" width="28" height="28"></iconify-icon>
              <span className="font-semibold tracking-tight text-xl">Clínica Harmonia</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm mb-6 leading-relaxed">
              Razão social: Clinica Medica Harmonia LTDA.<br/>
              Em atividade desde 2006, prestando atendimento ético, multidisciplinar e focado no paciente.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-slate-900 mb-4">Atendimento</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-2">
                <iconify-icon icon="solar:clock-circle-linear" width="18" className="mt-0.5 shrink-0"></iconify-icon>
                <span>{clinicInfo.hours}</span>
              </li>
              <li className="flex items-start gap-2">
                <iconify-icon icon="solar:phone-linear" width="18" className="mt-0.5 shrink-0"></iconify-icon>
                <span>{clinicInfo.phone}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-slate-900 mb-4">Localização</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-2">
                <iconify-icon icon="solar:map-point-linear" width="18" className="mt-0.5 shrink-0"></iconify-icon>
                <span>
                  {clinicInfo.address}<br/>
                  {clinicInfo.neighborhood}<br/>
                  <span className="text-xs text-blue-700 mt-1 block">{clinicInfo.near}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Clínica Harmonia. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:text-blue-700 transition-colors">
              <iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <iconify-icon icon="simple-icons:whatsapp" width="20"></iconify-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}