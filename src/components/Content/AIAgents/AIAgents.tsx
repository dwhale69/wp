import React from 'react';
import ContentSection from '../ContentSection';
import AIFeatures from './AIFeatures';

export default function AIAgents() {
  return (
    <ContentSection title="How AI Agents Work?">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          AgentZero's AI agents are designed to simplify wealth management by:
        </p>
        <AIFeatures />
      </div>
    </ContentSection>
  );
}