import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { RESEARCH_SOURCES } from '../constants';

export default function ResearchAnalysis() {
  return (
    <div className="space-y-4">
      <SectionTitle number={2} title="Research and Analysis" />
      <p className="text-white/80">
        Once deployed, the agents actively gather and analyze data from multiple sources, including:
      </p>
      <ul className="list-none space-y-3">
        {RESEARCH_SOURCES.map((source, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-[#A3FF21] mt-1">•</span>
            <div>
              <span className="font-medium text-[#A3FF21]/90">{source.title}:</span>
              <span className="text-white/80"> {source.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}