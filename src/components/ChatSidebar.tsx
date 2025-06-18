
import React, { useState } from 'react';
import { MessageCircle, Search, User, Settings, Plus, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ExpandedSection = 'search' | 'profile' | 'settings' | null;

const ChatSidebar = () => {
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>(null);

  const chatHistory = [
    { id: 1, title: "Welcome conversation", time: "2 hours ago", active: true },
    { id: 2, title: "How to get started", time: "1 day ago", active: false },
    { id: 3, title: "Project planning", time: "3 days ago", active: false },
    { id: 4, title: "Design feedback", time: "1 week ago", active: false },
    { id: 5, title: "Technical support", time: "2 weeks ago", active: false },
  ];

  const handleActionClick = (section: ExpandedSection) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const actionButtons = [
    { id: 'search', icon: Search, label: 'Search', gradient: 'from-pastel-purple to-pastel-pink' },
    { id: 'profile', icon: User, label: 'Profile', gradient: 'from-pastel-orange to-pastel-yellow' },
    { id: 'settings', icon: Settings, label: 'Settings', gradient: 'from-pastel-blue to-pastel-green' },
  ];

  return (
    <div className="w-80 bg-white/30 backdrop-blur-sm border-r border-white/20 h-full flex flex-col md:w-80 sm:w-64">
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Chat History</h2>
          <Button 
            size="icon" 
            variant="ghost" 
            className="rounded-full bg-white/50 hover:bg-white/70 hover:scale-105 transition-all duration-200"
          >
            <Plus className="h-4 w-4 text-gray-700" />
          </Button>
        </div>
        
        {/* Action buttons section with dynamic layout */}
        <div className="flex flex-col gap-2 min-h-[120px]">
          {/* Expanded section */}
          {expandedSection && (
            <div className="bg-gradient-to-r from-white/60 to-white/40 rounded-2xl p-4 shadow-lg border border-white/30 animate-scale-in">
              <div className="flex items-center gap-3 mb-3">
                {(() => {
                  const expandedButton = actionButtons.find(btn => btn.id === expandedSection);
                  const IconComponent = expandedButton?.icon;
                  return (
                    <>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${expandedButton?.gradient} flex items-center justify-center`}>
                        {IconComponent && <IconComponent className="h-4 w-4" />}
                      </div>
                      <span className="font-medium text-gray-800">{expandedButton?.label}</span>
                    </>
                  );
                })()}
              </div>
              <div className="bg-white/40 rounded-xl p-3 min-h-[60px] flex items-center justify-center">
                <p className="text-sm text-gray-600 italic">
                  {expandedSection === 'search' && 'Search functionality coming soon...'}
                  {expandedSection === 'profile' && 'Profile settings coming soon...'}
                  {expandedSection === 'settings' && 'Settings panel coming soon...'}
                </p>
              </div>
            </div>
          )}
          
          {/* Collapsed action buttons */}
          <div className="flex gap-2">
            {actionButtons
              .filter(btn => btn.id !== expandedSection)
              .map((button) => {
                const IconComponent = button.icon;
                return (
                  <Button 
                    key={button.id}
                    size="icon" 
                    variant="ghost" 
                    onClick={() => handleActionClick(button.id as ExpandedSection)}
                    className={`rounded-full bg-gradient-to-r ${button.gradient} hover:scale-105 hover:shadow-lg transition-all duration-200 transform`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </Button>
                );
              })}
          </div>
        </div>
      </div>

      {/* Chat History List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {chatHistory.map((chat) => (
          <div
            key={chat.id}
            className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
              chat.active
                ? 'bg-gradient-to-r from-white/60 to-white/40 shadow-lg border border-white/30'
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-gray-600 mt-1 transition-colors duration-200" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 truncate">
                  {chat.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {chat.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Status Section */}
      <div className="p-4 border-t border-white/20">
        <div className="bg-gradient-to-r from-green-200/50 to-blue-200/50 rounded-2xl p-4 hover:shadow-md transition-all duration-200">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-gray-800">Always Safe</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-800">24/7 Support</span>
          </div>
          <p className="text-xs text-gray-600 mt-2 italic">
            "You're safe here."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
