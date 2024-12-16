import React from 'react';
import { CHALLENGES } from './constants';

export default function Challenges() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#A3FF21]/90">Challenges</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {CHALLENGES.map((challenge, index) => (
          <div key={index} className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium mb-2">{challenge.title}</h4>
            <p className="text-white/80">{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}