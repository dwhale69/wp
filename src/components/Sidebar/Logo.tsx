import React from 'react';
import AgentZeroLogo from '../UI/Logo/AgentZeroLogo';

export default function Logo() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <AgentZeroLogo className="w-8 h-8" />
      <h1 className="text-xl font-bold">AgentZero</h1>
    </div>
  );
}