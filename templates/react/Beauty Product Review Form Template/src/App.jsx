import { useState, useEffect } from 'react';

const RatingGroup = ({ name, label, icon, leftLabel, rightLabel, value, onChange, required = false }) => {
  return (
    <div>
      <label className="flex items-center text-base font-normal mb-3 text-zinc-800">
        <iconify-icon icon={icon} width="20" height="20" class="mr-2 text-zinc-400"></iconify-icon>
        {label}
      </label>
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num} className="relative flex cursor-pointer">
            <input
              type="radio"
              name={name}
              value={num}
              className="peer sr-only"
              required={required && num === 1} // Only set required on the first radio of a group
              checked={value === String(num)}
              onChange={onChange}
            />
            <div className="w-full flex items-center justify-center py-2.5 rounded-lg border bg-white text-base font-normal peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 transition-all duration-200 border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus-visible:ring-zinc-900">
              {num}
            </div>
          </label>
        ))}
      </div>
      <div className="flex justify-between text-sm mt-2 px-1 text-zinc-400">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    email: '',
    TextureRating: '',
    PackagingRating: '',
    SmellRating: '',
    EffectRating: '',
    FeedbackComments: ''
  });
  
  const [isEmailReadonly, setIsEmailReadonly] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Parse URL parameters to auto-fill email, mirroring the source HTML script
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get('email') || urlParams.get('_kx');
    
    if (emailParam) {
      setFormData(prev => ({ ...prev, email: emailParam }));
      if (emailParam.includes('@')) {
        setIsEmailReadonly(true);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission success
    setIsSubmitted(true);
  };

  return (
    <div className="sm:p-8 md:py-16 pt-4 pr-4 pb-4 pl-4 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full max-w-xl mx-auto bg-white rounded-2xl border shadow-sm overflow-hidden border-zinc-200">
        
        {/* Header Section */}
        <div className="px-6 py-8 sm:px-10 sm:py-10 border-b bg-white text-center border-zinc-100">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5feef13b-77da-4ad0-b9a4-71b3b24ded39_320w.png" 
            alt="Mai Nami Logo" 
            className="h-12 w-auto mx-auto mb-4 object-contain" 
          />
          <h1 className="sm:text-3xl text-2xl tracking-tight mb-2 font-bold text-[#782616]">
            How did you like the Hair Pudding?
          </h1>
          <p className="text-base max-w-sm mx-auto text-zinc-500">
            Your feedback goes directly to our product team to help us perfect the formula.
          </p>
        </div>

        {/* Dynamic Content: Form OR Success Message */}
        {isSubmitted ? (
          <div className="p-6 sm:p-10">
            <div className="text-base font-normal border p-4 rounded-xl text-center mb-4 text-zinc-800 bg-zinc-50 border-zinc-200">
              Thank you for your feedback! Your responses have been saved.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="flex items-center text-base font-normal text-zinc-800 mb-3">
                <iconify-icon icon="solar:letter-linear" width="20" height="20" class="mr-2 text-zinc-400"></iconify-icon>
                Email Address
              </label>
              <input 
                type="email" 
                name="email" 
                id="email"
                required 
                value={formData.email}
                onChange={handleChange}
                readOnly={isEmailReadonly}
                className={`focus:outline-none focus:ring-2 transition-all duration-200 focus:ring-zinc-900/10 focus:border-zinc-900 placeholder-black text-base text-zinc-900 w-full border-zinc-200 border rounded-xl pt-3.5 pr-3.5 pb-3.5 pl-3.5 shadow-sm ${
                  isEmailReadonly ? 'bg-zinc-50 text-black cursor-not-allowed' : 'bg-white'
                }`}
                placeholder="Enter your email" 
              />
            </div>

            {/* Texture Rating */}
            <RatingGroup 
              name="TextureRating"
              label="Texture"
              icon="solar:magic-stick-3-linear"
              leftLabel="Needs work"
              rightLabel="Perfect"
              required={true}
              value={formData.TextureRating}
              onChange={handleChange}
            />

            {/* Packaging Rating */}
            <RatingGroup 
              name="PackagingRating"
              label="Packaging"
              icon="solar:box-linear"
              leftLabel="Impractical"
              rightLabel="Beautiful & easy"
              required={true}
              value={formData.PackagingRating}
              onChange={handleChange}
            />

            {/* Smell Rating */}
            <RatingGroup 
              name="SmellRating"
              label="Smell"
              icon="solar:wind-linear"
              leftLabel="Too strong/weak"
              rightLabel="Just right"
              required={true}
              value={formData.SmellRating}
              onChange={handleChange}
            />

            {/* Finished Effect Rating */}
            <RatingGroup 
              name="EffectRating"
              label="Finished Effect on Hair"
              icon="solar:stars-linear"
              leftLabel="Not what I wanted"
              rightLabel="Looks amazing"
              required={true}
              value={formData.EffectRating}
              onChange={handleChange}
            />

            <hr className="border-zinc-100" />

            {/* Comments */}
            <div>
              <label htmlFor="FeedbackComments" className="flex items-center text-base font-normal mb-2 text-zinc-800">
                <iconify-icon icon="solar:document-text-linear" width="20" height="20" class="mr-2 text-zinc-400"></iconify-icon>
                Any additional thoughts?
              </label>
              <textarea 
                id="FeedbackComments" 
                name="FeedbackComments" 
                rows="3" 
                value={formData.FeedbackComments}
                onChange={handleChange}
                className="w-full bg-white border rounded-xl p-3.5 text-base focus:outline-none focus:ring-2 transition-all duration-200 resize-none shadow-sm border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-zinc-900/10 focus:border-zinc-900" 
                placeholder="Tell us what you loved or what could be better..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="flex transition-all duration-200 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-[#782616]/90 focus-visible:ring-[#782616] text-base font-normal text-white font-dm-sans bg-[#782616] w-full rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 shadow-sm items-center justify-center"
              >
                Submit Responses
                <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" class="ml-2 opacity-70"></iconify-icon>
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}