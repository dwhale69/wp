export const SECTIONS = {
  introduction: 'introduction',
  vision: 'vision',
  market: 'market',
  howItWorks: 'how-it-works',
  ecosystem: 'ecosystem',
  aiAgents: 'ai-agents',
  tokenomics: 'tokenomics',
  deflationary: 'deflationary',
  business: 'business',
} as const;

export const NAVIGATION_ITEMS = [
  { id: SECTIONS.introduction, title: '1. Introduction' },
  { id: SECTIONS.vision, title: '2. Vision and Mission' },
  { id: SECTIONS.market, title: '3. Market Overview' },
  { id: SECTIONS.howItWorks, title: '4. How it works?' },
  { id: SECTIONS.ecosystem, title: '5. The Ecosystem' },
  { id: SECTIONS.aiAgents, title: '6. How AI Agents work?' },
  { id: SECTIONS.tokenomics, title: '7. Tokenomics' },
  { id: SECTIONS.deflationary, title: '8. Deflationary Ecosystem' },
  { id: SECTIONS.business, title: '9. Business Model' },
] as const;