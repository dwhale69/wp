import React from 'react';
import ContentSection from '../ContentSection';
import TokenDetails from './TokenDetails';
import Distribution from './Distribution';
import TransactionTax from './TransactionTax';

export default function Tokenomics() {
  return (
    <ContentSection title="Tokenomics">
      <div className="space-y-8">
        <TokenDetails />
        <Distribution />
        <TransactionTax />
      </div>
    </ContentSection>
  );
}