"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiMic, FiMicOff, FiLoader, FiVolume2 } from 'react-icons/fi';
import ChatMessage from './ChatMessage';
import AgentAvatar from './AgentAvatar';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hola, soy AI Lawyer, tu asistente legal especializado en leyes colombianas. ¿En qué puedo ayudarte hoy?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '' || isProcessing) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsProcessing(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Estoy procesando tu consulta sobre leyes colombianas. En un momento te daré una respuesta detallada basada en la legislación vigente.',
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);
    }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Aquí iría la integración con servicios como Deepgram para Speech-to-Text
  };

  return (
    <div className="card flex flex-col h-[600px] rounded-xl overflow-hidden">
      {/* Chat header */}
      <div className="bg-white p-4 border-b border-neutral-200 flex items-center gap-3">
        <AgentAvatar />
        <div>
          <h3 className="font-medium text-neutral-800">AI Lawyer Assistant</h3>
          <p className="text-sm text-neutral-500">En línea</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-grow p-4 overflow-y-auto bg-neutral-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isProcessing && (
            <div className="flex items-center gap-2 text-neutral-500 animate-pulse">
              <FiLoader className="animate-spin" />
              <span>AI Lawyer está escribiendo...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat input */}
      <div className="bg-white p-3 border-t border-neutral-200">
        <div className="flex items-center gap-2">
          <div className="relative flex-grow">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu consulta legal aquí..."
              className="input min-h-[50px] pr-12 resize-none"
              rows={1}
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-primary-500 p-1"
              onClick={handleSendMessage}
              disabled={isProcessing || inputValue.trim() === ''}
            >
              <FiSend size={18} />
            </button>
          </div>
          
          <button 
            className={`p-3 rounded-full ${isRecording ? 'bg-red-500 text-white' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'}`}
            onClick={toggleRecording}
          >
            {isRecording ? <FiMicOff size={18} /> : <FiMic size={18} />}
          </button>
          
          <button className="p-3 rounded-full bg-neutral-200 text-neutral-700 hover:bg-neutral-300">
            <FiVolume2 size={18} />
          </button>
        </div>
        
        <div className="mt-2 flex justify-between text-xs text-neutral-500">
          <span>Presiona Enter para enviar, Shift+Enter para nueva línea</span>
          {isRecording && <span className="text-red-500">Grabando...</span>}
        </div>
      </div>
      
      {/* Integration placeholder for future services */}
      <div className="bg-neutral-100 p-2 text-xs text-neutral-500 text-center border-t border-neutral-200">
        Integración futura: LiveKit, Agora, Deepgram, OpenAI, Cartesia
      </div>
    </div>
  );
};

export default ChatWindow; 