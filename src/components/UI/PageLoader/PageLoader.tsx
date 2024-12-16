import React from 'react';
import Logo from './Logo';
import Title from './Title';
import ReadButton from './ReadButton';

export default function PageLoader() {
  return (
    <div id="page-loader" className="fixed inset-0 bg-[#151516] flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-8">
        <Logo />
        <Title />
        <ReadButton />
      </div>
    </div>
  );
}