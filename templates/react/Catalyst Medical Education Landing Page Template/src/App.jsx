import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

// --- Internal Components ---

const AdminBar = () => (
  <div className="fixed top-0 left-0 right-0 h-8 bg-[#1d1f21] text-[#b4b4b4] flex items-center justify-between px-4 text-xs z-50">
    <div className="flex items-center gap-4">
      <button className="hover:text-white transition-colors flex items-center gap-1.5">
        <iconify-icon icon="simple-icons:wordpress" width="14"></iconify-icon>
        My Sites
      </button>
      <button className="hover:text-white transition-colors flex items-center gap-1.5">
        <iconify-icon icon="solar:book-open-linear" width="14"></iconify-icon>
        Reader
      </button>
    </div>
    <div className="flex items-center gap-4">
      <button className="hover:text-white transition-colors flex items-center gap-1.5">
        <iconify-icon icon="solar:pen-new-square-linear" width="14"></iconify-icon>
        Write
      </button>
      <button className="hover:text-white transition-colors flex items-center gap-1.5">
        <iconify-icon icon="solar:user-circle-linear" width="16"></iconify-icon>
      </button>
    </div>
  </div>
);

const Logo = () => (
  <div className="flex flex-col items-center justify-center mt-12 mb-8">
    <div className="relative flex items-center justify-center w-32 h-32 mb-4">
      {/* Outer open purple ring */}
      <svg className="absolute inset-0 w-full h-full text-[#7b3e8c]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
        <path d="M 50 10 A 40 40 0 1 1 10 50" />
        <path d="M 16 26 A 40 40 0 0 1 50 10" opacity="0.3" />
      </svg>
      {/* Inner skin layer illustration representation */}
      <div className="relative w-20 h-20 bg-gradient-to-b from-orange-200 via-red-200 to-purple-300 rounded-xl shadow-inner overflow-hidden transform rotate-12 flex items-center justify-center">
         <div className="absolute top-0 w-full h-1/4 bg-yellow-100/50"></div>
         <iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="40" style={{ color: '#7b3e8c' }}></iconify-icon>
      </div>
    </div>
    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] uppercase">
      Catalyst
    </h1>
  </div>
);

const LearnerDropdown = ({ selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    "Clinician",
    "Patient or Caregiver"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto" ref={dropdownRef}>
      <label className="text-white font-semibold text-lg tracking-tight mb-3 drop-shadow-md">
        Which Learner Are You?
      </label>
      <div className="relative w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-[#3a3b3e]/90 backdrop-blur-md text-white hover:bg-[#4a4b4e] transition-colors py-3 px-4 rounded-md flex items-center justify-between shadow-inner border border-white/10"
        >
          <span className="flex-1 text-center font-medium">
            {selected || "- Please select -"}
          </span>
          <iconify-icon 
            icon="solar:alt-arrow-down-linear" 
            width="20" 
            className={clsx("transition-transform duration-300", isOpen && "rotate-180")}
          ></iconify-icon>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#2c2d30] border border-white/10 rounded-md shadow-xl overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onSelect(opt);
                  setIsOpen(false);
                }}
                className="w-full text-center py-3 px-4 text-white/90 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium border-b border-white/5 last:border-0"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const PathwayCard = ({ title, icon, image, description }) => (
  <div className="relative group overflow-hidden rounded-xl aspect-[4/3] w-full shadow-lg cursor-pointer bg-gray-900 border border-white/10">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
    />
    
    {/* Default Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
    
    {/* Hover Overlay: Darker with blur */}
    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/70 backdrop-blur-sm group-hover:backdrop-blur-md opacity-0 group-hover:opacity-100" />

    {/* Default Content */}
    <div className="absolute inset-0 p-5 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
      <div className="bg-black/60 backdrop-blur-md pl-3 pr-4 py-3 rounded-xl self-start border border-white/10 flex items-center gap-3 w-full">
        {icon && <img src={icon} alt="" className="w-8 h-8 object-contain shrink-0" />}
        <h3 className="text-white text-[15px] font-semibold leading-tight">{title}</h3>
      </div>
    </div>

    {/* Hover Content */}
    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
      <div className="flex items-center justify-center gap-3 mb-4 drop-shadow-lg">
        {icon && <img src={icon} alt="" className="w-8 h-8 object-contain" />}
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </div>
      <p className="text-white/95 text-sm leading-relaxed drop-shadow-md px-2">{description}</p>
    </div>
  </div>
);

