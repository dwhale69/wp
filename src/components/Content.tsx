import React from 'react';
import { sections } from './Content/sections';

interface ContentProps {
  activeSection: string;
}

export default function Content({ activeSection }: ContentProps) {
  return (
    <div className="p-8 lg:p-12 space-y-8">
      {sections[activeSection as keyof typeof sections]}
    </div>
  );
}