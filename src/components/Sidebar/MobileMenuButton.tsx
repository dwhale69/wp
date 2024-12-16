import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-[#151516] text-[#A3FF21] hover:bg-[#151516]/80 transition-colors duration-200"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}