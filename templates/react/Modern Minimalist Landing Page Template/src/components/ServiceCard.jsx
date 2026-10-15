const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="group relative bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 hover:border-indigo-100 flex flex-col h-full">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
        <iconify-icon icon={icon} width="24" height="24"></iconify-icon>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
      
      <ul className="space-y-2 mt-auto pt-6 border-t border-slate-100">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="text-indigo-500 mt-0.5">
              <iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;