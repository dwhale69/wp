import React from 'react';

export default function ReadButton() {
  return (
    <button 
      className="px-8 py-3 bg-[#A3FF21] text-[#151516] rounded-lg font-semibold 
        transform transition-all duration-200 hover:scale-105 hover:bg-[#A3FF21]/90
        focus:outline-none focus:ring-2 focus:ring-[#A3FF21]/50 focus:ring-offset-2 focus:ring-offset-[#151516]"
      onClick={() => {
        const loader = document.getElementById('page-loader');
        if (loader) {
          loader.classList.add('fade-out');
          setTimeout(() => {
            loader.style.display = 'none';
          }, 500);
        }
      }}
    >
      Read Whitepaper
    </button>
  );
}