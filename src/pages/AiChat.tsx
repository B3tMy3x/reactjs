import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const STORAGE_KEY = 'chat_messages';

const initialMessage: Message = {
  id: '1',
  text: "Здравствуйте! Я ваш ИИ-помощник по путешествиям. Как я могу помочь вам сегодня?",
  sender: 'bot',
  timestamp: new Date()
};

export function AiChat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsedMessages = JSON.parse(stored);
      return parsedMessages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
    }
    return [initialMessage];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: "Я понимаю, что вы спрашиваете о путешествии. Позвольте мне помочь вам!",
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setMessage('');
  };

  return (
    <div className="fixed inset-0 bg-[#17212b] flex flex-col">
      <div className="bg-[#1c2a3a] p-4 flex items-center space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">ИИ-помощник</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.sender === 'user'
                  ? 'bg-[#5ebbf6] text-white'
                  : 'bg-[#1c2a3a] text-white'
              }`}
            >
              {msg.text}
              <div className="text-xs opacity-70 mt-1">
                {msg.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-[#1c2a3a]">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Задайте вопрос о ваших поездках..."
            className="flex-1 bg-[#243447] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5ebbf6]"
          />
          <button
            type="submit"
            className="bg-[#5ebbf6] text-white p-3 rounded-lg hover:bg-[#4da8e4] transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AiChat;