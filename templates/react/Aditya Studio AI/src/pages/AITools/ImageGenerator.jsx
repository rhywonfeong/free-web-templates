import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Textarea } from '../../components/ui/Input';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setResultImage(null);

    // Simulate API call
    setTimeout(() => {
      // Pick a random unsplash image based on a keyword from prompt or fallback
      const keyword = prompt.split(' ')[0] || 'abstract';
      setResultImage(`https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=1200&q=80`);
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">AI Image Generator</h1>
        <p className="text-[#a1a1aa]">Describe the image you want, and AI will generate it for your thumbnails or B-roll.</p>
      </div>

      <Card>
        <Card.Body className="p-6">
          <div className="space-y-4">
            <Textarea 
              label="Image Prompt"
              placeholder="e.g. A futuristic city skyline at sunset, cyberpunk style, neon lights, highly detailed, 4k..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-32"
            />
            
            <div className="flex justify-between items-center">
              <div className="text-xs text-[#a1a1aa]">
                Tip: Be specific about style, lighting, and composition.
              </div>
              <Button 
                variant="ai" 
                icon="solar:magic-stick-3-linear" 
                onClick={handleGenerate}
                isLoading={isGenerating}
                disabled={!prompt.trim()}
              >
                Generate Image
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {(isGenerating || resultImage) && (
        <Card className="overflow-hidden border border-[#262626]/50 bg-black/40">
          <Card.Body className="p-6">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center relative border border-[#262626]">
              {isGenerating ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-[#262626] border-t-indigo-500 animate-spin"></div>
                  <p className="text-sm font-medium text-[#a1a1aa] animate-pulse-subtle">Dreaming up your vision...</p>
                </div>
              ) : (
                <>
                  <img src={resultImage} alt="Generated" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button variant="secondary" size="sm" icon="solar:download-linear">Download</Button>
                  </div>
                </>
              )}
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}