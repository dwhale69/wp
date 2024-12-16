import React from 'react';
import ContentSection from '../ContentSection';
import CustomAgents from './sections/CustomAgents';
import ResearchAnalysis from './sections/ResearchAnalysis';
import DueDiligence from './sections/DueDiligence';
import DecisionGeneration from './sections/DecisionGeneration';
import OrderExecution from './sections/OrderExecution';
import FeedbackOptimization from './sections/FeedbackOptimization';
import PrivacySecurity from './sections/PrivacySecurity';

export default function HowItWorks() {
  return (
    <ContentSection title="How AgentZero Protocol Works">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          AgentZero operates as a decentralized, AI-powered protocol designed to empower users 
          with customized wealth management agents. Here's a step-by-step explanation of how 
          the protocol functions:
        </p>
        <CustomAgents />
        <ResearchAnalysis />
        <DueDiligence />
        <DecisionGeneration />
        <OrderExecution />
        <FeedbackOptimization />
        <PrivacySecurity />
      </div>
    </ContentSection>
  );
}