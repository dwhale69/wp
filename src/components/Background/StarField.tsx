import React, { useEffect, useRef } from 'react';
import { useStarField } from './useStarField';

export default function StarField() {
  const canvasRef = useStarField({
    starCount: 150,
    baseColor: 'rgba(163, 255, 33',
    opacityMultiplier: 0.5
  });

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}