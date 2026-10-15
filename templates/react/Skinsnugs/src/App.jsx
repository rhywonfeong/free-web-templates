import React from 'react';

export default function App() {
  return (
    <div className="font-sans antialiased text-[#5c504a] bg-[#fdfbf9] selection:bg-[#f4ece7] selection:text-[#5c504a] min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#fdfbf9]/80 backdrop-blur-md border-b border-[#f4ece7]">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-3xl flex items-baseline leading-none">
              <span className="text-[#a29492] font-sans font-normal">skin</span>
              <span className="text-[#e1b6b0] font-serif font-medium">snugs</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#shop" className="text-lg text-[#8a7f7a] hover:text-[#5c504a] transition-colors">
                Shop
              </a>
              <a href="#story" className="text-lg text-[#8a7f7a] hover:text-[#5c504a] transition-colors">
                Our Story
              </a>
              <a href="#faq" className="text-lg text-[#8a7f7a] hover:text-[#5c504a] transition-colors">
                FAQ
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#shop" className="hidden md:inline-flex items-center justify-center rounded-full bg-[#d99f98] px-6 py-2.5 text-base font-medium text-white hover:bg-[#c98e87] transition-colors">
              Get Yours
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full bg-[#f4ece7] px-4 py-1.5 text-sm font-semibold text-[#d99f98] ring-1 ring-inset ring-[#d99f98]/20 mb-8 uppercase tracking-wide">
                <iconify-icon icon="lucide:sparkles" className="w-4 h-4 mr-2" style={{ strokeWidth: 1.5 }}></iconify-icon>
                NO BRA NURSING PADS
              </div>
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-[#5c504a] leading-[1.1] mb-8">
                Ditch the bra.
                <br />
                Keep the comfort.
              </h1>
              <p className="text-xl lg:text-2xl text-[#8a7f7a] mb-10 leading-relaxed">
                The innovative nursing pad that sticks gently to your skin. Stop
                waking up to leaks and embrace true postpartum freedom—no bra
                required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-[#d99f98] px-8 py-4 text-lg font-medium text-white hover:bg-[#c98e87] transition-all shadow-sm hover:shadow-md">
                  Shop Skinsnugs
                  <iconify-icon icon="lucide:arrow-right" className="w-5 h-5 ml-2" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </a>
                <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full bg-white border border-[#f4ece7] px-8 py-4 text-lg font-medium text-[#5c504a] hover:bg-[#fdfbf9] transition-colors">
                  How it works
                </a>
              </div>
              <div className="mt-10 flex items-center gap-4 text-base text-[#8a7f7a]">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#f4ece7] border-2 border-[#fdfbf9] flex items-center justify-center text-xs font-medium text-[#8a7f7a]">
                    JS
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#d99f98]/20 border-2 border-[#fdfbf9] flex items-center justify-center text-xs font-medium text-[#d99f98]">
                    MK
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#e8ded6] border-2 border-[#fdfbf9] flex items-center justify-center text-xs font-medium text-[#5c504a]">
                    AL
                  </div>
                </div>
                <p>Loved by thousands of mothers.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#d99f98]/40 to-[#f4ece7]/60 rounded-[3rem] -z-10 blur-2xl opacity-50"></div>
              {/* Placeholder representing the multi-model image */}
              <div className="w-full">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dabeedb7-e10e-4783-8589-97bb0c6f6ec8_1600w.jpg" alt="Woman Holding SkinSnugs Nursing Pad" className="w-full h-auto rounded-3xl shadow-xl border border-[#f4ece7]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="shop" className="py-32 bg-[#fdfbf9] border-t border-[#f4ece7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#f4ece7] rounded-[3rem] p-8 lg:p-12 flex justify-center">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34b7fc1a-9344-4a5f-a122-5053d93aad01_1600w.jpg" alt="SkinSnugs Nursing Pads Product Packaging Mockup" className="w-full h-auto rounded-3xl shadow-xl border border-white" />
            </div>
            <div>
              <span className="text-base font-medium text-[#d99f98] tracking-wide uppercase mb-4 block">
                Shop
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#5c504a] mb-4">
                Skinsnugs Nursing Pads
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-medium text-[#5c504a]">$14.99</span>
                <span className="text-lg text-[#8a7f7a]">USD</span>
                <span className="inline-flex items-center rounded-full bg-[#f4ece7] px-3 py-1 text-sm font-semibold text-[#d99f98] ring-1 ring-inset ring-[#d99f98]/20 ml-2">
                  30 pieces / box
                </span>
              </div>
              <p className="text-xl text-[#8a7f7a] leading-relaxed mb-8">
                The first braless nursing pad designed for true postpartum
                freedom. Gentle on your skin, highly absorbent, and stays in place
                all night long without a restrictive bra.
              </p>
              <ul className="space-y-4 mb-10 text-lg text-[#8a7f7a]">
                <li className="flex items-center gap-3">
                  <iconify-icon icon="lucide:check" className="w-5 h-5 text-[#d99f98]" style={{ strokeWidth: 2 }}></iconify-icon>
                  Braless overnight comfort
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="lucide:check" className="w-5 h-5 text-[#d99f98]" style={{ strokeWidth: 2 }}></iconify-icon>
                  Gentle, skin-friendly adhesive
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="lucide:check" className="w-5 h-5 text-[#d99f98]" style={{ strokeWidth: 2 }}></iconify-icon>
                  Leak-proof absorbent core
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#d99f98] px-10 py-4 text-lg font-medium text-white hover:bg-[#c98e87] transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
                  Get it from Amazon
                  <iconify-icon icon="lucide:shopping-cart" className="w-5 h-5 ml-2" style={{ strokeWidth: 1.5 }}></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-32 bg-[#f4ece7]" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#5c504a] mb-6">
              Postpartum comfort, reimagined.
            </h2>
            <p className="text-xl text-[#8a7f7a]">
              We've engineered a solution to a problem that has existed for
              generations. Because you deserve to sleep comfortably.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            {/* Feature 1 */}
            <div className="bg-[#fdfbf9] rounded-3xl p-8 shadow-sm border border-white">
              <div className="w-14 h-14 rounded-2xl bg-[#f4ece7] flex items-center justify-center mb-8">
                <iconify-icon icon="lucide:moon" className="w-7 h-7 text-[#d99f98]" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#5c504a] mb-4">
                Sleep Braless
              </h3>
              <p className="text-lg text-[#8a7f7a] leading-relaxed">
                Finally, you can ditch the restrictive nighttime bra. Our pads
                adhere directly to your skin, staying securely in place all night
                long.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#fdfbf9] rounded-3xl p-8 shadow-sm border border-white">
              <div className="w-14 h-14 rounded-2xl bg-[#f4ece7] flex items-center justify-center mb-8">
                <iconify-icon icon="lucide:droplets" className="w-7 h-7 text-[#d99f98]" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#5c504a] mb-4">
                No More Leaks
              </h3>
              <p className="text-lg text-[#8a7f7a] leading-relaxed">
                A highly absorbent core catches every drop. Stop waking up wet,
                uncomfortable, and having to change your clothes three times a
                night.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#fdfbf9] rounded-3xl p-8 shadow-sm border border-white">
              <div className="w-14 h-14 rounded-2xl bg-[#f4ece7] flex items-center justify-center mb-8">
                <iconify-icon icon="lucide:heart" className="w-7 h-7 text-[#d99f98]" style={{ strokeWidth: 1.5 }}></iconify-icon>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#5c504a] mb-4">
                Gentle Adhesive
              </h3>
              <p className="text-lg text-[#8a7f7a] leading-relaxed">
                Developed carefully over months to be perfectly gentle on
                sensitive postpartum skin. Easy to apply and painless to remove.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="story" className="py-32 bg-[#fdfbf9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-base font-medium text-[#d99f98] tracking-wide uppercase mb-4 block">
              Founder Story
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#5c504a]">
              A problem passed down generations.
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-xl text-[#8a7f7a] leading-relaxed space-y-8">
            <p>
              When I had my first child, the joy was immense, but the nights were
              a constant struggle. I kept waking up with leaking breasts, soaking
              my clothes and the sheets. It was absolutely terrible to wake up wet
              in the middle of the night and have to change clothes three times
              before morning.
            </p>
            <p>
              The only solution available was to wear a bra to bed just so I could
              use traditional nursing pads. For me, that was a massive sacrifice
              of my comfort during an already exhausting postpartum period. I
              couldn't believe there wasn't a nursing pad that simply worked
              without a bra.
            </p>
            <div className="bg-[#f4ece7] rounded-3xl p-8 lg:p-10 my-12 border border-white">
              <p className="text-2xl font-medium tracking-tight text-[#5c504a] italic m-0 leading-snug">
                "When I told my mother about the solution I was building, she was
                amazed. She suffered from the exact same problem decades ago and
                assumed someone would have fixed it by now."
              </p>
            </div>
            <p>
              It felt like a silent struggle that women just accepted. I refused
              to accept it. I spent months developing Skinsnugs, testing and
              refining the gentle adhesive until I was completely satisfied. It is
              the first truly innovative nursing pad designed for the braless
              comfort that postpartum women desperately need.
            </p>
          </div>
          
          <div className="mt-8 mb-4">
            <p className="text-5xl text-[#5c504a] signature-font">Jessica</p>
          </div>
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b01f8f9e-a2f6-47fe-ae39-03b9285810de_1600w.png" alt="Mother and Daughter Posing on Sofa" className="w-full max-w-lg mx-auto block h-auto rounded-3xl shadow-2xl border-[12px] border-white mt-12" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-[#f4ece7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div>
              <div className="mb-12">
                <span className="text-base font-medium text-[#d99f98] tracking-wide uppercase mb-4 block">
                  FAQ
                </span>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#5c504a]">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-[#fdfbf9] rounded-3xl p-8 shadow-sm border border-white">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#5c504a] mb-4">
                    Is it skin friendly?
                  </h3>
                  <p className="text-lg text-[#8a7f7a] leading-relaxed">
                    Yes! Skinsnugs are dermatologically tested to ensure they are
                    perfectly gentle on sensitive postpartum skin. The adhesive is
                    designed to stay put all night but remove painlessly.
                  </p>
                </div>
                <div className="bg-[#fdfbf9] rounded-3xl p-8 shadow-sm border border-white">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#5c504a] mb-4">
                    Is it toxic for the baby?
                  </h3>
                  <p className="text-lg text-[#8a7f7a] leading-relaxed">
                    Obviously, there is nothing to worry about! We hold all the
                    necessary safety certificates. Our pads use 100% baby-safe,
                    non-toxic materials so you can nurse with complete peace of
                    mind.
                  </p>
                </div>
                <div className="bg-[#fdfbf9] rounded-3xl p-8 shadow-sm border border-white">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#5c504a] mb-4">
                    How long do they stay on?
                  </h3>
                  <p className="text-lg text-[#8a7f7a] leading-relaxed">
                    Skinsnugs are designed to stay securely in place for up to 12
                    hours, providing you with full overnight protection.
                  </p>
                </div>
                <div className="bg-[#fdfbf9] rounded-3xl p-8 shadow-sm border border-white">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#5c504a] mb-4">
                    Are they reusable?
                  </h3>
                  <p className="text-lg text-[#8a7f7a] leading-relaxed">
                    Currently, Skinsnugs are single-use for optimal hygiene and
                    absorbency. We are working on a reusable version in the
                    future!
                  </p>
                </div>
                <div className="bg-[#fdfbf9] rounded-3xl p-8 shadow-sm border border-white">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#5c504a] mb-4">
                    Do they work for heavy leakers?
                  </h3>
                  <p className="text-lg text-[#8a7f7a] leading-relaxed">
                    Absolutely. Our pads feature a multi-layer absorbent core
                    designed to handle heavy leakage, keeping you dry and
                    comfortable.
                  </p>
                </div>
                <div className="bg-[#fdfbf9] rounded-3xl p-8 shadow-sm border border-white">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#5c504a] mb-4">
                    Can I wear them during the day?
                  </h3>
                  <p className="text-lg text-[#8a7f7a] leading-relaxed">
                    Yes! While they are specifically designed for overnight
                    braless comfort, many mothers love wearing them during the day
                    under loose clothing for invisible, leak-proof protection.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 h-full">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6df8f4cf-1ac4-4ab8-b69b-81789ec2a90c_1600w.jpg" alt="Pregnant Woman Presenting No-Bra Nursing Pads" className="w-full flex-1 object-cover object-center rounded-3xl shadow-xl border border-white min-h-0" />
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b262dfc-575a-439f-8bf8-1a88c19546b6_1600w.jpg" alt="Diverse Women Presenting No Bra Nursing Pads" className="w-full flex-1 object-cover object-center rounded-3xl shadow-xl border border-white min-h-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#d99f98] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c98e87] to-[#d99f98]"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-8">
            Ready for a better night's sleep?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join the women who have already ditched their nighttime bras.
            Experience true postpartum comfort with Skinsnugs.
          </p>
          <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-xl font-medium text-[#d99f98] hover:bg-[#fdfbf9] transition-colors shadow-lg">
            Shop Now
            <iconify-icon icon="lucide:arrow-right" className="w-6 h-6 ml-3" style={{ strokeWidth: 1.5 }}></iconify-icon>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fdfbf9] py-12 border-t border-[#f4ece7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-3xl flex items-baseline leading-none">
            <span className="text-[#a29492] font-sans font-normal">skin</span>
            <span className="text-[#e1b6b0] font-serif font-medium">snugs</span>
          </div>
          <div className="flex items-center gap-8 text-lg text-[#8a7f7a]">
            <a href="#" className="hover:text-[#5c504a] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#5c504a] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#5c504a] transition-colors">Contact</a>
          </div>
          <div className="text-base text-[#8a7f7a]">
            © 2024 Skinsnugs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}