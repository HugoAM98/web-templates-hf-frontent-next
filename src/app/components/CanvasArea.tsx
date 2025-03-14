'use client';

import { useDrop } from 'react-dnd';
import useStore from './../store';
import { ComponentType, CanvasComponent } from './../types'; // Asegúrate de importar los tipos correctos
import { useState, useEffect } from 'react';
import PaymentModal from './../components/PaymentModal';

interface CanvasAreaProps {
  template?: {
    components: CanvasComponent[]; // Asegúrate de que la plantilla tenga un array de componentes
  };
}

const CanvasArea = ({ template }: CanvasAreaProps) => {
  const { components, addComponent, setComponents } = useStore(); // Añade setComponents al store
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [pendingComponent, setPendingComponent] = useState<CanvasComponent | null>(null);

  // Efecto para cargar los componentes de la plantilla al inicio
  useEffect(() => {
    if (template && template.components) {
      setComponents(template.components); // Carga los componentes de la plantilla en el estado global
    }
  }, [template, setComponents]);

  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item: { type: ComponentType }) => {
      const newComponent = {
        id: Date.now().toString(),
        type: item.type,
        content: 'Nuevo componente',
        position: { x: 50, y: 50 + components.length * 60 },
      };

      if (item.type === 'slider' || item.type === 'form') {
        setPendingComponent(newComponent);
        setShowPaymentModal(true);
      } else {
        addComponent(newComponent);
      }
    },
  }));

  const handlePaymentConfirm = () => {
    if (pendingComponent) {
      addComponent(pendingComponent);
      setShowPaymentModal(false);
    }
  };

  return (
    <div
      ref={drop}
      className="flex-1 p-8 bg-white"
      style={{ background: 'linear-gradient(90deg, #f0f0f0 1px, transparent 0), linear-gradient(#f0f0f0 1px, transparent 0)', backgroundSize: '20px 20px' }}
    >
      {components.map((component) => (
        <div
          key={component.id}
          className="absolute p-4 border-2 border-dashed border-blue-200 bg-white"
          style={{ left: component.position.x, top: component.position.y }}
        >
          {component.content}
        </div>
      ))}
      {showPaymentModal && (
        <PaymentModal
          onClose={() => setShowPaymentModal(false)}
          onConfirm={handlePaymentConfirm}
        />
      )}
    </div>
  );
};

export default CanvasArea;