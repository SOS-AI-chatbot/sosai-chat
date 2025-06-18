
import React from 'react';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';

const ChatInterface = () => {
  return (
    <div className="flex h-screen relative z-10">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default ChatInterface;
