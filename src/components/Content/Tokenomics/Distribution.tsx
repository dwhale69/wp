import React from 'react';
import { ALLOCATION_FEATURES } from './constants';

export default function Distribution() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#A3FF21]/90">Distribution</h3>
      <div className="grid gap-4">
        {ALLOCATION_FEATURES.map((feature, index) => (
          <div 
            key={index}
            className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{feature.title}</h4>
              <span className="text-[#A3FF21]">{feature.percentage}%</span>
            </div>
            <p className="text-white/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}