import React, { useState, useEffect } from 'react';

// --- UTILS ---
const formatRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return date.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric' });
};

// --- INITIAL DATA ---
const INITIAL_THREADS = [
  {
    id: 't1',
    title: 'React 18の新しいフック、みんな実務で使ってる？',
    content: 'useIdやuseTransitionなど色々追加されましたが、実際のプロダクトでどれくらい活用していますか？個人的にはuseTransitionが重いリストのフィルタリングでかなり役立ちました。',
    author: 'FrontEndNinja',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    comments: [
      { id: 'c1', text: 'useIdはアクセシビリティ対応でフォームコンポーネントを作る時に必須レベルになりましたね。', author: 'a11y_lover', createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString() },
      { id: 'c2', text: 'まだReact 17から上げられてない悲しい現場もあります...早く使いたい。', author: 'legacy_maintainer', createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString() }
    ]
  },
  {
    id: 't2',
    title: 'Tailwind CSSのクラス名が長くなりすぎる問題の解決策',
    content: 'コンポーネントが複雑になると、classNameが信じられないくらい長くなりますよね。clsxやtailwind-mergeを使ったりしていますが、皆さんのベストプラクティスを教えてください。',
    author: 'CSS_Architect',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    comments: [
      { id: 'c3', text: 'cva (class-variance-authority) がおすすめです！コンポーネントのバリアント管理が劇的に綺麗になります。', author: 'ui_dev', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() }
    ]
  },
  {
    id: 't3',
    title: 'お気に入りのメカニカルキーボード軸は？',
    content: 'ずっと茶軸を使ってきましたが、最近静音赤軸に惹かれています。エンジニアの皆さんのこだわりを聞きたいです。',
    author: 'TypingSpeedster',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    comments: []
  }
];

