import React from 'react';
import type { Feature } from '../../types';

interface FeatureCardProps extends Feature {}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
      <h3 className="text-lg font-semibold text-[#A3FF21]/90 mb-3">
        {title}
      </h3>
      <p className="text-white/80">
        {description}
      </p>
    </div>
  );
}