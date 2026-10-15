import React, { useState, useEffect, useRef, Fragment } from 'react';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    let saved = [];
    try {
      const parsed = JSON.parse(localStorage.getItem('focus_tasks'));
      if (Array.isArray(parsed)) saved = parsed;
    } catch (e) {}
    
    const hasFakeData = saved.some(t => t.id === 'fake-1');
    if (!hasFakeData && saved.length === 0) {
      return [
        {
          id: 'fake-1',
          title: 'Review Q3 marketing copy',
          completed: false,
          list: 'inbox',
          notes: 'Focus on the new product features and upcoming launch.',
          checklist: [{ id: 'chk-1', text: 'Proofread draft', completed: false }],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 'fake-2',
          title: 'Schedule catch-up with Sarah',
          completed: false,
          list: 'inbox',
          notes: '',
          checklist: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 'fake-3',
          title: 'Review updated design files for dashboard',
          completed: false,
          list: 'inbox',
          notes: '',
          checklist: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        ...saved
      ];
    }
    return saved;
  });

  const [view, setView] = useState('inbox');
  const [expandedTasks, setExpandedTasks] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputNotes, setInputNotes] = useState('');
  const [inputChecklist, setInputChecklist] = useState([]);
  const [checklistItemText, setChecklistItemText] = useState('');
  const [toast, setToast] = useState(null);

  // Drag and drop state
  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const [dragInfo, setDragInfo] = useState({ id: null, isAfter: false });

  const toastTimeoutRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('focus_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setExpandedTasks({});
      } else if (
        e.key === 'c' &&
        !e.metaKey &&
        !e.ctrlKey &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        setIsModalOpen(true);
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const uuid = () => (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2, 15);

  const showToast = (message) => {
    setToast(message);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const addTask = (title) => {
    if (!title.trim()) return;
    const task = {
      id: uuid(),
      title: title.trim(),
      completed: false,
      list: view,
      notes: inputNotes,
      checklist: inputChecklist.map(text => ({ id: uuid(), text, completed: false })),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setTasks([task, ...tasks]);
  };

  const completeTask = (id) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        const isCompleting = !t.completed;
        let targetList = t.list;

        if (isCompleting && t.list === 'inbox') {
          targetList = 'today';
          showToast("Task completed and moved to Today view");
        }

        return { 
          ...t, 
          completed: isCompleting, 
          list: targetList, 
          updatedAt: new Date().toISOString() 
        };
      }
      return t;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const moveTask = (id, targetList) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, list: targetList, updatedAt: new Date().toISOString() } : t));
  };

  const toggleExpand = (id) => {
    setExpandedTasks(prev => prev[id] ? {} : { [id]: true });
  };

  const updateNotes = (id, notes) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, notes, updatedAt: new Date().toISOString() } : t));
  };

  const addChecklistItem = (taskId, text) => {
    if (!text.trim()) return;
    setTasks(tasks.map(t => {
      if (t.id === taskId) {
        return {
          ...t,
          checklist: [...t.checklist, { id: uuid(), text: text.trim(), completed: false }],
          updatedAt: new Date().toISOString()
        };
      }
      return t;
    }));
  };

  const toggleChecklistItem = (taskId, itemId) => {
    setTasks(tasks.map(t => {
      if (t.id === taskId) {
        return {
          ...t,
          checklist: t.checklist.map(i => i.id === itemId ? { ...i, completed: !i.completed } : i),
          updatedAt: new Date().toISOString()
        };
      }
      return t;
    }));
  };

  const deleteChecklistItem = (taskId, itemId) => {
    setTasks(tasks.map(t => {
      if (t.id === taskId) {
        return {
          ...t,
          checklist: t.checklist.filter(i => i.id !== itemId),
          updatedAt: new Date().toISOString()
        };
      }
      return t;
    }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTask(inputValue);
    setInputValue('');
    setInputNotes('');
    setInputChecklist([]);
    setChecklistItemText('');
    setIsModalOpen(false);
  };

  // Drag and Drop Handlers
  const handleDrop = (e, targetId) => {
    e.preventDefault();
    if (!draggedTaskId || draggedTaskId === targetId) {
      setDragInfo({ id: null, isAfter: false });
      setDraggedTaskId(null);
      return;
    }

    const newTasks = [...tasks];
    const draggedIndex = newTasks.findIndex(t => t.id === draggedTaskId);
    const targetIndex = newTasks.findIndex(t => t.id === targetId);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      const [draggedItem] = newTasks.splice(draggedIndex, 1);
      // Recalculate target index after array mutation
      const currentTargetIndex = newTasks.findIndex(t => t.id === targetId);
      const insertIndex = dragInfo.isAfter ? currentTargetIndex + 1 : currentTargetIndex;
      newTasks.splice(insertIndex, 0, draggedItem);
      
      setTasks(newTasks);
    }

    setDragInfo({ id: null, isAfter: false });
    setDraggedTaskId(null);
  };

  const visibleTasks = tasks.filter(t => !t.completed && t.list === view);
  const completedTasks = tasks.filter(t => t.completed && t.list === view);

  return (
    <Fragment>
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-xl shadow-zinc-200/50 border border-zinc-200/60 rounded-[2rem] flex items-center p-1.5 gap-1 z-50">
        <button
          id="nav-inbox"
          className={view === 'inbox' ? 'nav-active' : 'nav-inactive'}
          onClick={() => setView('inbox')}
        >
          <iconify-icon icon="lucide:inbox" className="text-2xl mb-1"></iconify-icon>
          <span className="text-[13px] tracking-tight">Inbox</span>
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-[70px] h-[70px] bg-zinc-900 hover:bg-zinc-800 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-40 group border border-zinc-800 relative -top-6 mx-2 flex-shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300 w-[30px] h-[30px]" style={{ color: "rgb(255, 255, 255)", width: "30px", height: "30px" }}>
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
        <button
          id="nav-today"
          className={view === 'today' ? 'nav-active' : 'nav-inactive'}
          onClick={() => setView('today')}
        >
          <iconify-icon icon="lucide:check-circle" className="text-2xl mb-1"></iconify-icon>
          <span className="text-[13px] tracking-tight">Today</span>
        </button>
      </nav>

      <main className="flex-1 overflow-y-auto bg-white relative w-full h-full">
        <div className="max-w-2xl mx-auto w-full p-6 md:p-12 pb-32">
          <h1 className="text-2xl font-medium tracking-tight mb-8 text-zinc-900 pt-4">
            {view === 'today' ? 'Today' : 'Inbox'}
          </h1>
          <div className="flex flex-col gap-1">
            {visibleTasks.length === 0 && (view === 'inbox' || completedTasks.length === 0) ? (
              <div className="py-12 flex flex-col items-center justify-center text-zinc-400 gap-4">
                <iconify-icon icon="solar:tea-cup-linear" className="text-4xl opacity-50"></iconify-icon>
                <p className="text-sm font-normal tracking-tight">
                  Nothing here. Enjoy the calm.
                </p>
              </div>
            ) : (
              visibleTasks.map(task => {
                const isExpanded = expandedTasks[task.id];
                const isBeingDragged = draggedTaskId === task.id;

                return (
                  <div 
                    key={task.id} 
                    draggable
                    onDragStart={(e) => {
                      setDraggedTaskId(task.id);
                      e.dataTransfer.effectAllowed = 'move';
                      if (e.dataTransfer.setDragImage) {
                        e.currentTarget.style.opacity = '0.5';
                      }
                    }}
                    onDragOver={(e) => {
                      if (draggedTaskId && draggedTaskId !== task.id) {
                        e.preventDefault();
                        e.dataTransfer.dropEffect = 'move';
                        const rect = e.currentTarget.getBoundingClientRect();
                        const isAfter = e.clientY - rect.top > rect.height / 2;
                        if (dragInfo.id !== task.id || dragInfo.isAfter !== isAfter) {
                          setDragInfo({ id: task.id, isAfter });
                        }
                      }
                    }}
                    onDrop={(e) => handleDrop(e, task.id)}
                    onDragEnd={(e) => {
                      e.currentTarget.style.opacity = '';
                      setDraggedTaskId(null);
                      setDragInfo({ id: null, isAfter: false });
                    }}
                    className={`group flex flex-col rounded-2xl transition-all duration-200 border relative p-4 -mx-4 hover:bg-zinc-50/80 border-transparent hover:border-zinc-100 ${
                      isBeingDragged ? 'opacity-40 scale-[0.99] bg-zinc-50/80' : ''
                    } ${isExpanded ? 'bg-zinc-100/50' : ''}`}
                  >
                    {/* Drop position indicators */}
                    {dragInfo.id === task.id && !dragInfo.isAfter && (
                      <div className="absolute -top-[1px] left-0 right-0 h-[2px] bg-indigo-500 z-20 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.5)]" />
                    )}
                    {dragInfo.id === task.id && dragInfo.isAfter && (
                      <div className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-indigo-500 z-20 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.5)]" />
                    )}

                    <div className="absolute left-1 top-[18px] opacity-0 group-hover:opacity-100 text-zinc-300 cursor-grab active:cursor-grabbing flex items-center justify-center transition-opacity" title="Drag to reorder">
                      <iconify-icon icon="lucide:grip-vertical" className="text-lg"></iconify-icon>
                    </div>

                    <div className="flex items-start gap-4">
                      <button onClick={() => completeTask(task.id)} className="mt-0.5 w-5 h-5 rounded-full border border-zinc-300 hover:border-zinc-500 hover:bg-zinc-100 flex-shrink-0 transition-all duration-200 flex items-center justify-center text-transparent hover:text-zinc-500">
                        <iconify-icon icon="lucide:check" className="text-sm"></iconify-icon>
                      </button>
                      <div className="flex-1 flex flex-col pt-0.5">
                        <div className="text-base text-zinc-800 font-medium cursor-pointer select-none transition-colors group-hover:text-black tracking-tight" onClick={() => toggleExpand(task.id)}>
                          {task.title}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            
            {view === 'today' && completedTasks.length > 0 && (
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <h2 className="text-sm font-medium text-zinc-500 mb-4 tracking-tight">Completed</h2>
                <div className="flex flex-col gap-1">
                  {completedTasks.map(task => (
                    <div key={task.id} className="group flex items-start gap-4 p-4 -mx-4 hover:bg-zinc-50/80 rounded-2xl transition-all duration-200 opacity-60 hover:opacity-100">
                      <button onClick={() => completeTask(task.id)} className="mt-0.5 w-5 h-5 rounded-full border border-zinc-800 bg-zinc-800 flex-shrink-0 transition-all duration-200 flex items-center justify-center text-white">
                        <iconify-icon icon="lucide:check" className="text-sm"></iconify-icon>
                      </button>
                      <div className="flex-1 flex flex-col pt-0.5">
                        <div className="text-base text-zinc-800 font-medium line-through tracking-tight">
                          {task.title}
                        </div>
                      </div>
                      <button onClick={() => deleteTask(task.id)} title="Delete" className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <iconify-icon icon="solar:trash-bin-trash-linear" className="text-lg"></iconify-icon>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Add Modal */}
      {isModalOpen && (
        <div
          id="add-modal"
          className="fixed inset-0 bg-zinc-900/10 backdrop-blur-sm z-50 flex items-start justify-center pt-32 px-4 transition-opacity duration-200"
          onClick={(e) => {
            if (e.target.id === 'add-modal') {
              setIsModalOpen(false);
              setInputValue('');
              setInputNotes('');
              setInputChecklist([]);
              setChecklistItemText('');
            }
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden border border-zinc-200/60 transform transition-all">
            <form onSubmit={handleAddSubmit} className="flex flex-col">
              <input
                id="add-input"
                type="text"
                placeholder="What needs to be done?"
                className="w-full text-base bg-transparent border-none p-6 text-zinc-900 placeholder-zinc-400 font-normal focus:outline-none focus:ring-0"
                autoComplete="off"
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

              {inputValue.trim() !== '' && (
                <div className="px-6 pb-6 flex flex-col gap-3 animate-fade-in border-t border-zinc-100 pt-6 mt-[-1px]">
                  <textarea
                    className="w-full text-sm bg-transparent border-none resize-none focus:outline-none p-0 text-zinc-700 placeholder-zinc-400 font-normal min-h-[40px] leading-relaxed overflow-hidden"
                    placeholder="Add notes..."
                    value={inputNotes}
                    onChange={(e) => {
                      setInputNotes(e.target.value);
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                    ref={(el) => {
                      if (el) {
                        el.style.height = 'auto';
                        el.style.height = el.scrollHeight + 'px';
                      }
                    }}
                  ></textarea>

                  <div className="flex flex-col gap-2 bg-zinc-50/50 p-4 rounded-xl border border-zinc-100/50">
                    <h4 className="text-xs font-medium text-zinc-400 mb-1 tracking-tight uppercase">Checklist</h4>
                    {inputChecklist.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item py-1">
                        <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-[4px] border border-zinc-300 flex items-center justify-center transition-all duration-200"></div>
                        <span className="text-sm flex-1 font-normal text-zinc-700 transition-all">{item}</span>
                        <button type="button" onClick={() => setInputChecklist(inputChecklist.filter((_, i) => i !== idx))} className="opacity-0 group-hover/item:opacity-100 text-zinc-300 hover:text-red-500 transition-opacity flex items-center">
                          <iconify-icon icon="solar:close-circle-linear" className="text-base"></iconify-icon>
                        </button>
                      </div>
                    ))}
                    <div className="flex items-center gap-3 py-1 mt-1">
                      <div className="w-4 h-4 flex items-center justify-center text-zinc-300 flex-shrink-0">
                        <iconify-icon icon="solar:add-circle-linear" className="text-sm"></iconify-icon>
                      </div>
                      <input
                        type="text"
                        className="flex-1 text-sm bg-transparent border-none focus:outline-none p-0 text-zinc-700 placeholder-zinc-400 font-normal"
                        placeholder="Add an item..."
                        value={checklistItemText}
                        onChange={(e) => setChecklistItemText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            if (checklistItemText.trim()) {
                              setInputChecklist([...inputChecklist, checklistItemText.trim()]);
                              setChecklistItemText('');
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center px-6 py-4 bg-zinc-50/50 border-t border-zinc-100">
                <span className="text-xs text-zinc-400 font-normal tracking-tight">
                  Save to {view}
                </span>
                <div className="flex gap-2">
                  <button type="button" onClick={() => {
                    setIsModalOpen(false);
                    setInputValue('');
                    setInputNotes('');
                    setInputChecklist([]);
                    setChecklistItemText('');
                  }} className="px-4 py-2 text-sm text-zinc-500 hover:text-zinc-900 font-medium transition-colors rounded-lg hover:bg-zinc-200/50">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 text-sm bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 font-medium transition-colors shadow-sm">
                    Add Task
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Task Modal */}
      {(() => {
        const expandedId = Object.keys(expandedTasks).find(id => expandedTasks[id]);
        if (!expandedId) return null;
        const task = tasks.find(t => t.id === expandedId);
        if (!task) return null;

        const moveTarget = task.list === 'inbox' ? 'today' : 'inbox';
        const moveTitle = task.list === 'inbox' ? 'Move to Today' : 'Move to Inbox';

        return (
          <div
            key={task.id}
            id="edit-modal"
            className="fixed inset-0 bg-zinc-900/10 backdrop-blur-sm z-50 flex items-start justify-center pt-32 px-4 transition-opacity duration-200"
            onClick={(e) => {
              if (e.target.id === 'edit-modal') {
                toggleExpand(task.id);
              }
            }}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden border border-zinc-200/60 transform transition-all">
              <div className="px-6 pt-6 pb-5">
                <div className="flex items-start gap-4">
                  <button onClick={() => { completeTask(task.id); toggleExpand(task.id); }} className="mt-0.5 w-5 h-5 rounded-full border border-zinc-300 hover:border-zinc-500 hover:bg-zinc-100 flex-shrink-0 transition-all duration-200 flex items-center justify-center text-transparent hover:text-zinc-500">
                    <iconify-icon icon="lucide:check" className="text-sm"></iconify-icon>
                  </button>
                  <div className="flex-1 flex flex-col pt-0.5">
                    <input
                      type="text"
                      className="w-full text-base bg-transparent border-none p-0 text-zinc-900 font-normal focus:outline-none focus:ring-0"
                      defaultValue={task.title}
                      onBlur={(e) => {
                        if (e.target.value.trim() !== '') {
                          setTasks(tasks.map(t => t.id === task.id ? { ...t, title: e.target.value.trim(), updatedAt: new Date().toISOString() } : t));
                        } else {
                          e.target.value = task.title;
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') e.target.blur();
                      }}
                    />
                    
                    <div className="flex items-center gap-1 mt-2.5 w-fit bg-zinc-50/80 px-1 py-0.5 rounded-lg border border-zinc-200/50 shadow-sm animate-fade-in">
                      <button onClick={() => { moveTask(task.id, moveTarget); toggleExpand(task.id); }} title={moveTitle} className="px-2.5 py-1.5 text-xs text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 rounded-md transition-colors font-medium tracking-tight">
                        {moveTitle}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 flex flex-col gap-3 animate-fade-in border-t border-zinc-100 pt-6 mt-[-1px]">
                <textarea
                  className="w-full text-sm bg-transparent border-none resize-none focus:outline-none p-0 text-zinc-700 placeholder-zinc-400 font-normal min-h-[40px] leading-relaxed overflow-hidden"
                  placeholder="Add notes..."
                  defaultValue={task.notes || ''}
                  onBlur={(e) => updateNotes(task.id, e.target.value)}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                  ref={(el) => {
                    if (el) {
                      el.style.height = 'auto';
                      el.style.height = el.scrollHeight + 'px';
                    }
                  }}
                ></textarea>

                <div className="flex flex-col gap-2 bg-zinc-50/50 p-4 rounded-xl border border-zinc-100/50">
                  <h4 className="text-xs font-medium text-zinc-400 mb-1 tracking-tight uppercase">Checklist</h4>
                  {task.checklist.map(item => (
                    <div key={item.id} className="flex items-start gap-3 group/item py-1">
                      <button onClick={() => toggleChecklistItem(task.id, item.id)} className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-[4px] border ${item.completed ? 'bg-zinc-800 border-zinc-800 text-white' : 'border-zinc-300 hover:border-zinc-400'} flex items-center justify-center transition-all duration-200`}>
                        {item.completed && <iconify-icon icon="lucide:check" className="text-xs"></iconify-icon>}
                      </button>
                      <span className={`text-sm flex-1 font-normal ${item.completed ? 'text-zinc-400 line-through' : 'text-zinc-700'} transition-all`}>{item.text}</span>
                      <button onClick={() => deleteChecklistItem(task.id, item.id)} className="opacity-0 group-hover/item:opacity-100 text-zinc-300 hover:text-red-500 transition-opacity flex items-center">
                        <iconify-icon icon="solar:close-circle-linear" className="text-base"></iconify-icon>
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 py-1 mt-1">
                    <div className="w-4 h-4 flex items-center justify-center text-zinc-300 flex-shrink-0">
                      <iconify-icon icon="solar:add-circle-linear" className="text-sm"></iconify-icon>
                    </div>
                    <input
                      type="text"
                      className="flex-1 text-sm bg-transparent border-none focus:outline-none p-0 text-zinc-700 placeholder-zinc-400 font-normal"
                      placeholder="Add an item..."
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addChecklistItem(task.id, e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-6 py-4 bg-zinc-50/50 border-t border-zinc-100">
                <button onClick={() => { deleteTask(task.id); toggleExpand(task.id); }} title="Delete" className="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center">
                  <iconify-icon icon="solar:trash-bin-trash-linear" className="text-lg"></iconify-icon>
                </button>
                <button onClick={() => toggleExpand(task.id)} className="px-4 py-2 text-sm bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 font-medium transition-colors shadow-sm">
                  Done
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-36 left-0 right-0 flex justify-center z-[60] pointer-events-none px-4">
          <div className="bg-zinc-900 text-white px-4 py-2.5 rounded-full text-[13px] font-medium shadow-xl shadow-zinc-900/20 animate-slide-up flex items-center gap-2.5 border border-zinc-800 tracking-tight">
            <iconify-icon icon="lucide:check-circle-2" className="text-[17px] text-green-400"></iconify-icon>
            {toast}
          </div>
        </div>
      )}
    </Fragment>
  );
}