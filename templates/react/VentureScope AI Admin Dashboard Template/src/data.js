export const overviewStats = [
  { label: "Active Users", value: "2,847", subtext: "+12 this week", subtextColor: "text-emerald-400" },
  { label: "Failed Embeddings", value: "34", subtext: "Retry All →", subtextColor: "text-red-400", isLink: true },
  { label: "Pending Transcripts", value: "7", subtext: "Processing...", subtextColor: "text-amber-400" },
  { label: "AI Chats Today", value: "1,204", subtext: "↑ 8% vs yesterday", subtextColor: "text-zinc-400" }
];

export const activityFeed = [
  { time: "14:32", action: "PROMOTED", color: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20", actor: "sys_admin", target: "marcus@techcorp.io" },
  { time: "14:15", action: "RETRIED", color: "bg-amber-400/10 text-amber-400 border-amber-400/20", actor: "auto_worker", target: "batch_emb_992" },
  { time: "13:45", action: "REVOKED", color: "bg-red-400/10 text-red-400 border-red-400/20", actor: "sarah_k", target: "api_key_v2" },
  { time: "12:10", action: "SYNCED", color: "bg-zinc-700/50 text-zinc-300 border-zinc-600", actor: "github_app", target: "repo/venturescope" },
  { time: "11:05", action: "PROMOTED", color: "bg-emerald-400/10 text-emerald-400 border-emerald-400/20", actor: "sys_admin", target: "priya@iit.ac.in" }
];

export const airflowDags = [
  { name: "github_sync", lastRun: "2m ago", status: "success", duration: "00:01:23" },
  { name: "embedding_jobs", lastRun: "5m ago", status: "failed", duration: "00:00:44" },
  { name: "transcript_parse", lastRun: "12m ago", status: "running", duration: "00:02:01" },
  { name: "knowledge_refresh", lastRun: "1h ago", status: "success", duration: "00:04:12" }
];

export const usersList = [
  { id: "usr_01j4k...", name: "Sarah Kim", email: "sarah@mit.edu", role: "STUDENT", status: "active", verified: true, joined: "Jan 12 2025", lastActive: "2h ago", ip: "197.12.33.4 (Addis Ababa)", sessions: [{device: "Chrome/Mac", ip: "197.12.33.4", time: "2h ago"}, {device: "iOS App", ip: "10.0.0.4", time: "1d ago"}] },
  { id: "usr_09m2p...", name: "Marcus Lee", email: "marcus@techcorp.io", role: "B2B_CLIENT", status: "active", verified: true, joined: "Mar 3 2025", lastActive: "5d ago", ip: "104.22.5.1 (New York)", sessions: [{device: "Safari/Mac", ip: "104.22.5.1", time: "5d ago"}] },
  { id: "usr_03x8n...", name: "Priya Nair", email: "priya@iit.ac.in", role: "STUDENT", status: "inactive", verified: false, joined: "Feb 8 2025", lastActive: "14d ago", ip: "12.44.2.1 (Mumbai)", sessions: [] },
  { id: "usr_05b1a...", name: "James Osei", email: "james.o@gmail.com", role: "PROFESSIONAL", status: "active", verified: true, joined: "Dec 15 2024", lastActive: "1h ago", ip: "198.55.2.1 (London)", sessions: [{device: "Edge/Win", ip: "198.55.2.1", time: "1h ago"}] },
  { id: "usr_07v4c...", name: "Yuki Tanaka", email: "yuki@tokyo-u.ac.jp", role: "STUDENT", status: "active", verified: true, joined: "Jan 22 2025", lastActive: "10m ago", ip: "202.11.4.5 (Tokyo)", sessions: [{device: "Chrome/Linux", ip: "202.11.4.5", time: "10m ago"}] }
];

export const embeddingFails = [
  { user: "Priya Nair", status: "failed", lastAttempt: "14 min ago", error: "pgvector timeout" },
  { user: "James Osei", status: "failed", lastAttempt: "1h ago", error: "profile_incomplete" },
  { user: "Yuki Tanaka", status: "pending", lastAttempt: "2 min ago", error: "—" },
  { user: "Alex Chen", status: "failed", lastAttempt: "3h ago", error: "token_error" }
];

export const knowledgeChunks = [
  { id: "chk_1", user: "sarah@mit.edu", title: "Chunk #1", preview: "Studied Electrical Engineering at MIT...", content: "Studied Electrical Engineering at MIT (2021–2025). Specialization in power systems and embedded firmware.\nGPA 3.8. Senior thesis on EV battery management systems.", status: "synced", date: "Jan 14 2025 02:31 UTC", tokens: 87, dims: 1536 },
  { id: "chk_2", user: "sarah@mit.edu", title: "Chunk #2", preview: "Completed internship at Bosch...", content: "Completed internship at Bosch focusing on sensor calibration for autonomous driving modules.", status: "synced", date: "Jan 14 2025 02:32 UTC", tokens: 42, dims: 1536 },
  { id: "chk_3", user: "marcus@techcorp.io", title: "Chunk #1", preview: "VP of Product at TechCorp since 2022...", content: "VP of Product at TechCorp since 2022. Managing a team of 45 PMs and designers.", status: "synced", date: "Mar 04 2025 11:00 UTC", tokens: 38, dims: 1536 }
];

export const broadcastHistory = [
  { subject: "New CV Parser v2", to: "All Users", sentAt: "Jan 10, 14:22", status: "sent", count: 2847 },
  { subject: "Maintenance Window", to: "B2B Clients", sentAt: "Jan 8, 09:00", status: "sent", count: 312 },
  { subject: "Feature: AI Chat", to: "Students", sentAt: "Dec 20, 11:00", status: "sent", count: 1891 }
];