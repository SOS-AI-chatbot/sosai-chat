
import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="p-6 bg-white/30 backdrop-blur-sm border-t border-white/20">
      <form onSubmit={handleSubmit} className="flex gap-4 items-end">
        <div className="flex-1 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30 p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <Button 
              type="button" 
              size="icon" 
              variant="ghost" 
              className="rounded-full hover:bg-white/50 transition-all duration-200"
            >
              <Paperclip className="h-4 w-4 text-gray-600" />
            </Button>
            
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 border-none bg-transparent focus:ring-0 focus:outline-none text-gray-800 placeholder-gray-500"
            />
            
            <Button 
              type="button" 
              size="icon" 
              variant="ghost" 
              className="rounded-full hover:bg-white/50 transition-all duration-200"
            >
              <Smile className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
        </div>
        
        <Button 
          type="submit" 
          size="icon" 
          className="rounded-full bg-gradient-to-r from-pastel-orange to-pastel-yellow hover:scale-105 transition-all duration-200 shadow-lg h-12 w-12"
          disabled={!message.trim()}
        >
          <Send className="h-5 w-5 text-gray-700" />
        </Button>
      </form>
    </div>
  );
};

export default MessageInput;
