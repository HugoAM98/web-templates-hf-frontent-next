'use client';

import { useDrag } from 'react-dnd';
import { ComponentType } from './../types';

const DraggableComponent = ({ type, name }: { type: ComponentType; name: string }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 mb-2 bg-white rounded-lg cursor-move shadow-sm ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {name}
    </div>
  );
};

const Sidebar = () => {
    return (
      <div className="w-64 p-4 bg-white border-r">
        <h2 className="mb-4 text-lg font-semibold">Componentes</h2>
        <DraggableComponent type="text" name="Texto" />
        <DraggableComponent type="image" name="Imagen" />
        <DraggableComponent type="button" name="Botón" />
        <DraggableComponent type="slider" name="Slider Premium" />
        <DraggableComponent type="form" name="Formulario Premium" />
      </div>
    );
  };

export default Sidebar;