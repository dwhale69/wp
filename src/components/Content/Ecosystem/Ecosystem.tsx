import React from 'react';
import ContentSection from '../ContentSection';
import EcosystemFeatures from './EcosystemFeatures';

export default function Ecosystem() {
  return (
    <ContentSection title="The Ecosystem">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          The AgentZero ecosystem is designed to provide a comprehensive suite of tools and features 
          that cater to diverse user needs:
        </p>
        <EcosystemFeatures />
      </div>
    </ContentSection>
  );
}