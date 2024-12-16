import { useEffect, useRef } from 'react';
import { StarImpl } from './StarClass';
import type { StarFieldConfig } from './types';

export function useStarField(config: StarFieldConfig) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = '#151516';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    updateCanvasSize();

    const createStars = () => {
      return Array.from({ length: config.starCount }, () => 
        new StarImpl(canvas.width, canvas.height, config.baseColor, config.opacityMultiplier)
      );
    };

    let stars = createStars();

    const animate = () => {
      ctx.fillStyle = 'rgba(21, 21, 22, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      updateCanvasSize();
      stars = createStars();
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [config]);

  return canvasRef;
}