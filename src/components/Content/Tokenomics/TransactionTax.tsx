import React from 'react';
import { TRANSACTION_FEATURES } from './constants';

export default function TransactionTax() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#A3FF21]/90">Transaction Tax</h3>
      {TRANSACTION_FEATURES.map((feature, index) => (
        <div 
          key={index}
          className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10"
        >
          <h4 className="font-medium mb-2">{feature.title}</h4>
          <p className="text-white/80 mb-4">{feature.description}</p>
          <ul className="list-disc list-inside space-y-2">
            {feature.subFeatures.map((subFeature, subIndex) => (
              <li key={subIndex} className="text-white/80">{subFeature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}