import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const allVideos = [
  { id: 1, title: 'How to build an AI app in 10 minutes', views: 12400, likes: 1200, comments: 84, date: 'Oct 24, 2023', visibility: 'Public', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80' },
  { id: 2, title: 'React 19 Changes Everything', views: 45100, likes: 4500, comments: 320, date: 'Oct 18, 2023', visibility: 'Public', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80' },
  { id: 3, title: 'My honest review of the M3 Max Macbook Pro', views: 89200, likes: 8900, comments: 1200, date: 'Oct 10, 2023', visibility: 'Public', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80' },
  { id: 4, title: 'Top 5 VS Code Extensions for 2024', views: 5600, likes: 450, comments: 23, date: 'Oct 05, 2023', visibility: 'Unlisted', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80' },
  { id: 5, title: 'Learning Rust as a JavaScript Developer', views: 0, likes: 0, comments: 0, date: 'Draft', visibility: 'Private', img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80' },
];

export default function Content() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = allVideos.filter(v => v.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight text-white">Channel Content</h1>
        <div className="flex gap-2">
          <Button variant="secondary" icon="solar:filter-linear">Filter</Button>
          <Button icon="solar:upload-linear">Upload Video</Button>
        </div>
      </div>

      <Card>
        <div className="p-4 border-b border-[#262626] flex gap-4 bg-[#1a1a1a]">
          <div className="w-full max-w-md relative">
            <iconify-icon icon="solar:magnifier-linear" class="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a]"></iconify-icon>
            <input 
              type="text" 
              placeholder="Search videos..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#262626] rounded-md py-1.5 pl-9 pr-3 text-sm focus:outline-none focus:border-indigo-500 text-white"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-[#a1a1aa] uppercase bg-[#1a1a1a] border-b border-[#262626]">
              <tr>
                <th className="px-6 py-4 font-medium w-12"><input type="checkbox" className="rounded bg-[#0a0a0a] border-[#262626]" /></th>
                <th className="px-6 py-4 font-medium">Video</th>
                <th className="px-6 py-4 font-medium">Visibility</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">Views</th>
                <th className="px-6 py-4 font-medium text-right">Comments</th>
                <th className="px-6 py-4 font-medium text-right">Likes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262626]">
              {filteredVideos.map((video) => (
                <tr key={video.id} className="hover:bg-[#262626]/30 transition-colors group">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded bg-[#0a0a0a] border-[#262626]" /></td>
                  <td className="px-6 py-4">
                    <div className="flex gap-4 items-start w-80">
                      <div className="w-32 h-18 shrink-0 bg-[#262626] rounded overflow-hidden relative">
                        <img src={video.img} alt="" className="w-full h-full object-cover" />
                        <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 text-[10px] rounded text-white font-medium">10:24</div>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white line-clamp-2 leading-tight mb-1 group-hover:text-indigo-400 transition-colors cursor-pointer">{video.title}</span>
                        <div className="flex gap-2 text-xs text-[#71717a] mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="hover:text-white">Edit</button>
                          <button className="hover:text-white">Analytics</button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1.5">
                      <iconify-icon 
                        icon={video.visibility === 'Public' ? 'solar:earth-linear' : video.visibility === 'Private' ? 'solar:lock-linear' : 'solar:link-linear'} 
                        class="text-[#a1a1aa]"
                      ></iconify-icon>
                      {video.visibility}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#a1a1aa]">{video.date}</td>
                  <td className="px-6 py-4 text-right">{video.views.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right">{video.comments.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right">{video.likes.toLocaleString()}</td>
                </tr>
              ))}
              {filteredVideos.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-[#a1a1aa]">
                    No videos found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}