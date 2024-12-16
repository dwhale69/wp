import React from 'react';
import ContentSection from '../ContentSection';
import BusinessFeatures from './BusinessFeatures';

export default function Business() {
  return (
    <ContentSection title="Business Model">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          AgentZero's revenue model includes:
        </p>
        <BusinessFeatures />
        <p className="text-lg leading-relaxed">
          By aligning our revenue streams with user incentives, AgentZero ensures a sustainable and 
          community-driven growth trajectory. The business model emphasizes transparency, innovation, 
          and user-centric development.
        </p>
      </div>
    </ContentSection>
  );
}