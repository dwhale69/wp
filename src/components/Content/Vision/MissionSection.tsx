import React from 'react';

const missionPoints = [
  "Empower users with accessible and secure AI-driven tools for wealth management.",
  "Provide a fully decentralized and privacy-centric ecosystem for financial autonomy.",
  "Enable seamless interaction with DeFi markets to maximize users' financial potential.",
  "Foster a global community of users who value privacy, transparency, and innovation.",
  "Drive adoption of AI and blockchain technologies for mainstream financial applications."
] as const;

export default function MissionSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#A3FF21]/90">Mission</h3>
      <ul className="list-disc list-inside space-y-2">
        {missionPoints.map((point, index) => (
          <li key={index} className="text-white/80">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}