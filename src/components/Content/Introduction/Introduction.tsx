import React from 'react';
import ContentSection from '../ContentSection';

export default function Introduction() {
  return (
    <ContentSection title="Introduction">
      <div className="space-y-6">
        <p>
          AgentZero is a groundbreaking platform at the intersection of blockchain, artificial intelligence, 
          and decentralized finance (DeFi). Our mission is to empower individuals with private, secure, 
          and AI-driven wealth management tools. By leveraging the power of Ethereum blockchain and 
          cutting-edge AI technology, AgentZero enables users to deploy personalized AI agents to manage 
          their assets, trade in DeFi markets, and seize financial opportunities while maintaining 
          privacy and control.
        </p>
        <p>
          As decentralized finance becomes increasingly prominent, the need for efficient and private 
          wealth management solutions grows. AgentZero addresses this demand by combining advanced AI 
          capabilities with blockchain transparency. It offers a user-centric platform where financial 
          autonomy and privacy converge, setting a new standard for DeFi innovation.
        </p>
      </div>
    </ContentSection>
  );
}