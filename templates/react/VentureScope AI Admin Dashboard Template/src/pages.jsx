import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { overviewStats, activityFeed, airflowDags, usersList, embeddingFails, knowledgeChunks, broadcastHistory } from './data';

// --- Shared Components ---
const Card = ({ children, className = "" }) => (
  <div className={`bg-zinc-900 border border-zinc-800 rounded-md p-4 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, colorClass }) => (
  <span className={`text-[11px] font-mono rounded-sm px-1.5 py-0.5 border ${colorClass}`}>
    {children}
  </span>
);

const StatusText = ({ status }) => {
  if (status === 'success' || status === 'active' || status === 'synced') return <span className="text-emerald-400 font-mono">✓ {status}</span>;
  if (status === 'failed' || status === 'offline') return <span className="text-red-400 font-mono">✗ {status}</span>;
  if (status === 'running' || status === 'pending' || status === 'online') return <span className="text-amber-400 font-mono">● {status}</span>;
  return <span className="text-zinc-500 font-mono">○ {status}</span>;
};

// --- Page 1: Overview ---
export function Overview() {
  const pieData = [
    { name: 'Success', value: 2400, color: '#34d399' },
    { name: 'Pending', value: 300, color: '#fbbf24' },
    { name: 'Failed', value: 113, color: '#f87171' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-4">
        {overviewStats.map((stat, i) => (
          <Card key={i} className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest text-zinc-500">{stat.label}</span>
            <span className="text-2xl font-mono font-semibold text-white">{stat.value}</span>
            <div className="mt-2 text-xs">
              {stat.isLink ? (
                <a href="#" className={`${stat.subtextColor} hover:underline`}>{stat.subtext}</a>
              ) : (
                <span className={stat.subtextColor}>{stat.subtext}</span>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7 flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-white">Recent Activity Feed</h2>
          <Card className="flex-1 overflow-hidden p-0">
            <div className="divide-y divide-zinc-800/50">
              {activityFeed.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 hover:bg-zinc-900/50 transition-colors">
                  <span className="text-zinc-500 font-mono text-xs w-12">{item.time}</span>
                  <Badge colorClass={item.color}>{item.action}</Badge>
                  <span className="text-zinc-300 text-sm font-mono">{item.actor}</span>
                  <iconify-icon icon="solar:arrow-right-linear" className="text-zinc-600" width="12"></iconify-icon>
                  <span className="text-zinc-400 text-sm font-mono truncate">{item.target}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="col-span-5 flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-white">Pipeline Health</h2>
          <Card className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value" stroke="none">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#d4d4d8', fontSize: '12px', fontFamily: 'IBM Plex Mono' }} itemStyle={{ color: '#d4d4d8' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full flex justify-center gap-6 mt-4 border-t border-zinc-800 pt-4">
              {pieData.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-zinc-400">{item.name}</span>
                  <span className="text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Row - Airflow */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">Airflow DAG Status</h2>
          <button className="border border-zinc-700 text-zinc-300 text-xs px-3 py-1.5 rounded-md hover:border-zinc-500 hover:text-white transition-colors flex items-center gap-2">
            Open Airflow Dashboard <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
          </button>
        </div>
        <div className="border border-zinc-800 rounded-md overflow-x-auto bg-zinc-950">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-zinc-500 bg-zinc-900 border-b border-zinc-800 font-mono">
              <tr>
                <th className="px-4 py-3 font-medium">DAG Name</th>
                <th className="px-4 py-3 font-medium">Last Run</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Duration</th>
                <th className="px-4 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 font-mono">
              {airflowDags.map((dag, i) => (
                <tr key={i} className="odd:bg-zinc-900/30 hover:bg-zinc-800/20">
                  <td className="px-4 py-3 text-zinc-300">{dag.name}</td>
                  <td className="px-4 py-3 text-zinc-500">{dag.lastRun}</td>
                  <td className="px-4 py-3"><StatusText status={dag.status} /></td>
                  <td className="px-4 py-3 text-zinc-400">{dag.duration}</td>
                  <td className="px-4 py-3">
                    <a href="#" className="text-zinc-400 hover:text-white text-xs flex items-center gap-1 w-fit">
                      Open in Airflow <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// --- Page 2: Directory ---
export function Directory() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Students', 'Professionals', 'B2B Clients', 'Admins', 'Unverified'];

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold text-white tracking-tight">User Directory</h1>
          <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs px-2 py-0.5 rounded-sm font-mono">2,847 users</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <iconify-icon icon="solar:magnifier-linear" className="absolute left-2.5 top-2 text-zinc-500" width="14"></iconify-icon>
            <input type="text" placeholder="Search email or ID..." className="bg-zinc-900 border border-zinc-800 rounded-md py-1.5 pl-8 pr-3 text-xs text-zinc-300 w-48 focus:outline-none focus:border-zinc-600 font-mono" />
          </div>
          <button className="border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs px-3 py-1.5 rounded-md flex items-center gap-2">
            Role: All <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
          </button>
          <button className="border border-emerald-800 text-emerald-400 text-xs px-3 py-1.5 rounded-md hover:bg-emerald-400/10 transition-colors flex items-center gap-2">
            <iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon> Invite User
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 border-b border-zinc-800">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm transition-colors ${activeTab === tab ? 'text-emerald-400 border-b-2 border-emerald-400 font-medium' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="border border-zinc-800 rounded-md overflow-x-auto bg-zinc-950">
        <table className="w-full text-sm text-left whitespace-nowrap">
          <thead className="text-xs text-zinc-500 bg-zinc-900 border-b border-zinc-800">
            <tr>
              <th className="px-4 py-3 w-8"><input type="checkbox" className="accent-emerald-400 bg-zinc-800 border-zinc-700 rounded-sm" /></th>
              <th className="px-4 py-3 font-medium">User</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Verified</th>
              <th className="px-4 py-3 font-medium">Joined</th>
              <th className="px-4 py-3 font-medium">Last Active</th>
              <th className="px-4 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {usersList.map((user, i) => (
              <tr key={i} className="odd:bg-zinc-900/30 hover:bg-zinc-800/30 cursor-pointer group transition-colors" onClick={() => setSelectedUser(user)}>
                <td className="px-4 py-3" onClick={e => e.stopPropagation()}><input type="checkbox" className="accent-emerald-400 bg-zinc-800 border-zinc-700 rounded-sm" /></td>
                <td className="px-4 py-3 flex flex-col">
                  <span className="text-zinc-200">{user.name}</span>
                  <span className="text-zinc-500 text-xs font-mono">{user.email}</span>
                </td>
                <td className="px-4 py-3"><Badge colorClass="bg-zinc-800 text-zinc-300 border-zinc-700">{user.role}</Badge></td>
                <td className="px-4 py-3"><StatusText status={user.status} /></td>
                <td className="px-4 py-3 text-zinc-400 font-mono text-center">{user.verified ? '✓' : '✗ pending'}</td>
                <td className="px-4 py-3 text-zinc-400 font-mono">{user.joined}</td>
                <td className="px-4 py-3 text-zinc-400 font-mono">{user.lastActive}</td>
                <td className="px-4 py-3 text-center">
                  <button className="text-zinc-500 hover:text-white px-2 py-1" onClick={e => e.stopPropagation()}>···</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Detail Drawer */}
      {selectedUser && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-[1px]" onClick={() => setSelectedUser(null)}></div>
          <div className={`fixed top-0 right-0 h-full w-[400px] bg-zinc-950 border-l border-zinc-800 z-50 flex flex-col shadow-2xl transition-transform duration-300 transform translate-x-0`}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
              <h2 className="text-base font-semibold text-white">User Detail</h2>
              <button onClick={() => setSelectedUser(null)} className="text-zinc-500 hover:text-white"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
            </div>
            
            <div className="p-5 flex-1 overflow-y-auto flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-medium text-white">{selectedUser.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-zinc-400 font-mono text-sm">{selectedUser.email}</span>
                  <Badge colorClass="bg-zinc-800 text-zinc-300 border-zinc-700">{selectedUser.role}</Badge>
                  <StatusText status={selectedUser.status} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-1">Identity</div>
                <div className="grid grid-cols-[100px_1fr] gap-1 text-sm">
                  <span className="text-zinc-500">User ID:</span><span className="font-mono text-zinc-300 flex justify-between">{selectedUser.id} <button className="text-zinc-500 hover:text-white">[copy]</button></span>
                  <span className="text-zinc-500">Joined:</span><span className="text-zinc-300">{selectedUser.joined}</span>
                  <span className="text-zinc-500">Last Login:</span><span className="text-zinc-300">{selectedUser.lastActive}</span>
                  <span className="text-zinc-500">IP:</span><span className="font-mono text-zinc-300">{selectedUser.ip}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-1">Verification</div>
                <div className="grid grid-cols-[100px_1fr] gap-1 text-sm font-mono mb-2">
                  <span className="text-zinc-500">Email:</span><span className={selectedUser.verified ? 'text-emerald-400' : 'text-red-400'}>{selectedUser.verified ? '✓ verified' : '✗ pending'}</span>
                  <span className="text-zinc-500">Profile:</span><span className="text-red-400">✗ incomplete</span>
                </div>
                {!selectedUser.verified && <button className="border border-zinc-700 text-zinc-300 text-xs py-1.5 rounded-md hover:bg-zinc-800 w-fit px-3">Mark as Verified</button>}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-1">
                  <span>Active Sessions ({selectedUser.sessions.length})</span>
                </div>
                {selectedUser.sessions.map((sess, i) => (
                  <div key={i} className="flex items-center justify-between text-sm font-mono bg-zinc-900 border border-zinc-800 p-2 rounded-md">
                    <span className="text-zinc-300">{sess.device}</span>
                    <span className="text-zinc-500">{sess.ip}</span>
                    <span className="text-zinc-500">{sess.time}</span>
                    <button className="text-red-400 hover:text-red-300 ml-2">[✕]</button>
                  </div>
                ))}
                {selectedUser.sessions.length > 0 && <button className="text-red-400 text-xs hover:underline w-fit mt-1">Force Logout All</button>}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1 mb-1">Embeddings</div>
                <div className="text-sm font-mono text-zinc-300 mb-2">Status: <StatusText status="synced" /> (Jan 14, 2025)</div>
                <button className="border border-zinc-700 text-zinc-300 text-xs py-1.5 rounded-md hover:bg-zinc-800 w-fit px-3">Re-embed Profile</button>
              </div>

            </div>
            
            <div className="p-5 border-t border-zinc-800 bg-zinc-900/50 flex gap-3">
              <button className="flex-1 border border-zinc-700 text-zinc-300 text-sm py-2 rounded-md hover:bg-zinc-800 transition-colors">Login as User</button>
              <button className="flex-1 border border-red-900/50 text-red-400 text-sm py-2 rounded-md hover:bg-red-950 transition-colors">Suspend Account</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// --- Page 3: Embeddings Monitor ---
export function Embeddings() {
  const [retrying, setRetrying] = useState({});

  const handleRetry = (i) => {
    setRetrying(prev => ({ ...prev, [i]: true }));
    setTimeout(() => {
      setRetrying(prev => ({ ...prev, [i]: false }));
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold text-white tracking-tight">Embedding Monitor</h1>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live refresh
          </div>
        </div>
        <button className="border border-red-800 text-red-400 text-xs px-3 py-1.5 rounded-md hover:bg-red-950 transition-colors">
          Retry All Failed
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-widest text-zinc-500">Total Indexed</span>
          <span className="text-2xl font-mono font-semibold text-emerald-400">2,813</span>
        </Card>
        <Card className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-widest text-zinc-500">Pending</span>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-mono font-semibold text-amber-400">34</span>
            <iconify-icon icon="solar:spinner-linear" className="text-amber-400 animate-spin" width="20"></iconify-icon>
          </div>
        </Card>
        <Card className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-widest text-zinc-500">Failed</span>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-mono font-semibold text-red-400">12</span>
            <button className="text-xs text-red-400 hover:underline">[Retry All]</button>
          </div>
        </Card>
      </div>

      <div className="border border-zinc-800 rounded-md overflow-x-auto bg-zinc-950">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-zinc-500 bg-zinc-900 border-b border-zinc-800 font-mono">
            <tr>
              <th className="px-4 py-3 font-medium">User</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Last Attempted</th>
              <th className="px-4 py-3 font-medium">Error</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 font-mono">
            {embeddingFails.map((fail, i) => (
              <tr key={i} className="odd:bg-zinc-900/30 hover:bg-zinc-800/20">
                <td className="px-4 py-3 text-zinc-300 font-sans">{fail.user}</td>
                <td className="px-4 py-3"><StatusText status={fail.status} /></td>
                <td className="px-4 py-3 text-zinc-500">{fail.lastAttempt}</td>
                <td className="px-4 py-3 text-red-400">{fail.error}</td>
                <td className="px-4 py-3 flex gap-2">
                  {fail.status === 'failed' && (
                     <>
                      <button className="text-zinc-400 hover:text-white px-2 py-1 border border-zinc-700 rounded text-xs bg-zinc-900">View</button>
                      <button 
                        onClick={() => handleRetry(i)}
                        className="text-amber-400 hover:text-amber-300 px-2 py-1 border border-amber-900/50 rounded text-xs bg-amber-950/20 w-16 text-center flex justify-center items-center"
                        disabled={retrying[i]}
                      >
                        {retrying[i] ? <iconify-icon icon="solar:spinner-linear" className="animate-spin"></iconify-icon> : 'Retry'}
                      </button>
                     </>
                  )}
                  {fail.status === 'pending' && <button className="text-zinc-500 hover:text-zinc-300 text-xs border border-zinc-800 rounded px-2 py-1">Cancel</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card>
        <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-mono">Error Frequency</h3>
        <div className="flex flex-col gap-3 font-mono text-sm">
          <div className="flex items-center gap-4">
            <span className="w-48 text-zinc-400">pgvector timeout:</span>
            <div className="h-4 bg-zinc-800 w-64 rounded-sm overflow-hidden flex"><div className="h-full bg-red-400/80 w-full"></div></div>
            <span className="text-zinc-300">7</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-48 text-zinc-400">profile_incomplete:</span>
            <div className="h-4 bg-zinc-800 w-64 rounded-sm overflow-hidden flex"><div className="h-full bg-amber-400/80 w-[57%]"></div></div>
            <span className="text-zinc-300">4</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-48 text-zinc-400">token_error:</span>
            <div className="h-4 bg-zinc-800 w-64 rounded-sm overflow-hidden flex"><div className="h-full bg-zinc-500/80 w-[14%]"></div></div>
            <span className="text-zinc-300">1</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

// --- Page 4: Knowledge Base ---
export function KnowledgeBase() {
  const [selectedChunk, setSelectedChunk] = useState(knowledgeChunks[0]);
  const [editContent, setEditContent] = useState(knowledgeChunks[0].content);
  const [isEdited, setIsEdited] = useState(false);

  const handleSelect = (chunk) => {
    setSelectedChunk(chunk);
    setEditContent(chunk.content);
    setIsEdited(false);
  };

  const handleContentChange = (e) => {
    setEditContent(e.target.value);
    if (!isEdited) setIsEdited(true);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Left List */}
      <div className="w-[300px] flex flex-col gap-4 border-r border-zinc-800 pr-4">
        <div className="flex items-center justify-between">
          <div className="relative w-full">
            <iconify-icon icon="solar:magnifier-linear" className="absolute left-2.5 top-2 text-zinc-500" width="14"></iconify-icon>
            <input type="text" placeholder="Search chunks..." className="w-full bg-zinc-900 border border-zinc-800 rounded-md py-1.5 pl-8 pr-3 text-xs text-zinc-300 focus:outline-none focus:border-zinc-600 font-mono" />
          </div>
        </div>
        <button className="w-full border border-dashed border-zinc-700 text-zinc-400 py-2 text-sm rounded-md hover:bg-zinc-900 hover:text-white transition-colors">+ New Chunk</button>
        
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-zinc-500 px-1">usr_01j4k — sarah@mit.edu</span>
            {knowledgeChunks.filter(c => c.user === 'sarah@mit.edu').map(chunk => (
              <div 
                key={chunk.id} 
                onClick={() => handleSelect(chunk)}
                className={`p-3 rounded-md border cursor-pointer transition-colors ${selectedChunk.id === chunk.id ? 'bg-zinc-900 border-zinc-700' : 'bg-transparent border-transparent hover:bg-zinc-900/50'}`}
              >
                <div className="text-sm font-medium text-zinc-200">{chunk.title}</div>
                <div className="text-xs text-zinc-500 truncate mt-1 font-mono">{chunk.preview}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-zinc-500 px-1">usr_02k9m — marcus@techcorp.io</span>
            {knowledgeChunks.filter(c => c.user === 'marcus@techcorp.io').map(chunk => (
              <div 
                key={chunk.id} 
                onClick={() => handleSelect(chunk)}
                className={`p-3 rounded-md border cursor-pointer transition-colors ${selectedChunk.id === chunk.id ? 'bg-zinc-900 border-zinc-700' : 'bg-transparent border-transparent hover:bg-zinc-900/50'}`}
              >
                <div className="text-sm font-medium text-zinc-200">{chunk.title}</div>
                <div className="text-xs text-zinc-500 truncate mt-1 font-mono">{chunk.preview}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Editor */}
      <div className="flex-1 flex flex-col">
        {selectedChunk ? (
          <div className="flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-md overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
              <span className="text-sm font-medium text-zinc-300">Editing: {selectedChunk.title} for {selectedChunk.user.split('@')[0]}</span>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs text-red-400 border border-red-900/30 rounded-md hover:bg-red-950/30 transition-colors">Delete</button>
                <button className="px-3 py-1.5 text-xs text-zinc-300 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors">Re-embed</button>
                <button 
                  className={`px-4 py-1.5 text-xs rounded-md transition-colors ${isEdited ? 'bg-emerald-500 text-zinc-950 font-semibold' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}`}
                  disabled={!isEdited}
                >
                  Save
                </button>
              </div>
            </div>

            {isEdited && (
              <div className="bg-amber-950 border-b border-amber-800 text-amber-300 text-xs p-2 flex items-center justify-center gap-2">
                <iconify-icon icon="solar:danger-triangle-linear" width="14"></iconify-icon>
                ⚠ Saving this chunk will trigger re-embedding. This action cannot be undone.
              </div>
            )}

            <textarea 
              value={editContent}
              onChange={handleContentChange}
              className="flex-1 w-full bg-zinc-900 text-zinc-300 p-6 resize-none focus:outline-none focus:ring-inset focus:ring-1 focus:ring-zinc-700 font-mono text-sm leading-relaxed"
              spellCheck="false"
            />

            <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex flex-col gap-2 font-mono text-xs">
              <div className="grid grid-cols-[150px_1fr]">
                <span className="text-zinc-500">Embedding status:</span>
                <span><StatusText status={selectedChunk.status} /> — <span className="text-zinc-400">{selectedChunk.date}</span></span>
              </div>
              <div className="grid grid-cols-[150px_1fr]">
                <span className="text-zinc-500">Tokens (approx):</span>
                <span className="text-zinc-300">{selectedChunk.tokens}</span>
              </div>
              <div className="grid grid-cols-[150px_1fr]">
                <span className="text-zinc-500">Vector dims:</span>
                <span className="text-zinc-300">{selectedChunk.dims}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-zinc-500 font-mono text-sm">
            Select a chunk to edit
          </div>
        )}
      </div>
    </div>
  );
}

// --- Page 5: Broadcasts ---
export function Broadcasts() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  
  const isFormValid = subject.length > 0 && body.length > 0;

  return (
    <div className="grid grid-cols-5 gap-8">
      {/* Compose */}
      <div className="col-span-3 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white tracking-tight">Send Platform Broadcast</h2>
          <div className="flex gap-2">
            <button className="border border-zinc-700 text-zinc-300 text-xs px-3 py-1.5 rounded-md hover:bg-zinc-800">Schedule</button>
            <button className={`text-xs px-4 py-1.5 rounded-md font-medium transition-colors ${isFormValid ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}`} disabled={!isFormValid}>Send Now</button>
          </div>
        </div>

        <Card className="flex flex-col gap-5">
          <div className="grid grid-cols-[80px_1fr] items-center gap-4">
            <label className="text-sm text-zinc-500 font-medium">To:</label>
            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-zinc-400"><input type="radio" name="to" className="accent-emerald-400 bg-zinc-900 border-zinc-700" /> All Users</label>
              <label className="flex items-center gap-2 cursor-pointer text-zinc-200"><input type="radio" name="to" defaultChecked className="accent-emerald-400 bg-zinc-900 border-zinc-700" /> By Role ▾</label>
              <label className="flex items-center gap-2 cursor-pointer text-zinc-400"><input type="radio" name="to" className="accent-emerald-400 bg-zinc-900 border-zinc-700" /> Specific Users</label>
            </div>
          </div>
          
          <div className="grid grid-cols-[80px_1fr] items-start gap-4">
            <div className="h-6"></div>
            <div className="flex gap-2">
              <span className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded-sm border border-zinc-700 flex items-center gap-1 font-mono">Students <button className="hover:text-white">×</button></span>
              <span className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded-sm border border-zinc-700 flex items-center gap-1 font-mono">B2B Clients <button className="hover:text-white">×</button></span>
            </div>
          </div>

          <div className="grid grid-cols-[80px_1fr] items-center gap-4">
            <label className="text-sm text-zinc-500 font-medium">Channel:</label>
            <div className="flex items-center gap-4 text-sm font-mono">
              <label className="flex items-center gap-2 cursor-pointer text-zinc-300"><input type="checkbox" defaultChecked className="accent-emerald-400 bg-zinc-900 border-zinc-700 rounded-sm" /> In-App</label>
              <label className="flex items-center gap-2 cursor-pointer text-zinc-300"><input type="checkbox" defaultChecked className="accent-emerald-400 bg-zinc-900 border-zinc-700 rounded-sm" /> Email</label>
              <label className="flex items-center gap-2 cursor-pointer text-zinc-500"><input type="checkbox" className="accent-emerald-400 bg-zinc-900 border-zinc-700 rounded-sm" /> Push</label>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-800 my-2"></div>

          <div className="grid grid-cols-[80px_1fr] items-center gap-4">
            <label className="text-sm text-zinc-500 font-medium">Subject:</label>
            <input 
              type="text" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-300 focus:outline-none focus:border-zinc-600 w-full"
              placeholder="Enter subject line..."
            />
          </div>

          <div className="grid grid-cols-[80px_1fr] items-start gap-4">
            <label className="text-sm text-zinc-500 font-medium mt-2">Body:</label>
            <div className="flex flex-col border border-zinc-800 rounded-md overflow-hidden bg-zinc-950">
              <div className="flex items-center gap-2 p-2 border-b border-zinc-800 bg-zinc-900">
                <button className="p-1 text-zinc-400 hover:text-white rounded hover:bg-zinc-800"><iconify-icon icon="solar:text-bold-linear" width="16"></iconify-icon></button>
                <button className="p-1 text-zinc-400 hover:text-white rounded hover:bg-zinc-800"><iconify-icon icon="solar:text-italic-linear" width="16"></iconify-icon></button>
                <div className="w-px h-4 bg-zinc-700 mx-1"></div>
                <button className="p-1 text-zinc-400 hover:text-white rounded hover:bg-zinc-800"><iconify-icon icon="solar:link-linear" width="16"></iconify-icon></button>
                <button className="p-1 text-zinc-400 hover:text-white rounded hover:bg-zinc-800"><iconify-icon icon="solar:list-linear" width="16"></iconify-icon></button>
              </div>
              <textarea 
                rows="8"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full bg-transparent p-3 text-sm text-zinc-300 resize-none focus:outline-none font-sans"
                placeholder="Write broadcast message..."
              ></textarea>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-2 pl-[96px]">
            <button className="text-xs text-zinc-400 hover:text-white flex items-center gap-1">Preview <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon></button>
            <span className="text-xs font-mono text-zinc-500">Recipient count: <strong className="text-emerald-400 font-normal">1,204 users</strong> will receive this</span>
          </div>
        </Card>
      </div>

      {/* History */}
      <div className="col-span-2 flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-white tracking-tight">Broadcast History</h2>
        <div className="border border-zinc-800 rounded-md overflow-hidden bg-zinc-950">
          <table className="w-full text-left">
            <thead className="text-[11px] uppercase tracking-widest text-zinc-500 bg-zinc-900 border-b border-zinc-800">
              <tr>
                <th className="px-4 py-3 font-medium">Subject</th>
                <th className="px-4 py-3 font-medium">Sent To</th>
                <th className="px-4 py-3 font-medium">Sent At</th>
                <th className="px-4 py-3 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-xs">
              {broadcastHistory.map((item, i) => (
                <tr key={i} className="hover:bg-zinc-900/30">
                  <td className="px-4 py-3 text-zinc-300 font-medium truncate max-w-[120px]">{item.subject}</td>
                  <td className="px-4 py-3 text-zinc-500 font-mono">{item.to}</td>
                  <td className="px-4 py-3 text-zinc-500 font-mono whitespace-nowrap">{item.sentAt}</td>
                  <td className="px-4 py-3 text-right font-mono whitespace-nowrap">
                    <span className="text-emerald-400">✓ sent {item.count}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// --- Page 6: Technical Health ---
export function TechHealth() {
  const workers = [
    { name: 'embedding-worker', status: 'online', queue: 12, heartbeat: '4s ago', tasks: '8.2' },
    { name: 'github-worker', status: 'online', queue: 3, heartbeat: '11s ago', tasks: '1.4' },
    { name: 'transcript-wrk', status: 'offline', queue: 0, heartbeat: '14m ago', tasks: '—' },
  ];

  const s3Folders = ['/profiles/', '/cvs/', '/transcripts/', '/exports/'];
  const s3Files = [
    { name: 'export_20250114.csv', size: '14.2 MB', modified: '2h ago' },
    { name: 'transcript_usr01j.json', size: '45 KB', modified: '5h ago' },
    { name: 'dump_full_20250101.tar.gz', size: '1.8 GB', modified: '14d ago' }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      {/* Section A */}
      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-white">Worker Status (Celery/Redis)</h2>
        <div className="border border-zinc-800 rounded-md overflow-x-auto bg-zinc-950">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-zinc-500 bg-zinc-900 border-b border-zinc-800 font-mono">
              <tr>
                <th className="px-4 py-3 font-medium">Worker</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Queue Depth</th>
                <th className="px-4 py-3 font-medium">Last Heartbeat</th>
                <th className="px-4 py-3 font-medium">Tasks/min</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 font-mono">
              {workers.map((w, i) => (
                <tr key={i} className="odd:bg-zinc-900/30 hover:bg-zinc-800/20">
                  <td className="px-4 py-3 text-zinc-300">{w.name}</td>
                  <td className="px-4 py-3"><StatusText status={w.status} /></td>
                  <td className="px-4 py-3 text-zinc-300">{w.queue}</td>
                  <td className="px-4 py-3 text-zinc-500">{w.heartbeat}</td>
                  <td className="px-4 py-3 text-zinc-400">{w.tasks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section B */}
      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-white">Vector DB Stats</h2>
        <Card className="flex flex-col gap-6 p-6">
          <div className="text-sm font-mono text-zinc-400">pgvector Index Health</div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 font-mono text-sm max-w-2xl">
            <div className="flex justify-between border-b border-zinc-800/50 pb-2">
              <span className="text-zinc-500">Total vectors:</span>
              <span className="text-zinc-300">2,813,441</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/50 pb-2">
              <span className="text-zinc-500">Index size:</span>
              <span className="text-zinc-300">1.2 GB</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/50 pb-2">
              <span className="text-zinc-500">Dimensions:</span>
              <span className="text-zinc-300">1,536</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/50 pb-2">
              <span className="text-zinc-500">Avg query:</span>
              <span className="text-zinc-300">18ms</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/50 pb-2">
              <span className="text-zinc-500">Last VACUUM:</span>
              <span className="text-zinc-300">2h ago</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/50 pb-2">
              <span className="text-zinc-500">Index type:</span>
              <span className="text-zinc-300">ivfflat</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button className="border border-zinc-700 text-zinc-300 text-xs px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors font-sans">Run VACUUM</button>
            <button className="border border-zinc-800 bg-zinc-900 text-zinc-400 text-xs px-4 py-2 rounded-md hover:text-white transition-colors font-sans">View Index Stats</button>
          </div>
        </Card>
      </div>

      {/* Section C */}
      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-white">Storage Browser (S3)</h2>
        <div className="border border-zinc-800 rounded-md flex h-64 bg-zinc-950 overflow-hidden">
          <div className="w-1/3 border-r border-zinc-800 bg-zinc-900/50 p-4 flex flex-col gap-2 overflow-y-auto font-mono text-sm">
            <div className="text-zinc-500 text-xs mb-2">Buckets / Venturescope-prod</div>
            {s3Folders.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 cursor-pointer py-1 px-2 rounded hover:bg-zinc-800/50">
                <iconify-icon icon="solar:folder-with-files-linear" width="16"></iconify-icon> {f}
              </div>
            ))}
          </div>
          <div className="w-2/3 flex flex-col overflow-y-auto">
            <table className="w-full text-left">
              <thead className="text-[11px] uppercase tracking-widest text-zinc-500 bg-zinc-900 border-b border-zinc-800 sticky top-0">
                <tr>
                  <th className="px-4 py-2 font-medium">Name</th>
                  <th className="px-4 py-2 font-medium">Size</th>
                  <th className="px-4 py-2 font-medium">Modified</th>
                  <th className="px-4 py-2 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 font-mono text-xs">
                {s3Files.map((f, i) => (
                  <tr key={i} className="hover:bg-zinc-900/30">
                    <td className="px-4 py-3 text-zinc-300 flex items-center gap-2"><iconify-icon icon="solar:document-linear" className="text-zinc-500"></iconify-icon> {f.name}</td>
                    <td className="px-4 py-3 text-zinc-500">{f.size}</td>
                    <td className="px-4 py-3 text-zinc-500">{f.modified}</td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-zinc-400 hover:text-white border border-zinc-700 bg-zinc-900 px-2 py-1 rounded">Copy URL</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}