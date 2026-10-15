import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SlideRenderer from './SlideRenderer';

export default function PrintView() {
  const navigate = useNavigate();

  useEffect(() => {
    // Slight delay to ensure images load before opening print dialog
    const timer = setTimeout(() => {
      window.print();
    }, 1000);

    // Optional: return to presentation after printing dialog closes
    const handleAfterPrint = () => {
      navigate('/slide/1');
    };
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [navigate]);

  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="fixed inset-0 bg-brand-dark z-50 flex flex-col items-center justify-center text-brand-gold no-print">
        <iconify-icon icon="solar:printer-bold-duotone" width="64" class="mb-6 animate-pulse"></iconify-icon>
        <h2 className="font-serif text-3xl mb-2">Preparing Presentation</h2>
        <p className="text-white/60">Please wait while the print dialog opens...</p>
        <p className="text-white/40 text-sm mt-4">For best results, save as PDF in Landscape mode with no margins.</p>
        <button 
          onClick={() => navigate('/slide/1')}
          className="mt-8 px-6 py-2 border border-brand-gold/30 rounded text-white hover:bg-brand-gold/10 transition-colors"
        >
          Cancel
        </button>
      </div>
      
      {/* Hidden container that renders all slides for printing */}
      <div className="print-container">
        <SlideRenderer isPrintMode={true} />
      </div>
    </div>
  );
}