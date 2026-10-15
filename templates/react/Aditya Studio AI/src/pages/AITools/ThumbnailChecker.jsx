import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function ThumbnailChecker() {
  const [image, setImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setResult(null);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult({
        ctr: (Math.random() * (12 - 4) + 4).toFixed(1),
        emotion: 'High Curiosity',
        contrast: 'Excellent',
        textReadability: 'Needs Improvement'
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Thumbnail CTR Predictor</h1>
        <p className="text-[#a1a1aa]">Upload your thumbnail before publishing to predict its Click-Through Rate.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Card.Header>
            <Card.Title>Upload Thumbnail</Card.Title>
          </Card.Header>
          <Card.Body className="p-6">
            {!image ? (
              <div 
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border-2 border-dashed border-[#3f3f46] hover:border-indigo-500 hover:bg-[#262626]/30 transition-all rounded-xl aspect-video flex flex-col items-center justify-center cursor-pointer text-center p-6"
                onClick={() => {
                  // Simulate file select
                  setImage('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80');
                  setResult(null);
                }}
              >
                <iconify-icon icon="solar:upload-square-linear" width="48" height="48" class="text-[#71717a] mb-4"></iconify-icon>
                <p className="text-sm font-medium text-white mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-[#71717a]">SVG, PNG, JPG or GIF (max. 5MB)</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden aspect-video border border-[#262626]">
                  <img src={image} alt="Thumbnail preview" className="w-full h-full object-cover" />
                  {isAnalyzing && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                      <iconify-icon icon="solar:scanner-linear" width="48" class="text-indigo-500 animate-pulse-subtle mb-4"></iconify-icon>
                      <div className="w-32 h-1 bg-[#262626] rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 animate-[pulse_1s_ease-in-out_infinite] w-1/2 rounded-full"></div>
                      </div>
                    </div>
                  )}
                  {result && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                  )}
                </div>
                <div className="flex justify-between">
                  <Button variant="ghost" size="sm" onClick={() => setImage(null)} disabled={isAnalyzing}>Remove</Button>
                  <Button variant="ai" onClick={handleAnalyze} isLoading={isAnalyzing} disabled={result}>
                    Predict Performance
                  </Button>
                </div>
              </div>
            )}
          </Card.Body>
        </Card>

        <Card className={!result && !isAnalyzing ? 'opacity-50 pointer-events-none' : ''}>
          <Card.Header>
            <Card.Title>Prediction Results</Card.Title>
          </Card.Header>
          <Card.Body className="p-6">
            {result ? (
              <div className="space-y-6">
                <div className="text-center p-6 bg-[#1a1a1a] rounded-xl border border-[#262626]">
                  <p className="text-sm text-[#a1a1aa] mb-1 font-medium uppercase tracking-wider">Estimated CTR</p>
                  <div className="text-5xl font-bold text-white tracking-tighter mb-2">
                    {result.ctr}%
                  </div>
                  <p className="text-xs text-green-400">Above average for your channel</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-white border-b border-[#262626] pb-2">Analysis Breakdown</h4>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#a1a1aa]">Emotion Detected</span>
                    <span className="font-medium text-white bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded">{result.emotion}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#a1a1aa]">Color Contrast</span>
                    <span className="font-medium text-green-400">{result.contrast}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#a1a1aa]">Text Readability</span>
                    <span className="font-medium text-amber-400">{result.textReadability}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center text-[#71717a] min-h-[250px]">
                <iconify-icon icon="solar:chart-2-linear" width="48" class="mb-4 opacity-30"></iconify-icon>
                <p className="text-sm">Upload a thumbnail and run prediction to see stats.</p>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}