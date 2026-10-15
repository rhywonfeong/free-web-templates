import React, { useState, useEffect, useRef } from 'react';

const bootcampOptions = [
  'Bubble Full-Stack Bootcamp',
  'Webflow Masterclass',
  'API & Automation (Zapier)',
  'Full Bootcamp Bundle',
  'Private Mentorship'
];

const experienceOptions = [
  'Absolute Beginner',
  'Some HTML/CSS knowledge',
  'Familiar with no-code tools',
  'Experienced Developer'
];

export default function Booking() {
  const [courseOpen, setCourseOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const courseRef = useRef(null);

  const [expOpen, setExpOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState('');
  const expRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (courseRef.current && !courseRef.current.contains(e.target)) {
        setCourseOpen(false);
      }
      if (expRef.current && !expRef.current.contains(e.target)) {
        setExpOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="booking" className="py-24 bg-[#FFF7F9]/40 border-t border-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-24"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="reveal">
            <span className="text-[#E76F9B] font-medium text-xs tracking-wider mb-3 block uppercase">Start Learning Today</span>
            <h2 className="font-semibold text-3xl md:text-4xl tracking-tight text-[#333333] mb-4">Ready to accelerate your career?</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Apply for our upcoming cohort. Spots are limited to ensure quality mentorship and personalized review for every single student.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center shrink-0">
                  <iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#333333]">Fully Remote</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Learn from anywhere in the world at your own pace.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#FDE2E4] text-[#E76F9B] flex items-center justify-center shrink-0">
                  <iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[#333333]">Next Cohort</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Classes start on the 1st of next month. Secure your spot.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-xl shadow-[#FDE2E4]/20 reveal delay-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#333333] ml-1">Full Name</label>
                  <input type="text" placeholder="Jane Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] placeholder-gray-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#333333] ml-1">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] placeholder-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-[#333333] ml-1">Email Address</label>
                <input type="email" placeholder="jane@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] placeholder-gray-400" />
              </div>

              <div className="space-y-2 relative" ref={courseRef}>
                <label className="text-xs font-medium text-[#333333] ml-1">Select Bootcamp</label>
                <div className="relative cursor-pointer" onClick={() => setCourseOpen(!courseOpen)}>
                  <div className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm hover:border-[#E76F9B]/50 transition-all text-[#333333] flex items-center justify-between">
                    <span className={selectedCourse ? "text-[#333333]" : "text-gray-400"}>
                      {selectedCourse || "Choose a bootcamp..."}
                    </span>
                    <iconify-icon icon="solar:alt-arrow-down-linear" className={`text-gray-400 transition-transform duration-300 ${courseOpen ? 'rotate-180' : ''}`}></iconify-icon>
                  </div>
                </div>
                <div className={`absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg shadow-gray-200/50 transition-all duration-200 ${courseOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  <div className="p-2 space-y-1 max-h-48 overflow-y-auto">
                    {bootcampOptions.map((opt) => (
                      <div key={opt} onClick={() => { setSelectedCourse(opt); setCourseOpen(false); }} className="px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
                <input type="hidden" name="course" value={selectedCourse} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative" ref={expRef}>
                  <label className="text-xs font-medium text-[#333333] ml-1">Experience Level</label>
                  <div className="relative cursor-pointer" onClick={() => setExpOpen(!expOpen)}>
                    <div className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm hover:border-[#E76F9B]/50 transition-all text-[#333333] flex items-center justify-between">
                      <span className={selectedExp ? "text-[#333333]" : "text-gray-400"}>
                        {selectedExp || "Select level..."}
                      </span>
                      <iconify-icon icon="solar:alt-arrow-down-linear" className={`text-gray-400 transition-transform duration-300 ${expOpen ? 'rotate-180' : ''}`}></iconify-icon>
                    </div>
                  </div>
                  <div className={`absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg shadow-gray-200/50 transition-all duration-200 ${expOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <div className="p-2 space-y-1 max-h-48 overflow-y-auto">
                      {experienceOptions.map((opt) => (
                        <div key={opt} onClick={() => { setSelectedExp(opt); setExpOpen(false); }} className="px-3 py-2 text-sm text-[#333333] hover:bg-[#FDE2E4]/50 rounded-lg cursor-pointer transition-colors">
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                  <input type="hidden" name="experience" value={selectedExp} />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#333333] ml-1">Main Goal</label>
                  <input type="text" placeholder="e.g. Build a startup" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] placeholder-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-[#333333] ml-1">About your project <span className="text-gray-400 font-normal">(Optional)</span></label>
                <textarea rows="3" placeholder="Tell us a bit about what you want to build..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:outline-none focus:border-[#E76F9B] focus:ring-1 focus:ring-[#E76F9B] transition-all text-[#333333] placeholder-gray-400 resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-[#E76F9B] text-white font-medium text-sm py-4 rounded-xl hover:bg-[#d45c88] hover:shadow-lg hover:shadow-[#FDE2E4] transition-all duration-300 flex items-center justify-center gap-2 mt-4">
                Submit Application
                <iconify-icon icon="solar:rocket-linear" width="18" strokeWidth="1.5"></iconify-icon>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}