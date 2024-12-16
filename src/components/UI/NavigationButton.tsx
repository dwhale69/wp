import React from 'react';

interface NavigationButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function NavigationButton({ isActive, onClick, children }: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
        ${isActive ? 'bg-[#A3FF21] text-[#151516] font-medium' : 'hover:bg-white/10'}`}
    >
      {children}
    </button>
  );
}