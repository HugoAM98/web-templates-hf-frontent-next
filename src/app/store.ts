import { create } from 'zustand';

export type ComponentType = 'text' | 'image' | 'button';

export interface CanvasComponent {
  id: string;
  type: ComponentType;
  content: string;
  position: { x: number; y: number };
}

interface EditorState {
  components: CanvasComponent[];
  addComponent: (component: CanvasComponent) => void;
}

const useStore = create<EditorState>((set) => ({
  components: [],
  addComponent: (component) => 
    set((state) => ({ components: [...state.components, component] })),
}));

export default useStore;