const RubyCard = () => (
  <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-full shadow-lg bg-gray-900 border border-white/10 group cursor-pointer">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
      style={{ backgroundImage: `url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/2bbe3005-a21b-42a1-8b90-841129bad372/f68e117b-d893-489e-8de0-e8275a849aca-image-7.png?v=1777407959068")` }}
    />
    
    {/* Dark gradient overlay for contrast */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

    {/* 2 Column Layout Content */}
    <div className="absolute inset-0 flex flex-row items-center p-4">
      {/* Left Column: Image */}
      <div className="w-[40%] h-full flex items-end justify-center pb-2">
         <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/2bbe3005-a21b-42a1-8b90-841129bad372/5d0e542c-d455-446c-9a3a-99a98a8ea085-image-4.png?v=1777407317172"
            alt="Ruby Character"
            className="w-full h-[110%] object-contain filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105 origin-bottom"
         />
      </div>
      
      {/* Right Column: Text & Buttons */}
      <div className="w-[60%] flex flex-col justify-center pl-2 pr-2">
         <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 tracking-tight drop-shadow-md">Introducing Ruby</h3>
         <p className="text-white/90 text-[11px] sm:text-xs leading-snug mb-5 drop-shadow-md font-medium">
            The World's First AI-Powered Clinical Consultant for cSCC Management.
         </p>
         <div className="flex flex-col gap-2.5">
            <button className="w-full bg-white text-[#5c2a6e] px-4 py-2 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] active:scale-95">
              Start CME Activity
            </button>
            <button className="w-full bg-black/20 backdrop-blur-sm border border-white/40 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-white/10 transition-colors shadow-lg active:scale-95">
              Experience Ruby
            </button>
         </div>
      </div>
    </div>
  </div>
);

const ClinicianPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      <div className="relative bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-1 flex items-center justify-center"
        >
          <iconify-icon icon="solar:close-circle-bold" width="28"></iconify-icon>
        </button>
        
        <div className="text-center mb-8 mt-2">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-3 uppercase">Choose Your Pathway</h2>
          <p className="text-gray-600 text-sm">Select the tumor type you primarily treat to customize your dashboard.</p>
        </div>
        
        <div className="space-y-4">
          <button 
            className="w-full flex items-center justify-between p-5 rounded-xl border-2 border-purple-100 hover:border-purple-500 hover:bg-purple-50 transition-all group shadow-sm hover:shadow-md" 
            onClick={onClose}
          >
            <span className="font-semibold text-lg text-gray-800 group-hover:text-purple-700">Advanced cSCC & BCC</span>
            <iconify-icon icon="solar:arrow-right-linear" width="24" className="text-purple-400 group-hover:text-purple-600 transition-transform group-hover:translate-x-1"></iconify-icon>
          </button>
          
          <button 
            className="w-full flex items-center justify-between p-5 rounded-xl border-2 border-orange-100 hover:border-orange-500 hover:bg-orange-50 transition-all group shadow-sm hover:shadow-md" 
            onClick={onClose}
          >
            <span className="font-semibold text-lg text-gray-800 group-hover:text-orange-700">Advanced Melanoma</span>
            <iconify-icon icon="solar:arrow-right-linear" width="24" className="text-orange-400 group-hover:text-orange-600 transition-transform group-hover:translate-x-1"></iconify-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center w-full">
    <div className="mb-6 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
      <img 
        src="https://catalyst-skincancers.com/wp-content/uploads/2024/03/mlg-logos-2022.png" 
        alt="Med Learning Group" 
        className="h-12 w-auto object-contain drop-shadow-md"
      />
    </div>
    
    <div className="text-center space-y-2 text-[11px] text-white/70 font-light max-w-3xl drop-shadow-md">
      <p>
        This activity is provided by Med Learning Group. This program is supported by an independent educational grant from Regeneron Pharmaceuticals, Inc.
      </p>
      <p>
        Copyright © 2026 BCC/cSCC. All Rights Reserved. Website by <a href="https://www.divigner.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Divigner</a>.
      </p>
    </div>
  </div>
);

const AccessibilityButton = () => (
  <button 
    className="fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full shadow-2xl flex items-center justify-center text-white z-50 transition-all hover:scale-105 active:scale-95 border border-white/20"
    aria-label="Accessibility Options"
  >
    <iconify-icon icon="solar:accessibility-linear" width="24"></iconify-icon>
  </button>
);

