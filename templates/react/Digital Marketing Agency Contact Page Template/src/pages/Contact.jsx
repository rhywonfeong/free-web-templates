import { useState } from 'react';
import LeadForm from '../components/LeadForm';

export default function Contact() {
  return (
    <div className="animate-in fade-in duration-500 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              Bize Ulaşın
            </h1>
            <p className="text-lg text-slate-500 mb-12">
              Markanızın dijital yolculuğunda bir sonraki adımı atmak için bizimle iletişime geçin. Ekibimiz 24 saat içinde dönüş yapacaktır.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <iconify-icon icon="solar:map-point-linear" width="20" className="text-slate-700"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Ofisimiz</h3>
                  <p className="text-slate-500 text-sm">
                    Levent Mah. Büyükdere Cad. No:199<br />
                    Şişli, İstanbul 34394
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <iconify-icon icon="solar:letter-linear" width="20" className="text-slate-700"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">E-posta</h3>
                  <p className="text-slate-500 text-sm">
                    merhaba@nexusdijital.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  <iconify-icon icon="solar:phone-linear" width="20" className="text-slate-700"></iconify-icon>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Telefon</h3>
                  <p className="text-slate-500 text-sm">
                    +90 (212) 555 01 23
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                <iconify-icon icon="solar:info-circle-linear" className="text-blue-500"></iconify-icon> Kariyer
              </h4>
              <p className="text-sm text-slate-500">
                Ekibimize katılmak isterseniz, CV'nizi ve portfolyonuzu <a href="mailto:ik@nexusdijital.com" className="text-slate-900 font-medium underline">ik@nexusdijital.com</a> adresine gönderebilirsiniz.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg shadow-slate-200/50 border border-gray-100">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Projenizden bahsedin</h2>
            <p className="text-sm text-slate-500 mb-8">Hangi konularda desteğe ihtiyacınız olduğunu belirtin.</p>
            
            <LeadForm context="contact-page" buttonText="Mesajı Gönder" fullForm={true} />
          </div>

        </div>

      </div>
    </div>
  );
}