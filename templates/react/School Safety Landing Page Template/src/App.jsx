import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white py-4 px-6 lg:px-12 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-[1.5rem] font-semibold tracking-tight">PeaceWonder</span>
          <span className="text-[1.1rem] font-medium text-teal-400">Schools</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[0.95rem] font-medium text-slate-300 hover:text-white transition-colors">Sign in</a>
          <a href="#" className="text-[0.95rem] font-medium text-slate-300 hover:text-white transition-colors">Request demo</a>
          <a href="#" className="bg-teal-500 hover:bg-teal-400 text-slate-900 text-[0.95rem] font-medium py-2 px-4 rounded-full transition-colors">Start free pilot</a>
        </div>
      </nav>

      {/* Hero Section (Dark) */}
      <header className="bg-slate-900 text-white pt-20 pb-24 px-6 lg:px-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 relative z-10">
            <div className="flex flex-col gap-2">
              <span className="text-teal-400 text-[0.85rem] font-semibold tracking-wider uppercase">EARLY WARNING. EVERY STUDENT. EVERY WEEK.</span>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-semibold tracking-tight text-white">
                The signs are always there.<br />
                <span className="text-slate-400">PeaceWonder helps you see them.</span>
              </h1>
            </div>
            
            <p className="text-[1.1rem] leading-relaxed text-slate-300 max-w-lg">
              A weekly early warning system for K-12 schools.<br />
              Designed for counselors. Built around clinical frameworks.<br />
              FERPA-compliant.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="bg-teal-500 hover:bg-teal-400 text-slate-900 text-[1.1rem] font-medium py-3 px-6 rounded-full transition-colors flex items-center gap-2">
                Start your free 6-cycle pilot
              </a>
              <a href="#" className="text-[1.1rem] font-medium text-slate-300 hover:text-white py-3 px-6 rounded-full border border-slate-700 hover:border-slate-500 transition-colors flex items-center gap-2">
                See how it works <iconify-icon icon="solar:alt-arrow-down-linear" width="16" height="16"></iconify-icon>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[0.85rem] text-slate-400 font-medium">
              <span className="flex items-center gap-2">
                <iconify-icon icon="solar:check-read-linear" className="text-teal-400" width="16" height="16"></iconify-icon> No credit card required
              </span>
              <span className="flex items-center gap-2">
                <iconify-icon icon="solar:check-read-linear" className="text-teal-400" width="16" height="16"></iconify-icon> FERPA-compliant
              </span>
            </div>
          </div>

          {/* Hero Graphic */}
          <div className="relative z-10 lg:pl-12">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm shadow-2xl">
              <h3 className="text-[0.95rem] text-slate-400 font-medium mb-6">Class overview — This week</h3>
              <div className="flex flex-col gap-5">
                {/* Student row A */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[0.85rem] font-medium">A</div>
                    <span className="text-[0.95rem] font-medium">Student A7F2</span>
                  </div>
                  <div className="flex gap-1.5 w-32">
                    <div className="h-2 flex-1 bg-red-500 rounded-full"></div>
                    <div className="h-2 flex-1 bg-red-500 rounded-full"></div>
                    <div className="h-2 flex-1 bg-red-500 rounded-full"></div>
                    <div className="h-2 flex-1 bg-slate-700 rounded-full"></div>
                  </div>
                  <span className="text-[0.85rem] font-medium text-red-400 bg-red-400/10 px-2 py-1 rounded-md">Red</span>
                </div>
                {/* Student row D */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[0.85rem] font-medium">D</div>
                    <span className="text-[0.95rem] font-medium">Student D8R1</span>
                  </div>
                  <div className="flex gap-1.5 w-32">
                    <div className="h-2 flex-1 bg-orange-400 rounded-full"></div>
                    <div className="h-2 flex-1 bg-orange-400 rounded-full"></div>
                    <div className="h-2 flex-1 bg-slate-700 rounded-full"></div>
                    <div className="h-2 flex-1 bg-slate-700 rounded-full"></div>
                  </div>
                  <span className="text-[0.85rem] font-medium text-orange-400 bg-orange-400/10 px-2 py-1 rounded-md">Orange</span>
                </div>
                {/* Student row B */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[0.85rem] font-medium">B</div>
                    <span className="text-[0.95rem] font-medium">Student B3K9</span>
                  </div>
                  <div className="flex gap-1.5 w-32">
                    <div className="h-2 flex-1 bg-teal-500 rounded-full"></div>
                    <div className="h-2 flex-1 bg-teal-500 rounded-full"></div>
                    <div className="h-2 flex-1 bg-teal-500 rounded-full"></div>
                    <div className="h-2 flex-1 bg-teal-500 rounded-full"></div>
                  </div>
                  <span className="text-[0.85rem] font-medium text-teal-400 bg-teal-400/10 px-2 py-1 rounded-md">Green</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <span className="text-[0.95rem] text-teal-400 font-medium">3 students need follow-up this cycle</span>
              </div>
            </div>
          </div>
          
          {/* Background gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-900/20 blur-[100px] rounded-full pointer-events-none"></div>
        </div>
      </header>

      {/* Stats Bar (Darker) */}
      <section className="bg-slate-950 py-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[0.85rem] font-semibold tracking-wider text-slate-500 uppercase">The Professional Context</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col gap-4">
              <div className="text-[3.2rem] font-semibold tracking-tight text-teal-400 leading-none">60%</div>
              <p className="text-[1.1rem] text-slate-300 leading-relaxed">
                Of school violence incidents showed warning signs that were observable but went unrecognized in the weeks prior.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col gap-4">
              <div className="text-[3.2rem] font-semibold tracking-tight text-orange-400 leading-none">1 in 5</div>
              <p className="text-[1.1rem] text-slate-300 leading-relaxed">
                Students experience a mental health challenge each year — most go unidentified until a crisis occurs.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col gap-4">
              <div className="text-[3.2rem] font-semibold tracking-tight text-red-400 leading-none">450:1</div>
              <p className="text-[1.1rem] text-slate-300 leading-relaxed">
                Average student-to-counselor ratio in U.S. public schools — the recommended ratio is 250:1.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col gap-4">
              <div className="text-[3.2rem] font-semibold tracking-tight text-teal-400 leading-none">77%</div>
              <p className="text-[1.1rem] text-slate-300 leading-relaxed">
                Of critical school incidents could have been prevented with earlier identification of at-risk behavioral patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial (Darker) */}
      <section className="bg-slate-950 py-24 px-6 border-b border-slate-800 flex justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center gap-8">
          <iconify-icon icon="solar:chat-square-quote-linear" className="text-teal-500/50" width="40" height="40"></iconify-icon>
          <p className="text-[clamp(1.5rem,3vw,2rem)] font-medium text-slate-200 leading-relaxed italic tracking-tight">
            "We had every piece of information we needed. It was in the records, in the interactions, in the behavior. We just didn't have a system that could see it all at once."
          </p>
          <span className="text-[1.1rem] text-slate-500 font-medium">— School counselor, Pacific Northwest, 2024</span>
        </div>
      </section>

      {/* How It Works (Light) */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4 items-center">
            <span className="text-[0.85rem] font-semibold tracking-wider text-teal-600 uppercase">HOW IT WORKS</span>
            <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-tight text-slate-900">A weekly early warning signal from every student.</h2>
            <p className="text-[1.1rem] text-slate-600 max-w-2xl">Embedded into the school week. Invisible to the child. Actionable for the adults who need it most.</p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connectors (Hidden on mobile) */}
            <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-slate-200 z-0"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-2">
                <iconify-icon icon="solar:book-2-linear" width="32" height="32"></iconify-icon>
              </div>
              <span className="text-[0.85rem] font-semibold text-teal-600">01</span>
              <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900">Teacher sets the theme</h3>
              <p className="text-[1.1rem] text-slate-600 leading-relaxed">Each week, a teacher selects a curriculum-aligned topic — History, Science, Climate, Civil Rights. That's the only input required.</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-2">
                <iconify-icon icon="solar:robot-linear" width="32" height="32"></iconify-icon>
              </div>
              <span className="text-[0.85rem] font-semibold text-teal-600">02</span>
              <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900">AI generates the assessment</h3>
              <p className="text-[1.1rem] text-slate-600 leading-relaxed">PeaceWonder builds 25 age-calibrated questions that look like a subject quiz but measure five behavioral risk dimensions beneath the surface.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-2">
                <iconify-icon icon="solar:users-group-rounded-linear" width="32" height="32"></iconify-icon>
              </div>
              <span className="text-[0.85rem] font-semibold text-teal-600">03</span>
              <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900">Students take a 4-minute quiz</h3>
              <p className="text-[1.1rem] text-slate-600 leading-relaxed">To every student, this is just a quiz. No clinical language. No awareness of assessment. They engage honestly because there's nothing to guard against.</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-2">
                <iconify-icon icon="solar:danger-triangle-linear" width="32" height="32"></iconify-icon>
              </div>
              <span className="text-[0.85rem] font-semibold text-teal-600">04</span>
              <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900">Educators receive a risk report</h3>
              <p className="text-[1.1rem] text-slate-600 leading-relaxed">Before the week ends, flagged students surface in the counselor's dashboard with dimension scores, weekly trends, and recommended next steps.</p>
            </div>
          </div>

          {/* Callout */}
          <div className="max-w-4xl mx-auto mt-8 p-8 border-l-4 border-teal-500 bg-slate-50 rounded-r-2xl">
            <p className="text-[1.1rem] text-slate-700 leading-relaxed font-medium">
              The student never knows they're being assessed for emotional risk. They see a history quiz. The counselor sees a pattern. The gap between those two experiences is the product.
            </p>
          </div>
        </div>
      </section>

      {/* Five Clinical Dimensions (Light) */}
      <section className="bg-white py-24 px-6 border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4 items-center">
            <span className="text-[0.85rem] font-semibold tracking-wider text-teal-600 uppercase">WHAT WE MEASURE</span>
            <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-tight text-slate-900">Five risk dimensions. Measured weekly. Tracked over time.</h2>
            <p className="text-[1.1rem] text-slate-600 max-w-2xl">Mapped to validated clinical frameworks including BASC-3, DESSA, CASEL, and SDQ.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Left Column (2 Cards) */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3 order-2 lg:order-1">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[0.85rem] font-medium rounded-full mb-4">DIMENSION 1</span>
                <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900 mb-3">Belonging</h3>
                <p className="text-[1.1rem] text-slate-600 leading-relaxed">Does the student feel connected and seen? Measures social inclusion, peer relationships, and sense of community.</p>
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[0.85rem] font-medium rounded-full mb-4">DIMENSION 2</span>
                <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900 mb-3">Safety</h3>
                <p className="text-[1.1rem] text-slate-600 leading-relaxed">Does the student feel safe — at home, at school, and online? Surfaces perceived threats, hypervigilance, and fear of harm.</p>
              </div>
            </div>

            {/* Center Column (Orbit SVG) */}
            <div className="w-full lg:w-1/3 flex justify-center py-8 order-1 lg:order-2">
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full orbit-pulse"></div>
                
                {/* Rotating Rings */}
                <div className="absolute w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] border border-dashed border-teal-500/30 rounded-full animate-[spin_45s_linear_infinite_reverse]"></div>
                <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] border border-dashed border-teal-500/40 rounded-full animate-[spin_60s_linear_infinite]"></div>
                
                {/* Center Silhouette */}
                <div className="relative z-10 w-24 h-24 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center">
                  <iconify-icon icon="solar:user-linear" className="text-teal-600" width="48" height="48"></iconify-icon>
                </div>

                {/* Static Dots & Labels Container */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[2%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mb-2"></div>
                    <span className="text-[0.85rem] font-semibold text-slate-500 uppercase tracking-wider">Belonging</span>
                  </div>
                  <div className="absolute top-[30%] -right-[5%] sm:right-[2%] flex flex-col items-center">
                    <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mb-2"></div>
                    <span className="text-[0.85rem] font-semibold text-slate-500 uppercase tracking-wider">Future</span>
                  </div>
                  <div className="absolute bottom-[10%] right-[10%] sm:right-[15%] flex flex-col items-center">
                    <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mb-2"></div>
                    <span className="text-[0.85rem] font-semibold text-slate-500 uppercase tracking-wider">Self-Worth</span>
                  </div>
                  <div className="absolute bottom-[10%] left-[10%] sm:left-[15%] flex flex-col items-center">
                    <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mb-2"></div>
                    <span className="text-[0.85rem] font-semibold text-slate-500 uppercase tracking-wider">Regulation</span>
                  </div>
                  <div className="absolute top-[30%] -left-[5%] sm:left-[2%] flex flex-col items-center">
                    <div className="w-2.5 h-2.5 bg-teal-500 rounded-full mb-2"></div>
                    <span className="text-[0.85rem] font-semibold text-slate-500 uppercase tracking-wider">Safety</span>
                  </div>
                </div>

                {/* Text Below Orbit */}
                <div className="absolute -bottom-16 sm:-bottom-12 flex flex-col items-center w-full text-center">
                  <span className="text-[1.5rem] font-medium tracking-tight text-slate-900 leading-none mb-1">The Child</span>
                  <span className="text-[0.95rem] text-slate-500">at the center of everything</span>
                </div>
              </div>
            </div>

            {/* Right Column (3 Cards) */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3 order-3 mt-16 lg:mt-0">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[0.85rem] font-medium rounded-full mb-4">DIMENSION 3</span>
                <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900 mb-3">Future Orientation</h3>
                <p className="text-[1.1rem] text-slate-600 leading-relaxed">Does the student imagine a positive future? Measures hope, goal-setting, and belief that things can improve. A collapse here is one of the strongest predictors of crisis.</p>
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[0.85rem] font-medium rounded-full mb-4">DIMENSION 4</span>
                <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900 mb-3">Emotional Regulation</h3>
                <p className="text-[1.1rem] text-slate-600 leading-relaxed">How does the student manage difficult emotions? Identifies emotional volatility, suppression, and withdrawal patterns.</p>
              </div>
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-[0.85rem] font-medium rounded-full mb-4">DIMENSION 5</span>
                <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900 mb-3">Self-Worth</h3>
                <p className="text-[1.1rem] text-slate-600 leading-relaxed">How does the student perceive their own value? Tracks self-perception, shame indicators, and vulnerability to destructive behaviors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Every Role (Dark) */}
      <section className="bg-slate-900 text-white py-24 px-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4 items-center">
            <span className="text-[0.85rem] font-semibold tracking-wider text-teal-400 uppercase">BUILT FOR EVERY ROLE</span>
            <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-tight text-white">Built for every role in the building.</h2>
            <p className="text-[1.1rem] text-slate-400 max-w-2xl">Different access levels. Different views. One shared mission: prevent harm before it happens.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Counselor Card */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                <iconify-icon icon="solar:user-check-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-[1.5rem] font-medium tracking-tight">Counselor</h3>
              <p className="text-[1.1rem] text-slate-400 leading-relaxed border-b border-slate-700/50 pb-6">Your caseload is impossible. PeaceWonder surfaces the students who need you most — this week, not after the crisis.</p>
              <ul className="flex flex-col gap-4 mt-2">
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Weekly risk dashboard with flagged students</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Trend analysis showing behavioral trajectory over weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Prioritized caseload recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Recommended follow-up actions per student</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Parent communication templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Documentation trail — every interaction recorded</span>
                </li>
              </ul>
            </div>

            {/* Teacher Card */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                <iconify-icon icon="solar:blackboard-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-[1.5rem] font-medium tracking-tight">Teacher</h3>
              <p className="text-[1.1rem] text-slate-400 leading-relaxed border-b border-slate-700/50 pb-6">You notice things. PeaceWonder turns those instincts into data you can act on.</p>
              <ul className="flex flex-col gap-4 mt-2">
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">One-click weekly quiz deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Class-level risk summary with flags</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Behavioral trend lines per student</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Frictionless — no training, 2 minutes per week</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">No clinical burden — counselors handle follow-up</span>
                </li>
              </ul>
            </div>

            {/* Admin Card */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                <iconify-icon icon="solar:buildings-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-[1.5rem] font-medium tracking-tight">Principal / Administrator</h3>
              <p className="text-[1.1rem] text-slate-400 leading-relaxed border-b border-slate-700/50 pb-6">You're responsible for building safety. PeaceWonder gives you a real-time risk picture — not incident counts after the fact.</p>
              <ul className="flex flex-col gap-4 mt-2">
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Building-wide risk heatmap</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Trend data across all classrooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Full audit trail of flags and follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Evidence-based documentation for district reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-read-linear" className="text-teal-400 shrink-0 mt-0.5" width="20" height="20"></iconify-icon>
                  <span className="text-[0.95rem] text-slate-300">Scalable across buildings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What it is and isn't (Light Slate) */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-teal-600 shadow-sm">
            <iconify-icon icon="solar:shield-check-linear" width="32" height="32"></iconify-icon>
          </div>
          <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-tight text-slate-900">What PeaceWonder is — and what it isn't.</h2>
          
          <p className="text-[1.1rem] text-slate-600 leading-relaxed">
            PeaceWonder is a risk-prevention and early-warning tool. It is not a clinical diagnostic instrument, a mental health counseling tool, or a replacement for a professional counselor's judgment. 
          </p>
          <p className="text-[1.1rem] text-slate-600 leading-relaxed">
            Our assessments surface behavioral risk patterns through curriculum-aligned questions embedded in academic context. These patterns are indicators — not diagnoses. Every follow-up action remains at the complete discretion of the school's trained professional staff.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[0.85rem] font-medium text-slate-600 shadow-sm">BASC-3</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[0.85rem] font-medium text-slate-600 shadow-sm">DESSA</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[0.85rem] font-medium text-slate-600 shadow-sm">CASEL</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[0.85rem] font-medium text-slate-600 shadow-sm">SDQ</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[0.85rem] font-medium text-slate-600 shadow-sm">FERPA Compliant</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[0.85rem] font-medium text-slate-600 shadow-sm">Student Data Anonymized</span>
            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[0.85rem] font-medium text-slate-600 shadow-sm">SOC2/SOC3 Readiness</span>
          </div>
        </div>
      </section>

      {/* Pricing (White) */}
      <section className="bg-white py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="text-center flex flex-col gap-4 items-center">
            <span className="text-[0.85rem] font-semibold tracking-wider text-teal-600 uppercase">PRICING</span>
            <h2 className="text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-tight text-slate-900">Start with zero risk.</h2>
            <p className="text-[1.1rem] text-slate-600 max-w-2xl">A free quiz system for an entire classroom — no payment required. One counselor. One class. See it work.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto w-full">
            {/* Free Tier */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col gap-6">
              <div>
                <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900">Circle</h3>
                <p className="text-[0.95rem] text-slate-500 mt-1">One counselor. Private watch group.</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[3.2rem] font-semibold tracking-tight text-teal-600 leading-none">Free</span>
                <span className="text-[1.1rem] text-slate-500">6 cycles</span>
              </div>
              <ul className="flex flex-col gap-4 mt-4 flex-1">
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">5–20 students</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Counselor-created groups</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Individual student profiles</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">AI risk narratives</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Email alerts</span></li>
                <li className="flex items-start gap-3 opacity-50"><iconify-icon icon="solar:close-circle-linear" className="text-slate-300 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-500">Class-wide quizzes</span></li>
              </ul>
              <a href="#" className="mt-4 w-full py-3 px-4 bg-white border border-slate-300 hover:border-slate-400 text-slate-900 text-[1.1rem] font-medium rounded-xl text-center transition-colors">
                Start free pilot
              </a>
            </div>

            {/* Pro Tier (Highlighted) */}
            <div className="bg-white border-2 border-slate-900 rounded-3xl p-8 flex flex-col gap-6 relative shadow-xl transform lg:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[0.85rem] font-medium px-4 py-1 rounded-full">
                Most popular
              </div>
              <div>
                <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900">Class</h3>
                <p className="text-[0.95rem] text-slate-500 mt-1">Weekly quizzes for your classroom.</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[3.2rem] font-semibold tracking-tight text-slate-900 leading-none">$14</span>
                <span className="text-[1.1rem] text-slate-500">/student/year</span>
              </div>
              <ul className="flex flex-col gap-4 mt-4 flex-1">
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-teal-500 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Unlimited classes</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-teal-500 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Weekly AI-generated quizzes</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-teal-500 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Full teacher + counselor access</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-teal-500 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Response distribution analytics</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-teal-500 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">6-week trend reports</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-teal-500 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Groups + Classes</span></li>
              </ul>
              <a href="#" className="mt-4 w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-[1.1rem] font-medium rounded-xl text-center transition-colors">
                Get started
              </a>
            </div>

            {/* Campus Tier */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col gap-6">
              <div>
                <h3 className="text-[1.5rem] font-medium tracking-tight text-slate-900">Campus</h3>
                <p className="text-[0.95rem] text-slate-500 mt-1">School-wide monitoring for principals.</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[3.2rem] font-semibold tracking-tight text-slate-900 leading-none">$10</span>
                <span className="text-[1.1rem] text-slate-500">/student/year</span>
              </div>
              <ul className="flex flex-col gap-4 mt-4 flex-1">
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Everything in Class</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Principal aggregate dashboard</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">District-level reporting</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Priority support</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Custom DPA</span></li>
                <li className="flex items-start gap-3"><iconify-icon icon="solar:check-read-linear" className="text-slate-400 shrink-0" width="20" height="20"></iconify-icon><span className="text-[0.95rem] text-slate-700">Volume pricing for districts</span></li>
              </ul>
              <a href="#" className="mt-4 w-full py-3 px-4 bg-white border border-slate-300 hover:border-slate-400 text-slate-900 text-[1.1rem] font-medium rounded-xl text-center transition-colors">
                Contact us
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-[1.1rem] text-slate-500 italic font-medium">"The hardest part of protecting students shouldn't be getting budget approval."</p>
          </div>
        </div>
      </section>

      {/* Final CTA (Dark) */}
      <section className="bg-slate-900 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight text-white leading-[1.1]">The next incident isn't inevitable.</h2>
          <p className="text-[1.1rem] text-slate-400 max-w-2xl leading-relaxed">
            The patterns were there before it happened. They're there right now, in your classrooms, waiting to be seen.
          </p>
          <a href="#" className="bg-teal-500 hover:bg-teal-400 text-slate-900 text-[1.1rem] font-medium py-4 px-8 rounded-full transition-colors mt-4">
            Start your free pilot today
          </a>
          <p className="text-[0.95rem] text-slate-500 font-medium mt-2">No credit card. No commitment. 6 free cycles.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 px-6 lg:px-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[1.5rem] font-semibold tracking-tight text-white">PeaceWonder</span>
              <span className="text-[1.1rem] font-medium text-teal-400">Schools</span>
            </div>
            <p className="text-[0.95rem] text-slate-500 mt-2">Building safety starts with emotional visibility.</p>
          </div>
          
          <div>
            <h4 className="text-[0.85rem] font-semibold text-slate-300 uppercase tracking-wider mb-6">Product</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[0.95rem] text-slate-500 hover:text-teal-400 transition-colors">How it works</a></li>
              <li><a href="#" className="text-[0.95rem] text-slate-500 hover:text-teal-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-[0.95rem] text-slate-500 hover:text-teal-400 transition-colors">Security</a></li>
              <li><a href="#" className="text-[0.95rem] text-slate-500 hover:text-teal-400 transition-colors">FERPA</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[0.85rem] font-semibold text-slate-300 uppercase tracking-wider mb-6">For Schools</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[0.95rem] text-slate-500 hover:text-teal-400 transition-colors">Request demo</a></li>
              <li><a href="#" className="text-[0.95rem] text-slate-500 hover:text-teal-400 transition-colors">Title I access</a></li>
              <li><a href="#" className="text-[0.95rem] text-slate-500 hover:text-teal-400 transition-colors">DPA</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[0.85rem] font-semibold text-slate-300 uppercase tracking-wider mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[0.95rem] text-slate-500 hover:text-teal-400 transition-colors">schools.peacewonder.com</a></li>
              <li><a href="#" className="text-[0.95rem] text-slate-500 hover:text-teal-400 transition-colors">support@schools.peacewonder.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.85rem] text-slate-600">© 2024 PeaceWonder. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-[0.85rem] text-slate-600 hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[0.85rem] text-slate-600 hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}