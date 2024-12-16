import React from 'react';
import ContentSection from '../ContentSection';
import Challenges from './Challenges';
import Opportunities from './Opportunities';

export default function Market() {
  return (
    <ContentSection title="Market Overview">
      <div className="space-y-8">
        <p>
          The global DeFi market has witnessed explosive growth, with billions of dollars 
          locked in decentralized protocols. However, users face challenges such as:
        </p>
        <Challenges />
        <Opportunities />
      </div>
    </ContentSection>
  );
}