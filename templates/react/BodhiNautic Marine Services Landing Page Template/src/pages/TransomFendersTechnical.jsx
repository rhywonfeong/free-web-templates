import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function TransomFendersTechnical() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const correctPassword = "BODHI2026";

  const handleAccess = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-900 selection:text-white flex flex-col">
      <Navigation language="en" />
      
      <main className="flex-grow flex items-center justify-center p-6 mt-20">
        {!authenticated ? (
          <div className="w-full max-w-md bg-white p-10 md:p-14 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center transform transition-all">
            <div className="mb-8 space-y-2">
              <h1 className="text-sm tracking-[0.3em] text-slate-500 font-semibold uppercase">BodhiFenders</h1>
              <h2 className="text-2xl text-slate-900 font-medium tracking-wider uppercase">Transom Fenders</h2>
            </div>
            
            <div className="mb-10">
              <h3 className="text-lg text-slate-800 font-medium mb-3">Technical Access</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed px-4">
                Restricted technical information for yacht professionals.
              </p>
            </div>

            <form onSubmit={handleAccess} className="space-y-5">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Enter Password"
                  className={`w-full text-center px-4 py-3.5 bg-slate-50 border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-slate-900 focus:ring-slate-900/10'} rounded-lg focus:outline-none focus:ring-4 transition-all font-light tracking-widest text-slate-800 placeholder:tracking-normal placeholder:text-slate-400`}
                />
              </div>
              
              <div className="h-4">
                {error && (
                  <p className="text-red-500 text-sm tracking-wide font-light animate-pulse">
                    Incorrect password
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-lg text-sm font-semibold tracking-[0.2em] uppercase transition-all shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-900/50 active:scale-[0.98]"
              >
                Access
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-6xl mx-auto py-12 md:py-20 animate-fade-in px-6">
            <div className="mb-16 md:mb-24 text-center">
              <h1 className="text-sm tracking-[0.3em] text-slate-500 font-semibold uppercase mb-4">Technical Process</h1>
              <h2 className="text-3xl md:text-4xl text-slate-900 font-medium tracking-wide uppercase">Custom Transom Fenders</h2>
              <p className="mt-6 text-lg text-slate-600 font-light max-w-2xl mx-auto">
                A premium technical overview for Captains, Chief Officers, Technical Managers and Shipyards.
              </p>
            </div>
            
            <div className="space-y-24 md:space-y-32">
              
              {/* SECTION 1: FIRST ESTIMATE */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold text-slate-300 tracking-widest">01</span>
                    <h3 className="text-xl md:text-2xl text-slate-900 font-medium tracking-wide uppercase">From First Estimate<br />To Final Design</h3>
                  </div>
                  <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
                    <p>
                      A transom fender project can start very simply. For an initial budget quotation, we normally only need a few basic dimensions:
                    </p>
                    <ul className="space-y-3 pl-6 border-l-2 border-blue-900/20 text-slate-800 font-normal">
                      <li className="relative before:content-[''] before:absolute before:-left-8 before:top-2.5 before:w-2 before:h-2 before:bg-blue-900 before:rounded-full">Overall fender length</li>
                      <li className="relative before:content-[''] before:absolute before:-left-8 before:top-2.5 before:w-2 before:h-2 before:bg-blue-900 before:rounded-full">Overall fender height</li>
                      <li className="relative before:content-[''] before:absolute before:-left-8 before:top-2.5 before:w-2 before:h-2 before:bg-blue-900 before:rounded-full">Foam/core width</li>
                      <li className="relative before:content-[''] before:absolute before:-left-8 before:top-2.5 before:w-2 before:h-2 before:bg-blue-900 before:rounded-full">Overall top plate width</li>
                    </ul>
                    <p>
                      With these dimensions and some photographs of the stern or swim platform, we can normally prepare an initial quotation without visiting the yacht.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center items-center aspect-[4/3]">
                  <div className="w-full h-full bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 p-8 text-center relative group overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81ba543d-05aa-4806-8247-8af6b24a5370_1600w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                     <iconify-icon icon="solar:ruler-pen-linear" width="48" height="48" className="mb-4 text-slate-300"></iconify-icon>
                     <span className="text-sm tracking-widest uppercase font-medium">Dimension Reference</span>
                     <span className="text-xs mt-2 opacity-70 max-w-[200px]">Space reserved for technical drawing or photograph</span>
                  </div>
                </div>
              </section>

              {/* SECTION 2: 3D SCANNING */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 aspect-[4/3]">
                  <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ced36d8-4479-4868-a8ee-346ce44919fd_1600w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <iconify-icon icon="solar:box-minimalistic-linear" width="48" height="48" className="mb-2 text-slate-300"></iconify-icon>
                    <span className="absolute bottom-8 left-0 right-0 text-center text-xs tracking-widest uppercase font-medium text-slate-500">3D Point Cloud / CAD Model Reference</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold text-slate-300 tracking-widest">02</span>
                    <h3 className="text-xl md:text-2xl text-slate-900 font-medium tracking-wide uppercase">3D Scanning & Design</h3>
                  </div>
                  <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                    <p className="text-lg">
                      When the stern geometry, platform or attachment system is more complex, we strongly recommend a 3D survey before final engineering.
                    </p>
                    <p>
                      The objective is not simply to take measurements. We digitally capture the real geometry of the yacht so the complete fender system can be designed directly around the stern and swim platform.
                    </p>
                    <p className="font-medium text-slate-800">This gives us much greater freedom to optimise:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                      <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Fender dimensions & geometry</div>
                      <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Contact surfaces</div>
                      <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Position & alignment</div>
                      <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Attachment points</div>
                      <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Integration with deck fittings</div>
                      <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Top plate geometry</div>
                      <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Non-skid/decking finish</div>
                      <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div> Clearances & structures</div>
                    </div>
                    <p>
                      It also allows the complete system to be designed with future expansion in mind. For example, a yacht may initially install only the fenders required for its current operation, while the digital model allows additional fenders or protection areas to be developed later without starting the engineering process again.
                    </p>
                  </div>
                  
                  <div className="mt-10 p-6 bg-slate-900 rounded-xl text-white shadow-xl shadow-slate-900/10 border border-slate-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2 text-xs font-semibold tracking-widest uppercase text-center">
                      <div className="flex flex-col items-center gap-3"><iconify-icon icon="solar:scanner-linear" width="28" className="text-blue-400"></iconify-icon>3D Survey</div>
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="20" className="text-slate-600 hidden sm:block"></iconify-icon>
                      <iconify-icon icon="solar:alt-arrow-down-linear" width="20" className="text-slate-600 block sm:hidden"></iconify-icon>
                      <div className="flex flex-col items-center gap-3"><iconify-icon icon="solar:laptop-linear" width="28" className="text-blue-400"></iconify-icon><span className="max-w-[100px]">Digital Yacht Geometry</span></div>
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="20" className="text-slate-600 hidden sm:block"></iconify-icon>
                      <iconify-icon icon="solar:alt-arrow-down-linear" width="20" className="text-slate-600 block sm:hidden"></iconify-icon>
                      <div className="flex flex-col items-center gap-3"><iconify-icon icon="solar:pen-linear" width="28" className="text-blue-400"></iconify-icon>Fender Design</div>
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="20" className="text-slate-600 hidden sm:block"></iconify-icon>
                      <iconify-icon icon="solar:alt-arrow-down-linear" width="20" className="text-slate-600 block sm:hidden"></iconify-icon>
                      <div className="flex flex-col items-center gap-3"><iconify-icon icon="solar:shield-check-linear" width="28" className="text-blue-400"></iconify-icon>Final System</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 3: ENGINEERING */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold text-slate-300 tracking-widest">03</span>
                    <h3 className="text-xl md:text-2xl text-slate-900 font-medium tracking-wide uppercase">Engineering & Approval</h3>
                  </div>
                  <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
                    <p>
                      Once the geometry and configuration have been defined, we establish the final dimensions, construction and attachment solution.
                    </p>
                    <p>
                      Before manufacturing, technical drawings can be supplied showing the main dimensions and configuration of the system for review and approval.
                    </p>
                    <p>
                      For more complex or visually important installations, we can also create 3D renders showing how the proposed fender system will integrate with the yacht before it is manufactured.
                    </p>
                    <p>
                      The idea is to allow the yacht and its technical team to understand and validate the solution before production begins.
                    </p>
                  </div>
                  
                  <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 shadow-sm">
                    <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-6 sm:gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-center">
                      <div className="flex flex-col items-center gap-3 w-[45%] sm:w-auto"><iconify-icon icon="solar:ruler-linear" width="24" className="text-blue-600"></iconify-icon><span className="max-w-[80px]">Final Geometry</span></div>
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="16" className="text-slate-300 hidden sm:block mt-2"></iconify-icon>
                      
                      <div className="flex flex-col items-center gap-3 w-[45%] sm:w-auto"><iconify-icon icon="solar:document-text-linear" width="24" className="text-blue-600"></iconify-icon><span className="max-w-[80px]">Technical Drawings</span></div>
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="16" className="text-slate-300 hidden sm:block mt-2"></iconify-icon>
                      
                      <div className="flex flex-col items-center gap-3 w-[45%] sm:w-auto"><iconify-icon icon="solar:monitor-camera-linear" width="24" className="text-blue-600"></iconify-icon><span className="max-w-[80px]">3D Visualisation</span></div>
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="16" className="text-slate-300 hidden sm:block mt-2"></iconify-icon>
                      
                      <div className="flex flex-col items-center gap-3 w-[45%] sm:w-auto"><iconify-icon icon="solar:check-circle-linear" width="24" className="text-blue-600"></iconify-icon><span className="max-w-[80px]">Client Approval</span></div>
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="16" className="text-slate-300 hidden sm:block mt-2"></iconify-icon>
                      
                      <div className="flex flex-col items-center gap-3 w-[100%] sm:w-auto mt-4 sm:mt-0"><iconify-icon icon="solar:settings-linear" width="24" className="text-blue-600"></iconify-icon><span className="max-w-[80px]">Manufacturing</span></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                    <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors cursor-pointer relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46e82315-3c24-4730-becf-990c50c1bc97_800w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:document-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                      <span className="text-[10px] tracking-widest uppercase font-medium">Technical Drawing</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                    <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors cursor-pointer relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d4a1704-16c6-4cf1-a9b5-ec031fe4223b_800w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:monitor-camera-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                      <span className="text-[10px] tracking-widest uppercase font-medium">3D Render</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                    <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors cursor-pointer relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3846e64-57ac-4fa3-a485-752fdb322daa_800w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:settings-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                      <span className="text-[10px] tracking-widest uppercase font-medium">Manufacturing</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                    <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors cursor-pointer relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88ec900e-3a3c-40a7-bc00-c22274c8d98a_800w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:gallery-check-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                      <span className="text-[10px] tracking-widest uppercase font-medium">Finished Installation</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 4: CONSTRUCTION & MATERIALS */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 space-y-4">
                  <div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 aspect-[4/3] flex flex-col justify-center items-center">
                    <div className="w-full h-full bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 p-8 text-center hover:bg-slate-100 transition-colors relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b700f800-0f68-4a08-aada-68b51cacf55f_1600w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:layers-linear" width="48" height="48" className="mb-4 text-slate-300"></iconify-icon>
                      <span className="text-sm tracking-widest uppercase font-medium">Foam Core & Construction</span>
                      <span className="text-xs mt-2 opacity-70">Space reserved for detailed real photographs of the materials and construction process</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                      <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors cursor-pointer relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fe207dd-65dd-42f7-b4ac-c60eb432f047_800w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                        <iconify-icon icon="solar:gallery-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                        <span className="text-[10px] tracking-widest uppercase font-medium">Core Material</span>
                      </div>
                    </div>
                     <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                      <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors cursor-pointer relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b06ded5a-9c51-46e9-b07a-21b291f69319_800w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                        <iconify-icon icon="solar:gallery-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                        <span className="text-[10px] tracking-widest uppercase font-medium">Skin Application</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold text-slate-300 tracking-widest">04</span>
                    <h3 className="text-xl md:text-2xl text-slate-900 font-medium tracking-wide uppercase">Construction & Materials</h3>
                  </div>
                  <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                    <p className="text-lg">
                      Our transom fenders are engineered as a complete system, where the core, outer skin, structural top plate and attachment system work together.
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold tracking-widest text-slate-900 uppercase mb-3">Fender Core</h4>
                      <p className="mb-3">The internal core is manufactured from closed-cell polyethylene foam.</p>
                      <p className="mb-3">The foam provides the volume and energy absorption of the fender while maintaining its shape and avoiding water absorption into the core.</p>
                      <p>The dimensions and geometry of the foam are defined specifically for each installation according to the available space, contact areas and required protection.</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold tracking-widest text-slate-900 uppercase mb-3 mt-8">Outer Skin</h4>
                      <p className="mb-3">The foam core is completely protected with a high-quality CSM/CR coated fabric, commonly known as Hypalon, selected for demanding marine applications.</p>
                      <p className="mb-3">In the areas most exposed to impact, compression and abrasion, we reinforce the construction with a second layer of fabric.</p>
                      <p>This double-skin construction provides additional resistance in the areas where the fender is subjected to the highest operational loads and helps reduce the risk of skin damage, delamination or blistering under demanding conditions and elevated temperatures.</p>
                    </div>
                  </div>

                  <div className="mt-10 p-6 bg-slate-900 rounded-xl text-white shadow-xl shadow-slate-900/10 border border-slate-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2 text-xs font-semibold tracking-widest uppercase text-center">
                      <div className="flex flex-col items-center gap-3">
                        <iconify-icon icon="solar:box-minimalistic-linear" width="28" className="text-blue-400"></iconify-icon>
                        <span className="max-w-[120px]">Closed-Cell PE Foam</span>
                      </div>
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="20" className="text-slate-600 hidden sm:block"></iconify-icon>
                      <iconify-icon icon="solar:alt-arrow-down-linear" width="20" className="text-slate-600 block sm:hidden"></iconify-icon>
                      <div className="flex flex-col items-center gap-3">
                        <iconify-icon icon="solar:shield-linear" width="28" className="text-blue-400"></iconify-icon>
                        <span className="max-w-[120px]">Protective Skin</span>
                      </div>
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="20" className="text-slate-600 hidden sm:block"></iconify-icon>
                      <iconify-icon icon="solar:alt-arrow-down-linear" width="20" className="text-slate-600 block sm:hidden"></iconify-icon>
                      <div className="flex flex-col items-center gap-3">
                        <iconify-icon icon="solar:layers-minimalistic-linear" width="28" className="text-blue-400"></iconify-icon>
                        <span className="max-w-[120px]">Reinforced Impact Areas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 5: TOP PLATE ENGINEERING */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold text-slate-300 tracking-widest">05</span>
                    <h3 className="text-xl md:text-2xl text-slate-900 font-medium tracking-wide uppercase">Top Plate Engineering</h3>
                  </div>
                  <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
                    <p>
                      Our top plate design has evolved from our experience not only manufacturing transom fenders, but also repairing and analysing many existing fender systems from different manufacturers.
                    </p>
                    <p>
                      Through this experience, we have identified two behaviours that we specifically wanted to avoid:
                    </p>
                    <div className="space-y-4 my-6">
                      <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
                        <p className="text-base text-slate-700">A top plate that is <strong>too flexible</strong> can allow excessive movement of the fender under load, reducing stability and creating an insecure feeling when standing or moving on it.</p>
                      </div>
                      <div className="p-4 bg-slate-100 rounded-lg border border-slate-200">
                        <p className="text-base text-slate-700">At the opposite extreme, a <strong>very rigid but brittle</strong> construction can provide excellent initial stability but may be vulnerable to cracking or structural failure when subjected to exceptional loads or impacts.</p>
                      </div>
                    </div>
                    <p className="font-medium text-slate-800">
                      Our solution is a composite sandwich combining a highly rigid structural material with a high-hardness elastomer layer.
                    </p>
                    <p>
                      The objective is to achieve a very high level of stiffness during normal operation while retaining toughness and the ability to tolerate significant deformation under exceptional loads without behaving as a purely brittle structure.
                    </p>
                  </div>
                  
                  <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm font-semibold tracking-widest uppercase text-center">
                      <div className="flex flex-col items-center gap-2 text-blue-900">
                        <iconify-icon icon="solar:shield-bold-duotone" width="28"></iconify-icon>
                        <span>High Stiffness</span>
                      </div>
                      <span className="text-slate-300 hidden sm:block font-light text-2xl">+</span>
                      <iconify-icon icon="solar:add-circle-linear" width="20" className="text-slate-300 block sm:hidden"></iconify-icon>
                      <div className="flex flex-col items-center gap-2 text-blue-900">
                        <iconify-icon icon="solar:hammer-bold-duotone" width="28"></iconify-icon>
                        <span>Toughness</span>
                      </div>
                      <span className="text-slate-300 hidden sm:block font-light text-2xl">+</span>
                      <iconify-icon icon="solar:add-circle-linear" width="20" className="text-slate-300 block sm:hidden"></iconify-icon>
                      <div className="flex flex-col items-center gap-2 text-blue-900">
                        <iconify-icon icon="solar:ruler-angular-bold-duotone" width="28"></iconify-icon>
                        <span>Controlled Flexibility</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center items-center h-full min-h-[500px]">
                  <div className="w-full h-full bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 p-8 text-center relative group overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/635c0cca-1b6e-4d0d-a261-eeba172ef2ad_1600w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                     <iconify-icon icon="solar:layers-bold-duotone" width="64" height="64" className="mb-4 text-slate-300"></iconify-icon>
                     <span className="text-sm tracking-widest uppercase font-medium">Composite Sandwich Section</span>
                     <span className="text-xs mt-3 opacity-70 max-w-[250px] leading-relaxed">Large space reserved for sectional diagram or actual construction photographs showing structural and elastomer layers. Verified technical data to be added later.</span>
                     
                     <div className="mt-12 border-t border-slate-200 pt-8 w-full max-w-[240px]">
                       <div className="flex items-center justify-between text-[10px] uppercase tracking-widest mb-4">
                         <span>Structural layer</span>
                         <div className="w-12 h-1.5 bg-slate-400 rounded"></div>
                       </div>
                       <div className="flex items-center justify-between text-[10px] uppercase tracking-widest">
                         <span>Elastomer core</span>
                         <div className="w-12 h-3 bg-blue-900/30 rounded"></div>
                       </div>
                     </div>
                  </div>
                </div>
              </section>

              {/* SECTION 6: ATTACHMENT SYSTEMS */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="col-span-1 sm:col-span-2 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 aspect-video flex flex-col justify-center items-center">
                    <div className="w-full h-full bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 p-8 text-center hover:bg-slate-100 transition-colors relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f25a14e3-a2a0-4ddf-8e35-a43d1ccbf48f_1600w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:anchor-linear" width="48" height="48" className="mb-4 text-slate-300"></iconify-icon>
                      <span className="text-sm tracking-widest uppercase font-medium">Completed Installations</span>
                      <span className="text-xs mt-2 opacity-70">Generous space for real photographs of existing sockets and completed installations</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                    <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59817321-9c7a-48b2-8bf4-6e5b4830e760_800w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:gallery-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                      <span className="text-[10px] tracking-widest uppercase font-medium">Existing Sockets</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                    <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb6df6bd-a41f-4f19-80ae-5d4768f12f80_800w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:gallery-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                      <span className="text-[10px] tracking-widest uppercase font-medium">Different Pins</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                    <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/905b4363-1012-4d81-ade4-427f60891ddd_800w.jpg" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:gallery-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                      <span className="text-[10px] tracking-widest uppercase font-medium">Expansion Pins</span>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-xl shadow-md border border-slate-100 aspect-square">
                    <div className="w-full h-full bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 p-4 text-center hover:bg-slate-100 transition-colors relative overflow-hidden">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c192ac4b-67e8-4a08-b665-cdc52c881b8f_800w.png" alt="Editable visual placeholder" className="absolute inset-0 w-full h-full object-cover z-10" />
                      <iconify-icon icon="solar:gallery-linear" width="32" className="mb-3 text-slate-300"></iconify-icon>
                      <span className="text-[10px] tracking-widest uppercase font-medium">Locking Systems</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold text-slate-300 tracking-widest">06</span>
                    <h3 className="text-xl md:text-2xl text-slate-900 font-medium tracking-wide uppercase">Attachment Systems</h3>
                  </div>
                  <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                    <p className="text-lg">
                      Every yacht is different, so we do not impose one standard attachment system.
                    </p>
                    <p>
                      Whenever possible, the fender system is designed around the yacht's existing deck fittings, sockets or attachment points. If suitable pins or fittings already exist, we adapt the fender geometry and top plate to them.
                    </p>
                    <p>
                      If new attachment points are required, we can supply a wide range of pins and locking solutions, or manufacture custom components for the specific installation.
                    </p>
                    <p className="font-medium text-slate-800">
                      It is also important to understand the direction of the loads.
                    </p>
                    <p>
                      In some installations, existing railings or surrounding structures can provide sufficient lateral restraint. However, depending on the fender geometry and its intended use, the system may also need to resist vertical movement or lifting forces. In these cases, a positive locking solution such as expansion pins may be required.
                    </p>
                    <p>
                      The final attachment concept is therefore defined as part of the engineering process, taking into account the yacht geometry, existing fittings and expected operational loads.
                    </p>
                  </div>
                  
                  <div className="mt-10 space-y-4">
                    <div className="p-5 bg-slate-900 rounded-xl text-white shadow-md border border-slate-800">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-center">
                        <div className="flex flex-col items-center gap-2">
                          <iconify-icon icon="solar:anchor-square-linear" width="24" className="text-blue-400"></iconify-icon>
                          <span>Existing Deck Fittings</span>
                        </div>
                        <iconify-icon icon="solar:alt-arrow-right-linear" width="20" className="text-slate-600 hidden sm:block"></iconify-icon>
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="20" className="text-slate-600 block sm:hidden"></iconify-icon>
                        <div className="flex flex-col items-center gap-2">
                          <iconify-icon icon="solar:pen-new-square-linear" width="24" className="text-blue-400"></iconify-icon>
                          <span>Adapted Fender Design</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 shadow-sm">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-center">
                        <div className="flex flex-col items-center gap-2">
                          <iconify-icon icon="solar:screw-hole-linear" width="24" className="text-slate-500"></iconify-icon>
                          <span className="max-w-[100px]">New Installation</span>
                        </div>
                        <iconify-icon icon="solar:alt-arrow-right-linear" width="16" className="text-slate-300 hidden sm:block"></iconify-icon>
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="16" className="text-slate-300 block sm:hidden"></iconify-icon>
                        <div className="flex flex-col items-center gap-2">
                          <iconify-icon icon="solar:link-circle-linear" width="24" className="text-slate-500"></iconify-icon>
                          <span className="max-w-[120px]">Standard Or Custom Pins</span>
                        </div>
                        <iconify-icon icon="solar:alt-arrow-right-linear" width="16" className="text-slate-300 hidden sm:block"></iconify-icon>
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="16" className="text-slate-300 block sm:hidden"></iconify-icon>
                        <div className="flex flex-col items-center gap-2">
                          <iconify-icon icon="solar:lock-keyhole-linear" width="24" className="text-slate-500"></iconify-icon>
                          <span className="max-w-[120px]">Positive Locking When Required</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        )}
      </main>

      <Footer language="en" />
    </div>
  );
}
