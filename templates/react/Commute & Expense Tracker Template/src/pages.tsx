import React, { useState, useEffect } from 'react';
import { useApp, Button, Input, Label, Card, Badge, cn } from './App';
import * as api from './lib/data';
import { Building2, Info, AlertCircle, Plus, Trash2, CheckCircle2, Download, Car, TrainFront, Briefcase, Euro, FileSpreadsheet } from 'lucide-react';

// --- AUTH & ONBOARDING ---

const Login = () => {
  const { setUser } = useApp();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    const res = await api.login(email);
    if (res.error) setError(res.error);
    else if (res.user) setUser(res.user);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-600">
            <Building2 strokeWidth={1.5} size={28} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Sign in to NovaCommute</h2>
          <p className="mt-2 text-sm text-gray-600">Internal expense tracking tool</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>Email address</Label>
            <Input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="name@company.nl" />
          </div>
          {error && <div className="text-red-600 text-sm flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{error}</div>}
          <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Button>
        </form>
        <div className="mt-6 text-center text-xs text-gray-500">
          Demo accounts: lars@company.nl (Emp), admin@company.nl (Admin)
        </div>
      </Card>
    </div>
  );
};

const Onboarding = () => {
  const { user, setUser } = useApp();
  const [name, setName] = useState('');
  const [dept, setDept] = useState<api.Department>('');
  const [loading, setLoading] = useState(false);

  if (!user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const updated = await api.updateUser(user.id, { name, department: dept, hasOnboarded: true });
    setUser(updated);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <Card className="max-w-md w-full p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Welcome aboard!</h2>
        <p className="text-sm text-gray-600 mb-8">Let's get your profile set up before you start tracking commutes.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label>Full Name</Label>
            <Input required value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Daan Visser" />
          </div>
          <div>
            <Label>Department</Label>
            <select required value={dept} onChange={e => setDept(e.target.value as api.Department)} className="block w-full rounded-md border-gray-300 py-2 px-3 text-sm border focus:border-indigo-500 focus:ring-indigo-500">
              <option value="" disabled>Select department</option>
              {['Sales', 'Finance', 'Engineering', 'HR', 'Operations'].map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>Complete Setup</Button>
        </form>
      </Card>
    </div>
  );
};

// --- EMPLOYEE PAGES ---

const EmployeeDashboard = () => {
  const { user, setUser } = useApp();
  const [entries, setEntries] = useState<api.Entry[]>([]);
  const [summary, setSummary] = useState({ totalKm: 0, totalAmount: 0, entriesCount: 0 });
  const [announcement, setAnnouncement] = useState<api.Announcement | null>(null);
  const [loading, setLoading] = useState(true);
  const isLocked = user?.activeMonthStatus !== 'draft';

  useEffect(() => {
    if (!user) return;
    Promise.all([api.getEntries(user.id), api.getMonthSummary(user.id), api.getAnnouncement()]).then(([ents, sum, ann]) => {
      setEntries(ents); setSummary(sum); setAnnouncement(ann); setLoading(false);
    });
  }, [user]);

  const handleSubmitMonth = async () => {
    if (!user) return;
    await api.submitMonth(user.id);
    setUser({ ...user, activeMonthStatus: 'submitted' });
  };

  if (loading || !user) return <div className="text-center py-10 text-gray-500">Loading dashboard...</div>;

  return (
    <div className="space-y-6">
      {announcement?.isActive && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-md flex items-start text-sm">
          <Info className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <div className="flex-1">{announcement.message}</div>
          <button onClick={() => setAnnouncement(null)} className="text-blue-500 hover:text-blue-700 font-medium ml-4">&times;</button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Current Month Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Review your commutes and submit for reimbursement.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Status</span>
            <Badge status={user.activeMonthStatus} />
          </div>
          <Button onClick={handleSubmitMonth} disabled={isLocked || summary.entriesCount === 0} className="h-10">
            {isLocked ? 'Month Submitted' : 'Submit Month'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-none shadow-md hover:shadow-lg transition-shadow">
          <Euro className="w-8 h-8 mb-3 opacity-80" strokeWidth={1.5} />
          <div className="text-3xl font-bold tracking-tight">€{summary.totalAmount.toFixed(2)}</div>
          <div className="text-indigo-100 text-sm font-medium mt-1">Total Payout</div>
        </Card>
        <Card className="p-6 flex flex-col justify-center items-center text-center">
          <Car className="w-8 h-8 mb-3 text-gray-400" strokeWidth={1.5} />
          <div className="text-3xl font-bold text-gray-900 tracking-tight">{summary.totalKm}</div>
          <div className="text-gray-500 text-sm font-medium mt-1">Kilometers Driven</div>
        </Card>
        <Card className="p-6 flex flex-col justify-center items-center text-center">
          <FileSpreadsheet className="w-8 h-8 mb-3 text-gray-400" strokeWidth={1.5} />
          <div className="text-3xl font-bold text-gray-900 tracking-tight">{summary.entriesCount}</div>
          <div className="text-gray-500 text-sm font-medium mt-1">Logged Entries</div>
        </Card>
      </div>

      <Card>
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Recent Entries</h3>
        </div>
        {entries.length === 0 ? (
          <div className="p-8 text-center text-gray-500 text-sm">No entries yet. Go to the Calendar to log your commutes.</div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {entries.slice(-5).reverse().map(e => (
              <li key={e.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div>
                  <div className="font-medium text-gray-900 text-sm flex items-center gap-2">
                    {new Date(e.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    <span className="text-xs text-gray-500 font-normal px-2 py-0.5 bg-gray-100 rounded-md capitalize">{e.kind.replace('_', ' ')}</span>
                  </div>
                  {e.note && <div className="text-xs text-gray-500 mt-1">{e.note}</div>}
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900 text-sm">€{e.amount.toFixed(2)}</div>
                  <div className="text-xs text-gray-500">{e.distance} km</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};

const EmployeeCalendar = () => {
  const { user } = useApp();
  const [entries, setEntries] = useState<api.Entry[]>([]);
  const [selectedDates, setSelectedDates] = useState<Set<string>>(new Set());
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!user) return;
    setIsLocked(user.activeMonthStatus !== 'draft');
    api.getEntries(user.id).then(setEntries);
  }, [user]);

  const toggleDate = (dateStr: string) => {
    if (isLocked) return;
    const next = new Set(selectedDates);
    if (next.has(dateStr)) next.delete(dateStr);
    else next.add(dateStr);
    setSelectedDates(next);
  };

  const handleBulkInsert = async () => {
    if (!user || selectedDates.size === 0) return;
    for (const date of selectedDates) {
      if (!entries.some(e => e.date === date)) {
         await api.saveEntry({ userId: user.id, date, kind: 'round_trip', note: '' });
      }
    }
    setSelectedDates(new Set());
    api.getEntries(user.id).then(setEntries);
  };

  const handleDelete = async (id: string) => {
    await api.deleteEntry(id);
    api.getEntries(user!.id).then(setEntries);
  };

  // Build a simple 35-day grid for the current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay(); // 0 is Sunday
  const days = Array.from({ length: 42 }, (_, i) => {
    const dayNum = i - firstDay + 1;
    if (dayNum > 0 && dayNum <= daysInMonth) {
      return `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
    }
    return null;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Commute Calendar</h1>
          <p className="text-sm text-gray-500 mt-1">Select days to bulk-insert round trips, or click existing entries to edit.</p>
        </div>
        {selectedDates.size > 0 && (
          <Button onClick={handleBulkInsert} className="animate-in fade-in zoom-in duration-200">
            Insert {selectedDates.size} days
          </Button>
        )}
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
            <div key={d} className="bg-gray-50 py-2 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">{d}</div>
          ))}
          {days.map((dateStr, i) => {
            if (!dateStr) return <div key={i} className="bg-white min-h-[100px] p-2" />;
            
            const dayEntries = entries.filter(e => e.date === dateStr);
            const isSelected = selectedDates.has(dateStr);
            const isToday = dateStr === today.toISOString().split('T')[0];

            return (
              <div 
                key={dateStr} 
                onClick={() => dayEntries.length === 0 && toggleDate(dateStr)}
                className={cn(
                  "bg-white min-h-[100px] p-2 relative group transition-colors",
                  dayEntries.length === 0 && !isLocked && "cursor-pointer hover:bg-indigo-50",
                  isSelected && "bg-indigo-50 ring-2 ring-inset ring-indigo-500"
                )}
              >
                <div className={cn("text-sm font-medium mb-1 w-6 h-6 flex items-center justify-center rounded-full", isToday ? "bg-indigo-600 text-white" : "text-gray-900")}>
                  {parseInt(dateStr.split('-')[2])}
                </div>
                <div className="space-y-1">
                  {dayEntries.map(e => (
                    <div key={e.id} className="text-xs bg-green-50 text-green-700 p-1.5 rounded border border-green-200 flex justify-between items-center group/item relative">
                      <span className="truncate pr-4" title={`${e.kind} - €${e.amount}`}>€{e.amount.toFixed(2)}</span>
                      {!isLocked && (
                        <button onClick={(ev) => { ev.stopPropagation(); handleDelete(e.id); }} className="absolute right-1 opacity-0 group-hover/item:opacity-100 text-green-800 hover:text-red-600 transition-opacity">
                          <Trash2 size={12} />
                        </button>
                      )}
                    </div>
                  ))}
                  {isSelected && <div className="text-xs text-indigo-600 font-medium text-center animate-pulse">+ Trip</div>}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

const EmployeeProfile = () => {
  const { user, setUser } = useApp();
  const [address, setAddress] = useState(user?.homeAddress || '');
  const [settings, setSettings] = useState<api.Settings | null>(null);
  const [cards, setCards] = useState<api.TransportCard[]>([]);
  const [selectedCardId, setSelectedCardId] = useState(user?.selectedCardId || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    api.getSettings().then(setSettings);
    api.getTransportCards().then(setCards);
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true); setSuccess('');
    const updated = await api.updateUser(user.id, { homeAddress: address, selectedCardId: selectedCardId || null });
    setUser(updated);
    setSuccess('Profile updated successfully.');
    setLoading(false);
    setTimeout(() => setSuccess(''), 3000);
  };

  if (!user || !settings) return null;

  const simulatedKm = Math.max(2, Math.floor(address.length * 1.5));
  const isEligible = simulatedKm > settings.thresholdKm;

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Your Profile</h1>
      
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Commute Settings</h3>
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <Label>Home Address</Label>
            <Input value={address} onChange={e => setAddress(e.target.value)} placeholder="Street, City" />
            {address && (
              <div className="mt-2 text-sm flex flex-col gap-1 p-3 bg-gray-50 rounded-md border border-gray-100">
                <div className="flex justify-between text-gray-600"><span>Calculated One-Way:</span> <span className="font-medium text-gray-900">{simulatedKm} km</span></div>
                <div className="flex justify-between text-gray-600"><span>Calculated Round-Trip:</span> <span className="font-medium text-gray-900">{simulatedKm * 2} km</span></div>
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
                  <span className="text-gray-600">10km Rule Status:</span>
                  {isEligible ? (
                    <span className="text-green-600 font-medium flex items-center text-xs"><CheckCircle2 className="w-3 h-3 mr-1" /> Eligible for payout</span>
                  ) : (
                    <span className="text-orange-600 font-medium flex items-center text-xs"><AlertCircle className="w-3 h-3 mr-1" /> Not eligible (≤{settings.thresholdKm}km)</span>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <Label>Alternative Transport Card (Optional)</Label>
            <p className="text-xs text-gray-500 mb-3">Claim a monthly public transport card instead of per-km driving allowance.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div onClick={() => setSelectedCardId('')} className={cn("p-4 border rounded-lg cursor-pointer transition-all", !selectedCardId ? "border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500" : "border-gray-200 hover:border-indigo-300")}>
                <div className="font-medium text-gray-900 text-sm">None</div>
                <div className="text-xs text-gray-500 mt-1">I drive or bike</div>
              </div>
              {cards.map(c => (
                <div key={c.id} onClick={() => setSelectedCardId(c.id)} className={cn("p-4 border rounded-lg cursor-pointer transition-all", selectedCardId === c.id ? "border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500" : "border-gray-200 hover:border-indigo-300")}>
                  <div className="font-medium text-gray-900 text-sm">{c.name}</div>
                  <div className="text-xs text-gray-500 mt-1">€{c.monthlyAmount}/mo</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t">
            <Button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save Changes'}</Button>
            {success && <span className="text-sm text-green-600 font-medium animate-in fade-in">{success}</span>}
          </div>
        </form>
      </Card>

      <Card className="p-6 bg-gray-50 border-dashed">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Need help?</h3>
        <p className="text-sm text-gray-600">If your address calculation seems wrong, please contact HR at <a href={`mailto:${settings.supportEmail}`} className="text-indigo-600 hover:underline">{settings.supportEmail}</a>.</p>
      </Card>
    </div>
  );
};

// --- ADMIN PAGES ---

const AdminEmployees = () => {
  const [users, setUsers] = useState<api.User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getUsers().then(us => { setUsers(us.filter(u => u.role === 'employee')); setLoading(false); });
  }, []);

  const handleApprove = async (id: string) => {
    await api.approveMonth(id);
    api.getUsers().then(us => setUsers(us.filter(u => u.role === 'employee')));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Employees Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Review and approve monthly submissions.</p>
        </div>
        <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export CSV</Button>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(u => (
                <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{u.name || 'Unnamed'}</div>
                    <div className="text-sm text-gray-500">{u.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{u.department || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><Badge status={u.activeMonthStatus} /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {u.activeMonthStatus === 'submitted' ? (
                      <Button size="sm" onClick={() => handleApprove(u.id)} className="h-8 py-1 text-xs">Approve</Button>
                    ) : (
                      <span className="text-gray-400 text-xs">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

const AdminSettings = () => {
  const [settings, setSettings] = useState<api.Settings | null>(null);
  const [success, setSuccess] = useState('');

  useEffect(() => { api.getSettings().then(setSettings); }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;
    await api.updateSettings(settings);
    setSuccess('Settings saved.');
    setTimeout(() => setSuccess(''), 3000);
  };

  if (!settings) return null;

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">System Settings</h1>
      <Card className="p-6">
        <form onSubmit={handleSave} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Rate per km (€)</Label>
              <Input type="number" step="0.01" value={settings.ratePerKm} onChange={e => setSettings({...settings, ratePerKm: parseFloat(e.target.value)})} />
            </div>
            <div>
              <Label>Threshold (km) <span className="text-gray-400 font-normal ml-1">10km rule</span></Label>
              <Input type="number" value={settings.thresholdKm} onChange={e => setSettings({...settings, thresholdKm: parseInt(e.target.value)})} />
            </div>
          </div>
          <div>
             <Label>Office Address</Label>
             <Input value={settings.officeAddress} onChange={e => setSettings({...settings, officeAddress: e.target.value})} />
          </div>
          <div>
             <Label>Support Email</Label>
             <Input type="email" value={settings.supportEmail} onChange={e => setSettings({...settings, supportEmail: e.target.value})} />
          </div>
          <div className="pt-4 border-t flex items-center gap-4">
            <Button type="submit">Save Configuration</Button>
            {success && <span className="text-sm text-green-600 font-medium">{success}</span>}
          </div>
        </form>
      </Card>
    </div>
  );
};

const AdminAnnouncements = () => {
   const [ann, setAnn] = useState<api.Announcement>({ message: '', isActive: false });
   
   useEffect(() => { api.getAnnouncement().then(setAnn); }, []);

   const handleSave = async () => {
      await api.updateAnnouncement(ann);
      alert('Announcement updated');
   };

   return (
     <div className="max-w-2xl space-y-6">
       <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Broadcast Announcement</h1>
       <Card className="p-6 space-y-5">
          <div>
             <Label>Message content</Label>
             <textarea 
               value={ann.message} 
               onChange={e => setAnn({...ann, message: e.target.value})}
               className="block w-full rounded-md border-gray-300 py-2 px-3 text-sm border focus:border-indigo-500 focus:ring-indigo-500 min-h-[100px]"
             />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
             <input type="checkbox" checked={ann.isActive} onChange={e => setAnn({...ann, isActive: e.target.checked})} className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4" />
             <span className="text-sm font-medium text-gray-900">Show active banner to all employees</span>
          </label>
          <div className="pt-4 border-t">
             <Button onClick={handleSave}>Broadcast</Button>
          </div>
       </Card>
     </div>
   )
}

export default { Login, Onboarding, EmployeeDashboard, EmployeeCalendar, EmployeeProfile, AdminEmployees, AdminSettings, AdminAnnouncements };