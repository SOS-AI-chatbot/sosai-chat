
import React, { useState } from 'react';
import MessageInput from './MessageInput';
import { Bot, User as UserIcon } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome back! Your AI assistant is ready to help. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your message! I'm here to help you with whatever you need. Feel free to ask me anything.",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Header */}
      <div className="bg-white/30 backdrop-blur-sm border-b border-white/20 p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pastel-orange to-pastel-yellow flex items-center justify-center">
            <Bot className="h-6 w-6 text-gray-700" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">AI Assistant</h1>
            <p className="text-sm text-gray-600">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-4 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pastel-orange to-pastel-yellow flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-gray-700" />
              </div>
            )}
            
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-pastel-purple to-pastel-pink text-gray-800 shadow-lg'
                  : 'bg-white/50 backdrop-blur-sm text-gray-800 shadow-md'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
            </div>

            {message.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pastel-blue to-pastel-green flex items-center justify-center flex-shrink-0">
                <UserIcon className="h-4 w-4 text-gray-700" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
