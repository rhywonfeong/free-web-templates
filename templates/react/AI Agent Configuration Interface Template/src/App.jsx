import React, { useState, useEffect, useRef } from 'react';

const ARRAY_FIELDS = ['skills', 'tools', 'tasks', 'integrations', 'guardrails', 'agency_goals', 'core_skills'];

const generateId = () => Math.random().toString(36).substr(2, 9);

const INITIAL_DATA = {
  agent: [
    { id: generateId(), key: 'AGENT_NAME', value: 'Vanessa Insights', draggable: true },
    { id: generateId(), key: 'JOB TITLE', value: 'Insights Analyst', draggable: true },
    { id: generateId(), key: 'ROLE', value: 'As a Client Insight Analyst you are responsible for conducting comprehensive market studie. Gathering data from diverse sources like social media and the web to provide detailed insights on market trends, consumer behavior, and industry dynamics.', draggable: true },
    { id: generateId(), key: 'CORE_SKILLS', value: 'Data collection and analysis, trend forecasting, statistical modeling, client behavior analytics.', draggable: true },
    { id: generateId(), key: 'VALUE_PROPOSITION', value: 'I ensure GYNTEKBUSINESS turns consumer insights into actionable steps toward service product innovation and marketing tactics to meet customer demand.', draggable: true },
    { id: generateId(), key: 'MANAGED_BY', value: 'Clarissa Researchix - Senior Research AI Agent Mgr', draggable: true },
    { id: generateId(), key: 'CREATOR', value: 'GYNTEKBUSINESS and Gia Marie Works, Founder', draggable: true },
    { id: generateId(), key: 'AGENCY_GOALS', value: 'We build custom AI Agents, Agent Teams, Agent Team Kits for small to medium sized businesses. Agency goals are to support strategic marketing, sales planning, and decision-making.', draggable: true },
  ],
  tasks: [
    { id: generateId(), key: 'tools', value: 'Fetch Data, Cleanse Data, Analyze Trends, Generate Charts, Compile Report, Send Email', draggable: true }
  ],
  guardrails: [
    { id: generateId(), key: 'guardrails', value: 'Do not hallucinate data points. Always cite sources, Avoid sharing Personally Identifiable Information (PII).', draggable: true }
  ]
};

const escapeHtml = (unsafe) => {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const highlightJSON = (str) => {
  return str.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    let cls = 'text-stone-300';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'text-amber-200/90'; // keys
      } else {
        cls = 'text-green-300/80'; // strings
      }
    } else if (/true|false/.test(match)) {
      cls = 'text-rose-300';
    } else if (/null/.test(match)) {
      cls = 'text-stone-500';
    } else {
      cls = 'text-blue-300/90'; // numbers
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
};

