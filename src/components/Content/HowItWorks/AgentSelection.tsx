import React from 'react';

interface AgentTypeProps {
  title: string;
  description: string;
}

function AgentType({ title, description }: AgentTypeProps) {
  return (
    <div className="ml-4 mb-4">
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-white/80">{description}</p>
    </div>
  );
}

export default function AgentSelection() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#A3FF21]/90">AI Agent Selection</h3>
      
      <AgentType
        title="Standard Agent"
        description="Pre-configured AI for automated trading based on TradingView tools. This option is ideal for users seeking simplicity and reliability."
      />
      
      <AgentType
        title="Custom Agent"
        description="User-defined AI agents that gather data from platforms like Telegram to identify early opportunities. Custom agents allow advanced users to fine-tune their strategies and gain a competitive edge."
      />
    </div>
  );
}