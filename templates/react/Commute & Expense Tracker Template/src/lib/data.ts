// --- TYPES ---
export type Role = 'employee' | 'admin';
export type Department = 'Sales' | 'Finance' | 'Engineering' | 'HR' | 'Operations' | '';
export type MonthStatus = 'draft' | 'submitted' | 'approved';
export type EntryKind = 'round_trip' | 'one_way' | 'custom';

export interface Settings {
  ratePerKm: number;
  thresholdKm: number;
  officeAddress: string;
  supportEmail: string;
  allowedDomains: string[];
}

export interface TransportCard {
  id: string;
  name: string;
  monthlyAmount: number;
}

export interface User {
  id: string;
  email: string;
  role: Role;
  name: string;
  department: Department;
  homeAddress: string;
  oneWayKm: number;
  activeMonthStatus: MonthStatus;
  selectedCardId: string | null;
  hasOnboarded: boolean;
  isActive: boolean;
}

export interface Entry {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD
  kind: EntryKind;
  distance: number;
  amount: number;
  note: string;
}

export interface Announcement {
  message: string;
  isActive: boolean;
}

// --- MOCK DATA STORE ---
let settings: Settings = {
  ratePerKm: 0.23,
  thresholdKm: 10,
  officeAddress: 'Prinsengracht 123, 1015 VJ Amsterdam, Netherlands',
  supportEmail: 'support@company.nl',
  allowedDomains: ['company.nl', 'company.com'],
};

let transportCards: TransportCard[] = [
  { id: 't1', name: 'NS Business Card (Train)', monthlyAmount: 80 },
  { id: 't2', name: 'GVB Monthly (Bus/Tram)', monthlyAmount: 60 },
];

let announcement: Announcement = {
  message: 'Please submit your expenses for this month by the 5th!',
  isActive: true,
};

let users: User[] = [
  { id: 'u1', email: 'admin@company.nl', role: 'admin', name: 'Admin User', department: 'Operations', homeAddress: 'Admin St 1', oneWayKm: 5, activeMonthStatus: 'draft', selectedCardId: null, hasOnboarded: true, isActive: true },
  { id: 'u2', email: 'lars@company.nl', role: 'employee', name: 'Lars van der Berg', department: 'Engineering', homeAddress: 'Keizersgracht 45, Amsterdam', oneWayKm: 12, activeMonthStatus: 'draft', selectedCardId: null, hasOnboarded: true, isActive: true },
  { id: 'u3', email: 'sophie@company.nl', role: 'employee', name: 'Sophie de Boer', department: 'Sales', homeAddress: 'Oudegracht 10, Utrecht', oneWayKm: 45, activeMonthStatus: 'submitted', selectedCardId: 't1', hasOnboarded: true, isActive: true },
  { id: 'u4', email: 'daan@company.nl', role: 'employee', name: 'Daan Visser', department: 'Finance', homeAddress: 'Vondelstraat 2, Amsterdam', oneWayKm: 3, activeMonthStatus: 'approved', selectedCardId: null, hasOnboarded: true, isActive: true },
];

let entries: Entry[] = [
  { id: 'e1', userId: 'u2', date: new Date().toISOString().split('T')[0], kind: 'round_trip', distance: 24, amount: 5.52, note: '' },
  { id: 'e2', userId: 'u3', date: new Date().toISOString().split('T')[0], kind: 'custom', distance: 120, amount: 27.60, note: 'Client visit Rotterdam' },
];

// Helper to simulate network latency
const delay = (ms = 300) => new Promise((res) => setTimeout(res, ms));

// --- API FUNCTIONS ---
export async function getSettings(): Promise<Settings> { await delay(); return { ...settings }; }
export async function updateSettings(newSettings: Settings): Promise<void> { await delay(); settings = { ...newSettings }; }

export async function getAnnouncement(): Promise<Announcement> { await delay(); return { ...announcement }; }
export async function updateAnnouncement(newAnn: Announcement): Promise<void> { await delay(); announcement = { ...newAnn }; }