export default function App() {
  const [view, setView] = useState('config'); // 'config' | 'automation' | 'chat'
  const [activeTab, setActiveTab] = useState('agent');
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isEditingJson, setIsEditingJson] = useState(false);
  const [jsonText, setJsonText] = useState('');
  
  const [chatAgentName, setChatAgentName] = useState('Vanessa Insights');
  const [chatAgentRole, setChatAgentRole] = useState('Insights Analyst');

  // Drag and drop state
  const [draggedItem, setDraggedItem] = useState(null);

  // Sync Form to JSON
  useEffect(() => {
    if (!isEditingJson) {
      const obj = {};
      formData[activeTab].forEach(field => {
        let val = field.value;
        const keyLower = field.key.toLowerCase();
        
        if (ARRAY_FIELDS.includes(keyLower)) {
          val = val.split(',').map(s => s.trim()).filter(Boolean);
        } else if (val.trim().startsWith('[') || val.trim().startsWith('{')) {
          try {
            val = JSON.parse(val);
          } catch (e) {
            // Keep as string if invalid JSON
          }
        }
        obj[field.key] = val;
      });
      setJsonText(JSON.stringify(obj, null, 2));
    }
  }, [formData, activeTab, isEditingJson]);

  const handleFieldChange = (section, id, keyOrValue, newValue) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map(item => 
        item.id === id ? { ...item, [keyOrValue]: newValue } : item
      )
    }));
  };

  const handleAddField = (section) => {
    setFormData(prev => ({
      ...prev,
      [section]: [
        ...prev[section],
        { id: generateId(), key: 'NEW_KEY', value: '', draggable: true }
      ]
    }));
  };

  const handleRemoveField = (section, id) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  // Sync JSON to Form
  const handleJsonBlur = () => {
    setIsEditingJson(false);
    try {
      const parsed = JSON.parse(jsonText);
      
      // Update form data while trying to preserve existing IDs for stability
      const currentFields = formData[activeTab];
      const newFields = [];
      
      Object.entries(parsed).forEach(([key, value]) => {
        const existingField = currentFields.find(f => f.key.toLowerCase() === key.toLowerCase());
        
        let displayValue = value;
        if (typeof value === 'object' && value !== null) {
          if (ARRAY_FIELDS.includes(key.toLowerCase()) && Array.isArray(value) && (value.length === 0 || typeof value[0] === 'string')) {
            displayValue = value.join(', ');
          } else {
            displayValue = JSON.stringify(value, null, 2);
          }
        }

        newFields.push({
          id: existingField ? existingField.id : generateId(),
          key: key,
          value: String(displayValue),
          draggable: existingField ? existingField.draggable : true
        });
      });

      setFormData(prev => ({
        ...prev,
        [activeTab]: newFields
      }));

    } catch (err) {
      // If invalid JSON, revert to what formData generates next render
      setJsonText(jsonText); 
    }
  };

  const handleSaveAndDeploy = () => {
    let name = chatAgentName;
    let role = chatAgentRole;
    
    formData.agent.forEach(f => {
      const k = f.key.toLowerCase();
      if (k === 'name' || k === 'agent_name') name = f.value || name;
      if (k === 'job_title' || k === 'role' || k === 'job') role = f.value || role;
    });

    setChatAgentName(name);
    setChatAgentRole(role);
    setView('chat');
  };

  const handleDragStart = (e, section, index) => {
    setDraggedItem({ section, index });
    // setTimeout to allow the drag image to generate before we fade the original
    setTimeout(() => {
      e.target.classList.add('opacity-40', 'scale-[0.98]');
    }, 0);
  };

  const handleDragEnd = (e) => {
    setDraggedItem(null);
    e.target.classList.remove('opacity-40', 'scale-[0.98]');
  };

  const handleDragOver = (e, section, index) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.section !== section) return;
    if (draggedItem.index === index) return;

    const items = [...formData[section]];
    const draggedItemContent = items[draggedItem.index];
    
    items.splice(draggedItem.index, 1);
    items.splice(index, 0, draggedItemContent);
    
    setDraggedItem({ section, index });
    setFormData(prev => ({ ...prev, [section]: items }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-12 relative z-0">
      {/* Abstract Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] rounded-full mix-blend-multiply filter blur-[100px] bg-amber-200/40"></div>
        <div className="absolute top-[30%] right-[15%] w-[35rem] h-[35rem] rounded-full mix-blend-multiply filter blur-[120px] bg-yellow-200/30"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[40rem] h-[40rem] rounded-full mix-blend-multiply filter blur-[120px] bg-stone-300/40"></div>
      </div>

      {/* Application Container */}
      <div className="flex flex-col shrink-0 overflow-hidden bg-[#faf9f8] w-[1048px] h-[900px] rounded-[16px] mr-auto ml-auto pt-2 pr-2 pb-2 pl-2 relative shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15),0_30px_60px_-30px_rgba(0,0,0,0.2),inset_0_-2px_6px_0_rgba(10,37,64,0.1)] ring-1 ring-stone-900/5">
        
        {/* Glass Frame */}
        <div className="overflow-hidden bg-white/70 w-full h-full border-white/80 border rounded-xl relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8),0_8px_32px_rgba(0,0,0,0.02)] backdrop-blur-2xl">
          
          {/* VIEW 1: Configuration Form */}
          <div className={`absolute inset-0 flex transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] bg-stone-50/30 z-10 ${view === 'config' ? 'translate-x-0' : '-translate-x-full'}`}>
            
            {/* Left Column: Form */}
            <div className="w-[55%] h-full flex flex-col border-r border-stone-200/80 bg-white/50">
              <header className="shrink-0 bg-white/60 border-stone-200/80 border-b pt-6 pr-8 pb-5 pl-8 backdrop-blur-md">
                <h1 className="flex items-center gap-2 text-xl font-medium text-stone-800 tracking-tight">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-yellow-600" style={{ color: 'rgb(202, 138, 4)' }}>
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M13.765 2.152C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7s-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453s.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.62 1.62 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"></path>
                    </g>
                  </svg> 
                  Agent Configuration
                </h1>
                <p className="leading-relaxed text-xs text-stone-500 mt-1.5">Define the identity, capabilities, and constraints for your AI assistant</p>
              </header>

              <div className="flex-1 overflow-y-auto pt-6 pr-8 pb-8 pl-8">
                
                {/* SECTION: Agent Identity */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <iconify-icon icon="solar:user-id-linear" className="text-yellow-600" stroke-width="1.5" width="24" height="24" style={{ color: 'rgb(202, 138, 4)' }}></iconify-icon>
                    <h2 className="text-xs font-semibold text-stone-800 uppercase tracking-widest">Agent Identity</h2>
                    <div className="h-px bg-stone-200 flex-1 ml-2"></div>
                  </div>
                  <div className="space-y-4">
                    {formData.agent.map((field, index) => (
                      <div 
                        key={field.id}
                        draggable={field.draggable}
                        onDragStart={(e) => handleDragStart(e, 'agent', index)}
                        onDragOver={(e) => handleDragOver(e, 'agent', index)}
                        onDragEnd={handleDragEnd}
                        className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60"
                      >
                        <div className="flex items-center justify-between mb-1.5 px-1">
                          <div className="flex gap-1.5 items-center">
                            <div className="cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
                              <iconify-icon icon="solar:reorder-linear" className="text-xs"></iconify-icon>
                            </div>
                            <iconify-icon icon="solar:pen-2-linear" className="text-[10px] text-stone-400"></iconify-icon>
                            <input 
                              type="text" 
                              value={field.key}
                              onChange={(e) => handleFieldChange('agent', field.id, 'key', e.target.value)}
                              className="block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-sm font-medium text-stone-600 bg-transparent w-auto min-w-[6rem] border-stone-300 border-b p-0" 
                            />
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveField('agent', field.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400"
                          >
                            <iconify-icon icon="solar:trash-bin-trash-linear" className="text-sm"></iconify-icon>
                          </button>
                        </div>
                        <textarea 
                          value={field.value}
                          onChange={(e) => handleFieldChange('agent', field.id, 'value', e.target.value)}
                          className="placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" 
                          rows={field.value.length > 80 ? 2 : 1}
                        />
                      </div>
                    ))}
                  </div>
                  <button 
                    type="button" 
                    onClick={() => handleAddField('agent')}
                    className="transition-colors flex gap-1 hover:text-stone-900 text-[11px] font-medium text-stone-500 w-max mt-3 ml-2 items-center justify-start"
                  >
                    <iconify-icon icon="solar:add-circle-linear" className="text-sm"></iconify-icon> Add Field
                  </button>
                </div>

                {/* SECTION: Commands */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <iconify-icon icon="solar:checklist-minimalistic-linear" className="text-yellow-600" stroke-width="1.5" width="22" height="22" style={{ color: 'rgb(202, 138, 4)' }}></iconify-icon>
                    <h2 className="text-xs font-semibold text-stone-800 uppercase tracking-widest">Commands</h2>
                    <div className="h-px bg-stone-200 flex-1 ml-2"></div>
                  </div>
                  <div className="space-y-4">
                    {formData.tasks.map((field, index) => (
                      <div 
                        key={field.id}
                        draggable={field.draggable}
                        onDragStart={(e) => handleDragStart(e, 'tasks', index)}
                        onDragOver={(e) => handleDragOver(e, 'tasks', index)}
                        onDragEnd={handleDragEnd}
                        className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60"
                      >
                        <div className="flex items-center justify-between mb-1.5 px-1">
                          <div className="flex gap-1.5 items-center">
                            <div className="cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
                              <iconify-icon icon="solar:reorder-linear" className="text-xs"></iconify-icon>
                            </div>
                            <iconify-icon icon="solar:pen-2-linear" className="text-[10px] text-stone-400"></iconify-icon>
                            <input 
                              type="text" 
                              value={field.key}
                              onChange={(e) => handleFieldChange('tasks', field.id, 'key', e.target.value)}
                              className="block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-sm font-medium text-stone-600 bg-transparent w-auto min-w-[6rem] border-stone-300 border-b p-0" 
                            />
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveField('tasks', field.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400"
                          >
                            <iconify-icon icon="solar:trash-bin-trash-linear" className="text-sm"></iconify-icon>
                          </button>
                        </div>
                        <textarea 
                          value={field.value}
                          onChange={(e) => handleFieldChange('tasks', field.id, 'value', e.target.value)}
                          className="placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" 
                          rows={field.value.length > 80 ? 2 : 1}
                        />
                      </div>
                    ))}
                  </div>
                  <button 
                    type="button" 
                    onClick={() => handleAddField('tasks')}
                    className="mt-3 transition-colors flex gap-1 hover:text-stone-900 text-[11px] font-medium text-stone-500 w-max items-center justify-start ml-2"
                  >
                    <iconify-icon icon="solar:add-circle-linear" className="text-sm"></iconify-icon> Add Field
                  </button>
                </div>

                {/* SECTION: Guardrails */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-4">
                    <iconify-icon icon="solar:shield-warning-linear" className="text-yellow-600" stroke-width="1.5" width="22" height="22" style={{ color: 'rgb(202, 138, 4)' }}></iconify-icon>
                    <h2 className="text-xs font-semibold text-stone-800 uppercase tracking-widest">Constraints</h2>
                    <div className="h-px bg-stone-200 flex-1 ml-2"></div>
                  </div>
                  <div className="space-y-4">
                    {formData.guardrails.map((field, index) => (
                      <div 
                        key={field.id}
                        draggable={field.draggable}
                        onDragStart={(e) => handleDragStart(e, 'guardrails', index)}
                        onDragOver={(e) => handleDragOver(e, 'guardrails', index)}
                        onDragEnd={handleDragEnd}
                        className="field-group relative group transition-all duration-200 bg-white/40 p-1 rounded-lg border border-transparent hover:border-stone-200/60 hover:bg-white/60"
                      >
                        <div className="flex items-center justify-between mb-1.5 px-1">
                          <div className="flex gap-1.5 items-center">
                            <div className="cursor-grab active:cursor-grabbing transition-colors p-1 -ml-1 rounded flex items-center justify-center text-stone-400 hover:text-yellow-700 hover:bg-stone-100/50" title="Drag to reorder">
                              <iconify-icon icon="solar:reorder-linear" className="text-xs"></iconify-icon>
                            </div>
                            <iconify-icon icon="solar:pen-2-linear" className="text-[10px] text-stone-400"></iconify-icon>
                            <input 
                              type="text" 
                              value={field.key}
                              onChange={(e) => handleFieldChange('guardrails', field.id, 'key', e.target.value)}
                              className="block border-dashed focus:ring-0 focus:outline-none focus:border-stone-600 transition-colors hover:border-stone-400 text-sm font-medium text-stone-600 bg-transparent w-auto min-w-[6rem] border-stone-300 border-b p-0" 
                            />
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveField('guardrails', field.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 text-stone-400"
                          >
                            <iconify-icon icon="solar:trash-bin-trash-linear" className="text-sm"></iconify-icon>
                          </button>
                        </div>
                        <textarea 
                          value={field.value}
                          onChange={(e) => handleFieldChange('guardrails', field.id, 'value', e.target.value)}
                          className="placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-600/10 focus:border-yellow-600/40 transition-all resize-y min-h-[40px] text-sm text-stone-800 bg-white w-full border-stone-200 border rounded-md px-3 py-2 shadow-sm" 
                          rows={field.value.length > 80 ? 2 : 1}
                        />
                      </div>
                    ))}
                  </div>
                  <button 
                    type="button" 
                    onClick={() => handleAddField('guardrails')}
                    className="mt-3 transition-colors flex gap-1 hover:text-stone-900 text-[11px] font-medium text-stone-500 w-max items-center justify-start ml-2"
                  >
                    <iconify-icon icon="solar:add-circle-linear" className="text-sm"></iconify-icon> Add Field
                  </button>
                </div>

              </div>

              <div className="p-5 border-t backdrop-blur-md shrink-0 flex justify-end gap-3 border-stone-200/80 bg-white/60">
                <button type="button" className="px-5 py-2.5 text-sm font-medium transition-colors text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg">
                  Cancel
                </button>
                <button 
                  type="button" 
                  onClick={handleSaveAndDeploy}
                  className="transition-all flex hover:bg-stone-800 hover:shadow-md text-sm font-medium text-white bg-stone-900 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm gap-x-2 items-center"
                >
                  Save &amp; Deploy
                  <iconify-icon icon="solar:arrow-right-linear" className="text-base" stroke-width="1.5"></iconify-icon>
                </button>
              </div>
            </div>

            {/* Right Column: Editable JSON Output */}
            <div className="w-[45%] h-full bg-[#faf9f8] flex flex-col relative z-0">
              <header className="px-5 py-4 border-b shrink-0 flex justify-between items-center backdrop-blur-md border-stone-200/80 bg-white/50">
                <div className="flex gap-4 items-center">
                  <button 
                    onClick={() => setActiveTab('agent')}
                    className={`text-[11px] font-semibold uppercase tracking-widest pb-1 px-1 transition-colors border-b-2 ${activeTab === 'agent' ? 'text-stone-800 border-yellow-500' : 'text-stone-400 border-transparent hover:text-stone-600 hover:border-stone-300'}`}
                  >Agent Identity</button>
                  <button 
                    onClick={() => setActiveTab('tasks')}
                    className={`text-[11px] font-semibold uppercase tracking-widest pb-1 px-1 transition-colors border-b-2 ${activeTab === 'tasks' ? 'text-stone-800 border-yellow-500' : 'text-stone-400 border-transparent hover:text-stone-600 hover:border-stone-300'}`}
                  >Commands</button>
                  <button 
                    onClick={() => setActiveTab('guardrails')}
                    className={`text-[11px] font-semibold uppercase tracking-widest pb-1 px-1 transition-colors border-b-2 ${activeTab === 'guardrails' ? 'text-stone-800 border-yellow-500' : 'text-stone-400 border-transparent hover:text-stone-600 hover:border-stone-300'}`}
                  >Constraints</button>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(217,119,6,0.5)] bg-amber-500/90 animate-pulse"></div>
                  <span className="text-[10px] text-stone-400 font-medium">Live Sync</span>
                </div>
              </header>

              <div className="flex-1 overflow-hidden group pt-5 pr-5 pb-5 pl-5 relative bg-gradient-to-br from-transparent to-stone-50/50">
                <div className="absolute inset-5 bg-[#121211] rounded-2xl border shadow-xl flex flex-col overflow-hidden border-stone-800/80 ring-1 ring-white/5">
                  {/* Mac-style Header */}
                  <div className="flex shrink-0 bg-[#1a1a19] h-9 border-stone-800 border-b px-4 items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 hover:bg-red-500 transition-colors cursor-pointer bg-green-500 rounded-full"></div>
                      <div className="w-2.5 h-2.5 hover:bg-yellow-500 transition-colors cursor-pointer bg-yellow-300 rounded-full"></div>
                      <div className="w-2.5 h-2.5 hover:bg-green-500 transition-colors cursor-pointer bg-stone-50 rounded-full"></div>
                    </div>
                    <span className="text-[9px] uppercase group-hover:opacity-100 transition-opacity duration-300 text-stone-400 tracking-widest font-mono opacity-0">
                      Click to Edit
                    </span>
                  </div>

                  {/* Editor / Display Container */}
                  <div className="relative flex-1 bg-[#121211] overflow-hidden">
                    {!isEditingJson ? (
                      <pre 
                        onClick={() => setIsEditingJson(true)}
                        className="overflow-auto dark-scrollbar whitespace-pre-wrap break-words leading-relaxed cursor-text transition-colors duration-150 z-10 text-[11px] hover:bg-white/[0.02] text-stone-300 font-mono pt-5 pr-5 pb-5 pl-5 absolute top-0 right-0 bottom-0 left-0"
                        dangerouslySetInnerHTML={{ __html: highlightJSON(jsonText) }}
                      />
                    ) : (
                      <textarea 
                        spellCheck="false" 
                        autoFocus
                        value={jsonText}
                        onChange={(e) => setJsonText(e.target.value)}
                        onBlur={handleJsonBlur}
                        className="border-none focus:ring-0 focus:outline-none resize-none dark-scrollbar whitespace-pre-wrap break-words leading-relaxed text-[11px] text-amber-400 font-mono bg-[#121211] w-full h-full z-30 pt-5 pr-5 pb-5 pl-5 absolute top-0 right-0 bottom-0 left-0" 
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VIEW 2: Chat Application */}
          <div className={`absolute inset-0 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] backdrop-blur-2xl bg-[#faf9f8]/90 z-20 ${view === 'chat' ? 'translate-x-0' : 'translate-x-full'}`}>
            <header className="flex shrink-0 bg-white/90 border-stone-200 border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between backdrop-blur-md shadow-sm relative z-10">
              <div className="flex gap-4 items-center">
                <button 
                  onClick={() => setView('config')}
                  className="flex transition-all hover:bg-stone-100 hover:text-stone-900 text-stone-500 w-9 h-9 rounded-lg items-center justify-center border border-transparent hover:border-stone-200"
                >
                  <iconify-icon icon="solar:alt-arrow-left-linear" className="text-xl" stroke-width="1.5"></iconify-icon>
                </button>
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 p-[1px] shadow-sm">
                    <div className="flex bg-white w-full h-full rounded-[7px] items-center justify-center">
                      <iconify-icon icon="solar:cpu-linear" className="text-xl text-yellow-600" stroke-width="1.5"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h2 className="leading-tight text-sm font-medium text-stone-800 tracking-tight">{chatAgentName}</h2>
                    <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.4)]"></div>
                        <p className="text-[11px] text-stone-500 font-medium">{chatAgentRole}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex transition-colors hover:bg-stone-100 text-stone-400 hover:text-stone-700 w-9 h-9 rounded-lg items-center justify-center">
                <iconify-icon icon="solar:menu-dots-bold" className="text-xl"></iconify-icon>
              </button>
            </header>

            <div className="flex-1 overflow-y-auto bg-transparent p-6 space-y-6 relative z-0">
              <div className="flex max-w-[85%] gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex shrink-0 bg-gradient-to-br from-yellow-500 to-amber-600 w-10 h-10 rounded-lg items-center justify-center shadow-sm">
                  <iconify-icon icon="solar:cpu-linear" className="text-lg text-white" stroke-width="1.5"></iconify-icon>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-stone-500 ml-1">Agent</span>
                  <div className="leading-relaxed text-sm text-stone-700 bg-white border border-stone-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    Hello! I'm configured and ready to help. I specialize in parsing CSVs, generating summaries, and creating charts based on my core skills. How can I assist you today?
                  </div>
                </div>
              </div>

              <div className="flex max-w-[85%] gap-4 flex-row-reverse ml-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/3c569156-7c44-4e1f-926c-0bfb85c32f81/320w.png" alt="User" className="shrink-0 w-10 h-10 object-cover border border-stone-200 rounded-lg shadow-sm" />
                <div className="flex flex-col gap-1.5 items-end">
                  <span className="text-xs font-medium text-stone-500 mr-1">You</span>
                  <div className="leading-relaxed text-sm font-medium text-white bg-stone-900 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
                    Can you analyze this sales_q3.csv file and give me a breakdown of revenue by region?
                  </div>
                </div>
              </div>

              <div className="flex max-w-[85%] gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex shrink-0 bg-gradient-to-br from-yellow-500 to-amber-600 w-10 h-10 rounded-lg items-center justify-center shadow-sm">
                  <iconify-icon icon="solar:cpu-linear" className="text-lg text-white" stroke-width="1.5"></iconify-icon>
                </div>
                <div className="flex gap-1.5 bg-white border border-stone-200 h-11 rounded-2xl rounded-tl-sm px-4 shadow-sm items-center">
                  <div className="w-1.5 h-1.5 animate-bounce bg-yellow-500 rounded-full" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 animate-bounce bg-yellow-500 rounded-full" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 animate-bounce bg-yellow-500 rounded-full" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto mt-10 w-full animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <button className="bg-white border border-stone-200 rounded-xl p-4 text-left hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm flex flex-col gap-1 group">
                  <span className="flex items-center gap-2 text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
                    <iconify-icon icon="solar:chart-square-linear" className="text-lg text-yellow-600" stroke-width="1.5"></iconify-icon>
                    Summarize Data
                  </span>
                  <span className="block text-xs text-stone-500">Generate a quick overview of metrics</span>
                </button>
                <button className="bg-white border border-stone-200 rounded-xl p-4 text-left hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm flex flex-col gap-1 group">
                  <span className="flex items-center gap-2 text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
                    <iconify-icon icon="solar:graph-up-linear" className="text-lg text-yellow-600" stroke-width="1.5"></iconify-icon>
                    Trend Analysis
                  </span>
                  <span className="block text-xs text-stone-500">Identify underlying market trends</span>
                </button>
                <button className="bg-white border border-stone-200 rounded-xl p-4 text-left hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm flex flex-col gap-1 group">
                  <span className="flex items-center gap-2 text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
                    <iconify-icon icon="solar:magic-stick-3-linear" className="text-lg text-yellow-600" stroke-width="1.5"></iconify-icon>
                    Predictive Modeling
                  </span>
                  <span className="block text-xs text-stone-500">Forecast future outcomes</span>
                </button>
                <button className="bg-white border border-stone-200 rounded-xl p-4 text-left hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm flex flex-col gap-1 group">
                  <span className="flex items-center gap-2 text-sm font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
                    <iconify-icon icon="solar:users-group-rounded-linear" className="text-lg text-yellow-600" stroke-width="1.5"></iconify-icon>
                    Consumer Behavior
                  </span>
                  <span className="block text-xs text-stone-500">Analyze purchasing patterns</span>
                </button>
              </div>
            </div>

            <div className="shrink-0 bg-white/80 backdrop-blur-xl border-stone-200 border-t p-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex gap-2 focus-within:ring-2 focus-within:ring-yellow-600/10 focus-within:border-yellow-600/40 transition-all bg-white border-stone-300 border rounded-2xl p-2 relative shadow-sm items-end">
                  <button className="transition-colors shrink-0 hover:bg-stone-100 text-stone-400 hover:text-stone-600 rounded-lg p-2">
                    <iconify-icon icon="solar:paperclip-linear" className="text-xl" stroke-width="1.5"></iconify-icon>
                  </button>
                  <textarea rows="1" className="border-none focus:ring-0 resize-y placeholder-stone-400 overflow-y-auto text-sm text-stone-800 bg-transparent w-full max-h-32 py-2.5 outline-none" placeholder="Message Agent..."></textarea>
                  <button className="transition-all shrink-0 hover:bg-stone-800 text-white bg-stone-900 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm">
                    <iconify-icon icon="solar:plain-2-linear" className="text-xl" stroke-width="1.5"></iconify-icon>
                  </button>
                </div>
                <div className="text-center mt-3">
                  <span className="text-[10px] text-stone-400 font-medium">Agent responses are generated by AI and may be inaccurate.</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}