export default function App() {
  const [selectedLearner, setSelectedLearner] = useState('');
  const [showClinicianPopup, setShowClinicianPopup] = useState(false);

  const handleSelectLearner = (role) => {
    setSelectedLearner(role);
    if (role === 'Clinician') {
      setShowClinicianPopup(true);
    }
  };

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden selection:bg-purple-300/30">
      
      {/* Base Dark Background Layer */}
      <div className="fixed inset-0 -z-30 bg-[#0a0a0c]"></div>
      
      {/* Requested Abstract Background Image */}
      <div 
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/2bbe3005-a21b-42a1-8b90-841129bad372/4d7b88d2-d55a-473b-8a5e-17b2d01181b7-image-3.png?v=1777407054275")',
        }}
      ></div>

      <AdminBar />
      <AccessibilityButton />
      <ClinicianPopup isOpen={showClinicianPopup} onClose={() => setShowClinicianPopup(false)} />

      <main className="relative z-10 flex flex-col items-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <Logo />

        {/* Main Translucent Content Panel */}
        <div className={clsx(
          "w-full transition-all duration-500 mt-6 rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]",
          selectedLearner ? "max-w-[72rem]" : "max-w-[56rem]"
        )}>
          
          {/* Glassmorphism Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8a4a83]/70 via-[#693873]/60 to-[#4a285d]/80 backdrop-blur-xl border border-white/20"></div>
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full">
            
            <LearnerDropdown selected={selectedLearner} onSelect={handleSelectLearner} />

            <div className="mt-14 w-full animate-in fade-in duration-500">
              
              {/* Default Welcome Text */}
              {selectedLearner === '' && (
                <div className="space-y-8 text-white w-full max-w-4xl mx-auto text-left drop-shadow-md">
                  <p className="text-[17px] md:text-[19px] leading-[1.8] font-light text-white/95">
                    CATALYST is a comprehensive, modern medical education web platform designed to provide healthcare professionals with the latest clinical data, interactive case studies, and expert insights. Our goal is to bridge the gap between emerging research and practical application in the clinic.
                  </p>
                  <p className="text-[17px] md:text-[19px] leading-[1.8] font-light text-white/95">
                    Acting as a dedicated resource hub for advanced cutaneous squamous cell carcinoma (cSCC) and basal cell carcinoma (BCC), this platform offers tailored pathways based on your specific role in the multidisciplinary care team. Select your learner type above to access customized modules and resources.
                  </p>
                </div>
              )}

              {/* Clinician Pathway Cards */}
              {selectedLearner === 'Clinician' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                  <div className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
                    <PathwayCard
                      title="Basal Cell Carcinoma"
                      icon="https://catalyst-skincancers.com/wp-content/uploads/2021/01/fav.png"
                      image="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/2bbe3005-a21b-42a1-8b90-841129bad372/58985f24-2fe4-4cb2-816d-b99d3142800e-image-5.png?v=1777407871290"
                      description="Basal cell carcinoma (BCC), particularly advanced BCC, can be associated with complex management and poor outcomes. However, therapeutic advancements have enhanced strategies for patient-specific care."
                    />
                  </div>
                  <div className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
                    <PathwayCard
                      title="Cutaneous Squamous Cell Carcinoma"
                      icon="https://catalyst-skincancers.com/wp-content/uploads/2021/01/fav.png"
                      image="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/2bbe3005-a21b-42a1-8b90-841129bad372/8b5ff221-03da-4f56-b1b1-c74236ec53b8-image-6.png?v=1777407914936"
                      description="Cutaneous squamous cell carcinoma (cSCC), particularly advanced cSCC, can be associated with complex management and poor outcomes. However, therapeutic advancements have enhanced strategies for patient-specific care."
                    />
                  </div>
                  <div className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                    <RubyCard />
                  </div>
                </div>
              )}

              {/* Patient Pathway Cards */}
              {selectedLearner === 'Patient or Caregiver' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                  <div className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
                    <PathwayCard
                      title="Basal Cell Carcinoma"
                      icon="https://catalyst-skincancers.com/wp-content/uploads/2021/01/fav.png"
                      image="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/2bbe3005-a21b-42a1-8b90-841129bad372/58985f24-2fe4-4cb2-816d-b99d3142800e-image-5.png?v=1777407871290"
                      description="As a patient, it is essential to take charge of your treatment journey for basal cell carcinoma (BCC). Active involvement in the process ensures that you fully understand your condition and treatment options, enables you to feel more in control and potentially improves outcomes."
                    />
                  </div>
                  <div className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
                    <PathwayCard
                      title="Cutaneous Squamous Cell Carcinoma"
                      icon="https://catalyst-skincancers.com/wp-content/uploads/2021/01/fav.png"
                      image="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/2bbe3005-a21b-42a1-8b90-841129bad372/8b5ff221-03da-4f56-b1b1-c74236ec53b8-image-6.png?v=1777407914936"
                      description="Active involvement in your treatment for cutaneous squamous cell carcinoma (cSCC) is crucial. Being informed about your condition, treatment options, and the roles of your healthcare team enables you to make better decisions about your care."
                    />
                  </div>
                </div>
              )}
            </div>

            <Footer />
            
          </div>
        </div>
      </main>
    </div>
  );
}