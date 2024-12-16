import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import StarField from './components/Background/StarField';
import PageLoader from './components/UI/PageLoader';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <>
      <PageLoader />
      <div className="relative min-h-screen bg-[#151516] text-white overflow-x-hidden">
        <StarField />
        
        <div className="relative z-10">
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          
          {/* Main content */}
          <div className="lg:ml-64 relative">
            <Content activeSection={activeSection} />
          </div>

          {/* Overlay for mobile */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;