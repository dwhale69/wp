import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { EXECUTION_FEATURES } from '../constants';

export default function OrderExecution() {
  return (
    <div className="space-y-4">
      <SectionTitle number={5} title="Order Execution" />
      <p className="text-white/80">
        The agents execute these decisions through the user's connected wallet, ensuring seamless 
        interaction with DeFi protocols. Key aspects include:
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {EXECUTION_FEATURES.map((feature, index) => (
          <div key={index} className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-[#A3FF21]/90 mb-2">{feature.title}</h4>
            <p className="text-white/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}