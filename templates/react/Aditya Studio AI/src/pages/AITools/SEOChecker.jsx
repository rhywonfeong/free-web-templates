import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input, Textarea } from '../../components/ui/Input';
import { clsx } from 'clsx';

export default function SEOChecker() {
  const [formData, setFormData] = useState({ title: '', description: '', tags: '' });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = () => {
    if (!formData.title) return;
    setIsAnalyzing(true);
    setResults(null);

    setTimeout(() => {
      // Mock analysis logic
      const titleLen = formData.title.length;
      const descLen = formData.description.length;
      
      let score = 85;
      let checks = [
        { id: 1, label: 'Title Length (40-60 chars is ideal)', passed: titleLen >= 40 && titleLen <= 60, detail: `Current: ${titleLen} chars.` },
        { id: 2, label: 'Description Length', passed: descLen > 200, detail: descLen < 200 ? 'Description is too short. Add more context.' : 'Good length.' },
        { id: 3, label: 'Keyword Presence in Title', passed: true, detail: 'Strong keywords detected.' },
        { id: 4, label: 'Hashtags in Description', passed: formData.description.includes('#'), detail: formData.description.includes('#') ? 'Hashtags found.' : 'Consider adding 3-5 relevant hashtags.' }
      ];

      if (titleLen < 40 || titleLen > 60) score -= 15;
      if (descLen < 200) score -= 10;
      if (!formData.description.includes('#')) score -= 5;

      setResults({ score: Math.max(0, score), checks });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">AI SEO Checker</h1>
          <p className="text-[#a1a1aa] text-sm">Optimize your metadata for YouTube's algorithm to maximize reach.</p>
        </div>

        <Card>
          <Card.Body className="p-6 space-y-5">
            <Input 
              label="Video Title" 
              placeholder="Enter your proposed video title..."
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              maxLength={100}
            />
            <div className="text-right text-[10px] text-[#71717a] -mt-4">{formData.title.length}/100</div>

            <Textarea 
              label="Video Description" 
              placeholder="Enter your video description..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="h-48"
            />

            <Input 
              label="Tags (comma separated)" 
              placeholder="e.g. react tutorial, web development, javascript"
              value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
            />

            <div className="pt-2">
              <Button 
                variant="ai" 
                className="w-full" 
                onClick={handleAnalyze}
                isLoading={isAnalyzing}
                disabled={!formData.title}
              >
                Analyze SEO Score
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="sticky top-24">
          <Card.Header>
            <Card.Title>Analysis Results</Card.Title>
          </Card.Header>
          <Card.Body className="p-6 min-h-[300px] flex flex-col">
            {!results && !isAnalyzing && (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-[#a1a1aa]">
                <iconify-icon icon="solar:chart-square-linear" width="48" height="48" class="mb-4 opacity-50"></iconify-icon>
                <p className="text-sm">Enter your metadata and run the analysis to see your SEO score.</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-[#262626] border-t-indigo-500 animate-spin"></div>
                <p className="text-sm text-[#a1a1aa] animate-pulse-subtle">Running NLP models...</p>
              </div>
            )}

            {results && !isAnalyzing && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#262626" strokeWidth="8" />
                      <circle 
                        cx="50" cy="50" r="45" fill="none" 
                        stroke={results.score >= 80 ? "#22c55e" : results.score >= 50 ? "#eab308" : "#ef4444"} 
                        strokeWidth="8" 
                        strokeDasharray={`${2 * Math.PI * 45}`}
                        strokeDashoffset={`${2 * Math.PI * 45 * (1 - results.score / 100)}`}
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-3xl font-bold text-white tracking-tighter">{results.score}</span>
                      <span className="text-[10px] text-[#a1a1aa] uppercase font-semibold">/ 100</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mt-4">
                    {results.score >= 80 ? 'Excellent!' : results.score >= 50 ? 'Needs Work' : 'Poor'}
                  </h3>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white border-b border-[#262626] pb-2">Checklist</h4>
                  {results.checks.map(check => (
                    <div key={check.id} className="flex gap-3 text-sm">
                      <iconify-icon 
                        icon={check.passed ? "solar:check-circle-bold" : "solar:close-circle-bold"} 
                        class={clsx("mt-0.5 shrink-0", check.passed ? "text-green-500" : "text-red-500")}
                        width="18"
                      ></iconify-icon>
                      <div>
                        <p className={clsx("font-medium", check.passed ? "text-[#e4e4e7]" : "text-red-400")}>{check.label}</p>
                        <p className="text-xs text-[#a1a1aa] mt-0.5">{check.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}