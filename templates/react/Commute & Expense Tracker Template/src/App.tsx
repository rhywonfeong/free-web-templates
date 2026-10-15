import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as api from './lib/data';
import { LogOut, User as UserIcon, LayoutDashboard, Calendar, Settings as SettingsIcon, Users, Euro, FileSpreadsheet, MapPin } from 'lucide-react';
import Pages from './pages';

// --- UTILS ---
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- CONTEXT ---
interface AppContextType {
  user: api.User | null;
  setUser: (u: api.User | null) => void;
  logout: () => void;
}
export const AppContext = createContext<AppContextType | null>(null);

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};

// --- SHARED UI COMPONENTS ---
export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' }>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
      secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-sm',
      outline: 'bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50',
      danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
      ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
    };
    return (
      <button ref={ref} className={cn('inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500', variants[variant], className)} {...props} />
    );
  }
);

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn('block w-full rounded-md border-gray-300 py-2 px-3 text-sm border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm disabled:bg-gray-50 disabled:text-gray-500', className)} {...props} />
  )
);

export const Label = ({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={cn('block text-sm font-medium text-gray-700 mb-1', className)} {...props} />
);

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn('bg-white overflow-hidden rounded-lg shadow-sm border border-gray-200', className)}>{children}</div>
);

export const Badge = ({ status, children }: { status: api.MonthStatus | 'active' | 'revoked'; children?: React.ReactNode }) => {
  const colors = {
    draft: 'bg-gray-100 text-gray-800',
    submitted: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    active: 'bg-green-100 text-green-800',
    revoked: 'bg-red-100 text-red-800',
  };
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize', colors[status])}>
      {children || status}
    </span>
  );
};

// --- LAYOUTS ---
const TopNav = ({ user }: { user: api.User }) => {
  const { logout } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Profile', href: '/profile', icon: UserIcon },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center font-semibold text-indigo-600 text-lg tracking-tight">
              NovaCommute
            </div>
            <div className="hidden sm:-my-px sm:ml-8 sm:flex sm:space-x-8">
              {links.map((item) => (
                <button key={item.name} onClick={() => navigate(item.href)} className={cn('inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors', location.pathname === item.href ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700')}>
                  <item.icon className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <RoleSwitcher />
            <span className="text-sm text-gray-500 hidden sm:block">{user.name || user.email}</span>
            <Button variant="ghost" className="px-2" onClick={logout} aria-label="Log out"><LogOut className="w-4 h-4" strokeWidth={1.5} /></Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const SidebarLayout = ({ user, children }: { user: api.User; children: React.ReactNode }) => {
  const { logout } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: 'Employees', href: '/', icon: Users },
    { name: 'Settings', href: '/settings', icon: SettingsIcon },
    { name: 'Announcements', href: '/announcements', icon: MapPin },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 font-semibold text-indigo-600 text-lg tracking-tight">
          NovaAdmin
        </div>
        <div className="flex-1 py-4 flex flex-col gap-1 px-3">
          {links.map((item) => (
            <button key={item.name} onClick={() => navigate(item.href)} className={cn('flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors', location.pathname === item.href ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100')}>
              <item.icon className="w-4 h-4 mr-3 text-gray-400" strokeWidth={1.5} />
              {item.name}
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <RoleSwitcher />
          <div className="mt-4 flex items-center justify-between">
             <span className="text-sm font-medium text-gray-900 truncate pr-2">{user.email}</span>
             <Button variant="ghost" className="p-1" onClick={logout}><LogOut className="w-4 h-4" strokeWidth={1.5} /></Button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-5xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

const RoleSwitcher = () => {
  const { user, setUser } = useApp();
  const navigate = useNavigate();

  const handleDevSwitch = async () => {
    if (!user) return;
    const targetEmail = user.role === 'admin' ? 'lars@company.nl' : 'admin@company.nl';
    const res = await api.login(targetEmail);
    if (res.user) {
      setUser(res.user);
      navigate('/');
    }
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-md p-1 border border-gray-200 cursor-help" title="Dev Tool: Switch Role">
      <span className="text-xs font-medium text-gray-500 px-2">Dev</span>
      <button onClick={handleDevSwitch} className="text-xs bg-white px-2 py-1 rounded shadow-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors">
        {user?.role === 'admin' ? 'View as Employee' : 'View as Admin'}
      </button>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [user, setUser] = useState<api.User | null>(null);
  const [loading, setLoading] = useState(true);

  // Auto-login for demo purposes
  useEffect(() => {
    api.login('lars@company.nl').then(res => {
      if (res.user) setUser(res.user);
      setLoading(false);
    });
  }, []);

  const logout = () => setUser(null);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>;

  return (
    <AppContext.Provider value={{ user, setUser, logout }}>
      {!user ? (
        <Pages.Login />
      ) : !user.hasOnboarded ? (
        <Pages.Onboarding />
      ) : user.role === 'admin' ? (
        <SidebarLayout user={user}>
          <Routes>
            <Route path="/" element={<Pages.AdminEmployees />} />
            <Route path="/settings" element={<Pages.AdminSettings />} />
            <Route path="/announcements" element={<Pages.AdminAnnouncements />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SidebarLayout>
      ) : (
        <div className="min-h-screen bg-gray-50">
          <TopNav user={user} />
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Pages.EmployeeDashboard />} />
              <Route path="/calendar" element={<Pages.EmployeeCalendar />} />
              <Route path="/profile" element={<Pages.EmployeeProfile />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      )}
    </AppContext.Provider>
  );
}