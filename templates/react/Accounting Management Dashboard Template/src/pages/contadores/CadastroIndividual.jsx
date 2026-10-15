import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { useOnboarding } from '../../context/OnboardingContext';
import Breadcrumb from '../../components/ui/Breadcrumb';

export default function CadastroIndividual() {
  const navigate = useNavigate();
  const { state } = useOnboarding();
  const isEspecialista = state.modelo === 'ESPECIALISTA';
  
  // Basic Form State
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    cargo: '',
    nivel: '',
    area: '',
    crc: '',
    requerSupervisao: false
  });

  const [errors, setErrors] = useState({});
  const [cepLoading, setCepLoading] = useState(false);
  const [autoFilled, setAutoFilled] = useState(false);

  // Simple mask handlers
  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setFormData({ ...formData, cpf: value });
    
    if (value.length === 14) {
      setErrors(prev => ({ ...prev, cpf: false })); // mock validation success
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    setFormData({ ...formData, telefone: value });
  };

  const handleCepChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    setFormData({ ...formData, cep: value });

    // Mock API search when CEP reaches 9 chars
    if (value.length === 9) {
      setCepLoading(true);
      setTimeout(() => {
        setFormData(prev => ({ ...prev, endereco: 'Av. Paulista, 1000, Bela Vista - São Paulo/SP' }));
        setAutoFilled(true);
        setCepLoading(false);
      }, 800);
    } else {
      setAutoFilled(false);
    }
  };

  const handleSave = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = true;
    if (formData.cpf.length < 14) newErrors.cpf = true;
    if (!formData.email || !formData.email.includes('@')) newErrors.email = true;
    if (!formData.cargo) newErrors.cargo = true;
    if (isEspecialista && !formData.area) newErrors.area = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success logic here
    navigate('/contadores');
  };

  return (
    <div className="w-full flex flex-col bg-[#F7F9FA] min-h-[calc(100vh-64px)] animate-in fade-in duration-500 pb-24">
      <Breadcrumb items={[
        { label: 'Início', path: '/dashboard' },
        { label: 'Contadores', path: '/contadores' },
        { label: 'Cadastrar Contador', path: '#' }
      ]} />

      <div className="w-full max-w-[880px] mx-auto mt-8 px-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-semibold text-[#1E1E1E] tracking-tight">Novo Cadastro de Contador</h1>
          <p className="text-[15px] text-[#494949] mt-1.5">
            Preencha os dados abaixo. Após salvar, as credenciais de acesso serão enviadas por e-mail ao contador.
          </p>
        </div>

        {/* SECTION 1 - INFORMAÇÕES PESSOAIS */}
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-4 mb-6">
            <iconify-icon icon="solar:user-linear" style={{ color: '#10677F', fontSize: '20px' }}></iconify-icon>
            <h2 className="text-[16px] font-semibold text-[#1E1E1E]">Informações Pessoais</h2>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Nome Completo */}
            <div className="col-span-2">
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5">
                Nome Completo <span className="text-[#C92B2B]">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Ex: Ana Paula Ferreira"
                className={clsx(
                  "w-full h-[44px] px-4 rounded-lg border text-[14px] outline-none transition-all",
                  errors.nome 
                    ? "border-[#C92B2B] focus:shadow-[0_0_0_3px_rgba(201,43,43,0.12)]" 
                    : "border-[#C6C7C7] focus:border-[#116E88] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)]"
                )}
                value={formData.nome}
                onChange={e => { setFormData({...formData, nome: e.target.value}); setErrors({...errors, nome: false}); }}
              />
              {errors.nome && <span className="text-[12px] text-[#C92B2B] mt-1 block">Campo obrigatório</span>}
            </div>

            {/* CPF */}
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5">
                CPF <span className="text-[#C92B2B]">*</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="000.000.000-00"
                  className={clsx(
                    "w-full h-[44px] pl-4 pr-10 rounded-lg border text-[14px] outline-none transition-all",
                    errors.cpf 
                      ? "border-[#C92B2B] focus:shadow-[0_0_0_3px_rgba(201,43,43,0.12)]" 
                      : "border-[#C6C7C7] focus:border-[#116E88] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)]"
                  )}
                  value={formData.cpf}
                  onChange={handleCpfChange}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                  {formData.cpf.length === 14 && !errors.cpf && (
                     <iconify-icon icon="solar:check-circle-bold" style={{ color: '#2D8654', fontSize: '18px' }}></iconify-icon>
                  )}
                </div>
              </div>
              {errors.cpf && <span className="text-[12px] text-[#C92B2B] mt-1 block">CPF inválido</span>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5">
                E-mail <span className="text-[#C92B2B]">*</span>
              </label>
              <input 
                type="email" 
                placeholder="ana.paula@escritorio.com.br"
                className={clsx(
                  "w-full h-[44px] px-4 rounded-lg border text-[14px] outline-none transition-all",
                  errors.email 
                    ? "border-[#C92B2B] focus:shadow-[0_0_0_3px_rgba(201,43,43,0.12)]" 
                    : "border-[#C6C7C7] focus:border-[#116E88] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)]"
                )}
                value={formData.email}
                onChange={e => { setFormData({...formData, email: e.target.value}); setErrors({...errors, email: false}); }}
              />
              <p className="text-[12px] text-[#727272] mt-1.5 flex items-center gap-1">
                <iconify-icon icon="solar:letter-linear" style={{ fontSize: '14px' }}></iconify-icon>
                As credenciais de acesso serão enviadas para este endereço
              </p>
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5 flex items-center gap-2">
                Telefone <span className="bg-[#F5F5F5] text-[#727272] text-[10px] px-2 py-0.5 rounded-full font-normal">Opcional</span>
              </label>
              <input 
                type="text" 
                placeholder="(00) 00000-0000"
                className="w-full h-[44px] px-4 rounded-lg border border-[#C6C7C7] focus:border-[#116E88] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)] text-[14px] outline-none transition-all"
                value={formData.telefone}
                onChange={handlePhoneChange}
              />
            </div>

            {/* CEP */}
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5 flex items-center gap-2">
                CEP <span className="bg-[#F5F5F5] text-[#727272] text-[10px] px-2 py-0.5 rounded-full font-normal">Opcional</span>
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="00000-000"
                  className="w-full h-[44px] px-4 rounded-lg border border-[#C6C7C7] focus:border-[#116E88] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)] text-[14px] outline-none transition-all pr-10"
                  value={formData.cep}
                  onChange={handleCepChange}
                />
                {cepLoading && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-[#10677F] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              <p className="text-[12px] text-[#727272] mt-1.5">Digite o CEP para preenchimento automático</p>
            </div>

            {/* Endereco */}
            <div className="col-span-2">
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5">Endereço</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Rua, número, complemento — preenchido automaticamente via CEP"
                  className={clsx(
                    "w-full h-[44px] px-4 pr-10 rounded-lg border text-[14px] outline-none transition-all",
                    autoFilled 
                      ? "bg-[#F7FCFE] border-[#37A5C3]" 
                      : "border-[#C6C7C7] focus:border-[#116E88] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)]"
                  )}
                  value={formData.endereco}
                  onChange={e => setFormData({...formData, endereco: e.target.value})}
                />
                {autoFilled && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 group cursor-help">
                    <iconify-icon icon="solar:magic-stick-3-linear" style={{ color: '#37A5C3', fontSize: '18px' }}></iconify-icon>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 - INFORMAÇÕES PROFISSIONAIS */}
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-4 mb-6">
            <iconify-icon icon="solar:case-linear" style={{ color: '#10677F', fontSize: '20px' }}></iconify-icon>
            <h2 className="text-[16px] font-semibold text-[#1E1E1E]">Informações Profissionais</h2>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Cargo */}
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5">
                Cargo <span className="text-[#C92B2B]">*</span>
              </label>
              <select 
                className={clsx(
                  "w-full h-[44px] px-4 rounded-lg border text-[14px] outline-none transition-all appearance-none bg-white",
                  errors.cargo 
                    ? "border-[#C92B2B] focus:shadow-[0_0_0_3px_rgba(201,43,43,0.12)]" 
                    : "border-[#C6C7C7] focus:border-[#116E88] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)]"
                )}
                value={formData.cargo}
                onChange={e => { setFormData({...formData, cargo: e.target.value}); setErrors({...errors, cargo: false}); }}
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239B9B9B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
              >
                <option value="" disabled>Selecione um cargo...</option>
                <option value="Assistente">Assistente</option>
                <option value="Analista">Analista</option>
                <option value="Coordenador">Coordenador</option>
                <option value="Gerente">Gerente</option>
              </select>
            </div>

            {/* Nível */}
            <div>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5 flex items-center gap-2">
                Nível <span className="bg-[#F5F5F5] text-[#727272] text-[10px] px-2 py-0.5 rounded-full font-normal">Opcional</span>
              </label>
              <select 
                className="w-full h-[44px] px-4 rounded-lg border border-[#C6C7C7] focus:border-[#116E88] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)] text-[14px] outline-none transition-all appearance-none bg-white"
                value={formData.nivel}
                onChange={e => setFormData({...formData, nivel: e.target.value})}
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239B9B9B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
              >
                <option value="">Não definido</option>
                <option value="Júnior">Júnior</option>
                <option value="Pleno">Pleno</option>
                <option value="Sênior">Sênior</option>
              </select>
            </div>

            {/* Área de Atuação (Conditional) */}
            {isEspecialista && (
              <div>
                <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5">
                  Área de Atuação <span className="text-[#C92B2B]">*</span>
                </label>
                <select 
                  className={clsx(
                    "w-full h-[44px] px-4 rounded-lg border text-[14px] outline-none transition-all appearance-none bg-[#F7FCFE] text-[#116E88] font-medium",
                    errors.area 
                      ? "border-[#C92B2B] focus:shadow-[0_0_0_3px_rgba(201,43,43,0.12)]" 
                      : "border-[#37A5C3] focus:border-[#10677F] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)]"
                  )}
                  value={formData.area}
                  onChange={e => { setFormData({...formData, area: e.target.value}); setErrors({...errors, area: false}); }}
                  style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2310677F%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
                >
                  <option value="" disabled>Selecione a área (Obrigatório)</option>
                  {state.areas && state.areas.map(a => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
                <p className="text-[12px] text-[#727272] mt-1.5 flex items-center gap-1">
                  <iconify-icon icon="solar:info-circle-linear" style={{ color: '#10677F' }}></iconify-icon>
                  Obrigatório no modelo Especialista
                </p>
              </div>
            )}

            {/* CRC */}
            <div className={!isEspecialista ? "col-span-2" : ""}>
              <label className="block text-[14px] font-medium text-[#1E1E1E] mb-1.5 flex items-center gap-2">
                CRC <span className="bg-[#F5F5F5] text-[#727272] text-[10px] px-2 py-0.5 rounded-full font-normal">Opcional</span>
              </label>
              <input 
                type="text" 
                placeholder="Ex: 1SP000000/O-0"
                className="w-full h-[44px] px-4 rounded-lg border border-[#C6C7C7] focus:border-[#116E88] focus:shadow-[0_0_0_3px_rgba(16,103,127,0.12)] text-[14px] outline-none transition-all"
                value={formData.crc}
                onChange={e => setFormData({...formData, crc: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* SECTION 3 - PERMISSÕES */}
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-4 mb-6">
            <iconify-icon icon="solar:shield-keyhole-linear" style={{ color: '#10677F', fontSize: '20px' }}></iconify-icon>
            <h2 className="text-[16px] font-semibold text-[#1E1E1E]">Permissões & Workflow</h2>
          </div>

          <label className="flex items-start gap-4 p-4 rounded-lg border border-[#E5E7EB] cursor-pointer hover:bg-[#F7F9FA] transition-colors">
            <div className="pt-0.5">
               <div className={clsx(
                  "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                  formData.requerSupervisao ? "bg-[#10677F] border-[#10677F]" : "border-[#C6C7C7] bg-white"
                )}>
                  {formData.requerSupervisao && <iconify-icon icon="solar:check-read-linear" style={{ color: 'white', fontSize: '14px' }}></iconify-icon>}
                </div>
            </div>
            <div>
              <span className="text-[14px] font-medium text-[#1E1E1E] block">Requer supervisão (Aprovação para envio)</span>
              <p className="text-[13px] text-[#727272] mt-1">
                Todas as entregas de demandas feitas por este contador precisarão da aprovação de um Gestor antes de chegarem ao cliente.
              </p>
            </div>
            {/* hidden checkbox for a11y */}
            <input 
              type="checkbox" 
              className="sr-only" 
              checked={formData.requerSupervisao} 
              onChange={() => setFormData({...formData, requerSupervisao: !formData.requerSupervisao})}
            />
          </label>
        </div>

      </div>

      {/* FIXED ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FFFFFF] border-t border-[#E5E7EB] px-20 py-4 flex justify-between items-center z-50 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
        <button 
          onClick={() => navigate('/dashboard')}
          className="px-6 h-11 rounded-lg text-[#494949] font-medium hover:bg-[#F7F9FA] transition-colors"
        >
          Cancelar
        </button>

        <div className="flex gap-3">
          <button 
            className="px-6 h-11 rounded-lg border border-[#C6C7C7] text-[#494949] font-medium hover:border-[#10677F] hover:text-[#10677F] transition-colors"
          >
            Salvar e Adicionar Outro
          </button>
          
          <button 
            onClick={handleSave}
            className="px-8 h-11 rounded-lg bg-[#10677F] hover:bg-[#044A5D] text-white font-medium shadow-sm transition-all flex items-center gap-2 hover:scale-[1.02]"
          >
            <iconify-icon icon="solar:diskette-bold" style={{ fontSize: '18px' }}></iconify-icon>
            Salvar Contador
          </button>
        </div>
      </div>

    </div>
  );
}