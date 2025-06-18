
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-pastel relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      
      <div className="h-screen">
        <ChatInterface />
      </div>
    </div>
  );
};

export default Index;
