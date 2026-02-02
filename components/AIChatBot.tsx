
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello. I can answer questions about Yusra\'s work.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const botMsg = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: botMsg || 'Error communicating with assistant.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="bg-[#0a0a0a] minimal-border w-72 md:w-80 h-[450px] mb-4 rounded-lg flex flex-col shadow-2xl">
          <div className="p-4 border-b border-white/5 flex justify-between items-center">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white">Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white">
              <i className="fa-solid fa-xmark text-xs" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className={`text-[8px] uppercase tracking-widest mb-1 ${m.role === 'user' ? 'text-right' : 'text-left'} text-slate-600 font-bold`}>
                  {m.role === 'model' ? 'AI' : 'You'}
                </span>
                <div className={`text-xs leading-relaxed ${m.role === 'user' ? 'text-right text-white' : 'text-left text-slate-400'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-[8px] uppercase tracking-widest text-slate-600 animate-pulse">Thinking...</div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white/[0.02] border-t border-white/5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type message..."
              className="w-full bg-transparent text-xs text-white focus:outline-none placeholder-slate-700"
            />
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-sm hover:scale-105 transition-all duration-300 shadow-xl"
      >
        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-terminal'}`} />
      </button>
    </div>
  );
};
