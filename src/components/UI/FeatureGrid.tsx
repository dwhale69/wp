import React from 'react';
import FeatureCard from './FeatureCard';
import type { Feature } from '../../types';

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

export default function FeatureGrid({ features, columns = 2 }: FeatureGridProps) {
  return (
    <div className={`grid gap-6 md:grid-cols-${columns}`}>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}