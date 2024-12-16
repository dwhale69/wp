import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { DUE_DILIGENCE_POINTS } from '../constants';

export default function DueDiligence() {
  return (
    <div className="space-y-4">
      <SectionTitle number={3} title="Due Diligence and Decision-Making" />
      <p className="text-white/80">
        After collecting data, the agents perform in-depth research, applying AI-driven algorithms 
        to evaluate the credibility, risks, and potential returns of the identified opportunities.
      </p>
      <ul className="list-none space-y-3">
        {DUE_DILIGENCE_POINTS.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-[#A3FF21] mt-1">•</span>
            <span className="text-white/80">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}