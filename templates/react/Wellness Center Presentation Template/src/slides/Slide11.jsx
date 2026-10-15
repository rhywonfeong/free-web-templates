import SlideWrapper from '../components/ui/SlideWrapper';
import Header from '../components/ui/Header';

export default function Slide11() {
  const breakdown = [
    { item: "Advanced Facilitator Training", cost: 12000 },
    { item: "Marketing & Advertising", cost: 15000 },
    { item: "Office Space & Setup", cost: 10000 },
    { item: "Studio Rental Fees", cost: 6000 },
    { item: "Technology License", cost: 2502 },
    { item: "Business Licensing", cost: 300 },
    { item: "Telecommunications (Phone)", cost: 1200 },
    { item: "Internet Services", cost: 600 },
    { item: "Legal & Professional Fees", cost: 1500 },
    { item: "Liability Insurance", cost: 500 },
    { item: "Transportation Fuel", cost: 4800 },
    { item: "Vehicle Insurance", cost: 1800 },
    { item: "Vehicle Allocation", cost: 4980 }
  ];

  const total = breakdown.reduce((sum, item) => sum + item.cost, 0);

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(num);
  };

  // Split into two columns for better layout
  const col1 = breakdown.slice(0, 7);
  const col2 = breakdown.slice(7);

  return (
    <SlideWrapper theme="light" className="bg-brand-light">
      <div className="w-full h-full flex flex-col px-24 py-16">
        <div className="flex justify-between items-end mb-10">
          <Header 
            theme="light"
            subtitle="Grant Application"
            title="Funding Request"
            className="mb-0"
          />
          <div className="text-right">
            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest block mb-2">Total Request</span>
            <span className="text-5xl font-serif text-brand-indigo tracking-tight">{formatCurrency(total)}</span>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-3xl shadow-xl shadow-brand-dark/5 border border-gray-100 p-10 flex gap-12">
          
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex justify-between border-b-2 border-brand-indigo pb-2 mb-2">
              <span className="font-bold text-brand-dark uppercase text-xs tracking-wider">Item Description</span>
              <span className="font-bold text-brand-dark uppercase text-xs tracking-wider">Amount</span>
            </div>
            {col1.map((row, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors px-2 rounded">
                <span className="text-brand-text-dark/80 font-medium">{row.item}</span>
                <span className="font-serif text-brand-dark">{formatCurrency(row.cost)}</span>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex justify-between border-b-2 border-brand-indigo pb-2 mb-2">
              <span className="font-bold text-brand-dark uppercase text-xs tracking-wider">Item Description</span>
              <span className="font-bold text-brand-dark uppercase text-xs tracking-wider">Amount</span>
            </div>
            {col2.map((row, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors px-2 rounded">
                <span className="text-brand-text-dark/80 font-medium">{row.item}</span>
                <span className="font-serif text-brand-dark">{formatCurrency(row.cost)}</span>
              </div>
            ))}
            
            {/* Visual Balance Empty Rows if needed */}
            <div className="flex-1 flex flex-col justify-end">
               <div className="flex justify-between py-4 mt-auto bg-brand-cream/50 px-4 rounded-lg border border-brand-gold/20">
                  <span className="text-brand-dark font-bold uppercase tracking-wider">Total Capital Required</span>
                  <span className="font-serif font-bold text-brand-indigo text-xl">{formatCurrency(total)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}