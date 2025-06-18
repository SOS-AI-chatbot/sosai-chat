
import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatInterface = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative z-10">
      {/* Mobile sidebar overlay */}
      <div className="lg:hidden">
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setSidebarOpen(false)}
            />
            
            {/* Mobile sidebar */}
            <div className="fixed left-0 top-0 h-full w-80 z-50 animate-slide-in-right">
              <div className="relative h-full">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-4 right-4 z-10 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-200"
                >
                  <X className="h-4 w-4" />
                </Button>
                <ChatSidebar />
              </div>
            </div>
          </>
        )}
        
        {/* Mobile menu button */}
        {!sidebarOpen && (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setSidebarOpen(true)}
            className="fixed top-4 left-4 z-30 rounded-full bg-white/50 hover:bg-white/70 hover:scale-105 transition-all duration-200 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <ChatSidebar />
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatInterface;
