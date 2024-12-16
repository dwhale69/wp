export interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  pulseSpeed: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export interface StarFieldConfig {
  starCount: number;
  baseColor: string;
  opacityMultiplier: number;
}