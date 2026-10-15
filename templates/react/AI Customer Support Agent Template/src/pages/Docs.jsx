import React, { useState } from 'react';
import clsx from 'clsx';

const codeSnippets = {
  react: `npm install @elevenlabs/react

import { useConversation, ConversationProvider } from "@elevenlabs/react";

function Agent() {
  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message) => console.log("Message:", message),
    onError: (error) => console.error("Error:", error),
  });

  const startConversation = async () => {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    await conversation.startSession({
      agentId: "agent_1601kpejkw9cf7vrxfpr9yahw527",
      connectionType: "webrtc", // Recommended
    });
  };

  return (
    <div>
      <button onClick={startConversation}>Start</button>
      <button onClick={() => conversation.endSession()}>Stop</button>
    </div>
  );
}

export default function App() {
  return (
    <ConversationProvider>
      <Agent />
    </ConversationProvider>
  );
}`,
  reactNative: `npm install @elevenlabs/react-native @livekit/react-native...

import { ElevenLabsProvider, useConversation } from "@elevenlabs/react-native";

function App() {
  return (
    <ElevenLabsProvider>
      <ConversationScreen />
    </ElevenLabsProvider>
  );
}

function ConversationScreen() {
  const conversation = useConversation();

  const start = async () => {
    await conversation.startSession({ 
      agentId: "agent_1601kpejkw9cf7vrxfpr9yahw527" 
    });
  };
  // ...
}`,
  widget: `<!-- Fastest method for simple inclusion -->
<script src="https://elevenlabs.io/convai-widget/index.js" async></script>
<elevenlabs-convai agent-id="agent_1601kpejkw9cf7vrxfpr9yahw527"></elevenlabs-convai>`,
  python: `pip install "elevenlabs[pyaudio]"

import os
from elevenlabs.client import ElevenLabs
from elevenlabs.conversational_ai.conversation import Conversation
from elevenlabs.conversational_ai.default_audio_interface import DefaultAudioInterface

client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))

conversation = Conversation(
    client,
    agent_id="agent_1601kpejkw9cf7vrxfpr9yahw527",
    requires_auth=False,
    audio_interface=DefaultAudioInterface(),
)

conversation.start_session()
conversation_id = conversation.wait_for_session_end()`,
  webrtc: `// Server-side: Request a secure token
const response = await fetch(
  "https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=agent_16...",
  { headers: { "xi-api-key": process.env.ELEVENLABS_API_KEY } }
);
const { token } = await response.json();

// Client-side: Consume token securely
conversation.startSession({ 
  conversationToken: token, 
  connectionType: "webrtc" 
});`
};

export default function Docs() {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'react', name: 'React SDK', icon: 'simple-icons:react' },
    { id: 'reactNative', name: 'React Native', icon: 'simple-icons:expo' },
    { id: 'widget', name: 'Embed Widget', icon: 'solar:code-square-linear' },
    { id: 'python', name: 'Python SDK', icon: 'simple-icons:python' },
    { id: 'webrtc', name: 'Secure WebRTC', icon: 'solar:lock-keyhole-linear' },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto pt-6">
      
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Integration Methods</h1>
        <p className="text-slate-500">
          We recommend using the official SDKs or widget for the fastest integration.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Sidebar Nav */}
        <div className="w-full lg:w-64 flex flex-col gap-1 shrink-0">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">Environments</div>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                activeTab === tab.id 
                  ? "bg-blue-50 text-blue-700" 
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              <iconify-icon icon={tab.icon} className="text-lg"></iconify-icon>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Code Content */}
        <div className="flex-1 w-full bg-[#0d1117] rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            
            <button 
              onClick={copyToClipboard}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50"
            >
              {copied ? (
                <><iconify-icon icon="solar:check-read-linear"></iconify-icon> Copied</>
              ) : (
                <><iconify-icon icon="solar:copy-linear"></iconify-icon> Copy Code</>
              )}
            </button>
          </div>
          
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono text-slate-300 leading-relaxed">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        </div>
      </div>
      
      {/* Additional API Info */}
      <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mt-4">
        <h3 className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
          <iconify-icon icon="solar:book-bookmark-linear" className="text-blue-600"></iconify-icon>
          Documentation Resources
        </h3>
        <ul className="text-sm text-slate-600 space-y-2 ml-6 list-disc marker:text-blue-300">
          <li><a href="https://elevenlabs.io/docs/eleven-agents" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Full ElevenAgents Documentation</a></li>
          <li><a href="https://elevenlabs.io/docs/api-reference/introduction" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">API Reference Introduction</a></li>
          <li><a href="https://elevenlabs.io/docs/api-reference/agents/get" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Agents API Endpoints</a></li>
        </ul>
      </div>

    </div>
  );
}