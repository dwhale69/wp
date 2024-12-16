import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { DECISION_POINTS } from '../constants';

export default function DecisionGeneration() {
  return (
    <div className="space-y-4">
      <SectionTitle number={4} title="Generating Decisions" />
      <p className="text-white/80">
        Based on their research, the agents generate actionable decisions, such as:
      </p>
      <ul className="list-none space-y-3">
        {DECISION_POINTS.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-[#A3FF21] mt-1">•</span>
            <span className="text-white/80">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}