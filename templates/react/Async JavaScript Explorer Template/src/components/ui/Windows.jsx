import { clsx } from 'clsx';
import { MonoText } from './Typography';

export function CodeWindow({ title = "Editor", codeLines = [], className, style }) {
  return (
    <div 
      className={clsx(
        "bg-indigo rounded-[30px] border border-accent-blue/30 overflow-hidden shadow-2xl flex flex-col backdrop-blur-sm",
        className
      )}
      style={style}
    >
      {/* Top Bar */}
      <div className="h-[60px] bg-indigo border-b border-white/5 flex items-center px-6 relative">
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-[#FF5F56]" />
          <div className="w-4 h-4 rounded-full bg-[#FFBD2E]" />
          <div className="w-4 h-4 rounded-full bg-[#27C93F]" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <MonoText variant="caption">{title}</MonoText>
        </div>
      </div>
      
      {/* Code Body */}
      <div className="p-10 flex-grow font-mono text-[28px] leading-loose text-gray-300">
        {codeLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-12 text-gray-600 select-none">{i + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ConsoleWindow({ title = "Console", children, className }) {
  return (
    <div 
      className={clsx(
        "bg-ui rounded-[34px] border border-gray-700/50 overflow-hidden shadow-2xl flex flex-col w-[80%]",
        className
      )}
    >
       {/* Top Bar */}
       <div className="h-[60px] bg-ui/80 border-b border-white/5 flex items-center px-6 relative">
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-[#FF5F56]" />
          <div className="w-4 h-4 rounded-full bg-[#FFBD2E]" />
          <div className="w-4 h-4 rounded-full bg-[#27C93F]" />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <MonoText variant="caption" className="text-gray-400">{title}</MonoText>
        </div>
      </div>
      
      {/* Body */}
      <div className="p-12 flex-grow">
        {children}
      </div>
    </div>
  );
}

export function TreeWindow({ title = "Repository", children, className }) {
  return (
    <div 
      className={clsx(
        "bg-maroon rounded-[28px] border border-accent-rose/40 overflow-hidden shadow-2xl flex flex-col",
        className
      )}
    >
       {/* Top Bar */}
       <div className="h-[60px] bg-accent-rose flex items-center justify-center px-6">
        <MonoText variant="code" className="text-white font-bold">{title}</MonoText>
      </div>
      
      {/* Body */}
      <div className="p-10 flex-grow text-white">
        {children}
      </div>
    </div>
  );
}