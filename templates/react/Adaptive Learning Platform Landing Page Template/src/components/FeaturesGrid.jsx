import React from 'react';
import { BookOpen, Brain, Activity, Compass } from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={20} className="text-emerald-700" />,
    title: "Cognitive Mapping",
    description: "Deep-tier neural pathways ensuring concept retention across interconnected subjects."
  },
  {
    icon: <Brain size={20} className="text-emerald-700" />,
    title: "Knowledge Retention",
    description: "Evidence-based spaced repetition with algorithmic review cycles tailored to each student."
  },
  {
    icon: <Activity size={20} className="text-emerald-700" />,
    title: "Real-time Feedback",
    description: "Sub-second evaluation pathways designed to correct misconceptions instantly during lessons."
  },
  {
    icon: <Compass size={20} className="text-emerald-700" />,
    title: "Personalized Paths",
    description: "Adaptive difficulty components allowing seamless vertical growth based on performance."
  }
];

const FeaturesGrid = () => {
  return (
    <div className="bg-slate-100 border-t border-emerald-900/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-emerald-900/10">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 md:p-10 group hover:bg-slate-50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-emerald-900/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-lime-50 group-hover:border-lime-200">
              {feature.icon}
            </div>
            <h4 className="text-lg font-semibold tracking-tight text-emerald-950 mb-3">{feature.title}</h4>
            <p className="text-sm text-emerald-800/60 leading-relaxed font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;