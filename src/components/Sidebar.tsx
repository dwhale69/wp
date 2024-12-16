import React from 'react';
import { Menu, X, Bot } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'vision', title: '2. Vision and Mission' },
  { id: 'market', title: '3. Market Overview' },
  { id: 'how-it-works', title: '4. How it works?' },
  { id: 'ecosystem', title: '5. The Ecosystem' },
  { id: 'ai-agents', title: '6. How AI Agents work?' },
  { id: 'tokenomics', title: '7. Tokenomics' },
  { id: 'deflationary', title: '8. Deflationary Ecosystem' },
  { id: 'business', title: '9. Business Model' },
];

export default function Sidebar({ isOpen, setIsOpen, activeSection, setActiveSection }: SidebarProps) {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-[#151516] text-[#A3FF21] hover:bg-[#151516]/80 transition-colors duration-200"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#151516] text-white w-64 transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <Bot size={32} className="text-[#A3FF21]" />
            <h1 className="text-xl font-bold">AgentZero</h1>
          </div>

          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                  ${activeSection === section.id ? 'bg-[#A3FF21] text-[#151516] font-medium' : 'hover:bg-white/10'}`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}