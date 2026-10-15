import { useState } from 'react';

export default function Pitch() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    website: '',
    deckLink: '',
    description: '',
    context: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <iconify-icon icon="solar:check-read-linear" width="32"></iconify-icon>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Pitch received.</h2>
          <p className="text-zinc-500 mb-8">
            Thank you for sharing your materials. If the fit is clear, we will reach out to start the conversation shortly.
          </p>
          <button 
            onClick={() => {
              setIsSuccess(false);
              setFormData({ website: '', deckLink: '', description: '', context: '' });
            }}
            className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-12">
        <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4 block">Pitch us</span>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
          Send us the essentials.
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
          We prefer concise, decision-useful materials. If your company fits our focus, send us a short introduction, your website and a deck that explains the problem, product, market and traction clearly.
        </p>
        <p className="text-sm text-zinc-400 mt-4">
          A sharp 10-slide deck is more useful than a long narrative. We are looking for signal, not volume.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-50/50 p-8 md:p-12 rounded-2xl border border-zinc-100">
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-zinc-900 mb-2">Company website</label>
          <input 
            type="url" 
            id="website" 
            name="website"
            required
            value={formData.website}
            onChange={handleChange}
            placeholder="https://acme.inc"
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
          />
        </div>

        <div>
          <label htmlFor="deckLink" className="block text-sm font-medium text-zinc-900 mb-2">Pitch deck (URL)</label>
          <input 
            type="url" 
            id="deckLink" 
            name="deckLink"
            required
            value={formData.deckLink}
            onChange={handleChange}
            placeholder="Link to DocSend, Drive, etc."
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-zinc-900 mb-2">Short description of the problem, product and traction</label>
          <textarea 
            id="description" 
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all resize-y"
          ></textarea>
        </div>

        <div>
          <label htmlFor="context" className="block text-sm font-medium text-zinc-900 mb-2">Your current stage and fundraising context</label>
          <input 
            type="text" 
            id="context" 
            name="context"
            required
            value={formData.context}
            onChange={handleChange}
            placeholder="e.g., Pre-seed, raising PLN 2M"
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
          />
        </div>

        <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-500">
            If the fit is clear, the next conversation should be easy to start.
          </p>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-zinc-800 transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
          >
            {isSubmitting ? (
              <iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon>
            ) : (
              'Submit your pitch'
            )}
          </button>
        </div>
      </form>

      <div className="mt-12 text-center">
        <p className="text-sm text-zinc-400">
          For co-investment, partnership or expert collaboration inquiries, <a href="mailto:contact@epicventures.com" className="text-zinc-600 underline underline-offset-4 hover:text-zinc-900">contact us directly</a>.
        </p>
      </div>
    </div>
  );
}