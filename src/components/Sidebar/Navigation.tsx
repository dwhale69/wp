import React from 'react';
import { NAVIGATION_ITEMS } from '../../constants/sections';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="space-y-2">
      {NAVIGATION_ITEMS.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
            ${activeSection === section.id 
              ? 'bg-[#A3FF21] text-[#151516] font-medium' 
              : 'hover:bg-white/10'
            }`}
        >
          {section.title}
        </button>
      ))}
    </nav>
  );
}