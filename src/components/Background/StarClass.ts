import type { Star } from './types';

export class StarImpl implements Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  pulseSpeed: number;
  private canvasWidth: number;
  private canvasHeight: number;
  private baseColor: string;
  private opacityMultiplier: number;

  constructor(canvasWidth: number, canvasHeight: number, baseColor: string, opacityMultiplier: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.baseColor = baseColor;
    this.opacityMultiplier = opacityMultiplier;
    
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 2;
    this.opacity = Math.random();
    this.speed = 0.1 + Math.random() * 0.2;
    this.pulseSpeed = 0.02 + Math.random() * 0.02;
  }

  update(): void {
    this.opacity += Math.sin(Date.now() * this.pulseSpeed) * 0.02;
    this.opacity = Math.max(0, Math.min(1, this.opacity));
    this.y += this.speed;
    if (this.y > this.canvasHeight) {
      this.y = 0;
      this.x = Math.random() * this.canvasWidth;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `${this.baseColor}, ${this.opacity * this.opacityMultiplier})`;
    ctx.fill();
  }
}