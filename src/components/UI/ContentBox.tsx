import React from 'react';

interface ContentBoxProps {
  children: React.ReactNode;
}

export default function ContentBox({ children }: ContentBoxProps) {
  return (
    <div className="relative">
      <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-white/10">
        {children}
      </div>
    </div>
  );
}