import React from 'react';

export default function Logo() {
  return (
    <div className="relative w-32 h-32 animate-pulse">
      <img
        src="/agent.png"
        alt="AgentZero Logo"
        className="w-full h-full object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#151516] to-transparent opacity-20" />
    </div>
  );
}