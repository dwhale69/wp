import React from 'react';
import ContentSection from '../ContentSection';
import DeflationaryFeatures from './DeflationaryFeatures';

export default function Deflationary() {
  return (
    <ContentSection title="Deflationary Ecosystem">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          AgentZero employs a deflationary model to enhance token value:
        </p>
        <DeflationaryFeatures />
      </div>
    </ContentSection>
  );
}