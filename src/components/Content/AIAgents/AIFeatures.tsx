import React from 'react';
import { AI_FEATURES } from './constants';

export default function AIFeatures() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {AI_FEATURES.map((feature, index) => (
        <div 
          key={index}
          className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold text-[#A3FF21]/90 mb-3">
            {feature.title}
          </h3>
          <p className="text-white/80">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}