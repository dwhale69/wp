import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { PRIVACY_POINTS } from '../constants';

export default function PrivacySecurity() {
  return (
    <div className="space-y-4">
      <SectionTitle number={7} title="Privacy and Security" />
      <p className="text-white/80">
        AgentZero is built with privacy at its core:
      </p>
      <ul className="list-none space-y-3">
        {PRIVACY_POINTS.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-[#A3FF21] mt-1">•</span>
            <span className="text-white/80">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}