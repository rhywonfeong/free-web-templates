import React from 'react';

const Faq = () => {
  return (
    <section className="py-20 max-w-3xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full border text-xs mb-4 font-medium border-white/10 bg-white/5 text-gray-300">
          Support
        </div>
        <h2 className="text-4xl font-medium tracking-tight">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <details className="group bg-[#111111] border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden open:border-white/10 border-white/5">
          <summary className="flex items-center justify-between p-6 cursor-pointer font-medium select-none transition-colors text-white hover:bg-white/5">
            <span>How does the integration work?</span>
            <span className="transition-transform duration-200 group-open:rotate-180 text-gray-500">
              <iconify-icon icon="solar:alt-arrow-down-linear" width="20" height="20"></iconify-icon>
            </span>
          </summary>
          <div className="px-6 pb-6 text-sm font-light leading-relaxed text-gray-400">
            Our platform connects directly with your existing financial accounts via secure API. We support over 50+ integrations including Plaid, Stripe, and PayPal to ensure your data is always up-to-date and accurate.
          </div>
        </details>

        {/* FAQ Item 2 */}
        <details className="group bg-[#111111] border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden open:border-white/10 border-white/5">
          <summary className="flex items-center justify-between p-6 cursor-pointer font-medium select-none transition-colors text-white hover:bg-white/5">
            <span>Is my data secure?</span>
            <span className="transition-transform duration-200 group-open:rotate-180 text-gray-500">
              <iconify-icon icon="solar:alt-arrow-down-linear" width="20" height="20"></iconify-icon>
            </span>
          </summary>
          <div className="px-6 pb-6 text-sm font-light leading-relaxed text-gray-400">
            Security is our top priority. We use bank-grade encryption (AES-256) and never sell your personal data. We are SOC2 compliant and regularly audited by third-party security firms.
          </div>
        </details>

        {/* FAQ Item 3 */}
        <details className="group bg-[#111111] border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden open:border-white/10 border-white/5">
          <summary className="flex items-center justify-between p-6 cursor-pointer font-medium select-none transition-colors text-white hover:bg-white/5">
            <span>Can I export my reports?</span>
            <span className="transition-transform duration-200 group-open:rotate-180 text-gray-500">
              <iconify-icon icon="solar:alt-arrow-down-linear" width="20" height="20"></iconify-icon>
            </span>
          </summary>
          <div className="px-6 pb-6 text-sm font-light leading-relaxed text-gray-400">
            Yes, you can export all your reports in CSV, PDF, or Excel formats. You can also schedule automated email reports to be sent to your team or accountant on a weekly or monthly basis.
          </div>
        </details>

        {/* FAQ Item 4 */}
        <details className="group bg-[#111111] border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden open:border-white/10 border-white/5">
          <summary className="flex items-center justify-between p-6 cursor-pointer font-medium select-none transition-colors text-white hover:bg-white/5">
            <span>What happens after the trial ends?</span>
            <span className="transition-transform duration-200 group-open:rotate-180 text-gray-500">
              <iconify-icon icon="solar:alt-arrow-down-linear" width="20" height="20"></iconify-icon>
            </span>
          </summary>
          <div className="px-6 pb-6 text-sm font-light leading-relaxed text-gray-400">
            If you don't upgrade to a paid plan, your account will automatically switch to our Free tier. You won't lose any data, but access to premium features like advanced analytics and team members will be locked.
          </div>
        </details>
      </div>
    </section>
  );
};

export default Faq;