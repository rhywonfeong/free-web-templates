import React, { useState } from 'react';
import { useConversation, ConversationProvider } from "@elevenlabs/react";
import clsx from 'clsx';

function InteractionCard() {
  const [hasPermission, setHasPermission] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  
  // Initialize the ElevenLabs conversation hook inside the Provider context
  const conversation = useConversation({
    onConnect: () => console.log("Connected to agent"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message) => console.log("Message received:", message),
    onError: (error) => {
      console.error("Conversation error:", error);
      setErrorMsg(typeof error === 'string' ? error : error.message || "An error occurred during connection.");
    },
    onModeChange: (mode) => console.log("Mode changed to:", mode),
  });

  const checkPermissionsAndStart = async () => {
    setErrorMsg("");
    try {
      // Explicitly request mic permission first for better UX
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      
      // Stop the test stream tracks immediately so we don't hold them
      stream.getTracks().forEach(track => track.stop());
      
      // Start the actual session
      await conversation.startSession({
        agentId: "agent_1601kpejkw9cf7vrxfpr9yahw527",
        connectionType: "webrtc",
      });
      
    } catch (err) {
      setHasPermission(false);
      setErrorMsg("Microphone permission denied or hardware unavailable. Please allow access to test the agent.");
      console.error("Mic access error:", err);
    }
  };

  const handleStop = async () => {
    await conversation.endSession();
  };

  // Status derived from the hook
  const isConnected = conversation.status === "connected";
  const isConnecting = conversation.status === "connecting";
  const isSpeaking = conversation.isSpeaking;

  return (
    <div className="w-full bg-white border border-slate-200/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative">
      
      {/* Top bar status */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
            agent_1601kpejkw9cf7vrxfpr9yahw527
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className={clsx(
            "w-2 h-2 rounded-full",
            isConnected ? "bg-emerald-500" : isConnecting ? "bg-amber-500 animate-pulse" : "bg-slate-300"
          )}></div>
          <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">
            {conversation.status || "disconnected"}
          </span>
        </div>
      </div>

      {/* Visualizer Area */}
      <div className="h-80 flex flex-col items-center justify-center relative bg-gradient-to-b from-white to-slate-50/50 p-6">
        
        {errorMsg && (
          <div className="absolute top-4 left-4 right-4 bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg flex items-start gap-2">
            <iconify-icon icon="solar:danger-triangle-linear" className="mt-0.5 text-lg"></iconify-icon>
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Central Avatar / Visualizer */}
        <div className="relative flex items-center justify-center w-32 h-32 mb-8">
          {/* Pulse effect behind avatar when speaking */}
          {isSpeaking && (
             <div className="absolute inset-0 rounded-full animate-pulse-ring"></div>
          )}
          
          <div className={clsx(
            "w-24 h-24 rounded-full z-10 flex items-center justify-center shadow-lg transition-all duration-500",
            isConnected ? "bg-blue-600" : "bg-slate-200",
            isSpeaking ? "scale-110" : "scale-100"
          )}>
            <iconify-icon 
              icon={isConnected ? "solar:user-speak-bold" : "solar:user-linear"} 
              className={clsx("text-4xl", isConnected ? "text-white" : "text-slate-400")}
            ></iconify-icon>
          </div>
        </div>

        {/* Audio Wave Visualizer (Fake for UI feedback) */}
        <div className="h-8 flex items-end gap-1 mb-4">
          {isConnected && (
            <>
              <div className={clsx("w-1.5 bg-blue-500 rounded-full transition-all", isSpeaking ? "animate-wave" : "h-1 bg-slate-300")}></div>
              <div className={clsx("w-1.5 bg-blue-400 rounded-full transition-all", isSpeaking ? "animate-wave" : "h-1 bg-slate-300")}></div>
              <div className={clsx("w-1.5 bg-blue-600 rounded-full transition-all", isSpeaking ? "animate-wave" : "h-1 bg-slate-300")}></div>
              <div className={clsx("w-1.5 bg-blue-400 rounded-full transition-all", isSpeaking ? "animate-wave" : "h-1 bg-slate-300")}></div>
              <div className={clsx("w-1.5 bg-blue-500 rounded-full transition-all", isSpeaking ? "animate-wave" : "h-1 bg-slate-300")}></div>
            </>
          )}
        </div>

        <div className="text-slate-500 text-sm font-medium h-5">
          {isConnected ? (isSpeaking ? "Agent is speaking..." : "Listening...") : "Ready to connect"}
        </div>
      </div>

      {/* Controls */}
      <div className="p-6 bg-white border-t border-slate-100 flex justify-center gap-4">
        {!isConnected && !isConnecting && (
          <button
            onClick={checkPermissionsAndStart}
            className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all shadow-sm hover:shadow active:scale-95"
          >
            <iconify-icon icon="solar:phone-calling-linear" className="text-lg"></iconify-icon>
            Start Conversation
          </button>
        )}

        {isConnecting && (
          <button
            disabled
            className="flex items-center gap-2 px-8 py-3.5 bg-slate-100 text-slate-400 rounded-xl font-medium cursor-not-allowed"
          >
            <iconify-icon icon="solar:refresh-linear" className="text-lg animate-spin"></iconify-icon>
            Connecting...
          </button>
        )}

        {isConnected && (
          <button
            onClick={handleStop}
            className="flex items-center gap-2 px-8 py-3.5 bg-red-50 text-red-600 border border-red-100 rounded-xl font-medium hover:bg-red-100 transition-all shadow-sm active:scale-95"
          >
            <iconify-icon icon="solar:end-call-linear" className="text-lg"></iconify-icon>
            End Call
          </button>
        )}
      </div>
    </div>
  );
}

export default function Demo() {
  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto w-full pt-12">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Live Agent Interaction</h1>
        <p className="text-slate-500">Test your Customer Support agent in real-time. Ensure your microphone is connected.</p>
      </div>

      {/* Ensure the hook is consumed within the provider context */}
      <ConversationProvider>
        <InteractionCard />
      </ConversationProvider>
      
      <p className="mt-6 text-sm text-slate-400 flex items-center gap-2 text-center max-w-md">
         <iconify-icon icon="solar:info-circle-linear"></iconify-icon>
         Note: This demo uses your browser's microphone. Ensure you grant permissions when prompted.
      </p>
    </div>
  );
}