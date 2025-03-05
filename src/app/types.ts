export type ComponentType = 'text' | 'image' | 'button' | 'slider' | 'form';

export interface CanvasComponent {
  id: string;
  type: ComponentType;
  content: string;
  position: { x: number; y: number };
}