import React from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function FeedbackOptimization() {
  return (
    <div className="space-y-4">
      <SectionTitle number={6} title="Feedback and Optimization" />
      <p className="text-white/80">
        AgentZero's AI agents continuously learn from outcomes, adapting strategies to market 
        conditions and improving decision-making over time. Users can monitor performance and 
        make real-time adjustments through an intuitive dashboard.
      </p>
    </div>
  );
}