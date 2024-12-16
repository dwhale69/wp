import React from 'react';

interface AgentZeroLogoProps {
  className?: string;
}

export default function AgentZeroLogo({ className = "w-8 h-8" }: AgentZeroLogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="AgentZero Logo"
      className={`${className} animate-pulse`}
    />
  );
}