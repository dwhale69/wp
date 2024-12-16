import React from 'react';
import MobileMenuButton from './MobileMenuButton';
import Logo from './Logo';
import Navigation from './Navigation';
import type { SidebarProps } from '../../types';

export default function Sidebar({ isOpen, setIsOpen, activeSection, setActiveSection }: SidebarProps) {
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <>
      <MobileMenuButton 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />

      <div
        className={`fixed top-0 left-0 h-full bg-[#151516] text-white w-64 transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="p-6">
          <Logo />
          <Navigation 
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </div>
      </div>
    </>
  );
}