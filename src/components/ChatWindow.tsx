
import React, { useState } from 'react';
import MessageInput from './MessageInput';
import { Bot, User as UserIcon, MoreVertical } from 'lucide-react';

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
      {/* Enhanced Header with right placeholder icon */}
      <div className="bg-white/30 backdrop-blur-sm border-b border-white/20 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-pastel-orange to-pastel-yellow flex items-center justify-center hover:scale-105 transition-all duration-200">
              <Bot className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-gray-800">AI Assistant</h1>
              <p className="text-xs md:text-sm text-gray-600">Always here to help</p>
            </div>
          </div>
          
          {/* Circular placeholder icon on the right */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-purple flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer">
            <MoreVertical className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 md:gap-4 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender === 'bot' && (
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-pastel-orange to-pastel-yellow flex items-center justify-center flex-shrink-0 hover:scale-105 transition-all duration-200">
                <Bot className="h-3 w-3 md:h-4 md:w-4 text-gray-700" />
              </div>
            )}
            
            <div
              className={`max-w-[280px] sm:max-w-xs lg:max-w-md px-3 md:px-4 py-2 md:py-3 rounded-2xl hover:shadow-lg transition-all duration-200 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-pastel-purple to-pastel-pink text-gray-800 shadow-lg hover:scale-[1.02]'
                  : 'bg-white/50 backdrop-blur-sm text-gray-800 shadow-md hover:bg-white/60'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
            </div>

            {message.sender === 'user' && (
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-pastel-blue to-pastel-green flex items-center justify-center flex-shrink-0 hover:scale-105 transition-all duration-200">
                <UserIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-700" />
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
