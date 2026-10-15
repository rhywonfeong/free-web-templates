import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ViewPrediction() {
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState('10');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generatePrediction = () => {
    if (!topic) return;
    setIsLoading(true);
    
    setTimeout(() => {
      // Generate realistic looking bell curve/viral decay curve data
      const baseViews = Math.random() * 50000 + 10000;
      const mockData = Array.from({ length: 14 }, (_, i) => {
        const day = i + 1;
        // Logic for view velocity over days
        let views = 0;
        if (day === 1) views = baseViews * 0.4;
        else if (day === 2) views = baseViews * 0.8;
        else if (day === 3) views = baseViews; // peak
        else views = baseViews * Math.pow(0.8, day - 3); // decay
        
        return {
          day: `Day ${day}`,
          predicted: Math.round(views),
          average: Math.round(15000 * Math.pow(0.85, day)) // channel avg decay
        };
      });
      
      setData(mockData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">View Prediction Engine</h1>
        <p className="text-[#a1a1aa]">Predict the first 14 days of performance based on historical channel data and topic trends.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <Card.Header>
            <Card.Title>Parameters</Card.Title>
          </Card.Header>
          <Card.Body className="p-5 space-y-4">
            <Input 
              label="Video Topic / Concept" 
              placeholder="e.g. Next.js App Router Tutorial"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            
            <div>
              <label className="block text-sm font-medium text-[#e4e4e7] mb-1.5">Expected Duration (mins)</label>
              <select 
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-[#171717] border border-[#262626] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              >
                <option value="5">Short (&lt; 5 mins)</option>
                <option value="10">Standard (8-12 mins)</option>
                <option value="20">Long (15-25 mins)</option>
                <option value="60">Documentary (30+ mins)</option>
              </select>
            </div>

            <Button 
              variant="ai" 
              className="w-full mt-4" 
              onClick={generatePrediction}
              isLoading={isLoading}
              disabled={!topic}
            >
              Run Prediction
            </Button>
          </Card.Body>
        </Card>

        <Card className="lg:col-span-3">
          <Card.Header className="flex items-center justify-between">
            <Card.Title>14-Day Forecast</Card.Title>
            {data && (
              <span className="text-xs font-medium bg-green-500/20 text-green-400 px-2 py-1 rounded">
                High Confidence
              </span>
            )}
          </Card.Header>
          <Card.Body className="p-6 h-[400px] flex flex-col">
            {!data && !isLoading ? (
               <div className="flex-1 flex flex-col items-center justify-center text-[#71717a]">
                 <iconify-icon icon="solar:graph-up-linear" width="48" class="mb-4 opacity-30"></iconify-icon>
                 <p className="text-sm">Enter parameters to see the predicted view trajectory.</p>
               </div>
            ) : isLoading ? (
               <div className="flex-1 flex items-center justify-center">
                 <div className="flex flex-col items-center gap-3">
                   <div className="w-10 h-10 rounded-full border-4 border-[#262626] border-t-indigo-500 animate-spin"></div>
                   <p className="text-sm text-[#a1a1aa] animate-pulse-subtle">Analyzing search volume & trends...</p>
                 </div>
               </div>
            ) : (
              <div className="w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#71717a" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#71717a" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                    <XAxis dataKey="day" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value >= 1000 ? (value/1000).toFixed(1) + 'k' : value}`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="average" name="Channel Avg" stroke="#71717a" strokeWidth={2} fillOpacity={1} fill="url(#colorAvg)" />
                    <Area type="monotone" dataKey="predicted" name="Predicted Views" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorPredicted)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}