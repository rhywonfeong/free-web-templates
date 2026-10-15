import React from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/ui/Breadcrumb';

export default function ImportacaoPlanilha() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col bg-[#F7F9FA] min-h-[calc(100vh-64px)] animate-in fade-in duration-500">
      <Breadcrumb items={[
        { label: 'Início', path: '/dashboard' },
        { label: 'Contadores', path: '/contadores' },
        { label: 'Importar via Planilha', path: '#' }
      ]} />

      <div className="w-full max-w-[880px] mx-auto mt-8 px-6">
        <div className="mb-8 flex items-center gap-4">
           <div className="w-12 h-12 bg-[#F1FBFD] rounded-xl flex items-center justify-center border border-[#B4DAE4]">
              <iconify-icon icon="solar:document-add-bold" style={{ color: '#10677F', fontSize: '24px' }}></iconify-icon>
           </div>
           <div>
             <h1 className="text-[32px] font-semibold text-[#1E1E1E] tracking-tight">Importação de Contadores</h1>
             <p className="text-[15px] text-[#494949] mt-1">
               Faça o download do modelo padrão, preencha a planilha e envie o arquivo preenchido (.xlsx).
             </p>
           </div>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-8 mb-6 shadow-sm">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#C6C7C7] rounded-xl py-16 hover:bg-[#FAFCFD] hover:border-[#10677F] transition-all cursor-pointer group">
             <div className="w-16 h-16 bg-[#F7F9FA] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#F1FBFD] transition-colors">
               <iconify-icon icon="solar:upload-minimalistic-linear" style={{ fontSize: '32px', color: '#10677F' }}></iconify-icon>
             </div>
             <h3 className="text-[16px] font-semibold text-[#1E1E1E]">Clique ou arraste a planilha aqui</h3>
             <p className="text-[14px] text-[#727272] mt-1">Suporta apenas arquivos .xlsx e .csv (Máx. 5MB)</p>
             <button className="mt-6 bg-white border border-[#10677F] text-[#10677F] px-6 py-2 rounded-lg text-[14px] font-medium shadow-sm group-hover:bg-[#10677F] group-hover:text-white transition-colors">
               Selecionar Arquivo
             </button>
          </div>

          <div className="mt-8 flex items-center justify-between p-4 bg-[#F7F9FA] rounded-lg border border-[#E5E7EB]">
             <div className="flex items-center gap-3">
               <iconify-icon icon="solar:file-download-linear" style={{ fontSize: '24px', color: '#494949' }}></iconify-icon>
               <div>
                 <span className="block text-[14px] font-medium text-[#1E1E1E]">Precisa da planilha modelo?</span>
                 <span className="block text-[13px] text-[#727272]">Planilha já estruturada com as colunas corretas.</span>
               </div>
             </div>
             <button className="text-[14px] font-medium text-[#10677F] hover:underline flex items-center gap-1">
               <iconify-icon icon="solar:download-square-linear"></iconify-icon>
               Baixar Modelo
             </button>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button 
            onClick={() => navigate('/dashboard')}
            className="px-6 h-11 rounded-lg text-[#494949] font-medium hover:bg-[#E5E7EB] transition-colors"
          >
            Voltar
          </button>
          <button 
            className="px-8 h-11 rounded-lg bg-[#B4DAE4] text-white font-medium cursor-not-allowed"
          >
            Iniciar Importação
          </button>
        </div>

      </div>
    </div>
  );
}