export async function getTransportCards(): Promise<TransportCard[]> { await delay(); return [...transportCards]; }
export async function saveTransportCard(card: TransportCard): Promise<void> { 
  await delay(); 
  const idx = transportCards.findIndex(c => c.id === card.id);
  if (idx >= 0) transportCards[idx] = card;
  else transportCards.push(card);
}

export async function login(email: string): Promise<{ user: User | null; error?: string }> {
  await delay();
  const domain = email.split('@')[1];
  if (!settings.allowedDomains.includes(domain)) {
    return { user: null, error: `Domain @${domain} is not authorized.` };
  }
  let user = users.find((u) => u.email === email);
  if (!user) {
    user = { id: Math.random().toString(36).substr(2, 9), email, role: 'employee', name: '', department: '', homeAddress: '', oneWayKm: 0, activeMonthStatus: 'draft', selectedCardId: null, hasOnboarded: false, isActive: true };
    users.push(user);
  }
  if (!user.isActive) return { user: null, error: 'Account revoked.' };
  return { user: { ...user } };
}

export async function updateUser(userId: string, updates: Partial<User>): Promise<User> {
  await delay();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx === -1) throw new Error('User not found');
  
  // Mock distance calculation based on address length for demo
  if (updates.homeAddress !== undefined && updates.homeAddress !== users[idx].homeAddress) {
    updates.oneWayKm = Math.max(2, Math.floor(updates.homeAddress.length * 1.5));
  }
  
  users[idx] = { ...users[idx], ...updates };
  return { ...users[idx] };
}

export async function getUsers(): Promise<User[]> { await delay(); return [...users]; }

export async function getEntries(userId: string): Promise<Entry[]> {
  await delay();
  return entries.filter((e) => e.userId === userId).sort((a, b) => a.date.localeCompare(b.date));
}

export async function calculateEntryAmount(userId: string, kind: EntryKind, customDistance: number = 0): Promise<{ distance: number; amount: number }> {
  const user = users.find((u) => u.id === userId);
  if (!user) return { distance: 0, amount: 0 };
  
  let dist = 0;
  let amount = 0;

  if (kind === 'custom') {
    dist = customDistance;
    amount = dist * settings.ratePerKm;
  } else {
    const oneWay = user.oneWayKm;
    dist = kind === 'round_trip' ? oneWay * 2 : oneWay;
    if (oneWay > settings.thresholdKm) {
      amount = dist * settings.ratePerKm;
    } else {
      amount = 0; // Not eligible
    }
  }
  return { distance: dist, amount: Number(amount.toFixed(2)) };
}

export async function saveEntry(entry: Omit<Entry, 'id' | 'distance' | 'amount'> & { distance?: number }): Promise<Entry> {
  await delay();
  const { distance, amount } = await calculateEntryAmount(entry.userId, entry.kind, entry.distance);
  const newEntry: Entry = { ...entry, id: Math.random().toString(36).substr(2, 9), distance, amount };
  entries.push(newEntry);
  return newEntry;
}

export async function deleteEntry(entryId: string): Promise<void> {
  await delay();
  entries = entries.filter((e) => e.id !== entryId);
}

export async function submitMonth(userId: string): Promise<void> {
  await delay();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx !== -1) users[idx].activeMonthStatus = 'submitted';
}

export async function approveMonth(userId: string): Promise<void> {
  await delay();
  const idx = users.findIndex((u) => u.id === userId);
  if (idx !== -1) users[idx].activeMonthStatus = 'approved';
}

export async function getMonthSummary(userId: string): Promise<{ totalKm: number; totalAmount: number; entriesCount: number }> {
  const userEntries = entries.filter(e => e.userId === userId);
  return {
    totalKm: userEntries.reduce((acc, e) => acc + e.distance, 0),
    totalAmount: Number(userEntries.reduce((acc, e) => acc + e.amount, 0).toFixed(2)),
    entriesCount: userEntries.length
  };
}