// --- COMPONENTS ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#111] text-white hover:bg-[#333] shadow-sm focus:ring-[#111]",
    secondary: "bg-white text-[#444] border border-[#e5e5e5] hover:bg-[#f5f5f5] hover:text-[#111] focus:ring-[#e5e5e5]",
    ghost: "bg-transparent text-[#666] hover:bg-[#f0f0f0] hover:text-[#111] focus:ring-gray-200",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Header = ({ onNewPost, onHome }) => (
  <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-[#eaeaea]">
    <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={onHome}
      >
        <div className="w-8 h-8 bg-[#111] rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform">
          <iconify-icon icon="solar:programming-linear" width="20"></iconify-icon>
        </div>
        <span className="font-semibold text-lg tracking-tight text-[#111]">DevBoard</span>
      </div>
      <Button onClick={onNewPost}>
        <iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
        New Discussion
      </Button>
    </div>
  </header>
);

const ThreadCard = ({ thread, onClick }) => (
  <div 
    onClick={onClick}
    className="group bg-white border border-[#eaeaea] p-5 rounded-xl cursor-pointer transition-all duration-200 hover:border-[#ccc] hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-[1px]"
  >
    <div className="flex items-start justify-between gap-4 mb-2">
      <h3 className="text-base font-semibold text-[#111] tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
        {thread.title}
      </h3>
      <div className="flex items-center gap-1 text-[#888] text-xs whitespace-nowrap bg-[#f5f5f5] px-2 py-1 rounded-md">
        <iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
        {thread.comments.length}
      </div>
    </div>
    <p className="text-[#666] text-sm line-clamp-2 leading-relaxed mb-4">
      {thread.content}
    </p>
    <div className="flex items-center gap-3 text-xs text-[#888]">
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-[#555]">
           <iconify-icon icon="solar:user-linear" width="12"></iconify-icon>
        </div>
        <span className="font-medium text-[#444]">{thread.author}</span>
      </div>
      <span className="w-1 h-1 rounded-full bg-[#ddd]"></span>
      <div className="flex items-center gap-1">
        <iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
        {formatRelativeTime(thread.createdAt)}
      </div>
    </div>
  </div>
);

const ThreadDetail = ({ thread, onBack, onAddComment }) => {
  const [commentText, setCommentText] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(thread.id, {
      text: commentText,
      author: authorName.trim() || 'Anonymous',
    });
    setCommentText('');
  };

  if (!thread) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-[#666] hover:text-[#111] mb-6 transition-colors group w-fit"
      >
        <iconify-icon icon="solar:arrow-left-linear" class="group-hover:-translate-x-1 transition-transform"></iconify-icon>
        Back to discussions
      </button>

      <article className="bg-white border border-[#eaeaea] rounded-xl p-6 md:p-8 mb-8 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#111] tracking-tight mb-4 leading-tight">
          {thread.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-[#666] mb-8 pb-6 border-b border-[#eaeaea]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#444]">
               <iconify-icon icon="solar:user-bold-duotone" width="18"></iconify-icon>
            </div>
            <span className="font-medium text-[#111]">{thread.author}</span>
          </div>
          <span className="text-[#ccc]">•</span>
          <div className="flex items-center gap-1.5">
            <iconify-icon icon="solar:calendar-linear"></iconify-icon>
            {new Date(thread.createdAt).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
        
        <div className="prose prose-sm md:prose-base max-w-none text-[#333] leading-relaxed whitespace-pre-wrap">
          {thread.content}
        </div>
      </article>

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-[#111] tracking-tight flex items-center gap-2">
          Responses 
          <span className="bg-[#f0f0f0] text-[#666] text-xs py-0.5 px-2 rounded-full">{thread.comments.length}</span>
        </h3>

        {thread.comments.length === 0 ? (
          <div className="text-center py-12 bg-white border border-dashed border-[#ddd] rounded-xl text-[#888]">
            <iconify-icon icon="solar:ghost-smile-linear" width="32" class="mb-2 opacity-50"></iconify-icon>
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {thread.comments.map((comment) => (
              <div key={comment.id} className="bg-white p-5 rounded-xl border border-[#eaeaea] flex gap-4">
                 <div className="w-8 h-8 shrink-0 rounded-full bg-[#fafafa] border border-[#eee] flex items-center justify-center text-[#666]">
                    <iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
                 </div>
                 <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm text-[#111]">{comment.author}</span>
                      <span className="text-xs text-[#888]">{formatRelativeTime(comment.createdAt)}</span>
                    </div>
                    <p className="text-sm text-[#444] leading-relaxed whitespace-pre-wrap">{comment.text}</p>
                 </div>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 bg-white p-5 rounded-xl border border-[#eaeaea] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <h4 className="font-medium text-[#111] mb-4 text-sm">Add a response</h4>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#eaeaea] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#111] focus:border-transparent transition-all placeholder:text-[#999]"
            />
            <textarea
              placeholder="What are your thoughts?"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-[#fafafa] border border-[#eaeaea] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#111] focus:border-transparent transition-all placeholder:text-[#999] resize-y"
              required
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={!commentText.trim()}>
                Post Comment
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const CreatePostModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    onSubmit({
      title: title.trim(),
      content: content.trim(),
      author: author.trim() || 'Anonymous'
    });
    
    // Reset
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-[#eaeaea] overflow-hidden modal-enter">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#eaeaea]">
          <h2 className="text-lg font-semibold tracking-tight text-[#111]">Start a New Discussion</h2>
          <button 
            onClick={onClose}
            className="text-[#888] hover:text-[#111] p-1 rounded-md hover:bg-[#f5f5f5] transition-colors"
            aria-label="Close"
          >
            <iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#444] mb-1.5">Title</label>
            <input
              type="text"
              required
              placeholder="What do you want to discuss?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#eaeaea] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#111] focus:border-transparent transition-all placeholder:text-[#999]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#444] mb-1.5">Your Name (Optional)</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#eaeaea] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#111] focus:border-transparent transition-all placeholder:text-[#999]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#444] mb-1.5">Details</label>
            <textarea
              required
              placeholder="Provide more context for your discussion..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 bg-[#fafafa] border border-[#eaeaea] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#111] focus:border-transparent transition-all placeholder:text-[#999] resize-y"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Post Discussion
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [threads, setThreads] = useState(INITIAL_THREADS);
  const [view, setView] = useState('list'); // 'list' | 'thread'
  const [activeThreadId, setActiveThreadId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeThread = threads.find(t => t.id === activeThreadId);

  const handleCreatePost = (newPostData) => {
    const newThread = {
      id: `t${Date.now()}`,
      ...newPostData,
      createdAt: new Date().toISOString(),
      comments: []
    };
    // Add to top of the list
    setThreads([newThread, ...threads]);
    setIsModalOpen(false);
  };

  const handleAddComment = (threadId, commentData) => {
    setThreads(currentThreads => 
      currentThreads.map(thread => {
        if (thread.id === threadId) {
          return {
            ...thread,
            comments: [
              ...thread.comments,
              {
                id: `c${Date.now()}`,
                ...commentData,
                createdAt: new Date().toISOString()
              }
            ]
          };
        }
        return thread;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-[#111] selection:text-white pb-20">
      <Header 
        onNewPost={() => setIsModalOpen(true)} 
        onHome={() => {
          setView('list');
          setActiveThreadId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />
      
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 md:pt-12">
        {view === 'list' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight mb-2">Recent Discussions</h1>
              <p className="text-[#666] text-sm">Join the conversation or start a new topic.</p>
            </div>
            
            <div className="grid gap-4">
              {threads.length === 0 ? (
                 <div className="text-center py-16 border border-dashed border-[#ddd] rounded-xl">
                    <iconify-icon icon="solar:box-minimalistic-linear" width="48" class="text-[#ccc] mb-4"></iconify-icon>
                    <h3 className="text-lg font-medium text-[#111] mb-1">No discussions yet</h3>
                    <p className="text-[#666] text-sm mb-4">Be the first to start a conversation.</p>
                    <Button variant="secondary" onClick={() => setIsModalOpen(true)}>Start a Discussion</Button>
                 </div>
              ) : (
                threads.map(thread => (
                  <ThreadCard 
                    key={thread.id} 
                    thread={thread} 
                    onClick={() => {
                      setActiveThreadId(thread.id);
                      setView('thread');
                      window.scrollTo(0, 0);
                    }} 
                  />
                ))
              )}
            </div>
          </div>
        )}

        {view === 'thread' && (
          <ThreadDetail 
            thread={activeThread} 
            onBack={() => {
              setView('list');
              setActiveThreadId(null);
            }} 
            onAddComment={handleAddComment}
          />
        )}
      </main>

      <CreatePostModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleCreatePost}
      />
    </div>
  );
}