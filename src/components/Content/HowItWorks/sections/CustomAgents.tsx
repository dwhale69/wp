import React from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function CustomAgents() {
  return (
    <div className="space-y-4">
      <SectionTitle number={1} title="User-Created Custom Agents" />
      <p className="text-white/80">
        AgentZero allows users to create personalized AI agents that align with their specific 
        financial goals. These agents are tailored to user-defined parameters, including preferred 
        trading strategies, risk levels, and target data sources.
      </p>
    </div>
  );
}