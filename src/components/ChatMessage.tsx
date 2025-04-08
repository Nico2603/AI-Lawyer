"use client";

import React from 'react';
import { FiExternalLink, FiBookOpen } from 'react-icons/fi';
import AgentAvatar from './AgentAvatar';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAI = message.sender === 'ai';
  
  // Función para formatear la hora
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('es', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Simula la detección de referencias legales en el texto
  const hasLegalReferences = isAI && message.content.length > 100;

  return (
    <div className={`flex ${isAI ? 'flex-row' : 'flex-row-reverse'} items-start gap-3 max-w-full`}>
      {isAI && <AgentAvatar size="small" />}
      
      <div className={`flex flex-col ${isAI ? 'items-start' : 'items-end'} max-w-[80%]`}>
        <div className={`chat-bubble ${isAI ? 'chat-bubble-ai' : 'chat-bubble-user'} relative`}>
          <div className="text-sm">{message.content}</div>
          
          {/* Referencias legales (solo para mensajes del AI) */}
          {hasLegalReferences && (
            <div className="mt-3 pt-3 border-t border-neutral-300 text-xs space-y-1.5">
              <div className="font-medium text-neutral-700">Referencias:</div>
              
              <a href="#" className="flex items-center gap-1 text-primary-600 hover:underline">
                <FiBookOpen size={12} />
                <span>Código Civil Colombiano, Art. 1502</span>
                <FiExternalLink size={10} />
              </a>
              
              <a href="#" className="flex items-center gap-1 text-primary-600 hover:underline">
                <FiBookOpen size={12} />
                <span>Ley 1564 de 2012, Art. 87</span>
                <FiExternalLink size={10} />
              </a>
            </div>
          )}
        </div>
        
        <div className={`text-xs text-neutral-400 mt-1 ${isAI ? 'ml-1' : 'mr-1'}`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
      
      {!isAI && (
        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-medium">
          U
        </div>
      )}
    </div>
  );
};

export default ChatMessage; 