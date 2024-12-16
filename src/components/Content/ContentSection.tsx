import React from 'react';
import ContentBox from '../UI/ContentBox';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <ContentBox>
      <h2 className="text-2xl font-bold mb-6 text-[#A3FF21]/90">{title}</h2>
      <div className="text-lg leading-relaxed text-white/80">
        {children}
      </div>
    </ContentBox>
  );
}