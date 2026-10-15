import React from 'react';

export default function About() {
  const features = [
    {
      title: 'Procedural Animation',
      description: 'The ocean waves are generated in real-time by animating the Z-axis of a high-segment plane geometry using overlaid sine and cosine functions driven by the elapsed time.',
      icon: 'solar:layers-minimalistic-linear'
    },
    {
      title: 'Dynamic Lighting',
      description: 'A DirectionalLight simulates the sun, mathematically orbiting the scene based on the "Time of Day" slider, smoothly interpolating background colors from dawn to dusk.',
      icon: 'solar:sun-fog-linear'
    },
    {
      title: 'Low Poly Aesthetic',
      description: 'Utilizing flatShading on standard materials gives the 3D meshes a stylized, sharp-edged appearance that looks modern and computes incredibly fast.',
      icon: 'solar:box-minimalistic-linear'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-12">
      <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-slate-100">
        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-50 text-blue-600 mb-6">
          <iconify-icon icon="solar:code-circle-linear" width="28" height="28"></iconify-icon>
        </div>
        
        <h1 className="text-4xl tracking-tight font-medium text-slate-900 mb-6">
          Behind the Canvas
        </h1>
        
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          This project demonstrates the powerful intersection of modern React patterns and WebGL rendering using standard Three.js. Instead of wrapping everything in heavy abstraction layers, the scene is managed via raw Three.js instantiated tightly within a standard React `useEffect` lifecycle, ensuring peak performance and total control.
        </p>

        <h2 className="text-2xl tracking-tight font-medium text-slate-900 mb-8">Technical Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-100">
                <iconify-icon icon={feature.icon} width="24" height="24"></iconify-icon>
              </div>
              <h3 className="font-medium text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
          <div className="space-y-1">
            <h4 className="font-medium text-slate-900">Built with Vite & React 18</h4>
            <p className="text-sm text-slate-500">Fast, modern, and production-ready architecture.</p>
          </div>
          <iconify-icon icon="simple-icons:react" width="32" height="32" className="text-slate-400"></iconify-icon>
        </div>
      </div>
    </div>
  );
}