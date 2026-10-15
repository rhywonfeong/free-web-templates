import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    status: 'idle', // idle, submitting, success, error
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({ 
        status: 'success', 
        message: 'DISPATCH TRANSMISSION RECEIVED. COORD WILL CONTACT IMMEDIATELY.' 
      });
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="pb-32 relative w-full bg-[#050505] bg-schematic min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 pt-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5">
            <div className="mb-16">
              <div className="font-mono text-[#FF3C00] text-sm tracking-widest mb-4">[ COMM_LINK_OPEN ]</div>
              <h1 className="font-heading text-6xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase">EMERGENCY <br/><span className="text-gray-500">DISPATCH</span></h1>
              <p className="text-gray-400 font-light text-lg border-l-2 border-[#333] pl-6">
                For immediate catastrophic response or highway blockages, bypass the form and connect directly to the 24/7 command center.
              </p>
            </div>

            <div className="space-y-6">
              <div className="industrial-panel p-8 clip-corner flex items-center gap-6 group hover:border-[#FF3C00] transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-[#FF3C00] flex items-center justify-center shrink-0">
                  <iconify-icon icon="solar:phone-bold" class="text-4xl text-[#050505]"></iconify-icon>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">PRIORITY VOICE COMM</div>
                  <a href="tel:9547589694" className="font-heading text-4xl font-bold text-white tracking-wide group-hover:text-[#FF3C00] transition-colors block">(954) 758-9694</a>
                </div>
              </div>
              
              <div className="industrial-panel p-8 clip-corner flex items-center gap-6 bg-[#0A0A0A] group hover:border-gray-500 transition-colors">
                <div className="w-16 h-16 bg-[#1A1A1A] border border-[#333] flex items-center justify-center shrink-0 group-hover:border-gray-500 transition-colors">
                  <iconify-icon icon="solar:letter-bold" class="text-4xl text-gray-400 group-hover:text-white transition-colors"></iconify-icon>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">DATA TRANSMISSION</div>
                  <div className="font-heading text-2xl font-bold text-gray-300 tracking-wide">dispatch@titanrecoveryllc.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side - Terminal Aesthetic */}
          <div className="lg:col-span-7">
            <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-8 md:p-12 relative shadow-2xl">
              {/* Decorative terminal header */}
              <div className="absolute top-0 left-0 w-full h-8 bg-[#121212] border-b border-[#2A2A2A] flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-[#FF3C00]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#333]"></div>
                 <span className="ml-4 font-mono text-[10px] text-gray-500">TITAN_SECURE_LINK_v4.2</span>
              </div>

              <div className="pt-8">
                <h3 className="font-heading text-3xl font-bold text-white mb-8 uppercase tracking-wider">INITIATE SERVICE REQUEST</h3>
                
                {formState.status === 'success' ? (
                  <div className="p-8 bg-[#CCFF00]/5 border border-[#CCFF00] flex flex-col items-center text-center">
                    <iconify-icon icon="solar:check-circle-bold" class="text-6xl text-[#CCFF00] mb-6 drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]"></iconify-icon>
                    <div className="font-mono text-[#CCFF00] font-bold text-sm tracking-widest leading-loose">{formState.message}</div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 relative group">
                        <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">FLEET / CARRIER ID</label>
                        <input required type="text" className="w-full bg-[#121212] border-b-2 border-[#333] px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-[#FF3C00] transition-colors placeholder:text-[#333]" placeholder="e.g. ACME LOGISTICS" />
                      </div>
                      <div className="space-y-2 relative group">
                        <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">CONTACT NUMBER</label>
                        <input required type="tel" className="w-full bg-[#121212] border-b-2 border-[#333] px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-[#FF3C00] transition-colors placeholder:text-[#333]" placeholder="[ 555-000-0000 ]" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">INCIDENT CLASSIFICATION</label>
                      <select className="w-full bg-[#121212] border-b-2 border-[#333] px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-[#FF3C00] transition-colors appearance-none cursor-pointer">
                        <option value="towing">CLASS 8 TOWING</option>
                        <option value="recovery">OVERTURN / WRECKER RECOVERY</option>
                        <option value="repair">COLLISION REPAIR</option>
                        <option value="storage">SECURE STORAGE</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">LOCATION & CHASSIS DETAILS</label>
                      <textarea required rows={4} className="w-full bg-[#121212] border-b-2 border-[#333] px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-[#FF3C00] transition-colors placeholder:text-[#333] resize-none" placeholder="ENTER HWY MILE MARKER AND RIG SPEC (e.g. Freightliner Cascadia 2022)..."></textarea>
                    </div>

                    <button 
                      disabled={formState.status === 'submitting'}
                      type="submit" 
                      className="w-full bg-[#FF3C00] hover:bg-white text-[#050505] font-heading text-2xl uppercase tracking-widest py-5 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-8 clip-corner relative overflow-hidden group"
                    >
                      {formState.status === 'submitting' ? (
                        <span className="flex items-center gap-3">
                          <iconify-icon icon="solar:spinner-linear" class="animate-spin text-3xl"></iconify-icon> TRANSMITTING...
                        </span>
                      ) : (
                        <>
                          <span className="relative z-10 font-bold">TRANSMIT REQUEST</span>
                          <iconify-icon icon="solar:arrow-right-line-duotone" class="text-3xl relative z-10 group-hover:translate-x-2 transition-transform"></iconify-icon>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}