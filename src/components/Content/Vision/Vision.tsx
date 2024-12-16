import React from 'react';
import ContentSection from '../ContentSection';
import VisionSection from './VisionSection';
import MissionSection from './MissionSection';

export default function Vision() {
  return (
    <ContentSection title="Vision and Mission">
      <div className="space-y-8">
        <VisionSection />
        <MissionSection />
      </div>
    </ContentSection>
  );
}