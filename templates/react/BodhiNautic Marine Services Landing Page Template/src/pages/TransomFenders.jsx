import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const catalogues = [
  ["Evercor", "https://drive.google.com/file/d/1ydEZqEaDZfkj4Q0k4jAAn9efxdSRyuLM/view?usp=sharing"],
  ["PlasDECK", "https://drive.google.com/file/d/1I7UtywanCfgauiCC-m33QZ-4iEf8zaqD/view?usp=sharing"],
  ["Deck-X", "https://drive.google.com/file/d/18iIvNh3pvhnj1BS48eMi6oJK0jj-RhCo/view?usp=sharing"],
  ["E-Dek PRO", "https://drive.google.com/file/d/1obPuBJymOs4rGdNvrtXAby5r3v7Odr7R/view?usp=sharing"],
];

export default function TransomFenders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsAppLink = (service) => {
    const text = encodeURIComponent(`Hello, I am interested in ${service}`);
    return `https://wa.me/34653654342?text=${text}`;
  };

  return (
    <div className="selection:bg-blue-500/30 selection:text-blue-900 text-slate-900 bg-white relative font-sans">
      <Navigation />

      <main className="pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24 lg:pt-48 lg:pb-32">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3274eab2-0550-456a-b17f-b92e0d3ba8f2_3840w.jpg" 
              alt="Custom Transom Fender Hero" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-sky-400"></span>
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">CUSTOM TRANSOM FENDERS</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight leading-tight">
                Engineered to fit.<br />Built to protect.
              </h1>
              <div className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 space-y-4">
                <p>BodhiFenders designs and manufactures fully custom Transom Fender systems for superyachts, tenders and chase boats.</p>
                <p>Every system is developed around the actual yacht, taking into consideration its stern geometry, operational requirements, fixing points, crew handling and aesthetic integration.</p>
                <p>From the first onboard survey to final installation, we manage the complete process.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={whatsAppLink("Custom Transom Fenders")} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-900 text-sm font-semibold transition-colors">
                  DISCUSS YOUR PROJECT <iconify-icon icon="solar:arrow-right-linear" width="18" height="18"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MORE THAN A FENDER */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">MORE THAN A FENDER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-8 tracking-tight">
                A CUSTOM-ENGINEERED INTERFACE BETWEEN YACHT AND DOCK
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-lg text-slate-600 font-light leading-relaxed space-y-6 text-center">
              <p>
                Every stern is different. So is every Transom Fender.
              </p>
              <p>
                Designed around the yacht's actual geometry, fixing points and operational requirements, each BodhiFenders Transom Fender is developed as a complete protection system — from initial survey to final installation.
              </p>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">OUR PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight max-w-3xl mx-auto">
              ENGINEERING THE SOLUTION, FROM SCAN TO SEA.
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-6 space-y-24 lg:space-y-32">
            {/* Step 01 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="text-blue-600 font-mono text-xl mb-4 font-semibold">01 — YACHT ANALYSIS</div>
                <h3 className="text-2xl font-medium text-slate-900 mb-6">Every transom is different.</h3>
                <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                  <p>We begin by understanding the yacht's stern geometry, intended use, operational requirements, existing fixing points, surrounding equipment, crew handling and onboard storage constraints.</p>
                  <p>This first analysis determines the most appropriate approach for each individual project.</p>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 w-full">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dec5b811-2948-465f-b6ee-d5abf7e840c5_1600w.jpg" alt="Yacht Analysis" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 w-full relative h-[380px] lg:h-[450px]">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c907e8a-7578-43b7-a228-eec6dd6adbe7_1600w.jpg" alt="3D Survey Main" className="rounded-2xl shadow-xl w-[80%] h-[280px] lg:h-[340px] object-cover absolute top-0 left-0 z-10" />
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bd65c66-4f8d-4293-a7ac-ce6fcd82296b_800w.png" alt="3D Survey Detail" className="rounded-2xl shadow-2xl w-[65%] h-[220px] lg:h-[260px] object-cover absolute bottom-0 right-0 z-20 border-8 border-slate-50" />
              </div>
              <div className="lg:w-1/2">
                <div className="text-blue-600 font-mono text-xl mb-4 font-semibold">02 — 3D SURVEY</div>
                <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                  <p>For complex projects, we carry out an onboard 3D survey to digitally capture the transom, platforms, deck fittings and surrounding geometry.</p>
                  <p>This provides an accurate three-dimensional reference from which the complete fender system can be developed directly around the yacht's actual geometry.</p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="text-blue-600 font-mono text-xl mb-4 font-semibold">03 — POINT CLOUD & DIGITAL GEOMETRY</div>
                <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                  <p>Survey information is processed into a detailed three-dimensional digital reference of the yacht.</p>
                  <p>This allows us to work with the actual stern geometry, understand contact surfaces, analyse clearances and surrounding elements, and develop the fender around the areas it needs to protect.</p>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 w-full relative h-[420px] lg:h-[500px]">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93203261-4c8b-4eff-a93d-b76895480ece_1600w.png" alt="Point Cloud Main" className="rounded-2xl shadow-xl w-[75%] h-[260px] lg:h-[320px] object-cover bg-slate-900 p-4 absolute top-0 right-0 z-10" />
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c192ac4b-67e8-4a08-b665-cdc52c881b8f_800w.png" alt="Digital Geometry Layer" className="rounded-2xl shadow-2xl w-[55%] h-[180px] lg:h-[220px] object-cover absolute bottom-12 left-0 z-20 border-8 border-slate-50" />
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7498872-d9f9-42ef-93a8-cfceb710fcd2_800w.jpg" alt="Data Processing Overlay" className="rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] w-[45%] h-[160px] lg:h-[180px] object-cover absolute bottom-0 right-8 z-30 border-8 border-slate-50" />
              </div>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 w-full">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/271bd4ce-d14b-416c-abbc-7585effbd38b_1600w.jpg" alt="3D Design and Visualisation" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                <div className="text-blue-600 font-mono text-xl mb-4 font-semibold">04 — 3D DESIGN & VISUALISATION</div>
                <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                  <p>Before manufacturing, the Transom Fender is developed digitally so that its geometry, dimensions, configuration and integration with the yacht can be reviewed before the physical product exists.</p>
                  <p>For selected projects, realistic 3D renders allow the Captain, crew and management team to visualise the proposed solution and agree the final concept before production begins.</p>
                </div>
              </div>
            </div>

            {/* Step 05 */}
            <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20">
              <div className="lg:w-5/12">
                <div className="text-blue-600 font-mono text-xl mb-4 font-semibold">05 — DECKING & FINISH SELECTION</div>
                <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed mb-6">
                  <p>The Transom Fender should not only work correctly; on a superyacht it should also integrate aesthetically with the vessel.</p>
                  <p>We offer different upper-surface and decking solutions designed to feel like a premium material and finish selection.</p>
                  <p>Custom colours, caulking, patterns and logos can be incorporated according to the individual project.</p>
                </div>
                
                <div className="mb-8 border-t border-slate-100 pt-6">
                  <span className="block text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">Download all 4 product catalogues</span>
                  <div className="flex flex-wrap gap-2">
                    {catalogues.map(([name, url]) => (
                      <a href={url} target="_blank" rel="noreferrer" key={name} className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white text-blue-700 text-[10px] font-mono tracking-wider uppercase px-3 py-2 transition-colors">
                        {name} <span className="font-normal">↓</span>
                      </a>
                    ))}
                  </div>
                </div>

                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7822c086-7f6e-497f-80e8-3a419f1115f9_1600w.jpg" alt="Marine Decking" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
              </div>
              <div className="lg:w-7/12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full content-start">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="text-slate-900 font-medium mb-2">Deck-X</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Premium polyurethane decking with a highly realistic teak appearance, particularly suitable for high-end superyacht applications.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="text-slate-900 font-medium mb-2">PlasDECK</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Premium synthetic teak solution offering the traditional appearance of teak with the advantages of a modern marine decking material.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="text-slate-900 font-medium mb-2">Evercor</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Cork-composite decking combining a natural appearance with a technical and more sustainable material concept.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="text-slate-900 font-medium mb-2">E-DEK PRO</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Technical lightweight decking solution combining practicality, comfort and durability.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm md:col-span-2">
                    <h4 className="text-slate-900 font-medium mb-2">EVA / Anti-slip finish</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">A lightweight and practical solution for projects where functionality and weight are the main priorities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 06 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 w-full">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb6df6bd-a41f-4f19-80ae-5d4768f12f80_1600w.jpg" alt="Fixing System Engineering" className="rounded-2xl shadow-lg w-full h-[500px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                <div className="text-blue-600 font-mono text-xl mb-4 font-semibold">06 — FIXING SYSTEM ENGINEERING</div>
                <h3 className="text-xl font-medium text-slate-900 mb-6 uppercase tracking-tight">THE FENDER AND ITS FIXING SYSTEM ARE ONE COMPLETE SOLUTION.</h3>
                <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                  <p>A Transom Fender must remain correctly positioned under the multidirectional loads generated by yacht movement, swell and everyday operation.</p>
                  <p>We assess existing deck fittings, fixing points, fender geometry and crew requirements as part of the complete design.</p>
                  <p>Depending on the project, we can integrate existing yacht fittings or develop dedicated mechanical interfaces and custom expansion pins — combining secure retention with simple crew operation.</p>
                  <p>Existing fixing points are assessed individually to determine whether they are suitable for the intended application.</p>
                </div>
              </div>
            </div>

            {/* Step 07 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="text-blue-600 font-mono text-xl mb-4 font-semibold">07 — SPECIALIST MANUFACTURING</div>
                <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                  <p>Once the design is approved, each Transom Fender is individually manufactured at our facility in Spain.</p>
                  <p>Our typical construction combines high-density closed-cell foam, a proprietary BodhiFenders reinforced upper structure and marine-grade CSM / Hypalon protection.</p>
                  <p>High-wear areas, fixing interfaces and the selected decking or anti-slip finish are incorporated according to the requirements of each individual project.</p>
                  <p>Precision manufacturing and specialist hand-finishing complete a fender designed for demanding superyacht operation.</p>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2 w-full">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64da64b3-cc10-431b-a6d7-90882e5e524f_1600w.jpg" alt="Specialist Manufacturing" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
              </div>
            </div>

            {/* Step 08 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 w-full">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0abae1ed-9edc-4a20-8184-5c9f24ff086e_1600w.jpg" alt="Onboard Installation" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
              </div>
              <div className="lg:w-1/2">
                <div className="text-blue-600 font-mono text-xl mb-4 font-semibold">08 — ONBOARD INSTALLATION & FINAL ADJUSTMENT</div>
                <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
                  <p>Where required, our technicians complete the final installation onboard, verifying fit, clearances and fixing interfaces and making any necessary final adjustments.</p>
                  <p>The objective is not simply to deliver a fender, but to leave the yacht with a complete protection system that integrates correctly with the vessel and remains practical for the crew to operate.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESIGNED FOR THE CREW */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">DESIGNED FOR THE CREW</h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                A technically effective fender must also be practical for the people who use it.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  <iconify-icon icon="solar:hand-stars-linear" width="32" height="32"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">HANDLING</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Individual weight and practical deployment are considered from the design stage.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  <iconify-icon icon="solar:widget-3-linear" width="32" height="32"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">MODULARITY</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Depending on the protected area, a single fender or several independent sections can be developed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  <iconify-icon icon="solar:box-minimalistic-linear" width="32" height="32"></iconify-icon>
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">STORAGE</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  The configuration should take into consideration the available onboard storage and normal crew operation.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <p className="text-lg md:text-xl font-medium text-slate-900 tracking-tight">
                THE BEST FENDER IS NOT NECESSARILY THE LARGEST ONE. IT IS THE ONE THAT PROVIDES THE REQUIRED PROTECTION WHILE REMAINING PRACTICAL FOR THE CREW.
              </p>
            </div>
          </div>
        </section>

        {/* NEW BUILD, REPLACEMENT, REDESIGN OR REFURBISHMENT */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">NEW BUILD, REPLACEMENT, REDESIGN OR REFURBISHMENT</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-slate-900 mb-4">NEW CUSTOM SYSTEMS</h3>
                <p className="text-slate-600 font-light leading-relaxed">Complete development of a new Transom Fender system specifically for the yacht.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-slate-900 mb-4">REPLACEMENT FENDERS</h3>
                <p className="text-slate-600 font-light leading-relaxed">Reproduction of a lost or damaged fender using the yacht itself, existing references or 3D surveying.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-slate-900 mb-4">REDESIGN</h3>
                <p className="text-slate-600 font-light leading-relaxed">Improvement of an existing system when geometry, fixing, handling or finishing can be improved.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium text-slate-900 mb-4">REFURBISHMENT</h3>
                <p className="text-slate-600 font-light leading-relaxed">Assessment and refurbishment of existing Transom Fenders when their internal structure remains suitable for reuse.</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-slate-500 font-light italic">
                Refurbishment versus complete replacement can be assessed depending on the condition and amount of work required.
              </p>
            </div>
          </div>
        </section>

        {/* SELECTED PROJECTS */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 justify-center">
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">PORTFOLIO</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">SELECTED PROJECTS</h2>
              <p className="text-lg text-slate-300 font-light max-w-3xl mx-auto">
                A selection of custom Transom Fender systems developed for different yachts, geometries and operational requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Image 1 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-slate-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75fe1619-c893-4809-b223-d2c61a9f4f99_800w.jpg" alt="Selected Project 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              </div>
              {/* Image 2 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-slate-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e42a7ea-f8c9-41a1-a2d2-f0457102c13d_800w.jpg" alt="Selected Project 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              </div>
              {/* Image 3 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-slate-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f25a14e3-a2a0-4ddf-8e35-a43d1ccbf48f_800w.jpg" alt="Selected Project 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              </div>
              {/* Image 4 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-slate-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d0b6141-4999-4639-a22f-313fb9b85b21_800w.jpg" alt="Selected Project 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              </div>
              {/* Image 5 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-slate-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cd442d8-3542-4fb7-9cb0-9a51e92db3ed_800w.jpg" alt="Selected Project 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              </div>
              {/* Image 6 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-slate-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ec09544-fdde-47be-a14a-e8615725a513_800w.jpg" alt="Selected Project 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              </div>
              {/* Image 7 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-slate-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88ec900e-3a3c-40a7-bc00-c22274c8d98a_800w.jpg" alt="Selected Project 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              </div>
              {/* Image 8 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-slate-800">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de00a9b2-5ebb-442e-ad58-203961aaf9c0_800w.jpg" alt="Selected Project 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* WHY BODHIFENDERS */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">WHY BODHIFENDERS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight max-w-3xl mx-auto">
              ONE SPECIALIST TEAM, FROM YACHT GEOMETRY TO FINAL INSTALLATION.
            </h2>
            <p className="text-lg text-slate-600 font-light mb-16 max-w-3xl mx-auto">
              All key stages of the project are managed by one specialist team, giving us a complete understanding of the Transom Fender from yacht geometry and fixing interfaces through to manufacturing and final installation.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <iconify-icon icon="solar:ruler-angular-linear" className="text-blue-600 flex-shrink-0" width="24" height="24"></iconify-icon>
                <span className="font-medium text-slate-800">3D Surveying</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <iconify-icon icon="solar:cpu-bolt-linear" className="text-blue-600 flex-shrink-0" width="24" height="24"></iconify-icon>
                <span className="font-medium text-slate-800">Point-cloud Processing</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <iconify-icon icon="solar:monitor-camera-linear" className="text-blue-600 flex-shrink-0" width="24" height="24"></iconify-icon>
                <span className="font-medium text-slate-800">3D Design & Visualisation</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <iconify-icon icon="solar:pen-new-square-linear" className="text-blue-600 flex-shrink-0" width="24" height="24"></iconify-icon>
                <span className="font-medium text-slate-800">Custom Fender Engineering</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <iconify-icon icon="solar:settings-minimalistic-linear" className="text-blue-600 flex-shrink-0" width="24" height="24"></iconify-icon>
                <span className="font-medium text-slate-800">Fixing System Development</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <iconify-icon icon="solar:hammer-linear" className="text-blue-600 flex-shrink-0" width="24" height="24"></iconify-icon>
                <span className="font-medium text-slate-800">Specialist Manufacturing</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <iconify-icon icon="solar:star-fall-minimalistic-linear" className="text-blue-600 flex-shrink-0" width="24" height="24"></iconify-icon>
                <span className="font-medium text-slate-800">Premium Decking & Finishing</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <iconify-icon icon="solar:anchor-linear" className="text-blue-600 flex-shrink-0" width="24" height="24"></iconify-icon>
                <span className="font-medium text-slate-800">Onboard Installation</span>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL SECTION */}
        <section className="bg-slate-50 border-t border-slate-200 py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">PLANNING A TRANSOM FENDER PROJECT?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light max-w-2xl mx-auto">
              Whether you need a completely new system, replacement of a lost fender, redesign of an existing solution or refurbishment, send us photographs, drawings or information about your current setup. Our team can review the project and advise on the most appropriate next step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsAppLink("Transom Fender Project Enquiry")} className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all px-8 py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-green-900/20 inline-flex items-center justify-center gap-2">
                <iconify-icon icon="ic:baseline-whatsapp" width="20" height="20"></iconify-icon> DISCUSS YOUR PROJECT
              </a>
            </div>
          </div>
        </section>

        <div className="bg-slate-50 pb-8 flex justify-center">
          <Link to="/transom-fenders/technical" className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-300 hover:text-slate-600 transition-colors">
            Technical Area
          </Link>
        </div>
      </main>

      <Footer language="en" />
      
      <a href="https://wa.me/34653654342" target="_blank" rel="noopener noreferrer" className="group fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#20bd5a]" aria-label="Contact via WhatsApp">
        <iconify-icon icon="ic:baseline-whatsapp" width="32" height="32"></iconify-icon>
      </a>
    </div>
  );
}