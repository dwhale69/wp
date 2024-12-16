import React from 'react';

interface SectionTitleProps {
  number: number;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <h3 className="text-xl font-semibold text-[#A3FF21]/90">
      {number}. {title}
    </h3>
  );
}