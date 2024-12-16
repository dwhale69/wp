export const TOKEN_DETAILS = {
  name: 'AgentZero AI',
  ticker: 'AGZRO',
  totalSupply: '100,000,000 AGZRO',
} as const;

export const ALLOCATION_FEATURES = [
  {
    title: 'Foundation Allocation',
    description: '10% allocated to the foundation for long-term development and ecosystem growth.',
    percentage: 10
  }
] as const;

export const TRANSACTION_FEATURES = [
  {
    title: 'Transaction Tax',
    description: 'A 5% tax applies to all buy and sell transactions, distributed to:',
    subFeatures: [
      'Team Development',
      'Marketing Initiatives',
      'Platform Enhancements'
    ]
  }
] as const;