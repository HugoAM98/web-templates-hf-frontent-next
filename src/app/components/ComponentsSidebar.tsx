'use client';

import { 
  FiType, FiImage, FiLayout, 
  FiMenu, FiSquare, FiColumns,
  FiFilm, FiSliders, FiGrid,
  FiShoppingCart, FiHeadphones, FiMail,
  FiMapPin, FiClock, FiUser,
  FiX, FiCheckSquare, FiAperture
} from 'react-icons/fi';

const ComponentCard = ({ icon: Icon, name, description }) => {
  return (
    <div 
      className="p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-move mb-3 group relative"
      draggable="true"
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-50 rounded-md text-blue-600">
          <Icon size={18} />
        </div>
        <span className="font-medium text-sm">{name}</span>
      </div>
      <div className="absolute left-0 -top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {description}
      </div>
    </div>
  );
};

const ComponentsSidebar = ({ onClose }) => {
  const components = [
    { icon: FiType, name: "Texto", description: "Bloque de texto editable" },
    { icon: FiImage, name: "Imagen", description: "Imagen con ajustes" },
    { icon: FiLayout, name: "Sección", description: "Contenedor para agrupar elementos" },
    { icon: FiMenu, name: "Menú", description: "Navegación principal" },
    { icon: FiCheckSquare, name: "Botón", description: "Botón clickeable" },
    { icon: FiColumns, name: "Columnas", description: "Diseño en columnas" },
    { icon: FiFilm, name: "Carrusel", description: "Galería deslizable" },
    { icon: FiSliders, name: "Banner", description: "Banner promocional" },
    { icon: FiGrid, name: "Grid", description: "Cuadrícula de productos" },
    { icon: FiShoppingCart, name: "Tienda", description: "Componente de e-commerce" },
    { icon: FiHeadphones, name: "Contacto", description: "Formulario de contacto" },
    { icon: FiMail, name: "Newsletter", description: "Suscripción por email" },
    { icon: FiMapPin, name: "Mapa", description: "Google Maps integrado" },
    { icon: FiClock, name: "Countdown", description: "Temporizador" },
    { icon: FiUser, name: "Testimonio", description: "Opiniones de clientes" },
    { icon: FiAperture, name: "Icono", description: "Ícono personalizable" }
  ];

    return (
      <div className="h-full bg-white border-r border-gray-200 flex flex-col w-64">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-semibold text-lg">Componentes</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={20} />
          </button>
        </div>
      
      {/* Search */}
      <div className="p-3 border-b border-gray-200">
        <input 
          type="text" 
          placeholder="Buscar componentes..."
          className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
      
      {/* Categories */}
      <div className="p-3 border-b border-gray-200">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {['Todos', 'Básicos', 'E-commerce', 'Formularios', 'Medios'].map(cat => (
            <button 
              key={cat}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs whitespace-nowrap hover:bg-gray-200"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* Components List */}
      <div className="flex-1 p-3 space-y-2 overflow-y-auto">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Elementos básicos</h3>
        {components.slice(0, 8).map((comp, i) => (
          <ComponentCard key={i} {...comp} />
        ))}
        
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4 mb-2">Componentes avanzados</h3>
        {components.slice(8).map((comp, i) => (
          <ComponentCard key={i+8} {...comp} />
        ))}
      </div>
      
      {/* Footer */}
      <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500">
        Arrastra los componentes al área de trabajo
      </div>
    </div>
  );
};

export default ComponentsSidebar;