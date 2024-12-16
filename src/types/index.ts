// Common types used across components
export interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export interface AgentTypeProps {
  title: string;
  description: string;
}

export interface SectionProps {
  activeSection: string;
}

export interface Feature {
  title: string;
  description: string;
}